import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface WhiskyExpression {
  id: string;
  batch: string;
  name: string;
  subtitle: string;
  abv: string;
  volume: string;
  cask: string;
  badge: string;
  description: string;
  flavorPills: string[];
  tastingNotes: {
    nose: string;
    palate: string;
    finish: string;
  };
  perfectServe: string;
  image: string;
  accentColor: string;
}

export const WHISKY_EXPRESSIONS: WhiskyExpression[] = [
  {
    id: "the-original",
    batch: "BATCH 27",
    name: "The Original",
    subtitle: "100% Blended Malt Whisky",
    abv: "42.8% ABV",
    volume: "750 ML",
    cask: "First-Fill Charred American Oak",
    badge: "THE ORIGINAL • MADE FOR MIXING",
    description: "The flagship 100% blended malt whisky made from selected single malts married in small batches. Supremely smooth, rich with zesty orange and luscious vanilla, crafted specifically to break the stuffy rules of Scotch so you can mix it however you like.",
    flavorPills: ["Zesty Orange", "Vanilla Bean", "Spiced Oak", "Honeyed Malt"],
    tastingNotes: {
      nose: "Zesty orange, delicate vanilla, honey and spiced oak with rich malted grist.",
      palate: "Mellow vanilla with spicy hints, toasted oak, and smooth butterscotch roundness.",
      finish: "Super smooth, lingering sweet malt notes and gentle wood spice."
    },
    perfectServe: "The Ginger Peg (with premium ginger ale & orange wedge) or in an Old Fashioned.",
    image: "/assets/product/packaging_hero_3d.png",
    accentColor: "#E6501E",
  },
  {
    id: "smokey-malt",
    batch: "BATCH 02",
    name: "Smokey Peat",
    subtitle: "Peated Blended Malt",
    abv: "48.2% ABV",
    volume: "750 ML",
    cask: "Heavy Char Oak & Refill Hogsheads",
    badge: "SMOKY & BOLD",
    description: "Infused with rich Highland peat smoke and married with creamy malt sweetness. Gives classic whisky cocktails an electrifying smoky twist while remaining remarkably approachable.",
    flavorPills: ["Campfire Embers", "Smoked Sea Salt", "Clover Honey", "Dark Cacao"],
    tastingNotes: {
      nose: "Campfire embers, iodine, smoked citrus peel, and sweet orchard fruits.",
      palate: "Rich peat smoke balanced by juicy sultanas, clover honey, and toasted barley.",
      finish: "Smoldering cedarwood, cracked black pepper, and bitter dark chocolate."
    },
    perfectServe: "Smoky Penicillin with fresh lemon, ginger syrup, and honey.",
    image: "/assets/product/packaging_front.png",
    accentColor: "#F58220",
  },
  {
    id: "fresh-oloroso",
    batch: "BATCH 03",
    name: "Double Oloroso",
    subtitle: "Sherry Cask Limited Reserve",
    abv: "43.5% ABV",
    volume: "750 ML",
    cask: "First-Fill Oloroso Sherry Butts from Jerez",
    badge: "LIMITED RESERVE",
    description: "Rested in hand-selected Spanish Oloroso sherry casks for rich dried fruit decadence, festive spices, and deep copper amber color. An unrepentant modern luxury dram.",
    flavorPills: ["Spanish Fig", "Christmas Spice", "Blood Orange", "Toasted Almond"],
    tastingNotes: {
      nose: "Blackberries, macerated figs, warm Christmas spices, and sweet almond marzipan.",
      palate: "Rich fruitcake, blood orange marmalade, and toasted almonds dusted with cinnamon.",
      finish: "Opulent and velvet-smooth with dry European cocoa and warm winter spices."
    },
    perfectServe: "Stirred into an Imperial Manhattan or savored neat over a hand-carved ice sphere.",
    image: "/assets/product/bottle_front_raw.jpg",
    accentColor: "#E6501E",
  },
];

interface Props {
  onLocateBottle?: () => void;
}

