"use client";

import Link from "next/link";
import { useMemo } from "react";

export default function ServicesSection() {
  // You can reorder or tweak these quickly.
  const cards = useMemo(
    () => [
      {
        emoji: "🧭",
        title: "UX/UI Design",
        desc:
          "Flows, wireframes, and high-fidelity interfaces that feel effortless. Design systems that scale as you grow.",
        href: "#ux",
         meta: "Design System • Web & App",
      },
      {
        emoji: "⚡",
        title: "Performance & Accessibility",
        desc:
          "Ship fast, readable, and inclusive experiences. WCAG-aware patterns and Core Web Vitals in the green.",
        href: "#perf",
        meta: "Lighthouse • WCAG",
      },
      {
        emoji: "🛍️",
        title: "E-Commerce",
        desc:
          "Conversion-first storefronts: product architecture, PDPs that sell, and smooth checkout experiences.",
        href: "#commerce",
        meta: "Catalog • Checkout",
      },
      {
        emoji: "🔁",
        title: "Migrations",
        desc:
          "Move platforms without the mess. Content mapping, redirects, QA, and zero-drama launch windows.",
        href: "#migrate",
        meta: "SEO-Safe • Redirects",
      },
      {
        emoji: "🎯",
        title: "SEO & Content",
        desc:
          "Technical SEO, schema, IA, and narratives that align with intent. Built for long-term discoverability.",
        href: "#seo",
        meta: "Schema • IA",
      },
      {
        emoji: "🧩",
        title: "Integrations",
        desc:
          "Calendars, CRMs, payments, analytics — cleanly integrated with guardrails so teams can self-serve.",
        href: "#integrations",
        meta: "Zapier • APIs",
      },
      {
        emoji: "🎨",
        title: "Brand & Identity",
        desc:
          "A visual language with rules that actually help. Logos, palettes, and typography with purpose.",
        href: "#brand",
        meta: "Logo • Guidelines",
      },
      {
        emoji: "📚",
        title: "Docs & Training",
        desc:
          "Hand-off you’ll love: playbooks, component usage, and async videos so your team moves confidently.",
        href: "#training",
        meta: "Playbooks • Loom",
      },
    ],
    []
  );

  return (
    <section id="services" className="relative isolate bg-[#000000] text-slate-200">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-black blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            
          }}
        />
      </div>

      {/* Heading */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300/90">
                Services
              </span>
              <span className="text-xs text-slate-400">
                Mix & match for your roadmap
              </span>
            </div>

            <h2 className="bg-gradient-to-r special-font from-white via-sky-100 to-sky-300 bg-clip-text text-transparent text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
              Everything you need to ship beautiful, fast experiences
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Pick a single engagement or bundle for momentum. Designed for
              teams that value clarity, speed, and craft.
            </p>

            <div className="mt-5 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Start a project <span aria-hidden>→</span>
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      {/* Cards (masonry-ish) */}
      <div className="relative mt-10 mx-auto grid max-w-7xl grid-cols-12 gap-5 px-4 pb-16 sm:px-6 lg:px-8">
        {cards.map((c, i) => {
          const featured = c.featured;
          const col = featured
            ? "col-span-12 md:col-span-7"
            : "col-span-12 sm:col-span-4 md:col-span-6";
          const height = featured ? "md:min-h-[420px]" : "md:min-h-[260px]";
          return (
            <article
              key={i}
              className={`${col} group relative  overflow-hidden rounded-3xl border border-[#25698829] bg-gradient-to-br  from-black  to-[#95ddff38] hover:to-[#95ddff] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] ${height}`}
            >
              <p className="absolute right-2 bottom-2 grays cale md:text-8xl text-6xl opacity0" aria-hidden>
                {c.emoji}
              </p>
              {/* gradient ring */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  maskImage:
                    "radial-gradient(300px 300px at var(--x,50%) var(--y,50%), black 40%, transparent 60%)",
                  WebkitMaskImage:
                    "radial-gradient(300px 300px at var(--x,50%) var(--y,50%), black 40%, transparent 60%)",
                  background:
                    "conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.15), transparent 30%, rgba(99,102,241,0.15), transparent 70%, rgba(56,189,248,0.15))",
                  opacity: 0,
                  transition: "opacity .3s ease",
                }}
              />
              {/* subtle inset stroke */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />

              {/* Top row */}
              <div className="mb-4 flex items-start gap-4">
                {/* <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-tr from-sky-500/15 to-cyan-400/10 text-xl ring-1 ring-white/10">
                  <span aria-hidden>{c.emoji}</span>
                </div> */}
                <div className="min-w-0">
                  <h3 className="truncate special-font text-2xl font-semibold tracking-[-0.01em] text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{c.meta}</p>
                </div>
                
              </div>

              {/* Body */}
              <p className="max-w-[56ch] text-sm leading-6 text-slate-300/90">
                {c.desc}
              </p>

              {/* Footer CTA */}
              <Link
                href={c.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200"
              >
                Learn more <span aria-hidden>→</span>
              </Link>

              {/* Hover aura */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(140px 140px at var(--x,50%) var(--y,50%), rgba(56,189,248,0.12), transparent 60%)",
                }}
              />
            </article>
          );
        })}
      </div>

      {/* Cursor tracker for aura/gradient ring */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              const section = document.currentScript.parentElement;
              section.addEventListener('mousemove', (e) => {
                const r = section.getBoundingClientRect();
                section.style.setProperty('--x', (e.clientX - r.left) + 'px');
                section.style.setProperty('--y', (e.clientY - r.top) + 'px');
              }, { passive: true });
            })();
          `,
        }}
      />
    </section>
  );
}