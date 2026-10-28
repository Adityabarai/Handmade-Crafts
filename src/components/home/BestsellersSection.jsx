import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../common/ProductCard';

export default function BestsellersSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Filter products for the bestsellers section
  const bestsellers = products.filter((p) => p.isBestseller);

  const filteredProducts =
    selectedFilter === 'all'
      ? bestsellers
      : bestsellers.filter((p) => p.category === selectedFilter);

  return (
    <section id="bestsellers" className="py-16 sm:py-20 bg-[#FFFDF9] border-y border-[#EFE8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#7A1C2E]">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB743]" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
              Bestselling Creations
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light">
              Handpicked heirloom pieces adored by clients across India for festivals and celebrations.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#7A1C2E] hover:text-[#50111D] gap-1 group self-start md:self-end"
          >
            <span>View All Creations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
              selectedFilter === 'all'
                ? 'bg-[#7A1C2E] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-[#F5EFEB] border border-[#EFE8DE]'
            }`}
          >
            All Bestsellers ({bestsellers.length})
          </button>
          <button
            onClick={() => setSelectedFilter('festival-decor')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
              selectedFilter === 'festival-decor'
                ? 'bg-[#7A1C2E] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-[#F5EFEB] border border-[#EFE8DE]'
            }`}
          >
            Festival Decor
          </button>
          <button
            onClick={() => setSelectedFilter('navratri-accessories')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
              selectedFilter === 'navratri-accessories'
                ? 'bg-[#7A1C2E] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-[#F5EFEB] border border-[#EFE8DE]'
            }`}
          >
            Navratri Accessories
          </button>
          <button
            onClick={() => setSelectedFilter('toran')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
              selectedFilter === 'toran'
                ? 'bg-[#7A1C2E] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-[#F5EFEB] border border-[#EFE8DE]'
            }`}
          >
            Toran
          </button>
        </div>

        {/* Product Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
