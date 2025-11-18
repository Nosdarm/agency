"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CountUp from "react-countup";
import { MagneticButton } from "./MagneticButton";

const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500",
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
      <span className="text-neutral-200">{children}</span>
    </li>
  );
}

export function ClientPriceCard({
  name,
  price,
  timeframe,
  features,
  highlight = false,
  badge,
  perfectFor,
}: {
  name: string;
  price: string;
  timeframe?: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  perfectFor?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const numericPrice = parseInt(price.replace(/[^0-9]/g, '')) || 0;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <motion.div
        className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-0 blur-xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />

      <article
        className={`relative rounded-2xl sm:rounded-3xl border ${
          highlight ? "border-violet-500/50" : "border-white/5"
        } bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 lg:p-8 flex flex-col shadow-2xl h-full transition-all duration-300 ${
          isHovered ? "border-violet-500/30 bg-white/[0.06]" : ""
        }`}
      >
        {badge && (
          <motion.div
            className="absolute -top-3 left-4 sm:left-6 text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(139, 92, 246, 0.4)",
                "0 0 0 8px rgba(139, 92, 246, 0)",
                "0 0 0 0 rgba(139, 92, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {badge}
          </motion.div>
        )}
        <h3 className="text-white text-lg sm:text-xl font-semibold">{name}</h3>
        {timeframe && (
          <div className="mt-2 text-sm text-violet-300">{timeframe}</div>
        )}
        <div className="mt-3 sm:mt-4">
          <span className="text-3xl sm:text-4xl font-semibold text-white">
            <CountUp
              start={0}
              end={numericPrice}
              duration={2.5}
              separator=","
              prefix="$"
              useEasing={true}
              easingFn={(t, b, c, d) => {
                t /= d;
                return -c * t * (t - 2) + b;
              }}
            />
          </span>
          <span className="text-neutral-400 ml-1 sm:ml-2 text-sm sm:text-base">fixed-price</span>
        </div>
        <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 flex-1">
          {features.map((f, i) => (
            <Check key={i}>{f}</Check>
          ))}
        </ul>
        {perfectFor && (
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
            <p className="text-xs sm:text-sm text-neutral-400">{perfectFor}</p>
          </div>
        )}
        <MagneticButton
          href="#contact"
          className={`mt-4 sm:mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm sm:text-base font-medium text-white shadow transition-all ${
            highlight
              ? `bg-gradient-to-r ${brand.primary} hover:shadow-lg hover:shadow-violet-500/50`
              : "bg-neutral-800 hover:bg-neutral-700"
          }`}
        >
          Choose Package <ArrowRight className="w-4 h-4" />
        </MagneticButton>
      </article>
    </div>
  );
}
