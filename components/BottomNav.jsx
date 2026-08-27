'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Trophy, Route } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'License', href: '/driving-license', icon: FileText },
    { name: 'Achievers', href: '/achievers', icon: Trophy },
    { name: 'Driving Track', href: '/driving-test-track-in-delhi', icon: Route, price: '₹499' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] sm:hidden">
      <div className="flex justify-around items-center py-2 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex flex-col items-center justify-center py-1 px-3 group"
            >
              {/* Price Tag Badge fixed at the very top of the tab container */}
              {item.price && (
                <span className="absolute -top-3 bg-[#014AAD] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-sm tracking-tighter">
                  {item.price}
                </span>
              )}

              {/* Icon Container with active highlight */}
              <div className={`p-1 rounded-xl transition-all duration-200 ${
                isActive ? 'text-[#014AAD] scale-110' : 'text-gray-400 group-hover:text-gray-600'
              }`}>
                <Icon 
                  size={22} 
                  strokeWidth={isActive ? 2.5 : 1.8} 
                  fill={isActive ? "currentColor" : "none"} 
                />
              </div>

              {/* Label */}
              <span className={`text-[11px] tracking-tight transition-all duration-200 mt-0.5 ${
                isActive ? 'font-extrabold text-[#014AAD]' : 'font-medium text-gray-500 group-hover:text-gray-700'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}