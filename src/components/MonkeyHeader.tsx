import React from "react";

interface Props {
  onOpenMenu: () => void;
  onNavigateHome: () => void;
}

export const MonkeyHeader: React.FC<Props> = ({ onOpenMenu, onNavigateHome }) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none p-3 sm:p-5 flex items-center justify-between">
      {/* Top Left: Logo Brand, Hamburger, Tagline */}
      <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
        {/* Brand Crest & Title Button */}
        <button
          onClick={onNavigateHome}
          className="h-10 sm:h-11 px-3 sm:px-4 rounded-full bg-black/70 hover:bg-black/90 text-white border border-[#C6A865]/40 backdrop-blur-md flex items-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
          aria-label="Patiyala Palace Home"
        >
          <img
            src="/assets/logo/pp_logo_gold_clean.png"
            alt="Patiyala Palace Crest"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter drop-shadow group-hover:rotate-6 transition-transform duration-300"
          />
          <span className="font-serif tracking-[0.2em] font-bold text-xs sm:text-sm text-[#E7C97C] uppercase drop-shadow">
            PATIYALA PALACE
          </span>
        </button>

        {/* Circular Hamburger Menu Button */}
        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/80 hover:bg-black text-white border border-[#C6A865]/40 backdrop-blur-md flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
        >
          <span className="w-4 h-[2px] bg-[#E7C97C] rounded-full" />
          <span className="w-4 h-[2px] bg-[#E7C97C] rounded-full" />
          <span className="w-4 h-[2px] bg-[#E7C97C] rounded-full" />
        </button>

        {/* Text beside icons: ROYAL HERITAGE / WHERE ROYALTY MEETS THE BARREL */}
        <div className="hidden lg:flex flex-col text-[9px] leading-tight font-sans font-black tracking-widest text-[#E7C97C]/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <span className="uppercase tracking-widest text-[#E7C97C]">PUNJAB & HARYANA</span>
          <span className="uppercase text-white/80">WHERE ROYALTY MEETS THE BARREL</span>
        </div>
      </div>

      {/* Top Right: Royal Circular Seal Badge */}
      <div className="pointer-events-auto flex items-center">
        <button
          onClick={onNavigateHome}
          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-1 bg-black/60 hover:bg-black/90 border border-[#C6A865]/50 backdrop-blur-md flex items-center justify-center cursor-pointer group shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Patiyala Palace Seal"
        >
          <img
            src="/assets/logo/pp_logo_gold_clean.png"
            alt="Patiyala Palace Royal Seal"
            className="w-full h-full object-contain filter drop-shadow group-hover:rotate-12 transition-transform duration-500"
          />
        </button>
      </div>
    </header>
  );
};
