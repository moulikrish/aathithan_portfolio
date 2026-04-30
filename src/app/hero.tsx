"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Hero() {
  const images = [
    "/image/profile.png",
    "/image/project1.jpg",
    "/image/project2.jpg",
    "/image/project3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[65%_35%] gap-12 items-center">

        {/* LEFT SIDE */}

<div className="text-center md:text-left backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">


        <div className="text-center md:text-left">

          <h1 className={`text-[40px] md:text-[50px] font-semibold text-black leading-tight ${inter.className}`}>
  Grow Your Business with Aathithan
</h1>

          <h2 className={`mt-4 text-[56px] font-semibold text-white ${playfair.className}`}>
  Digital Marketing Coimbatore
</h2>

         

          <p className="mt-4 text-gray-200">
            I help businesses in Coimbatore increase their online visibility, generate high-quality leads,
            and grow revenue through proven SEO strategies, paid advertising, and conversion-focused websites.
          </p>

          <p className="mt-2 text-sm text-gray-300">
            SEO Services in Coimbatore • On-Page SEO • Website Optimization • Digital Marketing
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8">
            <a
              href="https://wa.link/agz7v9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
            >
            Get Free SEO Audit
            </a>
          </div></div>

        </div>

        {/* RIGHT SIDE (CAROUSEL) */}
        <div className="flex justify-center">
          <div className="w-[450px] h-[600px] relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

            <Image
              src={images[currentImage]}
              alt="Portfolio"
              fill
              className="object-cover transition-all duration-700"
            />

          </div>
        </div>

      </div>
    </section>
  );
}