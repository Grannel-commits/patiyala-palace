import React from "react";
import { motion } from "framer-motion";

export const MonkeyNewsGrid: React.FC = () => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4 select-none">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#030d24] via-[#061842] to-[#030d24] border border-[#C6A865]/35 shadow-2xl p-6 sm:p-10 md:p-14">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 border-b border-white/15 pb-6">
          <h2 className="font-sans font-black uppercase text-3xl sm:text-5xl text-white tracking-tight leading-none">
            WHAT WE'RE TALKING ABOUT
          </h2>

          <a
            href="#news"
            className="group inline-flex items-center gap-2 font-sans font-black text-xs sm:text-sm uppercase tracking-[0.16em] text-[#E7C97C] hover:text-white transition-colors"
          >
            <span className="border-b-2 border-[#E7C97C] group-hover:border-white pb-0.5">
              ALL NEWS
            </span>
            <span className="text-base font-bold group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </a>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: Large Left Feature (Fred Again Partner) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl sm:rounded-3xl overflow-hidden bg-transparent group cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 shadow-xl mb-4 border border-white/10">
              <img
                src="/assets/editorial/news_connoisseur_tasting.jpg"
                alt="Patiyala Palace Royal Connoisseur Sessions"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold">
                JUNE 23, 2024
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C6A865] text-black flex items-center justify-center font-bold text-base shadow-lg group-hover:scale-110 transition-transform">
                ↗
              </div>
            </div>

            <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-[#E7C97C] transition-colors leading-tight">
              PATIYALA PALACE ROYAL CONNOISSEUR SESSIONS ANNOUNCED
            </h3>
          </motion.div>

          {/* Right Column: 2 Cards Stacked */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row lg:flex-row gap-6">
            
            {/* Card 2: Festival Cocktails */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 shadow-xl mb-4 border border-white/10">
                <img
                  src="/assets/editorial/news_festival_highball.jpg"
                  alt="Festival Cocktails & Royal Highball Recipes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold">
                  JULY 18, 2024
                </div>
              </div>

              <h4 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tight text-white group-hover:text-[#E7C97C] transition-colors leading-snug">
                FESTIVAL COCKTAILS & ROYAL HIGHBALL RECIPES
              </h4>
            </motion.div>

            {/* Card 3: Summer Drinks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 shadow-xl mb-4 border border-white/10">
                <img
                  src="/assets/editorial/news_crafted_cocktails.jpg"
                  alt="5 Best Crafted Indian Malt Whisky Cocktails"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold">
                  JUNE 12, 2024
                </div>
              </div>

              <h4 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tight text-white group-hover:text-[#E7C97C] transition-colors leading-snug">
                5 BEST CRAFTED INDIAN MALT WHISKY COCKTAILS
              </h4>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
