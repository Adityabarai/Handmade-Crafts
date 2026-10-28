import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import BestsellersSection from '../components/home/BestsellersSection';
import BrandStorySection from '../components/home/BrandStorySection';
import OccasionsSection from '../components/home/OccasionsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import InstagramFeed from '../components/home/InstagramFeed';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <BestsellersSection />
      <BrandStorySection />
      <OccasionsSection />
      <WhyChooseUsSection />
      <InstagramFeed />
      <NewsletterSection />
    </main>
  );
}
