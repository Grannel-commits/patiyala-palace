import React from "react";

interface Props {
  onOpenMenu: () => void;
  onNavigateHome: () => void;
}

export const MonkeyHeader: React.FC<Props> = ({
  onOpenMenu,
  onNavigateHome,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none px-2.5 sm:px-[18px] md:px-6 py-2 sm:py-3.5 md:py-4 flex items-center justify-between">
      {/* Top Left: Logo Brand & Hamburger */}
      <div className="flex items-center gap-1.5 sm:gap-3 pointer-events-auto">
        {/* Brand Crest & Title Button */}
        <button
          onClick={onNavigateHome}
          className="h-9 sm:h-11 px-2.5 sm:px-4 rounded-full bg-black/70 hover:bg-black/90 text-white border border-[#CBD5E1]/40 backdrop-blur-md flex items-center gap-2 sm:gap-2.5 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
          aria-label="Patiyala Palace Home"
        >
          <img
            src="/assets/logo/pp_logo_silver_clean.png"
            alt="Patiyala Palace Crest"
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter drop-shadow group-hover:rotate-6 transition-transform duration-300"
          />
          <span className="font-serif tracking-[0.15em] sm:tracking-[0.2em] font-bold text-[11px] sm:text-sm text-[#E2E8F0] uppercase drop-shadow">
            PATIYALA PALACE
          </span>
        </button>

        {/* Circular Hamburger Menu Button */}
        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/80 hover:bg-black text-white border border-[#CBD5E1]/40 backdrop-blur-md flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
        >
          <span className="w-3.5 sm:w-4 h-[2px] bg-[#E2E8F0] rounded-full" />
          <span className="w-3.5 sm:w-4 h-[2px] bg-[#E2E8F0] rounded-full" />
          <span className="w-3.5 sm:w-4 h-[2px] bg-[#E2E8F0] rounded-full" />
        </button>
      </div>

      {/* Top Right: Royal Circular Seal Badge */}
      <div className="pointer-events-auto flex items-center">
        <button
          onClick={onNavigateHome}
          className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-1 bg-black/70 hover:bg-black/90 border border-[#CBD5E1]/40 backdrop-blur-md flex items-center justify-center cursor-pointer group shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Patiyala Palace Seal"
        >
          <img
            src="/assets/logo/pp_logo_silver_clean.png"
            alt="Patiyala Palace Royal Seal"
            className="w-full h-full object-contain filter drop-shadow group-hover:rotate-12 transition-transform duration-500"
          />
        </button>
      </div>
    </header>
  );
};
