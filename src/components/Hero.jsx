"use client";
import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
  const words = ["startups", "enterprises", "brands", "founders"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-neutral-200">
      <div className="absolute -top-[00px] right-0 h-full w-80   rotate-60  bg-gradient-to-bl from-[#25b4f1] to-transparent blur-3xl"></div>
      <div className="absolute -top-6 h-full w-80 left-0  -rotate-45  bg-gradient-to-bl from-[#23769a81] to-transparent blur-3xl"></div>

      {/* Background video clipped to a diagonal streak on the right */}
      <div className="pointer-events-none md:absolute  inset-0" aria-hidden>
        <div
          className="absolute   inset-0 right-[-10%] h-full w-[120%]"
          style={{
            clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)",
            filter: "brightness(1.2) contrast(1.15)",
          }}
        >
          <video
            className="h-full md:block hidden w-full object-cover"
            src="/herovideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            onError={() =>
              console.error(
                "Video failed to load. Confirm the file is at public/herovideo.mp4"
              )
            }
          />
        </div>
        {/* Soft vignette to blend video into the black background */}
        {/* <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/70 to-black" /> */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto   flex h-full flex-col justify-center items-center px-6 py-32 sm:py-48 lg:px-8">
        {/* Top spacing placeholder (keeps layout balanced on small screens) */}
        <div />

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* Left: Massive name */}
          <div className="leading-none  ">
            <h1 className="font-extrabold capitalize special-font2   tracking-tight  bg-clip-text text-white text-4xl md:text-[3vw] lg:text-[3vw] xl:text-[3vw]">
              Global website design & Development agency <br />
              for {" "}
              <AuroraText className="capitalize ">{words[index]}</AuroraText>
            </h1>

            {/* Bio paragraph */}
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white md:text-lg">
              We deliver globally UI, UX & web design smoothly, without delay,
              saving your time and money with an efficient process.
            </p>
            <div className="mt-10 flex gap-6">
              <a
                href="/contact#form"
                className="px-6 py-3 md:text-sm text-xs font-semibold uppercase tracking-wide rounded-full bg-gradient-to-r from-[#204060] via-[#357ca5] to-[#80B7CF] text-white shadow-lg hover:opacity-90  flex items-center justify-center transition"
              >
                Get Started <FiArrowUpRight className=" ml-2 mb-0" />
              </a>
              <a
                href="#services"
                className="px-6 py-3 md:text-sm text-xs font-semibold uppercase tracking-wide rounded-full border border-white/40 text-white backdrop-blur-sm hover:bg-white/10 transition flex items-center justify-center "
              >
                View Services <FiArrowUpRight className=" ml-2 mb-0" />
              </a>
            </div>
          </div>

          {/* Right: Role + Services */}
          <div className="relative flex flex-col items-start md:items-end">
            {/* 
            <ul className="mt-24 space-y-3 text-right text-lg bg-black/60 p-4 backdrop-blur-2xl text-neutral-100 md:mt-0">
              <li>UX/UI Design</li>
              <li>Web Development</li>
              <li>Motion Animation</li>
              <li>Brand Identity Design</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
}
