import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Trygve Pixel | Global Website Design & Development Agency",
  description:
    "We build conversion-focused websites for startups and businesses worldwide. High performance, beautiful design, SEO-friendly, and ready to scale.",
  keywords: [
    "Trygve Pixel",
    "website design",
    "website development",
    "Next.js agency",
    "SEO",
    "startups",
    "digital agency",
  ],
  openGraph: {
    title: "Trygve Pixel | Global Website Design & Development Agency",
    description:
      "We build conversion-focused websites for startups and businesses worldwide.",
    url: "https://trygvepixels.com",
    siteName: "Trygve Pixel",
    images: [
      {
        url: "https://trygvepixels.com/og-image.png", // replace with your real OG image
        width: 1200,
        height: 630,
        alt: "Trygve Pixel Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trygve Pixel | Global Website Design & Development Agency",
    description:
      "We build conversion-focused websites for startups and businesses worldwide.",
    images: ["https://trygvepixels.com/og-image.png"], // replace with your real OG image
  },
 icons: {
  icon: [
    { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon.png", sizes: "16x16", type: "image/png" },
  ],
  apple: [
    { url: "/favicon.png", sizes: "180x180", type: "image/png" },
  ],
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
