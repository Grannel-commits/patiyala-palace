import { motion } from "framer-motion";

interface FullscreenImageItem {
  id: string;
  src: string;
  alt: string;
}

const FULLSCREEN_IMAGES: FullscreenImageItem[] = [
  {
    id: "glacial-lake-reflection",
    src: "/assets/editorial/bottle_mountain_lake_reflection.jpg",
    alt: "Patiyala Palace Indian Crafted Malt Whisky Mirrored in Alpine Glacial Waters",
  },
  {
    id: "liquid-gold-amber-swirl",
    src: "/assets/editorial/whisky_liquid_amber_swirl.jpg",
    alt: "Patiyala Palace Liquid Gold Malt Whisky Fluid Amber Currents",
  },
  {
    id: "ceremonial-crystal-tumbler",
    src: "/assets/editorial/tumbler_crystal_ice.jpg",
    alt: "Patiyala Palace Hand-Cut Diamond Crystal Tumbler with Whisky Poured on Ice",
  },
];

export const SovereignTrilogy = () => {
  return (
    <section
      id="trilogy"
      className="relative w-full py-10 sm:py-16 md:py-24 bg-[#F0F2FC] overflow-hidden"
    >
      {/* Vertical Single-Column Sequence of Full Screen Images */}
      <div className="w-full flex flex-col space-y-10 sm:space-y-20 md:space-y-32">
        {FULLSCREEN_IMAGES.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full overflow-hidden bg-[#010817] select-none"
            style={{ minHeight: "60vw" }}
          >
            {/* Ambient blur glow background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover object-center filter blur-3xl opacity-35 scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Main image — full width, aspect-ratio preserved */}
            <img
              src={item.src}
              alt={item.alt}
              className="relative z-10 w-full h-auto max-h-[90vh] object-contain object-center block mx-auto"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
