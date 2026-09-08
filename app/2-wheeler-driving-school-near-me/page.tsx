'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TwoWheelerDrivingSchoolPage() {
  const [selectedPackage, setSelectedPackage] = useState('Starter Package (₹3,499)');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DriveSeekho - 2 Wheeler Driving School',
    image: 'https://driveseekho.com/logo.png',
    '@id': 'https://driveseekho.com',
    url: 'https://driveseekho.com/2-wheeler-driving-school-near-me',
    telephone: '+91-9876543210',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mayur Vihar Phase 3',
      addressLocality: 'Delhi',
      postalCode: '110096',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      opens: '05:00',
      closes: '22:00',
    },
    priceRange: '₹3499 - ₹4999',
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    const bookSection = document.getElementById('book-slot');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        
        {/* 1. TOP VIDEO SECTION (Moved to absolute top) */}
        <section className="w-full bg-slate-950 py-8 px-4 border-b border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
              Watch Live Training Session
            </span>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30 bg-slate-900">
              <iframe
                className="absolute inset-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/QjRZNoALxJg?autoplay=1&mute=1&loop=1&playlist=QjRZNoALxJg&controls=1&showinfo=0&modestbranding=1"
                title="DriveSeekho 2 Wheeler Training Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* 2. Hero Section */}
        <section className="relative w-full flex items-center justify-center overflow-hidden bg-slate-950 py-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Best 2 Wheeler Driving School <span className="text-blue-500">Near You</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Master riding a bike or scooty with professional confidence. Featuring structured ground practice, and real-world traffic training with free doorstep pickup & drop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#packages"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-base shadow-lg shadow-blue-600/30 transition-all duration-200 text-center"
              >
                Explore Packages
              </Link>
              <Link
                href="#book-slot"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-base backdrop-blur-md transition-all duration-200 text-center"
              >
                Book Your Slot
              </Link>
            </div>
          </div>
        </section>

        {/* Value Proposition Strip */}
        <section className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">5 AM - 10 PM</p>
              <p className="text-sm text-slate-600 mt-1">All Days Working</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">100% Free</p>
              <p className="text-sm text-slate-600 mt-1">Pickup & Drop Service</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">Bike & Scooty</p>
              <p className="text-sm text-slate-600 mt-1">Both Vehicles Available</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">Certified</p>
              <p className="text-sm text-slate-600 mt-1">Safe Training Track</p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Choose Your Professional Training Package
            </h2>
            <p className="text-slate-600 text-base">
              Best 2 wheeler training programs designed with free pickup and drop facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* Package 1: Starter */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                    Starter Pack
                  </span>
                  <span className="text-slate-400 text-sm">10 Days Program</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                <div className="text-3xl font-extrabold text-blue-600 mb-6">
                  ₹3,499 <span className="text-xs font-normal text-slate-500">/ complete course</span>
                </div>
                <ul className="space-y-3 text-slate-600 text-sm mb-8">
                  <li className="flex items-center gap-2">✓ Ground practice & 2 days on-road training</li>
                  <li className="flex items-center gap-2">✓ Daily 60 minutes session</li>
                  <li className="flex items-center gap-2 font-medium text-slate-900">✓ Free pickup and drop included</li>
                  <li className="flex items-center gap-2">✓ Bike and scooty both available</li>
                  <li className="flex items-center gap-2">✓ Right turn, left turn & round about practice</li>
                  <li className="flex items-center gap-2">✓ Speed breaker practice on real traffic junction</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPackage('Starter Package (₹3,499)')}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-medium text-center transition-colors duration-200 block cursor-pointer"
              >
                Select Starter
              </button>
            </div>

            {/* Package 2: Pro */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl transition-all duration-300 flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>
              <div>
                <div className="flex justify-between items-center mb-4 mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                    Pro Pack
                  </span>
                  <span className="text-slate-400 text-sm">15 Days Program</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro Rider</h3>
                <div className="text-3xl font-extrabold text-blue-600 mb-2">
                  ₹4,999 <span className="text-xs font-normal text-slate-500">/ complete course</span>
                </div>
                <p className="text-xs text-blue-600 font-medium mb-6 bg-blue-50 p-2 rounded-lg">
                  If you don't know how to ride a bicycle, this is best for you!
                </p>
                <ul className="space-y-3 text-slate-600 text-sm mb-8">
                  <li className="flex items-center gap-2">✓ 15 days session, daily 60 minutes ride</li>
                  <li className="flex items-center gap-2">✓ 5 days on-road training & 5 days ground practice</li>
                  <li className="flex items-center gap-2 font-medium text-slate-900">✓ Free pickup and drop service</li>
                  <li className="flex items-center gap-2">✓ Right & left turn, breaker practice, roundabout</li>
                  <li className="flex items-center gap-2">✓ Double stand practice</li>
                  <li className="flex items-center gap-2">✓ Start and brake practice</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPackage('Pro Rider Package (₹4,999)')}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-center shadow-lg shadow-blue-600/30 transition-colors duration-200 block cursor-pointer"
              >
                Select Pro Rider
              </button>
            </div>

          </div>
        </section>

        {/* Booking Slot & WhatsApp Integration Section */}
        <section id="book-slot" className="py-20 bg-white border-t border-slate-200 scroll-mt-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Book Your Training Slot</h2>
              <p className="text-slate-600">We operate 7 days a week from <span className="font-semibold text-slate-900">5:00 AM to 10:00 PM</span>. Select your time slot (e.g. 6:00 AM to 7:00 AM).</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target as typeof e.target & {
                    name: { value: string };
                    phone: { value: string };
                    package: { value: string };
                    timeSlot: { value: string };
                    address: { value: string };
                  };
                  const name = target.name.value;
                  const phone = target.phone.value;
                  const pkg = target.package.value;
                  const timeSlot = target.timeSlot.value;
                  const address = target.address.value;

                  const whatsappNumber = "918368510626"; 
                  const message = `Hello DriveSeekho,%0AI want to book a 2-Wheeler training slot.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Package:* ${pkg}%0A*Time Slot:* ${timeSlot}%0A*Pickup Address:* ${address}`;
                  
                  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white text-slate-900"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      name="phone"
                      type="tel" 
                      placeholder="10-digit mobile number" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white text-slate-900"
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Package</label>
                    <select 
                      name="package" 
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white text-slate-900"
                    >
                      <option value="Starter Package (₹3,499)">Starter Package - ₹3,499</option>
                      <option value="Pro Rider Package (₹4,999)">Pro Rider Package - ₹4,999</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Custom Time Slot</label>
                    <select name="timeSlot" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white text-slate-900">
                      <option value="06:00 AM - 07:00 AM">06:00 AM - 07:00 AM</option>
                      <option value="07:00 AM - 08:00 AM">07:00 AM - 08:00 AM</option>
                      <option value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</option>
                      <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                      <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                      <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                      <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                      <option value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM</option>
                      <option value="08:00 PM - 09:00 PM">08:00 PM - 09:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pickup Address (Free Doorstep Service)</label>
                  <textarea 
                    name="address"
                    rows={3} 
                    placeholder="Enter your complete address or landmark" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white text-slate-900"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Slot & Send on WhatsApp 🚀
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 10 SEO-Friendly FAQs Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-600">Got questions about finding the best 2 wheeler driving school near you? Find answers below.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">1. Do you provide a 2 wheeler driving school near me with home pickup?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Yes! DriveSeekho offers 100% free doorstep pickup and drop service across your location, making it the most convenient choice for your 2 wheeler training.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">2. What if I don't know how to ride a bicycle? Can I still join?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Absolutely. Our Pro Rider package (₹4,999) is specifically tailored for absolute beginners who do not know how to ride a bicycle. We start from basic balancing, double stands, and start/brake techniques.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">3. Are both bikes and scooties available for training?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Yes, DriveSeekho provides both gearless scooters (scooties) and geared motorcycles so you can learn on the vehicle of your choice.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">4. What is the duration of each daily training session?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Each daily training session lasts for a dedicated 60 minutes with an expert certified instructor guiding you step-by-step.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">5. What traffic situations and maneuvers are covered during classes?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Our curriculum covers ground balancing, right turns, left turns, roundabouts, speed breaker crossing, and real traffic junction handling.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">6. Can I select custom time slots for my driving classes?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Yes! We operate 7 days a week from 5:00 AM to 10:00 PM. You can choose convenient slots like early morning (e.g., 6:00 AM to 7:00 AM) or evening hours.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">7. How do I book a training slot and pay?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">You can easily fill out our online booking form on this page with your details and preferred time slot, and click 'Book Slot & Send on WhatsApp' to instantly connect with our team.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">8. Do you provide training for obtaining an RTO driving license?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">While our primary focus is building core riding confidence and safety skills on road, the training prepares you thoroughly to pass your RTO driving test successfully.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">9. Are the instructors certified and experienced?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Yes, all DriveSeekho trainers are professionally certified, polite, and experienced in teaching nervous and beginner riders safely.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">10. What is the difference between the Starter and Pro Rider packages?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">The Starter package (₹3,499) is a 10-day program suitable for people with basic balance, whereas the Pro Rider package (₹4,999) is a 15-day intensive program designed specifically for absolute beginners from scratch.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-center text-sm">
          <div className="max-w-7xl mx-auto px-4">
            <p className="font-bold text-white text-lg mb-2">DriveSeekho</p>
            <p className="mb-4">Your trusted motor training aggregator partner.</p>
            <p>© {new Date().getFullYear()} DriveSeekho. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}