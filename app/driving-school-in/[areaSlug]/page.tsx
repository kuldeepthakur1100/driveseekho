'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, Star, MapPin, Calendar, User, 
  Car, Clock, Route, PhoneCall, MessageCircle, ChevronDown 
} from 'lucide-react';
import { packages } from '../../data'; 
import TimeSlotGrid from '@/components/TimeSlotGrid';

export default function DrivingSchoolDetail() {
  const params = useParams();
  const areaSlug = params?.areaSlug;

  const pkg = packages?.find((p) => p.areaSlug === areaSlug);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f7fc] px-5">
        <h1 className="text-2xl font-black text-gray-800 mb-4">School Not Found</h1>
        <p className="text-gray-500 mb-6 text-center">The driving school you are looking for does not exist or has been removed.</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl w-full mx-auto bg-[#f6f7fc] min-h-screen relative pb-32 md:pb-16 shadow-2xl overflow-x-hidden">
      
      {/* 1. Hero Image Section */}
      <div className="relative w-full h-[280px] md:h-[420px] bg-gray-200">
        <img 
          src={pkg.image || "https://placehold.co/600x400/eeeeee/999999?text=No+Image"} 
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        <Link href="/" className="absolute top-5 left-5 md:top-8 md:left-8 bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white hover:bg-white hover:text-black transition-all">
          <ArrowLeft size={24} />
        </Link>

        <div className="max-w-7xl mx-auto px-5 md:px-12 absolute bottom-6 md:bottom-10 left-0 right-0">
          <div className="flex items-center gap-1.5 bg-green-500/95 backdrop-blur-sm text-white w-max px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold mb-3 shadow-sm">
            <Star size={14} fill="currentColor" /> 4.8 (120 Ratings)
          </div>
          
          {/* H1 Tag for SEO */}
          <h1 className="text-[1.6rem] md:text-[2.6rem] font-black text-white leading-tight drop-shadow-md max-w-4xl">{pkg.title}</h1>
        </div>
      </div>

      {/* Main Content Container with Desktop Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 -mt-6 md:-mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT/MAIN COLUMN (Takes 2 Columns on Desktop) */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] px-5 md:px-10 py-8 md:py-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-100">
            
            {/* Location Box */}
            <div className="flex items-center gap-4 bg-[#f6f7fc] p-4 md:p-5 rounded-[1.25rem] mb-8 border border-gray-100">
              <div className="bg-blue-100/50 p-3 rounded-full text-blue-600 shrink-0">
                <MapPin size={24} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-[15px] md:text-[17px] font-extrabold text-gray-900">{pkg.subArea}, {pkg.city}</p>
              </div>
            </div>

            {/* Highlights Grid */}
            <h2 className="text-[18px] md:text-[20px] font-black text-gray-900 mb-4 tracking-tight">Course Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8">
              <div className="flex items-center gap-3.5 bg-white border border-gray-100 p-4 md:p-5 rounded-2xl shadow-sm md:col-span-2">
                <Car size={26} className="text-blue-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Training Vehicle</p>
                  <p className="text-[14px] md:text-[15px] font-black text-gray-900">{pkg.carName || 'Maruti Swift (Dual Control)'}</p>
                </div>
              </div>
              <div className="flex items-center md:flex-col md:items-start gap-3.5 md:gap-2 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                <Calendar size={22} className="text-blue-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Duration</p>
                  <p className="text-[13px] md:text-[14px] font-black text-gray-900">{pkg.trainingDays}</p>
                </div>
              </div>
              <div className="flex items-center md:flex-col md:items-start gap-3.5 md:gap-2 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                <Clock size={22} className="text-blue-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Daily Ride</p>
                  <p className="text-[13px] md:text-[14px] font-black text-gray-900">{pkg.dailyRide || '5 KM / 30 Mins'}</p>
                </div>
              </div>
            </div>

            {/* Time Slot Selection */}
            <div className="mb-8">
              <TimeSlotGrid />
            </div>

            {/* SEO Article Section */}
            <div className="mb-8 border-t border-gray-100 pt-8">
              <h2 className="text-[18px] md:text-[20px] font-black text-gray-900 mb-3 tracking-tight">
                Best Driving School in {pkg.subArea}, {pkg.city}
              </h2>
              <div className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed font-medium space-y-4">
                <p>
                  {pkg.seoContent || `Are you looking for the best car driving school near ${pkg.subArea}? Our ${pkg.title} provides professional training with experienced instructors. We focus on safe driving, traffic rules, and confidence building on the busy streets of ${pkg.city}.`}
                </p>
                <p>
                  Whether you are a complete beginner or looking to brush up on your driving skills, our {pkg.trainingDays} course is designed to make you a pro. We provide dual-control vehicles like {pkg.carName || 'Maruti Swift'} to ensure 100% safety during your learning period. Book your slot today and enjoy benefits like doorstep pickup and flexible timings.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-[18px] md:text-[20px] font-black text-gray-900 mb-5 tracking-tight">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {(pkg.faqs || [
                  { q: `Do I need a learner's license to join?`, a: `No, you can start your training without a learner's license. However, we can assist you in applying for one during your course.` },
                  { q: `Is pickup and drop provided in ${pkg.subArea}?`, a: `Yes, we provide free pickup and drop services for all our students within ${pkg.subArea} and nearby locations.` },
                  { q: `Are the training cars safe?`, a: `Absolutely! All our training vehicles are equipped with dual controls (extra clutch and brake for the instructor) for your complete safety.` }
                ]).map((faq: any, index: number) => (
                  <details key={index} className="group bg-gray-50 border border-gray-100 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-4 md:p-5 font-extrabold text-[13px] md:text-[14px] text-gray-900">
                      {faq.q}
                      <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                    </summary>
                    <div className="px-4 md:px-5 pb-4 text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN / STICKY BOOKING CARD (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1 lg:sticky lg:top-8 bg-white rounded-[2.5srem] md:rounded-[2.5rem] p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 space-y-6">
            <div>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Total Fee</p>
              <p className="text-[2.2rem] font-black text-[#1e5bff] leading-none tracking-tight">{pkg.price}</p>
            </div>

            <div className="border-t border-gray-100 pt-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-medium">Category</span>
                <span className="font-bold text-gray-800">{pkg.category || 'Car'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-medium">Duration</span>
                <span className="font-bold text-gray-800">{pkg.trainingDays}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-medium">Vehicle</span>
                <span className="font-bold text-gray-800">{pkg.carName || 'Hatchback'}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-5 flex flex-col gap-3">
              <a 
                href={`https://wa.me/${pkg.whatsappNumber || '918368510626'}?text=Hi, I want to know more about the ${pkg.title} package in ${pkg.subArea}.`} 
                target="_blank"
                className="w-full bg-[#25D366] text-white font-black text-[15px] py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:bg-[#20b858] active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle size={20} strokeWidth={2.5} /> Chat on WhatsApp
              </a>

              <a 
                href={`tel:${pkg.phoneNumber || '+918368510626'}`} 
                className="w-full bg-blue-50 text-blue-600 font-extrabold text-[15px] py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-blue-100 active:scale-95 transition-all cursor-pointer border border-blue-100"
              >
                <PhoneCall size={20} strokeWidth={2.5} /> Call Direct
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
              <p className="text-xs text-gray-500 font-medium">✓ 100% Safe Dual-Control Cars<br />✓ Free Doorstep Pickup & Drop</p>
            </div>
          </div>

        </div>
      </div>

     {/* 3. Sticky Bottom Action Bar (Mobile Only) */}
<div className="fixed bottom-16 sm:bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-5 flex items-center justify-between z-50 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
  <div>
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Total Fee</p>
    <p className="text-[1.5rem] font-black text-gray-900 leading-none tracking-tight">
      {pkg.price || '₹4,999'}
    </p>
  </div>
  
  <div className="flex items-center gap-2">
    <a 
      href={`tel:${pkg.phoneNumber || '+918368510626'}`} 
      className="bg-blue-100 text-blue-600 p-3 rounded-[1rem] hover:bg-blue-200 active:scale-95 transition-all flex items-center justify-center"
    >
      <PhoneCall size={20} strokeWidth={2.5} />
    </a>
    <a 
      href={`https://wa.me/${pkg.whatsappNumber || '918368510626'}?text=Hi, I want to know more about the ${pkg.title} package in ${pkg.subArea}.`} 
      target="_blank"
      className="bg-[#25D366] text-white font-black text-[14px] px-5 py-3 rounded-[1rem] flex items-center gap-2 shadow-[0_6px_15px_rgba(37,211,102,0.25)] hover:bg-[#20b858] active:scale-95 transition-all"
    >
      <MessageCircle size={18} strokeWidth={2.5} /> Book Now
    </a>
  </div>
</div>

    </main>
  );
}