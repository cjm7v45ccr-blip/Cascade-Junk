import React, { useState } from 'react';
import { Truck, Phone, Calendar, Menu, X, ShieldCheck, Clock, Recycle, Mountain } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onOpenBooking: (initialService?: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Service Areas", id: "areas" },
    { label: "Reviews", id: "reviews" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Phone Bar */}
      <div className="bg-navy-dark text-emerald-50 px-4 py-2.5 text-xs font-semibold border-b border-white/10 relative overflow-hidden">
        {/* Subtle animated highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
        
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-100">
              <Truck className="w-4 h-4 text-orange-highlight" /> 
              <span className="tracking-wide">Serving Wenatchee & East Wenatchee</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-white/90">
              <Clock className="w-3.5 h-3.5 text-orange-highlight" /> 
              <span className="tracking-wide">Same-Day Junk Pickup Available</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-highlight" /> 
              <span className="tracking-wide">100% Free Onsite Estimates</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-white/60 tracking-wider text-[10px] uppercase">Call For A Quote</span>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="font-bold flex items-center gap-1.5 bg-orange-highlight text-white px-3 py-1.5 rounded-full text-xs hover:bg-orange-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-3 h-3 fill-current" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2.5 cursor-pointer group select-none relative"
          >
            {/* Subtle glow behind logo */}
            <div className="absolute inset-0 bg-navy/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-navy text-white rounded-xl flex items-center justify-center font-bold shadow-md relative z-10 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
              <Mountain className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
            </div>
            <div className="flex flex-col relative z-10">
              <span className="text-xl sm:text-2xl font-display font-black tracking-tight text-neutral-dark leading-none">
                CASCADE <span className="text-orange-highlight">JUNK</span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 tracking-wider uppercase leading-none mt-1">
                Removal
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-navy hover:bg-neutral-light rounded-xl transition-all cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-navy scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-full font-black text-navy hover:bg-neutral-light transition-all text-sm border-2 border-navy/10 hover:border-navy/30"
            >
              <Phone className="w-4 h-4 text-navy" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="nav-free-quote-btn"
              className="bg-navy hover:bg-navy-dark text-white font-black px-6 py-3 rounded-full shadow-[0_8px_16px_-6px_rgba(27,38,59,0.5)] hover:shadow-[0_12px_20px_-8px_rgba(27,38,59,0.7)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 text-sm active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Contact Us</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="hidden md:flex bg-orange-highlight hover:bg-orange-hover text-white font-black px-5 py-3 rounded-full shadow-[0_8px_16px_-6px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_20px_-8px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 transition-all duration-300 items-center gap-1.5 text-sm active:scale-95 cursor-pointer"
            >
              <span>Book a Pickup</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-orange-highlight text-white font-black px-4 py-2 rounded-full text-xs shadow-md"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy bg-neutral-light hover:bg-gray-200 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-emerald-50 hover:text-[#0A3D2A] rounded-lg transition cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 pt-3 border-t border-gray-100">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00BFA5] text-gray-950 font-black rounded-xl text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 bg-[#F97316] hover:bg-orange-600 text-white font-black rounded-xl text-sm shadow-md transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

