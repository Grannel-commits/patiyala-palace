import React from "react";
import { motion } from "framer-motion";

export const MonkeyHeroSection: React.FC = () => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 pt-20 sm:pt-24 md:pt-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[calc(100vh-7.5rem)] min-h-[580px] max-h-[820px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black group select-none shadow-2xl border border-[#CBD5E1]/30 flex flex-col justify-between p-6 sm:p-10 md:p-12"
      >
        {/* Hero Bottle Image - Scaled up for impactful presence */}
        <img
          src="/assets/product/patiyala_hero_bottle_cinematic.jpg"
          alt="Patiyala Palace Indian Crafted Malt Whisky"
          className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-115 sm:scale-120 md:scale-125 transition-transform duration-1000 ease-out group-hover:scale-[1.28]"
        />

        {/* Vignette & Shadows for Depth & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent pointer-events-none" />

        {/* Top Badges Bar */}
        <div className="relative z-10 w-full flex items-center justify-between">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#CBD5E1]/40 flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E2E8F0] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-widest">
              42.8% ABV • INDIAN CRAFTED MALT WHISKY
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-white/70 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#CBD5E1]/30 hidden sm:inline-block">
            BATCH NO. 01 • SAKSHAM SPIRITS
          </span>
        </div>

        {/* Bottom Left Bold Statement (as before) */}
        <div className="relative z-10 max-w-xl lg:max-w-2xl text-left">
          <span className="font-serif tracking-[0.3em] uppercase text-xs sm:text-sm text-[#E2E8F0] font-bold block mb-2 sm:mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            WHERE ROYALTY MEETS THE BARREL
          </span>
          <h1 className="font-sans font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            PATIYALA PALACE. <br />
            <span className="text-[#E2E8F0]">INDIAN CRAFTED MALT WHISKY.</span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
};
