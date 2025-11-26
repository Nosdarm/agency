'use client';

import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <motion.div
            className="w-2 h-2 rounded-full bg-emerald-500"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(16, 185, 129, 0.7)',
                '0 0 0 8px rgba(16, 185, 129, 0)',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          <span className="text-sm text-slate-400">
            All Systems Operational
          </span>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-500" />
              <span className="font-semibold text-white text-lg">BuildItFast</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI-powered MVP development in 2-4 weeks. From idea to production with senior developers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#process" className="text-slate-400 hover:text-white transition text-sm">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-slate-400" />
              <a
                href="mailto:sales@builditfast.ai"
                className="text-slate-400 hover:text-white transition text-sm"
              >
                sales@builditfast.ai
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://twitter.com/builditfast"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/builditfast"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/builditfast"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BuildItFast. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-slate-500 hover:text-slate-400 transition text-sm">
              Privacy
            </a>
            <a href="/terms" className="text-slate-500 hover:text-slate-400 transition text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
