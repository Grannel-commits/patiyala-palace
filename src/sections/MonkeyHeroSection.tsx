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

        {/* Minimalist Luxury Badges Bar */}
        <div className="relative z-10 w-full flex items-center justify-between">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#CBD5E1]/30 flex items-center gap-2 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-widest">
              42.8% ABV • CRAFTED MALT
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-white/60 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#CBD5E1]/20 hidden sm:inline-block">
            BATCH NO. 01
          </span>
        </div>

        {/* Bottom Left Statement - Aristocratic & Minimalist */}
        <div className="relative z-10 max-w-xl lg:max-w-2xl text-left">
          <span className="font-serif tracking-[0.35em] uppercase text-[11px] sm:text-xs text-[#CBD5E1] font-semibold block mb-3 drop-shadow">
            WHERE ROYALTY MEETS THE BARREL
          </span>
          <h1 className="font-serif uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] font-bold">
            PATIYALA <br />
            <span className="italic font-light text-[#E2E8F0]">PALACE.</span>
          </h1>
        </div>
      </motion.div>
    </section>
  );
};
