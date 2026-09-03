import Head from 'next/head';
import Link from 'next/link';

export default function DrivingSchoolLaxmiNagarPro() {
  const pageTitle = "Best Driving School in Laxmi Nagar | Book Car Classes & Trainers";
  const pageDescription = "Book certified driving instructors in Laxmi Nagar, Delhi. Choose manual or automatic cars with dual control, transparent pricing, and instant WhatsApp booking.";
  const canonicalUrl = "https://yourdomain.com/driving-school-in-laxmi-nagar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DriveSeekho - Laxmi Nagar",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vikas Marg, Laxmi Nagar, Nirman Vihar, Preet Vihar, Shakarpur",
      "addressLocality": "Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "description": pageDescription,
    "priceRange": "₹2,999 - ₹5,999",
    "telephone": "+918368510626"
  };

  const packages = [
    {
      id: 1,
      title: "Essential Starter",
      price: "₹2,999",
      carImage: "/images/i10.jpeg",
      carName: "Grand i10",
      transmission: "Manual / Dual Control",
      instructor: "Devender (11+ Exp)",
      trainingDays: "15 Days",
      dailyRide: "30 Mins",
      badge: "Great for Beginners"
    },
    {
      id: 2,
      title: "Pro Mastery",
      price: "₹3,499",
      carImage: "/images/baleno.jpg",
      carName: "Baleno",
      transmission: "Manual",
      instructor: "Amit (7+ Exp)",
      trainingDays: "10 Days",
      dailyRide: "8Km/ Day",
      badge: "Most Popular • Best Value"
    }
    
  ];

  const students = [
    {
      id: 1,
      name: "Ankit Verma",
      location: "Laxmi Nagar, Block V",
      image: "/images/student1.jpg",
      review: "The dual control car gave me immense confidence on Vikas Marg traffic. Booked via WhatsApp and got doorstep pickup instantly!"
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      location: "Shakarpur, Near Laxmi Nagar",
      image: "/images/student2.jpg",
      review: "My instructor Devender was extremely patient. Learning Manual transmission in just 15 days felt like a i10. Highly professional setup."
    },
    {
      id: 3,
      name: "Shubham",
      location: "Preet Vihar Border",
      image: "/images/student4.jpg",
      review: "Best Experience Raha and DriveSeekho also help in Driving License Process, exact instructor details mentioned upfront. Cleared my RTO test easily!"
    }
  ];

  const faqs = [
    {
      q: "Where in Laxmi Nagar do you provide doorstep pickup and drop?",
      a: "We provide completely free doorstep pickup and drop across all blocks of Laxmi Nagar, including Vikas Marg, Shakarpur, Nirman Vihar, and nearby East Delhi localities."
    },
    {
      q: "Are your training cars equipped with dual control brakes?",
      a: "Yes! 100% of our training fleet features certified dual-control setups, meaning our expert instructor has secondary brakes on the passenger side for absolute safety."
    },
    {
      q: "Can I choose between a manual or an automatic car?",
      a: "Absolutely. You can select either a manual transmission vehicle (like WagonR/Swift) or an automatic vehicle depending on your preference and what you drive at home."
    },
    {
      q: "How do I book a slot and pay for the driving classes?",
      a: "Our booking flow is instant and seamless. Just click 'Book on WhatsApp' on your preferred package, share your preferred timing, and our concierge confirms your slot instantly."
    },
    {
      q: "Do you help with RTO driving license tests and 'H' track practice?",
      a: "Yes, our packages include specialized mock test training sessions covering parallel parking, reverse driving, and the official RTO track layout."
    },
    {
      q: "Who will be my driving instructor?",
      a: "We assign verified, background-checked, and professional commercial license holders with years of experience handling dense Delhi traffic."
    },
    {
      q: "What is the duration of each daily driving session?",
      a: "Depending on the package you choose, daily driving sessions range strictly from 30 minutes to 60 minutes of uninterrupted behind-the-wheel practice."
    },
    {
      q: "Can working professionals get early morning or late evening slots in Laxmi Nagar?",
      a: "Yes, we offer flexible scheduling windows starting from early morning 6:00 AM slots up to late evening 8:00 PM slots for office commuters."
    },
    {
      q: "Is there any hidden charge apart from the package price displayed?",
      a: "Zero hidden charges. The price listed covers fuel, vehicle usage, instructor fees, and doorstep pickup/drop within Laxmi Nagar."
    },
    {
      q: "What documents are required to start the driving classes?",
      a: "You just need a valid Learner's License (LL) or a valid Government ID if you are starting basic compound training before applying for your official learner's permit."
    }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-rose-500 selection:text-white pb-20">
        
        {/* Airbnb-Style Sticky Top Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-rose-600">DriveSeekho</span>
              <span className="text-xs bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded-full border border-rose-200 hidden sm:inline-block">Laxmi Nagar Hub</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs font-semibold text-slate-500">Need Instant Help?</span>
                <a href="tel:+919876543210" className="text-sm font-bold text-slate-800 hover:text-rose-600">+91 98765 43210</a>
              </div>
              <a 
                href="https://wa.me/919876543210?text=Hi%20DriveSeekho,%20I%20want%20to%20book%20a%20driving%20slot%20in%20Laxmi%20Nagar." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm flex items-center gap-2"
              >
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Banner - High CTR & Clean Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col justify-center min-h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-40 lg:opacity-70 bg-cover bg-center z-0" style={{ backgroundImage: `url('/images/hero-car-laxmi-nagar.jpg')` }} />
            
            <div className="relative z-20 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Verified Instructors • Free Doorstep Pickup
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Drive with Confidence in <span className="text-rose-500 underline decoration-rose-500/40">Laxmi Nagar</span>
              </h1>
              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                Book professional dual-control car training instantly. Transparent pricing, expert certified mentors, and direct doorstep pickup across Vikas Marg and nearby sectors.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#packages" className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all text-center">
                  Explore Packages & Cars
                </a>
                <a href="#faq" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 transition-all text-center">
                  Read 10 FAQ Guides
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Airbnb-Style Card Grid: 3 Packages */}
        <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Select Your Driving Package</h2>
            <p className="text-slate-600 mt-3 text-base">Hand-picked cars, dedicated expert mentors, and guaranteed dual-control safety systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const waMessage = encodeURIComponent(`Hi DriveSeekho, I want to book the "${pkg.title}" package (${pkg.price}) for driving classes in Laxmi Nagar. Please confirm availability.`);
              const waLink = `https://wa.me/919876543210?text=${waMessage}`;

              return (
                <div key={pkg.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
                  {/* Image & Badge Container */}
                  <div className="relative h-56 bg-slate-100 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                    <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs z-10">
                      {pkg.badge}
                    </span>
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-semibold italic bg-slate-200/60 rounded-2xl">
                      [Car Image: {pkg.carName}]
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{pkg.title}</h3>
                          <p className="text-xs font-semibold text-rose-600 mt-0.5">{pkg.carName}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3 pt-6 border-t border-slate-100 text-sm text-slate-600">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-500">Assigned Instructor:</span>
                          <span className="font-bold text-slate-800">{pkg.instructor}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-500">Training Duration:</span>
                          <span className="font-bold text-slate-800">{pkg.trainingDays}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-500">Daily Ride Time:</span>
                          <span className="font-bold text-slate-800">{pkg.dailyRide}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-500">Transmission:</span>
                          <span className="font-bold text-slate-800">{pkg.transmission}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-500">Safety Standard:</span>
                          <span className="font-bold text-emerald-600">✓ 100% Dual Control</span>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp CTA Button */}
                    <div className="mt-8">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
                      >
                        <span>Book Now on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Student Reviews Section */}
        <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 my-12 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Trusted by Drivers in Laxmi Nagar</h2>
              <p className="text-slate-600 mt-2">See what our recent graduates have to say about their behind-the-wheel journey with us.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {students.map((student) => (
                <div key={student.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      ★★★★★
                    </div>
                    <p className="text-slate-700 italic leading-relaxed">"{student.review}"</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                      {student.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{student.name}</h4>
                      <p className="text-xs text-slate-500">{student.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Article Section: About DriveSeekho in Laxmi Nagar */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate lg:prose-lg">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Why DriveSeekho is Revolutionizing Driving Education in Laxmi Nagar
          </h2>
          <p>
            Navigating the bustling streets of Laxmi Nagar, from Vikas Marg to the narrow congested lanes near Nirman Vihar and Shakarpur, requires specialized driving expertise. Traditional driving schools often rely on outdated vehicles, ambiguous pricing models, and undertrained instructors. <strong>DriveSeekho</strong> was founded with a singular mission: to bring absolute transparency, premium comfort, and tech-enabled convenience to driver training in East Delhi.
          </p>
          <p>
            Our rigorous training framework ensures that every student does not merely learn how to pass the RTO permanent driving license test, but develops genuine defensive driving muscle memory. With dual-control fitted cars, you can practice without anxiety knowing our expert co-pilot has total emergency command. Furthermore, our doorstep pickup and drop service means you never have to waste time commuting to a remote training ground—your lesson starts right outside your gate in Laxmi Nagar.
          </p>
          <h3>Our Core Training Pillars</h3>
          <ul>
            <li><strong>Dual-Control Safety Guarantee:</strong> Secondary clutch and brake mechanisms installed on all cars for absolute beginner security.</li>
            <li><strong>Expert Mentorship:</strong> Certified instructors trained in defensive driving, patience, and traffic psychology.</li>
            <li><strong>RTO Test Simulator Practice:</strong> Special focus on parallel parking, reverse driving, and the official 'H' test track layout.</li>
            <li><strong>Frictionless WhatsApp Booking:</strong> Zero paperwork hassle; choose your package, click book, and lock in your slot instantly.</li>
          </ul>
        </section>

        {/* 10 Proper SEO FAQ Section */}
        <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2">Everything you need to know about our driving school services in Laxmi Nagar.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-3">
                  <span className="text-rose-600 text-sm bg-rose-50 w-7 h-7 rounded-full flex items-center justify-center shrink-0">0{index + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 mt-3 pl-10 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Conversion Footer */}
        <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black">Ready to Hit the Road?</h2>
            <p className="text-slate-400 mt-3">Book your certified driving instructor in Laxmi Nagar today with zero friction.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918368510626?text=Hi%20DriveSeekho,%20I%20want%20to%20book%20driving%20classes%20in%20Laxmi%20Nagar."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all"
              >
                Book via WhatsApp Now
              </a>
              <a
                href="tel:+918368510626"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl border border-white/20 transition-all"
              >
                Call: +91 8368510626
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-12">© 2026 DriveSeekho Technologies. Built for high conversion and seamless user experience.</p>
          </div>
        </footer>

      </main>
    </>
  );
}