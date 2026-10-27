import React from "react";
import { motion } from "framer-motion";

interface Props {
  onExploreStory?: () => void;
}

export const OurStorySection: React.FC<Props> = ({ onExploreStory }) => {
  const craftSteps = [
    {
      num: "01",
      title: "100% Malted Barley",
      desc: "Selected two-row and six-row barley nurtured by pure Himalayan waters. We never use single grain—only 100% malted barley for rich, luscious body.",
    },
    {
      num: "02",
      title: "Copper Pot Stills",
      desc: "Distilled unhurriedly in hand-hammered swan-neck copper pot stills, capturing only the vibrant, sweet heart of each malt run.",
    },
    {
      num: "03",
      title: "First-Fill Charred Oak",
      desc: "Matured in heavily charred American white oak casks. The dynamic northern climate accelerates wood extraction of deep vanilla and warm spice.",
    },
    {
      num: "04",
      title: "The Marrying Tun",
      desc: "Individual malt casks are married together in traditional wooden marrying vats, harmonizing into supreme roundness made for effortless mixing.",
    },
  ];

  return (
    <section id="story" className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none z-20 bg-[#111111]">
      
      {/* Background Subtle Orange Ambient */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-[#E6501E]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-screen-xl">
        
        {/* Editorial Narrative Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E6501E] block mb-3">
            WHY WE DO IT • THE ETHOS
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
            ROOTED IN MALT. <br />
            <span className="text-[#E6501E]">
              MADE FOR MIXING.
            </span>
          </h2>
          <p className="mt-6 font-sans text-sm sm:text-base text-[#F1E6DA]/85 leading-relaxed font-light">
            Whisky used to be bound by stuffy rules, stiff armchairs, and monocles. We set out to change that. Inspired by the hardworking malt men who turned barley by hand, we crafted a 100% blended malt that's rich, smooth, and built to make cocktails shine. No snobbery. No fuss.
          </p>
        </div>

        {/* 4-Step Craft Lineage (Clean Minimalist Grid with Hairline Dividers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-10 border-y border-white/10">
          {craftSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-start"
            >
              <span className="font-mono font-black text-3xl sm:text-4xl text-[#E6501E] block mb-2">
                {step.num}
              </span>
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-[#F1E6DA]/70 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Monkey Shoulder Bold High-Contrast Stats */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-b border-white/10">
          {[
            { val: "100%", label: "Single Malts Only" },
            { val: "42.8%", label: "Signature Proof" },
            { val: "0%", label: "Stuffy Snobbery" },
            { val: "100%", label: "Made For Mixing" },
          ].map((stat, sIdx) => (
            <div key={sIdx} className="flex flex-col items-center">
              <span className="font-sans font-black text-4xl sm:text-6xl text-white">
                {stat.val.includes("%") ? (
                  <>
                    {stat.val.replace("%", "")}
                    <span className="text-[#E6501E]">%</span>
                  </>
                ) : (
                  stat.val
                )}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E6501E] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {onExploreStory && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onExploreStory}
              className="px-8 py-4 rounded-full bg-[#E6501E] hover:bg-[#FF6B00] text-black font-sans font-black text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-[0_10px_30px_rgba(230,80,30,0.35)] cursor-pointer hover:scale-105"
            >
              READ OUR FULL STORY →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

