'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: 'single' | 'double';
  className?: string;
}

export function BentoCard({ icon: Icon, title, description, span = 'single', className }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    x.set(xPct);
    y.set(yPct);

    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative h-full group ${span === 'double' ? 'md:col-span-2' : ''} ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <article className="relative rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.07] backdrop-blur-md transition p-6 flex flex-col h-full overflow-hidden">
        {/* Hover Border Gradient Effect */}
        {isHovering && (
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(167, 139, 250, 0.2), transparent 40%)`,
            }}
          />
        )}

        {/* Icon with 3D transform */}
        <div className="flex items-center gap-3 mb-4" style={{ transform: 'translateZ(20px)' }}>
          <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-cyan-500 text-white/95 shadow-lg flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-white font-medium text-lg">{title}</h3>
        </div>

        {/* Description with subtle 3D depth */}
        <p className="text-slate-300 leading-relaxed flex-1" style={{ transform: 'translateZ(10px)' }}>
          {description}
        </p>

        {/* Enhanced Inner Glow */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
          }}
        />
      </article>
    </motion.div>
  );
}
