import React from "react";
import { motion } from "framer-motion";

interface Props {
  onExploreCraft: () => void;
}

export const MonkeyCraftSection: React.FC<Props> = ({ onExploreCraft }) => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[52vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[520px] max-h-[820px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#CBD5E1]/30 group select-none flex flex-col justify-between p-4 sm:p-12 md:p-16"
      >
        {/* Full-Bleed Craft Bottle Image (Responsive 2400x1200 Widescreen & Portrait) */}
        <picture className="absolute inset-0 w-full h-full block">
          <source
            media="(max-width: 768px)"
            srcSet="/assets/product/patiyala_macro_gold_label_original.jpg"
          />
          <img
            src="/assets/product/patiyala_craft_full_widescreen.jpg"
            alt="From The Roots Of Patiala - Indian Crafted Malt Whisky"
            className="w-full h-full object-cover object-[center_right] sm:object-right filter brightness-[0.95] contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </picture>

        {/* Cinematic Vignette Gradients for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Minimalist Badges */}
        <div className="relative z-10 w-full flex items-center justify-between">
          <div className="bg-black/60 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] animate-pulse" />
            <span className="font-mono text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-widest">
              DISTILLED PATRIMONY
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-white/60 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 hidden sm:inline-block">
            INDIAN CRAFTED MALT
          </span>
        </div>

        {/* Bottom Left: Heading & Action Link */}
        <div className="relative z-10 max-w-xl text-left">
          <span className="font-mono text-[9px] sm:text-xs tracking-[0.3em] uppercase text-[#CBD5E1]/80 mb-2 sm:mb-3 block drop-shadow">
            THE HOUSE OF PATIYALA
          </span>
          <h2 className="font-serif font-normal text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.02] mb-4 sm:mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            From The Roots <br />
            <span className="italic font-light text-[#E2E8F0] drop-shadow-[0_2px_20px_rgba(226,232,240,0.4)]">
              Of Patiala.
            </span>
          </h2>

          <button
            onClick={onExploreCraft}
            className="group inline-flex items-center gap-2.5 sm:gap-3 font-mono text-[11px] sm:text-sm uppercase tracking-[0.25em] text-[#E2E8F0] hover:text-white transition-all cursor-pointer bg-black/60 hover:bg-black/80 backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/25 hover:border-white/60 shadow-xl"
          >
            <span className="border-b border-[#CBD5E1]/60 group-hover:border-white pb-0.5">
              THE CRAFT
            </span>
            <span className="text-sm sm:text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
