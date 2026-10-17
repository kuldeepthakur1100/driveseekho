"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    // 1. Party Popper / Confetti Blast Effect
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 9999,
    });

    // 2. 5-Second Countdown Timer
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  if (!isOpen) return null;

  return (
    // Background Overlay with Blur
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300">
      
      {/* Floating Balloons Effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="balloon left-[15%] delay-0">🎈</span>
        <span className="balloon left-[30%] delay-500">🎈</span>
        <span className="balloon left-[70%] delay-1000">🎈</span>
        <span className="balloon left-[85%] delay-300">🎈</span>
      </div>

      {/* Main Image Container */}
      <div className="relative z-10 max-w-lg w-[90%] rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
        
        {/* Right Corner 5-Second Timer Badge */}
        <div className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white font-bold text-sm shadow-md border border-white/30 backdrop-blur-sm">
          {timer}s
        </div>

        {/* Your Image/Post */}
        <img
          src="/your-poper.png" // yahan apni image ka path de dein (public folder me rakh sakte hain)
          alt="Announcement"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* Floating Balloons Animation Style */}
      <style jsx>{`
        .balloon {
          position: absolute;
          bottom: -50px;
          font-size: 2.8rem;
          animation: floatUp 4.5s ease-in forwards;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.6s; }
        .delay-1000 { animation-delay: 1s; }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) rotate(20deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}