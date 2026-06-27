import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Mountain, MessageSquare, Instagram, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'Junk Removal',
    date: '',
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      setFormStep(2);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Optional: actually trigger mailto or SMS here in real world
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-forest text-white relative overflow-hidden scroll-mt-20">
      {/* Decorative Blob */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-highlight/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-navy text-white text-xs font-black uppercase tracking-wider mb-3 border border-white/10 shadow-sm">
            <Mountain className="w-3.5 h-3.5 text-orange-highlight" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            Ready to reclaim your space?
          </h2>
          <p className="mt-4 text-emerald-100 text-lg font-normal">
            Reach out via call, text, or use our quick online form to request a free quote.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-forest-dark p-8 rounded-3xl border border-emerald-800 shadow-xl space-y-4">
                <h3 className="text-2xl font-black text-white mb-6">Direct Contact</h3>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="flex items-start gap-4 p-5 rounded-2xl bg-navy border border-white/10 hover:border-orange-highlight/50 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="bg-orange-highlight text-white p-3.5 rounded-xl font-bold shadow-sm">
                    <Phone className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-highlight uppercase block mb-0.5">Call Dispatch</span>
                    <span className="text-2xl font-black text-white group-hover:text-emerald-50 transition-colors">{BUSINESS_INFO.phoneDisplay}</span>
                  </div>
                </a>

                <a 
                  href={`sms:${BUSINESS_INFO.phone}`} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-forest border border-emerald-800 hover:border-emerald-700 transition cursor-pointer"
                >
                  <div className="bg-forest-dark text-emerald-400 p-2.5 rounded-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-white block">Text Us</span>
                    <span className="text-xs text-emerald-200">Fast replies during business hours</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${BUSINESS_INFO.email}`} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-forest border border-emerald-800 hover:border-emerald-700 transition cursor-pointer"
                >
                  <div className="bg-forest-dark text-emerald-400 p-2.5 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">{BUSINESS_INFO.email}</span>
                  </div>
                </a>
              </div>

              <div className="bg-forest-dark p-8 rounded-3xl border border-emerald-800 shadow-xl grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Service Area</span>
                  </div>
                  <span className="text-sm font-bold text-white block">{BUSINESS_INFO.mainAddress}</span>
                  <span className="text-xs text-emerald-300 block mt-1">{BUSINESS_INFO.serviceRadius}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <Clock className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Hours</span>
                  </div>
                  <span className="text-sm font-bold text-white block">Mon-Sat</span>
                  <span className="text-xs text-emerald-300 block mt-1">7:00 AM - 8:00 PM</span>
                </div>
              </div>

            </motion.div>

            {/* Right: Booking Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white text-neutral-dark p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative z-10"
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-navy mb-2">Request a Free Quote</h3>
                      <p className="text-gray-500 text-sm font-medium">Step {formStep} of 2</p>
                      
                      {/* Progress Bar */}
                      <div className="h-2 w-full bg-neutral-light rounded-full mt-3 overflow-hidden">
                        <motion.div 
                          className="h-full bg-orange-highlight rounded-full"
                          initial={{ width: formStep === 1 ? '0%' : '50%' }}
                          animate={{ width: formStep === 1 ? '50%' : '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {formStep === 1 ? (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">What do you need removed?</label>
                            <select 
                              required
                              value={formData.service}
                              onChange={e => setFormData({...formData, service: e.target.value})}
                              className="w-full bg-neutral-light border-2 border-gray-200 text-neutral-dark rounded-xl px-4 py-3.5 font-semibold focus:outline-none focus:border-navy transition-colors appearance-none"
                            >
                              <option>General Junk Removal</option>
                              <option>Furniture Removal</option>
                              <option>Appliance Recycling</option>
                              <option>Yard Waste</option>
                              <option>Construction Debris</option>
                              <option>Full Cleanout</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</label>
                            <input 
                              type="date"
                              required
                              value={formData.date}
                              onChange={e => setFormData({...formData, date: e.target.value})}
                              className="w-full bg-neutral-light border-2 border-gray-200 text-neutral-dark rounded-xl px-4 py-3.5 font-semibold focus:outline-none focus:border-navy transition-colors"
                            />
                          </div>
                          <button 
                            type="submit"
                            className="w-full bg-navy hover:bg-navy-dark text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-md"
                          >
                            Next Step <ArrowRight className="w-5 h-5" />
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                            <input 
                              type="text"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={e => setFormData({...formData, name: e.target.value})}
                              className="w-full bg-neutral-light border-2 border-gray-200 text-neutral-dark rounded-xl px-4 py-3.5 font-semibold focus:outline-none focus:border-navy transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                            <input 
                              type="tel"
                              required
                              placeholder="(509) 555-0123"
                              value={formData.phone}
                              onChange={e => setFormData({...formData, phone: e.target.value})}
                              className="w-full bg-neutral-light border-2 border-gray-200 text-neutral-dark rounded-xl px-4 py-3.5 font-semibold focus:outline-none focus:border-navy transition-colors"
                            />
                          </div>
                          <div className="flex gap-3">
                            <button 
                              type="button"
                              onClick={() => setFormStep(1)}
                              className="w-1/3 bg-neutral-light hover:bg-gray-200 text-gray-600 font-black py-4 rounded-xl transition-colors active:scale-95"
                            >
                              Back
                            </button>
                            <button 
                              type="submit"
                              disabled={isSubmitting}
                              className="w-2/3 bg-orange-highlight hover:bg-orange-hover text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-md disabled:opacity-70 disabled:active:scale-100"
                            >
                              {isSubmitting ? 'Sending...' : 'Get My Quote'}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-black text-navy mb-3">Request Received!</h3>
                    <p className="text-gray-600 font-medium mb-8">
                      Thanks {formData.name}, we've received your request for {formData.service}. Our dispatch team will contact you shortly at {formData.phone} to confirm your quote.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormStep(1);
                        setFormData({ service: 'Junk Removal', date: '', name: '', phone: '' });
                      }}
                      className="text-orange-highlight font-bold hover:underline"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

