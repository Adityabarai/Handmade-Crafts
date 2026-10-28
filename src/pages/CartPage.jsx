import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ImageWithFallback from '../components/common/ImageWithFallback';

const FREE_SHIPPING_THRESHOLD = 1999;

export default function CartPage() {
  const { cart, cartCount, cartSubtotal, updateQuantity, removeFromCart, clearCart } = useShop();
  const navigate = useNavigate();

  const progressPercent = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-stone-500 mb-6">
          <Link to="/" className="hover:text-[#7A1C2E]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/shop" className="hover:text-[#7A1C2E]">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#2D2A26] font-medium">Shopping Bag</span>
        </nav>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mb-8">
          Your Shopping Bag ({cartCount} {cartCount === 1 ? 'item' : 'items'})
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white border border-[#EFE8DE] rounded-2xl p-12 text-center max-w-lg mx-auto space-y-5 my-8">
            <div className="w-20 h-20 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#7A1C2E] mx-auto">
              <ShoppingBag className="w-10 h-10 stroke-1" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-bold text-[#2D2A26]">
                Your bag is currently empty
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed font-light">
                Discover our unique handcrafted torans, festive diyas, and bespoke gift hampers to add celebration to your home.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm gap-2"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items List (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Free delivery banner */}
              <div className="bg-white p-4 rounded-xl border border-[#EFE8DE] text-xs">
                {remainingForFree === 0 ? (
                  <p className="text-emerald-700 font-medium flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#DFB743]" />
                    <span>You've unlocked <strong>FREE Delivery</strong> across India!</span>
                  </p>
                ) : (
                  <p className="text-stone-600">
                    Add <strong className="text-[#7A1C2E]">₹{remainingForFree.toLocaleString('en-IN')}</strong> more for <strong>FREE Delivery</strong>
                  </p>
                )}
                <div className="w-full bg-[#EFE8DE] h-2 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-[#7A1C2E] h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items Card */}
              <div className="bg-white rounded-2xl border border-[#EFE8DE] divide-y divide-[#F5EFEB] overflow-hidden">
                {cart.map((item) => (
                  <div key={item.product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-4 items-center w-full sm:w-auto">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#EAE3D9] bg-[#F4EFEB]">
                        <ImageWithFallback
                          src={item.product.images[0]}
                          alt={item.product.name}
                          aspectRatio="aspect-square"
                          className="w-full h-full object-cover"
                          fallbackText={item.product.name}
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C85A32]">
                          {item.product.categoryName}
                        </span>
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-serif text-base sm:text-lg font-bold text-[#2D2A26] hover:text-[#7A1C2E] transition-colors block line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm font-semibold text-[#7A1C2E] mt-1">
                          ₹{item.product.price.toLocaleString('en-IN')} each
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                      {/* Quantity selector */}
                      <div className="flex items-center border border-[#D8CFC4] rounded-lg bg-[#FAF7F2]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-2 text-stone-600 hover:text-[#7A1C2E]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-[#2D2A26]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-2 text-stone-600 hover:text-[#7A1C2E]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="text-base font-bold text-[#7A1C2E] min-w-20 text-right">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-stone-400 hover:text-rose-600 p-1.5 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <Link
                  to="/shop"
                  className="text-xs font-semibold text-[#7A1C2E] hover:underline flex items-center gap-1"
                >
                  ← Continue Shopping
                </Link>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-stone-400 hover:text-rose-600"
                >
                  Clear Bag
                </button>
              </div>
            </div>

            {/* Order Summary (4 cols) */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#EFE8DE] shadow-xs space-y-5 sticky top-24">
              <h2 className="font-serif text-xl font-bold text-[#2D2A26] border-b border-[#F5EFEB] pb-3">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#2D2A26]">
                    ₹{cartSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="text-emerald-700 font-medium">
                    {cartSubtotal >= FREE_SHIPPING_THRESHOLD ? 'FREE' : '₹150'}
                  </span>
                </div>

                <div className="flex justify-between text-xs text-stone-400">
                  <span>GST (Included)</span>
                  <span>₹0.00</span>
                </div>

                <div className="border-t border-[#F5EFEB] pt-3 flex justify-between text-base font-bold text-[#2D2A26]">
                  <span>Total</span>
                  <span className="text-[#7A1C2E]">
                    ₹{(
                      cartSubtotal + (cartSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 150)
                    ).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="w-full py-3.5 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-xs text-stone-400 space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-stone-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#DFB743]" />
                  <span>100% Secure Checkout</span>
                </div>
                <p>Authentic handmade crafts direct from our Mumbai studio.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
