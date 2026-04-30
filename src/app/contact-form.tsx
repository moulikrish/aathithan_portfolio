"use client";

import { useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";

export function ContactForm() {
  const iframeRef = useRef(null);



  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">

      <div className="max-w-5xl mx-auto text-center mb-10">

        <Typography variant="h2" className="mb-4 text-black font-bold">
          Request a Free Website Audit
        </Typography>

        <Typography className="text-gray-600">
          Fill the form and I will review your website and send improvements.
        </Typography>

      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border">

        <iframe
          ref={iframeRef}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfTJEZdAmboB-k9z4RU35M4myYsU5bYpciqHjH8phBtHvBNqA/viewform?embedded=true"
          width="100%"
          style={{ minHeight: "500px" }}
          className="bg-white"
        >
          Loading…
        </iframe>

      </div>

    </section>
  );
}

export default ContactForm;