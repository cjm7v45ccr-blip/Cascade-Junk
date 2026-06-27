import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS_LIST } from '../data';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_LIST.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_LIST.length - 1 : prev - 1));
  };

  if (REVIEWS_LIST.length === 0) return null;

  return (
    <section className="py-24 bg-neutral-light relative overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-navy text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
              <Star className="w-3.5 h-3.5 text-orange-highlight fill-orange-highlight" /> 5-Star Service
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-neutral-dark tracking-tight leading-tight">
              Don't just take our word for it.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We take pride in delivering fast, reliable, and friendly service to every customer in the Wenatchee Valley. Read what your neighbors have to say.
            </p>
            
            <div className="mt-8 flex gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500 overflow-hidden shadow-sm hover:-translate-y-1 transition-transform"
                  >
                    {/* Placeholder for customer image */}
                    <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500 overflow-hidden shadow-sm" />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i, idx) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, type: "spring" }}
                    >
                      <Star className="w-4 h-4 text-orange-highlight fill-orange-highlight" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm font-bold text-neutral-dark">100+ Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative min-h-[300px] flex flex-col justify-center">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-neutral-light rotate-180" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(REVIEWS_LIST[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-highlight fill-orange-highlight" />
                    ))}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-neutral-dark leading-relaxed mb-8">
                    "{REVIEWS_LIST[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-black text-lg shadow-inner">
                      {REVIEWS_LIST[currentIndex].initials}
                    </div>
                    <div>
                      <div className="font-black text-neutral-dark">{REVIEWS_LIST[currentIndex].name}</div>
                      <div className="text-sm font-bold text-gray-500">{REVIEWS_LIST[currentIndex].location}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute -bottom-6 right-8 flex gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white text-navy shadow-lg border border-gray-100 flex items-center justify-center hover:bg-neutral-light hover:text-orange-highlight hover:-translate-y-1 active:scale-95 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-navy text-white shadow-lg border border-navy flex items-center justify-center hover:bg-navy-dark hover:-translate-y-1 active:scale-95 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
