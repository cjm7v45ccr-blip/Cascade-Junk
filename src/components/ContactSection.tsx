import React from 'react';
import { Phone, Mail, MapPin, Clock, Mountain, MessageSquare, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 bg-forest text-white relative overflow-hidden scroll-mt-20">
      {/* Decorative Blob */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-highlight/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-navy text-white text-xs font-black uppercase tracking-wider mb-3 border border-white/10">
            <Mountain className="w-3.5 h-3.5 text-orange-highlight" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-emerald-100 text-lg font-normal">
            Have a question or ready to clear some space? Reach out to us via call, text, or email for a fast response.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-forest-dark p-8 rounded-3xl border border-emerald-800 shadow-xl space-y-6"
            >
              
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-navy/80 border border-white/10 hover:bg-navy transition group cursor-pointer"
              >
                <div className="bg-orange-highlight text-white p-3 rounded-xl font-bold">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold text-orange-highlight uppercase block">Call Dispatch</span>
                  <span className="text-xl font-black text-white group-hover:text-emerald-200">{BUSINESS_INFO.phoneDisplay}</span>
                </div>
              </a>

              <a 
                href={`sms:${BUSINESS_INFO.phone}`} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-forest border border-emerald-800 hover:border-emerald-700 transition cursor-pointer"
              >
                <div className="bg-forest-dark text-emerald-400 p-3 rounded-xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase block">Text Us</span>
                  <span className="text-xl font-black text-white group-hover:text-emerald-200">{BUSINESS_INFO.phoneDisplay}</span>
                </div>
              </a>

              <a 
                href={`mailto:${BUSINESS_INFO.email}`} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-forest border border-emerald-800 hover:border-emerald-700 transition cursor-pointer"
              >
                <div className="bg-forest-dark text-emerald-400 p-3 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase block">Email Address</span>
                  <span className="text-base font-bold text-white">{BUSINESS_INFO.email}</span>
                </div>
              </a>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-forest-dark p-8 rounded-3xl border border-emerald-800 shadow-xl space-y-6"
            >
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-forest border border-emerald-800">
                <div className="bg-forest-dark text-emerald-400 p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase block">Cascade Junk Removal Base</span>
                  <span className="text-sm font-bold text-white">{BUSINESS_INFO.mainAddress}</span>
                  <span className="text-xs text-emerald-300 block mt-0.5">{BUSINESS_INFO.serviceRadius}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-forest border border-emerald-800">
                <div className="bg-forest-dark text-emerald-400 p-3 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase block">Hauling Hours</span>
                  <span className="text-sm font-semibold text-emerald-100 block">{BUSINESS_INFO.hours}</span>
                </div>
              </div>

              {BUSINESS_INFO.instagram && (
                <a 
                  href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-forest border border-emerald-800 hover:border-orange-highlight transition cursor-pointer group"
                >
                  <div className="bg-forest-dark text-emerald-400 group-hover:bg-orange-highlight group-hover:text-white transition p-3 rounded-xl">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase block">Instagram</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-200">@{BUSINESS_INFO.instagram}</span>
                  </div>
                </a>
              )}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
