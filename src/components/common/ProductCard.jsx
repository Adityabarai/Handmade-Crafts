import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import ImageWithFallback from './ImageWithFallback';

export default function ProductCard({ product, layout = 'grid' }) {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useShop();

  const isFavorited = isInWishlist(product.id);

  if (layout === 'list') {
    return (
      <div className="bg-white border border-[#EFE8DE] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group">
        {/* Image container */}
        <div className="sm:w-64 h-56 sm:h-auto shrink-0 relative overflow-hidden bg-[#F4EFEB]">
          <Link to={`/product/${product.id}`}>
            <ImageWithFallback
              src={product.images[0]}
              alt={product.name}
              aspectRatio="aspect-auto"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fallbackText={product.name}
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isBestseller && (
              <span className="bg-[#7A1C2E] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Bestseller
              </span>
            )}
          </div>
        </div>

        {/* Content container */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8C7A70] mb-1.5">
              <span className="uppercase tracking-wider font-medium text-[#C85A32]">
                {product.categoryName}
              </span>
              <span className="text-amber-600 font-semibold flex items-center gap-1">
                ★ {product.rating} <span className="text-stone-400">({product.reviewCount})</span>
              </span>
            </div>

            <Link to={`/product/${product.id}`}>
              <h3 className="font-serif text-lg font-bold text-[#2D2A26] hover:text-[#7A1C2E] transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>


          </div>

          <div className="pt-4 mt-3 border-t border-[#F5EFEB] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-bold text-[#7A1C2E]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-stone-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className={`p-2.5 rounded-full border border-[#D8CFC4] transition-colors ${isFavorited
                    ? 'bg-[#F2D7D9] text-[#7A1C2E] border-[#7A1C2E]'
                    : 'text-stone-600 hover:text-[#7A1C2E] hover:border-[#7A1C2E]'
                  }`}
                aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => openQuickView(product)}
                className="p-2.5 rounded-full border border-[#D8CFC4] text-stone-600 hover:text-[#7A1C2E] hover:border-[#7A1C2E] transition-colors"
                aria-label="Quick View"
              >
                <Eye className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => addToCart(product, 1)}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all bg-[#7A1C2E] text-white hover:bg-[#601422] shadow-sm hover:shadow"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid layout (Default)
  return (
    <div className="bg-white border border-[#EFE8DE] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative">
      {/* Top Image area */}
      <div className="relative overflow-hidden bg-[#F4EFEB]">
        <Link to={`/product/${product.id}`} className="block overflow-hidden">
          <ImageWithFallback
            src={product.images[0]}
            alt={product.name}
            aspectRatio="aspect-square"
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            fallbackText={product.name}
          />
        </Link>

        {/* Badges on Top-Left */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isBestseller && (
            <span className="bg-[#7A1C2E] text-[#FFFDF9] text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#DFB743] text-[#2D2A26] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button on Top-Right */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 backdrop-blur-xs ${isFavorited
              ? 'bg-[#7A1C2E] text-white shadow-md'
              : 'bg-white/80 text-stone-600 hover:text-[#7A1C2E] hover:bg-white shadow-sm'
            }`}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button (hover overlay) */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto px-4">
          <button
            type="button"
            onClick={() => openQuickView(product)}
            className="w-full py-2 bg-white/95 backdrop-blur-md text-[#2D2A26] hover:text-[#7A1C2E] border border-stone-200 rounded-lg text-xs font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#8C7A70] mb-1">
            <span className="uppercase tracking-wider font-medium text-[#C85A32] truncate pr-1">
              {product.categoryName}
            </span>
            <span className="text-amber-600 font-semibold flex items-center gap-0.5 shrink-0">
              ★ {product.rating}
            </span>
          </div>

          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#2D2A26] hover:text-[#7A1C2E] transition-colors line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="pt-2 sm:pt-3 mt-2 border-t border-[#F5EFEB] flex items-center justify-between">
          <div className="flex items-baseline space-x-1 sm:space-x-1.5">
            <span className="text-sm sm:text-lg font-bold text-[#7A1C2E]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-stone-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="p-2 rounded-lg transition-all bg-[#7A1C2E] text-white hover:bg-[#601422] shadow-sm hover:scale-105"
            title="Add to Shopping Bag"
            aria-label={`Add ${product.name} to bag`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
