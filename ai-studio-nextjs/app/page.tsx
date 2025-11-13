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
}: {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
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
          <span className="text-4xl font-semibold text-white">{price}</span>
          <span className="text-neutral-400 ml-2">fixed-price</span>
        </div>
        <ul className="mt-6 space-y-3">
          {features.map((f, i) => (
            <Check key={i}>{f}</Check>
          ))}
        </ul>
        <a
          href="#contact"
          className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-medium text-white shadow ${
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
    title: "AI-Accelerated Development",
    desc: "We generate routine layers (CRUD, types, tests), leaving architecture and review to experienced engineers.",
  },
  {
    icon: Rocket,
    title: "MVP in 3–5 Weeks",
    desc: "Backend and frontend templates, ready design system, CI. Weekly demos with real progress.",
  },
  {
    icon: Shield,
    title: "Clear Boundaries",
    desc: "Fixed-price, SOW/DoD, feature freeze. Changes handled through transparent change requests.",
  },
  {
    icon: Gauge,
    title: "Production-Ready Products",
    desc: "Tech stack for your needs: React/Vite, Next.js, FastAPI/NestJS, PostgreSQL, Stripe, Redis.",
  },
  {
    icon: Lock,
    title: "Security Basics",
    desc: "Auth, roles, validation, logging. Minimum — JWT/OAuth + industry best practices.",
  },
  {
    icon: Clock,
    title: "Fast Start",
    desc: "Specification within 48h after call. Deploy to Vercel/Render/Fly/Hetzner.",
  },
];

const packages = [
  {
    name: "MVP Core",
    price: "$5,900",
    features: [
      "Authentication & user roles",
      "3–5 CRUD entities",
      "1 dashboard/report",
      "1 integration (Stripe/SMTP)",
      "Deploy + 7 days bug fixes",
    ],
  },
  {
    name: "MVP Plus",
    price: "$7,900",
    badge: "Most Popular",
    features: [
      "Everything from Core",
      "Additional integrations (2x)",
      "Email/Push + basic analytics",
      "UAT week + extra revisions",
    ],
    highlight: true,
  },
  {
    name: "AI Booster",
    price: "$3,000",
    features: [
      "LLM feature for existing product",
      "Chat/summary/clustering",
      "Secure prompts & tracing",
      "Integration documentation",
    ],
  },
];

const steps = [
  {
    icon: CalendarDays,
    title: "20–30 min call",
    desc: "Goals, risks, integrations. Access and limitations.",
  },
  { icon: FileText, title: "Spec in 48h", desc: "SOW/DoD, timeline, cost, exclusions." },
  { icon: Search, title: "Weekly demos", desc: "Feedback in short cycles. Feature freeze per specs." },
  { icon: Rocket, title: "Deploy & handoff", desc: "Documentation, access, 7 days bug fixes." },
];

const faqs = [
  {
    q: "How exactly does AI accelerate development?",
    a: "We generate routine parts (CRUD, test stubs, types, API wrappers). Architecture, security, critical logic and code review remain with experienced engineers.",
  },
  {
    q: "What about security and data privacy?",
    a: "We avoid uploading sensitive data to external LLMs. For production — validation, authentication, logging, permission controls; optionally — self-hosted LLM or proxy gateway.",
  },
  {
    q: "How do you fix project boundaries?",
    a: "In SOW/DoD: clear screens and flows, unambiguous acceptance criteria. Everything outside — through change request with estimation and timeline.",
  },
  {
    q: "Can we start with Paid Discovery?",
    a: "Yes: 3–5 days, $400–$800. Output — feature map, risks and estimation. Discovery cost is deducted from package when starting.",
  },
];

