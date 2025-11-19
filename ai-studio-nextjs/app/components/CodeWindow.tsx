"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "import", color: "text-pink-500" },
  { text: " { ", color: "text-white" },
  { text: "AI_Model", color: "text-yellow-300" },
  { text: " } ", color: "text-white" },
  { text: "from", color: "text-pink-500" },
  { text: " 'build-fast';", color: "text-green-400" },
  { text: "\n", color: "" }, // New line
  { text: "const", color: "text-blue-400" },
  { text: " app ", color: "text-white" },
  { text: "=", color: "text-pink-500" },
  { text: " await", color: "text-blue-400" },
  { text: " AI", color: "text-yellow-300" },
  { text: ".", color: "text-white" },
  { text: "deploy", color: "text-blue-300" },
  { text: "({", color: "text-yellow-500" },
  { text: "\n  weeks: ", color: "text-white" },
  { text: "4", color: "text-orange-400" },
  { text: ",", color: "text-white" },
  { text: "\n  stack: ", color: "text-white" },
  { text: "['React', 'FastAPI']", color: "text-green-400" },
  { text: "\n});", color: "text-yellow-500" },
];

export function CodeWindow() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typeNextToken = () => {
      if (visibleCount < codeLines.length) {
        // Плавные вариативные задержки:
        const currentToken = codeLines[visibleCount];
        let delay = 100;

        if (currentToken.text.trim() === '' || currentToken.text.length <= 2) {
          delay = 60 + Math.random() * 40; // 60-100ms
        } else if (currentToken.text.length > 10) {
          delay = 150 + Math.random() * 50; // 150-200ms
        } else {
          delay = 100 + Math.random() * 50; // 100-150ms
        }

        timeoutId = setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, delay);
      }
    };

    typeNextToken();

    return () => clearTimeout(timeoutId);
  }, [visibleCount]);

  return (
    <div className="relative w-full max-w-md">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-500/20 rounded-2xl blur opacity-75" />

      {/* Main container - glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 font-mono text-sm sm:text-base shadow-2xl">
        {/* Header (Traffic Lights) */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="ml-auto text-xs text-slate-400">project.ts</div>
        </div>

        {/* Code Area */}
        <div className="p-6 min-h-[240px] text-left bg-gradient-to-br from-slate-900/40 to-slate-950/40">
          <div className="leading-relaxed whitespace-pre">
            {codeLines.slice(0, visibleCount).map((token, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: -3, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1], // easeOutExpo для плавности
                }}
                className={token.color}
              >
                {token.text}
              </motion.span>
            ))}

            {/* Курсор */}
            {visibleCount < codeLines.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className="inline-block w-2.5 h-5 bg-violet-400 align-middle ml-1"
                style={{ boxShadow: "0 0 12px rgba(167, 139, 250, 0.8)" }}
              />
            )}
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      </div>
    </div>
  );
}
