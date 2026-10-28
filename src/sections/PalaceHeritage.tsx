import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const PalaceHeritage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const palaceY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const lineworkScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section
      id="palace"
      ref={containerRef}
      className="relative w-full py-32 md:py-48 bg-[#050D15] text-[#F3EEE4] overflow-hidden border-b border-[#CBD5E1]/15"
    >
      {/* Background Architectural Blueprint Grid & Radial Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(18,54,90,0.35)_0%,rgba(5,13,21,0.98)_75%)] pointer-events-none" />
      
      {/* Subtle Geometric Lattice Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-[#CBD5E1]" />
          <span className="font-sans text-[11px] tracking-[0.35em] text-[#CBD5E1] uppercase font-medium">
            THE PALACE • HERITAGE
          </span>
          <span className="w-8 h-[1px] bg-[#CBD5E1]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-[#F3EEE4] mb-6 leading-tight"
        >
          WHERE HERITAGE<br />
          <span className="italic text-[#CBD5E1] font-normal">MEETS THE SPIRIT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="font-sans text-sm sm:text-base text-[#F3EEE4]/75 max-w-2xl leading-relaxed font-light mb-16"
        >
          Inspired by the regal courts, architectural majesty, and fabled traditions of Patiala. 
          A tribute to centuries of grandeur translated into an immortal crafted malt whisky.
        </motion.p>

        {/* Architectural Centerpiece with Parallax */}
        <div className="relative w-full max-w-4xl py-12 flex flex-col items-center justify-center">
          
          {/* Subtle Royal Arch Outline */}
          <motion.div
            style={{ scale: lineworkScale }}
            className="absolute inset-0 border border-[#CBD5E1]/20 rounded-t-full pointer-events-none"
          />
          <div className="absolute inset-2 border border-[#CBD5E1]/10 rounded-t-full pointer-events-none" />

          {/* Genuine Palace Architectural Line Engraving from Label Master */}
          <motion.div
            style={{ y: palaceY }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl px-6 py-8 flex flex-col items-center"
          >
            <img
              src="/assets/brand/palace_architecture_gold_transparent.png"
              alt="Patiyala Palace Royal Architecture"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_35px_rgba(203,213,225,0.35)]"
            />

            <div className="mt-8 flex items-center justify-center gap-4 text-xs font-sans tracking-[0.3em] uppercase text-[#CBD5E1]">
              <span>ROYAL ARCHIVE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
              <span>PUNJAB REGAL LEGACY</span>
            </div>
          </motion.div>

          {/* Editorial Pillars Underneath */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 mt-12 border-t border-[#CBD5E1]/15 text-left">
            <div className="space-y-2">
              <span className="font-serif text-lg text-[#CBD5E1]">01 • ARCHITECTURE</span>
              <p className="font-sans text-xs text-[#F3EEE4]/70 leading-relaxed font-light">
                Intricate chhatris, arched colonnades, and grand facades inspire the geometric balance and regal poise of every bottle.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif text-lg text-[#CBD5E1]">02 • ROYAL HOSPITALITY</span>
              <p className="font-sans text-xs text-[#F3EEE4]/70 leading-relaxed font-light">
                The legend of the royal banquet, where celebrations were marked by generous toasts and unparalleled generosity of spirit.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif text-lg text-[#CBD5E1]">03 • CRAFT REBORN</span>
              <p className="font-sans text-xs text-[#F3EEE4]/70 leading-relaxed font-light">
                Preserving the soul of historic artistry while distilling a modern malt whisky capable of gracing the finest tables in the world.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
