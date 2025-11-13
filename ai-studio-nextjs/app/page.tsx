"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  Gauge,
  Lock,
  Mail,
  Phone,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { FAQSchema } from "./structured-data";
import { AnimatedGridBackground } from "./components/AnimatedGridBackground";
import { TypedCodeAnimation } from "./components/TypedCodeAnimation";
import { Card3D } from "./components/Card3D";

const SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500",
  ring: "ring-violet-500/40",
};

const ENABLED = {
  how: true,
  pricing: true,
  cases: true,
  process: true,
  faq: true,
  testimonials: false,
  contact: true,
};

const CLUTCH = {
  enabled: false,
  companyId: "YOUR_CLUTCH_COMPANY_ID",
  widgetType: "12",
  theme: "dark" as "dark" | "light",
};

function SectionTitle({ kicker, title, subtitle, id }: { kicker?: string; title: string; subtitle?: string; id?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {kicker && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-300/80 mb-3">
          <Sparkles className="w-4 h-4" />
          <span>{kicker}</span>
        </div>
      )}
      <h2 id={id} className="text-3xl sm:text-4xl font-semibold text-white leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-neutral-300">{subtitle}</p>}
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <Card3D className="group">
      <article className="relative rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.07] transition p-6 flex flex-col h-full">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-gradient-to-tr ${brand.primary} text-white/95 shadow`}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-white font-medium text-lg">{title}</h3>
        </div>
        <p className="text-neutral-300 mt-3 leading-relaxed flex-1">{desc}</p>
      </article>
    </Card3D>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
      <span className="text-neutral-200">{children}</span>
    </li>
  );
}

function PriceCard({
  name,
  price,
  features,
  highlight = false,
  badge,
  ideal,
}: {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ideal?: string;
}) {
  return (
    <Card3D className="group">
      <article
        className={`relative rounded-3xl border ${highlight ? "border-violet-500/50" : "border-white/5"} bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 flex flex-col shadow-2xl h-full`}
      >
        {badge && (
          <div className="absolute -top-3 left-6 text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow">
            {badge}
          </div>
        )}
        <h3 className="text-white text-xl font-semibold">{name}</h3>
        <div className="mt-4">
          <span className="text-3xl font-semibold text-white">{price}</span>
        </div>
        <ul className="mt-6 space-y-3 flex-1">
          {features.map((f, i) => (
            <Check key={i}>{f}</Check>
          ))}
        </ul>
        {ideal && <p className="mt-4 text-sm text-violet-300/80 italic">{ideal}</p>}
        <a
          href="#contact"
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-medium text-white shadow ${
            highlight
              ? `bg-gradient-to-r ${brand.primary}`
              : "bg-neutral-800 hover:bg-neutral-700"
          }`}
        >
          Choose Package <ArrowRight className="w-4 h-4" />
        </a>
      </article>
    </Card3D>
  );
}

const features = [
  {
    icon: Code2,
    title: "SaaS Platforms",
    desc: "Full-cycle B2B/B2C SaaS development. Multi-tenancy, subscription management & billing, admin panels. Stack: Next.js, Node.js, PostgreSQL, Stripe. Timeline: 3-5 weeks.",
  },
  {
    icon: Rocket,
    title: "Mobile Applications",
    desc: "Cross-platform iOS & Android development. One codebase, native performance, push notifications, offline mode, App Store/Google Play publishing. Stack: React Native, Expo, Firebase. Timeline: 3-4 weeks.",
  },
  {
    icon: Shield,
    title: "Web Applications",
    desc: "Progressive Web Apps and classic web services. Mobile-first responsive design, real-time functionality, SEO optimization, CDN integration. Stack: React, Vue.js, Tailwind CSS, Vercel. Timeline: 2-3 weeks.",
  },
  {
    icon: Gauge,
    title: "Marketplace & Platforms",
    desc: "Two-sided platforms and marketplaces. User & vendor portals, payment processing with escrow, ratings & reviews, search & filters. Stack: Next.js, Supabase, Stripe Connect. Timeline: 4-5 weeks.",
  },
];

