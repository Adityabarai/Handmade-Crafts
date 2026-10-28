import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import ImageWithFallback from './ImageWithFallback';

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addToCart, toggleWishlist, isInWishlist } = useShop();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
  }, [quickViewProduct]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeQuickView();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeQuickView]);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeQuickView}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF7F2] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#EFE8DE] z-10 max-h-[90vh] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 text-stone-700 hover:text-[#7A1C2E] flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Images */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center bg-white border-b md:border-b-0 md:border-r border-[#EFE8DE]">
          <div className="relative rounded-xl overflow-hidden mb-3 aspect-square bg-[#F4EFEB]">
            <ImageWithFallback
              src={quickViewProduct.images[selectedImage] || quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              aspectRatio="aspect-square"
              className="w-full h-full object-cover"
              fallbackText={quickViewProduct.name}
            />
          </div>

          {quickViewProduct.images.length > 1 && (
            <div className="flex gap-2 justify-center">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#7A1C2E] scale-105' : 'border-stone-200 opacity-70'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8C7A70] mb-2">
              <span className="uppercase tracking-widest font-semibold text-[#C85A32]">
                {quickViewProduct.categoryName}
              </span>
              <span className="text-amber-600 font-semibold flex items-center gap-1">
                ★ {quickViewProduct.rating} ({quickViewProduct.reviewCount} reviews)
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[#2D2A26] leading-tight">
              {quickViewProduct.name}
            </h2>

            {/* Price */}
            <div className="mt-3 flex items-baseline space-x-3">
              <span className="text-2xl font-bold text-[#7A1C2E]">
                ₹{quickViewProduct.price.toLocaleString('en-IN')}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-stone-400 line-through">
                  ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {quickViewProduct.originalPrice && (
                <span className="text-xs bg-[#F2D7D9] text-[#7A1C2E] px-2 py-0.5 rounded font-semibold">
                  Save ₹{(quickViewProduct.originalPrice - quickViewProduct.price).toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {quickViewProduct.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-6 mt-4 border-t border-[#EFE8DE] space-y-4">
            <div className="flex items-center gap-3">
              {/* Quantity Control */}
              <div className="flex items-center border border-[#D8CFC4] rounded-lg bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-stone-600 hover:text-[#7A1C2E] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-semibold text-[#2D2A26]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-stone-600 hover:text-[#7A1C2E] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Bag */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-2.5 px-4 bg-[#7A1C2E] text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>

              {/* Wishlist */}
              <button
                type="button"
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-2.5 rounded-lg border border-[#D8CFC4] transition-colors ${
                  isFavorited
                    ? 'bg-[#F2D7D9] text-[#7A1C2E] border-[#7A1C2E]'
                    : 'text-stone-600 hover:text-[#7A1C2E]'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="text-center">
              <Link
                to={`/product/${quickViewProduct.id}`}
                onClick={closeQuickView}
                className="inline-flex items-center text-xs font-semibold text-[#7A1C2E] hover:underline gap-1"
              >
                <span>View Full Product Details & Dimensions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
