import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import ImageWithFallback from './ImageWithFallback';

const FREE_SHIPPING_THRESHOLD = 1999;

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    updateQuantity,
    removeFromCart
  } = useShop();

  const navigate = useNavigate();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsCartOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleViewBag = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#EFE8DE] animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-[#EFE8DE] flex items-center justify-between bg-white">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#7A1C2E]" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#2D2A26]">
                Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-stone-500 hover:text-[#7A1C2E] hover:bg-[#F4EFEB] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#FFFDF9] px-5 py-3 border-b border-[#EFE8DE] text-xs">
            {remainingForFree === 0 ? (
              <p className="text-emerald-700 font-medium flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#DFB743]" />
                <span>Congratulations! You qualify for <strong>FREE Delivery</strong> across India.</span>
              </p>
            ) : (
              <p className="text-stone-600">
                Add <strong className="text-[#7A1C2E]">₹{remainingForFree.toLocaleString('en-IN')}</strong> more for <strong>FREE Delivery</strong>
              </p>
            )}
            <div className="w-full bg-[#EFE8DE] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#7A1C2E] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#F4EFEB] border border-[#E8D8CC] flex items-center justify-center text-[#7A1C2E]">
                  <ShoppingBag className="w-10 h-10 stroke-1" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#2D2A26]">
                    Your bag is empty
                  </h3>
                  <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                    Explore our curated festive torans, candle holders, and handmade gifts.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="px-6 py-2.5 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 bg-white p-3 rounded-xl border border-[#EFE8DE] shadow-xs hover:border-[#D8CFC4] transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#EAE3D9] bg-[#F4EFEB]">
                    <ImageWithFallback
                      src={item.product.images[0]}
                      alt={item.product.name}
                      aspectRatio="aspect-square"
                      className="w-full h-full object-cover"
                      fallbackText={item.product.name}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm font-bold text-[#2D2A26] hover:text-[#7A1C2E] line-clamp-1 leading-snug"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#C85A32] font-medium mt-0.5">
                        {item.product.categoryName}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity */}
                      <div className="flex items-center border border-[#D8CFC4] rounded-md bg-[#FAF7F2]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1 text-stone-600 hover:text-[#7A1C2E]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-[#2D2A26]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1 text-stone-600 hover:text-[#7A1C2E]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Price */}
                      <div className="text-right">
                        <span className="text-sm font-bold text-[#7A1C2E]">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#EFE8DE] bg-white space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between items-center text-base font-bold text-[#2D2A26]">
                  <span className="font-serif">Subtotal</span>
                  <span className="text-[#7A1C2E]">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-stone-500">
                  <span>Shipping & Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full py-3 bg-[#7A1C2E] text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleViewBag}
                  className="w-full py-2.5 bg-stone-100 text-[#2D2A26] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-stone-200 transition-colors text-center"
                >
                  View Full Cart Page
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-stone-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Handcrafted with precision & carefully packed in Mumbai</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
