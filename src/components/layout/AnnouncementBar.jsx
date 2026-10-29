import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#7A1C2E] text-[#FFFDF9] py-2 px-3 sm:px-4 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-1.5 sm:space-x-2 text-center">
        <Sparkles className="w-3.5 h-3.5 text-[#DFB743] shrink-0 animate-pulse" />
        <span className="flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center leading-tight">
          <span>Handcrafted with Love</span>
          <span className="text-[#DFB743] font-bold">•</span>
          <span>Celebrating Every Special Moment</span>
          <span className="hidden md:inline text-[#DFB743] font-bold">•</span>
          <span className="hidden md:inline text-[#F8E1DC]/90">
            Pan-India Delivery from Mumbai
          </span>
        </span>
        <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F8E1DC] shrink-0 fill-current opacity-80" />
      </div>
    </div>
  );
}
