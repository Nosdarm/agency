"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Forch | DeFi Dashboard",
    category: "FinTech & Analytics",
    image: "/images/Forch-optimized.jpg",
    desc: "High-frequency trading dashboard offering real-time analytics across multiple asset classes with bank-grade security.",
    stack: ["Next.js", "WebSockets", "Tailwind"],
    link: "#" // Можно оставить заглушку или ссылку на контакт
  },
  {
    title: "DiniWorks | Team OS",
    category: "B2B SaaS Productivity",
    image: "/images/Diniworks-optimized.jpg",
    desc: "Complex project management platform featuring drag-and-drop Kanban boards, real-time chat, and team calendars.",
    stack: ["React", "PostgreSQL", "Redux"],
    link: "#"
  },
  {
    title: "Neon Market | NFT Platform",
    category: "Web3 Marketplace",
    image: "/images/Neon-optimized.jpg",
    desc: "Fully immersive digital asset marketplace with auction mechanics and wallet integration handling 10k+ users.",
    stack: ["Web3.js", "Node.js", "AWS"],
    link: "#"
  }
];

export function CasesSection() {
  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-violet-400">Work</span>
          </h2>
          <p className="text-lg text-slate-400">
            Engineering challenges we've solved. Production-ready systems, not just concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
          {cases.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-video md:h-[240px] md:aspect-auto w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-medium text-violet-400 mb-2 uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-violet-500/20 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-violet-300" />
                  </div>
                </div>

                <p className="text-slate-400 text-base md:text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
