
'use client';

import React, { useState } from 'react';

const faqData = [
  {
    question: "DriveSeekho kya hai aur yeh kaise kaam karta hai?",
    answer:
      "DriveSeekho Delhi NCR ka ek leading motor training aggregator platform hai. Yeh aapko aapke nazdeeki verified aur best driving schools se connect karta hai, jahan aap apni pasand ke trainer aur package ke hisaab se car driving sikh sakte hain."
  },
  {
    question: "Kya DriveSeekho driving license (DL) banwane mein bhi madad karta hai?",
    answer:
      "Haan! DriveSeekho ke through aap na sirf driving sikh sakte hain, balki Learners License aur Permanent Driving License banwane ki process (jaise RTO paperwork aur slots booking) mein bhi complete guidance aur assistance paate hain."
  },
  {
    question: "Kya main apne ghar ke paas ka driving school chun sakta hoon?",
    answer:
      "Bilkul. DriveSeekho par Delhi NCR ke lagbhag sabhi major locations (jaise Mayur Vihar, Noida, Ghaziabad, Gurgaon, etc.) ke certified driving trainers registered hain. Aap apni location ke hisaab se best option select kar sakte hain."
  },
  {
    question: "Driving training ke liye kya options available hain (Manual vs Automatic)?",
    answer:
      "Humare partnered driving schools mein dono options available hain — Manual Transmission cars aur Automatic cars. Aap apni requirement aur car preference ke mutabiq trainer choose kar sakte hain."
  },
  {
    question: "Training complete hone ke baad kya driving test ki guarantee milti hai?",
    answer:
      "Training ka main maqsad aapko confident aur safe driver banana hai taaki aap RTO ka driving test bina kisi pareshani ke pehli baar mein pass kar sakein. Trainers aapko road rules, parking, aur reverse driving ki proper practical training dete hain."
  },
  {
    question: "DriveSeekho par training ke liye booking kaise karein?",
    answer:
      "Aap hamari website par jaakar apni location aur timing ke mutabiq package select kar sakte hain, ya diye gaye contact options ke through direct booking confirm kar sakte hain."
  },

  { question: "Can I learn driving in 20 days?",
     answer: "Yes, you can learn the basics of car driving in 20 days with regular practice. Your progress depends on how frequently you practice, your trainer, and your confidence. For most beginners, regular lessons covering steering control, braking, gear shifting, parking, traffic rules, and road driving can build a good foundation."
    
    },

    { question: "Can we learn driving in 15 days?",
       answer: "Yes, many beginners can learn the basic skills of driving in 15 days with consistent daily practice. However, becoming a confident and safe driver usually requires additional practice after the initial training."
      
      },

      { question: "How much does a driving lesson cost?",
         answer: "The cost of a driving lesson depends on the driving school, location, car type, number of classes, and training package. Prices can vary across Delhi NCR, so it is best to compare available packages before booking." 

      },
{ question: "Can I learn car driving in 1 month?", 
  
  answer: "Yes. One month is generally enough for many beginners to develop basic car-driving skills with regular practice. You can learn steering control, gear shifting, braking, parking, reversing, traffic rules, and basic road driving. More practice may be needed to become fully confident." 

},

{ question: "Can a 90 year old drive in India?",
  
  answer: "There is no general rule that automatically prohibits someone from driving solely because they are 90 years old. However, the driver must meet the applicable licence, medical fitness, and road-safety requirements. At an advanced age, it is especially important to ensure good vision, reflexes, hearing, and overall fitness before driving." 

},

{ question: "Can I ride Activa at 16?", 
  
  answer: "In India, a 16-year-old may be eligible to ride a motorcycle/scooter of the permitted category and engine capacity subject to the applicable licence rules. A regular Honda Activa is generally not the same category as the low-capacity vehicles permitted for 16-year-olds, so the exact vehicle and licence category must be checked before riding." 

},

{ question: "Can I learn driving after 40?", 
  answer: "Yes. You can learn car driving after 40. Age alone does not prevent someone from learning. Beginners should take professional lessons, practice regularly, and make sure they meet the applicable driving licence and fitness requirements." 

},
{ question: "What percent of Gen Z can drive?",
   answer: "There is no single reliable percentage that represents how many people in Gen Z can drive worldwide. Driving rates vary significantly by country, age, location, access to public transport, licensing laws, and personal preferences." 

},
{ question: "Is 27 too late to learn how to drive?", 
  answer: "No. 27 is not too late to learn driving. People can learn to drive at many different ages. With proper training, regular practice, and patience, a beginner can develop safe and confident driving skills." 

},

{ question: "Can I learn car driving in 1 month?",
   answer: "Yes. One month is generally enough for many beginners to develop basic car-driving skills with regular practice. You can learn steering control, gear shifting, braking, parking, reversing, traffic rules, and basic road driving. More practice may be needed to become fully confident." 

},
{ question: "How much does a driving lesson cost?",
   answer: "The cost of a driving lesson depends on the driving school, location, car type, number of classes, and training package. Prices can vary across Delhi NCR, so it is best to compare available packages before booking." 

},


  
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
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

      {/* FAQ SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            DriveSeekho aur driving training se jude aapke saare
            sawaalon ke jawaab yahan milenge.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-semibold text-gray-800 text-lg pr-4">
                  {item.question}
                </span>

                <span
                  className={`flex-shrink-0 transform transition-transform duration-200 text-xl font-bold text-blue-600 ${
                    activeIndex === index ? 'rotate-45' : ''
                  }`}
                >
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
          <h3 className="text-lg font-semibold text-blue-900">
            Koi aur sawaal hai?
          </h3>

          <p className="mt-1 text-sm text-blue-700">
            Agar aapko apne sawal ka jawab nahi mila, toh aap humari
            support team se contact kar sakte hain.
          </p>
        </div>

      </div>
    </div>
  );
}
