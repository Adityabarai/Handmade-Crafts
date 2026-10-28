import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/common/CartDrawer';
import QuickViewModal from './components/common/QuickViewModal';
import Toast from './components/common/Toast';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <Router>
      <ShopProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2A26] selection:bg-[#F2D7D9] selection:text-[#7A1C2E]">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              {/* Fallback route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />

          {/* Interactive Modals & Overlays */}
          <CartDrawer />
          <QuickViewModal />
          <Toast />
        </div>
      </ShopProvider>
    </Router>
  );
}

export default App;
