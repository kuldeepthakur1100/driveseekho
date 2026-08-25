import Image from 'next/image';
import Link from 'next/link';

// SEO Optimized Metadata
export const metadata = {
  title: 'Driving Test Track Training in Delhi | Pass Your Driving Test in 1st Attempt',
  description: 'Get 1 hour practical training on Delhi RTO driving test tracks. Learn Reverse S, 8 Formation, & Parallel Parking at just ₹499. Book professional trainer now!',
  keywords: 'driving test track delhi, rto driving test practice delhi, permanent driving license test training, parallel parking practice delhi',
};

export default function DrivingTestTrackPage() {
  const trackSteps = [
    {
      title: '1. Reverse S Track',
      desc: 'Learn how to smoothly reverse your car in an S-shape curve without touching the boundaries or cones.',
    },
    {
      title: "2. Figure '8' Formation",
      desc: 'Master the tricky 8-shape driving technique to control steering balance smoothly in tight spaces.',
    },
    {
      title: '3. Traffic Junction',
      desc: 'Understand real-world junction rules, lane changing, and safe driving protocols tested by RTO officers.',
    },
    {
      title: '4. Red Light & Signal Control',
      desc: 'Practice stopping precisely at stop lines, managing signals, and maintaining vehicle control.',
    },
    {
      title: '5. Parallel Parking',
      desc: 'Learn the exact judging formula to park your car safely in a tight parallel slot in a single attempt.',
    },
    {
      title: '6. Gradient / Up-Hill Drive',
      desc: 'Overcome the fear of driving on slopes without rolling backward using clutch and handbrake control.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">DriveSeekho <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Test Track Training</span></h1>
          <a href="#book" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow">
            Book Trainer (₹499)
          </a>
        </div>
      </section>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* Heading & Trust Badge */}
        <div className="text-center space-y-2">
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            100% Genuine RTO Track Training
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Pass Your Driving Test in <span className="text-blue-600">1st Attempt!</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Get professional 1-hour practical training on a replica driving test track near you in Delhi before your actual RTO test.
          </p>
        </div>

        {/* --- VIDEO SECTION --- */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-lg aspect-video relative flex items-center justify-center">
          {/* Yahan aap apni YouTube video ya self-hosted video ka iframe laga sakte hain */}
          <div className="text-center text-white p-6">
            <p className="text-sm text-gray-400 mb-2">▶ Watch How Our Training Works</p>
            <iframe 
              className="w-full h-[300px] md:h-[400px] rounded-xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
              title="Driving Test Track Training Delhi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* --- PRICE & BOOKING BANNER --- */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-xl">
          <div className="space-y-2 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">1-Hour Practical Training Session</h3>
            <p className="text-blue-100 text-sm">Includes complete track layout practice with an expert trainer.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold mb-1">₹499 <span className="text-sm font-normal text-blue-200">only</span></div>
            <a href="#book" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-xl shadow transition">
              Book Your Trainer Now
            </a>
          </div>
        </div>

        {/* --- TRACK DETAILS / STEPS GRID --- */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            What You Will Practice on Our Simulated Track
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trackSteps.map((step, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <h4 className="font-bold text-lg text-blue-600 mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- WHY CHOOSE US --- */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Why Trust DriveSeekho Test Training?</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">✅ **Expert Trainers:** Learn exact inspection tips directly from experienced drivers.</li>
            <li className="flex items-center gap-2">✅ **Zero Fear:** Overcome nervousness before stepping into the official RTO center.</li>
            <li className="flex items-center gap-2">✅ **Affordable Price:** Professional training at just ₹499 with no hidden charges.</li>
          </ul>
        </div>

        {/* --- BOOKING FORM SECTION --- */}
        <div id="book" className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Book Your 1-Hour Track Session</h3>
          <p className="text-gray-500 text-center text-sm mb-6">Fill in your details and our team will call you to confirm your slot.</p>
          
          <form className="space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (WhatsApp)</label>
              <input type="tel" placeholder="10-digit mobile number" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location in Delhi</label>
              <select className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option>East Delhi / Mayur Vihar Track</option>
                <option>Sarai Kale Khan Track</option>
                <option>Loni Road Track</option>
                <option>Dwarka Track</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-xl shadow-lg transition">
              Confirm Booking (Pay ₹499 at Track)
            </button>
          </form>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t mt-12 py-6 text-center text-gray-500 text-sm">
        <p>© 2026 DriveSeekho. All rights reserved. Helping Delhi drivers pass tests smoothly.</p>
      </footer>

    </div>
  );
}