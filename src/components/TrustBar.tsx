import React from 'react';
import { Truck, Users, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-navy text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center justify-center gap-3">
          <Truck className="w-8 h-8 text-orange-highlight" />
          <div>
            <div className="text-xl font-black">Wenatchee Valley</div>
            <div className="text-xs text-emerald-100 uppercase tracking-wider font-bold">Mon–Sat 8AM–6PM</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Users className="w-8 h-8 text-orange-highlight" />
          <div>
            <div className="text-xl font-black">Free Estimate</div>
            <div className="text-xs text-emerald-100 uppercase tracking-wider font-bold">No Obligation</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <MapPin className="w-8 h-8 text-orange-highlight" />
          <div>
            <div className="text-xl font-black">Donate & Recycle</div>
            <div className="text-xs text-emerald-100 uppercase tracking-wider font-bold">What We Can</div>
          </div>
        </div>
      </div>
    </div>
  );
};
