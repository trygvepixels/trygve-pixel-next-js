"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
     
   ];

  return (
    <header className="fixed w-full top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-3">
          {/* Minimal logo mark */}
         <Image src={logo} width={60} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition underline-offset-4 hover:underline decoration-white/25"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA (desktop) */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:opacity-90 transition"
          >
            Contact Us <FiArrowUpRight className="translate-y-[1px]" />
          </a>
        </div>

        {/* Mobile: menu toggle */}
        <button
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/15 bg-white/5 text-white md:hidden"
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="fixed inset-x-4 top-3 z-50 rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-3">
                
         <Image src={logo} width={60} />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/15 bg-white/5 text-white"
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            <div className="mt-4 grid gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[15px] text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Contact Us <FiArrowUpRight className="translate-y-[1px]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}