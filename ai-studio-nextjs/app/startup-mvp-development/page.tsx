import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Rocket, TrendingUp, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Startup MVP Development | Launch in 21 Days | BuildItFast",
  description: "MVP development specifically for startups. Fixed pricing from $5K. Launch your product in 2-4 weeks. Perfect for pre-seed and seed stage companies.",
  keywords: ["startup mvp development", "pre-seed mvp", "seed stage development", "fast mvp", "startup development"],
  openGraph: {
    title: "Startup MVP Development | BuildItFast",
    description: "From idea to launch in 21 days. Fixed pricing. Built for startup speed.",
    url: "https://builditfast.ai/startup-mvp-development",
    type: "website",
  },
};

const SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function StartupMVPDevelopment() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      {/* Hero */}
      <section className={`${SECTION_CLASSES} pt-20 sm:pt-24 lg:pt-32 pb-16`}>
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Startup MVP Development: From Idea to Launch in 21 Days
          </h1>
          <p className="mt-5 sm:mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            Startups operate in a unique environment of extreme uncertainty, limited resources, and intense
            time pressure. You need to validate your idea before your runway ends, show traction to investors,
            and beat competitors to market. Traditional development agencies don't understand these constraints.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg"
            >
              Start Your MVP <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why Startups Choose Us */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`}>
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Why Startups Choose Our MVP Development Services
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-8">
            We built our entire process around startup needs. Fixed pricing that fits pre-seed budgets.
            2-4 week timelines that preserve runway. Flexible scope that adapts to user feedback.
            Production-ready code that can scale with growth. Complete ownership so you control your destiny.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Rocket, title: "Fast to Market", desc: "Launch in 2-4 weeks, not months" },
              { icon: Zap, title: "Fixed Pricing", desc: "Know your costs upfront, no surprises" },
              { icon: TrendingUp, title: "Built to Scale", desc: "Architecture that grows with you" }
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for the Startup Journey */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20`}>
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
            Built for the Startup Journey
          </h2>

          <div className="space-y-8">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Pre-Seed Stage Support
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                At pre-seed, every dollar counts. Our $5,000 Quick MVP package gives you a functional product to
                validate demand without burning through your friends-and-family round. We help you identify the
                absolute minimum features needed for validation, build quickly using AI acceleration and templates,
                launch to early adopters for feedback, and iterate based on real user data.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                This approach lets you fail fast and cheap or find product-market fit before raising institutional capital.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Seed Stage Acceleration
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Post-seed, you need to move from validation to growth. Our $15,000 Standard MVP package includes
                everything needed to acquire and retain users: payment processing to generate revenue, analytics
                to track user behavior, email automation for engagement, admin tools for operations, and
                infrastructure that scales.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                We've helped dozens of seed-stage startups launch products that supported their Series A narratives.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Growth Stage Foundation
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Some startups need more complex MVPs to compete in sophisticated markets. Our Advanced MVP package
                supports AI/ML integrations for differentiation, real-time features for engagement, native mobile
                apps for better experience, enterprise security for B2B sales, and compliance features for regulated
                industries.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Even complex MVPs launch in 5-8 weeks, not the 6-12 months agencies quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup-Specific Features */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`}>
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
            Startup-Specific Features We Include
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Investor-Ready Infrastructure
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Investors will conduct technical due diligence, so we build every MVP to pass scrutiny. Clean,
                documented codebase that any developer can understand. Scalable architecture that won't need
                rewrites at Series A. Security best practices to protect user data. Performance optimization for
                smooth user experience. Comprehensive testing to minimize bugs. Your MVP becomes an asset, not
                technical debt.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Growth Tools Built-In
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Growing a startup requires constant experimentation. Every MVP includes analytics integration
                (Google Analytics, Mixpanel, or Amplitude), A/B testing framework for optimization, email service
                provider integration, referral system for viral growth, SEO optimization for organic traffic, and
                social sharing features. These tools help you understand users, optimize conversion, and scale
                efficiently.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Flexible Architecture
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Startups pivot, and your technology needs to pivot with you. We build modular architectures where
                features can be added or removed easily. API-first design enables mobile apps and integrations.
                Microservices approach allows independent scaling. Feature flags let you test with specific users.
                Clean separation of concerns makes changes safer. Your MVP evolves with your business model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20`}>
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
            Success Stories from Funded Startups
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                From Zero to $2M Seed Round in 6 Months
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                A solo founder came to us with an idea for automating invoice processing using AI. We built an
                MVP in 18 days that could extract data from PDFs, match invoices to purchase orders, and integrate
                with QuickBooks. The founder launched to 10 beta customers, gathered feedback for 2 months, and
                raised a $2M seed round based on early traction. The clean codebase we delivered allowed them to
                quickly hire a team and scale to 100+ customers.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Beating a Funded Competitor to Market
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                A founding team discovered a competitor had raised $5M to build a similar product. They needed to
                launch fast to establish market presence. We delivered their marketplace MVP in 14 days - record
                time even for us. They acquired 500 users in the first month while their competitor was still
                building. This early traction helped them raise their own seed round and maintain market leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Ready to Launch Your Startup MVP?
          </h2>
          <p className="text-neutral-300 mb-8 text-base sm:text-lg">
            Let's build your MVP fast and get you to market before the competition.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
