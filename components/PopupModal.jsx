"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    // Confetti blast on open
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 9999,
    });

    // 5-second countdown timer
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-md transition-all duration-300 overflow-hidden">
      
      {/* --- Main Post / Image Container --- */}
      <div className="relative z-10 max-w-lg w-[90%] rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
        
        {/* Right Corner Countdown Badge */}
        <div className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-white font-bold text-sm shadow-md border border-white/30 backdrop-blur-sm">
          {timer}s
        </div>

        {/* Aapka Main Post Image */}
        <img
          src="/images/poper.png" // yahan apni offer/post image ka path dein
          alt="Special Announcement"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* --- Floating Realistic Balloons (z-30 ensures image ke UPAR se guzrein) --- */}
      <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
        
        {/* Balloon 1 - Left side slightly crossing */}
        <div className="balloon-wrapper b-1">
          <img src="/images/ballon1.png" alt="balloon" className="w-16 sm:w-20 h-auto drop-shadow-xl" />
        </div>

        {/* Balloon 2 - Center-left (Passes right over the post) */}
        <div className="balloon-wrapper b-2">
          <img src="/images/ballon2.png" alt="balloon" className="w-20 sm:w-24 h-auto drop-shadow-2xl" />
        </div>

        {/* Balloon 3 - Center-right (Passes right over the post) */}
        <div className="balloon-wrapper b-3">
          <img src="/images/ballon3.png" alt="balloon" className="w-14 sm:w-16 h-auto drop-shadow-xl" />
        </div>

        {/* Balloon 4 - Right side */}
        <div className="balloon-wrapper b-4">
          <img src="/images/ballon4.png" alt="balloon" className="w-20 sm:w-24 h-auto drop-shadow-2xl" />
        </div>

      </div>

      {/* --- Smooth Floating & Swaying Animation Styles --- */}
      <style jsx>{`
        .balloon-wrapper {
          position: absolute;
          bottom: -150px;
          animation: floatSlow 5.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Positions, Delays & Gentle Tilts for Real Look */
        .b-1 {
          left: 12%;
          animation-delay: 0s;
          transform: rotate(-6deg);
        }
        .b-2 {
          left: 32%;
          animation-delay: 0.4s;
          transform: rotate(5deg);
        }
        .b-3 {
          left: 60%;
          animation-delay: 0.2s;
          transform: rotate(-4deg);
        }
        .b-4 {
          left: 82%;
          animation-delay: 0.6s;
          transform: rotate(7deg);
        }

        @keyframes floatSlow {
          0% {
            transform: translateY(0) translateX(0) scale(0.9);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-60vh) translateX(20px) scale(1);
          }
          75% {
            transform: translateY(-85vh) translateX(-15px) scale(1.02);
          }
          100% {
            transform: translateY(-135vh) translateX(10px) scale(1.05);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}