import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/SocialIcons';
import ImageWithFallback from '../common/ImageWithFallback';
import floralToran from '../../assets/images/categories/Floral Toran.png';
import navratriRings from '../../assets/images/categories/NavratriRings.png';
import candleHolder from '../../assets/images/categories/Candleholderpairof2.png';
import pomPomHangings from '../../assets/images/categories/PomPomHangings.jpg';
import lotusRangoli from '../../assets/images/categories/Lotus rangoli.png';
import toran from '../../assets/images/categories/Toran.png';

// Configurable Instagram Profile URL - client can replace with actual handle
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/handmade_crafts_rj/';

const instagramPosts = [
  {
    id: 1,
    image: floralToran,
    caption: 'Handcrafted floral torans bringing auspicious joy to Mumbai doorsteps ✨',
  },
  {
    id: 2,
    image: navratriRings,
    caption: 'Garba nights ready! Our handmade cowrie & mirror rings in full bloom 🪞💃',
  },
  {
    id: 3,
    image: candleHolder,
    caption: 'Subtle candlelight reflections on hand-crafted diya candle holder pairs 🪔',
  },
  {
    id: 4,
    image: pomPomHangings,
    caption: 'Full door pom-pom hangings strung by hand. No two pieces are ever identical!',
  },
  {
    id: 5,
    image: toran,
    caption: 'Classic gota patti toran for a royal welcome at your doorstep 🚪',
  },
  {
    id: 6,
    image: lotusRangoli,
    caption: 'Festive floor magic with reusable lotus kundan rangoli mats ✨',
  },
];


export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF9] border-t border-[#EFE8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#7A1C2E] hover:text-[#C85A32] transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#C85A32]" />
            <span>@handmade_crafts_rj</span>
          </a>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Follow the Handmade Journey
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light">
            Behind the scenes, studio craft sessions, and festive styling inspirations from Mumbai.
          </p>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#F4EFEB] block border border-[#EFE8DE] shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.caption}
                aspectRatio="aspect-square"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                fallbackText="Studio Craft"
              />

              {/* Hover overlay with Instagram icon */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                <InstagramIcon className="w-6 h-6 text-[#DFB743] mb-1" />
                <span className="text-[10px] line-clamp-2 leading-snug">
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#FAF7F2] border border-[#D8CFC4] hover:border-[#7A1C2E] text-[#2D2A26] hover:text-[#7A1C2E] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors shadow-2xs gap-2 group"
          >
            <InstagramIcon className="w-4 h-4 text-[#7A1C2E]" />
            <span>Follow Us on Instagram</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
