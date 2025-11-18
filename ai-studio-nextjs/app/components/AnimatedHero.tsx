"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { TypedCodeAnimation } from "./TypedCodeAnimation";

const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500",
  ring: "ring-violet-500/40",
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
      <span className="text-neutral-200">{children}</span>
    </li>
  );
}

export function AnimatedHero() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-300/90 mb-4">
          <Sparkles className="w-4 h-4" /> AI-Powered Development
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          MVP in 2-4 Weeks from <span className={`bg-clip-text text-transparent bg-gradient-to-r ${brand.primary}`}>$5,000</span>
        </h1>
        <p className="mt-4 sm:mt-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
          Full development cycle: design, web, mobile, testing.
          We use AI to accelerate, but code is written by senior developers.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-gradient-to-r ${brand.primary} shadow-lg text-sm sm:text-base`}>
            Discuss Project <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#pricing" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 ${brand.ring} text-sm sm:text-base`}>
            Pricing & Timeline
          </a>
        </div>
        <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-sm">
          <Check>Spec in 48 hours</Check>
          <Check>Demo every week</Check>
          <Check>7 days bug fixes</Check>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <TypedCodeAnimation />
      </motion.div>
    </div>
  );
}
