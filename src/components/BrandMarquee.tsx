import React from "react";

export const BrandMarquee: React.FC = () => {
  const marqueeItems = [
    "100% BLENDED MALT WHISKY",
    "RICH & SMOOTH",
    "MADE FOR MIXING",
    "BATCH 27 • CRAFTED IN SMALL BATCHES",
    "NO WHISKY SNOBBERY",
    "FREE THE SPIRIT",
    "PATIYALA PALACE",
    "SERVE IT YOUR WAY",
    "42.8% SIGNATURE STRENGTH",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#E6501E] py-3.5 select-none z-20 shadow-[0_10px_30px_rgba(230,80,30,0.35)]">
      <div className="animate-marquee flex items-center whitespace-nowrap text-black font-sans font-black text-xs sm:text-sm tracking-[0.22em] uppercase">
        {marqueeItems.concat(marqueeItems).map((item, idx) => (
          <span key={idx} className="flex items-center mx-6 sm:mx-8">
            <span>{item}</span>
            <span className="mx-6 text-black/60 text-sm font-black">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

