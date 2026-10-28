import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onBackToHome?: () => void;
  onExploreCocktails?: () => void;
  onExploreSessions?: () => void;
  onNavigateFindUs?: () => void;
}

export const OurStoryPage: React.FC<Props> = ({
  onBackToHome,
  onExploreCocktails,
  onExploreSessions,
  onNavigateFindUs,
}) => {
  const [activeSensoryTab, setActiveSensoryTab] = useState<"nose" | "palate" | "finish">("nose");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sensoryProfiles = {
    nose: {
      headline: "Rich Malt & Smoked Vanilla",
      tagline: "First Impression On The Nose",
      description:
        "On the nose, you get rich malt and smoked vanilla. Warm aromas of freshly kilned grain meet delicate sweet vanilla bean kissed by charred oak smoke, creating an immediate sense of grand royal hospitality.",
      notes: [
        { title: "Rich Kilned Malt", desc: "Golden toasted barley directly from traditional floor maltings" },
        { title: "Smoked Vanilla", desc: "Subtle sweet warmth derived from deep charring inside white oak" },
        { title: "Wild Blossom Nectar", desc: "A gentle floral top note reminiscent of northern orchards" },
        { title: "Soft Oak Spice", desc: "A fragrant whisper of nutmeg and clove resting in the background" },
      ],
      color: "from-amber-400 to-amber-600",
    },
    palate: {
      headline: "Toasted Oak, Warm Spices & Dried Fruits",
      tagline: "The Sovereign Tasting Experience",
      description:
        "Take a sip, and you taste toasted oak, warm spices, and a hint of dried fruits. It tastes like old-world luxury with extreme smoothness and great mouthfeel. Every sip coats the palate in rich, balanced warmth.",
      notes: [
        { title: "Toasted American Oak", desc: "Caramelized wood sugars imparting buttery, vanilla-rich depth" },
        { title: "Warm Indian Spices", desc: "Gentle warming cinnamon, green cardamom, and subtle clove" },
        { title: "Sun-Dried Fruits", desc: "Sweet whispers of golden sultanas, sun-dried apricots, and fig" },
        { title: "Silky Velvety Texture", desc: "Heavy mouth-coating viscosity that drinks exceptionally smooth" },
      ],
      color: "from-amber-500 to-orange-600",
    },
    finish: {
      headline: "Extreme Smoothness & Great Mouthfeel",
      tagline: "The Royal Enduring Finish",
      description:
        "A long, velvety taper that leaves an indelible impression of royal luxury. The warmth gently lingers in the chest with zero harshness, inviting the next celebratory pour.",
      notes: [
        { title: "Enduring Warmth", desc: "A royal chest-warming glow characteristic of genuine high malt" },
        { title: "Smoked Oak Embers", desc: "Delicate dry wood tannins balancing the rich honeyed sweetness" },
        { title: "Viscous Golden Tail", desc: "Unctuous finish that stays silky on the tongue for minutes" },
        { title: "Malt Echoes", desc: "A clean, regal aftertaste that calls for another celebratory toast" },
      ],
      color: "from-orange-500 to-amber-700",
    },
  };

  return (
    <div className="relative w-full min-h-screen selection:bg-[#CBD5E1] selection:text-black font-sans text-white overflow-x-hidden">
      
      {/* =========================================================================
          PERSISTENT LUXURY AMBIENCE CANVAS
          ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#020818]" />
        {/* Ambient royal glow gradients */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CBD5E1]/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#1e3a8a]/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-3/4 left-1/4 w-[500px] h-[500px] bg-[#d97706]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* =========================================================================
          HERO PRESENTATION: PATIALA PALACE WHISKY
          "It is a spirit that bottles the sheer grandness of a most flamboyant royal era."
          ========================================================================= */}
      <section className="relative z-10 w-full min-h-[85vh] flex flex-col justify-between pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-3 sm:px-6 md:px-12 border-b border-white/10">
        
        {/* Breadcrumb Navigation & Chapter Jumper */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#CBD5E1]/70">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
            )}
            <span>/</span>
            <span className="text-[#E2E8F0] font-bold">Our Story</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
            {[
              { id: "legendary-measure", label: "01 The Measure" },
              { id: "crafted-for-royal", label: "02 Crafted for Royal" },
              { id: "nose-and-taste", label: "03 Nose & Taste" },
              { id: "modern-legacy", label: "04 Modern Legacy" },
            ].map((ch) => (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[#CBD5E1] hover:text-white border border-white/10 transition-all cursor-pointer"
              >
                {ch.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Headline & Split Presentation */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto">
          
          {/* Left Column (7 cols): Royal Manifesto */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/60 border border-[#CBD5E1]/40 backdrop-blur-md mb-4 sm:mb-6"
            >
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#E2E8F0] uppercase">
                THE ROYAL HERITAGE CHRONICLE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-white"
            >
              Patiala Palace <br />
              <span className="italic font-light text-[#E2E8F0] drop-shadow-[0_0_35px_rgba(226,232,240,0.35)]">
                Whisky.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif italic text-lg sm:text-2xl md:text-3xl text-amber-200/90 mt-4 sm:mt-6 max-w-2xl leading-relaxed font-light"
            >
              "It is a spirit that bottles the sheer grandness of a most flamboyant royal era."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToChapter("legendary-measure")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono text-xs font-bold uppercase tracking-[0.15em] transition-all cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(226,232,240,0.4)] text-center"
              >
                Explore The Story ↓
              </button>
              {onExploreCocktails && (
                <button
                  onClick={onExploreCocktails}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-[0.15em] border border-white/20 transition-all cursor-pointer text-center"
                >
                  Cocktail Serves ↗
                </button>
              )}
            </motion.div>

          </div>

          {/* Right Column (5 cols): Cinematic Photo Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CBD5E1]/30 shadow-2xl bg-black/60 group">
              <img
                src="/assets/story/royal_palace_architecture.jpg"
                alt="Grand Indian Royal Palace Architecture"
                className="w-full h-[280px] sm:h-[420px] md:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-amber-300 block font-bold">
                    Historical Genesis
                  </span>
                  <span className="font-serif text-base sm:text-lg text-white font-bold">
                    The Grand Royal Era
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-xs font-mono">
                  1880s
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between text-xs font-mono text-white/50 border-t border-white/10">
          <span>01 / 04 THE SOVEREIGN CHRONICLE</span>
          <button
            onClick={() => scrollToChapter("legendary-measure")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Scroll to Chapter 01 ↓
          </button>
        </div>

      </section>

      {/* =========================================================================
          CHAPTER 1: THE LEGENDARY MEASURE
          "We cannot talk about Patiala without talking about the 'Patiala Peg.'
           That bold, generous hospitality became the benchmark for a great evening.
           It is the exact same philosophy blended into every bottle of Patiala Palace Whisky today."
          ========================================================================= */}
      <section
        id="legendary-measure"
        className="relative z-10 w-full py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 border-b border-white/10 bg-[#030b20]/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Photo Card: The Patiala Peg Pour */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CBD5E1]/30 shadow-2xl bg-black/80 group">
                <img
                  src="/assets/story/patiala_peg_pour.jpg"
                  alt="The Iconic Patiala Peg Pour in Crystal Glass"
                  className="w-full h-[280px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
                
                {/* Visual Measure Callout */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#E2E8F0] font-bold">
                  The Four-Finger Measure
                </div>

                <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-md border border-[#CBD5E1]/30">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-300 block font-bold mb-1">
                    ROYAL TRADITION
                  </span>
                  <p className="font-serif italic text-sm sm:text-base text-white/95 leading-relaxed">
                    "Bold, generous, unapologetically flamboyant hospitality."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 mb-3 sm:mb-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#CBD5E1] uppercase">
                  CHAPTER 01
                </span>
              </div>

              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                The Legendary Measure
              </h2>

              <p className="font-serif italic text-lg sm:text-2xl text-amber-200 mt-3 sm:mt-4 leading-relaxed font-light">
                "We cannot talk about Patiala without talking about the 'Patiala Peg.'"
              </p>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80 font-light leading-relaxed">
                <p>
                  That bold, generous hospitality became the benchmark for a great evening. In the opulent courtrooms and lavish banquets of royal Patiala, spirits were never served with timid caution — they were poured with open-hearted generosity, four fingers high, measuring true celebration rather than restriction.
                </p>
                <p className="text-white/90 font-normal">
                  It is the exact same philosophy blended into every bottle of Patiala Palace Whisky today. A whisky crafted for those who embrace life with royal vigor, where every glass shared is an invitation to celebrate without reservation.
                </p>
              </div>

              {/* The Measure Pillars Grid */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#041235]/90 border border-[#CBD5E1]/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#CBD5E1] block mb-1">
                    PHILOSOPHY
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                    Generous Hospitality
                  </h4>
                  <p className="font-sans text-xs text-white/70 mt-1 leading-relaxed">
                    A royal benchmark that turns an ordinary gathering into a landmark evening.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#041235]/90 border border-[#CBD5E1]/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#CBD5E1] block mb-1">
                    EXECUTION
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                    Master-Blended Boldness
                  </h4>
                  <p className="font-sans text-xs text-white/70 mt-1 leading-relaxed">
                    Designed to hold its character over ice, water, or in sovereign highballs.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          CHAPTER 2: CRAFTED FOR ROYAL
          "Patiala Palace Whisky is not just named after a place.
           It is engineered to taste like a celebration."
           • The Blend: Master blenders select the finest Indian grains and select and specialty imported scotch malts.
           • The Aging: The spirit rests quietly in charred American white oak barrels.
           • The Climate: The intense and vibrant climate accelerates the wood and spirit interaction to create phenomenal Malt spirits.
           • The Result: A deep amber liquid with an incredibly smooth finish.
          ========================================================================= */}
      <section
        id="crafted-for-royal"
        className="relative z-10 w-full py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Chapter Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#CBD5E1] block mb-2 font-bold">
              CHAPTER 02 • THE CRAFT & THE METRICS
            </span>
            <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Crafted for Royal:
            </h2>
            <p className="font-serif italic text-lg sm:text-2xl text-amber-200/90 mt-3 sm:mt-4 font-light">
              "Patiala Palace Whisky is not just named after a place. It is engineered to taste like a celebration."
            </p>
          </div>

          {/* 4 Pillars Grid (Direct from User PDF) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            
            {/* 1. The Blend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#041235]/90 border border-[#CBD5E1]/30 hover:border-[#E2E8F0] transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="/assets/story/golden_barley_grains.jpg"
                  alt="Harvested Golden Indian Grains and Select Scotch Malts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-transparent to-transparent" />
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-bold text-amber-300">
                  PILLAR 01
                </span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  The Blend
                </h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mt-2 sm:mt-3 font-light">
                  <span className="font-bold text-white">Master blenders select the finest Indian grains and select and specialty imported scotch malts.</span> A harmonious marriage of Scottish heritage distillation and high-grade Indian agricultural character, yielding extraordinary complexity and depth.
                </p>
              </div>
            </motion.div>

            {/* 2. The Aging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#041235]/90 border border-[#CBD5E1]/30 hover:border-[#E2E8F0] transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="/assets/story/oak_barrels_aging.jpg"
                  alt="Charred American White Oak Barrels Aging in Vault"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-transparent to-transparent" />
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-bold text-amber-300">
                  PILLAR 02
                </span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  The Aging
                </h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mt-2 sm:mt-3 font-light">
                  <span className="font-bold text-white">The spirit rests quietly in charred American white oak barrels.</span> As the spirit breathes through deeply charred staves, it draws forth rich vanillin, toasted wood sugars, warm spices, and a velvety mouthfeel.
                </p>
              </div>
            </motion.div>

            {/* 3. The Climate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#041235]/90 border border-[#CBD5E1]/30 hover:border-[#E2E8F0] transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="/assets/editorial/dispatch_copper_alchemy_stills.jpg"
                  alt="Distillation stills and dynamic atmospheric climate maturation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-transparent to-transparent" />
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-bold text-amber-300">
                  PILLAR 03
                </span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  The Climate
                </h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mt-2 sm:mt-3 font-light">
                  <span className="font-bold text-white">The intense and vibrant climate accelerates the wood and spirit interaction to create phenomenal Malt spirits.</span> The dynamic seasonal thermal shifts force the liquid deep into the oak heartwood, extracting decades of flavor in an accelerated, concentrated span.
                </p>
              </div>
            </motion.div>

            {/* 4. The Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#041235]/90 border border-[#CBD5E1]/30 hover:border-[#E2E8F0] transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="/assets/story/amber_whisky_glass.jpg"
                  alt="Deep Amber Liquid with Incredibly Smooth Finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-transparent to-transparent" />
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-bold text-amber-300">
                  PILLAR 04
                </span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  The Result
                </h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mt-2 sm:mt-3 font-light">
                  <span className="font-bold text-white">A deep amber liquid with an incredibly smooth finish.</span> Luminous, richly reflective, and remarkably rounded, giving every glass an opulent golden presence worthy of royal banquet tables.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          CHAPTER 3: NOSE AND TASTE
          "On the nose, you get rich malt and smoked vanilla.
           Take a sip, and you taste toasted oak, warm spices, and a hint of dried fruits.
           It tastes like old-world luxury with extreme smoothness and great mouthfeel."
          ========================================================================= */}
      <section
        id="nose-and-taste"
        className="relative z-10 w-full py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 border-b border-white/10 bg-[#03091c]/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 mb-3 sm:mb-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#CBD5E1] uppercase">
                  CHAPTER 03 • THE TASTING REVELATION
                </span>
              </div>

              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Nose and Taste
              </h2>

              <p className="font-serif italic text-lg sm:text-2xl text-amber-200 mt-3 sm:mt-4 leading-relaxed font-light">
                "It tastes like old-world luxury with extreme smoothness and great mouthfeel."
              </p>

              <blockquote className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border-l-4 border-amber-400 text-xs sm:text-base text-white/90 leading-relaxed font-light">
                <p className="font-medium text-white mb-2">
                  "On the nose, you get rich malt and smoked vanilla."
                </p>
                <p>
                  "Take a sip, and you taste toasted oak, warm spices, and a hint of dried fruits. It tastes like old-world luxury with extreme smoothness and great mouthfeel."
                </p>
              </blockquote>

              {/* Interactive Sensory Tabs */}
              <div className="mt-6 sm:mt-8 flex gap-2 border-b border-white/15 pb-3 w-full overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
                {(["nose", "palate", "finish"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSensoryTab(tab)}
                    className={`px-4 sm:px-5 py-2 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                      activeSensoryTab === tab
                        ? "bg-[#E2E8F0] text-[#020818] shadow-md"
                        : "bg-white/5 hover:bg-white/15 text-[#CBD5E1]"
                    }`}
                  >
                    {tab === "nose" ? "The Nose" : tab === "palate" ? "The Palate" : "The Finish"}
                  </button>
                ))}
              </div>

              {/* Active Tab Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSensoryTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 sm:mt-6 w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#041235]/90 border border-[#CBD5E1]/25"
                >
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                    {sensoryProfiles[activeSensoryTab].tagline}
                  </span>
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
                    {sensoryProfiles[activeSensoryTab].headline}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed mt-2 font-light">
                    {sensoryProfiles[activeSensoryTab].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-4 pt-4 border-t border-white/10">
                    {sensoryProfiles[activeSensoryTab].notes.map((note) => (
                      <div key={note.title} className="text-xs">
                        <span className="font-bold text-[#CBD5E1] block">
                          • {note.title}
                        </span>
                        <span className="text-white/60 text-[11px] font-light">
                          {note.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Right Photo Column: Spices & Tasting Elements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CBD5E1]/30 shadow-2xl bg-black/80 group">
                <img
                  src="/assets/story/warm_spices_vanilla.jpg"
                  alt="Smoked vanilla beans, toasted oak, cinnamon, star anise, and warm spices"
                  className="w-full h-[280px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/85 backdrop-blur-md border border-[#CBD5E1]/30">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-300 block font-bold mb-1">
                    NATURAL FLAVOUR EXTRACTION
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                    Rich Malt • Smoked Vanilla • Toasted Oak
                  </h4>
                  <p className="font-sans text-xs text-white/70 mt-1">
                    Warm spices & dried fruits with extreme smoothness.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          CHAPTER 4: THE MODERN LEGACY
          "You do not need a crown to drink like a king.
           Whether you are celebrating a massive business deal, sharing stories with old friends,
           or pouring a traditional Patiala Peg at a wedding, Patiala Palace brings the royal court straight to your glass.
           It is a timeless bridge between royal heritage and modern sophistication.

           Next time you pour a glass, raise it high. Taste the history. Taste the grandeur.

           Patiala Palace Whisky. Live life king-size."
          ========================================================================= */}
      <section
        id="modern-legacy"
        className="relative z-10 w-full py-14 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Photo: Celebratory Toast */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CBD5E1]/30 shadow-2xl bg-black/80 group">
                <img
                  src="/assets/story/royal_celebration_toast.jpg"
                  alt="Friends celebrating with Patiala Palace glasses raised high"
                  className="w-full h-[280px] sm:h-[420px] md:h-[480px] lg:h-[560px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-md border border-[#CBD5E1]/30">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-300 block font-bold mb-1">
                    THE ROYAL TOAST
                  </span>
                  <p className="font-serif italic text-base sm:text-xl text-white font-medium">
                    "Next time you pour a glass, raise it high. Taste the history. Taste the grandeur."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 mb-3 sm:mb-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#CBD5E1] uppercase">
                  CHAPTER 04 • LIVING KING-SIZE
                </span>
              </div>

              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                The Modern Legacy
              </h2>

              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-amber-300 mt-3 sm:mt-4 leading-relaxed font-normal">
                "You do not need a crown to drink like a king."
              </p>

              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed">
                <p>
                  Whether you are celebrating a massive business deal, sharing stories with old friends, or pouring a traditional Patiala Peg at a wedding, Patiala Palace brings the royal court straight to your glass.
                </p>
                <p>
                  It is a timeless bridge between royal heritage and modern sophistication. Created for the connoisseurs of today who know that greatness is not inherited, but lived.
                </p>
              </div>

              {/* Callout Box */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/15 via-black/60 to-[#041235] border border-amber-500/30 w-full">
                <p className="font-serif text-base sm:text-xl text-amber-100 font-medium">
                  Next time you pour a glass, raise it high. <br />
                  <span className="text-white font-bold">Taste the history. Taste the grandeur.</span>
                </p>
                <div className="mt-4 pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-serif font-bold text-lg sm:text-2xl text-white tracking-wide">
                    Patiala Palace Whisky.
                  </span>
                  <span className="font-mono text-xs text-amber-300 uppercase tracking-widest font-bold">
                    Live life king-size.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 w-full sm:w-auto">
                {onExploreCocktails && (
                  <button
                    onClick={onExploreCocktails}
                    className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(226,232,240,0.35)]"
                  >
                    Palace Cocktails ↗
                  </button>
                )}
                {onExploreSessions && (
                  <button
                    onClick={onExploreSessions}
                    className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
                  >
                    Palace Sessions 🎵
                  </button>
                )}
                {onNavigateFindUs && (
                  <button
                    onClick={onNavigateFindUs}
                    className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
                  >
                    Find In Outlets 📍
                  </button>
                )}
                {onBackToHome && (
                  <button
                    onClick={onBackToHome}
                    className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 rounded-full border border-white/30 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Back To Home
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
