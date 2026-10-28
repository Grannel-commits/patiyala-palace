import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CocktailItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  tags: string[];
  description: string;
  ingredients: { name: string; amount: string }[];
  steps: string[];
  glassware: string;
  garnish: string;
}

const FIVE_FEATURED_COCKTAILS: CocktailItem[] = [
  {
    id: "patiyala-jam-sour",
    name: "PATIYALA ROYAL JAM SOUR",
    subtitle: "Artisanal Spiced Jam & Fresh Citrus",
    image: "/assets/cocktails/patiyala_jam_sour.jpg",
    tags: ["CITRUS SOUR", "ARTISANAL JAM", "SMOOTH MALT"],
    description: "A regal, tangy twist on the classic sour. Artisanal fruit jam adds luscious sweetness balanced by sharp fresh lemon juice and the smooth warmth of Indian crafted malt.",
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
      "Fine strain over fresh ice into a crystal rocks glass.",
      "Garnish with a fresh lemon wheel, berries, and an orange twist.",
    ],
    glassware: "Crystal Rocks Glass",
    garnish: "Fresh Lemon Wheel & Berries",
  },
  {
    id: "ginger-highball",
    name: "ROYAL GINGER PATIYALA",
    subtitle: "Fiery Ginger Ale & Fresh Orange Wheel",
    image: "/assets/cocktails/patiyala_ginger_highball.jpg",
    tags: ["WARMING GINGER", "BRIGHT ORANGE", "CRISP HIGHBALL"],
    description: "The ultimate refreshing highball. The rich vanilla, charred oak, and gentle spice notes of Patiyala Palace mingle with fiery ginger ale and freshly expressed orange oil.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "50 ml" },
      { name: "Premium Dry Ginger Ale", amount: "120 ml" },
      { name: "Fresh Orange Wedge / Wheel", amount: "1 slice" },
    ],
    steps: [
      "Fill a tall highball glass to the brim with clear solid ice cubes.",
      "Pour in Patiyala Palace Crafted Indian Malt whisky.",
      "Top slowly with cold dry ginger ale and give a gentle single stir.",
      "Garnish with a fresh orange wedge dropped into the highball.",
    ],
    glassware: "Tall Highball Glass",
    garnish: "Fresh Orange Wedge & Peel",
  },
  {
    id: "old-fashioned",
    name: "THE ROYAL OLD FASHIONED",
    subtitle: "Angostura Bitters, Orange Oils & Crystal Ice",
    image: "/assets/cocktails/patiyala_old_fashioned.jpg",
    tags: ["BOLD MALT", "ORANGE ZEST", "CLASSIC"],
    description: "The timeless bartender's favorite. Blended malt stirred gently with aromatic bitters and orange oils over a solitary hand-carved ice sphere for the connoisseur's savor.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "60 ml" },
      { name: "Angostura Bitters", amount: "3 dashes" },
      { name: "Demerara Sugar Syrup", amount: "1 tsp" },
      { name: "Orange Peel Twist", amount: "1 twist" },
      { name: "Maraschino Cherry", amount: "1 cherry" },
    ],
    steps: [
      "Muddle sugar syrup and aromatic bitters in the bottom of a mixing glass.",
      "Add whisky and a generous scoop of hard ice.",
      "Stir gently for 30 revolutions until chilled and properly diluted.",
      "Strain into a rocks glass over a large clear ice sphere. Express orange oils over the glass.",
    ],
    glassware: "Heavy Crystal Rocks Glass",
    garnish: "Expressed Orange Twist & Brandied Cherry",
  },
  {
    id: "espresso-martini",
    name: "ROYAL ESPRESSO MARTINI",
    subtitle: "Fresh Roasted Espresso & Golden Crema",
    image: "/assets/cocktails/patiyala_espresso_martini.jpg",
    tags: ["RICH COFFEE", "SMOOTH VANILLA", "CREAMY FOAM"],
    description: "Rich freshly brewed espresso combined with smooth Indian crafted malt and coffee liqueur for an electrifying digestif crowned with velvety golden crema.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "50 ml" },
      { name: "Fresh Hot Espresso", amount: "30 ml" },
      { name: "Coffee Liqueur (Kahlúa)", amount: "20 ml" },
      { name: "Sugar Syrup", amount: "10 ml" },
    ],
    steps: [
      "Brew fresh espresso and let cool for 1 minute.",
      "Add all ingredients into a shaker with plentiful hard ice.",
      "Shake hard and fast for 20 seconds to aerate and build a thick crema foam.",
      "Fine strain into a chilled coupe or martini glass. Float 3 roasted coffee beans.",
    ],
    glassware: "Chilled Coupe Glass",
    garnish: "3 Roasted Coffee Beans",
  },
  {
    id: "royal-rob",
    name: "THE SOVEREIGN ROYAL ROB",
    subtitle: "Sweet Italian Vermouth & Maraschino",
    image: "/assets/cocktails/covers/the_royal_rob.jpg",
    tags: ["SWEET VERMOUTH", "MANHATTAN TWIST", "CRAFTED MALT"],
    description: "A regal twist on the classic Rob Roy. Patiyala Palace Indian crafted malt stirred with sweet vermouth and aromatic Angostura bitters, served up in fine stemware.",
    ingredients: [
      { name: "Patiyala Palace Crafted Indian Malt", amount: "50 ml" },
      { name: "Sweet Red Italian Vermouth", amount: "25 ml" },
      { name: "Angostura Bitters", amount: "2 dashes" },
      { name: "Maraschino Liqueur", amount: "1 barspoon" },
    ],
    steps: [
      "Combine all ingredients in an ice-filled mixing glass.",
      "Stir with elegance for 30 seconds until ice cold.",
      "Strain into a chilled Nick & Nora or cocktail coupe.",
      "Garnish with a skewered brandied cherry.",
    ],
    glassware: "Nick & Nora / Cocktail Coupe",
    garnish: "Brandied Cherry on Silver Spear",
  },
];

