import React from 'react';
import { Heart, Gift, Sparkles, Calendar } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Thoughtfully Handmade',
    description:
      'Every product is individually crafted by hand, preserving artisanal techniques and infusing personal devotion into each detail.',
  },
  {
    icon: Gift,
    title: 'Perfect for Gifting',
    description:
      'Curated presentation boxes and heirloom pieces that make memorable, warm impressions for family, friends, and guests.',
  },
  {
    icon: Sparkles,
    title: 'Unique Festive Designs',
    description:
      'Original Indian handcrafted motifs combining traditional gota, pom-poms, shells, and mirrors with contemporary elegance.',
  },
  {
    icon: Calendar,
    title: 'Made for Special Moments',
    description:
      'From intimate home poojas to vibrant Navratri nights and lavish wedding celebrations, our creations mark joyous milestones.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#EFE8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Artisan Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light">
            Crafted with pride and passion in Mumbai since September 2015.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#EFE8DE] p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FAF0F1] border border-[#E8B4B8]/50 flex items-center justify-center text-[#7A1C2E] mb-5 group-hover:scale-110 group-hover:bg-[#7A1C2E] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2D2A26] group-hover:text-[#7A1C2E] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
