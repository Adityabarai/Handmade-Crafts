import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import floralToran from '../../assets/images/categories/Floral Toran.png';
import navratriRings from '../../assets/images/categories/NavratriRings.png';
import sublabh from '../../assets/images/categories/Subhlabh.png';
import lotusRangoli from '../../assets/images/categories/Lotus rangoli.png';

export default function BrandStorySection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EFE8DE] bg-[#F4EFEB]">
                  <img
                    src={floralToran}
                    alt="Floral Toran detail"
                    className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EFE8DE] bg-[#F4EFEB]">
                  <img
                    src={navratriRings}
                    alt="Navratri accessories crafted by hand"
                    className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6 sm:pt-10">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EFE8DE] bg-[#F4EFEB]">
                  <img
                    src={sublabh}
                    alt="Subh Labh handcrafted blessing"
                    className="w-full h-36 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EFE8DE] bg-[#F4EFEB]">
                  <img
                    src={lotusRangoli}
                    alt="Lotus Rangoli handcrafted decor"
                    className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Heritage Seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7A1C2E] text-white p-4 sm:p-5 rounded-full shadow-2xl border-4 border-[#FFFDF9] flex flex-col items-center justify-center text-center w-24 h-24 sm:w-28 sm:h-28">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFB743] mb-1" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold">Since</span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#DFB743]">Sep 2015</span>
            </div>
          </div>

          {/* Right Column: Story Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Our Brand Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
              Made with Love, Inspired by Tradition
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
              Founded in September 2015, Handmade Crafts by Rashi Jain brings together creativity, tradition, and thoughtful craftsmanship. From festive decorations and beautiful torans to personalized gifts and celebration hampers, each creation adds a special touch to life's memorable moments.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#4A4540]">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#7A1C2E] shrink-0 mt-0.5" />
                <span>Individually crafted by hand with careful attention to traditional motifs.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#7A1C2E] shrink-0 mt-0.5" />
                <span>Bespoke personalization available for festive gifting and trousseau.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#7A1C2E] shrink-0 mt-0.5" />
                <span>Rooted in Mumbai, celebrating festivals and weddings across India.</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-[#7A1C2E] text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm gap-2 group"
              >
                <span>Read Full Brand Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
