import React from "react";
import { motion } from "framer-motion";

interface Props {
  onExploreCraft: () => void;
}

export const MonkeyCraftSection: React.FC<Props> = ({ onExploreCraft }) => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#030e28] via-[#071f54] to-[#0b2b6f] border border-[#C6A865]/40 shadow-2xl p-6 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 min-h-[70vh] sm:min-h-[75vh]">
        
        {/* Left Column: Heading & Our Craft Link */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center select-none z-10">
          <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#C6A865] mb-2">
            INDIAN CRAFTED MALT WHISKY
          </span>
          
          <h2 className="font-sans font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[1.05] mb-8">
            FROM THE ROOTS <br />
            <span className="text-[#E7C97C] drop-shadow-[0_2px_20px_rgba(212,175,55,0.4)]">
              OF PATIALA.
            </span>
          </h2>

          <button
            onClick={onExploreCraft}
            className="group inline-flex items-center gap-3 font-sans font-black text-sm sm:text-base uppercase tracking-[0.16em] text-[#E7C97C] hover:text-white transition-colors cursor-pointer"
          >
            <span className="border-b-2 border-[#E7C97C] group-hover:border-white pb-0.5">
              OUR CRAFT
            </span>
            <span className="text-lg font-bold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </button>
        </div>

        {/* Right Column: Patiyala Palace Handcrafted Bottle with Charred Oak & Botanicals */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[620px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group border border-[#C6A865]/40 bg-black/40"
          >
            <img
              src="/assets/product/patiyala_macro_gold_label.jpg"
              alt="From the Roots of Patiala - Indian Crafted Malt Whisky"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Subtle Royal Accent Badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C6A865]/50 flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#E7C97C] animate-pulse" />
              <span className="font-mono text-[9px] font-bold text-white uppercase tracking-widest">
                PATIYALA PALACE • INDIAN CRAFTED MALT WHISKY
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
