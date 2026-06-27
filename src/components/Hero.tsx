import React from 'react';
import { ShieldCheck, Truck, Clock, ArrowRight, CheckCircle2, PhoneCall, Mountain, Sparkles, Recycle, Mail, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: (zipCode?: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollTo }) => {
  return (
    <section className="relative bg-[#F3F4F6] pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden border-b border-gray-200">
      {/* Subtle Mountain / Cascade Background Silhouettes */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden flex items-end justify-center">
        <svg className="w-full h-80 text-[#0A3D2A]/10 fill-current" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            
            {/* Top Tag */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-forest text-xs sm:text-sm font-extrabold w-fit shadow-sm border border-forest/20"
            >
              <Mountain className="w-4 h-4 text-navy" />
              <span>Cascade Junk Removal</span>
            </motion.div>

            {/* Main Headline exact requested */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-neutral-dark tracking-tight leading-[1.05]">
              That pile in your garage isn't going to <span className="text-forest underline decoration-orange-highlight decoration-4 underline-offset-8">haul itself.</span>
            </h1>

            {/* Short description of your services */}
            <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
              Same-day pickup across Wenatchee. Call Marco. Not a franchise. Not a call center. Just local junk removal when you need it.
            </p>


            {/* Contact Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-200 max-w-xl mt-2 flex flex-col gap-4"
            >
              <h3 className="text-lg font-black text-neutral-dark">Get a Free Quote</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-navy hover:bg-navy-dark text-white font-black px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 text-white" />
                  Call Now
                </a>
                <a
                  href={`sms:${BUSINESS_INFO.phone}`}
                  className="bg-forest hover:bg-forest-dark text-white font-black px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  Text Us
                </a>
              </div>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="bg-neutral-light hover:bg-gray-200 text-neutral-dark font-black px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-gray-300"
              >
                <Mail className="w-5 h-5 text-gray-500" />
                Email Us
              </a>
            </motion.div>

          </motion.div>

          {/* Right Hero Image Card / Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            <div className="rounded-3xl shadow-2xl border-4 border-white bg-white aspect-square relative flex flex-col p-8 justify-center">
              <div className="text-navy font-black text-2xl mb-6">Simple Pricing</div>
              <div className="space-y-4 text-neutral-dark font-medium text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-3"><span>Single Item</span><span className="font-bold">From $50</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-3"><span>Half Truck</span><span className="font-bold">$150+</span></div>
                <div className="flex justify-between pb-3"><span>Full Truck</span><span className="font-bold">$300+</span></div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


