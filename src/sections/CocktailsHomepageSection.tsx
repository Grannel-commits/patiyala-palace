import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROYAL_COCKTAILS, CocktailRecipe } from "../data/cocktailsData";

interface Props {
  onExploreCocktailsPage?: () => void;
  onSelectRecipe?: (recipe: CocktailRecipe) => void;
}

type CategoryFilter = "ALL" | "CLASSIC" | "HIGHBALL" | "BOLD" | "SOUR";

export const CocktailsHomepageSection: React.FC<Props> = ({
  onExploreCocktailsPage,
  onSelectRecipe,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("ALL");
  const [activeRecipe, setActiveRecipe] = useState<CocktailRecipe | null>(null);
  const [measurementUnit, setMeasurementUnit] = useState<"ml" | "oz">("ml");

  const filteredCocktails = ROYAL_COCKTAILS.filter((item) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "CLASSIC") {
      return item.id === "the-royal-rob" || item.id === "patiala-peg" || item.id === "shahi-jam";
    }
    if (selectedFilter === "HIGHBALL") {
      return item.id === "patiala-peg" || item.id === "shahi-jam";
    }
    if (selectedFilter === "BOLD") {
      return item.id === "maharajas-revolver" || item.id === "boulevard-da-badshah" || item.id === "the-royal-rob";
    }
    if (selectedFilter === "SOUR") {
      return item.id === "sour-sides-of-patiala";
    }
    return true;
  });

  const handleOpenRecipe = (recipe: CocktailRecipe) => {
    if (onSelectRecipe) {
      onSelectRecipe(recipe);
    } else {
      setActiveRecipe(recipe);
    }
  };

  const convertAmount = (amountStr: string) => {
    if (measurementUnit === "ml") return amountStr;
    const match = amountStr.match(/(\d+(\.\d+)?)\s*ml/i);
    if (match) {
      const mlVal = parseFloat(match[1]);
      const ozVal = (mlVal / 30).toFixed(1).replace(".0", "");
      return `${ozVal} oz`;
    }
    return amountStr;
  };

  return (
    <section id="cocktails" className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none z-20">
      
      <div className="relative mx-auto w-full max-w-screen-xl">
        
        {/* Section Header - Monkey Shoulder Chunky Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E6501E] block mb-2">
              MADE FOR MIXING • CURATED SERVES
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              WHISKY <span className="text-[#E6501E]">COCKTAILS.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#F1E6DA]/80 max-w-md leading-relaxed font-light">
            Versatile, smooth, and made for mixing. Try our favorite highballs, sours, and modern twists crafted to let the whisky shine.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {[
            { id: "ALL", label: `ALL (${ROYAL_COCKTAILS.length})` },
            { id: "CLASSIC", label: "CLASSICS" },
            { id: "HIGHBALL", label: "HIGHBALLS & SPRITZ" },
            { id: "BOLD", label: "SPIRIT-FORWARD" },
            { id: "SOUR", label: "CITRUS & SOURS" },
          ].map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as CategoryFilter)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans font-black tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#E6501E] text-black shadow-[0_4px_20px_rgba(230,80,30,0.4)]"
                    : "bg-[#1A1A1A] hover:bg-white/10 border border-white/15 text-white/80 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Clean, Elegant Cocktail Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCocktails.map((recipe) => (
            <motion.div
              key={recipe.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleOpenRecipe(recipe)}
              className="group cursor-pointer flex flex-col justify-between rounded-3xl overflow-hidden bg-[#1A1A1A] border-2 border-white/10 hover:border-[#E6501E]/70 transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#E6501E]/50 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                    {recipe.prepTime}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-70" />
              </div>

              {/* Details */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#E6501E] uppercase font-bold block mb-1">
                    {recipe.classicName ? `CLASSIC: ${recipe.classicName.toUpperCase()}` : "HOUSE SIGNATURE"}
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#E6501E] transition-colors">
                    {recipe.name}
                  </h3>
                  <p className="font-sans text-xs text-[#F1E6DA]/75 line-clamp-2 mt-2 leading-relaxed font-light">
                    {recipe.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/50 tracking-wider uppercase font-semibold">
                    {recipe.glassware}
                  </span>
                  <span className="font-sans text-xs font-black tracking-[0.14em] uppercase text-[#E6501E] group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    VIEW RECIPE ➔
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {onExploreCocktailsPage && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={onExploreCocktailsPage}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 border-2 border-white/80 hover:border-white text-white font-sans font-black text-xs uppercase tracking-[0.16em] transition-all cursor-pointer hover:scale-105"
            >
              EXPLORE ALL COCKTAILS
            </button>
          </div>
        )}

      </div>

      {/* Recipe Modal */}
      <AnimatePresence>
        {activeRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[130] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveRecipe(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-[#1A1A1A] rounded-3xl overflow-hidden border-2 border-[#E6501E]/50 max-h-[90vh] overflow-y-auto shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveRecipe(null)}
                className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#E6501E] hover:text-black text-white flex items-center justify-center font-bold text-sm transition-all border border-white/20 cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[260px] md:min-h-full bg-black">
                  <img
                    src={activeRecipe.image}
                    alt={activeRecipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#E6501E] font-bold">
                        {activeRecipe.prepTime} • {activeRecipe.serveType}
                      </span>
                      
                      <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
                        <button
                          onClick={() => setMeasurementUnit("ml")}
                          className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold font-mono uppercase transition-all ${
                            measurementUnit === "ml" ? "bg-[#E6501E] text-black" : "text-white/70"
                          }`}
                        >
                          ML
                        </button>
                        <button
                          onClick={() => setMeasurementUnit("oz")}
                          className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold font-mono uppercase transition-all ${
                            measurementUnit === "oz" ? "bg-[#E6501E] text-black" : "text-white/70"
                          }`}
                        >
                          OZ
                        </button>
                      </div>
                    </div>

                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight">
                      {activeRecipe.name}
                    </h2>
                    <p className="font-sans text-xs text-[#F1E6DA]/80 mt-2 font-light leading-relaxed">
                      {activeRecipe.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/10">
                      <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#E6501E] mb-2 font-bold">
                        INGREDIENTS
                      </h4>
                      <ul className="space-y-1.5 font-sans text-xs">
                        {activeRecipe.ingredients.map((ing, iIdx) => (
                          <li key={iIdx} className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-white/80">{ing.name}</span>
                            <span className="font-mono font-bold text-[#E6501E]">
                              {convertAmount(ing.amount)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10">
                      <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#E6501E] mb-2 font-bold">
                        PREPARATION
                      </h4>
                      <ol className="space-y-1.5 list-decimal list-inside text-xs text-white/80 font-sans font-light leading-relaxed">
                        {activeRecipe.preparation.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                    <button
                      onClick={() => setActiveRecipe(null)}
                      className="px-6 py-2.5 rounded-full text-xs font-sans font-black uppercase tracking-wider bg-[#E6501E] hover:bg-[#FF6B00] text-black cursor-pointer shadow-[0_4px_15px_rgba(230,80,30,0.35)]"
                    >
                      CLOSE RECIPE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
