'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/20 via-slate-900/40 to-blue-900/20 backdrop-blur-xl p-12 sm:p-16 overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Don't let your idea stay in your notes app.
            </motion.h2>

            <motion.p
              className="text-xl text-slate-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              You have the vision. We have the engine. Let's build something great <strong className="text-white">before someone else does.</strong>
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white font-semibold text-lg shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-shadow duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book 15-min Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
