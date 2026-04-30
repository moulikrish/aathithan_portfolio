/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Marketing Coimbatore | SEO Expert Aathithan",
  description:
    "Digital Marketing Coimbatore offering SEO, Google Ads, and website development services to grow your business and generate leads.",

  keywords: [
    "Digital Marketing Coimbatore",
    "SEO Services Coimbatore",
    "Google Ads Expert Coimbatore",
    "Freelance Digital Marketer Tamil Nadu",
    "Website Development Coimbatore",
  ],

  authors: [{ name: "Aathithan" }],
  creator: "Aathithan",

  openGraph: {
    title: "Digital Marketing Coimbatore | Aathithan",
    description:
      "Boost your business with SEO, Google Ads & digital marketing services in Coimbatore.",
    url: "https://yourdomain.com", // 🔥 change this
    siteName: "Aathithan Digital",
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Coimbatore | Aathithan",
    description:
      "Grow your business with SEO & Digital Marketing services in Coimbatore.",
    images: ["/image/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>

      <body
        className={`${roboto.className} text-white`}
        style={{
          background:
            "radial-gradient(circle at center, #0E2386 0%, #0D2486 50%, #8255F1 100%)",
        }}
      >
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}