"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="max-w-5xl mx-auto py-16 px-5">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white shadow-sm"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center p-5 font-semibold text-left"
            >
              {faq.question}

              <ChevronDown
                className={`duration-300 ${
                  open === index && "rotate-180"
                }`}
              />
            </button>

            {open === index && (
              <div className="px-5 pb-5 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}