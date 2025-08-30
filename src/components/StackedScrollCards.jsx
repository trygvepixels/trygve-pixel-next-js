"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * StackedScrollCards (Framer Motion version)
 * - Dark, cinematic stacked cards using scroll-linked animations.
 * - Requires: `npm i framer-motion`
 */
export default function StackedScrollCards() {
  const cards = useMemo(
    () => [
      {
        id: 1,
        tag: "Award Winning",
        title: "79+ awards and counting",
        body:
          "Best‑in‑class craft recognized globally. Judged and awarded across content, design and performance categories.",
        accent: "#22d3ee",
        photo:
          "https://images.unsplash.com/photo-1531310197839-ccf54634509b?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: 2,
        tag: "Legend In The Making",
        title: "Ideas to results in 60 minutes",
        body:
          "A rapid service model that favors speed without sacrificing quality — made for teams that ship.",
        accent: "#a78bfa",
        photo:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: 3,
        tag: "People First",
        title: "We design for humans",
        body:
          "Research, accessibility and measurable outcomes. No gimmicks — just useful, beautiful products.",
        accent: "#34d399",
        photo:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: 4,
        tag: "Trusted",
        title: "Used by leading brands",
        body:
          "We partner long‑term with teams who care about impact, not vanity metrics.",
        accent: "#f472b6",
        photo:
          "https://images.unsplash.com/photo-1520975922203-b91f1c6c5a00?q=80&w=600&auto=format&fit=crop",
      },
    ],
    []
  );

  const total = cards.length;
  const sectionRef = useRef(null);

  // Scroll progress for the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // Smooth it out a bit
  const smoothed = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="relative h-[100v] -z-[10] w-full flex items-center justify-center overflow-hidden bg-[#000000] text-white"
      style={{ height: `${total * 160}vh` }}
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
         
        />
      </div>

      {/* Sticky viewport */}
      <div className="fixed overflow-hidden  top-0 mx-auto grid h-[70vh] w-full max-w-3xl place-items-center px-4 sm:px-6">
        <div className="relative h-[600px] w-full">
          {cards.map((card, i) => {
            // Each card maps a slice of the global progress [i/total, (i+1)/total]
            const start = i / total;
            const end = (i + 1) / total;

            const y = useTransform(smoothed, [start, end], [120, -420]);
            const rot = useTransform(smoothed, [start, end], [i % 2 ? 8 : -8, 0]);
            const sc = useTransform(smoothed, [start, end], [0.96 - i * 0.02, 1 - i * 0.02 + 0.02]);
            const blur = useTransform(smoothed, [start, end], [6, 0]);
            const ringOpacity = useTransform(smoothed, [start, end], [0.25, 0.9]);

            return (
              <motion.article
                key={card.id}
                className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 select-none"
                style={{ translateY: y, rotate: rot, scale: sc, zIndex: total - i }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                  {/* Animated gradient ring */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    style={{
                      opacity: ringOpacity,
                      padding: 1,
                      background: `linear-gradient(120deg, ${card.accent}, transparent 40%, transparent 60%, ${card.accent})`,
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  {/* Ambient accent blob */}
                  <div
                    aria-hidden
                    className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full blur-3xl"
                    style={{ background: `${card.accent}33` }}
                  />

                  {/* pointer chevron */}
                  <div className="relative">
                    <div className="absolute -top-6 left-1/2 z-10 h-6 w-8 -translate-x-1/2 rotate-180 rounded-b-full bg-white/90 [clip-path:polygon(50%_0,0_100%,100%_100%)]" />
                  </div>

                  {/* content */}
                  <div className="px-8 pb-9 pt-12 sm:px-10 sm:pt-14">
                    <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-xl ring-1 ring-white/20">
                      <img src={card.photo} alt="" className="h-full w-full object-cover" />
                    </div>

                    <h3 className="text-center text-[40px] font-extrabold leading-tight tracking-tight sm:text-[46px]">
                      {card.tag}
                    </h3>

                    <p className="mx-auto mt-4 max-w-[42ch] text-center text-[13.5px] leading-6 text-white/80">
                      {card.title}
                    </p>

                    <p className="mx-auto mt-2 max-w-[56ch] text-center text-[13.5px] leading-6 text-white/65">
                      {card.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}