import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, Star, MapPin, Calendar, 
  Car, Clock, PhoneCall, MessageCircle, ChevronDown, CheckCircle2, ShieldCheck 
} from 'lucide-react';
import { packages } from '../../data'; 
import TimeSlotGrid from '@/components/TimeSlotGrid';

// 1. Generate Static Paths for all areas
export async function generateStaticParams() {
  return packages.map((pkg) => ({
    areaSlug: pkg.areaSlug,
  }));
}

// 2. Dynamic SEO Metadata for every area page
export async function generateMetadata({ params }: { params: Promise<{ areaSlug: string }> }) {
  const { areaSlug } = await params;
  const pkg = packages.find((p) => p.areaSlug === areaSlug);
  
  if (!pkg) {
    return {
      title: 'Page Not Found | DriveSeekho',
    };
  }

  return {
    title: pkg.seoTitle || `Best Bike & Two Wheeler Driving School in ${pkg.subArea} | DriveSeekho`,
    description: pkg.seoDescription || `Join professional two-wheeler & gear bike driving classes in ${pkg.subArea}, ${pkg.city}. Expert trainers and doorstep pickup available.`,
    alternates: {
      canonical: `https://driveseekho.com/2-wheeler-driving-school-in/${pkg.areaSlug}`,
    },
    openGraph: {
      title: pkg.seoTitle || `Best Bike Driving School in ${pkg.subArea} | DriveSeekho`,
      description: pkg.seoDescription || `Professional bike training classes in ${pkg.subArea}.`,
      url: `https://driveseekho.com/2-wheeler-driving-school-in/${pkg.areaSlug}`,
      siteName: 'DriveSeekho',
      type: 'website',
    },
  };
}

