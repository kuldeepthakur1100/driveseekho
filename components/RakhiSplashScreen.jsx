"use client";
import { useState, useEffect } from "react";

export default function RakhiSplashScreen() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check karein ki user is session mein pehle dekh chuka hai ya nahi
    const hasSeenSplash = sessionStorage.getItem("rakhi_splash_seen");

    if (!hasSeenSplash) {
      // 1. Show after 2.5 seconds
      const showTimer = setTimeout(() => {
        setShowSplash(true);
        // sessionStorage mein mark kar dein taaki dobara na dikhe
        sessionStorage.setItem("rakhi_splash_seen", "true");
      }, 2500);

      // 2. Automatically remove after 5 seconds of appearing (Total 7.5s from load)
      const hideTimer = setTimeout(() => {
        setShowSplash(false);
      }, 7500);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-all duration-500 p-4">
      <div className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Cross Button */}
        <button
          onClick={() => setShowSplash(false)}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition-colors cursor-pointer border border-white/20"
        >
          ✕
        </button>

        {/* Festive Image */}
        <img
          src="/fullimage.png"
          alt="Raksha Bandhan Offer"
          className="w-full h-auto max-h-[85vh] object-contain mx-auto rounded-2xl"
        />
      </div>
    </div>
  );
}