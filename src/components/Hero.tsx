import React from 'react';
import { ShieldCheck, Clock, ArrowRight, CheckCircle2, PhoneCall, Mountain, Sparkles, Recycle, Mail, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: (zipCode?: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollTo }) => {
  return (
    <section className="relative bg-[#F3F4F6] pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            
            {/* Main Headline exact requested */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-neutral-dark tracking-tight leading-[1.05]">
              That pile in your garage isn't going to <span className="text-forest underline decoration-orange-highlight decoration-4 underline-offset-8">haul itself.</span>
            </h1>

            {/* Short description of your services */}
            <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
              Same-day pickup across Wenatchee. Call Marco or Ian. Not a franchise. Not a call center. Just local junk removal when you need it.
            </p>

            {/* Contact Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-xl mt-2"
            >
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-orange-highlight hover:bg-orange-hover text-white font-black px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg cursor-pointer"
              >
                <PhoneCall className="w-6 h-6 text-white" />
                Call Marco or Ian: {BUSINESS_INFO.phoneDisplay}
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
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square relative">
              <img 
                src="/src/assets/images/wenatchee_placeholder_1782589717984.jpg" 
                alt="Wenatchee Valley" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


