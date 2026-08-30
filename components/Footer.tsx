import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Yeh line zaroori hai!

const Footer = () => {
  return (
    <footer className="bg-[#014AAD] text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* Top-Right Side Image */}
 {/* Top-Right Side Pendulum Image */}
<div className="absolute -top-5 -right-10 md:-top-16 md:right-5 w-60 h-60 md:w-48 md:h-48 z-10 pointer-events-none animate-pendulum">
  <Image 
    src="/images/footerimage.png" 
    alt="Decoration" 
    fill 
    className="object-contain"
  />
</div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Column 1: Brand Logo */}
        <div className="space-y-3">
          <div className="relative flex items-center h-16 px-2">
  <span className="font-poppins text-2xl font-bold tracking-tight text-gray-900">
    Drive<span className="text-primary">Seekho</span>
  </span>
</div>
          <p className="text-white text-sm leading-relaxed opacity-90">
            DriveSeekho helps learners find<br></br> trusted driving schools, compare<br></br> packages, and book driving lessons<br></br> online across Delhi NCR.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-white text-lg">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Driving Test Track", path: "/driving-test-track-in-delhi" },
              { name: "Contact Us", path: "/contact" },
              { name: "FAQ", path: "/FAQ" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path} 
                  className="text-white/80 hover:text-white transition-colors font-medium block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="font-bold mb-6 text-white text-lg">Legal</h4>
          <ul className="space-y-3">
            {[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms & Conditions", path: "/terms-and-conditions" },
              { name: "Cancellation & Refund Policy", path: "/cancellation-and-refund-policy" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path} 
                  className="text-white/80 hover:text-white transition-colors font-medium block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-4">
          <h4 className="font-bold mb-6 text-white text-lg">Need Help?</h4>
          <p className="text-white font-medium">Phone: +91 8368510626</p>
          <p className="text-white font-medium">Email: support@driveseekho.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-80 relative z-10">
        <p>© 2026 DriveSeekho™ All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;