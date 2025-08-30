"use client";

import { useEffect, useMemo, useState } from "react";

export default function HelloLoader({ interval = 800 }) {
  const words = useMemo(
    () => [
      "Hello", "नमस्ते", "こんにちは", "안녕하세요", "你好", "مرحبا",
      "Bonjour", "Hola", "Ciao", "Olá", "Hej", "Hallo", "Привет", "שלום"
    ],
    []
  );

  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval, words.length]);

  return (
    <div className="relative grid h-dvh w-full place-items-center overflow-hidden bg-[#0A0E13] text-white">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Hello text */}
      <div
        key={i}
        className="relative z-10 select-none text-center font-semibold tracking-[-0.02em]
                   text-[11vw] leading-none sm:text-7xl md:text-8xl lg:text-9xl
                   bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent
                   animate-hello-fade"
      >
        {words[i]}
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes helloFade {
          0%   { opacity: 0; filter: blur(8px); transform: translateY(8px) scale(.98); }
          20%  { opacity: 1; filter: blur(0);   transform: translateY(0)    scale(1); }
          80%  { opacity: 1; filter: blur(0);   transform: translateY(0)    scale(1); }
          100% { opacity: 0; filter: blur(8px); transform: translateY(-8px) scale(.98); }
        }
        .animate-hello-fade {
          animation: helloFade ${Math.max(interval, 600)}ms ease-in-out both;
        }
      `}</style>
    </div>
  );
}