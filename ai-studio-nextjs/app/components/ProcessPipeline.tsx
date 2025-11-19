'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'The No-BS Discovery',
    description: 'We hop on a 30-min call to strip your idea down to its core value. We cut the fluff and define exactly what you need to start selling.',
  },
  {
    icon: FileText,
    title: 'Spec & Contract',
    description: 'Within 48 hours, you get a detailed technical specification and a fixed-price contract. You know exactly what you\'re buying.',
  },
  {
    icon: Code,
    title: 'The Sprint',
    description: 'We build in weekly cycles. You get a clickable demo every Friday. You see progress, not just reports.',
  },
  {
    icon: Rocket,
    title: 'Handover & Launch',
    description: 'We deploy to production, set up analytics, and hand over the keys. Includes a video walkthrough of the codebase for your future team.',
  },
];

export function ProcessPipeline() {
  return (
    <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          From Idea to <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Revenue</span> in 4 Steps
        </h2>
      </div>

      {/* Pipeline Container */}
      <div className="relative">
        {/* Connection Line - Desktop Horizontal */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 1)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </linearGradient>
            </defs>

            {/* Static Line */}
            <line
              x1="12.5%"
              y1="50%"
              x2="87.5%"
              y2="50%"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
            />

            {/* Animated Beam */}
            <motion.line
              x1="12.5%"
              y1="50%"
              x2="87.5%"
              y2="50%"
              stroke="url(#beam-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{
                pathOffset: [0, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </svg>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step Node */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Circle with Pulse Effect */}
                <motion.div
                  className="relative flex items-center justify-center w-24 h-24 rounded-full border-2 border-violet-500/50 bg-slate-900/90 backdrop-blur-sm mb-6"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(139, 92, 246, 0)',
                      '0 0 0 8px rgba(139, 92, 246, 0.1)',
                      '0 0 0 0 rgba(139, 92, 246, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <step.icon className="w-10 h-10 text-violet-400" />

                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-xl" />
                </motion.div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Vertical Connector for Mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-24 h-16 w-0.5 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
