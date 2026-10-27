import React from "react";
import { motion } from "framer-motion";

export const MonkeyHeroSection: React.FC = () => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 pt-16 sm:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4 h-[86vh] sm:h-[88vh] md:h-[90vh]">
        
        {/* Left Column (8 cols): Hero Bottle on Rock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:col-span-8 h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black group select-none shadow-2xl"
        >
          <img
            src="/assets/product/patiyala_hero_bottle_cinematic.jpg"
            alt="Patiyala Palace Indian Crafted Malt Whisky"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />

          {/* Vignette & Shadows */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Bottom Left Bold Statement */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 max-w-xl">
            <span className="font-serif tracking-[0.3em] uppercase text-xs sm:text-sm text-[#E7C97C] font-bold block mb-2 drop-shadow">
              WHERE ROYALTY MEETS THE BARREL
            </span>
            <h1 className="font-sans font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              PATIYALA PALACE. <br />
              <span className="text-[#E7C97C]">INDIAN CRAFTED MALT.</span>
            </h1>
          </div>
        </motion.div>

        {/* Right Column (4 cols): Royal Emblem & Bottle Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative lg:col-span-4 h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#061b4c] group select-none shadow-2xl border border-[#C6A865]/40 flex flex-col items-center justify-between p-6 sm:p-8 text-center"
        >
          {/* Ambient Glows */}
          <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25)_0%,transparent_70%)] pointer-events-none" />

          {/* Top subtle badge overlay */}
          <div className="relative z-10 w-full flex justify-end">
            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C6A865]/50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E7C97C] animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">
                ROYAL RESERVE • 42.8%
              </span>
            </div>
          </div>

          {/* New Official Royal Emblem Badge */}
          <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 my-auto flex items-center justify-center">
            <img
              src="/assets/logo/pp_logo_gold_clean.png"
              alt="Patiyala Palace Official Seal - Where Royalty Meets The Barrel"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_30px_rgba(212,175,55,0.6)] group-hover:scale-105 group-hover:rotate-3 transition-transform duration-700"
            />
          </div>

          {/* Bottom Card Title */}
          <div className="relative z-10 w-full pt-4 border-t border-[#C6A865]/30">
            <h3 className="font-serif font-black text-lg sm:text-xl uppercase tracking-[0.2em] text-[#E7C97C]">
              PATIYALA PALACE
            </h3>
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/70 mt-1">
              WHERE ROYALTY MEETS THE BARREL
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
