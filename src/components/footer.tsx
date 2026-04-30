"use client";

import { Typography } from "@material-tailwind/react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-purple-900 text-white px-6 pt-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* 1️⃣ ABOUT */}
        <div>
          <h3 className="text-xl font-bold mb-4">Aathithan</h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Digital Marketing Coimbatore helping businesses grow
            with SEO, Google Ads, and high-converting websites.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="hover:text-green-400 transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 2️⃣ MENU */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Results</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* 3️⃣ GOOGLE MAP */}
        <div>
          <h3 className="text-xl font-bold mb-4">Location</h3>

          <div className="rounded-xl overflow-hidden border border-white/20">
            <iframe
              src="https://maps.google.com/maps?q=coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
        © {CURRENT_YEAR} Aathithan Digital Marketing. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;