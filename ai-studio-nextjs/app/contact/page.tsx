import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free MVP Consultation | BuildItFast",
  description: "Get in touch with BuildItFast for MVP development inquiries. Free consultation, quick response within 24 hours. Let's discuss your startup idea.",
  keywords: ["contact mvp developer", "hire mvp developer", "startup consultation", "mvp development inquiry"],
  openGraph: {
    title: "Contact BuildItFast | MVP Development",
    description: "Get a free consultation for your MVP project. We respond within 24 hours.",
    url: "https://builditfast.ai/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://builditfast.ai/contact",
  },
};

const SECTION_CLASSES = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      {/* Hero */}
      <section className={`${SECTION_CLASSES} pt-20 sm:pt-24 lg:pt-32 pb-16`}>
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Let's Build Something Great Together
          </h1>
          <p className="mt-5 sm:mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            Ready to turn your idea into reality? Get in touch for a free consultation.
            We'll discuss your project, timeline, and find the best approach for your startup.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className={`${SECTION_CLASSES} pb-16 sm:pb-20`}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Email Us</h2>
            <p className="text-neutral-400 text-sm mb-4">
              For detailed inquiries and project discussions
            </p>
            <a
              href="mailto:sales@builditfast.ai"
              className="text-violet-400 hover:text-violet-300 transition font-medium"
            >
              sales@builditfast.ai
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-fuchsia-400" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Quick Form</h2>
            <p className="text-neutral-400 text-sm mb-4">
              Fill out our contact form for fastest response
            </p>
            <Link
              href="/#contact"
              className="text-fuchsia-400 hover:text-fuchsia-300 transition font-medium"
            >
              Go to Form →
            </Link>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Response Time</h2>
            <p className="text-neutral-400 text-sm mb-4">
              We respond to all inquiries within
            </p>
            <span className="text-cyan-400 font-medium">24 hours</span>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20 bg-white/[0.02]`}>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
            What to Expect
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Initial Conversation",
                desc: "We'll schedule a 30-minute call to understand your idea, target market, and goals.",
              },
              {
                step: "2",
                title: "Project Scope",
                desc: "Within 48 hours, you'll receive a detailed proposal with features, timeline, and pricing.",
              },
              {
                step: "3",
                title: "Kickoff",
                desc: "Once approved, we start immediately. You'll have access to daily updates and a dedicated Slack channel.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shrink-0">
                  <span className="text-white font-semibold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION_CLASSES} py-16 sm:py-20`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-300 mb-8">
            Fill out our quick form and we'll get back to you within 24 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-lg"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
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
