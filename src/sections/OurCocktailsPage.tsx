import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ROYAL_COCKTAILS,
  CocktailRecipe,
  ALL_COCKTAILS,
} from "../data/cocktailsData";

interface Props {
  onBackToHome: () => void;
  onNavigateToDecanter?: () => void;
  initialRecipeId?: string | null;
}

export const OurCocktailsPage = ({
  onBackToHome,
  initialRecipeId,
}: Props) => {
  const [selectedRecipe, setSelectedRecipe] = useState<CocktailRecipe | null>(
    () => {
      if (typeof window !== "undefined") {
        const recipeParam = new URLSearchParams(window.location.search).get("recipe");
        if (recipeParam) {
          const found = ALL_COCKTAILS.find((r) => r.id === recipeParam || r.slug === recipeParam);
          if (found) return found;
        }
      }
      if (initialRecipeId) {
        return ALL_COCKTAILS.find((r) => r.id === initialRecipeId) || null;
      }
      return null;
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenRecipe = (recipe: CocktailRecipe) => {
    setSelectedRecipe(recipe);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `?page=cocktails&recipe=${recipe.id}`);
    }
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "?page=cocktails");
    }
  };

  const handlePrintRecipe = () => {
    window.print();
  };

  const handleShareRecipe = (recipe: CocktailRecipe) => {
    if (navigator.share) {
      navigator
        .share({
          title: `${recipe.name} — Patiyala Palace Royal Cocktail`,
          text: recipe.description,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Recipe link copied to clipboard!");
    }
  };

  // 6 Royal Cocktails: Top 2 primary cards + 4 secondary cards
  const primaryPair = ROYAL_COCKTAILS.slice(0, 2);
  const remainingCocktails = ROYAL_COCKTAILS.slice(2);

  return (
    <div className="relative w-full bg-transparent text-white min-h-screen font-sans">
      {/* ========================================================
          1. COMPOSABLE PAGE HEADER (Don Julio Exact Match)
          ======================================================== */}
      <section
        data-type="composable-element-page-header"
        className="relative w-full bg-transparent pt-24 pb-8 md:pt-32 md:pb-12 border-b border-[#62A4C6]/20"
      >
        <div className="relative mx-auto w-full max-w-screen-2xl px-6 sm:px-12 lg:px-20 z-20">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 mb-6">
            <button
              onClick={onBackToHome}
              className="hover:text-[#CBD5E1] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <span>←</span> HOME
            </button>
            <span>/</span>
            <span className="text-[#CBD5E1] font-bold">OUR COCKTAILS</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#CBD5E1] block mb-2">
                THE ROYAL COCKTAIL COLLECTION
              </span>
              <h1
                data-type="heading"
                className="font-serif text-[44px] sm:text-[80px] lg:text-[124px] font-normal leading-[0.9] text-white tracking-tight uppercase"
              >
                Recipes
              </h1>
            </div>
            <div className="max-w-md lg:pb-3">
              <p className="font-sans text-[14.5px] sm:text-[16px] font-normal leading-[24px] text-white/80">
                Six classic cocktails, reimagined with the royal depth of Patiyala Palace Crafted Indian Malt Whisky. Each serve honours heritage proportions, bespoke glassware, and ceremonial elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE 6 ROYAL COCKTAILS GRID
          ======================================================== */}
      <section data-type="recipe-collection" className="w-full py-12 md:py-16">
        <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-12 lg:px-20">
          
          {/* Row 1: The 2 Featured Cocktails (The Royal Rob & Maharaja's Revolver) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {primaryPair.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card group cursor-pointer flex flex-col justify-between"
                onClick={() => handleOpenRecipe(recipe)}
              >
                {/* Image Frame with exact Don Julio ratio */}
                <div className="relative aspect-[1.527] overflow-hidden rounded-[24px] bg-[#092F5C]/40 shadow-md group-hover:shadow-2xl transition-all duration-500 border border-[#62A4C6]/25 backdrop-blur-sm group-hover:border-[#91BED3]/60">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Don Julio Hover Dark Glass Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-[#04153B]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] rounded-[24px]">
                    <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#CBD5E1] mb-2 font-bold">
                      {recipe.classicName}
                    </span>
                    <p className="font-serif text-center uppercase text-white text-3xl sm:text-5xl lg:text-5xl tracking-wide leading-tight px-4 drop-shadow-md">
                      {recipe.name}
                    </p>
                    <div className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-white underline mt-5 group-hover:text-[#CBD5E1] transition-colors">
                      VIEW RECIPE
                    </div>
                  </div>
                </div>

                {/* Content Details Below Frame */}
                <div className="pt-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-sans text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#CBD5E1]">
                      {recipe.classicName}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-white/60 font-medium">
                      {recipe.prepTime} • {recipe.glassware}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl capitalize text-white tracking-tight group-hover:text-[#CBD5E1] transition-colors">
                    {recipe.name}
                  </h2>

                  <p className="font-sans pt-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#CBD5E1]">
                    {recipe.subtitle}
                  </p>

                  <p className="font-sans py-3 text-[14.5px] font-normal leading-[23px] text-white/80 line-clamp-2">
                    {recipe.description}
                  </p>

                  <div className="pt-1 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-sans text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.2em] underline text-white group-hover:text-[#CBD5E1] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View Recipe</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: The Next 4 Cocktails (Boulevard da Badshah, Patiyala Peg, Shahi Jam, Sour Sides of Patiyala) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {remainingCocktails.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card group cursor-pointer flex flex-col justify-between"
                onClick={() => handleOpenRecipe(recipe)}
              >
                {/* Image Frame */}
                <div className="relative aspect-[1.527] overflow-hidden rounded-[24px] bg-[#092F5C]/40 shadow-md group-hover:shadow-2xl transition-all duration-500 border border-[#62A4C6]/25 backdrop-blur-sm group-hover:border-[#91BED3]/60">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Don Julio Hover Dark Glass Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-[#04153B]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] rounded-[24px]">
                    <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-[#CBD5E1] mb-1 font-bold">
                      {recipe.classicName}
                    </span>
                    <p className="font-serif text-center uppercase text-white text-2xl sm:text-3xl lg:text-3xl tracking-wide leading-tight px-3 drop-shadow-md">
                      {recipe.name}
                    </p>
                    <div className="font-sans text-xs uppercase tracking-[0.25em] text-white underline mt-4 group-hover:text-[#CBD5E1] transition-colors">
                      VIEW RECIPE
                    </div>
                  </div>
                </div>

                {/* Content Details Below Frame */}
                <div className="pt-5">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-sans text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#CBD5E1]">
                      {recipe.classicName}
                    </span>
                    <span className="font-sans text-[10.5px] uppercase tracking-wider text-white/60 font-medium">
                      {recipe.prepTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl capitalize text-white tracking-tight group-hover:text-[#CBD5E1] transition-colors">
                    {recipe.name}
                  </h3>

                  <p className="font-sans pt-1 text-[11.5px] sm:text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">
                    {recipe.subtitle}
                  </p>

                  <p className="font-sans py-2.5 text-[14px] font-normal leading-[22px] text-white/80 line-clamp-2">
                    {recipe.description}
                  </p>

                  <div className="pt-1 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-sans text-[12px] sm:text-[12.5px] font-bold uppercase tracking-[0.2em] underline text-white group-hover:text-[#CBD5E1] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View Recipe</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          3. SOCIAL GRID SECTION (Don Julio Exact Match)
          ======================================================== */}
      <section data-type="social-grid" className="relative w-full bg-transparent pt-16 pb-20 border-t border-[#62A4C6]/20">
        <div className="relative mx-auto w-full max-w-screen-2xl px-6 sm:px-12 lg:px-20">
          <div className="topline mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white tracking-tight uppercase">
                Follow Us
              </h2>
              <p className="text-sm font-sans tracking-widest text-white/70 uppercase mt-2">
                Tag your royal moments with #PatiyalaPalaceCocktails
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/patiyalapalace/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#07173E] text-white flex items-center justify-center hover:bg-[#00248B] hover:scale-110 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#07173E] text-white flex items-center justify-center hover:bg-[#00248B] hover:scale-110 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.592 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {["social_1.jpg", "social_2.jpg", "social_3.jpg", "social_4.jpg"].map(
              (img, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-200 shadow-sm"
                >
                  <img
                    src={`/assets/cocktails/${img}`}
                    alt={`Patiyala Palace Cocktail Moment ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#00248B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 border border-white/60 rounded-full backdrop-blur-sm">
                      @patiyalapalace
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. RECIPE DETAIL MODAL / FULL VIEW (Don Julio Exact Match)
          ======================================================== */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 lg:p-10"
          >
            <motion.div
              initial={{ y: 40, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#04153B]/95 rounded-3xl overflow-hidden shadow-2xl my-auto text-white border border-[#62A4C6]/30 backdrop-blur-2xl"
            >
              {/* Top Action Bar */}
              <div className="p-6 sm:px-10 sm:pt-8 flex items-center justify-between border-b border-[#62A4C6]/20 bg-[#04153B]/90">
                <button
                  onClick={handleCloseRecipe}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#CBD5E1] hover:text-white transition-colors"
                >
                  <span>←</span> BACK TO COCKTAILS
                </button>
                <button
                  onClick={handleCloseRecipe}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-lg font-light"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Recipe Hero Media & Info */}
              <div className="p-6 sm:p-10 bg-[#04153B]/90">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[1.3] sm:aspect-[1.25] overflow-hidden rounded-2xl shadow-lg bg-[#092F5C]/40 border border-[#62A4C6]/25">
                    <img
                      src={selectedRecipe.image}
                      alt={selectedRecipe.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#04153B]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-white border border-[#62A4C6]/30 shadow-sm">
                      {selectedRecipe.classicName}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#CBD5E1] block mb-1">
                      PATIYALA PALACE ROYAL COLLECTION
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                      {selectedRecipe.name}
                    </h2>
                    <p className="font-sans pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#CBD5E1]">
                      {selectedRecipe.subtitle}
                    </p>
                    <p className="font-sans pt-4 text-sm leading-relaxed text-white/80">
                      {selectedRecipe.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#62A4C6]/20">
                      <div className="bg-[#092F5C]/50 p-3 rounded-xl border border-[#62A4C6]/20 flex items-center gap-2.5">
                        {selectedRecipe.vectorIcon && (
                          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#092F5C] rounded-lg p-1 border border-[#62A4C6]/25">
                            <img
                              src={selectedRecipe.vectorIcon}
                              alt={selectedRecipe.glassware}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase tracking-widest text-white/60 block">
                            Glassware
                          </span>
                          <span className="text-xs font-semibold text-white truncate block">
                            {selectedRecipe.glassware}
                          </span>
                        </div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                        <span className="text-[10px] uppercase tracking-widest text-white/60 block">
                          Ice
                        </span>
                        <span className="text-xs font-semibold text-white">
                          {selectedRecipe.ice}
                        </span>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                        <span className="text-[10px] uppercase tracking-widest text-white/60 block">
                          Garnish
                        </span>
                        <span className="text-xs font-semibold text-white">
                          {selectedRecipe.garnish}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ingredients & Preparation Verbatim from PPTX */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10">
                  {/* Ingredients (5 cols) */}
                  <div className="md:col-span-5 bg-white/10 p-6 rounded-2xl border border-white/10">
                    <h3 className="font-serif text-2xl uppercase tracking-tight text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span>Ingredients</span>
                      <span className="text-xs font-sans font-bold text-[#CBD5E1] tracking-widest">
                        {selectedRecipe.ingredients.length} ITEMS
                      </span>
                    </h3>
                    <ul className="space-y-3.5">
                      {selectedRecipe.ingredients.map((ing, idx) => (
                        <li
                          key={idx}
                          className="flex items-start justify-between gap-3 text-sm border-b border-white/10 pb-2.5 last:border-0 last:pb-0"
                        >
                          <span className="text-white/90 font-medium">
                            {ing.name}
                            {ing.notes && (
                              <span className="text-xs text-[#CBD5E1] italic block">
                                ({ing.notes})
                              </span>
                            )}
                          </span>
                          <span className="font-bold text-white text-right whitespace-nowrap">
                            {ing.amount}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparation (7 cols) */}
                  <div className="md:col-span-7 bg-white/10 p-6 rounded-2xl border border-white/10">
                    <h3 className="font-serif text-2xl uppercase tracking-tight text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span>Preparation</span>
                      <span className="text-xs font-sans font-bold text-[#CBD5E1] tracking-widest">
                        STEP BY STEP
                      </span>
                    </h3>
                    <ol className="space-y-4">
                      {selectedRecipe.preparation.map((step, idx) => (
                        <li key={idx} className="flex gap-4 text-sm leading-relaxed text-white/85">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CBD5E1] text-black flex items-center justify-center text-xs font-bold mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>

                    {/* Flavor Notes */}
                    {selectedRecipe.flavorNotes && (
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <span className="text-[10px] uppercase tracking-widest text-white/60 block mb-2 font-bold">
                          Key Flavor Profile
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedRecipe.flavorNotes.map((note, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-medium border border-white/10"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Controls: Print, Share */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrintRecipe}
                      className="px-5 py-2.5 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      Print Recipe
                    </button>
                    <button
                      onClick={() => handleShareRecipe(selectedRecipe)}
                      className="px-5 py-2.5 rounded-full bg-[#CBD5E1] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-md"
                    >
                      Share Cocktail
                    </button>
                  </div>

                  <button
                    onClick={handleCloseRecipe}
                    className="text-xs font-bold uppercase tracking-[0.2em] underline text-white hover:text-[#CBD5E1]"
                  >
                    Back to All Cocktails
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
