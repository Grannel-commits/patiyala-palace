import React from "react";
import { motion } from "framer-motion";

interface Props {
  onDiscover?: () => void;
  onExploreCocktails?: () => void;
  onExploreWhiskies?: () => void;
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
  onOpenMenu?: () => void;
}

export const HeroSection: React.FC<Props> = ({
  onExploreCocktails,
  onExploreWhiskies,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#111111] text-white flex flex-col justify-between overflow-hidden select-none pt-20 md:pt-24"
    >
      {/* Background Ambience: Signature Monkey Shoulder Cinnabar Orange & Charcoal Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-[#E6501E]/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[750px] h-[750px] bg-[#E6501E]/15 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_65%_45%,rgba(230,80,30,0.18)_0%,rgba(17,17,17,0.95)_70%)]" />
      </div>

      {/* Main 50/50 Monkey Shoulder Split Layout */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 py-8 lg:py-12">
        
        {/* LEFT COLUMN: Loud, Punchy, High-Energy Monkey Shoulder Statements */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          
          {/* Badge: Batch & Blend Stamp */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#E6501E]/15 border border-[#E6501E]/40 mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6501E] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#F1E6DA]">
              100% BLENDED MALT • BATCH 27
            </span>
          </motion.div>

          {/* Core Iconic Headline: MADE FOR MIXING */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-sans font-black uppercase text-5xl sm:text-7xl md:text-8xl xl:text-[6.5rem] tracking-tight leading-[0.92] text-white">
              MADE FOR <br />
              <span className="text-[#E6501E] drop-shadow-[0_4px_30px_rgba(230,80,30,0.4)]">
                MIXING.
              </span>
            </h1>
          </motion.div>

          {/* Subheading in Clean Merino Off-White */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-sans text-base sm:text-lg text-[#F1E6DA]/90 max-w-lg leading-relaxed font-light"
          >
            Crafted from selected 100% single malt whiskies married in small batches. Smooth, rich, and designed to break the stuffy rules of Scotch so you can mix it however you like.
          </motion.p>

          {/* Chunky High-Impact Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onExploreWhiskies}
              className="px-8 py-4 rounded-full bg-[#E6501E] hover:bg-[#FF6B00] text-black font-sans font-black text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 shadow-[0_10px_30px_rgba(230,80,30,0.4)] hover:scale-105 cursor-pointer"
            >
              DISCOVER OUR WHISKY
            </button>
            <button
              onClick={onExploreCocktails}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 border-2 border-white/80 hover:border-white text-white font-sans font-extrabold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              FIND A COCKTAIL
            </button>
          </motion.div>

          {/* Flavor Notes Quick Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-white/60"
          >
            <span className="text-[#E6501E] font-bold">FLAVOUR PROFILE:</span>
            <span>RICH VANILLA</span>
            <span>•</span>
            <span>ORANGE ZEST</span>
            <span>•</span>
            <span>SPICED OAK</span>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: The High-Impact Split Image Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-[620px] aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border-2 border-[#E6501E]/40 shadow-[0_30px_90px_rgba(230,80,30,0.25),0_0_60px_rgba(0,0,0,0.9)] group">
            <img
              src="/assets/brand/monkey_split_full.jpg"
              alt="Patiyala Palace Made for Mixing - Bottle & Rocks Glass on Stone"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating Bottle Badge */}
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#E6501E]/50 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E6501E]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                THE ORIGINAL • 42.8% ABV
              </span>
            </div>

            {/* Bottom Tagline on Image */}
            <div className="absolute bottom-4 inset-x-4 bg-[#111111]/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-[#E6501E] uppercase font-bold">
                  PERFECT SERVE
                </span>
                <span className="font-sans text-xs font-semibold text-white">
                  The Ginger Peg / Old Fashioned on Large Clear Ice
                </span>
              </div>
              <button
                onClick={onExploreCocktails}
                className="px-3.5 py-1.5 rounded-full bg-[#E6501E] text-black font-sans font-bold text-[10px] uppercase tracking-wider hover:bg-[#FF6B00] transition-colors"
              >
                RECIPE →
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Ticker / Running Marquee Bar at Bottom */}
      <div className="w-full bg-[#E6501E] text-black py-2.5 overflow-hidden select-none font-sans font-black text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-6 flex items-center gap-6">
              <span>MADE FOR MIXING</span>
              <span>★</span>
              <span>100% BLENDED MALT</span>
              <span>★</span>
              <span>RICH & UNAPOLOGETICALLY SMOOTH</span>
              <span>★</span>
              <span>BREAK THE RULES</span>
              <span>★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
