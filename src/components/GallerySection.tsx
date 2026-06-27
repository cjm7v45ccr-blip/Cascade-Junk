import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80", alt: "Clean empty garage" },
  { id: 2, src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80", alt: "Construction debris removal" },
  { id: 3, src: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80", alt: "Clean yard space" },
  { id: 4, src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80", alt: "Office cleanout" }
];

export const GallerySection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-light text-navy text-xs font-black uppercase tracking-wider mb-3"
          >
            <ImageIcon className="w-3.5 h-3.5 text-orange-highlight" /> Our Work
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-black text-neutral-dark tracking-tight"
          >
            Recent Cleanouts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            We transform cluttered spaces into clean, usable areas. See the difference for yourself.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md"
            >
              <div className="w-full h-full bg-neutral-light flex items-center justify-center text-gray-400">
                  <ImageIcon className="w-12 h-12" />
                </div>
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-highlight text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-lg"
                >
                  View Space
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
