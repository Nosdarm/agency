import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Zap, Rocket, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | MVP Development from $5,000 | BuildItFast",
  description: "Transparent MVP development pricing. Choose from Starter ($5K), Growth ($12K), or Scale ($25K) packages. Fixed price, no hidden fees, full code ownership.",
  keywords: ["mvp pricing", "startup development cost", "mvp development price", "affordable mvp development"],
  openGraph: {
    title: "MVP Development Pricing | BuildItFast",
    description: "Transparent pricing for MVP development. From $5,000 with full code ownership.",
    url: "https://builditfast.ai/pricing",
    type: "website",
  },
  alternates: {
    canonical: "https://builditfast.ai/pricing",
  },
};

const SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const plans = [
  {
    name: "Starter",
    price: "$5,000",
    timeline: "2 weeks",
    icon: Zap,
    color: "violet",
    description: "Perfect for validating your idea with a functional prototype",
    features: [
      "Core MVP features (up to 5 screens)",
      "Responsive web application",
      "User authentication",
      "Basic admin dashboard",
      "1 month of bug fixes",
      "Full source code ownership",
    ],
  },
  {
    name: "Growth",
    price: "$12,000",
    timeline: "3 weeks",
    icon: Rocket,
    color: "fuchsia",
    popular: true,
    description: "Ideal for startups ready to launch and acquire early users",
    features: [
      "Everything in Starter",
      "Up to 15 screens",
      "Payment integration (Stripe)",
      "Email notifications",
      "Analytics dashboard",
      "API documentation",
      "3 months of support",
    ],
  },
  {
    name: "Scale",
    price: "$25,000",
    timeline: "4 weeks",
    icon: Building2,
    color: "cyan",
    description: "For funded startups needing a production-ready platform",
    features: [
      "Everything in Growth",
      "Unlimited screens",
      "Mobile app (iOS + Android)",
      "Advanced integrations",
      "Multi-tenant architecture",
      "CI/CD pipeline setup",
      "6 months of support",
      "Priority communication",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      {/* Hero */}
      <section className={`${SECTION_CLASSES} pt-20 sm:pt-24 lg:pt-32 pb-16`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 sm:mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            No hidden fees. No hourly rates. Fixed pricing with clear deliverables.
            Choose the package that fits your stage and budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={`${SECTION_CLASSES} pb-16 sm:pb-20`}>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? "border-fuchsia-500/50 bg-gradient-to-b from-fuchsia-500/10 to-transparent"
                    : "border-white/10 bg-white/[0.03]"
                } p-6 lg:p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-${plan.color}-500/20 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 text-${plan.color}-400`} />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                </div>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-neutral-400 ml-2">/ {plan.timeline}</span>
                </div>

                <p className="text-neutral-400 text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`block w-full text-center rounded-xl px-6 py-3 font-medium transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's included in the price?",
                a: "Everything needed to launch: design, development, deployment, and initial support. No hidden costs or surprise fees.",
              },
              {
                q: "Do I own the code?",
                a: "Yes, 100%. You get full ownership of all source code, designs, and assets. No licensing fees or royalties.",
              },
              {
                q: "What if I need changes after launch?",
                a: "All packages include a support period for bug fixes. Additional features can be added at hourly rates or through a new project scope.",
              },
              {
                q: "How do payments work?",
                a: "50% upfront to start, 50% upon completion. We accept bank transfers, credit cards, and crypto.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-neutral-300 mb-8">
            Let's discuss your requirements and find the perfect package for your startup.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <div className={`${SECTION_CLASSES} pb-12`}>
        <Link href="/" className="text-neutral-400 hover:text-white transition text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
