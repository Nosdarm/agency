'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className
}: GlowButtonProps) {
  const Component = href ? 'a' : 'button';

  const baseClasses = clsx(
    'relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden group',
    className
  );

  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 hover:shadow-2xl'
    : 'bg-slate-800/50 text-white border border-white/10 hover:bg-slate-800/80 hover:border-white/20 backdrop-blur-sm';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses)}
    >
      {/* Animated shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <div
          className="h-full w-1/3"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>

      {/* Enhanced glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-fuchsia-600/30 to-cyan-500/30 blur-2xl" />
      </motion.div>

      {/* Neon border pulse */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
          animate={{
            boxShadow: [
              '0 0 0px rgba(139, 92, 246, 0)',
              '0 0 20px rgba(139, 92, 246, 0.6)',
              '0 0 0px rgba(139, 92, 246, 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Hover scale effect */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />
    </Component>
  );
}
