import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  Mail,
  Phone,
  Rocket,
  Search,
  Shield,
  Sparkles,
} from "lucide-react";
import { FAQSchema } from "./structured-data";
import { AnimatedGridBackground } from "./components/AnimatedGridBackground";
import { AnimatedHero } from "./components/AnimatedHero";
import { ClientNav } from "./components/ClientNav";
import { ContactForm } from "./components/ContactForm";
import { AnimatedPricing } from "./components/AnimatedPricing";
import { ClientTransparentPricing } from "./components/ClientTransparentPricing";
import { ClientFeatures } from "./components/ClientFeatures";

const SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500",
  ring: "ring-violet-500/40",
};

function SectionTitle({ kicker, title, subtitle, id }: { kicker?: string; title: string; subtitle?: string; id?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto px-4">
      {kicker && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-300/80 mb-3">
          <Sparkles className="w-4 h-4" />
          <span>{kicker}</span>
        </div>
      )}
      <h2 id={id} className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-300">{subtitle}</p>}
    </div>
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

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
      {children}
    </span>
  );
}

const whatsIncluded = [
  { icon: FileText, item: "Design in Figma" },
  { icon: Code2, item: "Frontend on React/Next.js" },
  { icon: Code2, item: "Backend on Node.js/Python" },
  { icon: Shield, item: "PostgreSQL Database" },
  { icon: CheckCircle2, item: "Testing" },
  { icon: Rocket, item: "Production deployment" },
  { icon: Code2, item: "Source code transfer" },
  { icon: Clock, item: "2 weeks support" },
];

const projectTimeline = [
  {
    week: "Week 1",
    title: "Design + Backend Foundation",
    tasks: ["UI/UX design in Figma", "Database schema", "API structure", "Authentication setup"],
  },
  {
    week: "Week 2",
    title: "Frontend + Integrations",
    tasks: ["React components", "API integration", "Payment system", "User dashboard"],
  },
  {
    week: "Week 3",
    title: "Testing + Polish",
    tasks: ["Unit & integration tests", "Bug fixes", "UI/UX refinement", "Performance optimization"],
  },
  {
    week: "Week 4",
    title: "Deployment + Launch",
    tasks: ["Production setup", "CI/CD pipeline", "Documentation", "Handoff & training"],
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

export default function Landing() {
  return (
    <>
      <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased selection:bg-violet-600/30">
        {/* Animated Grid Background */}
        <AnimatedGridBackground />

        {/* Subtle gradient overlay */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-violet-700/10 via-fuchsia-600/5 to-cyan-500/5 blur-3xl rounded-full" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <div className={`${SECTION_CLASSES} h-16 flex items-center justify-between`}>
            <a href="#top" className="inline-flex items-center gap-2">
              <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${brand.primary}`} />
              <span className="font-semibold tracking-wide">BuildItFast</span>
            </a>
            <ClientNav />
          </div>
        </header>

        <main>
          {/* Hero */}
          <section id="top" className={`${SECTION_CLASSES} pt-16 sm:pt-20 lg:pt-28 pb-16`}>
            <AnimatedHero />
          </section>

          {/* Features */}
          <section id="features" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="features-heading">
            <SectionTitle
              id="features-heading"
              kicker="Features"
              title="AI-Accelerated MVP Development: Speed Without Chaos"
              subtitle="We use modern AI tools (Cursor, Claude, GitHub Copilot) to accelerate routine component development by 25-40%. Architecture and code review remain with experienced developers."
            />
            <ClientFeatures />
          </section>

          {/* Pricing */}
          <section id="pricing" className={`${SECTION_CLASSES} py-16 sm:py-24`} aria-labelledby="pricing-heading">
            <SectionTitle
              id="pricing-heading"
              kicker="Pricing"
              title="MVP Development Cost: Transparent Packages"
              subtitle="Fixed prices for MVP development for startups. No hidden fees and scope changes. All requirements fixed in SOW before start."
            />
            <AnimatedPricing />
          </section>

          {/* Transparent Pricing */}
          <section id="transparent-pricing" className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`} aria-labelledby="transparent-pricing-heading">
            <SectionTitle
              id="transparent-pricing-heading"
              kicker="Transparent Pricing"
              title="How We Calculate MVP Development Pricing"
              subtitle="Transparent breakdown of development costs and timeline"
            />
            <ClientTransparentPricing />
          </section>

          {/* What's Included */}
          <section id="whats-included" className={`${SECTION_CLASSES} py-16 sm:py-20`} aria-labelledby="whats-included-heading">
            <SectionTitle
              id="whats-included-heading"
              kicker="What's Included"
              title="What's Included in Every MVP Development Package"
              subtitle="Complete development cycle from design to deployment with full code ownership"
            />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatsIncluded.map((item, i) => (
                <div key={i} className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-tr ${brand.primary} text-white/95 shadow flex-shrink-0`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-200">{item.item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Project Timeline */}
          <section id="project-timeline" className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`} aria-labelledby="project-timeline-heading">
            <SectionTitle
              id="project-timeline-heading"
              kicker="Project Timeline"
              title="4-Week MVP Development Process: From Design to Launch"
              subtitle="Clear milestones and deliverables every week for rapid market validation"
            />
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {projectTimeline.map((phase, i) => (
                <article key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow mb-4">
                    <span className="text-xl font-bold">{i + 1}</span>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-violet-300 mb-2">{phase.week}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{phase.title}</h3>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </article>
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
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <SectionTitle id="contact-heading" kicker="Contact" title="Request Free Specification" subtitle="Leave your contacts and brief description — we'll return with SOW/DoD within 48 hours." />
                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-neutral-300 text-sm sm:text-base">
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-violet-300 flex-shrink-0"/> Quick call: 20–30 minutes</div>
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-violet-300 flex-shrink-0"/> sales@builditfast.ai</div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className={`${SECTION_CLASSES} py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6`}>
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br ${brand.primary}`} />
              <span className="text-xs sm:text-sm text-neutral-300 text-center sm:text-left">© {new Date().getFullYear()} BuildItFast. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-5 text-xs sm:text-sm">
              <a href="#" className="text-neutral-300 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-neutral-300 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>

      {/* FAQ Schema */}
      <FAQSchema faqs={faqs} />
    </>
  );
}
