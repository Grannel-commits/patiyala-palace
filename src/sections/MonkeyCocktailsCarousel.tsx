import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CocktailItem {
  id: string;
  name: string;
  image: string;
  tags: string[];
  description: string;
  ingredients: { name: string; amount: string }[];
  steps: string[];
  glassware: string;
  garnish: string;
}

const MONKEY_COCKTAILS: CocktailItem[] = [
  {
    id: "patiyala-jam-sour",
    name: "PATIYALA ROYAL JAM SOUR",
    image: "/assets/cocktails/patiyala_jam_sour.jpg",
    tags: ["COCONUT", "SMOOTH VANILLA", "JUICY JAM", "SHARP CITRUS", "SMOOTH MALT"],
    description: "A regal, tangy twist on the classic sour. Artisanal fruit jam adds luscious sweetness balanced by sharp fresh lemon juice.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "50 ml" },
      { name: "Fresh Lemon Juice", amount: "20 ml" },
      { name: "Sugar Syrup", amount: "5 ml" },
      { name: "Spiced Jam (Raspberry or Blackberry)", amount: "2 tsp" },
      { name: "Soda Water (optional splash)", amount: "Splash" },
    ],
    steps: [
      "Add whisky, lemon juice, sugar syrup, and jam to a cocktail shaker.",
      "Fill with fresh ice cubes and shake vigorously for 15 seconds.",
      "Fine strain over fresh ice into a rocks glass.",
      "Garnish with fresh raspberries, blackberries, and an orange twist.",
    ],
    glassware: "Rocks Glass",
    garnish: "Fresh Berries & Orange Twist",
  },
  {
    id: "ginger-monkey",
    name: "ROYAL GINGER PATIYALA",
    image: "/assets/cocktails/patiyala_ginger_highball.jpg",
    tags: ["WARMING GINGER", "BRIGHT ORANGE", "SMOOTH MALT"],
    description: "The ultimate refreshing highball. The rich vanilla and malt notes of Patiyala Palace mingle with fiery ginger ale and fresh orange.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "50 ml" },
      { name: "Premium Dry Ginger Ale", amount: "120 ml" },
      { name: "Fresh Orange Wedge", amount: "1 wedge" },
    ],
    steps: [
      "Fill a tall highball glass to the brim with clear ice cubes.",
      "Pour in Patiyala Palace Crafted Indian Malt whisky.",
      "Top with cold dry ginger ale and give a gentle single stir.",
      "Squeeze a fresh orange wedge over the glass and drop it in.",
    ],
    glassware: "Highball Glass",
    garnish: "Fresh Orange Wedge",
  },
  {
    id: "espresso-martini",
    name: "ROYAL ESPRESSO MARTINI",
    image: "/assets/cocktails/patiyala_espresso_martini.jpg",
    tags: ["RICH COFFEE", "SMOOTH VANILLA", "GOLD MALT"],
    description: "Rich freshly brewed espresso combined with smooth blended malt for an electrifying coffee cocktail with velvety golden crema.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "50 ml" },
      { name: "Fresh Hot Espresso", amount: "30 ml" },
      { name: "Coffee Liqueur (Kahlúa)", amount: "20 ml" },
      { name: "Sugar Syrup", amount: "10 ml" },
    ],
    steps: [
      "Brew fresh espresso and let sit for 1 minute.",
      "Add all ingredients into a shaker with plentiful hard ice.",
      "Shake hard for 20 seconds to produce a dense, creamy foam layer.",
      "Fine strain into a chilled coupe or martini glass. Float 3 coffee beans.",
    ],
    glassware: "Coupe Glass",
    garnish: "3 Roasted Coffee Beans",
  },
  {
    id: "old-fashioned",
    name: "THE ROYAL OLD FASHIONED",
    image: "/assets/cocktails/patiyala_old_fashioned.jpg",
    tags: ["BOLD MALT", "ORANGE ZEST", "SMOOTH MALT"],
    description: "The timeless bartender's favorite. Blended malt stirred with aromatic bitters and orange oils over a single hand-carved ice sphere.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "60 ml" },
      { name: "Angostura Bitters", amount: "3 dashes" },
      { name: "Sugar Cube / Demerara Syrup", amount: "1 tsp" },
      { name: "Orange Peel Twist", amount: "1 twist" },
    ],
    steps: [
      "Muddle sugar and bitters in the bottom of a mixing glass.",
      "Add whisky and a generous handful of solid ice.",
      "Stir gently for 30 revolutions until properly chilled and diluted.",
      "Strain into a rocks glass over a large clear ice block. Express orange oils over top.",
    ],
    glassware: "Crystal Rocks Glass",
    garnish: "Express Orange Twist",
  },
];

interface Props {
  onSeeAllRecipes: () => void;
}

