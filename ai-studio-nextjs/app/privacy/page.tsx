import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BuildItFast",
  description: "BuildItFast privacy policy. Learn how we collect, use, and protect your personal information when using our MVP development services.",
  openGraph: {
    title: "Privacy Policy | BuildItFast",
    description: "How BuildItFast collects, uses, and protects your personal information.",
    url: "https://builditfast.ai/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://builditfast.ai/privacy",
  },
};

const SECTION_CLASSES = "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8";

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
      {/* Header */}
      <section className={`${SECTION_CLASSES} pt-20 sm:pt-24 lg:pt-32 pb-12`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Privacy Policy
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
              <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-neutral-300 leading-relaxed">
                BuildItFast ("we," "our," or "us") respects your privacy and is committed to protecting
                your personal data. This privacy policy explains how we collect, use, and safeguard your
                information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number when you fill out our contact form</li>
                <li><strong className="text-white">Project Information:</strong> Details about your project requirements and business needs</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website (pages visited, time spent)</li>
                <li><strong className="text-white">Technical Data:</strong> IP address, browser type, device information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send project updates and relevant communications</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Data Sharing</h2>
              <p className="text-neutral-300 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share
                data with trusted service providers who assist in operating our website and services,
                subject to confidentiality agreements. We may disclose information when required by law
                or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Cookies and Analytics</h2>
              <p className="text-neutral-300 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience. We use
                Google Analytics to understand how visitors interact with our website. You can control
                cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-neutral-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal
                data against unauthorized access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Data Retention</h2>
              <p className="text-neutral-300 leading-relaxed">
                We retain your personal data only as long as necessary to fulfill the purposes for which
                it was collected, including legal, accounting, or reporting requirements. Contact
                information from inquiries is retained for up to 3 years unless you request deletion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Third-Party Links</h2>
              <p className="text-neutral-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices of these external sites. We encourage you to review their privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p className="text-neutral-300 leading-relaxed">
                We may update this privacy policy from time to time. Changes will be posted on this page
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-neutral-300 leading-relaxed">
                If you have questions about this privacy policy or wish to exercise your rights, please
                contact us at{" "}
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
