import React, { useState } from 'react';
import Head from 'next/head'; // Agar Next.js use kar rahe hain, warna standard React helmet use kar sakte hain

const faqData = [
  {
    question: "DriveSeekho kya hai aur yeh kaise kaam karta hai?",
    answer: "DriveSeekho Delhi NCR ka ek leading motor training aggregator platform hai. Yeh aapko aapke nazdeeki verified aur best driving schools se connect karta hai, jahan aap apni pasand ke trainer aur package ke hisaab se car driving sikh sakte hain."
  },
  {
    question: "Kya DriveSeekho driving license (DL) banwane mein bhi madad karta hai?",
    answer: "Haan! DriveSeekho ke through aap na sirf driving sikh sakte hain, balki Learners License aur Permanent Driving License banwane ki process (jaise RTO paperwork aur slots booking) mein bhi complete guidance aur assistance paate hain."
  },
  {
    question: "Kya main apne ghar ke paas ka driving school chun sakta hoon?",
    answer: "Bilkul. DriveSeekho par Delhi NCR ke lagbhag sabhi major locations (jaise Mayur Vihar, Noida, Ghaziabad, Gurgaon, etc.) ke certified driving trainers registered hain. Aap apni location ke hisaab se best option select kar sakte hain."
  },
  {
    question: "Driving training ke liye kya options available hain (Manual vs Automatic)?",
    answer: "Humare partnered driving schools mein dono options available hain — Manual Transmission cars aur Automatic cars. Aap apni requirement aur car preference ke mutabiq trainer choose kar sakte hain."
  },
  {
    question: "Training complete hone ke baad kya driving test ki guarantee milti hai?",
    answer: "Training ka main maqsad aapko confident aur safe driver banana hai taaki aap RTO ka driving test bina kisi pareshani ke pehli baar mein pass kar sakein. Trainers aapko road rules, parking, aur reverse driving ki proper practical training dete hain."
  },
  {
    question: "DriveSeekho par training ke liye booking kaise karein?",
    answer: "Aap hamari website par jaakar apni location aur timing ke mutabiq package select kar sakte hain, ya diye gaye contact options ke through direct booking confirm kar sakte hain."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // SEO Schema for FAQs (Google Search mein rich results ke liye)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* SEO Meta Tags & Schema */}
      <head>
        <title>Frequently Asked Questions (FAQ) - DriveSeekho</title>
        <meta name="description" content="DriveSeekho se jude sawaal aur jawaab. Delhi NCR mein driving schools, training packages, aur driving license process ke baare mein sab kuch jaanein." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extxl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            DriveSeekho aur driving training se jude aapke saare sawaalon ke jawaab yahan milenge.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800 text-lg">{item.question}</span>
                <span className={`transform transition-transform duration-200 text-xl font-bold text-blue-600 ${activeIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-5 pt-2 bg-white text-gray-600 border-t border-gray-100 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extra Help Section */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900">Koi aur sawaal hai?</h3>
          <p className="mt-1 text-sm text-blue-700">Agar aapko apne sawal ka jawab nahi mila, toh aap humari support team se contact kar sakte hain.</p>
        </div>
      </div>
    </div>
  );
}