import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const BrandIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-[#071522] text-[#F3EEE4] overflow-hidden border-b border-[#CBD5E1]/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#12365A]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#A96820]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Editorial Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-10 h-[1px] bg-[#CBD5E1]" />
          <span className="font-sans text-xs tracking-[0.35em] text-[#CBD5E1] uppercase font-medium">
            AN ARCHIVE OF CHARACTER
          </span>
        </motion.div>

        {/* 2-Column Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dramatic Typography */}
          <motion.div 
            style={{ y: textY }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-[#F3EEE4]"
            >
              A SPIRIT BORN<br />
              <span className="italic font-normal text-[#CBD5E1]">OF ROYAL LEGACY.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg md:text-xl text-[#F3EEE4]/85 leading-relaxed max-w-xl font-light"
            >
              Patiyala Palace is an expression of Indian craftsmanship, heritage and contemporary whisky culture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-[#CBD5E1]/20 grid grid-cols-2 gap-8 max-w-md"
            >
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[#CBD5E1] font-light mb-1">
                  42.8%
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#F3EEE4]/60 uppercase">
                  ALCOHOL BY VOLUME
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-[#CBD5E1] font-light mb-1">
                  750 ML
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#F3EEE4]/60 uppercase">
                  MASTER BOTTLED
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual of Whisky / Bottle Presentation */}
          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-sm p-4 border border-[#CBD5E1]/20 bg-[#040B12]/60 shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex items-center justify-center overflow-hidden group">
              {/* Inner frame lines */}
              <div className="absolute inset-2 border border-[#CBD5E1]/10 pointer-events-none" />
              
              <img
                src="/assets/product/packaging_hero_3d.png"
                alt="Patiyala Palace Luxury Packaging"
                className="max-h-[92%] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-6 right-6 text-center">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#CBD5E1] bg-[#071522]/90 px-3 py-1 border border-[#CBD5E1]/30 backdrop-blur-sm">
                  INDIAN CRAFTED MALT WHISKY
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
