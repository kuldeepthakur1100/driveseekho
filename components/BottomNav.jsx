'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, FileText, MessageCircle } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'License', href: '/driving-license', icon: FileText },
    { name: 'Our Students', href: '/achievers', icon: Search },
    { name: 'WhatsApp', href: 'https://wa.me/918368510626', icon: MessageCircle, external: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:hidden">
      <div className="flex justify-around items-center py-1.5 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return item.external ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-gray-400 hover:text-emerald-600 transition-all duration-200 py-1 px-3 rounded-xl hover:bg-emerald-50"
            >
              <Icon size={20} className="transition-transform active:scale-95 text-emerald-600" />
              <span className="text-[10px] font-semibold mt-1 tracking-tight text-emerald-700">{item.name}</span>
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center transition-all duration-200 py-1.5 px-4 rounded-2xl ${
                isActive 
                  ? 'text-blue-600 bg-blue-50/80 font-semibold shadow-sm' 
                  : 'text-gray-400 hover:text-blue-500 hover:bg-gray-50'
              }`}
            >
              <Icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 2} 
                className="transition-transform active:scale-95" 
              />
              <span className="text-[10px] mt-1 tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}