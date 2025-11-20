'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from './GlowButton';
import { BackgroundBeams } from './ui/background-beams';

export function HeroSection() {
  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-20 md:pt-0">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className="text-neutral-400 font-medium text-sm">AI-Native Studio</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Stop Burning Cash.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Launch Your MVP in 4 Weeks.
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Traditional agencies take months and charge a fortune. We combine <strong className="text-neutral-200">senior engineers</strong> with AI acceleration to build <strong className="text-neutral-200">production-ready SaaS products</strong> for a fraction of the cost.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
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
            className="mt-12 text-sm text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted by founders from <strong className="text-neutral-400">YC</strong>, <strong className="text-neutral-400">Techstars</strong>, and bootstrap communities.
          </motion.p>
        </div>
      </div>

      <BackgroundBeams />
    </section>
  );
}
