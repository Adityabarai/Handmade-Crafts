import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'warn');
      return;
    }

    setIsSubmitted(true);
    showToast('Thank you for subscribing to our festive newsletter!');
    setEmail('');
  };

  return (
    <section className="py-16 bg-[#FAF7F2] border-t border-[#EFE8DE] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF0F1] text-[#7A1C2E] text-xs font-semibold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#DFB743]" />
          <span>Festive Inspirations</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
          Join the Handmade Celebrations
        </h2>

        <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl mx-auto font-light leading-relaxed">
          Be the first to preview new festive collections, Diwali drops, Navratri ornaments, and exclusive artisan stories from our Mumbai studio.
        </p>

        {isSubmitted ? (
          <div className="mt-8 p-4 bg-white border border-[#E8D8CC] rounded-xl inline-flex items-center space-x-3 text-emerald-800 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium">
              You are subscribed! We will send seasonal festive updates to your inbox.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-[#D8CFC4] text-sm text-[#2D2A26] placeholder-stone-400 focus:outline-none focus:border-[#7A1C2E] focus:ring-1 focus:ring-[#7A1C2E] shadow-2xs"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-xs shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-3 text-[11px] text-stone-400">
          No spam, ever. Only handcrafted cheer and festive greetings.
        </p>
      </div>
    </section>
  );
}
