'use client';

import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Python', icon: '🐍' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Redis', icon: '◆' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Vercel', icon: '▲' },
];

// Duplicate array for seamless infinite scroll
const duplicatedStack = [...techStack, ...techStack];

export function TechStackMarquee() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Powered by Modern Stack
        </h2>
        <p className="text-slate-400 mt-2">
          Best-in-class technologies for production-ready applications
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-4 sm:gap-8"
          animate={{
            x: [0, -50 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                {/* Icon */}
                <div className="text-2xl sm:text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  {tech.icon}
                </div>

                {/* Tech Name */}
                <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
