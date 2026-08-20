'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="min-h-screen bg-gray-950 text-white pb-20 selection:bg-[#c0fc71] selection:text-black">
      
      {/* 1. Hero Section */}
      <div className="relative w-full h-[360px] sm:h-[460px] overflow-hidden bg-black flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          src="/videos/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 translate-y-12 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-60 sm:mt-28">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md"
          >
            Fast & Hassle-Free <span style={{ color: '#c0fc71' }}>Driving License</span> Services
          </motion.h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-xl mx-auto font-normal">
            Choose your required service below and connect instantly with our expert advisors on WhatsApp.
          </p>
        </div>
      </div>

      {/* 2. Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-20 flex justify-center">
        <div className="bg-gray-900/90 border border-gray-800 p-1.5 rounded-2xl flex gap-2 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedCategory === 'all' ? 'text-black font-bold shadow-lg' : 'text-gray-400 hover:text-white'}`}
            style={selectedCategory === 'all' ? { backgroundColor: '#c0fc71' } : {}}
          >
            All Services
          </button>
          <button
            onClick={() => setSelectedCategory('license')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedCategory === 'license' ? 'text-black font-bold shadow-lg' : 'text-gray-400 hover:text-white'}`}
            style={selectedCategory === 'license' ? { backgroundColor: '#c0fc71' } : {}}
          >
            New Licenses
          </button>
          <button
            onClick={() => setSelectedCategory('update')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedCategory === 'update' ? 'text-black font-bold shadow-lg' : 'text-gray-400 hover:text-white'}`}
            style={selectedCategory === 'update' ? { backgroundColor: '#c0fc71' } : {}}
          >
            Updates & Transfers
          </button>
        </div>
      </div>

      {/* 3. Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                key={service.id}
                className={`bg-gray-900 rounded-3xl p-7 flex flex-col justify-between shadow-xl relative overflow-hidden border ${service.popular ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-[#c0fc71]/10' : 'border-gray-800'}`}
                style={service.popular ? { borderColor: 'rgba(192, 252, 113, 0.6)' } : {}}
              >
                {/* Top Badge */}
                <div 
                  className={`absolute top-0 right-0 text-xs font-bold px-3.5 py-1.5 rounded-bl-2xl uppercase tracking-wider ${service.popular ? 'text-black' : 'bg-blue-600 text-white'}`}
                  style={service.popular ? { backgroundColor: '#c0fc71' } : {}}
                >
                  {service.badge}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white pr-10">{service.title}</h3>

                  <hr className="border-gray-800 my-2" />

                  <ul className="space-y-2.5 text-gray-300 text-sm">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-bold mt-0.5" style={{ color: '#c0fc71' }}>✓</span> 
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className={`mt-8 w-full py-3.5 px-6 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 text-sm ${service.popular ? 'text-black hover:opacity-90' : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'}`}
                  style={service.popular ? { backgroundColor: '#c0fc71' } : {}}
                >
                  <span>💬 Book via WhatsApp</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 4. Professional Disclaimer Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gray-900/60 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-md">
          <h4 className="text-yellow-400 font-semibold text-base mb-2 flex items-center gap-2">
            ⚠️ Important Legal Disclaimer
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            DriveSeekho is a private consultancy and assistance platform that helps users with online document preparation, slot booking, training, and application filing. Official driving licenses are issued strictly and solely by the Regional Transport Office (RTO) / Government authorities after mandatory testing and clearance. The service assistance is exclusively for documentation, training, and agency support.
          </p>
        </div>
      </div>

    </div>
  );
}