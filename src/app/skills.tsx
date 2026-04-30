"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  ChartPieIcon,
} from "@heroicons/react/24/solid";

const SERVICES = [
  {
    icon: MagnifyingGlassIcon,
    title: "SEO (Search Engine Optimization)",
    desc: "Increase your online presence with professional SEO services in Coimbatore.",
  },
  {
    icon: GlobeAltIcon,
    title: "Web Development",
    desc: "Build fast, responsive, and SEO-optimized websites that improve user experience.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Social Media Marketing",
    desc: "Grow your brand using targeted social media strategies.",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Marketing",
    desc: "Run personalized email campaigns that boost engagement and sales.",
  },
  {
    icon: ChartBarIcon,
    title: "Pay-Per-Click (PPC)",
    desc: "Generate instant traffic and leads through targeted ads.",
  },
  {
    icon: ChartPieIcon,
    title: "Performance Tracking",
    desc: "Track and analyze your digital performance using real-time data.",
  },
];

// ✅ ADD CERTIFICATE IMAGES
const certificates = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
];

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export function Skills() {
  return (
    <section id="services" className="px-8 py-24 bg-gray-50">

      {/* 🔥 CERTIFIED SECTION (NEW TOP) */}
      <div className="container mx-auto text-center mb-16">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] md:text-[52px] font-black text-black mb-6"
        >
          I’m Certified Digital Marketer
        </motion.h2>

        <p className="text-gray-600 mb-10">
          Certified in industry-leading digital marketing tools and platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((src, index) => (
            <div
              key={index}
              className="w-[120px] h-[70px] relative bg-white rounded-lg shadow-md p-2 hover:scale-105 transition"
            >
              <Image
                src={src}
                alt={`certificate-${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>

      {/* HEADER */}
      <div className="container mx-auto text-center mb-14">

        <Typography color="blue-gray" className="mb-2 font-bold uppercase tracking-widest">
          Our Services
        </Typography>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[40px] md:text-[60px] font-black text-black mb-6"
        >
          What I Offer
        </motion.h2>

        <Typography
          variant="lead"
          className="mx-auto max-w-2xl text-gray-500"
        >
          I provide result-driven digital marketing services to help businesses
          improve online visibility, generate leads, and increase revenue.
        </Typography>

      </div>

      {/* GRID */}
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        {SERVICES.map((item, idx) => (
          <ServiceCard key={idx} {...item} />
        ))}

      </div>

    </section>
  );
}

export default Skills;