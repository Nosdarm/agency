'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from './GlowButton';
import { CodeWindow } from './CodeWindow';

export function HeroSection() {
  return (
    <section id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-cyan-500/10 border border-violet-500/20 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className="text-violet-400 font-medium text-sm">AI-Accelerated Development</span>
            <span className="text-slate-400">•</span>
            <span className="text-cyan-400 font-medium text-sm">Fixed Price</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Stop Burning Cash.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Launch Your MVP in 4 Weeks.
            </span>
          </h1>

          <motion.p
            className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Traditional agencies take months and charge a fortune. We combine <strong className="text-white">senior engineers</strong> with AI acceleration to build <strong className="text-white">production-ready SaaS products</strong> for a fraction of the cost.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlowButton href="#contact" variant="primary" className="whitespace-nowrap">
              <span className="flex items-center justify-center gap-2">
                Start Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </GlowButton>

            <GlowButton href="#tech-stack" variant="secondary">
              See Our Stack
            </GlowButton>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            className="mt-8 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted by founders from <strong className="text-slate-300">YC</strong>, <strong className="text-slate-300">Techstars</strong>, and bootstrap communities.
          </motion.p>
        </motion.div>

        {/* Right Side - Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
