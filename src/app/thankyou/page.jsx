import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ThankYouPage({ searchParams }) {
  const name = searchParams?.name || "Friend";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#000000] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#86D9FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-48 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-2xl" />

      {/* Card */}
      <div className="relative z-10 max-w-lg w-full text-center p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        <FaCheckCircle className="mx-auto text-5xl text-emerald-400 mb-6 drop-shadow-lg" />
        <h1 className="text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Thank you, {name}!
        </h1>
        <p className="mt-4 text-gray-400">
          We’ve received your message. Our team will get back to you within 24 hours.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-[#86D9FF] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Back to Home
          </Link>
          
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}