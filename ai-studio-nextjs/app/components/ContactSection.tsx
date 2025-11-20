'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GlowButton } from './GlowButton';
import { useState, FormEvent } from 'react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      packageName: 'Quick Contact Form',
      message: formData.get('project') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Start Your Project Today
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us about your idea and we'll get back to you within 24 hours with a detailed proposal.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:hello@builditfast.ai"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-lg flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
                  <p className="text-slate-400 mb-3">Get a detailed response within 24 hours</p>
                  <p className="text-violet-400 group-hover:text-violet-300 transition-colors">
                    hello@builditfast.ai
                  </p>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://cal.com/builditfast"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-cyan-600 text-white shadow-lg flex-shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Book a Call</h3>
                  <p className="text-slate-400 mb-3">15-min free consultation call</p>
                  <p className="text-violet-400 group-hover:text-violet-300 transition-colors">
                    Schedule now →
                  </p>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Quick Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-500/20 rounded-2xl blur opacity-50" />

          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Quick Contact Form</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-slate-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="Describe your project idea, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden group w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <p>Message sent successfully! We'll get back to you within 24 hours.</p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  <p>{errorMessage}</p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Trust badge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-400 text-sm mt-8"
        >
          🔒 Your information is secure. We never share your data.
        </motion.p>
      </div>
    </section>
  );
}
