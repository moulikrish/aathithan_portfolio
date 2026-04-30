"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const FAQS = [
  {
    q: "What services do you offer as a digital marketer?",
    a: "SEO, Google Ads, Social Media Marketing, Website Development, and WordPress solutions.",
  },
  {
    q: "How can digital marketing help my business?",
    a: "It increases visibility, generates leads, and improves sales through targeted strategies.",
  },
  {
    q: "How long does SEO take?",
    a: "Usually 2–3 months depending on competition and strategy quality.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - FAQ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <Typography variant="h2" className="font-bold text-black mb-6">
            Frequently Asked Questions
          </Typography>

          <div className="space-y-5">

            {FAQS.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {item.a}
                </p>
              </div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* glow background */}
          <div className="absolute w-[400px] h-[400px] bg-purple-400/30 blur-3xl rounded-full"></div>

          {/* image */}
          <div className="relative w-[320px] md:w-[420px]">

            <Image
              src="/image/FAQ.png"
              alt="FAQ Illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}