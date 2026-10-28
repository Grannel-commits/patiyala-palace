import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CraftStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
}

const STEPS: CraftStep[] = [
  {
    number: "01",
    title: "THE MALT",
    subtitle: "Selection of Rare Indian & Scotch Malts",
    description: "Crafted from a harmonious marriage of premium Indian matured malts and select Highland Scotch whisky concentrates, uniting northern Indian warmth with Scottish heritage.",
    details: "Carefully calibrated barley grains malted and fermented to preserve floral aromatics and roasted malt complexity.",
  },
  {
    number: "02",
    title: "THE CRAFT & WATER",
    subtitle: "Demineralised Purity & Thermal Aging",
    description: "Slowly integrated with pristine demineralised pure water. The spirit undergoes dynamic temperature variations native to the subcontinent, accelerating deep barrel interaction.",
    details: "Seasoned charred oak casks impart deep amber hues and notes of warm toasted vanilla and spice.",
  },
  {
    number: "03",
    title: "THE BLEND",
    subtitle: "Masterfully Balanced Alchemy",
    description: "Master blenders meticulously marry each batch to achieve an extraordinary balance of bold northern Indian character, smooth texture, and lingering depth.",
    details: "Vatted patiently in quiet repose before cold filtration and bottling under exacting craft standards.",
  },
  {
    number: "04",
    title: "THE CHARACTER",
    subtitle: "Regal Depth & Velvet Warmth",
    description: "An expressive profile: golden amber in the glass, layered with aromas of honeyed oak, dried fruit, gentle smoke, and a rich, rounded palate that finishes with royal distinction.",
    details: "42.8% v/v (75° Proof) — delivering full-bodied intensity with unmatched sip smoothness.",
  },
];

export const CraftSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="craft"
      ref={containerRef}
      className="relative w-full py-32 md:py-48 bg-[#050D15] text-[#F3EEE4] overflow-hidden border-b border-[#CBD5E1]/15"
    >
      {/* Background Ambience */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(18,54,90,0.3)_0%,rgba(5,13,21,0.95)_75%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#CBD5E1]" />
            <span className="font-sans text-[11px] tracking-[0.35em] text-[#CBD5E1] uppercase font-medium">
              OUR CRAFT • PROCESS
            </span>
            <span className="w-8 h-[1px] bg-[#CBD5E1]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-[#F3EEE4] leading-tight"
          >
            CRAFTED<br />
            <span className="italic text-[#CBD5E1] font-normal">WITH CHARACTER.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-[#F3EEE4]/75 mt-6 font-light leading-relaxed max-w-xl mx-auto"
          >
            A deliberate synthesis of venerable blending heritage and contemporary craft mastery.
          </motion.p>
        </div>

        {/* 4 Editorial Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 border border-[#CBD5E1]/20 bg-[#071522]/60 backdrop-blur-md rounded-sm flex flex-col justify-between hover:border-[#CBD5E1]/60 transition-all duration-500 hover:-translate-y-1 shadow-lg"
            >
              {/* Top number and accent */}
              <div>
                <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#CBD5E1]/15">
                  <span className="font-serif text-4xl lg:text-5xl text-[#CBD5E1] font-light">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#CBD5E1]/40 group-hover:bg-[#CBD5E1] transition-colors" />
                </div>

                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#CBD5E1] font-semibold block mb-2">
                  {step.subtitle}
                </span>

                <h3 className="font-serif text-2xl text-[#F3EEE4] font-light tracking-wide mb-4">
                  {step.title}
                </h3>

                <p className="font-sans text-xs text-[#F3EEE4]/75 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Bottom detail pill */}
              <div className="pt-4 border-t border-[#CBD5E1]/10">
                <span className="font-sans text-[10px] text-[#F3EEE4]/50 leading-relaxed block font-light">
                  {step.details}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
