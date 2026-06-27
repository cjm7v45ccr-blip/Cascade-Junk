import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Mountain } from 'lucide-react';
import { FAQ_QUESTIONS, BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-light text-navy text-xs font-black uppercase tracking-wider mb-3">
            <Mountain className="w-3.5 h-3.5 text-orange-highlight" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-normal">
            Answers to common questions about Cascade Junk Removal services and schedules.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_QUESTIONS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden text-left ${
                  isOpen 
                    ? 'border-navy bg-neutral-light shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left font-black text-neutral-dark text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-navy' : 'text-gray-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-xl border transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-navy text-white border-navy' : 'bg-white text-gray-500 border-gray-200'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-200/60 pl-14 font-medium"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 bg-navy text-white rounded-3xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-navy-dark"
        >
          <div className="text-left">
            <h3 className="text-xl font-display font-black mb-1 text-white">Still have a question?</h3>
            <p className="text-emerald-100 text-sm">Reach out to us during business hours.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex-1 sm:flex-none bg-orange-highlight hover:bg-orange-hover text-white font-black px-6 py-3.5 rounded-xl transition text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="flex-1 sm:flex-none bg-forest hover:bg-forest-dark text-white font-black px-6 py-3.5 rounded-xl transition text-sm cursor-pointer uppercase tracking-wider"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

