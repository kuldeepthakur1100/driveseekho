'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AchieversPage() {
  const photos = [
    { id: 1, name: "Sunil", image: "/images/student1.jpg", vehicle: "Driving License", category: "license" },
    { id: 2, name: "Alok", image: "/images/student2.jpg", vehicle: "Car Training", category: "car" },
    { id: 3, name: "Nitin", image: "/images/student3.jpg", vehicle: "Driving License", category: "license" },
    { id: 4, name: "Aman Sharma", image: "/images/student4.jpg", vehicle: "Car Training", category: "car" },
    { id: 5, name: "Deva", image: "/images/student5.jpg", vehicle: "Bike Training", category: "bike" },
    { id: 6, name: "Asiya", image: "/images/student6.jpg", vehicle: "Car Training", category: "car" },
    { id: 7, name: "Mamta", image: "/images/student7.jpg", vehicle: "Car Training", category: "car" },
    { id: 8, name: "Vishal", image: "/images/student8.jpg", vehicle: "Car Training", category: "car" },
    { id: 9, name: "Rohit", image: "/images/student9.jpg", vehicle: "Car Training", category: "car" },
    { id: 10, name: "Vivek", image: "/images/student10.jpg", vehicle: "Car Training", category: "car" },
    { id: 11, name: "Priyanka", image: "/images/student11.jpg", vehicle: "Car Training", category: "car" },
    { id: 12, name: "Deepak", image: "/images/student12.jpg", vehicle: "Car Training", category: "car" },
    { id: 13, name: "Rajan", image: "/images/student13.jpg", vehicle: "Driving License", category: "license" },
  ];

  const videos = [
    { id: 1, title: "Day 1 Vs Day 20", src: "FC_I9zGfuEE", tag: "Car" },
    { id: 2, title: "Preeti's 1st Highway Drive", src: "GjNnfLD23Zg", tag: "Highway" },
    { id: 3, title: "First Day Driving", src: "z2PhfVJWRoM", tag: "Basics" },
    { id: 4, title: "Perfect Road Control", src: "Mno7N1RJerc", tag: "Control" },
    { id: 5, title: "2nd Class of Driving", src: "hb8vCVXNF5g", tag: "Progress" },
    { id: 6, title: "3rd Day Bike Training", src: "ATa1PhKHOPU", tag: "Bike" },
  ];

  const getBadgeStyle = (category) => {
    switch (category) {
      case 'license':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'bike':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-800 pb-24 relative overflow-hidden font-sans">
      
      {/* Background Soft Blue Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/60 via-blue-50/30 to-transparent pointer-events-none -z-10" />

      {/* Top Header */}
      <motion.header 
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto pt-12 pb-8 px-4 text-center space-y-3"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-700 border border-blue-200/80 shadow-xs">
          ⭐ Hall of Fame • DriveSeekho
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Meet Our <span className="text-blue-600 bg-clip-text">Stars</span>
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Real students who mastered confident driving, passed their RTO driving tests, and claimed their licenses.
        </p>

        {/* Small Trust Numbers */}
        <div className="flex items-center justify-center gap-6 pt-3 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            100% Practical Training
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-blue-600 font-bold">1,500+</span> Passed Students
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500">★ 4.9/5</span> RTO Pass Rate
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* 1. Photos Gallery Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Recent Achievers</h2>
              <p className="text-xs text-slate-500">Proud moments & license celebrations</p>
            </div>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              {photos.length} Verified Students
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {photos.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col"
              >
                <div className="aspect-square w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                
                <div className="p-3 text-center flex flex-col items-center justify-between gap-1.5">
                  <h3 className="font-semibold text-xs sm:text-sm text-slate-800 tracking-tight truncate w-full">
                    {item.name}
                  </h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${getBadgeStyle(item.category)}`}>
                    {item.vehicle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. Video Stories / Reels Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">On-Road Success Reels</h2>
              <p className="text-xs text-slate-500">Live student drives, highway lessons & milestones</p>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">Swipe to explore →</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
            {videos.map((vid) => (
              <motion.div
                key={vid.id}
                whileHover={{ scale: 1.02 }}
                className="w-[170px] sm:w-[195px] h-[300px] sm:h-[320px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 relative shrink-0 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all snap-start flex flex-col justify-end"
              >
                <iframe
                  className="w-full h-full absolute inset-0 pointer-events-none scale-150 object-cover"
                  src={`https://www.youtube-nocookie.com/embed/${vid.src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${vid.src}&rel=0&modestbranding=1`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />

                {/* Top Badge on Reel */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="text-[10px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 px-2 py-0.5 rounded-full shadow-xs">
                    {vid.tag}
                  </span>
                </div>

                {/* Bottom Overlay Gradient */}
                <div className="relative z-10 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent p-3 pt-8">
                  <p className="text-xs font-bold text-white line-clamp-2 leading-snug drop-shadow-xs">
                    {vid.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Action Call / Footer CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white text-center shadow-lg shadow-blue-500/20 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">Ready to be our next Achiever?</h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-md mx-auto">
            Doorstep car & bike training with certified instructors. Get your license hassle-free.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <button className="px-6 py-2.5 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer active:scale-95">
                ← Back to Home
              </button>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}