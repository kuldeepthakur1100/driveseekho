'use client';

import { useState, useRef, type ComponentType, type Dispatch, type SetStateAction } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Heart, MapPin, Car, Calendar, User } from 'lucide-react';
import { packages } from './data';
import FAQ from "@/components/FAQ";
import LocationSearch from '@/components/LocationSearch';
import BottomNav from '@/components/BottomNav';

const LocationSearchComponent = LocationSearch as ComponentType<{
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  onSearchSubmit?: () => void;
}>;

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('East Delhi');
  const [selectedCategory, setSelectedCategory] = useState('Car');
  const [searchQuery, setSearchQuery] = useState('');

  const resultsRef = useRef<HTMLDivElement | null>(null);

  const locations = [
    { name: 'East Delhi', image: '/images/east-delhi.jpg' },
    { name: 'Noida', image: '/images/noida.jpg' },
    { name: 'Central Delhi', image: '/images/central-delhi1.jpg' },
    { name: 'New Delhi', image: '/images/delhi.jpg' },
    { name: 'North Delhi', image: '/images/north-delhi.jpg' },
    { name: 'North East', image: '/images/north-east.png' },
    { name: 'North West', image: '/images/north-west-dl.jpg' },
    { name: 'South Delhi', image: '/images/south-delhi.jpeg' },
    { name: 'South East', image: '/images/south-east.jpg' },
    { name: 'South West', image: '/images/south-west.jpg' },
    { name: 'West Delhi', image: '/images/west-delhi.jpg' },
    { name: 'Ghaziabad', image: '/images/ghaziabad.jpg' },
  ];

  const categories = [
    { name: 'Car', image: '/images/mycarha.png' },
    { name: '2 wheeler', image: '/images/2wheelerha.png' },
    { name: 'Instructor', image: '/images/instructor.png' },
    { name: 'License', image: '/images/ohlicense.png' },
  ];

  const handleSearchSubmit = () => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const filteredPackages = packages.filter((pkg) => {
    const query = searchQuery.toLowerCase().trim();

    if (query) {
      const matchTitle = pkg.title?.toLowerCase().includes(query);
      const matchSubArea = pkg.subArea?.toLowerCase().includes(query);
      const matchCity = pkg.city?.toLowerCase().includes(query);
      const matchSlug = pkg.areaSlug?.toLowerCase().includes(query);

      return matchTitle || matchSubArea || matchCity || matchSlug;
    }

    const pkgCategory = pkg.category?.toLowerCase().trim() || '';
    const targetCategory = selectedCategory.toLowerCase().trim();
    
    const pkgCity = pkg.city?.toLowerCase().trim() || '';
    const targetLocation = selectedLocation.toLowerCase().trim();

    return pkgCategory === targetCategory && pkgCity === targetLocation;
  });

  return (
    <main className={`max-w-7xl w-full overflow-x-hidden mx-auto bg-[#f6f7fc] min-h-screen pb-20 md:pb-12 relative ${inter.className}`}>
  
      {/* 1. Blue Header (Available In) */}
      <div className="bg-[#014AAD] rounded-b-[2rem] md:rounded-b-[3rem] pt-8 md:pt-12 pb-24 md:pb-32 relative shadow-sm">
        
        {/* Search Bar Container */}
        <div className="max-w-xl mx-auto mb-3 px-4 md:px-0">
          <LocationSearchComponent 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>

       {/* Added Text Below Search Bar (Left Aligned) */}
<div className="max-w-5xl mx-auto px-4 md:px-0 mb-4">
  <p className="text-white/80 text-[13px] md:text-[14px] font-medium tracking-wide text-left">
    Select your location for driving classes
  </p>
</div>

        {/* Location Pills */}
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex md:grid md:grid-cols-6 lg:grid-cols-12 gap-4 overflow-x-auto md:overflow-visible px-4 md:px-0 -mx-4 md:mx-0 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {locations.map((loc, index) => (
              <div
                key={loc.name}
                onClick={() => {
                  setSelectedLocation(loc.name);
                  setSearchQuery('');
                  if (resultsRef.current) {
                    resultsRef.current.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }
                }}
                className={`flex flex-col items-center gap-2 cursor-pointer min-w-[72px] group ${
                  index === 0 ? 'pl-4 md:pl-0' : ''
                } ${index === locations.length - 1 ? 'pr-4 md:pr-0' : ''}`}
              >
                <div className={`w-[70px] h-[70px] md:w-[76px] md:h-[76px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 border-[2.5px] group-hover:scale-105 ${selectedLocation === loc.name && !searchQuery ? 'border-white shadow-lg' : 'border-white/40'}`}>
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100/eeeeee/999999?text=City" }}
                  />
                </div>
                <span className={`text-[11px] md:text-[12px] font-black text-center ${selectedLocation === loc.name && !searchQuery ? 'text-white' : 'text-white/70'}`}>
                  {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 2. Overlapping Card (Select Service) */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 -mt-16 md:-mt-20 relative z-10 mb-10">
        <div className="bg-white rounded-[2rem] shadow-[0_10px_35px_rgb(0,0,0,0.08)] p-3 md:p-4 border border-gray-100">
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {categories.map((cat) => {
              const isLicense = cat.name === 'License';

              return isLicense ? (
                <Link
                  href="/driving-license"
                  key={cat.name}
                  className="py-2 px-1 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200 border-2 border-transparent bg-white hover:border-gray-100 hover:bg-gray-50/50"
                >
                  <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] relative bg-white rounded-full flex items-center justify-center p-1">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100/eeeeee/999999?text=Icon" }}
                    />
                  </div>
                  <span className="text-[11px] md:text-[13px] font-black text-center leading-tight text-gray-700">
                    {cat.name}
                  </span>
                </Link>
              ) : (
                <div
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setSearchQuery('');
                  }}
                  className={`py-2 px-1 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200 border-2 ${selectedCategory === cat.name && !searchQuery ? 'border-blue-600 bg-blue-50/30 shadow-sm' : 'border-transparent bg-white hover:border-gray-100 hover:bg-gray-50/50'}`}
                >
                  <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] relative bg-white rounded-full flex items-center justify-center p-1">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100/eeeeee/999999?text=Icon" }}
                    />
                  </div>
                  <span className={`text-[11px] md:text-[13px] font-black text-center leading-tight ${selectedCategory === cat.name && !searchQuery ? 'text-blue-600' : 'text-gray-700'}`}>
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Banner Section */}
      <div className="max-w-6xl mx-auto px-1 md:px-0 mb-10 mt-6">
        <div className="relative w-full h-[220px] md:h-[380px] overflow-hidden rounded-[1.2rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/banner.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* 3. Packages or Search Results Section */}
      <div ref={resultsRef} className="max-w-6xl mx-auto px-4 md:px-6 space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.2rem] md:text-[1.6rem] font-extrabold text-gray-900 tracking-tight">
            {searchQuery 
              ? `Search Results for "${searchQuery}"`
              : selectedCategory === 'Instructor' 
                ? "Hire a Professional Instructor" 
                : `Best Driving Schools Near You (${selectedLocation})`} 
          </h2>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs md:text-sm font-bold text-blue-600 hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>
        
        {selectedCategory === 'Instructor' && !searchQuery ? (
          <div className="max-w-xl mx-auto bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100 text-center space-y-5">
            <div className="w-full h-[220px] md:h-[260px] bg-gray-100 rounded-[1.2rem] overflow-hidden relative">
              <img
                src="/images/instructr12.jpeg"
                alt="Instructor Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-[10px] text-[12px] font-black text-gray-900 flex items-center gap-1 shadow-sm">
                <span className="text-[#FFB800] text-[14px]">★</span> 4.9 (Expert Trainer)
              </div>
            </div>

            <div className="text-left space-y-2">
              <h3 className="font-black text-gray-900 text-[1.4rem]">Professional Driving Trainer</h3>
              <p className="text-gray-500 text-[13px] md:text-[14px]">Learn one-on-one with certified personal trainers at your doorstep.</p>
              <p className="font-black text-[1.6rem] md:text-[1.8rem] text-[#1e5bff] pt-1">₹349 <span className="text-sm font-normal text-gray-400">/ Hour</span></p>
            </div>

            <Link href="/instructor" className="block w-full">
              <button className="w-full bg-[#1e5bff] hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition duration-200 shadow-md cursor-pointer">
                Book Instructor Now
              </button>
            </Link>
          </div>
        ) : (
          filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => {
                const isBike = pkg.category?.toLowerCase().includes('wheel') || pkg.category?.toLowerCase().includes('bike');
                const dynamicHref = isBike ? `/2-wheeler-driving-school-in/${pkg.areaSlug}` : `/driving-school-in/${pkg.areaSlug}`;

                return (
                  <Link href={dynamicHref} key={pkg.areaSlug || index} className="block group h-full">
                    <div className="bg-white rounded-[1.5rem] p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 relative group-hover:border-blue-200 group-hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                      
                      <div>
                        <div className="w-full h-[190px] md:h-[210px] bg-gray-100 rounded-[1.1rem] overflow-hidden relative mb-4">
                          {pkg.image ? (
                            <img
                              src={pkg.image}
                              alt={pkg.title}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">No Image</div>
                          )}
                          
                          <button className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md p-2 rounded-full text-gray-400 hover:text-red-500 shadow-sm transition">
                            <Heart size={20} strokeWidth={2.5} />
                          </button>
                        </div>

                        <div className="px-1">
                          <h3 className="font-black text-gray-900 text-[1.25rem] md:text-[1.3rem] leading-tight mb-1.5 line-clamp-1">{pkg.title}</h3>
                         
                          <div className="flex items-center gap-1 text-gray-500 text-[13px] font-medium mb-4">
                            <MapPin size={14} className="text-blue-500 shrink-0" />
                            <span className="truncate">{pkg.subArea}, {pkg.city}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="flex items-center gap-1.5 bg-[#f6f7fc] px-3 py-1.5 rounded-[10px] text-[11px] font-bold text-gray-700">
                              <Car size={14} className="text-blue-500 shrink-0" />
                              <span className="truncate max-w-[120px]">{pkg.carName || 'Hatchback Car'}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-[#f6f7fc] px-3 py-1.5 rounded-[10px] text-[11px] font-bold text-gray-700">
                              <Calendar size={14} className="text-blue-500 shrink-0" />
                              {pkg.trainingDays || '15 Days'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4 pb-1 px-1 flex justify-between items-end mt-auto">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                            <User size={16} strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Instructor</p>
                            <p className="text-[12px] font-black text-gray-900 truncate max-w-[100px] md:max-w-[120px]">{pkg.instructorName || 'Certified'}</p>
                          </div>
                        </div>
                       
                        <div className="text-right">
                          <p className="font-black text-[1.5rem] md:text-[1.6rem] text-[#1e5bff] leading-none tracking-tight">{pkg.price}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1.5">Total Fee</p>
                        </div>
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 px-5 bg-white rounded-[2rem] shadow-sm text-gray-500 border border-gray-100 max-w-xl mx-auto">
              <p className="font-medium text-gray-600">
                {searchQuery ? `No packages found for "${searchQuery}"` : `No ${selectedCategory} packages available in ${selectedLocation}.`}
              </p>
            </div>
          )
        )}
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <FAQ />
      </div>
      
      <BottomNav />
      
    </main>
  );
}