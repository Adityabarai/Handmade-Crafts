import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/common/ProductCard';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-stone-500 mb-6">
          <Link to="/" className="hover:text-[#7A1C2E]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#2D2A26] font-medium">My Wishlist</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26]">
              Saved Wishlist ({wishlist.length})
            </h1>
            <p className="text-sm text-stone-600 mt-1 font-light">
              Your favorite handcrafted torans, festive decor, and celebratory keepsakes.
            </p>
          </div>

          {wishlist.length > 0 && (
            <Link
              to="/shop"
              className="text-xs font-semibold text-[#7A1C2E] hover:underline flex items-center gap-1"
            >
              <span>Explore More Creations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white border border-[#EFE8DE] rounded-2xl p-12 text-center max-w-md mx-auto space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#7A1C2E] mx-auto">
              <Heart className="w-8 h-8 stroke-1" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif text-xl font-bold text-[#2D2A26]">
                Your wishlist is empty
              </h2>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                Click the heart icon on any product to save it here for festive gifting and future orders.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block px-6 py-2.5 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors"
            >
              Discover Handcrafted Pieces
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
