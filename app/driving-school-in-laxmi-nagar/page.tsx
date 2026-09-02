import Head from 'next/head';
import Link from 'next/link';

export default function DrivingSchoolInLaxmiNagar() {
  const pageTitle = "Driving School in Laxmi Nagar Delhi | Car & Bike Driving Classes";
  const pageDescription = "Looking for the best driving school in Laxmi Nagar, Delhi? Learn car and bike driving with expert trainers, free doorstep pickup & drop, and complete RTO license test training.";
  const canonicalUrl = "https://yourdomain.com/driving-school-in-laxmi-nagar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Car and Bike Driving Classes",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DriveSeekho",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Laxmi Nagar",
        "addressLocality": "Delhi",
        "postalCode": "110092",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Laxmi Nagar, Delhi"
    },
    "description": pageDescription,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "2999",
      "highPrice": "5999"
    }
  };

  const faqData = [
    {
      question: "Do you provide car and bike training both in Laxmi Nagar?",
      answer: "Yes, we offer professional training for both four-wheelers (manual and automatic cars) and two-wheelers (scooty and geared bikes) across Laxmi Nagar."
    },
    {
      question: "Is free pickup and drop available from my home in Laxmi Nagar?",
      answer: "Yes, completely free doorstep pickup and drop service is available right from your location anywhere in Laxmi Nagar and nearby areas."
    },
    {
      question: "How many days does it take to learn car driving completely?",
      answer: "Our standard car driving courses range from 10 to 21 days, designed to take you from a total beginner to a confident driver in heavy traffic."
    },
    {
      question: "Do you assist with the permanent driving license and RTO test track practice?",
      answer: "Yes, we provide full guidance for your learning license, permanent license, and practical mock sessions on RTO test tracks like the 'H' track and parallel parking."
    }
  ];

  const studentPhotos = [
    {
      id: 1,
      name: "Rohit Malhotra",
      review: "Cleared my driving test easily on the first attempt. Excellent instructors in Laxmi Nagar!"
    },
    {
      id: 2,
      name: "Neha Singhal",
      review: "The free pickup and drop made daily classes super convenient before my office hours."
    },
    {
      id: 3,
      name: "Amit Kumar",
      review: "Learned manual car driving in heavy Delhi traffic without any fear. Highly recommended!"
    }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Top Rated in East Delhi
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Driving School in Laxmi Nagar, Delhi
              </h1>
              <p className="mt-4 text-blue-100 text-lg">
                Learn car and bike driving from certified professional trainers. Safe dual-control cars, free doorstep pickup & drop, and complete RTO test preparation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
                >
                  View Packages & Pricing
                </a>
                <a
                  href="tel:+919876543210"
                  className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Call Now for Booking
                </a>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our School?</h3>
              <ul className="space-y-3 text-blue-50">
                <li className="flex items-center gap-2">✓ Certified & Friendly Trainers</li>
                <li className="flex items-center gap-2">✓ Free Doorstep Pickup & Drop</li>
                <li className="flex items-center gap-2">✓ Manual & Automatic Cars Available</li>
                <li className="flex items-center gap-2">✓ 100% RTO Test Track Support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course Details / Specs Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Training Specifications & Details</h2>
            <p className="text-gray-600 mt-2">Structured learning modules designed for absolute beginners and nervous drivers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-blue-600 font-bold text-xl mb-2">Duration</div>
              <div className="text-2xl font-extrabold text-gray-900">10 - 21 Days</div>
              <p className="text-gray-500 text-sm mt-1">Step-by-step curriculum</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-blue-600 font-bold text-xl mb-2">Daily Ride Time</div>
              <div className="text-2xl font-extrabold text-gray-900">30 - 60 Mins</div>
              <p className="text-gray-500 text-sm mt-1">Dedicated behind-the-wheel time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-blue-600 font-bold text-xl mb-2">Vehicles</div>
              <div className="text-2xl font-extrabold text-gray-900">Car & Bike</div>
              <p className="text-gray-500 text-sm mt-1">Hatchback, Sedan & Scooty</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-blue-600 font-bold text-xl mb-2">Convenience</div>
              <div className="text-2xl font-extrabold text-gray-900">Free Pickup</div>
              <p className="text-gray-500 text-sm mt-1">Directly from your doorstep</p>
            </div>
          </div>
        </section>

        {/* Pricing & Packages Section */}
        <section id="pricing" className="bg-gray-100 py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Affordable Driving Packages in Laxmi Nagar</h2>
              <p className="text-gray-600 mt-2">Transparent pricing plans with no hidden costs. Choose what suits you best.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Package 1 */}
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">Basic Starter</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">10 Days Course</h3>
                  <div className="text-4xl font-extrabold text-gray-900 mt-4">₹2,999</div>
                  <ul className="mt-6 space-y-3 text-gray-600">
                    <li>✓ 10 Training Days</li>
                    <li>✓ 30 Mins Daily Session</li>
                    <li>✓ Choice of Car or Bike</li>
                    <li>✓ Free Pickup & Drop in Laxmi Nagar</li>
                  </ul>
                </div>
                <a href="#contact" className="mt-8 block text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                  Book This Plan
                </a>
              </div>

              {/* Package 2 - Popular */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-600 flex flex-col justify-between relative">
                <span className="absolute -top-3 right-8 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">Complete Traffic Pro</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">15 Days Comprehensive</h3>
                  <div className="text-4xl font-extrabold text-gray-900 mt-4">₹4,499</div>
                  <ul className="mt-6 space-y-3 text-gray-600">
                    <li>✓ 15 Training Days</li>
                    <li>✓ 45 Mins Daily Session</li>
                    <li>✓ Heavy Traffic & Market Driving</li>
                    <li>✓ Free Pickup & Drop</li>
                    <li>✓ RTO Test Track & Parking Practice</li>
                  </ul>
                </div>
                <a href="#contact" className="mt-8 block text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                  Book This Plan
                </a>
              </div>

              {/* Package 3 */}
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">Mastery Plan</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">21 Days Advanced</h3>
                  <div className="text-4xl font-extrabold text-gray-900 mt-4">₹5,999</div>
                  <ul className="mt-6 space-y-3 text-gray-600">
                    <li>✓ 21 Training Days</li>
                    <li>✓ 45-60 Mins Daily Session</li>
                    <li>✓ Highway & Night Driving Practice</li>
                    <li>✓ Free Pickup & Drop</li>
                    <li>✓ Complete License Assistance</li>
                  </ul>
                </div>
                <a href="#contact" className="mt-8 block text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                  Book This Plan
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Student Photos & Success Stories */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Successful Students from Laxmi Nagar</h2>
            <p className="text-gray-600 mt-2">Real feedback from learners who gained total road confidence with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentPhotos.map((student) => (
              <div key={student.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-48 bg-gray-200 relative flex items-center justify-center text-gray-400 font-medium">
                  Student Photo Placeholder
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-gray-900">{student.name}</h4>
                  <p className="text-gray-600 text-sm mt-2 italic">"{student.review}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Space / Expansion Slot */}
        <section className="bg-blue-50 py-12 px-4 md:px-8 border-y border-blue-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900">Custom Content / Route Specialization Space</h2>
            <p className="text-blue-700 mt-2">
              [Reserved space for adding specific Laxmi Nagar landmarks like Vikas Marg, Metro Station pickup points, or special seasonal discounts.]
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Got questions about our driving school in Laxmi Nagar? Find answers below.</p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Booking CTA Section */}
        <section id="contact" className="bg-gray-900 text-white py-16 px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Ready to Start Driving?</h2>
            <p className="text-gray-400 mt-3">Book your slot today and get free doorstep pickup in Laxmi Nagar, Delhi.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Call Now: +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20book%20driving%20classes%20in%20Laxmi%20Nagar."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}