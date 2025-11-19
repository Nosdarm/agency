'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is the code written by AI or humans?',
    answer: 'Both. AI writes the boring parts (database connections, basic types), and Senior Engineers write the complex business logic and architecture. You get the speed of AI with the reliability of human expertise.'
  },
  {
    question: 'What happens after launch?',
    answer: 'You have a 7-day bug-fix guarantee. After that, you can hire us for a monthly maintenance retainer, or we can help you hire your own in-house developer.'
  },
  {
    question: 'Do you sign an NDA?',
    answer: 'Yes. Your idea is yours. We are happy to sign an NDA before the first discovery call.'
  },
  {
    question: 'Why are you cheaper than US agencies?',
    answer: 'We run a lean, remote-first team and use AI to eliminate 40% of manual labor. We don\'t have fancy offices or sales teams. You pay for code, not overhead.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-violet-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
