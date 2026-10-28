import React from "react";

export const MonkeyMarquee: React.FC = () => {
  const text = "PATIYALA PALACE • INDIAN CRAFTED MALT • BATCH NO. 01 • ";
  const fullText = text.repeat(8);

  return (
    <div className="relative w-full overflow-hidden py-5 sm:py-6 select-none my-3 border-y border-[#CBD5E1]/15">
      <div className="animate-marquee flex items-center whitespace-nowrap text-[#CBD5E1]/70 font-serif font-light text-xl sm:text-2xl md:text-3xl tracking-[0.25em] uppercase">
        <span className="mx-4">{fullText}</span>
        <span className="mx-4">{fullText}</span>
      </div>
    </div>
  );
};