export const OurWhiskiesSection: React.FC<Props> = ({ onLocateBottle }) => {
  const [selectedWhisky, setSelectedWhisky] = useState<WhiskyExpression | null>(null);

  return (
    <section id="whiskies" className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none z-20 bg-[#111111]">
      
      {/* Background Subtle Radial Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E6501E]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-screen-2xl">
        
        {/* Section Header - Monkey Shoulder Chunky Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E6501E] block mb-2">
              100% BLENDED MALT WHISKIES • BORN TO BE MIXED
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              OUR <span className="text-[#E6501E]">WHISKIES.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#F1E6DA]/80 max-w-md leading-relaxed font-light">
            Made from selected single malts, never single grain. Rich, smooth, and crafted to break the stuffy rules so you can mix it however you like.
          </p>
        </div>

        {/* 3 Chunky Monkey Shoulder-Style Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHISKY_EXPRESSIONS.map((whisky) => (
            <div
              key={whisky.id}
              className="bg-[#1A1A1A] border-2 border-white/10 hover:border-[#E6501E]/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              {/* Top Card Info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#E6501E]/20 text-[#E6501E] border border-[#E6501E]/40">
                    {whisky.batch}
                  </span>
                  <span className="text-xs font-mono font-semibold text-white/60 tracking-wider">
                    {whisky.abv} • {whisky.volume}
                  </span>
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-snug group-hover:text-[#E6501E] transition-colors">
                  {whisky.name}
                </h3>
                <p className="font-mono text-xs text-[#E6501E] tracking-wider uppercase font-bold mt-1">
                  {whisky.subtitle}
                </p>

                {/* Flavor Note Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {whisky.flavorPills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono font-medium text-white/80"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottle Image with Breakout on Hover */}
              <div className="relative my-8 h-72 sm:h-80 flex items-center justify-center">
                <div className="absolute w-44 h-44 rounded-full bg-[#E6501E]/15 blur-2xl group-hover:bg-[#E6501E]/30 transition-all duration-500" />
                <img
                  src={whisky.image}
                  alt={whisky.name}
                  className="relative z-10 max-h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                />
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#E6501E] font-bold">
                    PERFECT SERVE
                  </span>
                  <span className="truncate max-w-[180px] text-right font-sans text-[11px] text-[#F1E6DA]">
                    {whisky.perfectServe}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => setSelectedWhisky(whisky)}
                    className="w-full py-3 rounded-full text-[11px] font-sans font-black uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-center cursor-pointer"
                  >
                    TASTE PROFILE
                  </button>
                  <button
                    onClick={onLocateBottle}
                    className="w-full py-3 rounded-full text-[11px] font-sans font-black uppercase tracking-wider bg-[#E6501E] hover:bg-[#FF6B00] text-black shadow-[0_4px_15px_rgba(230,80,30,0.35)] text-center cursor-pointer transition-all"
                  >
                    FIND BOTTLE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Tasting Profile Modal */}
      <AnimatePresence>
        {selectedWhisky && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[130] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedWhisky(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-[#1A1A1A] rounded-3xl p-6 sm:p-10 border-2 border-[#E6501E]/50 max-h-[90vh] overflow-y-auto shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWhisky(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#E6501E] hover:text-black text-white flex items-center justify-center font-bold text-lg transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center border-b border-white/15 pb-6">
                <div className="w-32 h-44 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={selectedWhisky.image}
                    alt={selectedWhisky.name}
                    className="max-h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#E6501E]/20 text-[#E6501E] border border-[#E6501E]/40">
                    {selectedWhisky.batch} • {selectedWhisky.badge}
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase mt-2">
                    {selectedWhisky.name}
                  </h3>
                  <p className="text-xs font-mono text-[#E6501E] tracking-widest uppercase font-bold mt-1">
                    {selectedWhisky.abv} • {selectedWhisky.cask}
                  </p>
                  <p className="text-xs sm:text-sm text-[#F1E6DA]/90 mt-3 leading-relaxed font-light">
                    {selectedWhisky.description}
                  </p>
                </div>
              </div>

              {/* Tasting Notes Breakdown: Nose, Palate, Finish */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E6501E] block mb-1">
                    👃 THE NOSE
                  </span>
                  <p className="text-xs text-white/90 leading-relaxed font-sans">
                    {selectedWhisky.tastingNotes.nose}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E6501E] block mb-1">
                    👅 THE PALATE
                  </span>
                  <p className="text-xs text-white/90 leading-relaxed font-sans">
                    {selectedWhisky.tastingNotes.palate}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E6501E] block mb-1">
                    ✨ THE FINISH
                  </span>
                  <p className="text-xs text-white/90 leading-relaxed font-sans">
                    {selectedWhisky.tastingNotes.finish}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedWhisky(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedWhisky(null);
                    onLocateBottle?.();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#E6501E] hover:bg-[#FF6B00] text-black shadow-[0_4px_15px_rgba(230,80,30,0.35)] cursor-pointer"
                >
                  Find A Bottle
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
