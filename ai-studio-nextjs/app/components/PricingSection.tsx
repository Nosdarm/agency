'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { GlowButton } from './GlowButton';

const pricingPlans = [
  {
    name: 'MVP Core',
    subtitle: 'Start here',
    price: '$5,900',
    description: 'Perfect for validating an idea with early adopters.',
    timeframe: '4 Weeks',
    features: [
      'Full Web App (React + FastAPI)',
      'Authentication & User Roles',
      '3-5 Core CRUD Features',
      'Payment Integration (Stripe)',
      'Admin Dashboard',
      'Delivered in 4 Weeks'
    ],
    popular: false
  },
  {
    name: 'Growth Ready',
    subtitle: 'Most Popular',
    price: '$7,900',
    description: 'For startups ready to onboard paying customers immediately.',
    timeframe: '5 Weeks',
    features: [
      'Everything in Core',
      'AI Features Integration (LLM)',
      'Advanced Analytics & Tracking',
      'Email/Push Notifications System',
      'Priority 7-Day Support Window',
      'Delivered in 5 Weeks'
    ],
    popular: true
  },
  {
    name: 'AI Booster',
    subtitle: 'Add-on',
    price: '+$3,000',
    description: 'Add "Magic" to your existing product.',
    timeframe: 'Add-on',
    features: [
      'Custom RAG (Chat with PDF/Data)',
      'AI Agents & Automation',
      'OpenAI / Claude API Integration'
    ],
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the speed that fits your roadmap.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow effect for popular */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              )}

              <div className={`relative h-full rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? 'bg-white/10 border-white/20 backdrop-blur-xl'
                  : 'bg-white/5 border-white/10 backdrop-blur-xl'
              }`}>
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1.5 rounded-full text-white text-sm font-medium shadow-lg">
                      <Zap className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-slate-400">/ {plan.timeframe}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 p-1 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20">
                        <Check className="w-4 h-4 text-violet-400" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <GlowButton
                  href="#contact"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full justify-center"
                >
                  Get Started
                </GlowButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-400 text-sm mt-12"
        >
          Need something custom? <a href="#contact" className="text-violet-400 hover:text-violet-300 underline">Contact us</a> for a tailored quote.
        </motion.p>
      </div>
    </section>
  );
}
