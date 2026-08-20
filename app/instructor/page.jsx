"use client";

import { useState } from "react";

export default function InstructorBookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    carName: "",
    location: "",
    hours: "",
    areaName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918368510626";

    const message =
      `*New Instructor Booking Enquiry - DriveSeekho*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📅 *Age:* ${formData.age}\n` +
      `🚗 *Car Name:* ${formData.carName}\n` +
      `📍 *Zone:* ${formData.location}\n` +
      `⏱️ *Training Hours:* ${formData.hours} Hours\n` +
      `🏠 *Area Name:* ${formData.areaName}\n` +
      `💰 *Fees:* ₹349 / Hour\n\n` +
      `Please connect with me for further process!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans flex flex-col">
      
      {/* Header / Video Section */}
      <div className="relative h-[38vh] sm:h-[45vh] w-full overflow-hidden shadow-2xl bg-gray-900">
        
        {/* Fallback Background Image (Agar video load nahi hui toh yeh dikhegi) */}
        <img 
          src="/images/instructr12.jpeg" 
          alt="Driving Instructor"
          className="absolute inset-0 w-full h-full object-cover filter brightness-75"
        />

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-90 z-10"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-20" />

        {/* Content inside Header */}
        <div className="relative z-20 h-full flex flex-col justify-end p-5 sm:p-8 md:p-5">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
            Expert Driving Instructor
          </h1>
          <p className="text-emerald-300 font-bold text-xl sm:text-2xl mt-2 flex items-baseline gap-1.5 drop-shadow">
            ₹349 <span className="text-sm sm:text-base text-gray-300 font-medium">/ Hour</span>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-grow bg-white text-gray-900 rounded-t-[2.5rem] -mt-6 relative z-30 p-5 sm:p-8 md:p-12 shadow-2xl">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
              Book Your Training
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Fill in your details to connect with our instructor on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rahul Sharma"
                type="text"
              />
              <InputField
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="25"
                type="number"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <InputField
                label="Car Name (e.g., Swift Manual)"
                name="carName"
                value={formData.carName}
                onChange={handleChange}
                placeholder="Maruti Swift Manual"
                type="text"
              />
              <SelectField
                label="Preferred Zone"
                name="location"
                value={formData.location}
                onChange={handleChange}
                options={[
                  "East Delhi",
                  "Noida",
                  "Central Delhi",
                  "New Delhi",
                  "North Delhi",
                  "North East",
                  "North West",
                  "South Delhi",
                  "South East",
                  "South West",
                  "West Delhi",
                  "Ghaziabad",
                ]}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <SelectField
                label="Training Package"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                options={[
                  { value: "5", label: "1 Hour/Day (5 Days)" },
                  { value: "10", label: "2 Hours/Day (5 Days)" },
                  { value: "15", label: "3 Hours/Day (5 Days)" },
                  { value: "20", label: "5 Hours/Day (Intensive)" },
                ]}
              />
              <InputField
                label="Specific Locality/Area"
                name="areaName"
                value={formData.areaName}
                onChange={handleChange}
                placeholder="Laxmi Nagar, Block A"
                type="text"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition duration-200 flex items-center justify-center space-x-3 shadow-lg shadow-emerald-500/30 active:scale-[0.98] cursor-pointer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.951 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414Z"/>
              </svg>
              <span className="text-lg">Confirm on WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      required
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-5 py-3.5 border border-gray-200 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 focus:outline-none text-gray-900 placeholder:text-gray-400 text-base transition duration-150"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-1.5">
      {label}
    </label>
    <select
      id={name}
      name={name}
      required
      value={value}
      onChange={onChange}
      className="w-full px-5 py-3.5 border border-gray-200 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 focus:outline-none text-gray-900 text-base transition duration-150 appearance-none bg-white"
    >
      <option value="" disabled>Select an option</option>
      {options.map((option) => {
        const optionValue = typeof option === "object" ? option.value : option;
        const optionLabel = typeof option === "object" ? option.label : option;
        return (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  </div>
);