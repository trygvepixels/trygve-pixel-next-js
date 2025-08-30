"use client";

import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { useSearchParams, useRouter } from "next/navigation";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get("name") || "Friend";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#000000] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#86D9FF]/10 blur-3xl" />
    

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
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-[#86D9FF] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Back to Home
          </button>
          
        </div>
      </div>

     
    </div>
  );
}