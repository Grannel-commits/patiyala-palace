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
          className="relative lg:col-span-5 h-[50vh] sm:h-[60vh] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#041235] group select-none shadow-2xl border border-[#C6A865]/40 flex flex-col justify-between p-6 sm:p-8"
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
            <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-[#E7C97C] bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C6A865]/50 shadow-lg">
              CONNOISSEUR'S RITUAL
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7C97C] shadow-[0_0_10px_#E7C97C]" />
          </div>

          {/* Bottom Floating Glass Card with Tasting Note */}
          <div className="relative z-10 p-5 rounded-2xl bg-[#030d24]/90 backdrop-blur-xl border border-[#C6A865]/35 shadow-2xl">
            <span className="font-serif text-[11px] font-bold tracking-[0.2em] uppercase text-[#E7C97C] block mb-1">
              THE ART OF THE SAVOR
            </span>
            <p className="font-sans text-xs text-white/90 leading-relaxed font-light">
              Best appreciated neat in crystal glassware or over a single hand-carved ice sphere to unlock velvet caramel, toasted barley, and gentle oak spice.
            </p>
            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
              <span className="uppercase tracking-widest text-[#E7C97C]">BATCH NO. 01</span>
              <span className="uppercase tracking-widest">42.8% ABV • ROYAL RESERVE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Cinematic Video & The 3 Sensory Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative lg:col-span-7 h-[65vh] sm:h-[70vh] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black group select-none shadow-2xl border border-[#C6A865]/30 flex flex-col justify-between p-6 sm:p-10 md:p-12"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C6A865]/40 text-[#E7C97C]">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase">
                HERITAGE CRAFTSMANSHIP
              </span>
            </div>
            <span className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              ESTD. 1763
            </span>
          </div>

          {/* Overlaid Editorial Headline */}
          <div className="relative z-10 max-w-xl my-auto py-8">
            <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#E7C97C] block mb-2 drop-shadow">
              A NEW ERA OF INDIAN MALT
            </span>
            <h2 className="font-sans font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              SMOOTH. <br />
              RICH. <br />
              <span className="text-[#E7C97C]">VIBRANT.</span>
            </h2>
          </div>

          {/* Clean Bottom Meta Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C6A865]/40 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E7C97C] animate-pulse" />
              <span className="font-mono text-[9px] font-bold text-white uppercase tracking-widest">
                PATIYALA PALACE • INDIAN CRAFTED MALT
              </span>
            </div>
            <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest hidden sm:inline-block">
              BATCH NO. 01 • ROYAL RESERVE
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
