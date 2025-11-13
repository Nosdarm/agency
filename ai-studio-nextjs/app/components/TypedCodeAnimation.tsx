"use client";

import { useEffect, useState } from "react";

interface TypedCodeAnimationProps {
  className?: string;
}

export function TypedCodeAnimation({ className = "" }: TypedCodeAnimationProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    { text: "// AI-accelerated MVP development", color: "text-neutral-500" },
    { text: "const project = {", color: "text-white" },
    { text: '  stack: ["Next.js", "FastAPI", "PostgreSQL"],', color: "text-violet-300" },
    { text: '  timeline: "3-5 weeks",', color: "text-cyan-300" },
    { text: '  pricing: "fixed-price",', color: "text-emerald-300" },
    { text: '  ai: "cursor + claude",', color: "text-fuchsia-300" },
    { text: "  deploy: async () => {", color: "text-white" },
    { text: '    await buildMVP();', color: "text-violet-300" },
    { text: '    return "production-ready";', color: "text-cyan-300" },
    { text: "  }", color: "text-white" },
    { text: "};", color: "text-white" },
  ];

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      // Reset after a pause
      const timer = setTimeout(() => {
        setDisplayedCode("");
        setCurrentLine(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const fullText = codeLines
      .slice(0, currentLine + 1)
      .map((l) => l.text)
      .join("\n");
    const targetText = fullText;
    const currentLength = displayedCode.length;

    if (currentLength < targetText.length) {
      // Typing animation
      const timer = setTimeout(() => {
        setDisplayedCode(targetText.slice(0, currentLength + 1));
      }, 30); // Typing speed
      return () => clearTimeout(timer);
    } else if (currentLine < codeLines.length - 1) {
      // Move to next line after a brief pause
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [displayedCode, currentLine, codeLines]);

  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-sm p-6 font-mono text-sm overflow-hidden ${className}`}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-neutral-500 text-xs ml-2">project.ts</span>
      </div>

      {/* Code content with syntax highlighting */}
      <pre className="text-left leading-relaxed">
        {codeLines.map((line, i) => {
          const isCurrentLine = i === currentLine;
          const isPastLine = i < currentLine;
          const lineText = isPastLine
            ? line.text
            : isCurrentLine
            ? displayedCode.split("\n")[i] || ""
            : "";

          return (
            <div key={i} className="relative">
              {/* Line number */}
              <span className="inline-block w-8 text-neutral-600 select-none">
                {i + 1}
              </span>
              {/* Code text */}
              <span className={line.color}>{lineText}</span>
              {/* Cursor */}
              {isCurrentLine && (
                <span className="inline-block w-2 h-5 bg-violet-500 ml-0.5 animate-pulse" />
              )}
            </div>
          );
        })}
      </pre>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
    </div>
  );
}
