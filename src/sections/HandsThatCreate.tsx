import { motion } from "framer-motion";

interface CraftPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
}

const pillars: CraftPillar[] = [
  {
    number: "01",
    title: "The Himalayan Grain",
    subtitle: "Indigenous 6-Row Barley",
    description:
      "Cultivated in the fertile Himalayan foothills, irrigated by glacial meltwaters. Its dense protein structure yields a distinctive, honeyed malt character.",
    detail: "Harvested at peak solar maturity",
  },
  {
    number: "02",
    title: "Copper Pot Distillation",
    subtitle: "Slow Artisanal Batch Stills",
    description:
      "Crafted exclusively in small copper pot stills with elongated swan necks. Prolonged vapor contact strips heavy sulfur, leaving only delicate orchard fruit notes.",
    detail: "Strictly limited heart cut",
  },
  {
    number: "03",
    title: "Dual Oak Alchemy",
    subtitle: "Charred Bourbon & Oloroso",
    description:
      "Aged through dramatic North Indian temperature swings, accelerating cask breathing. Finished in seasoned European sherry casks for rich amber depth.",
    detail: "Non-chill filtered for full body",
  },
  {
    number: "04",
    title: "The Royal Decanter",
    subtitle: "Hand-Crafted Ceramic & 24K Gold",
    description:
      "Every bottle is individually cast, hand-glazed with royal cobalt motifs, and crowned with a weighted gold seal honoring the Maharaja's court.",
    detail: "Individually numbered bottles",
  },
];

export const HandsThatCreate = () => {
  return (
    <section
      id="craft"
      className="relative w-full py-16 sm:py-24 md:py-36 bg-white text-[#07173E] overflow-hidden border-b border-[#00248B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#00248B]" />
              <span className="font-sans text-[11px] tracking-[0.35em] text-[#00248B] uppercase font-semibold">
                ARTISANS & PATRIMONY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00248B] font-light tracking-tight uppercase leading-none">
              Hands that Create
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-xs sm:text-sm text-[#45516E] leading-relaxed font-light">
              Each decanter of Patiyala Palace is sculpted with the devotion of master coppersmiths, oak coopers, and royal calligraphers—carrying forward centuries of sovereign Indian craftsmanship.
            </p>
          </div>
        </div>

        {/* Feature Centerpiece: Palace Architecture Engraving */}
        <div className="relative w-full rounded-sm bg-[#F0F2FC] border border-[#00248B]/15 p-8 md:p-14 mb-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Architecture Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative max-w-md w-full"
              >
                <div className="absolute inset-0 bg-[#00248B]/5 rounded-full filter blur-2xl pointer-events-none" />
                <img
                  src="/assets/brand/palace_architecture_clean_gold.png"
                  alt="Patiyala Palace Heritage Architectural Engraving"
                  className="relative z-10 w-full h-auto max-h-72 object-contain drop-shadow-sm"
                />
              </motion.div>
            </div>

            {/* Poetic Quote & Heritage Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C8A85B] font-semibold block">
                THE SOVEREIGN PROMISE
              </span>

              <blockquote className="font-serif text-2xl sm:text-3xl text-[#00248B] font-light leading-snug">
                &ldquo;We do not merely distill spirits. We distill the dignity, poetry, and sovereign pride of the royal house of Patiala.&rdquo;
              </blockquote>

              <p className="font-sans text-xs text-[#45516E] leading-relaxed font-light">
                Conceived in 1763 under the patronage of Maharaja Ala Singh and perfected over generations, the royal cellar traditions blend time-honored Scottish pot still heritage with native Indian grains and dynamic monsoon maturation.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <span className="font-serif text-2xl text-[#00248B] font-normal">1763</span>
                  <span className="block font-sans text-[9px] tracking-widest uppercase text-[#45516E]">
                    Court Foundation
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-[#00248B]/20" />
                <div>
                  <span className="font-serif text-2xl text-[#00248B] font-normal">100%</span>
                  <span className="block font-sans text-[9px] tracking-widest uppercase text-[#45516E]">
                    Malted Indian Barley
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-[#00248B]/20" />
                <div>
                  <span className="font-serif text-2xl text-[#00248B] font-normal">24K</span>
                  <span className="block font-sans text-[9px] tracking-widest uppercase text-[#45516E]">
                    Gold Leaf Emblem
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 md:p-8 bg-white border border-[#00248B]/10 hover:border-[#00248B]/30 transition-all duration-300 rounded-sm hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="font-serif text-3xl text-[#00248B]/30 font-light group-hover:text-[#00248B] transition-colors">
                  {pillar.number}
                </span>

                <div>
                  <h3 className="font-serif text-xl text-[#00248B] font-normal mb-1">
                    {pillar.title}
                  </h3>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-[#C8A85B] font-semibold block">
                    {pillar.subtitle}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#45516E] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#00248B]/10">
                <span className="font-sans text-[10px] tracking-wider text-[#00248B] font-medium block">
                  {pillar.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
