/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutAndAreas } from './components/AboutAndAreas';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data';

export default function App() {
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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#00BFA5] selection:text-gray-950 antialiased">
      {/* Sticky Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onScrollTo={scrollToSection} 
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onScrollTo={scrollToSection} 
        />

        {/* Services Section */}
        <ServicesSection 
          onSelectService={() => handleOpenBooking()} 
        />

        {/* About Us & Service Area Towns Section */}
        <AboutAndAreas 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* FAQ Section */}
        <FaqSection 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Contact Page & Quote Request Form Section */}
        <ContactSection 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onScrollTo={scrollToSection} 
      />

      {/* Interactive Floating Mobile Book Bottom Bar */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30 bg-gray-950/95 backdrop-blur-md text-white p-3 rounded-2xl shadow-2xl border border-gray-800 flex items-center justify-between gap-3 animate-slideUp">
        <div className="flex flex-col pl-1 text-left">
          <span className="text-[10px] font-bold text-[#00BFA5] uppercase tracking-wider">Cascade Junk Removal</span>
          <span className="text-xs font-black">Mon-Fri 10AM-5PM</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`sms:${BUSINESS_INFO.phone}`}
            className="p-2.5 bg-gray-800 text-[#00BFA5] rounded-xl font-bold text-xs"
            aria-label="Text Us"
          >
            Text Us
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            id="floating-mobile-free-quote-btn"
            className="bg-[#00BFA5] hover:bg-[#00a891] text-gray-950 font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 fill-current" /> Call
          </a>
        </div>
      </div>
    </div>
  );
}
