'use client';

import { Code2, Rocket, Shield, Gauge, Lock, Clock } from 'lucide-react';
import { BentoCard } from './BentoCard';

const features = [
  {
    icon: Rocket,
    title: 'Weeks, Not Months.',
    description: 'We don\'t bill by the hour, so we don\'t drag things out. Our AI workflows automate 40% of boilerplate code (CRUD, tests, types), letting us focus on your unique business logic.',
    span: 'double' as const,
  },
  {
    icon: Lock,
    title: 'You Own the Code.',
    description: 'No vendor lock-in. No "proprietary platform." We deploy to your GitHub and your cloud (AWS/Vercel) from Day 1. If you fire us, you keep everything.',
    span: 'single' as const,
  },
  {
    icon: Shield,
    title: 'Real Engineering.',
    description: 'No-Code tools break at 1,000 users. We build on React & Python — the same stack used by Netflix and Uber. Scalable by design.',
    span: 'single' as const,
  },
  {
    icon: Gauge,
    title: 'Fixed Price Guarantee.',
    description: 'Scope creep is our problem, not yours. You get a guaranteed price upfront. No hidden fees, no "hourly rate" surprises.',
    span: 'double' as const,
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="features-heading">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          The <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">"Anti-Agency"</span> Approach
        </h2>
        <p className="mt-4 text-slate-300 text-lg">
          Why smart founders choose us over freelancers and dev shops.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 auto-rows-fr">
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