const packages = [
  {
    name: "Startup MVP",
    price: "$15,000 - $25,000",
    features: [
      "Up to 10 key features",
      "Web OR Mobile (one platform)",
      "Basic analytics",
      "2-3 weeks development",
      "30 days support",
    ],
    ideal: "Perfect for: idea validation, first users",
  },
  {
    name: "Scale-Ready Platform",
    price: "$25,000 - $45,000",
    badge: "Most Popular",
    features: [
      "Up to 20 features",
      "Web + Mobile",
      "Payments & subscriptions",
      "Admin panel",
      "3-5 weeks development",
      "60 days support",
    ],
    highlight: true,
    ideal: "Perfect for: quick market entry, fundraising",
  },
  {
    name: "Enterprise Foundation",
    price: "$45,000+",
    features: [
      "Unlimited scope",
      "Multi-platform",
      "Integrations & API",
      "Compliance ready",
      "4-8 weeks",
      "90 days support",
    ],
    ideal: "Perfect for: legacy system replacement, enterprise pilots",
  },
];

const steps = [
  {
    icon: CalendarDays,
    title: "Week 0: Discovery (2 days)",
    desc: "Technical interview & requirements analysis. Define MVP scope and priorities. Choose tech stack. Fix price and timeline. Deliverable: Technical specification & Figma prototype.",
  },
  {
    icon: FileText,
    title: "Week 1: Foundation",
    desc: "Infrastructure setup & CI/CD. Basic architecture & database schema. Authentication & authorization. Core business logic. Deliverable: Working backend & basic UI."
  },
  {
    icon: Code2,
    title: "Week 2-3: Core Features",
    desc: "Implement key features. Payment & external service integrations. Unit & integration tests. API documentation. Deliverable: Beta version for testing."
  },
  {
    icon: Rocket,
    title: "Week 4-5: Polish & Launch",
    desc: "UI/UX improvements based on feedback. Performance optimization. Security audit. Production deployment. Handover with 30 days free support. Deliverable: Live product & source code."
  },
];

const faqs = [
  {
    q: "What if I need more features after launch?",
    a: "We offer post-MVP development in sprints. You can hire us or your own team - the code is fully yours.",
  },
  {
    q: "Can I participate in development?",
    a: "Absolutely! We work in an open GitHub repository. Weekly calls and constant communication via Slack.",
  },
  {
    q: "What's included in support?",
    a: "Critical bug fixes, deployment assistance, scaling consultations, minor improvements.",
  },
  {
    q: "What quality guarantees do you provide?",
    a: "Code review by senior developers, 80%+ test coverage, OWASP security standards compliance, performance benchmarks.",
  },
];

const cases = [
  {
    title: "Food Delivery Platform",
    desc: "Local food delivery marketplace. Timeline: 22 days. Results: 500 orders in first month, $50k MRR after 6 months.",
    chips: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    quote: "Launched faster than competitors and captured the niche",
    author: "CEO, FoodTech Startup",
  },
  {
    title: "B2B SaaS for Subscription Management",
    desc: "Subscription management platform. Timeline: 28 days. Results: 50 paying customers in 3 months.",
    chips: ["React", "Python FastAPI", "PostgreSQL", "Paddle"],
    quote: "Code is so clean that we easily hired a team for further development",
    author: "CTO, SubscriptionTech",
  },
  {
    title: "Fitness Mobile App",
    desc: "Mobile fitness application. Timeline: 19 days. Results: 10k downloads, 15% conversion to paid.",
    chips: ["React Native", "Firebase", "RevenueCat"],
    quote: "From Figma to App Store in 3 weeks - it was incredible",
    author: "Founder, FitTech App",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
      {children}
    </span>
  );
}

function ClutchWidget({ companyId, widgetType = "12", theme = "dark" }: { companyId: string; widgetType?: string; theme?: "dark" | "light" }) {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://widget.clutch.co/static/js/widget.js"]') as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://widget.clutch.co/static/js/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
    return () => {};
  }, []);

  return (
    <div
      className="clutch-widget"
      data-url="https://widget.clutch.co"
      data-widget-type={widgetType}
      data-height="auto"
      data-darkbg={theme === "dark" ? "1" : "0"}
      data-theme={theme}
      data-clutchcompany-id={companyId}
    />
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="testimonials-heading">
      <SectionTitle id="testimonials-heading" kicker="Testimonials" title="What Clients Say" subtitle="Reviews pulled from Clutch via official widget." />
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
        <ClutchWidget companyId={CLUTCH.companyId} widgetType={CLUTCH.widgetType} theme={CLUTCH.theme} />
      </div>
    </section>
  );
}

