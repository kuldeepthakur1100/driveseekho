"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, MapPin, Bike, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

type VehicleType = "Bike" | "Scooty";
type PackageType = {
  id: string;
  name: string;
  price: string;
  days: string;
  badge?: string;
  features: string[];
};

const packages: PackageType[] = [
  {
    id: "confidence",
    name: "Traffic Confidence Course",
    price: "₹2,499",
    days: "5 Days",
    badge: "Fast Track",
    features: [
      "60 mins / day personalized session",
      "Proper on-road & heavy rush area practice",
      "Traffic zone fear removal techniques",
      "Free Doorstep Pickup & Drop",
      "Flexible & easy payment options",
    ],
  },
  {
    id: "basic",
    name: "Basic Foundation Course",
    price: "₹3,499",
    days: "10 Days",
    badge: "Most Popular",
    features: [
      "60 mins / day systematic sessions",
      "First 7 Days: Open ground balance & control",
      "3 Days: Main road & live traffic riding",
      "Clutch, gear & braking mastery",
      "Free Doorstep Pickup & Drop",
    ],
  },
  {
    id: "master",
    name: "Complete Master & RTO Ready",
    price: "₹4,999",
    days: "15 Days",
    badge: "All-Inclusive",
    features: [
      "60 mins / day comprehensive training",
      "7 Days Ground: Balance, U-turns, 8-figure & cones",
      "7 Days Road: Heavy rush, overtakes & highway riding",
      "1 Day dedicated RTO Test Track simulation",
      "Free Doorstep Pickup & Drop",
    ],
  },
];

export default function TwoWheelerBooking() {
  const [step, setStep] = useState<number>(1);
  const [vehicle, setVehicle] = useState<VehicleType>("Bike");
  const [selectedPackage, setSelectedPackage] = useState<PackageType>(packages[1]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "East Delhi",
    preferredTime: "Morning (07:00 AM - 10:00 AM)",
    pickupPoint: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "918368510626"; // Apna WhatsApp Business Number dalein (country code ke sath)

    const message = 
`*NEW 2-WHEELER TRAINING BOOKING*
--------------------------------
*Vehicle:* ${vehicle}
*Course:* ${selectedPackage.name} (${selectedPackage.days})
*Fees:* ${selectedPackage.price}

*Customer Details:*
• *Name:* ${formData.name}
• *Age:* ${formData.age}
• *City / Zone:* ${formData.location}
• *Preferred Slot:* ${formData.preferredTime}
• *Pickup Address:* ${formData.pickupPoint}
--------------------------------
_Sent from DriveSeekho Website_`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-10">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          {[
            { num: 1, label: "Vehicle" },
            { num: 2, label: "Course" },
            { num: 3, label: "Details" },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm ${
                  step >= item.num
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {item.num}
              </div>
              <span
                className={`text-sm font-medium hidden sm:inline ${
                  step >= item.num ? "text-slate-800" : "text-slate-400"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* STEP 1: VEHICLE SELECTION */}
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Select Your 2-Wheeler Training
            </h2>
            <p className="text-slate-500 mb-8">
              Aap kya sikhna chahte hain? Choose your preference to see curated plans.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
              {/* Bike Card */}
              <div
                onClick={() => setVehicle("Bike")}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center justify-center ${
                  vehicle === "Bike"
                    ? "border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20"
                    : "border-slate-200 hover:border-blue-300"
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-3 p-2.5">
                  <img
                    src="/images/2wheel.jpg"
                    alt="Bike"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-slate-800">Motorcycle (Bike)</h3>
                <p className="text-xs text-slate-500 text-center mt-1">
                  Manual Gear & Clutch control training
                </p>
              </div>

              {/* Scooty Card */}
              <div
                onClick={() => setVehicle("Scooty")}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center justify-center ${
                  vehicle === "Scooty"
                    ? "border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20"
                    : "border-slate-200 hover:border-blue-300"
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-3 p-2.5">
                  <img
                    src="/images/2wheelerha.png"
                    alt="Scooty"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-slate-800">Scooty (Gearless)</h3>
                <p className="text-xs text-slate-500 text-center mt-1">
                  Easy throttle, smooth braking & balance
                </p>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-10 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition shadow-lg shadow-blue-500/25"
            >
              Next: Select Package <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}



        {/* STEP 2: PACKAGE SELECTION */}
        {step === 2 && (
          <div>
            <div className="text-center mb-8">
              <span className="text-blue-600 bg-blue-50 border border-blue-200 text-xs uppercase tracking-wider font-semibold py-1 px-3 rounded-full">
                Selected: {vehicle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
                Choose Your {vehicle} Training Plan
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                All plans include doorstep free pickup and drop facility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => {
                const isSelected = selectedPackage.id === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative rounded-xl border-2 p-5 cursor-pointer flex flex-col justify-between transition-all ${
                      isSelected
                        ? "border-blue-600 bg-blue-50/20 shadow-lg ring-2 ring-blue-500/20"
                        : "border-slate-200 hover:border-blue-300 bg-white"
                    }`}
                  >
                    {pkg.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-wider py-1 px-3 rounded-full shadow-sm">
                        {pkg.badge}
                      </span>
                    )}

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-800 text-base leading-tight">
                          {pkg.name}
                        </h3>
                      </div>
                      <div className="flex items-baseline gap-1 my-3">
                        <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                        <span className="text-xs text-slate-500 font-medium">/ {pkg.days}</span>
                      </div>

                      <ul className="space-y-2 mt-4 text-xs text-slate-600">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      className={`w-full mt-6 py-2 rounded-lg text-xs font-semibold transition ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {isSelected ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center mt-10">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Change Vehicle
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-7 rounded-xl transition shadow-md shadow-blue-500/25"
              >
                Proceed to Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: DETAILS FORM */}
        {step === 3 && (
          <div>
            <div className="mb-6 pb-4 border-b border-slate-100 flex flex-wrap justify-between items-center gap-2">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Final Step: Booking Details</h2>
                <p className="text-slate-500 text-xs">Fill details for doorstep trainer allocation.</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-blue-600 block">
                  {vehicle} • {selectedPackage.name}
                </span>
                <span className="text-sm font-bold text-slate-800">{selectedPackage.price}</span>
              </div>
            </div>

            <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Age *
                  </label>
                  <input
                    required
                    type="number"
                    name="age"
                    min="16"
                    max="75"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="e.g. 22"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Location / Area *
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 bg-white"
                  >
                    <option value="East Delhi">East Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="Vaishali">Vaishali (Ghaziabad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 bg-white"
                  >
                    <option value="Morning (07:00 AM - 10:00 AM)">Morning (05:00 AM - 10:00 AM)</option>
                    <option value="Afternoon (11:00 AM - 03:00 PM)">Afternoon (11:00 AM - 05:00 PM)</option>
                    <option value="Evening (04:00 PM - 07:00 PM)">Evening (06:00 PM - 10:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Exact Pickup Point / Society Name *
                </label>
                <input
                  required
                  type="text"
                  name="pickupPoint"
                  value={formData.pickupPoint}
                  onChange={handleInputChange}
                  placeholder="e.g. Near Metro Station / Pocket-1 Mayur Vihar / Sector 62"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
                />
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>No advance required online. Trainer details will be sent on WhatsApp.</span>
              </div>

              <div className="flex justify-between items-center pt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Packages
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-xl transition shadow-lg shadow-emerald-600/20"
                >
                  Book Now via WhatsApp
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}