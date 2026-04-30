"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const CASE_STUDIES = [
  {
    title: "Local Business SEO Campaign",
    result: "Ranked in Top 3 on Google within 60 days",
    impact: "Increased website traffic by 150% and generated 3x more leads",
  },
  {
    title: "Google Ads Campaign Optimization",
    result: "Improved ROI from ₹50,000 to ₹2,00,000",
    impact: "Generated consistent high-quality leads at lower cost",
  },
  {
    title: "Website Conversion Optimization",
    result: "Increased conversion rate by 40%",
    impact: "Turned more visitors into paying customers",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-6 md:px-10 bg-gradient-to-b from-gray-900 via-blue-950 to-purple-900 text-white">

      {/* HEADER */}
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" className="mb-4 text-white font-bold">
          Results I Delivered
        </Typography>

        <Typography
          variant="lead"
          className="mx-auto max-w-2xl text-gray-300"
        >
          Real business results delivered through SEO, Ads, and Digital Marketing strategies.
        </Typography>
      </div>

      {/* CASE STUDIES */}
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">

        {CASE_STUDIES.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg hover:scale-105 transition"
          >
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{item.result}</p>
            <p className="mt-2 text-sm text-gray-400">{item.impact}</p>
          </div>
        ))}

      </div>

      {/* WHY CHOOSE ME SECTION - 2 COLUMNS */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow background */}
            <div className="absolute -inset-10 bg-purple-500/20 blur-3xl rounded-full"></div>

            <Image
              src="/image/about.PNG"
              alt="Aathithan"
              width={380}
              height={480}
              className="relative rounded-2xl shadow-2xl object-cover"
            />

          </div>

        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="space-y-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Me?
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I’m not limited to digital marketing Coimbatore. I focus on simple,
            practical strategies that deliver real results—not just reports—to help
            your business grow with clear direction.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I handle SEO, ads, and website optimization under one system,
            making your marketing process faster, smoother, and more efficient.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Transparency is always maintained with clear updates, honest communication,
            and measurable performance tracking.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Your business growth is my priority, and I treat every project like my own.
          </p>

          {/* SIGNATURE */}
          <Image
            src="/image/signature.png"
            alt="Signature"
            width={160}
            height={70}
            className="mt-4 opacity-90"
          />

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl mt-4">

            <a href="#" className="hover:text-green-400 transition transform hover:scale-110">
              <FaWhatsapp />
            </a>

            <a href="#" className="hover:text-blue-400 transition transform hover:scale-110">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-pink-400 transition transform hover:scale-110">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;