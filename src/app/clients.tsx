"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function Clients() {

  return (
    <>
      {/* 🔥 HERO-STYLE BACKGROUND (ONLY CHANGE) */}
     <section
  id="about"
  className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950 to-purple-950 text-white"
>{/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full"></div>

        {/* TITLE */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white">
            About Aathithan
          </h1>
        </div>

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start relative z-10">

          {/* LEFT CONTENT (UNCHANGED TEXT) */}
          <div className="text-white text-sm leading-relaxed space-y-6">

            <p>
              Aathithan is a passionate and results-driven professional specializing in digital marketing Coimbatore, dedicated to helping businesses build a powerful online presence and achieve consistent growth. With a strong foundation in SEO, Google Ads, social media marketing (SMM), and website development, he creates strategies that not only increase visibility but also drive real business results.
            </p>

            <p>
              As an expert in digital marketing Coimbatore, Aathithan deeply understands the local market, customer behavior, and competitive landscape. This allows him to craft tailored marketing strategies that connect businesses with their target audience effectively. From ranking websites on search engines to running high-converting ad campaigns, his goal is always to deliver measurable success.
            </p>

          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center items-center">

            <div className="absolute w-[520px] h-[620px] bg-purple-400/30 blur-3xl rounded-full"></div>

            <div className="relative w-[350px] md:w-[420px] h-[420px] md:h-[500px] flex justify-center items-center">

              <img
                src="/image/profile3.png"
                alt="Aathithan"
                className="w-full h-full object-contain drop-shadow-2xl"
              />

              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 rounded-full font-medium shadow-lg">
                Request a Call
              </button>

            </div>

          </div>

          {/* RIGHT CONTENT (UNCHANGED TEXT) */}
          <div className="text-white text-sm leading-relaxed space-y-6">

            <p>
              His path in digital marketing Coimbatore is fueled by ongoing education and real-world experience. He has assisted startups, small companies, and expanding brands in establishing their digital identities across a variety of industries. His strategy is centered on comprehending the particular requirements of each client and transforming concepts into successful results.
            </p>

            <p>
              Aathithan’s ability to blend creativity and data-driven decision-making sets him apart in digital marketing Coimbatore scene. In order to ensure greater ROI and long-term growth, he thinks that every campaign should be optimized based on performance metrics. He makes sure that every action is in line with corporate objectives, whether it is raising search engine results, increasing website traffic, or enhancing social media engagement.
            </p>

          </div>

        </div>

        {/* SMALL HEADER TEXT */}
        <div className="text-center mt-16 text-gray-300 relative z-10">
          <p>About • Aathithan • Digital Marketing Expert</p>
        </div>

      </section>
    </>
  );
}