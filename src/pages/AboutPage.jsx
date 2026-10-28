import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Award, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { categories } from '../data/categories';
import floralToran from '../assets/images/categories/Floral Toran.png';
import candleHolder from '../assets/images/categories/Candleholderpairof2.png';
import navratriRings from '../assets/images/categories/NavratriRings.png';
import handworkSubhLabh from '../assets/images/categories/Handwork subh labh with tassels.png';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F1] border border-[#E8B4B8] text-[#7A1C2E] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB743]" />
            <span>Since September 2015 • Mumbai, India</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2A26] tracking-tight leading-tight">
            Crafting Festive Joy,{' '}
            <span className="text-[#7A1C2E] italic font-normal block sm:inline">
              One Detail at a Time
            </span>
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Founded by Rashi Jain in Mumbai, our boutique workshop celebrates the rich artistic heritage of Indian craftsmanship with contemporary festive elegance.
          </p>
        </div>

        {/* Brand Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Collage (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#EFE8DE] bg-[#F4EFEB]">
                <img
                  src={floralToran}
                  alt="Toran craftsmanship"
                  className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#EFE8DE] bg-[#F4EFEB]">
                <img
                  src={candleHolder}
                  alt="Diya candle craftsmanship"
                  className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6 sm:pt-10">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#EFE8DE] bg-[#F4EFEB]">
                <img
                  src={navratriRings}
                  alt="Navratri accessories"
                  className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#EFE8DE] bg-[#F4EFEB]">
                <img
                  src={handworkSubhLabh}
                  alt="Handwork Subh Labh"
                  className="w-full h-56 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Story Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Our Roots in Mumbai</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] leading-tight">
              A Passion Born from Indian Festivities
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              <p>
                In <strong>September 2015</strong>, Rashi Jain set out on a journey with a clear creative passion: to revive the authentic charm of handcrafted Indian festive ornamentation in modern urban homes.
              </p>
              <p>
                What began as festive home decorations for close friends and family quickly blossomed into a beloved Mumbai handmade atelier. Today, each floral toran, pom-pom door drop, kundan rangoli, and celebration gift hamper is lovingly created with high-quality materials and deep respect for Indian traditions.
              </p>
              <p>
                Whether you are decorating your doorway for Diwali, styling an authentic ethnic ensemble for Navratri Dandiya, or seeking heartwarming trousseau hampers for an upcoming wedding, our studio brings personal devotion to every single order.
              </p>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-stone-700">
              <div className="p-4 bg-white rounded-xl border border-[#EFE8DE]">
                <h4 className="font-serif font-bold text-sm text-[#7A1C2E] mb-1">
                  100% Handcrafted
                </h4>
                <p className="text-stone-500">
                  No mass automated factory assembly. Each bead is knotted with precision.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#EFE8DE]">
                <h4 className="font-serif font-bold text-sm text-[#7A1C2E] mb-1">
                  Custom Orders
                </h4>
                <p className="text-stone-500">
                  Bespoke color combinations and dimensions customized for your home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Highlights */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
              Our Signature Specialties
            </h2>
            <p className="text-sm text-stone-600 font-light">
              From auspicious threshold decor to handcrafted accessories and wedding hampers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((cat) => (
              <div
                key={cat.id}
                className="bg-white p-5 rounded-2xl border border-[#EFE8DE] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-[#F4EFEB]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2D2A26]">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#F5EFEB]">
                  <Link
                    to={`/shop?category=${cat.slug}`}
                    className="text-xs font-semibold text-[#7A1C2E] hover:underline flex items-center gap-1"
                  >
                    <span>Browse Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Browse Products */}
        <div className="bg-gradient-to-r from-[#7A1C2E] to-[#54111D] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <Sparkles className="w-8 h-8 text-[#DFB743] mx-auto animate-pulse" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Ready to Adorn Your Celebrations?
            </h2>
            <p className="text-sm sm:text-base text-[#F8E1DC]/90 font-light leading-relaxed">
              Discover unique festive decor, doorstep torans, and personalized gifts made with love in Mumbai.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/shop"
                className="px-8 py-3.5 bg-[#DFB743] text-[#2D2A26] rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors shadow-md"
              >
                Explore All Creations
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-transparent border border-[#F8E1DC]/50 text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Inquire on Custom Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
