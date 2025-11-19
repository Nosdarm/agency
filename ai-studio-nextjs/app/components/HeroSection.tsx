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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Build your MVP in weeks, not months
            </span>
          </h1>

          <motion.p
            className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AI-accelerated development that reduces time by 70%. Full-stack web & mobile apps,
            built by senior developers using cutting-edge AI tools.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlowButton href="#contact" variant="primary" className="whitespace-nowrap">
              <span className="flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </GlowButton>

            <GlowButton href="#pricing" variant="secondary">
              View Pricing
            </GlowButton>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
                2-4 weeks
              </div>
              <div className="text-sm text-slate-400 mt-1">To launch</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                70% faster
              </div>
              <div className="text-sm text-slate-400 mt-1">With AI tools</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                $5k+
              </div>
              <div className="text-sm text-slate-400 mt-1">Starting price</div>
            </div>
          </motion.div>
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
