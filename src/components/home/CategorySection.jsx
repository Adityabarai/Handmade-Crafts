import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { categories } from '../../data/categories';
import ImageWithFallback from '../common/ImageWithFallback';

export default function CategorySection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handmade Collections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light">
            Each creation is individually handcrafted with tradition, elegance, and heartfelt care.
          </p>
        </div>

        {/* Categories Grid (8 Cards: 4 cols on desktop, 2 on tablet/mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative bg-white border border-[#EFE8DE] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#F4EFEB]">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.name}
                  aspectRatio="aspect-square"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  fallbackText={cat.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Category Info */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2A26] group-hover:text-[#7A1C2E] transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1 hidden sm:block">
                    {cat.tagline}
                  </p>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 border-t border-[#F5EFEB] flex items-center justify-between text-xs font-semibold text-[#7A1C2E] group-hover:text-[#50111D]">
                  <span>Shop Collection</span>
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
