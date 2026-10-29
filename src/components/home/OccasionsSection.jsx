import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { occasions } from '../../data/occasions';
import ImageWithFallback from '../common/ImageWithFallback';

export default function OccasionsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF9] border-t border-[#EFE8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#7A1C2E]">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB743]" />
            <span>Celebrate Every Milestone</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Shop by Occasion
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light">
            Find the perfect handcrafted accompaniment for every cherished Indian celebration.
          </p>
        </div>

        {/* 6 Visual Cards (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {occasions.map((occ) => (
            <Link
              key={occ.id}
              to={`/shop?category=${occ.categorySlug}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#EFE8DE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end min-h-[230px] sm:min-h-[280px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={occ.image}
                  alt={occ.name}
                  aspectRatio="aspect-auto"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  fallbackText={occ.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity" />
              </div>

              {/* Occasion Content */}
              <div className="relative z-10 p-4 sm:p-6 text-white space-y-1.5">
                <span className="inline-block text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#DFB743] bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full mb-1">
                  {occ.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#F8E1DC] transition-colors leading-tight">
                  {occ.name}
                </h3>
                <p className="text-xs text-stone-300 font-light line-clamp-1">
                  {occ.subtitle}
                </p>

                <div className="pt-2 sm:pt-3 flex items-center gap-1.5 text-xs font-semibold text-[#DFB743] group-hover:text-white transition-colors">
                  <span>Explore Occasion Decor</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
