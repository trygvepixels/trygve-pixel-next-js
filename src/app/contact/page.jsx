"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDribbble,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // simple front-end validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("loading");

      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          contactNo: form.phone,
          projectDetails: form.message,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Unknown error");

      setStatus("success");
      // reset form
      setForm({ name: "", email: "", phone: "", message: "" });

      // redirect
      router.push(`/thankyou?name=${encodeURIComponent(form.name)}`);
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert(`Error submitting form: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000000] text-white antialiased selection:bg-cyan-500/30 selection:text-white">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#86D9FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-48 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/10 blur-2xl" />

      {/* Hero */}
      <section className="relative z-10   mx-auto max-w-5xl px-6 pb-6 pt-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Start a project with us
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Let’s craft a <span className="text-cyan-300/90">beautiful</span>,{" "}
          <span className="text-[#86D9FF]/90">fast</span> experience together
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-gray-400">
          We build conversion-focused websites with exquisite detail, performance and accessibility — the kind that get Awwwards judges nodding.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#form"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-[#86D9FF] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-[1.015] active:scale-[.99]"
          >
            Start your brief
            <FaArrowRight className="transition group-hover:translate-x-0.5" />
          </a>
         
        </div>
      </section>

      {/* Contact options */}
      <section className="relative z-10 mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {[
          {
            icon: <FaEnvelope className="text-2xl text-cyan-400" />,
            label: "Email Us",
            value: "info@trygvepixels.com",
          },
          {
            icon: <FaPhoneAlt className="text-2xl text-[#86D9FF]" />,
            label: "Call Us",
            value: "+91 9554440400",
          },
          {
            icon: <FaMapMarkerAlt className="text-2xl text-emerald-400" />,
            label: "Visit Us",
            value: "Levana Cyber Heights, 10th Floor – Regus, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010, India",
          },
        ].map((c, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,.45)]"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/30 ring-1 ring-white/10">
                {c.icon}
              </div>
              <h3 className="font-semibold">{c.label}</h3>
              <p className="mt-1 text-sm text-gray-400">{c.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Main grid: form + info */}
      <section id="form" className="relative z-10 pt-20 mx-auto mb-24 grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl sm:block" />
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <p className="mt-1 text-sm text-gray-400">
              Tell us a bit about your goals. We’ll reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 pl-11 outline-none ring-0 transition placeholder:text-gray-500 focus:border-cyan-400"
                  />
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    🧑
                  </span>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 pl-11 outline-none ring-0 transition placeholder:text-gray-500 focus:border-cyan-400"
                  />
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    ✉️
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">Phone</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9554440400"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 pl-11 outline-none ring-0 transition placeholder:text-gray-500 focus:border-cyan-400"
                  />
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    📞
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your timeline, scope and any links…"
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-[#86D9FF] px-5 py-3 font-semibold tracking-wide text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="transition group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {/* success / error state */}
              {status === "success" && (
                <p className="flex items-center gap-2 text-emerald-400">
                  <FaCheckCircle /> Your message has been sent!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Info + socials + map */}
        <div className="lg:col-span-2 space-y-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">Studios</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md bg-black/30 p-2 ring-1 ring-white/10">
                  <FaMapMarkerAlt className="text-emerald-400" />
                </div>
                <p>
                  Levana Cyber Heights, 10th Floor – Regus
                  <br />
                  Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010, India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md bg-black/30 p-2 ring-1 ring-white/10">
                  <FaMapMarkerAlt className="text-emerald-400" />
                </div>
                <p>
                  HO: 728, Eden Enclave, Kursi Road,
                  <br />
                  Lucknow, 226026
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md bg-black/30 p-2 ring-1 ring-white/10">
                  <FaPhoneAlt className="text-[#86D9FF]" />
                </div>
                <p>+91 9554440400</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md bg-black/30 p-2 ring-1 ring-white/10">
                  <FaEnvelope className="text-cyan-400" />
                </div>
                <p>info@trygvepixels.com</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                aria-label="Dribbble"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                <FaDribbble />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                <FaTwitter />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            {/* Map placeholder – replace with your embed */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem]">
              <iframe
                title="Map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0841582781113!2d80.96877857600182!3d26.932546359236856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a25e439709cd1%3A0x28927eb890a78697!2sTrygve%20Studio%20Private%20Limited%20%7C%20Best%20Architecture%20Company%20%7C%20Best%20Construction%20Company%20%7C%20Best%20Interior%20Designer!5e0!3m2!1sen!2sin!4v1756568380757!5m2!1sen!2sin"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us – subtle tilt cards */}
      <section className="relative z-10 mx-auto mb-24 max-w-6xl px-6">
        <h3 className="text-center text-2xl font-semibold">Why Choose Us?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-400">
          Pixel-perfect craft, speed-obsessed builds, and a painless process.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Fast Turnaround",
            "A11y + Performance",
            "CMS & Integrations",
            "Long-term Support",
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <p className="text-sm text-gray-300">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto mb-24 max-w-4xl px-6">
        <h3 className="text-2xl font-semibold">FAQ</h3>
        <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {[
            {
              q: "How long does a project usually take?",
              a: "Most websites ship in 3–6 weeks depending on scope, content readiness and animation complexity.",
            },
            {
              q: "Do you handle SEO & performance?",
              a: "Yes. We ship Core Web Vitals-friendly builds with semantic HTML, image optimization, sitemaps and analytics.",
            },
            {
              q: "Can you migrate our current site?",
              a: "We handle migrations from WordPress, Webflow and headless CMS with zero-downtime cutovers.",
            },
          ].map((item, idx) => {
            const open = openFaq === idx;
            return (
              <button
                key={idx}
                onClick={() => setOpenFaq(open ? null : idx)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <p className="font-medium">{item.q}</p>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-xs transition ${open ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </div>
                {open && (
                  <div className="px-5 pb-5 text-sm text-gray-400">{item.a}</div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}