const cases = [
  {
    title: "CRM for SMB network",
    desc: "Order tracking, roles, reports. Integrations: email + payments.",
    chips: ["React", "FastAPI", "PostgreSQL", "Stripe"],
  },
  {
    title: "SaaS Admin Dashboard",
    desc: "Key metrics, plan management, report exports.",
    chips: ["Next.js", "tRPC/NestJS", "Prisma", "Vercel"],
  },
  {
    title: "AI Support Module",
    desc: "Ticket summaries and similar search — faster resolution and responses.",
    chips: ["LLM", "RAG", "Observability"],
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
  const to = "sales@yourstudio.dev";
  const subject = encodeURIComponent(`Specification Request — ${name || "client"}`);
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
  const [form, setForm] = useState({ name: "", email: "", pkg: "MVP Core", message: "Describe your task and desired timeline…" });
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
              <span className="font-semibold tracking-wide">AICODE Studio</span>
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
              Request Specification <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        <main>
          {/* Hero */}
          <section id="top" className={`${SECTION_CLASSES} pt-16 sm:pt-20 lg:pt-28 pb-16`}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-300/90 mb-4">
                  <Sparkles className="w-4 h-4" /> AI-Powered Development
                </div>
                <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
                  MVP Development for Startups with AI Acceleration{" "}
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${brand.primary}`}>in 3–5 Weeks</span>
                </h1>
                <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
                  From <strong>$5,900 fixed-price</strong>. Professional MVP development with React, Next.js and FastAPI.
                  Transparent timelines, weekly demos. We work with B2B SaaS startups from USA, Europe and Ukraine.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-gradient-to-r ${brand.primary} shadow-lg`}>
                    Discuss Project <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#pricing" className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 ${brand.ring}`}>
                    Pricing & Timeline
                  </a>
                </div>
                <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
                  <Check>Spec in 48 hours</Check>
                  <Check>Demo every week</Check>
                  <Check>7 days bug fixes</Check>
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

          {/* Features */}
          <section id="features" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="features-heading">
            <SectionTitle
              id="features-heading"
              kicker="Features"
              title="AI-Accelerated MVP Development: Speed Without Chaos"
              subtitle="We use modern AI tools (Cursor, Claude, GitHub Copilot) to accelerate routine component development by 25-40%. Architecture and code review remain with experienced developers."
            />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              title="MVP Development Cost: Transparent Packages"
              subtitle="Fixed prices for MVP development for startups. No hidden fees and scope changes. All requirements fixed in SOW before start."
            />
            <div className="mt-12 grid lg:grid-cols-3 gap-6">
              {packages.map((p, i) => (
                <PriceCard key={p.name} name={p.name} price={p.price} features={p.features} highlight={Boolean((p as any).highlight)} badge={(p as any).badge} />
              ))}
            </div>
          </section>

          {/* Cases */}
          <section id="cases" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="cases-heading">
            <SectionTitle id="cases-heading" kicker="Cases" title="MVP Development Examples" subtitle="Ready to show live examples and pet projects on a call." />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cases.map((c) => (
                <article key={c.title} className="group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.07] transition p-6 flex flex-col">
                  <h3 className="text-white font-medium text-lg">{c.title}</h3>
                  <p className="text-neutral-300 mt-2 flex-1">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.chips.map((x) => (
                      <Chip key={x}>{x}</Chip>
                    ))}
                  </div>
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
            <SectionTitle id="process-heading" kicker="Process" title="How MVP Development Works" subtitle="Short call → spec in 48h → weekly demos → deploy." />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <article key={s.title} className="rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr ${brand.primary} text-white shadow`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-medium text-lg mt-4">{i + 1}. {s.title}</h3>
                  <p className="text-neutral-300 mt-2 flex-1">{s.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          {ENABLED.testimonials && CLUTCH.enabled && <TestimonialsSection />}

          {/* FAQ */}
          <section id="faq" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="faq-heading">
            <SectionTitle id="faq-heading" kicker="FAQ" title="Frequently Asked Questions About MVP Development" />
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
                <SectionTitle id="contact-heading" kicker="Contact" title="Request Free Specification" subtitle="Leave your contacts and brief description — we'll return with SOW/DoD within 48 hours." />
                <div className="mt-8 space-y-4 text-neutral-300">
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-violet-300"/> Quick call: 20–30 minutes</div>
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-violet-300"/> sales@yourstudio.dev</div>
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
                      Send Request <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://calendly.com/"
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
              <span className="text-sm text-neutral-300">© {new Date().getFullYear()} AICODE Studio. All rights reserved.</span>
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
