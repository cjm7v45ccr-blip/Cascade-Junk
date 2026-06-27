import React from 'react';
import { 
  Home, Sofa, Refrigerator, Warehouse, Trees, HeartHandshake, HardHat, 
  ArrowRight, CheckCircle2, Calendar, Mountain, Recycle, Truck
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Sofa': return <Sofa className="w-6 h-6" />;
      case 'Refrigerator': return <Refrigerator className="w-6 h-6" />;
      case 'Warehouse': return <Warehouse className="w-6 h-6" />;
      case 'Trees': return <Trees className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'HardHat': return <HardHat className="w-6 h-6" />;
      default: return <Home className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-light text-navy text-xs font-black uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-orange-highlight" /> What We Haul
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-dark tracking-tight">
            Comprehensive Junk Removal
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From single item pickups to full property cleanouts across Wenatchee and East Wenatchee.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-light hover:bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-navy shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Image & Icon Header */}
                <div className="relative h-48 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 rounded-t-3xl overflow-hidden bg-gray-200">
                  {service.imageUrl ? (
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105" 
                    />
                  ) : (
                    <div className="w-full h-full bg-navy/10 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                      <Truck className="w-12 h-12 text-navy/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-6 bg-navy text-white border border-white/20 p-3 rounded-2xl shadow-lg font-bold">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title & Descs */}
                <h3 className="text-2xl font-display font-black text-neutral-dark mb-1 group-hover:text-navy transition-colors">
                  {service.title}
                </h3>
                {service.startingPrice && (
                  <div className="inline-block px-2 py-1 mb-2 bg-green-100 text-green-800 text-xs font-black uppercase rounded-md tracking-wide">
                    Starts at {service.startingPrice}
                  </div>
                )}
                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  {service.fullDesc}
                </p>

                {/* Common Items Checkpoints */}
                {service.commonItems.length > 0 && (
                  <div className="space-y-2 my-4 py-3 border-t border-b border-gray-200/80">
                    <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Recycle className="w-3.5 h-3.5 text-navy" /> Common Items Hauled:
                    </div>
                    {service.commonItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-800">
                        <CheckCircle2 className="w-4 h-4 text-orange-highlight shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 flex items-center justify-between gap-3 mt-auto">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full bg-neutral-dark group-hover:bg-navy-dark text-white font-black py-3.5 px-4 rounded-xl shadow-xs transition flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Pickup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Banner CTA inside Services */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-navy text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left border border-navy-dark"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-highlight/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold text-orange-highlight uppercase tracking-wider block mb-1">Cascade Junk Removal</span>
            <h3 className="text-2xl sm:text-4xl font-display font-black mb-3 text-white">
              Have strange or oversize items?
            </h3>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              We take almost everything! Contact us for a quote on specific large items or complex cleanouts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto relative z-10">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-orange-highlight hover:bg-orange-hover text-white font-black px-6 py-4 rounded-xl text-center shadow-lg transition text-base cursor-pointer"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

