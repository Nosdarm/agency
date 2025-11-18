"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500",
  ring: "ring-violet-500/40",
};

const ENABLED = {
  testimonials: false,
};

export function ClientNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300" aria-label="Main navigation">
        <a className="hover:text-white transition" href="#features">Features</a>
        <a className="hover:text-white transition" href="#pricing">Pricing</a>
        <a className="hover:text-white transition" href="#cases">Cases</a>
        <a className="hover:text-white transition" href="#process">Process</a>
        <a className="hover:text-white transition" href="#faq">FAQ</a>
        {ENABLED.testimonials && <a className="hover:text-white transition" href="#testimonials">Testimonials</a>}
        <a className="hover:text-white transition" href="#contact">Contact</a>
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${brand.primary} shadow`}
        >
          Request Specification <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 right-0 md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur"
        >
          <nav className="flex flex-col py-4 px-4 gap-1" aria-label="Mobile navigation">
            <a
              className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cases
            </a>
            <a
              className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            {ENABLED.testimonials && (
              <a
                className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
            )}
            <a
              className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className={`mt-2 mx-4 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white bg-gradient-to-r ${brand.primary} shadow`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Specification <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
