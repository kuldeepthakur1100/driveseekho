"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BookInstructorPage() {
  // Apna WhatsApp Number yahan daalein (Country code ke sath, bina + ke)
  const WHATSAPP_NUMBER = "918368510626";

  const [step, setStep] = useState(1);
  const [journey, setJourney] = useState("");
  const [agreedTc, setAgreedTc] = useState(false);
  const [minDate, setMinDate] = useState("");

  const [formData, setFormData] = useState({
    location: "",
    transmission: "Manual",
    carType: "Hatchback",
    date: "",
    time: "07:00 AM",
  });

  useEffect(() => {
    // Aaj ki date se pehle select na ho sake
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = () => {
    if (!formData.location.trim()) {
      alert("Kripya pickup location enter karein.");
      return;
    }
    if (!formData.date) {
      alert("Kripya date select karein.");
      return;
    }

    const message = 
`*New Driving Session Booking Request* 🚗

• *Journey Level:* ${journey}
• *Package:* ₹349 / hour
• *Pickup Location:* ${formData.location}
• *Transmission:* ${formData.transmission}
• *Car Type:* ${formData.carType}
• *Preferred Date:* ${formData.date}
• *Preferred Time:* ${formData.time}
• *T&C Accepted:* Yes`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden p-5">
        
        {/* ================= STEP 1: JOURNEY SELECTION ================= */}
        {step === 1 && (
          <div>
            {/* Header Rectangle Card */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-5 text-center mb-6 shadow-sm">
              <h2 className="text-xl font-bold">Where are you on your driving journey?</h2>
            </div>

            <div className="space-y-3 mb-6">
              {/* Option 1 */}
              <div
                onClick={() => setJourney("Instructor: I can drive, but need confidence with specific skills")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  journey.startsWith("Instructor:")
                    ? "border-blue-600 bg-blue-50/70"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="journeyOption"
                    checked={journey.startsWith("Instructor:")}
                    onChange={() => {}}
                    className="mt-1 accent-blue-600"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Instructor</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      I can drive, but need confidence with specific skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div
                onClick={() => setJourney("Learner to Confident: I am a complete beginner or just starting out")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  journey.startsWith("Learner to Confident:")
                    ? "border-blue-600 bg-blue-50/70"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="journeyOption"
                    checked={journey.startsWith("Learner to Confident:")}
                    onChange={() => {}}
                    className="mt-1 accent-blue-600"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Learner to Confident</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      I am a complete beginner or just starting out.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              disabled={!journey}
              onClick={() => {
                setStep(2);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* ================= STEP 2: DETAILS & WHATSAPP ================= */}
        {step === 2 && (
          <div className="space-y-4">
            {/* Banner Image */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-100">
              {/* Aap yahan apni banner image ka path laga sakte hain jaise "/instructor-banner.jpg" */}
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80"
                alt="Driving Banner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badges / Information */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-xs text-slate-700 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Instructors you can trust</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Your car, your comfort</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Flexible learning hour choose: <strong>5:00 AM to 10:00 PM</strong></span>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center gap-2.5 pt-1">
              <input
                type="checkbox"
                id="tc"
                checked={agreedTc}
                onChange={(e) => setAgreedTc(e.target.checked)}
                className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
              />
              <label htmlFor="tc" className="text-xs text-slate-600 cursor-pointer select-none">
                I agree to all declaration & Terms & Conditions
              </label>
            </div>

            {/* Price Package - Shows only when T&C is checked */}
            {agreedTc && (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3 text-center transition-all animate-fadeIn">
                <p className="text-xs text-emerald-800 font-medium">Standard Learning Session</p>
                <p className="text-xl font-extrabold text-emerald-600 mt-0.5">₹349 / hour</p>
              </div>
            )}

            {/* Form Fields - Unlocked after T&C */}
            {agreedTc && (
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter complete address / landmark"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Transmission
                    </label>
                    <select
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                    >
                      <option value="Manual">Manual</option>
                      <option value="Automatic">Automatic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Car Type
                    </label>
                    <select
                      name="carType"
                      value={formData.carType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                    >
                      <option value="Hatchback">Hatchback</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      min={minDate}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Time Slot
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                    >
                      {[
                        "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", 
                        "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", 
                        "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", 
                        "08:00 PM", "09:00 PM", "10:00 PM"
                      ].map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>Book on WhatsApp</span>
                  <span>➔</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}