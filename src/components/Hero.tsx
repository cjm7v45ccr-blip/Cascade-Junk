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
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#00BFA5]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-32 w-96 h-96 rounded-full bg-[#0A3D2A]/10 blur-3xl pointer-events-none" />

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
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-display font-black text-neutral-dark tracking-tight leading-[1.08]">
              Fast, Reliable <br />
              Junk Removal <br />
              <span className="text-forest underline decoration-navy decoration-4 underline-offset-8">
                in Wenatchee & East Wenatchee
              </span>
            </h1>

            {/* Short description of your services */}
            <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
              We make clutter disappear across Wenatchee and East Wenatchee! Operating Monday–Friday, 10 AM – 5 PM. Note: We do not haul hazardous waste or wet paint.
            </p>

            {/* Service Highlights Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 py-1"
            >
              {[
                "Wenatchee", "East Wenatchee", "Fast & Reliable", "Mon-Fri 10AM-5PM"
              ].map((pill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-gray-200 shadow-2xs text-xs sm:text-sm font-bold text-neutral-dark">
                  <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                  <span className="truncate">{pill}</span>
                </div>
              ))}
            </motion.div>

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
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy aspect-4/3 sm:aspect-square relative flex items-center justify-center p-8 group">
                <img
                  src="https://scontent-sea5-1.cdninstagram.com/v/t51.82787-19/729981393_18142386355477816_3612252020470802997_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=1EAuP33uHF8Q7kNvwEQWl04&_nc_oc=Adoe3N7T6N1bCISgA8CKHqWo6cA4SA6OZl8DDxOY6GqlDwrTLLPBwBLYNBrecuN9wJc&_nc_zt=24&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=adTI6TkmMcVcSHvMi0AVlQ&_nc_ss=7b689&oh=00_Af_WtnPnrGA64avDNkkzXHUu6d8kJqX-qpVWLkhJj8Uxuw&oe=6A45D594"
                  alt="Cascade Junk Removal Logo"
                  className="w-full h-auto object-contain group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-highlight text-white font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Cascade Junk Removal
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-black leading-snug text-white">
                    Please provide an image for this section if you'd like a background photo!
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Upfront Pricing */}
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="bg-[#0A3D2A] text-[#00BFA5] p-2.5 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-500">HOURS</div>
                  <div className="text-sm font-black text-[#1F2937]">Mon-Fri 10AM-5PM</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Contact */}
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0A3D2A] text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-emerald-900 flex items-center gap-3"
              >
                <div className="bg-[#00BFA5] text-gray-950 p-2.5 rounded-xl font-bold">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#00BFA5]">CONTACT US</div>
                  <div className="text-sm font-black">509-433-4493</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


