import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  AlertCircle
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CheckoutPage() {
  const { cart, cartSubtotal, clearCart } = useShop();
  const navigate = useNavigate();

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Mumbai',
    state: 'Maharashtra',
    pinCode: '',
    orderNotes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shippingCost = cartSubtotal >= 1999 || cartSubtotal === 0 ? 0 : 150;
  const orderTotal = cartSubtotal + shippingCost;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = 'Valid 10-digit mobile number is required';
    if (!formData.address.trim()) errs.address = 'Street Address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.state.trim()) errs.state = 'State is required';
    if (!formData.pinCode.trim() || formData.pinCode.length < 6)
      errs.pinCode = 'Valid 6-digit PIN code is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
      clearCart();
    }, 700);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Checkout Header Banner */}
        <div className="mb-8 border-b border-[#EFE8DE] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#7A1C2E]">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB743]" />
              <span>Bespoke Handcrafted Orders</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] mt-1">
              Checkout & Delivery Details
            </h1>
          </div>

          <div className="bg-[#FAF7F2] border border-[#DFB743]/40 text-[#7A1C2E] px-4 py-2.5 rounded-lg text-xs font-medium max-w-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#DFB743] shrink-0" />
            <span>Each festive piece is crafted with care at our Mumbai workshop.</span>
          </div>
        </div>

        {cart.length === 0 && !isSuccessModalOpen ? (
          <div className="bg-white border border-[#EFE8DE] rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
            <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
            <h2 className="font-serif text-xl font-bold text-[#2D2A26]">Your bag is currently empty</h2>
            <p className="text-xs text-stone-500">Please add products before checking out.</p>
            <Link
              to="/shop"
              className="inline-block px-5 py-2.5 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Section (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EFE8DE] shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#2D2A26] mb-6">
                Shipping & Contact Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Priyanshu Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                      errors.fullName
                        ? 'border-rose-500 focus:ring-rose-500 bg-rose-50/20'
                        : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email and Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500 bg-rose-50/20'
                          : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-600 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9820012345"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? 'border-rose-500 focus:ring-rose-500 bg-rose-50/20'
                          : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Street Address / Flat / Building <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. 402, Lotus Residency, Juhu Tara Road"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                      errors.address
                        ? 'border-rose-500 focus:ring-rose-500 bg-rose-50/20'
                        : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-rose-600 text-xs mt-1">{errors.address}</p>
                  )}
                </div>

                {/* City, State, PIN */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                      City <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                        errors.city
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                      }`}
                    />
                    {errors.city && (
                      <p className="text-rose-600 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                      State <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                        errors.state
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                      }`}
                    />
                    {errors.state && (
                      <p className="text-rose-600 text-xs mt-1">{errors.state}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                      PIN Code <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      placeholder="e.g. 400049"
                      maxLength={6}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                        errors.pinCode
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                      }`}
                    />
                    {errors.pinCode && (
                      <p className="text-rose-600 text-xs mt-1">{errors.pinCode}</p>
                    )}
                  </div>
                </div>

                {/* Order Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Order Notes & Customization Requests (Optional)
                  </label>
                  <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="E.g. Custom greeting card message, preferred festive ribbon color, specific delivery landmark..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8CFC4] text-sm text-[#2D2A26] placeholder-stone-400 focus:outline-none focus:border-[#7A1C2E] focus:ring-1 focus:ring-[#7A1C2E]"
                  />
                </div>

                {/* Submit Order Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#7A1C2E] text-white rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Placing Order...</span>
                    ) : (
                      <>
                        <span>Place Order (₹{orderTotal.toLocaleString('en-IN')})</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary Sidebar (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#EFE8DE] shadow-xs space-y-6">
              <h2 className="font-serif text-xl font-bold text-[#2D2A26] border-b border-[#F5EFEB] pb-3">
                Items in Order ({cart.length})
              </h2>

              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-center">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="w-14 h-14 rounded-lg object-cover border border-[#EAE3D9] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#2D2A26] truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Qty: {item.quantity} × ₹{item.product.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#7A1C2E]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#F5EFEB] pt-4 space-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">
                    ₹{cartSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Pan-India Delivery</span>
                  <span className="font-semibold text-emerald-700">
                    {shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}
                  </span>
                </div>
                <div className="border-t border-[#F5EFEB] pt-3 flex justify-between text-base font-bold text-[#2D2A26]">
                  <span>Total Amount</span>
                  <span className="text-[#7A1C2E]">₹{orderTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EFE8DE] text-xs text-stone-600 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#7A1C2E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Artisan Guarantee</span>
                </div>
                <p>
                  Handcrafted with care in Mumbai. Every order is inspected and bubble-packed with festive protection.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Demo Success Modal */}
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setIsSuccessModalOpen(false)}
            />
            <div className="relative bg-[#FAF7F2] rounded-2xl max-w-lg w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#EFE8DE] z-10 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#FAF0F1] border-2 border-[#7A1C2E] flex items-center justify-center text-[#7A1C2E] mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                Order Placed Successfully
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2A26] mt-1 mb-3">
                Thank you for your order!
              </h2>

              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Your order has been received successfully! Our team will contact you to confirm customizations and dispatch.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#EFE8DE] text-left text-xs text-stone-600 space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-900">Order ID:</span>
                  <span className="font-mono text-[#7A1C2E]">#RJ-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-900">Customer:</span>
                  <span>{formData.fullName || 'Valued Guest'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-900">Delivery To:</span>
                  <span>{formData.city}, {formData.state}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  onClick={() => setIsSuccessModalOpen(false)}
                  className="flex-1 py-3 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors"
                >
                  Return to Homepage
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setIsSuccessModalOpen(false)}
                  className="flex-1 py-3 bg-white border border-[#D8CFC4] text-[#2D2A26] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors"
                >
                  Browse More Crafts
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
