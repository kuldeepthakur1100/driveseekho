'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Award, MapPin } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'License', href: '/driving-license', icon: FileText },
    { name: 'Achievers', href: '/achievers', icon: Award },
    { name: 'Driving Track', href: '/driving-track', icon: MapPin, price: '₹499' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-blue-100/80 shadow-[0_-4px_25px_rgba(1,74,173,0.08)] sm:hidden">
      <div className="flex justify-around items-center py-1.5 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center transition-all duration-300 py-1 px-3 rounded-2xl ${
                isActive 
                  ? 'text-[#014AAD] bg-blue-50 font-bold shadow-sm scale-105' 
                  : 'text-gray-400 hover:text-blue-500 hover:bg-gray-50/50'
              }`}
            >
              {/* Price Tag Badge for Driving Track */}
              {item.price && (
                <span className="absolute -top-2 right-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm tracking-tighter uppercase animate-pulse">
                  {item.price}
                </span>
              )}

              <Icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 2} 
                className="transition-transform active:scale-95 mb-0.5" 
              />
              <span className="text-[10px] tracking-tight leading-none">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}