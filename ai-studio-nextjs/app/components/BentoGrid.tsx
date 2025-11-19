'use client';

import { Code2, Rocket, Shield, Gauge, Lock, Clock } from 'lucide-react';
import { BentoCard } from './BentoCard';

const features = [
  {
    icon: Code2,
    title: 'Full Development Cycle',
    description: 'Complete MVP development: design, web, mobile, testing. We use AI to accelerate, but code is written by senior developers.',
    span: 'double' as const,
  },
  {
    icon: Rocket,
    title: 'MVP in 2-4 Weeks',
    description: 'From $5,000. Backend and frontend templates, ready design system, CI. Weekly demos with real progress.',
    span: 'single' as const,
  },
  {
    icon: Shield,
    title: 'Clear Boundaries',
    description: 'Fixed-price, SOW/DoD, feature freeze. Changes handled through transparent change requests.',
    span: 'single' as const,
  },
  {
    icon: Gauge,
    title: 'Production-Ready Products',
    description: 'Tech stack for your needs: React/Vite, Next.js, FastAPI/NestJS, PostgreSQL, Stripe, Redis.',
    span: 'double' as const,
  },
  {
    icon: Lock,
    title: 'Security Basics',
    description: 'Auth, roles, validation, logging. Minimum — JWT/OAuth + industry best practices.',
    span: 'single' as const,
  },
  {
    icon: Clock,
    title: 'Fast Start',
    description: 'Specification within 48h after call. Deploy to Vercel/Render/Fly/Hetzner.',
    span: 'single' as const,
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="features-heading">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="features-heading" className="text-3xl sm:text-4xl font-semibold text-white">
          AI-Accelerated MVP Development
        </h2>
        <p className="mt-4 text-slate-300">
          We use modern AI tools (Cursor, Claude, GitHub Copilot) to accelerate routine component development by 25-40%.
          Architecture and code review remain with experienced developers.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {features.map((feature, index) => (
          <BentoCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            span={feature.span}
          />
        ))}
      </div>
    </section>
  );
}
