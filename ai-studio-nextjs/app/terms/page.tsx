import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | BuildItFast",
  description: "Terms and conditions for using BuildItFast MVP development services. Read our service agreement, payment terms, and intellectual property policies.",
  openGraph: {
    title: "Terms of Service | BuildItFast",
    description: "Terms and conditions for BuildItFast MVP development services.",
    url: "https://builditfast.ai/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://builditfast.ai/terms",
  },
};

const SECTION_CLASSES = "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8";

export default function TermsPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      {/* Header */}
      <section className={`${SECTION_CLASSES} pt-20 sm:pt-24 lg:pt-32 pb-12`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-neutral-400">
          Last updated: December 2024
        </p>
      </section>

      {/* Content */}
      <section className={`${SECTION_CLASSES} pb-16 sm:pb-20`}>
        <div className="prose prose-invert prose-neutral max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-neutral-300 leading-relaxed">
                By accessing or using BuildItFast services, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">2. Services</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                BuildItFast provides MVP (Minimum Viable Product) development services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>UI/UX design</li>
                <li>Backend API development</li>
                <li>Database design and implementation</li>
                <li>Deployment and hosting setup</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">3. Project Terms</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Each project is governed by a separate Statement of Work (SOW) that outlines:
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                <li>Project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment schedule</li>
                <li>Revision and change request policies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">4. Payment Terms</h2>
              <p className="text-neutral-300 leading-relaxed">
                Payment is required as outlined in your project agreement, typically 50% upfront and 50% upon
                completion. All payments are non-refundable once work has commenced, except as specified in
                your individual agreement. Late payments may result in project delays or suspension.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-neutral-300 leading-relaxed">
                Upon full payment, you receive complete ownership of all custom code, designs, and assets
                created specifically for your project. BuildItFast retains the right to use general
                methodologies, techniques, and non-proprietary components. Third-party libraries and
                frameworks remain subject to their respective licenses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">6. Confidentiality</h2>
              <p className="text-neutral-300 leading-relaxed">
                We treat all client information as confidential. We will not share your business ideas,
                technical specifications, or any proprietary information with third parties without your
                explicit consent, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">7. Warranties and Liability</h2>
              <p className="text-neutral-300 leading-relaxed">
                BuildItFast warrants that services will be performed in a professional manner. However, we
                do not guarantee specific business outcomes or results. Our liability is limited to the
                amount paid for services. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">8. Termination</h2>
              <p className="text-neutral-300 leading-relaxed">
                Either party may terminate a project with written notice. Upon termination, client is
                responsible for payment of all work completed. Deliverables will be transferred upon
                settlement of outstanding payments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">9. Changes to Terms</h2>
              <p className="text-neutral-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page
                with an updated revision date. Continued use of our services constitutes acceptance of
                modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">10. Contact</h2>
              <p className="text-neutral-300 leading-relaxed">
                Questions about these Terms should be sent to{" "}
                <a href="mailto:sales@builditfast.ai" className="text-violet-400 hover:text-violet-300">
                  sales@builditfast.ai
                </a>
              </p>
            </div>
          </div>
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
