import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, GoogleIcon } from '../components/common/SocialIcons';
import { useShop } from '../context/ShopContext';

/**
 * CLIENT DATA INTEGRATION NOTE:
 * The contact numbers, official studio email, precise workshop street address,
 * and verified social media handles below are demo placeholders.
 * They must be replaced with the client's actual contact information prior to live production deployment.
 */
const CLIENT_INFO = {
  cityLocation: 'Mumbai, Maharashtra, India',
  emailPlaceholder: 'hello@handmadecraftsbyrashi.com',
  phonePlaceholder: '+91 98XXX XXXXX',
  instagramUrl: 'https://www.instagram.com/handmade_crafts_rj/',
  facebookUrl: 'https://facebook.com',
  youtubeUrl: 'https://youtube.com',
  mapsUrl: 'https://maps.google.com',
};

export default function ContactPage() {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Festive Decor Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email';
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = 'Please provide a valid 10-digit mobile number';
    if (!formData.message.trim())
      errs.message = 'Please provide your inquiry details or requirements';
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
      setIsSubmitted(true);
      showToast('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Festive Decor Inquiry',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#7A1C2E]">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB743]" />
            <span>Get in Touch with Rashi Jain</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2D2A26] tracking-tight">
            Contact & Custom Inquiries
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Have questions about a bespoke festive toran, bridal trousseau packaging, or wedding favors? We’d love to craft something special for you.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EFE8DE] shadow-xs space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#2D2A26]">
              Studio Information
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Our handcrafted pieces are designed and assembled in Mumbai, Maharashtra, and dispatched across India with love.
            </p>

            <div className="space-y-4 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#7A1C2E] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-stone-900">Studio Location</span>
                  <span>{CLIENT_INFO.cityLocation}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#7A1C2E] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-stone-900">Email Inquiries</span>
                  <span>{CLIENT_INFO.emailPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF0F1] flex items-center justify-center text-[#7A1C2E] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-stone-900">Mobile / WhatsApp</span>
                  <span>{CLIENT_INFO.phonePlaceholder}</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-[#F5EFEB] space-y-3">
              <span className="text-xs uppercase font-semibold text-stone-500 tracking-wider block">
                Connect Across Platforms
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={CLIENT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D8CFC4] flex items-center justify-center text-stone-700 hover:text-white hover:bg-[#7A1C2E] hover:border-[#7A1C2E] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={CLIENT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D8CFC4] flex items-center justify-center text-stone-700 hover:text-white hover:bg-[#7A1C2E] hover:border-[#7A1C2E] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={CLIENT_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D8CFC4] flex items-center justify-center text-stone-700 hover:text-white hover:bg-[#7A1C2E] hover:border-[#7A1C2E] transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={CLIENT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D8CFC4] flex items-center justify-center text-stone-700 hover:text-white hover:bg-[#7A1C2E] hover:border-[#7A1C2E] transition-colors"
                  aria-label="Google Business Profile"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EFE8DE] shadow-xs">
            <h2 className="font-serif text-2xl font-bold text-[#2D2A26] mb-2">
              Send an Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              Fill out the form below and we will get back to you shortly.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-[#FAF0F1] border border-[#E8B4B8] rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#7A1C2E] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#2D2A26]">
                  Thank you for reaching out!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Your inquiry has been received. Our team will connect with you directly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 bg-[#7A1C2E] text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Mehta"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500 bg-rose-50/20'
                        : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-rose-600 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email and Phone */}
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
                      placeholder="e.g. ananya@example.com"
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
                      placeholder="e.g. 9820198765"
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

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8CFC4] text-sm text-[#2D2A26] bg-white focus:outline-none focus:border-[#7A1C2E] focus:ring-1 focus:ring-[#7A1C2E]"
                  >
                    <option value="Festive Decor Inquiry">Festive Decor Inquiry</option>
                    <option value="Custom Toran Dimension">Custom Toran Dimension</option>
                    <option value="Navratri Jewelry & Bulk Order">Navratri Jewelry & Bulk Order</option>
                    <option value="Wedding & Trousseau Hamper">Wedding & Trousseau Hamper</option>
                    <option value="Corporate / Bulk Festive Gifting">Corporate / Bulk Festive Gifting</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#2D2A26] uppercase tracking-wider mb-1.5">
                    Message / Specifications <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the occasion, preferred colors, quantity, or specific delivery date needed..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2D2A26] focus:outline-none focus:ring-1 ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500 bg-rose-50/20'
                        : 'border-[#D8CFC4] focus:border-[#7A1C2E] focus:ring-[#7A1C2E]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-600 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#7A1C2E] text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#601422] transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
