"use client";

import { useState, useEffect } from "react";

export default function TimeSlotGrid() {
  const [selectedDate, setSelectedDate] = useState("today");
  const [slots, setSlots] = useState([]);
  const [activeTime, setActiveTime] = useState(null);
  const [activeDateLabel, setActiveDateLabel] = useState("");

  // Image ke design jaisa grid slots generator
  useEffect(() => {
    const allTimes = [
      "6:00 AM", "6:30 AM", "7:00 AM",
      "7:30 AM", "8:00 AM", "8:30 AM",
      "9:00 AM", "9:30 AM", "10:00 AM",
      "10:30 AM", "11:00 AM", "11:30 AM",
      "12:00 PM", "12:30 PM", "1:00 PM"
    ];

    // Har din ke hisaab se random availability set karne ke liye seed
    const seedStr = new Date().toDateString() + selectedDate;
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
      hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
    }

    const generated = allTimes.map((time, index) => {
      const val = Math.abs(Math.sin(hash + index));
      // Kuch slots disabled (past ya booked), baaki available
      const isAvailable = val > 0.3; 
      return { time, available: isAvailable };
    });

    setSlots(generated);
    setActiveTime(null); // Date change hone par reset

    // Dates label
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);

    if (selectedDate === "today") setActiveDateLabel(today.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    else if (selectedDate === "tomorrow") setActiveDateLabel(tomorrow.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    else setActiveDateLabel(dayAfter.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));

  }, [selectedDate]);

  // WhatsApp Pre-Book Handler
  const handleWhatsAppPreBook = () => {
    if (!activeTime) return;
    const phoneNumber = "918368510626"; // <--- Apna WhatsApp number yahan dalein
    const message = `Hello, I want to Pre-Book a Slot!\n\n📅 Date: ${activeDateLabel}\n⏰ Time: ${activeTime}\n\nPlease confirm my slot.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white text-slate-800 rounded-3xl shadow-xl border border-slate-100 my-8">
      
      {/* Header section similar to reference */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-base text-slate-900">Select Time Slot</h3>
        <span className="text-xs font-semibold text-indigo-600 cursor-pointer hover:underline">
          {activeDateLabel}
        </span>
      </div>

      {/* Date Tabs */}
      <div className="flex bg-slate-100 p-1 rounded-xl mb-5">
        <button
          onClick={() => setSelectedDate("today")}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
            selectedDate === "today" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
          }`}
        >
          Today
        </button>
        <button
          onClick={() => setSelectedDate("tomorrow")}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
            selectedDate === "tomorrow" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
          }`}
        >
          Tomorrow
        </button>
        <button
          onClick={() => setSelectedDate("day3")}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
            selectedDate === "day3" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
          }`}
        >
          Next Day
        </button>
      </div>

      {/* Time Slots Grid (Exact UI match) */}
      <div className="grid grid-cols-3 gap-2.5 mb-6">
        {slots.map((slot, index) => {
          const isSelected = activeTime === slot.time;

          return (
            <button
              key={index}
              disabled={!slot.available}
              onClick={() => setActiveTime(slot.time)}
              className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                isSelected
                  ? "bg-white text-indigo-600 border-indigo-500 shadow-md ring-2 ring-indigo-100"
                  : slot.available
                  ? "bg-white text-indigo-600 border-slate-200 hover:border-indigo-300 shadow-sm"
                  : "bg-slate-100 text-slate-400 border-transparent cursor-not-allowed opacity-60"
              }`}
            >
              {slot.time}
            </button>
          );
        })}
      </div>

      {/* Pre-Book WhatsApp Button */}
      <button
        onClick={handleWhatsAppPreBook}
        disabled={!activeTime}
        className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
          activeTime
            ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-200 cursor-pointer"
            : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
        }`}
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        {activeTime ? `Pre-Book Slot (${activeTime})` : "Select a Slot to Pre-Book"}
      </button>

    </div>
  );
}