export const MonkeyCocktailsCarousel: React.FC<Props> = ({ onSeeAllRecipes }) => {
  const [activeCocktail, setActiveCocktail] = useState<CocktailItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Ginger Monkey default active
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    setActiveIndex((prev) => Math.min(MONKEY_COCKTAILS.length - 1, prev + 1));
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#030d24] via-[#061842] to-[#030d24] border border-[#C6A865]/35 shadow-2xl p-6 sm:p-10 md:p-14 select-none">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-white/15 pb-6">
          <div>
            <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#C6A865] block mb-2">
              MADE FOR MIXING
            </span>
            <h2 className="font-sans font-black uppercase text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
              FIND YOUR NEXT <br />
              <span className="text-[#E7C97C]">FAVOURITE COCKTAIL.</span>
            </h2>
          </div>

          <button
            onClick={onSeeAllRecipes}
            className="group inline-flex items-center gap-2 font-sans font-black text-xs sm:text-sm uppercase tracking-[0.16em] text-[#E7C97C] hover:text-white transition-colors cursor-pointer"
          >
            <span className="border-b-2 border-[#E7C97C] group-hover:border-white pb-0.5">
              SEE ALL RECIPES
            </span>
            <span className="text-base font-bold group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </button>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {MONKEY_COCKTAILS.map((cocktail, idx) => {
            const isElevated = idx === activeIndex;
            return (
              <motion.div
                key={cocktail.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setActiveCocktail(cocktail);
                }}
                className={`snap-center flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                  isElevated
                    ? "bg-[#0b101d] text-white border-2 border-[#C6A865] shadow-[0_20px_50px_rgba(212,175,55,0.3)] -translate-y-2"
                    : "bg-[#0b101d]/90 text-white/90 border border-white/15 hover:border-[#C6A865]/50 hover:-translate-y-1 shadow-xl"
                }`}
              >
                {/* Photo Container */}
                <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/60 mb-4 border border-white/10">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-[#E7C97C] text-xs font-bold border border-[#C6A865]/40 shadow-lg">
                    +
                  </div>
                </div>

                {/* Cocktail Name */}
                <div>
                  <h3 className="font-serif font-black text-lg sm:text-xl uppercase tracking-wider mb-3 text-white">
                    {cocktail.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {cocktail.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-white/10 text-[#E7C97C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Bottom Controls: Arrows */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={scrollLeft}
            aria-label="Previous cocktail"
            className="w-10 h-10 rounded-full bg-black text-white hover:bg-[#C6A865] hover:text-black flex items-center justify-center font-bold text-lg transition-colors cursor-pointer border border-[#C6A865]/30 shadow-lg"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next cocktail"
            className="w-10 h-10 rounded-full bg-black text-white hover:bg-[#C6A865] hover:text-black flex items-center justify-center font-bold text-lg transition-colors cursor-pointer border border-[#C6A865]/30 shadow-lg"
          >
            →
          </button>
        </div>

      </div>

      {/* Recipe Modal */}
      <AnimatePresence>
        {activeCocktail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[130] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveCocktail(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-[#030d24] rounded-3xl overflow-hidden border-2 border-[#C6A865] max-h-[90vh] overflow-y-auto shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCocktail(null)}
                className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#C6A865] hover:text-black text-white flex items-center justify-center font-bold text-sm transition-all border border-white/20 cursor-pointer"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[260px] md:min-h-full bg-black">
                  <img
                    src={activeCocktail.image}
                    alt={activeCocktail.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-serif tracking-[0.2em] uppercase text-[#E7C97C] font-bold block mb-1">
                      {activeCocktail.glassware} • {activeCocktail.garnish}
                    </span>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                      {activeCocktail.name}
                    </h2>
                    <p className="font-sans text-xs text-[#F1E6DA]/80 mt-2 font-light leading-relaxed">
                      {activeCocktail.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/10">
                      <h4 className="font-serif text-[10px] tracking-[0.25em] uppercase text-[#C6A865] mb-2 font-bold">
                        INGREDIENTS
                      </h4>
                      <ul className="space-y-1.5 font-sans text-xs">
                        {activeCocktail.ingredients.map((ing, iIdx) => (
                          <li key={iIdx} className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-white/80">{ing.name}</span>
                            <span className="font-mono font-bold text-[#E7C97C]">
                              {ing.amount}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10">
                      <h4 className="font-serif text-[10px] tracking-[0.25em] uppercase text-[#C6A865] mb-2 font-bold">
                        PREPARATION
                      </h4>
                      <ol className="space-y-1.5 list-decimal list-inside text-xs text-white/80 font-sans font-light leading-relaxed">
                        {activeCocktail.steps.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                    <button
                      onClick={() => setActiveCocktail(null)}
                      className="px-6 py-2.5 rounded-full text-xs font-sans font-black uppercase tracking-wider bg-[#C6A865] hover:bg-[#b89547] text-black cursor-pointer shadow-lg"
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
