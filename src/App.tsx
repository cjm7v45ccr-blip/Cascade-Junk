/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutAndAreas } from './components/AboutAndAreas';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, Calendar, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from './data';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isBusinessHours, setIsBusinessHours] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      // Mon-Sat (1-6) and 8AM to 6PM (8 <= hour < 18)
      setIsBusinessHours(day >= 1 && day <= 6 && hour >= 8 && hour < 18);
    };
    
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-orange-highlight selection:text-white antialiased">
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onScrollTo={scrollToSection} 
      />

      <main className="flex-1">
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onScrollTo={scrollToSection} 
        />

        <ServicesSection 
          onSelectService={() => handleOpenBooking()} 
        />

        <TestimonialsSection />

        <AboutAndAreas 
          onOpenBooking={() => handleOpenBooking()} 
        />

        <GallerySection />

        <FaqSection 
          onOpenBooking={() => handleOpenBooking()} 
        />

        <ContactSection 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </main>

      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onScrollTo={scrollToSection} 
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-white text-navy rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center justify-center hover:bg-neutral-light hover:text-orange-highlight transition-colors pointer-events-auto"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Floating Mobile Book Bottom Bar */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50 bg-navy-dark/95 backdrop-blur-md text-white p-3 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-between gap-3 animate-slideUp active:scale-[1.02] active:shadow-[0_20px_40px_-15px_rgba(27,38,59,0.7)] transition-all duration-300">
        <div className="flex flex-col pl-1 text-left">
          <span className="text-[10px] font-bold text-orange-highlight uppercase tracking-wider">Cascade Junk Removal</span>
          <span className={`text-xs font-black transition-colors duration-300 ${isBusinessHours ? 'text-emerald-400' : 'text-white/50'}`}>Mon-Sat 8AM-6PM</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`sms:${BUSINESS_INFO.phone}`}
            className="p-2.5 bg-navy text-white rounded-xl font-bold text-xs border border-white/5 active:bg-neutral-dark transition-colors"
            aria-label="Text Us"
          >
            Text Us
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="floating-mobile-free-quote-btn"
            className="bg-orange-highlight hover:bg-orange-hover text-white font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Phone className="w-3 h-3 fill-current" /> Call
          </a>
        </div>
      </div>
    </div>
  );
}
