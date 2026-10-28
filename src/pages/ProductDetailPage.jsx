import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Heart,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  MessageCircle,
  Gift,
  Check,
  Share2
} from 'lucide-react';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import ImageWithFallback from '../components/common/ImageWithFallback';
import ProductCard from '../components/common/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, showToast } = useShop();

  const product = products.find((p) => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details'); // details, craftsmanship, gifting

  // Reset image index when product id changes
  useEffect(() => {
    setActiveImageIndex(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="bg-[#FAF7F2] min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-[#2D2A26]">Product Not Found</h2>
        <p className="text-stone-600 mt-2">The handcrafted item you're looking for doesn't exist.</p>
        <Link
          to="/shop"
          className="mt-6 px-6 py-2.5 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#601422]"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);

  // Related products from same category or random
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough related in same category, fill with others
  const fallbackRelated =
    relatedProducts.length < 4
      ? [
          ...relatedProducts,
          ...products.filter((p) => p.id !== product.id && !relatedProducts.some((r) => r.id === p.id)),
        ].slice(0, 4)
      : relatedProducts;

  const handleBuyNow = () => {
    addToCart(product, quantity, false);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Take a look at this handcrafted creation: ${product.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  return (
    <div className="bg-[#FAF7F2] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-stone-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#7A1C2E] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <Link to="/shop" className="hover:text-[#7A1C2E] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-[#7A1C2E] transition-colors"
          >
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="text-[#2D2A26] font-medium line-clamp-1">
            {product.name}
          </span>
        </nav>

        {/* Product Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#EFE8DE] shadow-sm aspect-square">
              <ImageWithFallback
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                aspectRatio="aspect-square"
                className="w-full h-full object-cover"
                fallbackText={product.name}
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.isBestseller && (
                  <span className="bg-[#7A1C2E] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 shadow-md ${
                  isFavorited
                    ? 'bg-[#7A1C2E] text-white'
                    : 'bg-white/90 text-stone-700 hover:text-[#7A1C2E] hover:bg-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#7A1C2E] ring-2 ring-[#7A1C2E]/20 scale-102'
                        : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Actions & Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-[#8C7A70]">
                <Link
                  to={`/shop?category=${product.category}`}
                  className="uppercase tracking-widest font-semibold text-[#C85A32] hover:underline"
                >
                  {product.categoryName}
                </Link>
                <span className="text-amber-600 font-semibold flex items-center gap-1">
                  ★ {product.rating} <span className="text-stone-400">({product.reviewCount} reviews)</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] leading-tight">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline space-x-3 pt-1">
                <span className="text-3xl font-bold text-[#7A1C2E]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-stone-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs bg-[#F2D7D9] text-[#7A1C2E] px-2.5 py-1 rounded-full font-semibold">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Key Attributes Box */}
              <div className="bg-white p-4 rounded-xl border border-[#EFE8DE] space-y-2 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#DFB743] shrink-0 mt-0.5" />
                  <span>
                    <strong>Craft:</strong> {product.details?.craftsmanship || '100% Handcrafted by skilled artisans in Mumbai'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#7A1C2E] shrink-0 mt-0.5" />
                  <span>
                    <strong>Dimensions:</strong> {product.details?.dimensions || 'Handcrafted standard festive size'}
                  </span>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-[#D8CFC4] rounded-lg bg-white h-12">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 text-stone-600 hover:text-[#7A1C2E] h-full flex items-center"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-[#2D2A26]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 text-stone-600 hover:text-[#7A1C2E] h-full flex items-center"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => addToCart(product, quantity)}
                    className="flex-1 h-12 px-6 bg-[#7A1C2E] text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>

                {/* Buy Now Button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full h-12 bg-[#DFB743] text-[#2D2A26] rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Buy Now (Instant Checkout)</span>
                </button>
              </div>

              {/* Utility Badges */}
              <div className="pt-4 border-t border-[#EFE8DE] grid grid-cols-2 gap-3 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#7A1C2E]" />
                  <span>Pan-India Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#7A1C2E]" />
                  <span>Festive Gift Packaging</span>
                </div>
              </div>
            </div>

            {/* Share link */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleShare}
                className="text-xs text-stone-500 hover:text-[#7A1C2E] flex items-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share this handcrafted design</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Information, Craftsmanship, Care & Gifting */}
        <div className="mt-16 bg-white rounded-2xl border border-[#EFE8DE] p-6 sm:p-8">
          <div className="flex border-b border-[#EFE8DE] gap-6 text-sm font-semibold">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 transition-colors relative ${
                activeTab === 'details'
                  ? 'text-[#7A1C2E] border-b-2 border-[#7A1C2E]'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Materials & Details
            </button>
            <button
              onClick={() => setActiveTab('craftsmanship')}
              className={`pb-3 transition-colors relative ${
                activeTab === 'craftsmanship'
                  ? 'text-[#7A1C2E] border-b-2 border-[#7A1C2E]'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Artisan Craftsmanship
            </button>
            <button
              onClick={() => setActiveTab('gifting')}
              className={`pb-3 transition-colors relative ${
                activeTab === 'gifting'
                  ? 'text-[#7A1C2E] border-b-2 border-[#7A1C2E]'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Gifting & Festive Notes
            </button>
          </div>

          <div className="pt-6 text-sm text-stone-600 leading-relaxed font-light">
            {activeTab === 'details' && (
              <div className="space-y-4 max-w-3xl">
                <p>
                  <strong>Materials Used:</strong> {product.details?.materials || 'Premium woolen yarn, mirror discs, brass bells, and auspicious festive threads'}
                </p>
                <p>
                  <strong>Dimensions & Fit:</strong> {product.details?.dimensions || 'Standard artisanal festive dimensions'}
                </p>
                <p>
                  <strong>Care Instructions:</strong> {product.details?.care || 'Dust gently with dry microfiber cloth. Store in cloth bag when not in use.'}
                </p>
              </div>
            )}

            {activeTab === 'craftsmanship' && (
              <div className="space-y-4 max-w-3xl">
                <p>
                  At <strong>Handmade Crafts by Rashi Jain</strong>, we hold fast to traditional Indian handicrafts. Every bead, mirror disc, brass bell, and pom-pom is individually arranged by hand.
                </p>
                <p>
                  Because these items are genuine handcrafted goods rather than factory-molded plastics, slight variations in color, knotting, or texture are inherent to their unique artisanal charm.
                </p>
              </div>
            )}

            {activeTab === 'gifting' && (
              <div className="space-y-4 max-w-3xl">
                <p>
                  Planning for a wedding, baby shower, or Diwali celebration? All our creations come packaged in protective festive wraps. Custom greeting tags with handwritten personal messages can be included upon request.
                </p>
                <p>
                  For corporate gifting or bulk wedding favors, please visit our <Link to="/contact" className="text-[#7A1C2E] underline font-semibold">Contact Page</Link> for tailored packaging and special bridal discounts.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              You May Also Love
            </h2>
            <Link
              to="/shop"
              className="text-xs sm:text-sm font-semibold text-[#7A1C2E] hover:underline"
            >
              View Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {fallbackRelated.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
