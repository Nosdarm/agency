"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500",
  ring: "ring-violet-500/40",
};

const packages = [
  { name: "Quick MVP", price: "$5,000" },
  { name: "Full MVP", price: "$15,000" },
  { name: "Advanced MVP", price: "$25,000" },
];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", pkg: "Quick MVP", message: "" });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          packageName: form.pkg,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setForm({ name: "", email: "", pkg: "Quick MVP", message: "" });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="name" className="text-xs sm:text-sm text-neutral-300 block mb-1">Your Name</label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full rounded-xl bg-neutral-900 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 ${brand.ring}`}
            placeholder="John / Sarah"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs sm:text-sm text-neutral-300 block mb-1">Email</label>
          <input
            id="email"
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full rounded-xl bg-neutral-900 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 ${brand.ring}`}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-3 sm:mt-4">
        <label htmlFor="package" className="text-xs sm:text-sm text-neutral-300 block mb-1">Package</label>
        <select
          id="package"
          value={form.pkg}
          onChange={(e) => setForm({ ...form, pkg: e.target.value })}
          className={`w-full rounded-xl bg-neutral-900 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 ${brand.ring}`}
        >
          {packages.map((p) => (
            <option key={p.name} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>

      <div className="mt-3 sm:mt-4">
        <label htmlFor="message" className="text-xs sm:text-sm text-neutral-300 block mb-1">Brief Description</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className={`w-full rounded-xl sm:rounded-2xl bg-neutral-900 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:ring-2 ${brand.ring}`}
        />
      </div>

      {submitStatus === 'success' && (
        <div className="mt-4 p-3 sm:p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm">Message sent successfully! We'll get back to you within 48 hours.</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-3 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <span className="text-xs sm:text-sm">Error: {errorMessage}. Please try again or email us directly.</span>
        </div>
      )}

      <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r ${brand.primary} shadow-lg min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {submitStatus === 'loading' ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              Send Request <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 min-h-[48px]"
        >
          Schedule Call
        </a>
      </div>
    </form>
  );
}