export function buildMailto({ name, email, packageName, message }: { name: string; email: string; packageName: string; message: string }) {
  const to = "hello@builditfast.ai";
  const subject = encodeURIComponent(`Project Estimate Request — ${name || "client"}`);
  const body = encodeURIComponent([
    `Package: ${packageName || "Not selected"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n"));
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

function useMailto({ name, email, packageName, message }: { name: string; email: string; packageName: string; message: string }) {
  return useMemo(() => buildMailto({ name, email, packageName, message }), [name, email, packageName, message]);
}

export default function Landing() {
  const [form, setForm] = useState({ name: "", email: "", pkg: "Startup MVP", message: "Describe your project idea and desired timeline..." });
  const mailto = useMailto({ name: form.name, email: form.email, packageName: form.pkg, message: form.message });

  return (
    <>
      <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased selection:bg-violet-600/30">
        {/* Animated Grid Background */}
        <AnimatedGridBackground />

        {/* Subtle gradient overlay */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-violet-700/10 via-fuchsia-600/5 to-cyan-500/5 blur-3xl rounded-full" />
        </div>

        {/* Навбар */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <div className={`${SECTION_CLASSES} h-16 flex items-center justify-between`}>
            <a href="#top" className="inline-flex items-center gap-2">
              <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${brand.primary}`} />
              <span className="font-semibold tracking-wide">BuildItFast.ai</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300" aria-label="Main navigation">
              <a className="hover:text-white transition" href="#features">Features</a>
              <a className="hover:text-white transition" href="#pricing">Pricing</a>
              <a className="hover:text-white transition" href="#cases">Cases</a>
              <a className="hover:text-white transition" href="#process">Process</a>
              <a className="hover:text-white transition" href="#faq">FAQ</a>
              {ENABLED.testimonials && <a className="hover:text-white transition" href="#testimonials">Testimonials</a>}
              <a className="hover:text-white transition" href="#contact">Contact</a>
            </nav>
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${brand.primary} shadow`}
            >
              Get Estimate <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        <main>
          {/* Hero */}
          <section id="top" className={`${SECTION_CLASSES} pt-16 sm:pt-20 lg:pt-28 pb-16`}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-300/90 mb-4">
                  <Sparkles className="w-4 h-4" /> Launch Your MVP in 21 Days
                </div>
                <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
                  Launch Your MVP in{" "}
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${brand.primary}`}>21 Days</span>
                  <br />Web • Mobile • SaaS
                </h1>
                <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
                  From technical specification to production-ready product with first users.
                  Fixed price. Full code ownership. Ready to scale.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-gradient-to-r ${brand.primary} shadow-lg`}>
                    Get Project Estimate <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#cases" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 ${brand.ring}`}>
                    View Case Studies
                  </a>
                </div>
                <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
                  <Check>32 MVPs launched</Check>
                  <Check>Average NPS: 72</Check>
                  <Check>Idea to first revenue: 45 days</Check>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <TypedCodeAnimation />
              </motion.div>
            </div>
          </section>

          {/* What We Build */}
          <section id="features" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="features-heading">
            <SectionTitle
              id="features-heading"
              kicker="What We Build"
              title="Focus on Products That Generate Revenue"
              subtitle="From concept to production-ready product in 21 days. We build web, mobile, and SaaS platforms that scale."
            />
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <FeatureItem key={i} icon={f.icon} title={f.title} desc={f.desc} />
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className={`${SECTION_CLASSES} py-16 sm:py-24`} aria-labelledby="pricing-heading">
            <SectionTitle
              id="pricing-heading"
              kicker="Pricing"
              title="Transparent Pricing"
              subtitle="Fixed prices for MVP development. No hidden fees or scope changes. All requirements fixed before start."
            />
            <div className="mt-12 grid lg:grid-cols-3 gap-6">
              {packages.map((p, i) => (
                <PriceCard key={p.name} name={p.name} price={p.price} features={p.features} highlight={Boolean((p as any).highlight)} badge={(p as any).badge} ideal={(p as any).ideal} />
              ))}
            </div>
          </section>

          {/* Cases */}
          <section id="cases" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="cases-heading">
            <SectionTitle id="cases-heading" kicker="Case Studies" title="MVPs That Became Profitable Products" subtitle="Real examples of startups that launched fast and captured their market." />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cases.map((c) => (
                <article key={c.title} className="group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.07] transition p-6 flex flex-col">
                  <h3 className="text-white font-medium text-lg">{c.title}</h3>
                  <p className="text-neutral-300 mt-2 flex-1 text-sm">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.chips.map((x) => (
                      <Chip key={x}>{x}</Chip>
                    ))}
                  </div>
                  {(c as any).quote && (
                    <div className="mt-4 border-l-2 border-violet-500/50 pl-3">
                      <p className="text-neutral-300 text-sm italic">"{(c as any).quote}"</p>
                      <p className="text-neutral-400 text-xs mt-1">— {(c as any).author}</p>
                    </div>
                  )}
                  <div className="mt-5">
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200">
                      Discuss Similar <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="process" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="process-heading">
            <SectionTitle id="process-heading" kicker="Process" title="5 Weeks From Brief to Launch" subtitle="Transparent development process with weekly demos and continuous feedback." />
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {steps.map((s, i) => (
                <article key={s.title} className="rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr ${brand.primary} text-white shadow`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-medium text-lg mt-4">{s.title}</h3>
                  <p className="text-neutral-300 mt-2 flex-1 text-sm leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          {ENABLED.testimonials && CLUTCH.enabled && <TestimonialsSection />}

          {/* FAQ */}
          <section id="faq" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="faq-heading">
            <SectionTitle id="faq-heading" kicker="FAQ" title="Frequently Asked Questions" />
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.05]">
                  <summary className="cursor-pointer list-none flex items-center justify-between text-white font-medium">
                    <span>{f.q}</span>
                    <span className="ml-3 text-violet-300 group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="text-neutral-300 mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className={`${SECTION_CLASSES} py-16 sm:py-24`} aria-labelledby="contact-heading">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <SectionTitle id="contact-heading" kicker="Contact" title="Ready to Discuss Your Project?" subtitle="Leave your details and brief description — we'll respond with a detailed estimate within 48 hours." />
                <div className="mt-8 space-y-4 text-neutral-300">
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-violet-300"/> hello@builditfast.ai</div>
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-violet-300"/> Telegram: @builditfast</div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = mailto;
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm text-neutral-300">Your Name</label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-2.5 text-base outline-none focus:ring-2 ${brand.ring}`}
                        placeholder="John / Sarah"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm text-neutral-300">Email</label>
                      <input
                        id="email"
                        required
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-2.5 text-base outline-none focus:ring-2 ${brand.ring}`}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="package" className="text-sm text-neutral-300">Package</label>
                    <select
                      id="package"
                      value={form.pkg}
                      onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                      className={`mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-2.5 text-base outline-none focus:ring-2 ${brand.ring}`}
                    >
                      {packages.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="message" className="text-sm text-neutral-300">Brief Description</label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className={`mt-1 w-full rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-base outline-none focus:ring-2 ${brand.ring}`}
                    />
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button type="submit" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-gradient-to-r ${brand.primary} shadow-lg min-h-[48px]`}>
                      Get Project Estimate <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://calendly.com/builditfast"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 min-h-[48px]"
                    >
                      Schedule Call
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className={`${SECTION_CLASSES} py-10 flex flex-col sm:flex-row items-center justify-between gap-6`}>
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${brand.primary}`} />
              <span className="text-sm text-neutral-300">© {new Date().getFullYear()} BuildItFast.ai. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-5 text-sm">
              <a href="#" className="text-neutral-300 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-neutral-300 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>

      {/* FAQ Schema */}
      <FAQSchema faqs={faqs} />
    </>
  );
}