interface Props {
  onSeeAllRecipes: () => void;
}

export const MonkeyCocktailsCarousel: React.FC<Props> = ({ onSeeAllRecipes }) => {
  const [activeCocktail, setActiveCocktail] = useState<CocktailItem | null>(null);

  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4 select-none">
      
      {/* Outer Card in Imperial Midnight Sapphire & 24K Regal Gold */}
      <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden bg-gradient-to-b from-[#030d24] via-[#05163e] to-[#020818] text-white shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#CBD5E1]/40">
        
        {/* Subtle Golden Radial Glow Overlay */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#CBD5E1]/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 right-10 w-[500px] h-[300px] bg-[#0b2b6f]/25 rounded-full blur-[120px]" />

        {/* ========================================================
            1. SECTION TITLE (LUXURY EDITORIAL SERIF)
        ======================================================== */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 select-none relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#020818]/80 border border-[#CBD5E1]/30 mb-3 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#E2E8F0]">
              PALACE MIXOLOGY
            </span>
          </div>

          <h2 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            Palace <span className="italic font-light text-[#E2E8F0]">Cocktails</span>
          </h2>
        </div>

        {/* ========================================================
            2. 5-PHOTO MOSAIC GRID (2 TOP, 3 BOTTOM)
        ======================================================== */}
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 relative z-10">
          
          {/* TOP ROW: 2 Cards (Asymmetric Left ~5 cols, Right ~7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
            
            {/* Top Left Card (5 cols - Portrait / Squarish) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCocktail(FIVE_FEATURED_COCKTAILS[0])}
              className="lg:col-span-5 group relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden bg-[#041235] border border-[#CBD5E1]/35 hover:border-[#E2E8F0] cursor-pointer shadow-xl hover:shadow-[0_15px_45px_rgba(226,232,240,0.25)] transition-all duration-500"
            >
              <img
                src={FIVE_FEATURED_COCKTAILS[0].image}
                alt={FIVE_FEATURED_COCKTAILS[0].name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Corner Pill Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#020818]/70 backdrop-blur-md border border-[#CBD5E1]/50 flex items-center justify-center text-[#E2E8F0] font-mono text-xs font-bold shadow-md group-hover:bg-[#CBD5E1] group-hover:text-black transition-all duration-300">
                +
              </div>

              {/* Permanent Elegant Gradient & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/90 via-[#020818]/30 to-transparent group-hover:from-black/95 transition-all duration-300 flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] font-mono tracking-widest text-[#CBD5E1]/80 uppercase mb-1">
                  Signature Serve
                </span>
                <h3 className="font-serif font-normal text-xl sm:text-2xl text-white tracking-wide leading-tight">
                  Royal Jam Sour
                </h3>
                <p className="font-serif font-light text-xs text-[#CBD5E1]/80 mt-1 line-clamp-1">
                  Artisanal fruit preserves & fresh citrus
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-[#E2E8F0] group-hover:text-white uppercase transition-colors">
                    Explore Recipe ↗
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Top Right Card (7 cols - Wide Landscape) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCocktail(FIVE_FEATURED_COCKTAILS[1])}
              className="lg:col-span-7 group relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/11] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden bg-[#041235] border border-[#CBD5E1]/35 hover:border-[#E2E8F0] cursor-pointer shadow-xl hover:shadow-[0_15px_45px_rgba(226,232,240,0.25)] transition-all duration-500"
            >
              <img
                src={FIVE_FEATURED_COCKTAILS[1].image}
                alt={FIVE_FEATURED_COCKTAILS[1].name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Corner Pill Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#020818]/70 backdrop-blur-md border border-[#CBD5E1]/50 flex items-center justify-center text-[#E2E8F0] font-mono text-xs font-bold shadow-md group-hover:bg-[#CBD5E1] group-hover:text-black transition-all duration-300">
                +
              </div>

              {/* Permanent Elegant Gradient & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/90 via-[#020818]/30 to-transparent group-hover:from-black/95 transition-all duration-300 flex flex-col justify-end p-6 sm:p-8">
                <span className="text-[10px] font-mono tracking-widest text-[#CBD5E1]/80 uppercase mb-1">
                  The Ritual
                </span>
                <h3 className="font-serif font-normal text-xl sm:text-2xl text-white tracking-wide leading-tight">
                  Ginger Highball
                </h3>
                <p className="font-serif font-light text-xs text-[#CBD5E1]/80 mt-1 line-clamp-1">
                  Dry ginger ale & expressed orange oils
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-[#E2E8F0] group-hover:text-white uppercase transition-colors">
                    Explore Recipe ↗
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* BOTTOM ROW: 3 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Card 3: Bottom Left (Old Fashioned) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCocktail(FIVE_FEATURED_COCKTAILS[2])}
              className="group relative aspect-square sm:aspect-[4/5] lg:aspect-square rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden bg-[#041235] border border-[#CBD5E1]/35 hover:border-[#E2E8F0] cursor-pointer shadow-xl hover:shadow-[0_15px_45px_rgba(226,232,240,0.25)] transition-all duration-500"
            >
              <img
                src={FIVE_FEATURED_COCKTAILS[2].image}
                alt={FIVE_FEATURED_COCKTAILS[2].name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Corner Pill Badge */}
              <div className="absolute top-4 right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#020818]/70 backdrop-blur-md border border-[#CBD5E1]/50 flex items-center justify-center text-[#E2E8F0] font-mono text-xs font-bold shadow-md group-hover:bg-[#CBD5E1] group-hover:text-black transition-all duration-300">
                +
              </div>

              {/* Permanent Elegant Gradient & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/90 via-[#020818]/30 to-transparent group-hover:from-black/95 transition-all duration-300 flex flex-col justify-end p-5 sm:p-6">
                <span className="text-[9px] font-mono tracking-widest text-[#CBD5E1]/80 uppercase mb-1">
                  Connoisseur
                </span>
                <h3 className="font-serif font-normal text-lg sm:text-xl text-white tracking-wide leading-tight">
                  The Old Fashioned
                </h3>
                <p className="font-serif font-light text-[11px] text-[#CBD5E1]/80 mt-0.5 line-clamp-1">
                  Angostura & hand-carved crystal ice
                </p>
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] text-[#E2E8F0] group-hover:text-white uppercase transition-colors">
                    Recipe ↗
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Bottom Middle (Espresso Martini) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCocktail(FIVE_FEATURED_COCKTAILS[3])}
              className="group relative aspect-square sm:aspect-[4/5] lg:aspect-square rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden bg-[#041235] border border-[#CBD5E1]/35 hover:border-[#E2E8F0] cursor-pointer shadow-xl hover:shadow-[0_15px_45px_rgba(226,232,240,0.25)] transition-all duration-500"
            >
              <img
                src={FIVE_FEATURED_COCKTAILS[3].image}
                alt={FIVE_FEATURED_COCKTAILS[3].name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Corner Pill Badge */}
              <div className="absolute top-4 right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#020818]/70 backdrop-blur-md border border-[#CBD5E1]/50 flex items-center justify-center text-[#E2E8F0] font-mono text-xs font-bold shadow-md group-hover:bg-[#CBD5E1] group-hover:text-black transition-all duration-300">
                +
              </div>

              {/* Permanent Elegant Gradient & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/90 via-[#020818]/30 to-transparent group-hover:from-black/95 transition-all duration-300 flex flex-col justify-end p-5 sm:p-6">
                <span className="text-[9px] font-mono tracking-widest text-[#CBD5E1]/80 uppercase mb-1">
                  Digestif
                </span>
                <h3 className="font-serif font-normal text-lg sm:text-xl text-white tracking-wide leading-tight">
                  Espresso Martini
                </h3>
                <p className="font-serif font-light text-[11px] text-[#CBD5E1]/80 mt-0.5 line-clamp-1">
                  Fresh roasted espresso & velvety crema
                </p>
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] text-[#E2E8F0] group-hover:text-white uppercase transition-colors">
                    Recipe ↗
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Bottom Right (Royal Rob) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCocktail(FIVE_FEATURED_COCKTAILS[4])}
              className="group relative aspect-square sm:aspect-[4/5] lg:aspect-square rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden bg-[#041235] border border-[#CBD5E1]/35 hover:border-[#E2E8F0] cursor-pointer shadow-xl hover:shadow-[0_15px_45px_rgba(226,232,240,0.25)] transition-all duration-500"
            >
              <img
                src={FIVE_FEATURED_COCKTAILS[4].image}
                alt={FIVE_FEATURED_COCKTAILS[4].name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Corner Pill Badge */}
              <div className="absolute top-4 right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#020818]/70 backdrop-blur-md border border-[#CBD5E1]/50 flex items-center justify-center text-[#E2E8F0] font-mono text-xs font-bold shadow-md group-hover:bg-[#CBD5E1] group-hover:text-black transition-all duration-300">
                +
              </div>

              {/* Permanent Elegant Gradient & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/90 via-[#020818]/30 to-transparent group-hover:from-black/95 transition-all duration-300 flex flex-col justify-end p-5 sm:p-6">
                <span className="text-[9px] font-mono tracking-widest text-[#CBD5E1]/80 uppercase mb-1">
                  Manhattan Twist
                </span>
                <h3 className="font-serif font-normal text-lg sm:text-xl text-white tracking-wide leading-tight">
                  The Sovereign Rob
                </h3>
                <p className="font-serif font-light text-[11px] text-[#CBD5E1]/80 mt-0.5 line-clamp-1">
                  Sweet Italian vermouth & maraschino
                </p>
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] text-[#E2E8F0] group-hover:text-white uppercase transition-colors">
                    Recipe ↗
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ========================================================
            3. EXACT HORIZONTAL DIVIDER + CENTER PILL BUTTON (REGAL SILVER)
        ======================================================== */}
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center my-10 sm:my-14 md:my-16 z-10">
          {/* Thin horizontal silver divider line */}
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#CBD5E1]/40 to-transparent" />

          {/* Centered Pill Button */}
          <button
            onClick={onSeeAllRecipes}
            className="relative z-10 px-8 sm:px-12 py-3 rounded-full border border-[#CBD5E1]/60 bg-[#020818]/95 hover:bg-[#E2E8F0] text-[#E2E8F0] hover:text-[#020818] font-mono text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_25px_rgba(203,213,225,0.15)] hover:shadow-[0_0_35px_rgba(226,232,240,0.35)] hover:scale-105 cursor-pointer"
          >
            All Recipes ↗
          </button>
        </div>

      </div>

      {/* ========================================================
          4. INTERACTIVE RECIPE MODAL
      ======================================================== */}
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
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#041235] text-white rounded-3xl overflow-hidden border-2 border-[#CBD5E1]/60 shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0">
                <img
                  src={activeCocktail.image}
                  alt={activeCocktail.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-[#041235]/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveCocktail(null)}
                  className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#CBD5E1] hover:text-black text-white flex items-center justify-center font-bold text-base transition-all border border-white/20 cursor-pointer shadow-lg"
                >
                  ✕
                </button>

                {/* Cocktail Title */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {activeCocktail.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-black/60 text-[#E2E8F0] border border-[#CBD5E1]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
                    {activeCocktail.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <p className="font-sans text-sm text-white/80 leading-relaxed font-light">
                  {activeCocktail.description}
                </p>

                {/* Ingredients & Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  {/* Ingredients */}
                  <div>
                    <h4 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-[#E2E8F0] mb-3">
                      INGREDIENTS
                    </h4>
                    <ul className="space-y-2 font-sans text-xs text-white/90">
                      {activeCocktail.ingredients.map((ing, i) => (
                        <li key={i} className="flex justify-between py-1 border-b border-white/5">
                          <span className="font-medium">{ing.name}</span>
                          <span className="font-mono text-[#E2E8F0] font-bold">{ing.amount}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Glassware & Garnish */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-[#E2E8F0] mb-1">
                        GLASSWARE
                      </h4>
                      <p className="font-sans text-xs text-white/80">{activeCocktail.glassware}</p>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-[#E2E8F0] mb-1">
                        GARNISH
                      </h4>
                      <p className="font-sans text-xs text-white/80">{activeCocktail.garnish}</p>
                    </div>
                  </div>
                </div>

                {/* Method / Steps */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-[#E2E8F0] mb-3">
                    METHOD
                  </h4>
                  <ol className="space-y-2 font-sans text-xs text-white/80">
                    {activeCocktail.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex gap-3">
                        <span className="font-mono font-bold text-[#E2E8F0]">{sIdx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                    PATIYALA PALACE • INDIAN CRAFTED MALT
                  </span>
                  <button
                    onClick={() => {
                      setActiveCocktail(null);
                      onSeeAllRecipes();
                    }}
                    className="px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#CBD5E1] hover:bg-[#E2E8F0] text-black transition-all cursor-pointer shadow-lg"
                  >
                    SEE ALL RECIPES ↗
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
