'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, MessageCircle, FileText, ArrowRight, AlertTriangle } from 'lucide-react';

export default function DrivingLicensePage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'license' | 'update'>('all');
  const phoneNumber = "918368510626"; // Aapka WhatsApp Number

  const handleWhatsApp = (serviceName: string) => {
    const message = `Hi DriveSeekho Team, I want to apply for "${serviceName}". Please guide me with the process.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const services = [
    {
      id: 'learner',
      category: 'license',
      title: 'Learner License Online',
      badge: 'Basic',
      popular: false,
      features: [
        'Must you have aadhar card',
        'In your aadhar your current photo is updated',
        'Must be 18+ years of age',
        'Registerd aadhar number is required',
        'We handle all your paper work',
      ]
    },
    {
      id: 'permanent',
      category: 'license',
      title: 'Permanent Driving License',
      badge: 'Most Popular',
      popular: true,
      features: [
        'We handle all your paper work',
        'We provide our car in RTO office for test',
        'Provide training before test',
        '⚡ Pay service fees after you pass the test!'
      ]
    },
    {
      id: 'international',
      category: 'license',
      title: 'International Driving Permit (IDP)',
      badge: 'Global',
      popular: false,
      features: [
        'Must You have a valid Indian Driving License',
        'We handle all your paper work',
        'Passport',
        'Permit send to your address in 1 Day',
      ]
    },
    {
      id: 'renewal',
      category: 'update',
      title: 'Renew Driving License',
      badge: 'Renewal',
      popular: false,
      features: [
        'We handle all your paper work',
      ]
    },
    {
      id: 'address',
      category: 'update',
      title: 'Address Change in DL',
      badge: 'Update',
      popular: false,
      features: [
        'We handle all your paper work',
        'Update current residential address & Aadhaar sync',
        'Your driving license',
      ]
    },
    {
      id: 'transfer',
      category: 'update',
      title: 'DL State-to-State Transfer',
      badge: 'Transfer',
      popular: false,
      features: [
        'We handle all your paper work',
        'NOC (No Objection Certificate) assistance',
        'You must have driving license in your current state',
      ]
    }
  ];

  const filteredServices = services.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-24 selection:bg-blue-600 selection:text-white">
      
      {/* 1. Header & Hero Section */}
      <div className="relative bg-gradient-to-b from-[#dce9fd]/70 via-[#e8f1fd]/40 to-transparent pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-blue-100/60">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-blue-200/80 shadow-sm mb-5"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-900 tracking-wide">
              Govt Portal Assistance & Documentation Support
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight"
          >
            Fast & Hassle-Free <span className="text-blue-600">Driving License</span> Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base mt-3.5 max-w-2xl mx-auto font-medium"
          >
            Choose your required service below and connect instantly with our expert advisors on WhatsApp.
          </motion.p>
        </div>
      </div>

      {/* 2. Filter Segmented Tabs */}
      <div className="max-w-5xl mx-auto px-4 mt-8 flex justify-center">
        <div className="bg-white p-1.5 rounded-2xl flex gap-1.5 border border-slate-200/80 shadow-sm max-w-md w-full">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setSelectedCategory('license')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              selectedCategory === 'license'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            New Licenses
          </button>
          <button
            onClick={() => setSelectedCategory('update')}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              selectedCategory === 'update'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Updates & Transfers
          </button>
        </div>
      </div>

      {/* 3. Services Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                key={service.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative border ${
                  service.popular
                    ? 'border-blue-500 ring-2 ring-blue-100 shadow-blue-500/5'
                    : 'border-slate-200/90'
                }`}
              >
                {/* Popular / Feature Pill Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <FileText size={20} />
                  </div>
                  
                  <span
                    className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                      service.popular
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {service.title}
                  </h3>

                  <div className="w-full h-px bg-slate-100"></div>

                  <ul className="space-y-2.5 text-slate-600 text-xs sm:text-sm">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className={`mt-7 w-full py-3.5 px-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-95 ${
                    service.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25'
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                  }`}
                >
                  <MessageCircle size={17} />
                  <span>Book via WhatsApp</span>
                  <ArrowRight size={15} className="ml-0.5 opacity-80" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 4. Professional Disclaimer Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-5 sm:p-6 backdrop-blur-sm shadow-sm">
          <h4 className="text-amber-900 font-extrabold text-sm sm:text-base mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            Important Legal Disclaimer
          </h4>
          <p className="text-amber-800/90 text-xs sm:text-sm leading-relaxed font-normal">
            DriveSeekho is a private consultancy and assistance platform that helps users with online document preparation, slot booking, training, and application filing. Official driving licenses are issued strictly and solely by the Regional Transport Office (RTO) / Government authorities after mandatory testing and clearance. The service assistance is exclusively for documentation, training, and agency support.
          </p>
        </div>
      </div>

    </div>
  );
}