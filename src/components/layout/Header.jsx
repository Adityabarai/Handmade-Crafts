import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingBag,
  Heart,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { categories } from '../../data/categories';
import AnnouncementBar from './AnnouncementBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);

  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery
  } = useShop();

  const navigate = useNavigate();

  // Handle sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#EFE8DE]'
            : 'bg-[#FAF7F2] py-4 border-b border-[#EFE8DE]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1.5 sm:gap-4">
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden shrink-0">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1.5 sm:p-2 text-[#2D2A26] hover:text-[#7A1C2E] rounded-md transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group text-left min-w-0 shrink">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#7A1C2E] to-[#99243A] p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#7A1C2E]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#DFB743]" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="#DFB743" strokeWidth="3" strokeDasharray="3 3"/>
                    <path d="M50 20 C54 32, 58 40, 50 56 C42 40, 46 32, 50 20 Z" fill="#F4E8D1"/>
                    <path d="M50 24 C53 33, 56 39, 50 50 C44 39, 47 33, 50 24 Z" fill="#DFB743"/>
                    <path d="M30 35 C42 40, 48 45, 50 56 C40 50, 32 45, 30 35 Z" fill="#F4E8D1"/>
                    <path d="M70 35 C58 40, 52 45, 50 56 C60 50, 68 45, 70 35 Z" fill="#F4E8D1"/>
                    <circle cx="50" cy="57" r="4" fill="#DFB743"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-sm sm:text-2xl font-bold tracking-tight text-[#7A1C2E] leading-tight truncate group-hover:text-[#5A1220] transition-colors">
                  Handmade Crafts
                </span>
                <span className="text-[8px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium text-[#C85A32] truncate mt-0.5">
                  by Rashi Jain
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-[#4A4540]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors hover:text-[#7A1C2E] relative py-1 ${
                    isActive ? 'text-[#7A1C2E] font-semibold' : ''
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `transition-colors hover:text-[#7A1C2E] relative py-1 ${
                    isActive ? 'text-[#7A1C2E] font-semibold' : ''
                  }`
                }
              >
                Shop All
              </NavLink>

              {/* Categories Mega Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  onMouseEnter={() => setIsCategoryOpen(true)}
                  className="flex items-center space-x-1 py-1 hover:text-[#7A1C2E] transition-colors focus:outline-none"
                >
                  <span>Categories</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCategoryOpen ? 'rotate-180 text-[#7A1C2E]' : ''
                    }`}
                  />
                </button>

                {isCategoryOpen && (
                  <div
                    onMouseLeave={() => setIsCategoryOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] mt-2 bg-[#FFFFFF] border border-[#EFE8DE] shadow-2xl rounded-xl p-5 grid grid-cols-2 gap-3 transition-all animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  >
                    <div className="col-span-2 pb-2 mb-1 border-b border-[#F4EFEB] flex justify-between items-center">
                      <span className="text-xs uppercase font-bold tracking-wider text-[#7A1C2E]">
                        Handcrafted Collections
                      </span>
                      <Link
                        to="/shop"
                        onClick={() => setIsCategoryOpen(false)}
                        className="text-xs text-[#C85A32] hover:underline flex items-center gap-1 font-semibold"
                      >
                        Browse all ({categories.length}) <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/shop?category=${cat.slug}`}
                        onClick={() => setIsCategoryOpen(false)}
                        className="flex items-center p-2 rounded-lg hover:bg-[#FAF7F2] group transition-colors"
                      >
                        <div className="w-10 h-10 rounded-md overflow-hidden shrink-0 mr-3 border border-[#EAE3D9]">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#2D2A26] group-hover:text-[#7A1C2E] transition-colors">
                            {cat.name}
                          </p>
                          <p className="text-[10px] text-[#8C7A70] line-clamp-1">
                            {cat.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors hover:text-[#7A1C2E] relative py-1 ${
                    isActive ? 'text-[#7A1C2E] font-semibold' : ''
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors hover:text-[#7A1C2E] relative py-1 ${
                    isActive ? 'text-[#7A1C2E] font-semibold' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-1 sm:space-x-4 shrink-0">
              {/* Search Toggle */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 sm:p-2 text-[#4A4540] hover:text-[#7A1C2E] hover:bg-[#F5EFEB] rounded-full transition-colors relative"
                aria-label="Search items"
              >
                <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className="p-1.5 sm:p-2 text-[#4A4540] hover:text-[#7A1C2E] hover:bg-[#F5EFEB] rounded-full transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#C85A32] text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="p-1.5 sm:p-2 text-[#4A4540] hover:text-[#7A1C2E] hover:bg-[#F5EFEB] rounded-full transition-colors relative group"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#7A1C2E] text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Quick Search Dropdown Bar */}
          {isSearchOpen && (
            <div className="pt-3 pb-2 border-t border-[#EFE8DE] mt-3 animate-in fade-in duration-200">
              <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto flex items-center">
                <Search className="w-5 h-5 text-stone-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search torans, candle holders, Navratri cuffs, hampers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-24 py-2.5 rounded-full bg-white border border-[#D8CFC4] text-sm text-[#2D2A26] placeholder-stone-400 focus:outline-none focus:border-[#7A1C2E] focus:ring-1 focus:ring-[#7A1C2E] shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-3.5 py-1.5 bg-[#7A1C2E] text-white text-xs font-semibold rounded-full hover:bg-[#601422] transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-[#FAF7F2] h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Mobile Header */}
            <div className="p-4 border-b border-[#EFE8DE] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#7A1C2E] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#DFB743]" />
                </div>
                <span className="font-serif font-bold text-[#7A1C2E] text-base">
                  Handmade Crafts
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-stone-600 hover:text-[#7A1C2E]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="p-4 space-y-3 flex-1">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-lg hover:bg-[#EFE8DE] text-[#2D2A26]"
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-lg hover:bg-[#EFE8DE] text-[#2D2A26]"
              >
                Shop All
              </NavLink>

              {/* Mobile Categories Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg hover:bg-[#EFE8DE] text-[#2D2A26]"
                >
                  <span>Categories</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileCategoryOpen ? 'rotate-180 text-[#7A1C2E]' : ''
                    }`}
                  />
                </button>

                {mobileCategoryOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1.5 border-l-2 border-[#D4AF37] ml-3 mt-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/shop?category=${cat.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1.5 text-xs text-[#5A544E] hover:text-[#7A1C2E]"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-lg hover:bg-[#EFE8DE] text-[#2D2A26]"
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-lg hover:bg-[#EFE8DE] text-[#2D2A26]"
              >
                Contact
              </NavLink>

              <div className="pt-4 border-t border-[#EFE8DE] mt-4 space-y-2">
                <Link
                  to="/wishlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-[#EFE8DE] text-[#2D2A26]"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#C85A32]" /> Wishlist
                  </span>
                  <span className="text-xs bg-[#F2D7D9] text-[#7A1C2E] px-2 py-0.5 rounded-full font-bold">
                    {wishlist.length}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-[#EFE8DE] text-[#2D2A26]"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#7A1C2E]" /> Shopping Bag
                  </span>
                  <span className="text-xs bg-[#7A1C2E] text-white px-2 py-0.5 rounded-full font-bold">
                    {cartCount}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Footer note */}
            <div className="p-4 border-t border-[#EFE8DE] bg-[#F5EFEB] text-xs text-[#8C7A70] text-center">
              <p className="font-serif italic text-sm text-[#7A1C2E]">
                "Little Details. Beautiful Celebrations."
              </p>
              <p className="mt-1">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
