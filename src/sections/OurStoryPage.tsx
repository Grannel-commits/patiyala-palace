import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onBackToHome?: () => void;
  onExploreCocktails?: () => void;
}

export const OurStoryPage: React.FC<Props> = ({
  onBackToHome,
  onExploreCocktails,
}) => {
  const [activeTastingTab, setActiveTastingTab] = useState<"nose" | "palate" | "finish">("nose");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tastingProfiles = {
    nose: {
      headline: "A Rich, Honeyed & Spiced Bouquet",
      description: "Opens with luscious aromas of sun-ripened orchard fruits, candied orange peel, and golden honeycomb, quickly deepening into delicate Indian cardamom, toasted coconut, and sweet charred American oak.",
      notes: [
        { title: "Golden Sultanas", desc: "Sun-drenched dried orchard fruit sweetness" },
        { title: "Honey Blossom", desc: "Delicate floral nectar harvested from northern flora" },
        { title: "Green Cardamom", desc: "A regal whisper of fragrant royal spice" },
        { title: "Toasted Vanilla", desc: "Deep extraction from first-fill charred American oak" },
      ],
      intensity: "88%",
    },
    palate: {
      headline: "Silky, Full-Bodied & Regal Complexity",
      description: "A velvety, mouth-coating texture that reveals waves of creamy butterscotch, roasted almonds, dark caramel, and ripe golden plums, beautifully balanced by dry oak tannins and a touch of roasted malt biscuit.",
      notes: [
        { title: "Creamy Butterscotch", desc: "Velvety caramelized sugars with buttery warmth" },
        { title: "Roasted Almonds", desc: "Warm nutty depth from plump two-row Indian barley" },
        { title: "Stewed Stone Fruits", desc: "Ripe apricots and golden plums stewed in cane syrup" },
        { title: "Warm Oak Spices", desc: "Cinnamon bark and clove infused through heavy barrel char" },
      ],
      intensity: "94%",
    },
    finish: {
      headline: "Long, Velvety & Enduring Royal Warmth",
      description: "A remarkably enduring, warming finish that gently tapers with echoes of vanilla bean, toasted hazelnuts, delicate campfire oak embers, and a lingering sovereign spice.",
      notes: [
        { title: "Warm Royal Spice", desc: "Lingering pepper and clove that warms the chest" },
        { title: "Toasted Hazelnut", desc: "A long, dry, sophisticated roasted nut finish" },
        { title: "Charred Oak Embers", desc: "The indelible signature of first-fill white oak" },
        { title: "Golden Malt Oil", desc: "Viscous, un-chill filtered texture that coats the glass" },
      ],
      intensity: "92%",
    },
  };

  return (
    <div className="relative w-full min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans text-white overflow-x-hidden">
      
      {/* =========================================================================
          ROYAL BLUE & GOLD SILK BACKGROUND CANVAS (PERSISTENT & CINEMATIC)
          ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/backgrounds/our_story_bg.jpg"
          alt="Our Story Royal Blue and Gold Silk Canvas"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
        />
        {/* Subtle radial ambient glows for depth */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#0F51CF]/15 rounded-full blur-[160px] pointer-events-none" />
        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* =========================================================================
          SECTION 1: HERO PRESENTATION — THE PAST, WITH A PULSE.
          ========================================================================= */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-start items-center pt-20 sm:pt-24 pb-8 px-2 sm:px-4 md:px-6">
        <div className="w-full max-w-[1880px] mx-auto flex flex-col items-center">
          
          {/* Section Kicker */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-2 sm:mb-3 select-none"
          >
            <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]" />
            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-[#D4AF37] uppercase">
              PATIYALA PALACE • THE SOVEREIGN CHRONICLE
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]" />
          </motion.div>

          {/* Dynamic & Professional Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] tracking-tight text-center mb-4 sm:mb-6 leading-tight select-none"
          >
            The Past, with a Pulse.
          </motion.h1>

          {/* Curved Full-Screen Luxury Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[96vw] xl:max-w-[98vw] 2xl:max-w-[1850px] mx-auto h-[74vh] sm:h-[80vh] md:h-[83vh] lg:h-[86vh] rounded-[24px] sm:rounded-[36px] md:rounded-[48px] overflow-hidden p-2 sm:p-3 md:p-3.5 bg-gradient-to-b from-[#D4AF37]/50 via-white/10 to-[#D4AF37]/40 backdrop-blur-xl border border-[#D4AF37]/60 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.98),0_0_60px_rgba(212,175,55,0.3)] group"
          >
            {/* Inner Image Container with Matching Curved Corners */}
            <div className="relative w-full h-full rounded-[18px] sm:rounded-[28px] md:rounded-[40px] overflow-hidden bg-black/50">
              <img
                src="/assets/editorial/the_past_with_a_pulse.jpg"
                alt="The Past, with a Pulse - Patiyala Palace Handcrafted Glass and Oak"
                className="w-full h-full object-cover object-center select-none transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />

              {/* Gentle inner shadow and cinematic gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />
              <div className="absolute inset-0 rounded-[18px] sm:rounded-[28px] md:rounded-[40px] shadow-[inset_0_0_35px_rgba(0,0,0,0.5)] pointer-events-none" />

              {/* Floating Monolithic Glass Stamp */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/65 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#D4AF37]/40 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="font-display text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white font-semibold">
                  EST. ROYAL DARBAR HERITAGE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Smooth Scroll Indicator */}
          <button
            onClick={() => scrollToChapter("chapter-darbar")}
            className="mt-6 flex flex-col items-center gap-1.5 text-white/60 hover:text-[#D4AF37] transition-colors cursor-pointer group select-none"
          >
            <span className="font-display text-[10px] tracking-[0.25em] uppercase font-semibold">
              EXPLORE THE CHAPTERS
            </span>
            <span className="text-base transition-transform group-hover:translate-y-1">↓</span>
          </button>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DYNAMIC STICKY CHAPTER NAVIGATOR
          ========================================================================= */}
      <nav className="sticky top-16 z-30 w-full py-3 bg-[#020B1F]/80 backdrop-blur-xl border-y border-[#D4AF37]/25 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <span className="hidden lg:flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold shrink-0">
            <span>⚜</span> STORY CHAPTERS:
          </span>
          <div className="flex items-center gap-2 sm:gap-3 mx-auto lg:mx-0">
            {[
              { id: "chapter-darbar", label: "01. The Darbar" },
              { id: "chapter-terroir", label: "02. Himalayan Terroir" },
              { id: "chapter-stillhouse", label: "03. Copper Stills" },
              { id: "chapter-maturation", label: "04. Dynamic Maturation" },
              { id: "chapter-tasting", label: "05. Tasting Room" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToChapter(tab.id)}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 text-[10px] sm:text-xs font-display uppercase tracking-[0.15em] text-white/80 hover:text-[#F3E5AB] transition-all whitespace-nowrap cursor-pointer"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* =========================================================================
          SECTION 3: CHAPTER 01 — THE SOVEREIGN DARBAR OF PATIALA
          ========================================================================= */}
      <section id="chapter-darbar" className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-[#D4AF37] tracking-widest font-semibold">CHAPTER 01</span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-white/60">THE ROYAL GENESIS</span>
              </div>

              <h2 className="font-display font-medium text-3xl sm:text-5xl text-white uppercase tracking-[0.06em] leading-tight mb-4">
                The Darbar of Patiala.
              </h2>
              
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F3E5AB] leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4">
                "In the court of Patiala, hospitality was never measured in drops, but in honour."
              </blockquote>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light mb-4">
                During the golden reign of Maharaja Bhupinder Singh in early 20th-century Punjab, Patiala stood as the cultural beacon of northern India. The grand banquet halls of Qila Mubarak and Sheesh Mahal hosted monarchs, viceroys, and international sportsmen in spectacles of peerless splendour.
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light mb-8">
                It was here that the legendary <span className="text-[#D4AF37] font-semibold">Patiyala Peg</span> was born—not as an ordinary pour, but as an emblem of sovereign brotherhood and hospitality that refused to be restrained by timid measures. Saksham Spirits captures this royal courage, reviving artisanal distillation secrets for a discerning new generation.
              </p>

              {/* Stat Chips */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">1920s</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Royal Darbar Era</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">120 ML</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Legendary Royal Measure</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] aspect-[4/3] group">
                <img
                  src="/assets/editorial/palace_heritage_corridor.jpg"
                  alt="Patiyala Palace Architectural Heritage Corridor"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1F]/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Gold Seal Corner Stamp */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-[#D4AF37]/60 p-1 flex items-center justify-center bg-black/60 backdrop-blur-md shadow-xl">
                  <img
                    src="/assets/logo/official_gold_seal.png"
                    alt="Gold Seal"
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>

                <div className="absolute bottom-5 inset-x-5 text-center">
                  <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-semibold">
                    QILA MUBARAK • ARCHITECTURAL ARCHIVE
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-white/80 mt-1">
                    The ceremonial darbar corridors where the custom of royal hospitality was forged.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CHAPTER 02 — THE HIMALAYAN TERROIR & SUN-RIPENED MALT
          ========================================================================= */}
      <section id="chapter-terroir" className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 border-b border-[#D4AF37]/20 bg-[#020B1F]/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:order-1 order-2 relative"
            >
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] aspect-[4/3] group">
                <img
                  src="/assets/editorial/craft_malt.jpg"
                  alt="Northern Indian Malted Barley"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1F]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5 text-center">
                  <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-semibold">
                    PUNJAB ALLUVIAL PLAINS • TWO-ROW & SIX-ROW BARLEY
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-white/80 mt-1">
                    Dense grist rich in natural maltose sugars, nurtured by clean Himalayan meltwater.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:order-2 order-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-[#D4AF37] tracking-widest font-semibold">CHAPTER 02</span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-white/60">TERROIR & WATER</span>
              </div>

              <h2 className="font-display font-medium text-3xl sm:text-5xl text-white uppercase tracking-[0.06em] leading-tight mb-4">
                The Himalayan Terroir.
              </h2>
              
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F3E5AB] leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4">
                "Pure snowmelt from the Shivalik foothills breathes life into every grain of malt."
              </blockquote>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light mb-4">
                The soul of Patiyala Palace begins in the alluvial silt of northern India’s river basins. Under uninterrupted sunlight, our hand-selected two-row and six-row barley matures with high diastatic power, yielding deep malt sugars, nutty esters, and natural sweetness that cooler climates cannot replicate.
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light mb-8">
                Every drop of mashing water is drawn from pristine subterranean aquifers replenished by the eternal glaciers of the Shivalik Himalayas. Naturally filtered through mineral-rich mountain limestone, this pure, soft water allows for prolonged 48-hour slow fermentation.
              </p>

              {/* Terroir Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">100%</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Indian Malted Barley</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">48 HRS</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Slow Temperature Ferment</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CHAPTER 03 — SWAN-NECK COPPER STILLS & THE SACRED CUT
          ========================================================================= */}
      <section id="chapter-stillhouse" className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-[#D4AF37] tracking-widest font-semibold">CHAPTER 03</span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-white/60">THE STILLHOUSE ALCHEMY</span>
              </div>

              <h2 className="font-display font-medium text-3xl sm:text-5xl text-white uppercase tracking-[0.06em] leading-tight mb-4">
                Swan-Neck Copper Stills.
              </h2>
              
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F3E5AB] leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4">
                "Only the purest heart of the distillation run is deemed worthy of the royal crest."
              </blockquote>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light mb-4">
                In our stillhouse, distillation is treated not as a science, but as high art. Hand-hammered from pure red copper, our swan-neck pot stills feature gently ascending lyne arms that foster generous internal reflux. Heavy sulfur compounds are purged by the copper, allowing only the silkiest vapor to crest the helm.
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light mb-8">
                Our master distiller enforces a razor-precise "heart cut," setting aside the feints and foreshots to capture the purest, aromatic core of the spirit at <span className="text-[#D4AF37] font-semibold">42.8% ABV (75° Imperial Proof)</span>.
              </p>

              {/* Proof Specs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">42.8%</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Signature Royal Strength</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">Copper</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Hand-Hammered Pot Stills</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] aspect-[4/3] group">
                <img
                  src="/assets/editorial/whisky_liquid_amber_swirl.jpg"
                  alt="Liquid Amber Swirl in Copper Still"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1F]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5 text-center">
                  <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-semibold">
                    THE SACRED HEART RUN • NATURAL AMBER
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-white/80 mt-1">
                    Silky floral vapors condensed into brilliant liquid gold.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CHAPTER 04 — DYNAMIC MATURATION IN CHARRED WHITE OAK
          ========================================================================= */}
      <section id="chapter-maturation" className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 border-b border-[#D4AF37]/20 bg-[#020B1F]/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:order-1 order-2 relative"
            >
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D4AF37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] aspect-[4/3] group">
                <img
                  src="/assets/brand/submerged_bottle.jpg"
                  alt="Submerged Patiyala Palace Decanter in Azure Water"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1F]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5 text-center">
                  <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] block font-semibold">
                    FIRST-FILL CHARRED AMERICAN OAK • BARREL CELLARS
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-white/80 mt-1">
                    Extreme seasonal swings induce rapid barrel respiration and deep wood extraction.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:order-2 order-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-[#D4AF37] tracking-widest font-semibold">CHAPTER 04</span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-white/60">DYNAMIC CLIMATE AGING</span>
              </div>

              <h2 className="font-display font-medium text-3xl sm:text-5xl text-white uppercase tracking-[0.06em] leading-tight mb-4">
                Charred White Oak & Climate.
              </h2>
              
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F3E5AB] leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4">
                "The intense heat of northern summer followed by crisp winter chill accelerates liquid alchemy."
              </blockquote>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light mb-4">
                Unlike European cellars where maturation crawls under steady cold dampness, Patiyala Palace matures in first-fill charred American white oak casks (Quercus alba) subjected to northern India's dynamic climate swings—from near freezing in winter to over 42°C in summer.
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light mb-8">
                As the temperature rises, the oak staves expand, driving the spirit deep into the charred wood grain. As winter settles, the spirit retracts, pulling rich vanillin, toasted honeycomb, dried stone fruits, and warm caramel notes deep into the liquid.
              </p>

              {/* Barrel Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">1st Fill</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Charred White Oak</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block font-serif italic text-2xl text-[#D4AF37]">4°C - 44°C</span>
                  <span className="font-display text-[9px] uppercase tracking-widest text-white/60 mt-1 block">Dynamic Seasonal Variance</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CHAPTER 05 — THE DYNAMIC SENSORY TASTING ROOM
          ========================================================================= */}
      <section id="chapter-tasting" className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase font-semibold block mb-2">
              CHAPTER 05 • SENSORY EVALUATION
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl uppercase tracking-[0.08em] text-white">
              The Royal Tasting Room.
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* Interactive Tasting Tabs */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-12">
            {[
              { key: "nose", label: "01. The Nose" },
              { key: "palate", label: "02. The Palate" },
              { key: "finish", label: "03. The Finish" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTastingTab(tab.key as "nose" | "palate" | "finish")}
                className={`px-6 sm:px-8 py-3 rounded-full font-display text-xs sm:text-sm uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  activeTastingTab === tab.key
                    ? "bg-[#D4AF37] text-[#03102B] font-bold shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/15"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Tasting Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTastingTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[32px] bg-[#020B1F]/90 backdrop-blur-2xl border border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase block mb-1">
                    SENSORY HARMONY
                  </span>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-[#F3E5AB]">
                    {tastingProfiles[activeTastingTab].headline}
                  </h3>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                  <span>Profile Depth:</span>
                  <span className="text-[#D4AF37] font-bold">{tastingProfiles[activeTastingTab].intensity}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                {tastingProfiles[activeTastingTab].description}
              </p>

              {/* Note Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tastingProfiles[activeTastingTab].notes.map((n, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                    <span className="font-display text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-1">
                      {n.title}
                    </span>
                    <span className="text-xs text-white/70 font-light block">
                      {n.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: ROYAL SPECIFICATIONS MATRIX
          ========================================================================= */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 border-b border-[#D4AF37]/20 bg-[#020B1F]/60">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-[#D4AF37] uppercase block mb-2">
              SACRED STANDARDS
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl uppercase tracking-[0.12em] text-white">
              Royal Specifications.
            </h2>
            <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "MALT GRIST", val: "100% Northern Barley", sub: "Two-Row & Six-Row" },
              { label: "PROOF", val: "42.8% ABV", sub: "75° Imperial Proof" },
              { label: "CASK TYPE", val: "Charred White Oak", sub: "First-Fill American" },
              { label: "AQUIFER", val: "Shivalik Glacial", sub: "Subterranean Mountain Runoff" },
              { label: "STILLS", val: "Swan-Neck Copper", sub: "Hand-Hammered Pots" },
              { label: "FERMENTATION", val: "48-Hour Gentle", sub: "High Ester Production" },
              { label: "COLOR", val: "Natural Amber", sub: "Non-Chill Filtered" },
              { label: "VESSEL", val: "750 ML Crystal", sub: "Architectural Decanter" },
            ].map((spec, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group"
              >
                <span className="font-display text-[9px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
                  {spec.label}
                </span>
                <div className="my-3">
                  <span className="font-serif italic text-xl sm:text-2xl text-white group-hover:text-[#F3E5AB] transition-colors block">
                    {spec.val}
                  </span>
                  <span className="font-sans text-[10px] text-white/50 block mt-1">
                    {spec.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CLOSING INVITATION & CALL-TO-ACTION
          ========================================================================= */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="w-16 h-16 rounded-full border border-[#D4AF37]/70 p-2 flex items-center justify-center bg-[#04153B] mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <img
              src="/assets/logo/official_gold_seal.png"
              alt="Patiyala Palace Sovereign Seal"
              className="w-full h-full object-contain filter drop-shadow"
            />
          </div>

          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] block mb-3">
            THE JOURNEY CONTINUES
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl uppercase tracking-[0.08em] text-white mb-6">
            Taste The Royal Legacy.
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-10 max-w-xl">
            Explore our curated royal cocktail serves or locate authorized state allocations of Patiyala Palace Crafted Indian Malt.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {onExploreCocktails && (
              <button
                onClick={onExploreCocktails}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#03102B] font-display text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl cursor-pointer"
              >
                EXPLORE COCKTAILS
              </button>
            )}
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-[#D4AF37]/50 text-[#F3E5AB] font-display text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
              >
                THE DECANTER (HOME)
              </button>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
