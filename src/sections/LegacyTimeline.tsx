import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Milestone {
  concept: string;
  phase: string;
  headline: string;
  narrative: string;
}

const MILESTONES: Milestone[] = [
  {
    concept: "HERITAGE",
    phase: "THE PAST",
    headline: "The Royal Court of Patiala",
    narrative: "An ancient legacy renowned for lavish hospitality, grand durbar halls, and the legendary custom of celebratory royal pours that symbolized peerless generosity.",
  },
  {
    concept: "CRAFT",
    phase: "THE AWAKENING",
    headline: "Mastery Across Distant Distilleries",
    narrative: "Bridging the time-honoured secrets of Scottish copper pot distillation with northern India's warm climate barrel aging, unlocking new frontiers of whisky character.",
  },
  {
    concept: "EVOLUTION",
    phase: "THE PRESENT",
    headline: "Indian Malt Reimagined",
    narrative: "Patiyala Palace arrives as a bold statement of Indian luxury, crafted for connoisseurs who value heritage, uncompromised quality, and contemporary sophistication.",
  },
  {
    concept: "LEGACY",
    phase: "THE FUTURE",
    headline: "An Enduring Royal Spirit",
    narrative: "Setting a permanent benchmark for Indian crafted spirits on the world stage — where royalty meets the barrel, generation after generation.",
  },
];

export const LegacyTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section
      id="legacy"
      ref={containerRef}
      className="relative w-full py-32 md:py-48 bg-[#071522] text-[#F3EEE4] overflow-hidden border-b border-[#CBD5E1]/15"
    >
      {/* Subtle radial atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(18,54,90,0.3)_0%,rgba(7,21,34,0)_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#CBD5E1]" />
            <span className="font-sans text-[11px] tracking-[0.35em] text-[#CBD5E1] uppercase font-medium">
              THE LEGACY • STORY
            </span>
            <span className="w-8 h-[1px] bg-[#CBD5E1]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-[#F3EEE4]"
          >
            THE ROYAL<br />
            <span className="italic text-[#CBD5E1] font-normal">CHRONICLE.</span>
          </motion.h2>

          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#CBD5E1] mt-4 font-light">
            PAST → PRESENT → FUTURE
          </p>
        </div>

        {/* Timeline Container with Gold Central Line */}
        <div className="relative">
          
          {/* Vertical Gold Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#CBD5E1]/20 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#CBD5E1] via-[#E2E8F0] to-[#CBD5E1] shadow-[0_0_12px_rgba(203,213,225,0.5)]"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24">
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.concept}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right"
                  }`}>
                    <div className="p-8 border border-[#CBD5E1]/20 bg-[#040B12]/80 backdrop-blur-md rounded-sm hover:border-[#CBD5E1]/50 transition-all duration-500 shadow-xl">
                      <div className="flex items-center gap-3 mb-2 justify-start md:justify-start">
                        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#CBD5E1] font-semibold">
                          {item.phase}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl md:text-4xl text-[#CBD5E1] font-light tracking-wide mb-3">
                        {item.concept}
                      </h3>

                      <h4 className="font-serif text-lg text-[#F3EEE4] font-normal mb-3">
                        {item.headline}
                      </h4>

                      <p className="font-sans text-xs text-[#F3EEE4]/75 leading-relaxed font-light">
                        {item.narrative}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Gold Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-[#CBD5E1] bg-[#071522] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(203,213,225,0.4)]">
                    <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
                  </div>

                  {/* Empty placeholder for balance */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