// 3. Main Component
export default async function DrivingSchoolDetail({ params }: { params: Promise<{ areaSlug: string }> }) {
  const { areaSlug } = await params;
  const pkg = packages?.find((p) => p.areaSlug === areaSlug);

  if (!pkg) {
    notFound();
  }

  // LocalBusiness / DrivingSchool Schema Markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `DriveSeekho - Bike Driving School ${pkg.subArea}`,
    'image': pkg.image || 'https://driveseekho.com/logo.png',
    'description': pkg.seoDescription,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': pkg.subArea,
      'addressLocality': pkg.city,
      'addressRegion': 'Delhi/NCR',
      'postalCode': '110092',
      'addressCountry': 'IN'
    },
    'priceRange': pkg.price ? `₹${pkg.price}` : '₹2,999 - ₹5,999',
    'telephone': pkg.phoneNumber || '+918368510626',
    'url': `https://driveseekho.com/2-wheeler-driving-school-in/${pkg.areaSlug}`
  };

  return (
    <main className="max-w-7xl w-full mx-auto bg-slate-50 min-h-screen relative pb-40 lg:pb-16 selection:bg-blue-600 selection:text-white">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Image Section */}
      <div className="relative w-full h-[300px] md:h-[450px] bg-slate-900">
        <img 
          src={pkg.image || "https://placehold.co/1200x600/1e293b/94a3b8?text=Bike+Driving+School"} 
          alt={pkg.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        
        <Link 
          href="/" 
          className="absolute top-5 left-5 md:top-8 md:left-8 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-slate-950 transition-all border border-white/20 shadow-xl"
        >
          <ArrowLeft size={22} />
        </Link>

        <div className="max-w-7xl mx-auto px-5 md:px-12 absolute bottom-6 md:bottom-10 left-0 right-0">
          <div className="flex items-center gap-2 bg-emerald-500 text-white w-max px-3.5 py-1.5 rounded-full text-xs md:text-sm font-black mb-3 shadow-lg shadow-emerald-500/20">
            <Star size={14} fill="currentColor" /> 4.8 <span className="opacity-80 font-normal">(56+ Reviews)</span>
          </div>
          
          <h1 className="text-[1.75rem] md:text-[3rem] font-black text-white leading-tight tracking-tight drop-shadow-sm max-w-4xl">
            {pkg.title}
          </h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 -mt-6 md:-mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] px-5 md:px-10 py-8 md:py-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            
            <div className="flex items-center gap-4 bg-slate-50 p-4 md:p-5 rounded-2xl mb-8 border border-slate-100/80">
              <div className="bg-blue-500/10 p-3.5 rounded-xl text-blue-600 shrink-0">
                <MapPin size={22} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Service Location</p>
                <p className="text-[15px] md:text-[17px] font-extrabold text-slate-900">{pkg.subArea}, {pkg.city}</p>
              </div>
            </div>

            <h2 className="text-[18px] md:text-[20px] font-black text-slate-900 mb-4 tracking-tight">Course Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4 mb-10">
              
              <div className="flex items-center gap-4 bg-slate-50/80 border border-slate-100 p-4 md:p-5 rounded-2xl md:col-span-2">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-600 shrink-0">
                  <Car size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Training Vehicle</p>
                  <p className="text-[14px] md:text-[16px] font-black text-slate-900">{pkg.carName || 'Geared Bike & Scooty'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50/80 border border-slate-100 p-4 md:p-5 rounded-2xl">
                <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-600 shrink-0">
                  <Calendar size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Course Duration</p>
                  <p className="text-[14px] md:text-[15px] font-black text-slate-900">{pkg.trainingDays}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50/80 border border-slate-100 p-4 md:p-5 rounded-2xl">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-600 shrink-0">
                  <Clock size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Daily Session</p>
                  <p className="text-[14px] md:text-[15px] font-black text-slate-900">{pkg.dailyRide || '30 Mins'}</p>
                </div>
              </div>
            </div>

            <div className="mb-10 bg-slate-50/60 p-5 md:p-6 rounded-3xl border border-slate-100">
              <TimeSlotGrid />
            </div>

            {/* SEO Content Section */}
            <div className="mb-10 border-t border-slate-100 pt-8">
              <div className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed font-medium space-y-4">
                <div dangerouslySetInnerHTML={{ __html: pkg.seoContent?.replace(/\n/g, '<br />') || '' }} />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-[18px] md:text-[20px] font-black text-slate-900 mb-5 tracking-tight">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {pkg.faqs?.map((faq: any, index: number) => (
                  <details key={index} className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden transition-all">
                    <summary className="flex items-center justify-between cursor-pointer p-4 md:p-5 font-extrabold text-[13px] md:text-[14px] text-slate-900 select-none">
                      {faq.q}
                      <ChevronDown size={18} className="text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                    </summary>
                    <div className="px-4 md:px-5 pb-5 text-[13px] md:text-[14px] text-slate-600 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Booking Sidebar */}
          <div className="hidden lg:block lg:col-span-1 lg:sticky lg:top-8 bg-white rounded-[2.5rem] p-7 md:p-8 shadow-2xl shadow-slate-200/60 border border-slate-100 space-y-6">
            <div>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Package Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[2.5rem] font-black text-blue-600 tracking-tight leading-none">{pkg.price}</span>
                <span className="text-xs text-slate-400 font-bold">All inclusive</span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5 space-y-3.5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 font-medium">Vehicle Type</span>
                <span className="font-bold text-slate-900">{pkg.category || 'Two Wheeler'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 font-medium">Duration</span>
                <span className="font-bold text-slate-900">{pkg.trainingDays}</span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5 flex flex-col gap-3">
              <a 
                href={`https://wa.me/${pkg.whatsappNumber || '918368510626'}?text=Hi, I want to book the bike training package in ${pkg.subArea}.`} 
                target="_blank"
                className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-black text-[15px] py-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle size={20} strokeWidth={2.5} /> Book on WhatsApp
              </a>

              <a 
                href={`tel:${pkg.phoneNumber || '+918368510626'}`} 
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-[15px] py-4 rounded-2xl flex items-center justify-center gap-2.5 active:scale-95 transition-all cursor-pointer border border-slate-200/60"
              >
                <PhoneCall size={18} strokeWidth={2.5} /> Call Expert
              </a>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0" /> Safe Training Bikes & Scooty
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                <CheckCircle2 size={16} className="text-blue-500 shrink-0" /> Free Doorstep Pickup & Drop
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}