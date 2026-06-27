import React from 'react';
import { ShieldCheck, MapPin, Truck, Heart, Clock, Award, CheckCircle2, PhoneCall, Mountain, Trees } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS_TOWNS } from '../data';
import { motion } from 'motion/react';

interface AboutAndAreasProps {
  onOpenBooking: () => void;
}

export const AboutAndAreas: React.FC<AboutAndAreasProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-white">
      {/* About Us Section */}
      <section id="about" className="py-20 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-[#0A3D2A] text-xs font-black uppercase tracking-wider">
                <Mountain className="w-3.5 h-3.5 text-[#00BFA5]" /> Who We Are
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1F2937] tracking-tight">
                About Cascade Junk Removal
              </h2>

              {/* Who you are */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Founded with a mission to keep our scenic communities pristine, <span className="font-extrabold text-[#0A3D2A]">Cascade Junk Removal</span> is a trustworthy, locally owned full-service junk removal company. We believe clearing your clutter shouldn't mean dumping usable household items into local landfills or dealing with hidden contractor fees.
              </p>

              {/* Why customers should choose you */}
              <div className="pt-2">
                <h3 className="text-xl font-display font-black text-neutral-dark mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-navy" />
                  Why Customers Choose Us:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Fast & Reliable", desc: "We show up on time and work efficiently." },
                    { title: "Locally Owned", desc: "Proudly serving Wenatchee and East Wenatchee." },
                  ].map((feat, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="bg-neutral-light/70 p-4 rounded-2xl border border-gray-200"
                    >
                      <div className="font-bold text-neutral-dark text-sm mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-normal pl-5.5 font-medium">{feat.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Your service area callout */}
              <div className="bg-forest text-white p-5 rounded-2xl border border-forest-dark flex items-start gap-4 shadow-sm">
                <MapPin className="w-6 h-6 text-orange-highlight shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-black text-white text-sm uppercase tracking-wider">Our Service Area:</h4>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-1 leading-relaxed font-medium">{BUSINESS_INFO.serviceRadius}</p>
                </div>
              </div>

            </motion.div>

            {/* Right Visual Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy aspect-4/3 relative flex items-center justify-center p-8">
                 <img
                  src="https://scontent-sea5-1.cdninstagram.com/v/t51.82787-19/729981393_18142386355477816_3612252020470802997_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=1EAuP33uHF8Q7kNvwEQWl04&_nc_oc=Adoe3N7T6N1bCISgA8CKHqWo6cA4SA6OZl8DDxOY6GqlDwrTLLPBwBLYNBrecuN9wJc&_nc_zt=24&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=adTI6TkmMcVcSHvMi0AVlQ&_nc_ss=7b689&oh=00_Af_WtnPnrGA64avDNkkzXHUu6d8kJqX-qpVWLkhJj8Uxuw&oe=6A45D594"
                  alt="Cascade Junk Removal Logo"
                  className="w-full h-auto object-contain opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <div className="text-xs font-black text-orange-highlight mb-1 uppercase tracking-wider">Please Provide Photos</div>
                  <p className="text-xs sm:text-sm text-white font-bold leading-snug">
                    We'll display photos of your team or trucks here once you provide them!
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Service Areas Cities & Towns Section */}
      <section id="areas" className="py-20 bg-[#F3F4F6] border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-[#0A3D2A] text-xs font-black uppercase tracking-wider mb-3 border border-gray-200 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#00BFA5]" /> Where We Haul
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1F2937] tracking-tight">
              Cascade Towns & Communities We Serve
            </h2>
            <p className="mt-4 text-gray-700 text-lg font-normal">
              Our eco-friendly hauling crews are stationed across the Cascade area daily. Don't see your specific neighborhood listed? Give us a call—we cover the entire region!
            </p>
          </motion.div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {SERVICE_AREAS_TOWNS.map((town, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="bg-white hover:bg-[#0A3D2A] p-4 rounded-2xl border border-gray-200 hover:border-[#0A3D2A] shadow-2xs hover:shadow-lg transition flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#00BFA5] group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-extrabold text-[#1F2937] text-sm group-hover:text-white transition-colors">{town}</span>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <span className="text-sm font-bold text-[#1F2937]">Same-Day dispatch available across all Cascade towns:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-[#00BFA5] hover:bg-[#00a891] text-gray-950 font-black px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition text-sm cursor-pointer uppercase tracking-wider flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

