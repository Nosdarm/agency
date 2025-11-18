import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Rocket, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "MVP Development Services for Startups | $5K-$25K | BuildItFast",
  description: "Professional MVP development services. Launch your minimum viable product in 21 days. Web, mobile, SaaS. Fixed pricing. 100% code ownership.",
  keywords: ["mvp development services", "startup mvp", "web development", "mobile app development", "saas development"],
  openGraph: {
    title: "MVP Development Services for Startups | BuildItFast",
    description: "Professional MVP development services. Launch in 21 days. Fixed pricing from $5K.",
    url: "https://builditfast.ai/mvp-development-services",
    type: "website",
  },
};

const SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function MVPDevelopmentServices() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      {/* Hero */}
      <section className={`${SECTION_CLASSES} pt-20 sm:pt-24 lg:pt-32 pb-16`}>
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Professional MVP Development Services for Funded Startups
          </h1>
          <p className="mt-5 sm:mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            Our MVP development services are designed specifically for pre-seed and seed-stage startups that need
            to move fast without sacrificing quality. We understand the unique challenges startups face: limited
            runway, investor pressure, and the race to product-market fit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg"
            >
              Get Started <ArrowRight className="w-4 h-4" />
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

      {/* Comprehensive MVP Development Services */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`}>
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Comprehensive MVP Development Services
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-violet-400" />
                Full-Stack Web Development Services
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Our web development services cover the entire stack from database to user interface. We build
                responsive web applications that work flawlessly across all devices using modern frameworks like
                React, Next.js, and Vue.js. Every web application includes user authentication with JWT tokens
                or OAuth, RESTful or GraphQL APIs, PostgreSQL or MongoDB databases, Redis caching for performance,
                automated testing with 80%+ coverage, and deployment to AWS, Vercel, or your preferred platform.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-cyan-400" />
                Mobile App Development Services
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Save time and money with cross-platform mobile development. Our React Native and Flutter expertise
                means you get iOS and Android apps from a single codebase. Mobile services include App Store and
                Google Play submission preparation, push notification systems, offline data synchronization,
                device hardware integration, backend API development, and crash reporting with Sentry or Bugsnag.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-emerald-400" />
                SaaS Development Services
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Launch your SaaS product with all the features modern buyers expect. Our SaaS development services
                include multi-tenant architecture for data isolation, subscription billing with Stripe or Paddle,
                user invitation and team management, role-based access control, usage tracking and billing,
                webhook systems for integrations, and comprehensive admin dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our MVP Development Process */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20`}>
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
            Our MVP Development Process
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Discovery & Planning Phase",
                desc: "Every successful MVP starts with thorough planning. In our discovery phase, we conduct user story mapping to prioritize features, competitive analysis to identify differentiation opportunities, technical architecture design for scalability, risk assessment and mitigation planning, and detailed project timeline creation. This phase typically takes 2-3 days and results in a comprehensive project specification."
              },
              {
                title: "Design & Prototyping Phase",
                desc: "Good design is essential for user adoption. Our design phase includes wireframing all screens and user flows, creating high-fidelity mockups in Figma, designing responsive layouts for all devices, building interactive prototypes for testing, and establishing a design system for consistency. We use AI tools to generate multiple design variations quickly."
              },
              {
                title: "Development & Testing Phase",
                desc: "This is where your MVP comes to life. Our development process is highly iterative with daily updates so you can see progress in real-time. We follow agile methodology with weekly sprints, implement continuous integration for quality assurance, conduct code reviews for every pull request, write automated tests for critical paths, and perform security audits before deployment."
              },
              {
                title: "Deployment & Launch Phase",
                desc: "Getting your MVP live and ready for users is critical. Our deployment services include setting up production infrastructure on AWS or alternatives, configuring auto-scaling for traffic spikes, implementing SSL certificates and security headers, setting up monitoring and alerting systems, creating backup and disaster recovery plans, and providing documentation for your team."
              }
            ].map((phase, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {i + 1}. {phase.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`}>
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
            Industries We Serve
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "FinTech MVPs",
                desc: "Payment processing platforms, investment tools, banking applications, cryptocurrency exchanges, lending platforms. We understand PCI compliance and financial regulations."
              },
              {
                title: "HealthTech MVPs",
                desc: "Telemedicine platforms, patient portals, health tracking apps, medical record systems, appointment scheduling. HIPAA compliance and data privacy are built-in."
              },
              {
                title: "EdTech MVPs",
                desc: "Learning management systems, online course platforms, student assessment tools, virtual classrooms, educational games. Scalable for thousands of concurrent users."
              },
              {
                title: "E-commerce MVPs",
                desc: "Marketplaces, subscription boxes, B2B commerce, social commerce, direct-to-consumer brands. Complete with inventory, payments, and fulfillment integrations."
              }
            ].map((industry, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Ready to Build Your MVP?
          </h2>
          <p className="text-neutral-300 mb-8 text-base sm:text-lg">
            Let's discuss your project and create a custom development plan that fits your timeline and budget.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "MVP Development Services",
            "provider": {
              "@type": "Organization",
              "name": "BuildItFast"
            },
            "areaServed": "Worldwide",
            "description": "Rapid MVP development for startups using AI-accelerated development",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "5000",
              "highPrice": "25000"
            }
          })
        }}
      />
    </div>
  );
}
