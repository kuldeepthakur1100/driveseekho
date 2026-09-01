'use client';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, PhoneCall, MessageCircle, Play, Star, MapPin } from 'lucide-react';

export default function DrivingTestTrackPage() {
  return (
    <main className="max-w-7xl w-full mx-auto bg-slate-50 min-h-screen relative pb-40 lg:pb-16 selection:bg-blue-600 selection:text-white">
      
      {/* 1. Back Button & Header Bar */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40 px-4 py-4 md:px-12 flex items-center justify-between shadow-xs">
        <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold transition-all">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <span className="bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
          RTO Test Track Training
        </span>
      </div>

      {/* 2. Hero Section with Video Banner */}
      <div className="max-w-5xl mx-auto px-4 pt-6 md:pt-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-700 px-3.5 py-1.5 rounded-full text-xs font-black mb-4">
            <Star size={14} fill="currentColor" /> 100% Practical Training on Official RTO Layouts
          </div>
          <h1 className="text-[2rem] md:text-[3rem] font-black text-slate-900 leading-tight tracking-tight mb-4">
            Pass Your Driving Test in 1st Attempt Like a Professional!
          </h1>
          <p className="text-slate-600 text-[15px] md:text-[17px] font-medium leading-relaxed">
            Master the official RTO driving test tracks in Delhi NCR with our expert instructors. Overcome fear and clear your permanent license test effortlessly.
          </p>
        </div>

        {/* Video Banner */}
        <div className="relative w-full h-[240px] md:h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-300 bg-slate-900 mb-12 border border-slate-200">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/tracvideo2.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-slate-900 text-xs font-extrabold flex items-center gap-2 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span> Live Track Training View
          </div>
        </div>
      </div>

      {/* 3. Pricing & Core Offer Card (UrbanClap Style Clean UI) */}
      <div className="max-w-4xl mx-auto px-4 mb-14">
        <div className="bg-white rounded-[2.5pfx] md:rounded-[3rem] p-6 md:p-10 shadow-xl shadow-slate-200/70 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="bg-blue-600/10 text-blue-600 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Special Trial Offer</span>
            <h2 className="text-[24px] md:text-[28px] font-black text-slate-900">1-Hour RTO Track Practical Session</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-lg">
              Get trained on a specially set up practice track near your location covering Reverse S, 8-Formation, and Parallel Parking.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              <span className="text-[2.5rem] font-black text-blue-600 tracking-tight leading-none">₹499</span>
              <span className="text-xs text-slate-400 font-bold line-through">₹999</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-lg">50% OFF</span>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-3 shrink-0">
            <a 
              href="https://wa.me/918368510626?text=Hi, I want to book the ₹499 Driving Test Track session." 
              target="_blank"
              className="w-full md:w-64 bg-[#25D366] hover:bg-[#20b858] text-white font-black text-[15px] py-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 active:scale-95 transition-all"
            >
              <MessageCircle size={20} strokeWidth={2.5} /> Book Your Slot
            </a>
            <a 
              href="tel:+918368510626" 
              className="w-full md:w-64 bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-[15px] py-4 rounded-2xl flex items-center justify-center gap-2.5 active:scale-95 transition-all border border-slate-200/60"
            >
              <PhoneCall size={18} strokeWidth={2.5} /> Call Expert Now
            </a>
          </div>
        </div>
      </div>

      {/* 4. 6 RTO Track Obstacles Steps (Photo & Guideline Grid) */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-[22px] md:text-[28px] font-black text-slate-900 mb-3 tracking-tight">
            6 Official RTO Test Track Obstacles You Will Master
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Our 1-hour rigorous practical session covers every complex maneuver tested at Delhi/NCR RTO grounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 font-black flex items-center justify-center text-lg">01</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Maneuver</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Reverse S-Shape Track</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Learn precise steering control while reversing through a curving S-track without touching boundaries or cones.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 text-xs font-bold text-slate-700 border border-slate-100">
              💡 <span className="text-slate-900 font-black">What you do:</span> Judge mirrors accurately while maintaining smooth reverse clutch control.
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 font-black flex items-center justify-center text-lg">02</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Maneuver</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Figure '8' Formation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Drive forward and backward in a figure-8 loop to build flawless turning radius judgement and gear coordination.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 text-xs font-bold text-slate-700 border border-slate-100">
              💡 <span className="text-slate-900 font-black">What you do:</span> Control vehicle momentum and maintain consistent steering rotation angles.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 font-black flex items-center justify-center text-lg">03</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Maneuver</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Traffic Junction Navigation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Understand right-of-way rules, lane discipline, and smooth turns at simulated 4-way intersections.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 text-xs font-bold text-slate-700 border border-slate-100">
              💡 <span className="text-slate-900 font-black">What you do:</span> Use indicators properly, check blind spots, and obey directional road signs.
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 font-black flex items-center justify-center text-lg">04</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Signal Test</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Red Light & Zebra Crossing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Practice stopping precisely behind stop lines and pedestrian zebra crossings without rolling forward.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 text-xs font-bold text-slate-700 border border-slate-100">
              💡 <span className="text-slate-900 font-black">What you do:</span> Brake smoothly and hold the vehicle securely until the green signal appears.
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 font-black flex items-center justify-center text-lg">05</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Maneuver</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Parallel Parking Bay</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Park seamlessly between virtual vehicles in a tight roadside slot using reference points and back mirrors.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 text-xs font-bold text-slate-700 border border-slate-100">
              💡 <span className="text-slate-900 font-black">What you do:</span> Align vehicle angles and reverse smoothly into the designated parking box.
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 font-black flex items-center justify-center text-lg">06</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Maneuver</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Gradient Uphill (Slope Test)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Master zero-rollback starts on inclined ramps using handbrakes or clutch-bite control techniques.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 text-xs font-bold text-slate-700 border border-slate-100">
              💡 <span className="text-slate-900 font-black">What you do:</span> Prevent car sliding backward while moving ahead on an incline slope.
            </div>
          </div>

        </div>
      </div>

      {/* 5. Sticky Bottom Action Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 p-4 px-5 flex items-center justify-between z-50 lg:hidden shadow-[0_-8px_25px_rgba(0,0,0,0.08)]">
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Track Session Price</p>
          <p className="text-[1.4rem] font-black text-slate-900 leading-none tracking-tight">₹499 <span className="text-xs text-blue-600 font-bold">/ hour</span></p>
        </div>
        
        <div className="flex items-center gap-2">
          <a 
            href="tel:+918368510626" 
            className="bg-slate-100 text-slate-800 p-3.5 rounded-2xl hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center border border-slate-200"
          >
            <PhoneCall size={20} strokeWidth={2.5} />
          </a>
          <a 
            href="https://wa.me/918368510626?text=Hi, I want to book the ₹499 Driving Test Track session." 
            target="_blank"
            className="bg-[#25D366] text-white font-black text-[14px] px-5 py-3.5 rounded-2xl flex items-center gap-2 shadow-lg shadow-[#25D366]/25 hover:bg-[#20b858] active:scale-95 transition-all"
          >
            <MessageCircle size={18} strokeWidth={2.5} /> Book Trainer
          </a>
        </div>
      </div>

    </main>
  );
}