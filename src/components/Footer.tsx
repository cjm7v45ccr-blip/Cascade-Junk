import React from 'react';
import { Truck, Phone, Mail, MapPin, ShieldCheck, Clock, Mountain, Instagram } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data';

interface FooterProps {
  onOpenBooking: (service?: string) => void;
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onScrollTo }) => {
  return (
    <footer className="bg-neutral-dark text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-700 text-left">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-navy text-white rounded-xl flex items-center justify-center font-bold shadow-md">
                <Mountain className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-display font-black tracking-tight text-white">
                CASCADE <span className="text-orange-highlight">JUNK</span>
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm font-medium">
              Locally owned and operated residential and commercial junk hauling. We take pride in upfront pricing, polite crews, and clean yards & garages.
            </p>

            <div className="space-y-2 pt-2">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2.5 text-white font-black hover:text-navy transition text-base">
                <Phone className="w-4 h-4 text-navy fill-current" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-navy transition font-medium">
                <Mail className="w-4 h-4 text-navy" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              {BUSINESS_INFO.instagram && (
                <a href={`https://instagram.com/${BUSINESS_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-navy transition font-medium">
                  <Instagram className="w-4 h-4 text-navy" />
                  <span>@{BUSINESS_INFO.instagram}</span>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-navy uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button 
                    onClick={() => onOpenBooking(srv.title)}
                    className="hover:text-navy transition text-left cursor-pointer font-medium text-gray-300"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-navy uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Our Crew", id: "about" },
                { label: "Cascade Service Area", id: "areas" },
                { label: "Hauling FAQ", id: "faq" },
              ].map((lnk) => (
                <li key={lnk.id}>
                  <button 
                    onClick={() => onScrollTo(lnk.id)}
                    className="hover:text-navy transition text-left cursor-pointer font-medium text-gray-300"
                  >
                    {lnk.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dispatch Hours & CTA */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-navy uppercase tracking-widest">Business Hours</h4>
            <div className="text-xs space-y-2 bg-forest p-4 rounded-2xl border border-emerald-800">
              <div className="flex items-center gap-1.5 text-navy font-black">
                <Clock className="w-3.5 h-3.5" /> 6 Days a Week
              </div>
              <p className="text-white font-semibold">Mon - Sat: 8:00 AM - 6:00 PM</p>
              <p className="text-white/60 font-medium">Sunday: Closed</p>
              <p className="text-[11px] text-emerald-300 pt-1.5 border-t border-emerald-800 flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Same-Day Trucks Available
              </p>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 bg-orange-highlight hover:bg-orange-hover text-white font-black rounded-xl text-xs transition shadow-md uppercase tracking-wider cursor-pointer"
            >
              Book Pickup Now
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <div>
            © {new Date().getFullYear()} Cascade Junk Removal. All rights reserved. Licensed, Bonded & Insured.
          </div>
        </div>

      </div>
    </footer>
  );
};

