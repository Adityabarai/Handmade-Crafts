import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  Grid,
  List,
  X,
  ChevronRight,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/common/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL Query Parameters
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  // Local Filter States
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured'); // featured, newest, price-asc, price-desc
  const [viewMode, setViewMode] = useState('grid'); // grid, list

  // Sync state with URL if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
    const q = searchParams.get('search');
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Handle Category Change
  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchCat = product.categoryName.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        // Default: featured
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const activeCategoryObject = categories.find((c) => c.slug === selectedCategory);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-stone-500 mb-6">
          <Link to="/" className="hover:text-[#7A1C2E] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#2D2A26] font-medium">
            {activeCategoryObject ? activeCategoryObject.name : 'All Collections'}
          </span>
        </nav>

        {/* Page Title & Description */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Handcrafted Indian Boutique</span>
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] mt-1">
                {activeCategoryObject ? activeCategoryObject.name : 'Handmade Collection'}
              </h1>
              <p className="text-sm text-stone-600 mt-2 max-w-2xl font-light">
                {activeCategoryObject
                  ? activeCategoryObject.description
                  : 'Explore our complete array of handcrafted festive decor, floral torans, Shubh Labh wall accents, Navratri jewelry, and personalized celebration hampers.'}
              </p>
            </div>

            <div className="text-xs sm:text-sm text-stone-500 font-medium">
              Showing <strong className="text-[#7A1C2E]">{filteredProducts.length}</strong> of{' '}
              {products.length} creations
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Scrollable) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 w-full max-w-full scrollbar-none">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#7A1C2E] text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-[#F5EFEB] border border-[#EFE8DE]'
            }`}
          >
            All Categories ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                selectedCategory === cat.slug
                  ? 'bg-[#7A1C2E] text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-[#F5EFEB] border border-[#EFE8DE]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filter Bar: Search, Sort, View Toggle */}
        <div className="bg-white p-4 rounded-xl border border-[#EFE8DE] shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by title, materials or craft..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#D8CFC4] text-[#2D2A26] placeholder-stone-400 focus:outline-none focus:border-[#7A1C2E] focus:ring-1 focus:ring-[#7A1C2E]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Controls: Sort & View Toggle */}
            <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3 text-xs">
              {/* Sort By */}
              <div className="flex items-center space-x-1">
                <span className="text-stone-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#FAF7F2] border border-[#D8CFC4] rounded-lg px-2.5 py-1.5 text-xs text-[#2D2A26] focus:outline-none focus:border-[#7A1C2E]"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">New Arrivals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-[#D8CFC4] rounded-lg overflow-hidden bg-[#FAF7F2]">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 ${
                    viewMode === 'grid'
                      ? 'bg-[#7A1C2E] text-white'
                      : 'text-stone-600 hover:text-[#7A1C2E]'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 ${
                    viewMode === 'list'
                      ? 'bg-[#7A1C2E] text-white'
                      : 'text-stone-600 hover:text-[#7A1C2E]'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Clear Filters (if active) */}
              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="flex items-center gap-1 text-[#7A1C2E] hover:underline font-semibold ml-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Catalog Display */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-[#EFE8DE] rounded-2xl p-12 text-center max-w-md mx-auto space-y-4 my-10">
            <div className="w-16 h-16 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#7A1C2E] mx-auto">
              <Search className="w-8 h-8 stroke-1" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#2D2A26]">
                No matching creations found
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                We couldn't find any products matching your current filters. Try clearing your search or browsing another collection.
              </p>
            </div>
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-5 py-2.5 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* 4 columns on desktop, 3 on tablets, 2 on mobile */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} layout="grid" />
            ))}
          </div>
        ) : (
          /* List Mode */
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} layout="list" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
