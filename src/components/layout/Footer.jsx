import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Heart,
  Globe
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, GoogleIcon } from '../common/SocialIcons';
import { categories } from '../../data/categories';

export default function Footer() {
  return (
    <footer className="bg-[#231F20] text-[#E8E2D9] pt-16 pb-8 border-t border-[#3A3430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#7A1C2E] border border-[#DFB743] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#DFB743]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2]">
                  Handmade Crafts
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#DFB743]">
                  by Rashi Jain
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Founded in September 2015 in Mumbai, India. We craft bespoke festive decor, auspicious torans, 
              handcrafted accessories, and thoughtful celebration hampers to make life's memorable moments truly extraordinary.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DFB743] shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#DFB743] shrink-0" />
                <span>hello@handmadecraftsbyrashi.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#DFB743] shrink-0" />
                <span>+91 98200 XXXXX</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3">
              <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3">
                Connect With Our Studio
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/handmade_crafts_rj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800/80 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#7A1C2E] hover:border-[#DFB743] transition-colors"
                  aria-label="Instagram profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800/80 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#7A1C2E] hover:border-[#DFB743] transition-colors"
                  aria-label="Facebook page"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800/80 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#7A1C2E] hover:border-[#DFB743] transition-colors"
                  aria-label="YouTube channel"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800/80 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#7A1C2E] hover:border-[#DFB743] transition-colors"
                  aria-label="Google Business Profile"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Shop Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-[#FAF7F2] font-semibold tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link to="/" className="hover:text-[#DFB743] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#DFB743] transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFB743] transition-colors">
                  Our Story (About Us)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#DFB743] transition-colors">
                  Custom Orders & Contact
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-[#DFB743] transition-colors">
                  Saved Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#DFB743] transition-colors">
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-[#FAF7F2] font-semibold tracking-wide">
              Festive Collections
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${cat.slug}`}
                    className="hover:text-[#DFB743] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories & Custom Orders */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-[#FAF7F2] font-semibold tracking-wide">
              Gifting & More
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              {categories.slice(5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${cat.slug}`}
                    className="hover:text-[#DFB743] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-[#DFB743] hover:underline font-medium"
                >
                  Bulk & Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 text-center sm:text-left">
          <p className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Handmade Crafts by Rashi Jain. All rights reserved.</span>
            <span className="hidden md:inline">• Handcrafted in Mumbai</span>
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-stone-400">
              Handcrafted with Love
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
