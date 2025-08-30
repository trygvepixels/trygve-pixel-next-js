"use client";
import './marquee.css'
export default function Marquee() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-8">
      <div className="flex animate-marquee whitespace-nowrap gap-16">
        {logos.concat(logos).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`logo-${idx}`}
            className="h-6 w-auto opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
}