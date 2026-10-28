import React, { useState } from 'react';

export default function ImageWithFallback({
  src,
  alt = 'Handmade craft item',
  className = '',
  aspectRatio = 'aspect-square',
  fallbackText = 'Handmade Crafts',
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-[#F4EFEB] ${aspectRatio} ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-[#EFE8DE] animate-pulse flex items-center justify-center">
          <span className="w-8 h-8 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin opacity-50" />
        </div>
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FAF7F2] to-[#F5E8E4] border border-[#E8D8CC] text-center">
          <svg className="w-12 h-12 text-[#7A1C2E] opacity-75 mb-2" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="44" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 3"/>
            <path d="M50 20 C54 32, 58 40, 50 56 C42 40, 46 32, 50 20 Z" fill="#7A1C2E"/>
            <path d="M30 35 C42 40, 48 45, 50 56 C40 50, 32 45, 30 35 Z" fill="#D4AF37"/>
            <path d="M70 35 C58 40, 52 45, 50 56 C60 50, 68 45, 70 35 Z" fill="#D4AF37"/>
            <circle cx="50" cy="56" r="4" fill="#7A1C2E"/>
          </svg>
          <span className="font-serif text-sm font-semibold text-[#7A1C2E] tracking-wide line-clamp-1">
            {fallbackText}
          </span>
          <span className="text-[11px] text-[#8C7A70] tracking-wider uppercase mt-1">
            By Rashi Jain
          </span>
        </div>
      )}
    </div>
  );
}
