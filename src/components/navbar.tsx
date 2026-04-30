"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="#hero" className="text-white font-bold text-lg">
          Aathithan
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm text-white">
          <Link href="#about" className="hover:text-yellow-300">
            About
          </Link>

          <a href="#services" className="hover:text-yellow-300">
            Services
          </a>

          <a href="#projects" className="hover:text-yellow-300">
            Blogs
          </a>

          <a href="#contact" className="hover:text-yellow-300">
            Contact
          </a>
        </div>

       

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">

          <a href="/#about" className="hover:text-gray-400">
  About
</a>

          <a href="#services" onClick={() => setOpen(false)} className="block">
            Services
          </a>

          <a href="#projects" onClick={() => setOpen(false)} className="block">
            Blogs
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="block">
            Contact
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=916380118720&text=Hi%20I%20need%20a%20free%20SEO%20audit"
            target="_blank"
            className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-semibold"
          >
            Get Audit
          </a>

        </div>
      )}
    </nav>
  );
}