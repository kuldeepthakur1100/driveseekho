'use client';

import { useState, useEffect } from 'react';

const locations = [
  "Laxmi Nagar",
  "ITO",
  "Preet Vihar",
  "Mayur Vihar",
  "Pitampura",
  "Dwarka",
  "Rohini",
  "Noida Sector 2",
];

export default function LocationSearch({ searchQuery, setSearchQuery, onSearchSubmit }) {
  const [locationIndex, setLocationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Har 3 second mein location change hogi (Smooth timing)
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Slide-up animation ke liye timeout
      setTimeout(() => {
        setLocationIndex((prev) => (prev + 1) % locations.length);
        setIsAnimating(false);
      }, 400); // 400ms transition time

    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-1">
      <form 
        onSubmit={handleSearch}
        className="relative flex items-center bg-white rounded-xl shadow-lg p-1.5 border border-gray-200 transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
      >
        {/* Search Icon */}
        <div className="pl-3.5 text-gray-400 shrink-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input Field Container */}
        <div className="relative w-full flex items-center overflow-hidden mx-2">
          <input
            type="text"
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 text-gray-800 bg-transparent text-sm focus:outline-none z-10"
          />
          
          {/* Custom Animated Placeholder (Fixed alignment & speed) */}
          {!searchQuery && (
            <div className="absolute left-0 pointer-events-none flex items-center text-gray-400 text-sm overflow-hidden h-full w-full">
              <span className="mr-1 shrink-0">Driving School in</span>
              <div className="overflow-hidden h-6 relative w-full flex items-center">
                <span 
                  className={`absolute left-0 transition-all duration-400 font-medium text-gray-600 truncate ${
                    isAnimating 
                      ? '-translate-y-4 opacity-0' 
                      : 'translate-y-0 opacity-100'
                  }`}
                >
                  &quot;{locations[locationIndex]}&quot;
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all shadow-sm text-sm flex items-center justify-center shrink-0 cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
}