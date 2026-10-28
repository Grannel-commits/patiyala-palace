import React from "react";
import { motion } from "framer-motion";

export const MonkeyEditorialSection: React.FC = () => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-1 sm:my-2">
      {/* 5-col / 7-col Inverted Asymmetrical Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4 min-h-[70vh] sm:min-h-[75vh] lg:h-[78vh]">
        
        {/* Left Column (5 cols): Patiyala Palace Lifestyle Editorial Shoot */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:col-span-5 h-[50vh] sm:h-[60vh] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#041235] group select-none shadow-2xl border border-[#CBD5E1]/40 flex flex-col justify-between p-6 sm:p-8"
        >
          {/* Background Image */}
          <img
            src="/assets/product/patiyala_lifestyle_shoot.jpg"
            alt="Patiyala Palace Crafted Indian Malt Whisky Lifestyle"
            className="absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/95 via-black/30 to-[#020818]/50 pointer-events-none" />

          {/* Top Pill Badge */}
          <div className="relative z-10 w-full flex items-center justify-between">
            <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-[#E2E8F0] bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#CBD5E1]/50 shadow-lg">
              CONNOISSEUR'S RITUAL
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] shadow-[0_0_10px_#E2E8F0]" />
          </div>

        </motion.div>

        {/* Right Column (7 cols): Cinematic Video & The 3 Sensory Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative lg:col-span-7 h-[65vh] sm:h-[70vh] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black group select-none shadow-2xl border border-[#CBD5E1]/30 flex flex-col justify-between p-6 sm:p-10 md:p-12"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          >
            <source src="/assets/video/Saksham-6.mp4" type="video/mp4" />
            <source src="/assets/video/Saksham-6.mov" type="video/quicktime" />
          </video>

          {/* Video Dark Overlays for Ultra Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/95 via-black/40 to-black/60 pointer-events-none" />

          {/* Top Eyebrow Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#CBD5E1]/40 text-[#E2E8F0]">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase">
                HERITAGE CRAFTSMANSHIP
              </span>
            </div>
          </div>

          {/* Overlaid Editorial Headline */}
          <div className="relative z-10 max-w-xl my-auto py-8">
            <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#E2E8F0] block mb-2 drop-shadow">
              A NEW ERA OF INDIAN MALT
            </span>
            <h2 className="font-sans font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              SMOOTH. <br />
              RICH. <br />
              <span className="text-[#E2E8F0]">VIBRANT.</span>
            </h2>
          </div>

          {/* Clean Bottom Meta Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#CBD5E1]/40 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E2E8F0] animate-pulse" />
              <span className="font-mono text-[9px] font-bold text-white uppercase tracking-widest">
                PATIYALA PALACE • INDIAN CRAFTED MALT WHISKY
              </span>
            </div>
            <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest hidden sm:inline-block">
              BATCH NO. 01 • SAKSHAM SPIRITS
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
