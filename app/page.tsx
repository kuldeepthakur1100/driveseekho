'use client';

import { useState, useRef, type ComponentType, type Dispatch, type SetStateAction } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Heart, MapPin, Car, Calendar, User, UserCircle } from 'lucide-react';
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
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const resultsRef = useRef<HTMLDivElement | null>(null);

  const locations = [
    { name: 'East Delhi', image: '/images/east-delhi.jpg' },
    { name: 'Noida', image: '/images/noida.jpg' },
    { name: 'Central Delhi', image: '/images/central-delhi1.jpg' },
    { name: 'New Delhi', image: '/images/central-delhi1.jpg' },
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
    { name: 'Bike', image: '/images/2wheelerha.png' },
    { name: 'Instructor', image: '/images/instructor.png' },
    { name: 'License', image: '/images/ohlicense.png' },
  ];

  const handleSearchSubmit = () => {
    setIsSearchFocused(false);
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

  const searchSuggestions = searchQuery.trim() 
    ? packages.filter(pkg => 
        pkg.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.subArea?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.city?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <main className={`w-full max-w-[100vw] overflow-x-hidden mx-auto bg-[#f6f7fc] min-h-screen pb-24 md:pb-12 relative ${inter.className}`}>
  
      {/* Light Blue Header Section */}
      <div className="bg-[#dce9fd] rounded-b-[2rem] pt-4 pb-0 relative shadow-sm w-full">
        
        {/* Logo & Profile Header */}
        <div className="flex items-center justify-between mb-4 max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden border border-gray-200 shrink-0">
              <img src="/images/favicon.ico" alt="Drive Seekho" className="w-full h-full object-cover"/>
            </div>
            <span className="font-extrabold text-gray-900 text-lg tracking-tight">Drive<span className="text-gray-900 font-extrabold">Seekho</span></span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 border border-gray-200 cursor-pointer shrink-0">
            <UserCircle size={24} />
          </div>
        </div>

        {/* Search Bar Container with Live Suggestions */}
        <div className="max-w-xl mx-auto mb-3 px-4 md:px-0 relative z-30 w-full">
          <div 
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
          >
            <LocationSearchComponent 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
            />
          </div>

          {/* Live Search Suggestions Dropdown */}
          {isSearchFocused && searchSuggestions.length > 0 && (
            <div className="absolute left-4 right-4 md:left-0 md:right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-40">
              <div className="p-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
                Suggested Driving Schools & Areas
              </div>
              {searchSuggestions.map((item, idx) => {
                const isBike = item.category?.toLowerCase().includes('wheel') || item.category?.toLowerCase().includes('bike');
                const targetHref = item.areaSlug 
                  ? (isBike ? `/2-wheeler-driving-school-in/${item.areaSlug}` : `/driving-school-in/${item.areaSlug}`)
                  : '#';

                return (
                  <Link 
                    key={idx} 
                    href={targetHref}
                    className="flex items-center justify-between p-3 hover:bg-blue-50/50 transition border-b border-gray-50 last:border-none cursor-pointer"
                    onClick={() => setSearchQuery(item.subArea || item.title || '')}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-gray-900 line-clamp-1">{item.title}</p>
                        <p className="text-[11px] text-gray-500">{item.subArea}, {item.city} • <span className="text-blue-600 font-bold">{item.price}</span></p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md shrink-0">View</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Location Selection Notice */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 mb-3 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-gray-900 text-[13px] md:text-[14px] font-extrabold flex items-center gap-1.5">
              Select your location first 
            </span>
            
          </div>
          <svg className="w-14 h-6 text-gray-700 hidden sm:block shrink-0" viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3">
            <path d="M2 15C15 15 25 -2 52 5" />
            <path d="M45 2L55 5L47 11" fill="none" strokeDasharray="1 0" />
          </svg>
        </div>

        {/* Location Horizontal Scroll Pills (Edge to Edge) */}
        <div className="w-full mb-4">
          <div className="flex gap-3 overflow-x-auto px-4 md:px-8 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {locations.map((loc, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedLocation(loc.name);
                  setSelectedCategory('Car');
                  setSearchQuery('');
                  if (resultsRef.current) {
                    resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 group"
              >
                <div className={`w-[58px] h-[58px] md:w-[65px] md:h-[65px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 border-2 ${selectedLocation === loc.name && !searchQuery ? 'border-blue-600 shadow-md scale-105' : 'border-white shadow-sm'}`}>
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[11px] md:text-[12px] font-bold text-gray-800 text-center max-w-[70px] truncate">
                  {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Grid (Car, Bike, Instructor, License) */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 mb-4">
          <div className="grid grid-cols-4 gap-3">
            {categories.map((cat) => {
              const isLicense = cat.name === 'License';

              return isLicense ? (
                <Link
                  href="/driving-license"
                  key={cat.name}
                  className="bg-white py-3 px-2 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <div className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] relative bg-gray-50 rounded-full flex items-center justify-center p-1 shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] md:text-[13px] font-bold text-gray-800 text-center leading-tight">
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
                  className={`bg-white py-3 px-2 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer shadow-sm border transition-all ${selectedCategory === cat.name && !searchQuery ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-100 hover:shadow-md'}`}
                >
                  <div className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] relative bg-gray-50 rounded-full flex items-center justify-center p-1 shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className={`text-[11px] md:text-[13px] font-bold text-center leading-tight ${selectedCategory === cat.name && !searchQuery ? 'text-blue-600' : 'text-gray-800'}`}>
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

       {/* Thin Black Line / Divider */}
        <div className="w-full h-[1px] bg-black/20 my-0"></div>

       {/* Wide Screen-Edge-to-Edge Promotional Image Banner with Rounded Bottom Corners */}
        <div className="w-full relative z-10">
          <div className="w-full h-[130px] md:h-[220px] overflow-hidden shadow-sm rounded-b-[2rem]">
            <img 
              src="/images/ganeshji.PNG" 
              alt="Ganesh Chaturthi Banner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Video Banner Section */}
      <div className="max-w-5xl mx-auto px-2 md:px-8 mb-6 mt-4">
        <div className="relative w-full h-[180px] md:h-[280px] overflow-hidden rounded-2xl shadow-sm bg-blue-100 flex items-center justify-center border border-blue-200">
          <video
            className="w-full h-full object-cover absolute inset-0"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/banner.mp4"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* Packages or Search Results Section */}
      <div ref={resultsRef} className="max-w-5xl mx-auto px-4 md:px-8 space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.1rem] md:text-[1.4rem] font-extrabold text-gray-900 tracking-tight">
            {searchQuery 
              ? `Search Results for "${searchQuery}"`
              : selectedCategory === 'Instructor' 
                ? "Hire a Professional Instructor" 
                : `Best Driving Schools Near You (${selectedLocation})`} 
          </h2>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs md:text-sm font-bold text-blue-600 hover:underline shrink-0"
            >
              Clear Search
            </button>
          )}
        </div>
        
        {selectedCategory === 'Instructor' && !searchQuery ? (
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 text-center space-y-5">
            <div className="w-full h-[220px] md:h-[260px] bg-gray-100 rounded-xl overflow-hidden relative">
              <img
                src="/images/instructr12.jpeg"
                alt="Instructor Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[12px] font-black text-gray-900 flex items-center gap-1 shadow-sm">
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
                
                const dynamicHref = pkg.areaSlug 
                  ? (isBike ? `/2-wheeler-driving-school-in/${pkg.areaSlug}` : `/driving-school-in/${pkg.areaSlug}`)
                  : '#';

                const uniqueKey = `${pkg.areaSlug}-${pkg.category || 'car'}-${index}`;

                return (
                  <Link href={dynamicHref} key={uniqueKey} className="block group h-full">
                    <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100 relative group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                      
                      <div>
                        <div className="w-full h-[180px] bg-gray-100 rounded-xl overflow-hidden relative mb-4">
                          {pkg.image ? (
                            <img
                              src={pkg.image}
                              alt={pkg.title}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">No Image</div>
                          )}
                          
                          <button className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-md p-2 rounded-full text-gray-400 hover:text-red-500 shadow-sm transition">
                            <Heart size={18} strokeWidth={2.5} />
                          </button>
                        </div>

                        <div className="px-1">
                          <h3 className="font-black text-gray-900 text-[1.15rem] leading-tight mb-1.5 line-clamp-1">{pkg.title}</h3>
                         
                          <div className="flex items-center gap-1 text-gray-500 text-[13px] font-medium mb-3">
                            <MapPin size={14} className="text-blue-500 shrink-0" />
                            <span className="truncate">{pkg.subArea}, {pkg.city}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <div className="flex items-center gap-1.5 bg-[#f6f7fc] px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700">
                              <Car size={13} className="text-blue-500 shrink-0" />
                              <span className="truncate max-w-[110px]">{pkg.carName || 'Hatchback'}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-[#f6f7fc] px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700">
                              <Calendar size={13} className="text-blue-500 shrink-0" />
                              {pkg.trainingDays || '15 Days'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-3 pb-1 px-1 flex justify-between items-end mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                            <User size={14} strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Instructor</p>
                            <p className="text-[11px] font-black text-gray-900 truncate max-w-[90px]">{pkg.instructorName || 'Certified'}</p>
                          </div>
                        </div>
                       
                        <div className="text-right">
                          <p className="font-black text-[1.3rem] text-[#1e5bff] leading-none tracking-tight">{pkg.price}</p>
                          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-1">Total Fee</p>
                        </div>
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 px-5 bg-white rounded-2xl shadow-sm text-gray-500 border border-gray-100 max-w-xl mx-auto">
              <p className="font-medium text-gray-600">
                {searchQuery ? `No packages found for "${searchQuery}"` : `No ${selectedCategory} packages available in ${selectedLocation}.`}
              </p>
            </div>
          )
        )}
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-4 md:px-8">
        <FAQ />
      </div>
      
      <BottomNav />
      
    </main>
  );
}