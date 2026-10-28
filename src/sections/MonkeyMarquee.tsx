import React from "react";

export const MonkeyMarquee: React.FC = () => {
  const text = "PATIYALA PALACE™ • WHERE ROYALTY MEETS THE BARREL • CRAFTED INDIAN MALT WHISKY ✽ ";
  const fullText = text.repeat(8);

  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-8 select-none my-4">
      <div className="animate-marquee flex items-center whitespace-nowrap text-[#E2E8F0] font-serif font-black text-2xl sm:text-4xl md:text-5xl tracking-widest uppercase drop-shadow-[0_2px_10px_rgba(226,232,240,0.4)]">
        <span className="mx-4">{fullText}</span>
        <span className="mx-4">{fullText}</span>
      </div>
    </div>
  );
};
