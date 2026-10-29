import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFFDF9] to-[#FAF7F2] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#EFE8DE]">
      {/* Background Decorative Floral Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FDF0ED] rounded-full blur-3xl opacity-60 pointer-events-none -mt-20" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#F4EFEB] rounded-full blur-2xl opacity-70 pointer-events-none -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Trust / Heritage Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FAF0F1] border border-[#E8B4B8] text-[#7A1C2E] shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#DFB743] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Handcrafted with Love Since 2015
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2D2A26] tracking-tight leading-[1.18]">
            Little Details.{' '}
            <span className="text-[#7A1C2E] italic font-normal block sm:inline">
              Beautiful Celebrations.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover handcrafted festive décor, thoughtful gifts, and beautiful creations made to celebrate your most special moments. Each piece is thoughtfully handcrafted in Mumbai.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/shop"
              className="w-full sm:w-auto px-7 py-3 sm:py-3.5 bg-[#7A1C2E] text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#601422] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#bestsellers"
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-white text-[#2D2A26] border border-[#D8CFC4] rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:border-[#7A1C2E] hover:text-[#7A1C2E] transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>Shop Bestsellers</span>
            </a>
          </div>

          {/* Value Highlights */}
          <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-6 border-t border-[#EFE8DE] max-w-lg mx-auto text-center">
            <div className="space-y-0.5">
              <span className="font-serif text-lg sm:text-2xl font-bold text-[#7A1C2E]">
                9+ Years
              </span>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">
                Mumbai Studio
              </p>
            </div>

            <div className="space-y-0.5 border-l border-[#EFE8DE] pl-2 sm:pl-6">
              <span className="font-serif text-lg sm:text-2xl font-bold text-[#7A1C2E]">
                100%
              </span>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">
                Handcrafted
              </p>
            </div>

            <div className="space-y-0.5 border-l border-[#EFE8DE] pl-2 sm:pl-6">
              <span className="font-serif text-lg sm:text-2xl font-bold text-[#7A1C2E]">
                Pan-India
              </span>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">
                Safe Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
