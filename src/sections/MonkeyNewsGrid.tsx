import React from "react";
import { motion } from "framer-motion";

export const MonkeyNewsGrid: React.FC = () => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4 select-none">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#030d24] via-[#061842] to-[#030d24] border border-[#CBD5E1]/35 shadow-2xl p-6 sm:p-10 md:p-14">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 border-b border-white/15 pb-6">
          <h2 className="font-serif font-normal text-3xl sm:text-5xl text-white tracking-tight leading-none">
            The Dispatches
          </h2>

          <a
            href="#news"
            className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#E2E8F0] hover:text-white transition-colors"
          >
            <span className="border-b border-[#CBD5E1]/60 group-hover:border-white pb-0.5">
              Archive
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
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#CBD5E1] text-black flex items-center justify-center font-bold text-base shadow-lg group-hover:scale-110 transition-transform">
                ↗
              </div>
            </div>

            <h3 className="font-serif font-normal text-xl sm:text-2xl text-white group-hover:text-[#E2E8F0] transition-colors leading-tight">
              Royal Connoisseur Sessions
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
                  alt="The Heritage Highball Ritual"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold">
                  JULY 18, 2024
                </div>
              </div>

              <h4 className="font-serif font-normal text-lg sm:text-xl text-white group-hover:text-[#E2E8F0] transition-colors leading-snug">
                The Heritage Highball Ritual
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
                  alt="Five Crafted Malt Serves"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold">
                  JUNE 12, 2024
                </div>
              </div>

              <h4 className="font-serif font-normal text-lg sm:text-xl text-white group-hover:text-[#E2E8F0] transition-colors leading-snug">
                Five Crafted Malt Serves
              </h4>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
