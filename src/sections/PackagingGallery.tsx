import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const PackagingGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["12%", "-14%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 md:py-48 bg-[#050D15] text-[#F3EEE4] overflow-hidden border-b border-[#CBD5E1]/15"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(18,54,90,0.25)_0%,rgba(5,13,21,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#CBD5E1]" />
            <span className="font-sans text-[11px] tracking-[0.35em] text-[#CBD5E1] uppercase font-medium">
              THE PACKAGING • CRAFT DESIGN
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
            ROYAL ADORNMENT
          </motion.h2>

          <p className="font-sans text-xs sm:text-sm text-[#F3EEE4]/70 mt-4 tracking-wider font-light max-w-lg mx-auto">
            Every curve of the decanter and embossed facet of the royal blue mono carton reflects palace architecture and sovereign poise.
          </p>
        </div>

        {/* 3 Parallax Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Card 1: 3D Packaging Box Perspective */}
          <motion.div
            style={{ y: y1 }}
            className="md:col-span-5 relative group"
          >
            <div className="relative aspect-[3/4] p-6 border border-[#CBD5E1]/20 bg-[#071522]/70 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-[#CBD5E1] uppercase font-sans">
                <span>MONO CARTON</span>
                <span>DEEP ROYAL BLUE</span>
              </div>

              <div className="relative flex-1 flex items-center justify-center my-4">
                <img
                  src="/assets/product/packaging_hero_3d.png"
                  alt="Patiyala Palace 3D Box Perspective"
                  className="max-h-[85%] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-4 border-t border-[#CBD5E1]/15 text-left">
                <h4 className="font-serif text-xl text-[#F3EEE4] font-light">
                  3D Architectural Presentation
                </h4>
                <span className="font-sans text-[10px] text-[#F3EEE4]/50 tracking-wider">
                  Gold Foil Embossed Royal Motif
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Center Palace Arch Linework & Medallion */}
          <motion.div
            style={{ y: y2 }}
            className="md:col-span-4 relative group"
          >
            <div className="relative aspect-[4/5] p-8 border border-[#CBD5E1]/30 bg-[#040B12]/80 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full border border-[#CBD5E1]/50 p-2.5 mb-6 flex items-center justify-center bg-[#071522]/90 shadow-[0_0_25px_rgba(203,213,225,0.25)]">
                <img
                  src="/assets/logo/patiala_logo_transparent.png"
                  alt="Gold Seal"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(203,213,225,0.4)]"
                />
              </div>

              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#CBD5E1] block mb-2 font-medium">
                THE MOTTO
              </span>
              <h3 className="font-serif text-2xl text-[#F3EEE4] font-light italic mb-4">
                "Where Royalty Meets The Barrel"
              </h3>
              <p className="font-sans text-xs text-[#F3EEE4]/60 leading-relaxed font-light mb-6">
                Intaglio gold foil stamping, custom royal crest embossing, and tamper-evident neck band seal.
              </p>

              <div className="w-16 h-[1px] bg-[#CBD5E1]/40" />
            </div>
          </motion.div>

          {/* Card 3: Packaging Front Panel Artwork */}
          <motion.div
            style={{ y: y3 }}
            className="md:col-span-3 relative group"
          >
            <div className="relative aspect-[3/4] p-6 border border-[#CBD5E1]/20 bg-[#071522]/70 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="text-[10px] tracking-[0.25em] text-[#CBD5E1] uppercase font-sans">
                <span>FACADE ARTWORK</span>
              </div>

              <div className="relative flex-1 flex items-center justify-center my-4">
                <img
                  src="/assets/product/packaging_front.png"
                  alt="Packaging Front Panel"
                  className="max-h-[85%] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-4 border-t border-[#CBD5E1]/15 text-left">
                <h4 className="font-serif text-lg text-[#F3EEE4] font-light">
                  Front Panel Art
                </h4>
                <span className="font-sans text-[10px] text-[#F3EEE4]/50 tracking-wider">
                  Royal Palace Illustrated
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
