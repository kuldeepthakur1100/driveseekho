'use client';

import { useState, useRef, useEffect, type ComponentType, type Dispatch, type SetStateAction } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Heart, MapPin, Car, Calendar, User, UserCircle, PhoneCall } from 'lucide-react';
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
  
  // Floating Call Button Shrink/Expand state
  const [isScrolled, setIsScrolled] = useState(false);

  const resultsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <main className={`w-full min-h-screen bg-[#f6f7fc] pb-28 md:pb-16 relative overflow-x-hidden ${inter.className}`}>
  
      {/* Light Blue Header Section - pb-0 ensures no bottom spacing */}
      <div className="bg-[#dce9fd] rounded-b-[2.5rem] pt-5 pb-0 relative shadow-sm w-full">
        
        {/* Logo & Profile Header */}
        <div className="flex items-center justify-between mb-5 max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden border border-gray-200 shrink-0">
              <img src="/images/favicon.ico" alt="Drive Seekho" className="w-full h-full object-cover"/>
            </div>
            <span className="font-extrabold text-gray-900 text-xl tracking-tight">Drive<span className="text-blue-600 font-extrabold">Seekho</span></span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 border border-gray-200 cursor-pointer hover:bg-gray-50 transition shrink-0">
            <UserCircle size={26} />
          </div>
        </div>

        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto mb-4 px-4 relative z-30 w-full">
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

          {/* Suggestions Dropdown */}
          {isSearchFocused && searchSuggestions.length > 0 && (
            <div className="absolute left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-40">
              <div className="p-2.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
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
                    className="flex items-center justify-between p-3.5 hover:bg-blue-50/50 transition border-b border-gray-50 last:border-none cursor-pointer"
                    onClick={() => setSearchQuery(item.subArea || item.title || '')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 line-clamp-1">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.subArea}, {item.city} • <span className="text-blue-600 font-bold">{item.price}</span></p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md shrink-0">View</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Location Notice */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-3 flex items-center justify-between">
          <span className="text-gray-900 text-sm md:text-base font-extrabold flex items-center gap-1.5">
            Select your location
          </span>
          <span className="text-xs text-gray-600 hidden sm:block font-medium">
            Showing top certified academies in Delhi NCR
          </span>
        </div>

        {/* Location Horizontal Scroll */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-5">
          <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                className="flex flex-col items-center gap-2 cursor-pointer shrink-0 group"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 border-2 ${selectedLocation === loc.name && !searchQuery ? 'border-blue-600 shadow-lg scale-105 ring-2 ring-blue-300' : 'border-white shadow-sm hover:scale-105'}`}>
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-gray-800 text-center max-w-[75px] truncate">
                  {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      {/* Categories Grid (Optimized for Mobile, Tab, and Desktop) */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mb-2">
          <div className="grid grid-cols-4 gap-3 md:gap-5">
            {categories.map((cat) => {
              const isLicense = cat.name === 'License';

              return isLicense ? (
                <Link
                  href="/driving-license"
                  key={cat.name}
                  className="bg-white py-3 md:py-4 px-2 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 relative bg-gray-50 rounded-full flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-gray-800 text-center">
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
                  className={`bg-white py-3 md:py-4 px-2 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer shadow-sm border transition-all group ${selectedCategory === cat.name && !searchQuery ? 'border-blue-500 ring-2 ring-blue-200 shadow-md' : 'border-gray-100 hover:shadow-md hover:border-blue-100'}`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 relative bg-gray-50 rounded-full flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-xs md:text-sm font-bold text-center ${selectedCategory === cat.name && !searchQuery ? 'text-blue-600' : 'text-gray-800'}`}>
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean, Subtle Divider Line */}
        <div className="w-full px-4 md:px-8 my-3">
          <div className="w-full h-[1px] bg-blue-300/40"></div>
        </div>

        {/* Ganeshji Promotional Banner with Clean Spacing */}
        <div className="w-full relative z-10">
          <div className="w-full h-[95px] md:h-[200px] overflow-hidden shadow-sm rounded-b-[1.5rem]">
            <img 
              src="/images/gani.png" 
              alt="Ganesh Chaturthi Banner" 
              className="w-full h-full object-cover rounded-b-[1.5rem] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>


      {/* Video Banner Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-8 mt-6">
        <div className="relative w-full h-[190px] sm:h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm bg-blue-100 flex items-center justify-center border border-blue-200">
          <video
            className="w-full h-full object-cover absolute inset-0"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/banner.mp4"
          />
        </div>
      </div>

      {/* Packages or Search Results Section */}
      <div ref={resultsRef} className="max-w-6xl mx-auto px-4 md:px-8 space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight">
            {searchQuery 
              ? `Search Results for "${searchQuery}"`
              : selectedCategory === 'Instructor' 
                ? "Hire a Professional Instructor" 
                : `Best Driving Schools in ${selectedLocation}`} 
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
          <div className="max-w-md mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 text-center space-y-5">
            <div className="w-full h-[220px] md:h-[260px] bg-gray-100 rounded-2xl overflow-hidden relative">
              <img
                src="/images/instructr12.jpeg"
                alt="Instructor Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-black text-gray-900 flex items-center gap-1 shadow-sm">
                <span className="text-[#FFB800] text-sm">★</span> 4.9 (Expert Trainer)
              </div>
            </div>

            <div className="text-left space-y-2">
              <h3 className="font-black text-gray-900 text-xl md:text-2xl">Professional Driving Trainer</h3>
              <p className="text-gray-500 text-xs md:text-sm">Learn one-on-one with certified personal trainers at your doorstep.</p>
              <p className="font-black text-2xl text-blue-600 pt-1">₹349 <span className="text-sm font-normal text-gray-400">/ Hour</span></p>
            </div>

            <Link href="/instructor" className="block w-full">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition duration-200 shadow-md cursor-pointer">
                Book Instructor Now
              </button>
            </Link>
          </div>
        ) : (
          filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => {
                const isBike = pkg.category?.toLowerCase().includes('wheel') || pkg.category?.toLowerCase().includes('bike');
                
                const dynamicHref = pkg.areaSlug 
                  ? (isBike ? `/2-wheeler-driving-school-in/${pkg.areaSlug}` : `/driving-school-in/${pkg.areaSlug}`)
                  : '#';

                const uniqueKey = `${pkg.areaSlug}-${pkg.category || 'car'}-${index}`;

                return (
                  <Link href={dynamicHref} key={uniqueKey} className="block group h-full">
                    <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 relative group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                      
                      <div>
                        <div className="w-full h-[180px] sm:h-[190px] md:h-[210px] bg-gray-100 rounded-2xl overflow-hidden relative mb-4">
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
                          <h3 className="font-black text-gray-900 text-base md:text-lg leading-tight mb-1.5 line-clamp-1">{pkg.title}</h3>
                          
                          <div className="flex items-center gap-1.5 text-gray-500 text-xs md:text-sm font-medium mb-3">
                            <MapPin size={15} className="text-blue-500 shrink-0" />
                            <span className="truncate">{pkg.subArea}, {pkg.city}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <div className="flex items-center gap-1.5 bg-[#f6f7fc] px-2.5 py-1 rounded-lg text-xs font-bold text-gray-700">
                              <Car size={13} className="text-blue-500 shrink-0" />
                              <span className="truncate max-w-[120px]">{pkg.carName || 'Hatchback'}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-[#f6f7fc] px-2.5 py-1 rounded-lg text-xs font-bold text-gray-700">
                              <Calendar size={13} className="text-blue-500 shrink-0" />
                              {pkg.trainingDays || '15 Days'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-3.5 pb-1 px-1 flex justify-between items-end mt-auto">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 border border-blue-100 shrink-0">
                            <User size={16} strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Instructor</p>
                            <p className="text-xs font-black text-gray-900 truncate max-w-[100px]">{pkg.instructorName || 'Certified'}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-black text-xl md:text-2xl text-blue-600 leading-none tracking-tight">{pkg.price}</p>
                          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-1">Total Fee</p>
                        </div>
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 px-5 bg-white rounded-3xl shadow-sm text-gray-500 border border-gray-100 max-w-xl mx-auto">
              <p className="font-medium text-gray-600 text-sm md:text-base">
                {searchQuery ? `No packages found for "${searchQuery}"` : `No ${selectedCategory} packages available in ${selectedLocation}.`}
              </p>
            </div>
          )
        )}
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto mt-14 px-4 md:px-8">
        <FAQ />
      </div>
      
      {/* Smart Sticky "Call Now" Button (Shrinks on scroll down, Expands on top) */}
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 transition-all duration-300">
        <a
          href="tel:+918368510626" // Apna actual phone number yahan daal do
          className={`flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full border-2 border-white/20 active:scale-95 ${
            isScrolled 
              ? 'w-12 h-12 md:w-14 md:h-14 p-0' 
              : 'px-4 py-3 md:px-5 md:py-3.5 gap-2.5'
          }`}
          title="Call Now"
        >
          <PhoneCall size={isScrolled ? 22 : 18} className="shrink-0 animate-pulse" />
          {!isScrolled && (
            <span className="font-bold text-xs md:text-sm tracking-wide whitespace-nowrap">
              Call Now
            </span>
          )}
        </a>
      </div>

      {/* Bottom Nav Bar */}
      <BottomNav />
      
    </main>
  );
}