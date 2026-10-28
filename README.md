# Handmade Crafts by Rashi Jain — Client Demo Website

> **Premium Indian Festive Décor, Torans, Navratri Accessories & Celebration Gifting Boutique**  
> Established September 2015 | Based in Mumbai, Maharashtra, India.

---

## 🌸 About the Project

This is a premium, fully responsive, frontend-only static e-commerce demo website built for **Handmade Crafts by Rashi Jain**. 

The client presentation demo showcases:
- **Artisan Boutique Aesthetic**: Warm ivory & cream backgrounds (`#FAF7F2`), deep festive maroon (`#7A1C2E`), muted terracotta (`#C85A32`), elegant gold accents (`#DFB743`), and Cormorant Garamond luxury serif typography.
- **Complete Shopping Experience**: Product browsing, category filtering, search, sorting (featured, newest, price low/high), availability filter, quantity controls, wishlist toggles, and interactive quick-view modal.
- **Cart & Wishlist Persistence**: Saved items and shopping bag contents persist seamlessly in `localStorage`.
- **Slide-out Cart Drawer & Full Cart Page**: Real-time subtotal calculation, free shipping threshold indicator (Orders above ₹1,999), item removal, and quantity adjustments.
- **Interactive Demo Checkout**: Validated checkout form (Name, Email, Mobile, Address, PIN code, Order notes) with a clear preview modal ensuring no real payments are collected.
- **Brand Story & Artisan Heritage**: Celebrates 9+ years of craftsmanship since September 2015, highlighting Mumbai roots, bespoke customizations, and Indian festive occasions.

---

## 🛠️ Technology Stack

- **React.js 19**
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router 7** (`react-router-dom`)
- **Lucide React** icons + custom SVG brand icons
- **LocalStorage API** for state persistence

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready assets will be located in the `/dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
Handmade Crafts RJ/
├── public/
│   ├── logo-icon.svg          # Boutique floral lotus brand SVG
│   └── favicon.svg
├── src/
│   ├── assets/                # Static assets & media
│   ├── components/
│   │   ├── common/
│   │   │   ├── CartDrawer.jsx       # Slide-out interactive cart drawer
│   │   │   ├── ImageWithFallback.jsx# Image renderer with skeleton & graceful SVG fallback
│   │   │   ├── ProductCard.jsx      # Grid & list product card with quick view and stock badge
│   │   │   ├── QuickViewModal.jsx   # Accessible quick view dialog with gallery & quantity
│   │   │   ├── ScrollToTop.jsx      # Auto-scroll on route navigation
│   │   │   ├── SocialIcons.jsx      # Clean SVG brand social icons
│   │   │   └── Toast.jsx            # Toast alert notifications
│   │   ├── home/
│   │   │   ├── AnnouncementBar.jsx  # Slim festive ticker
│   │   │   ├── BestsellersSection.jsx # Bestsellers grid with filters
│   │   │   ├── BrandStorySection.jsx# Brand heritage since Sept 2015
│   │   │   ├── CategorySection.jsx  # 8 image-based category cards
│   │   │   ├── HeroSection.jsx      # Split layout hero with boutique badges
│   │   │   ├── InstagramFeed.jsx    # 6-image curated studio feed
│   │   │   ├── NewsletterSection.jsx# Interactive festive subscription box
│   │   │   ├── OccasionsSection.jsx # 6 celebration cards (Diwali, Navratri, Weddings...)
│   │   │   └── WhyChooseUsSection.jsx# 4 verified artisan quality cards
│   │   └── layout/
│   │       ├── Header.jsx           # Sticky nav, search bar, category dropdown, badges
│   │       └── Footer.jsx           # Links, categories, contact placeholders & copyright
│   ├── context/
│   │   └── ShopContext.jsx          # Cart, Wishlist, Search, QuickView & Toast state
│   ├── data/
│   │   ├── categories.js            # 8 official product categories
│   │   ├── occasions.js             # 6 festive occasions
│   │   └── products.js              # 16 static craft products with demo prices & details
│   ├── pages/
│   │   ├── AboutPage.jsx            # Brand history, philosophy, Mumbai workshop
│   │   ├── CartPage.jsx             # Dedicated shopping bag page
│   │   ├── CheckoutPage.jsx         # Demo checkout with form validation & preview modal
│   │   ├── ContactPage.jsx          # Inquiry form, FAQs, contact details
│   │   ├── HomePage.jsx             # Homepage assembling 8 sections
│   │   ├── ProductDetailPage.jsx    # Large gallery, specifications, tabs, related items
│   │   ├── ShopPage.jsx             # Catalog with search, filters, sorting & view toggle
│   │   └── WishlistPage.jsx         # Saved items page
│   ├── App.jsx                      # App router & providers
│   ├── index.css                    # Tailwind v4 import & custom styles
│   └── main.jsx
├── index.html                       # Google fonts (Cormorant Garamond + Plus Jakarta Sans)
├── package.json
└── vite.config.js                   # Vite + Tailwind plugin config
```

---

## 🎨 Sample Products Included (As Specified in Brief)

1. **Festival Decor:**
   - Full Door Size Pom Pom Hanging — ₹2,000 *(In Stock)*
   - Candle Holder Pair of 2 — ₹500 *(In Stock)*
   - Subh Labh — ₹350 *(Out of Stock — with custom order inquiry option)*
   - Golden Lotus Diya Platter — ₹1,350 *(In Stock)*
2. **Navratri Accessories:**
   - Navratri Rings — ₹250 *(In Stock)*
   - Cowri Hair Clips — ₹120 *(In Stock)*
   - Multicolor Cuffs — ₹1,200 *(In Stock)*
3. **Toran:**
   - Floral Toran — ₹2,400 *(In Stock)*
   - Toran — ₹900 *(In Stock)*
4. **Rangoli Collection:**
   - Royal Kundan & Pearl Rangoli Mats — ₹1,450 *(In Stock)*
5. **Gifting & Hampers:**
   - Handcrafted Wedding Trousseau Hamper — ₹3,500 *(In Stock)*
   - Pastel Baby Shower Welcome Hamper — ₹2,800 *(In Stock)*
   - Luxe Diwali Celebration Gift Box — ₹2,250 *(In Stock)*
6. **Wedding & Celebration Gifts:**
   - Hand-embroidered Shagun Envelope Set — ₹650 *(In Stock)*
   - Velvet Gota Patti Mehendi Favors (Set of 10) — ₹1,800 *(In Stock)*
7. **Long Wall / Door Hangings:**
   - Brass & Gota Patti Hanging Bells — ₹1,100 *(In Stock)*

---

## 📝 Client Customization Note

To customize contact numbers, official studio email address, physical address, and social links prior to live production deployment, edit the constants in:
- `src/pages/ContactPage.jsx` (`CLIENT_INFO` constant)
- `src/components/layout/Footer.jsx`
- `src/components/home/InstagramFeed.jsx` (`INSTAGRAM_PROFILE_URL` constant)
- `src/data/products.js` (for prices, product titles, descriptions, and stock statuses)

---

© 2015–2026 Handmade Crafts by Rashi Jain. Handcrafted with love in Mumbai, India.
