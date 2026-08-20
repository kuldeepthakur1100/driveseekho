'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AchieversPage() {
  const photos = [
    { id: 1, name: "Sunil.", image: "/images/student1.jpg", vehicle: "Driving License" },
    { id: 2, name: "Alok", image: "/images/student2.jpg", vehicle: "Car" },
    { id: 3, name: "Nitin", image: "/images/student3.jpg", vehicle: "Driving License" },
    { id: 4, name: "Aman Sharma", image: "/images/student4.jpg", vehicle: "Car" },
    { id: 5, name: "Deva", image: "/images/student5.jpg", vehicle: "Bike" },
    { id: 6, name: "Asiya", image: "/images/student6.jpg", vehicle: "Car" },
    { id: 7, name: "Mamta", image: "/images/student7.jpg", vehicle: "Car" },
    { id: 8, name: "Vishal", image: "/images/student8.jpg", vehicle: "Car" },
    { id: 9, name: "Rohit", image: "/images/student9.jpg", vehicle: "Car" },
    { id: 10, name: "Vivek", image: "/images/student10.jpg", vehicle: "Car" },
    { id: 11, name: "Priyanka", image: "/images/student11.jpg", vehicle: "Car" },
    { id: 12, name: "Deepak", image: "/images/student12.jpg", vehicle: "Car" },
    { id: 13, name: "Rajan", image: "/images/student13.jpg", vehicle: "Driving License" },
  ];

  const videos = [
    { id: 1, title: "Day1 Vs Day20", src: "jZlvDGapJag" },
    { id: 2, title: "Preeti First Highway Drive", src: "GjNnfLD23Zg" },
    { id: 3, title: "First Day", src: "z2PhfVJWRoM" },
    { id: 4, title: "Perfect Control On Road", src: "Mno7N1RJerc" },
    { id: 5, title: "2nd Class of Driving", src: "hb8vCVXNF5g" },
    { id: 6, title: "On road Training", src: "jZlvDGapJag" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20 px-4 sm:px-6">
      
      {/* Top Header Title */}
      <div className="max-w-5xl mx-auto pt-10 pb-6 text-center space-y-1">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          Meet Our Stars ✨
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm font-medium">
          Real students who mastered driving & got their license with DriveSeekho
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* 1. Photos Gallery Grid */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-200 tracking-tight">Our Achievers Photos</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {photos.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800/80 shadow-md flex flex-col"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-800">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-2.5 text-center">
                  <h3 className="font-bold text-xs text-white truncate">{item.name}</h3>
                  <span className="text-[10px] text-blue-400 font-semibold">{item.vehicle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Medium Size Video Reels Section (Side Scroll) */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-200 tracking-tight">Success Stories & Reels</h2>
          
          <div className="flex gap-4 overflow-x-auto pb-3 [&::-webkit-scrollbar]:hidden">
            {videos.map((vid) => (
              <div 
                key={vid.id} 
                className="w-[160px] sm:w-[180px] h-[280px] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 relative shrink-0 shadow-lg"
              >
                <iframe 
                  className="w-full h-full absolute inset-0 pointer-events-none scale-150"
                  src={`https://www.youtube-nocookie.com/embed/${vid.src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${vid.src}&rel=0&modestbranding=1`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 z-10 pointer-events-none">
                  <p className="text-[11px] font-bold text-white leading-tight">{vid.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center pt-4">
          <Link href="/">
            <button className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-white text-xs transition shadow-md cursor-pointer">
              ← Back to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}