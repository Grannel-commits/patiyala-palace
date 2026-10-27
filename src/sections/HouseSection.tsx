import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export const HouseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="house" ref={ref} className="relative py-32 md:py-48 bg-brand-navy flex items-center justify-center overflow-hidden">
      {/* Subtle Arch Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
        <div className="w-[80vw] md:w-[40vw] h-[120vh] border-2 border-brand-gold rounded-t-[500px]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <h3 className="font-sans text-[10px] md:text-xs text-brand-gold tracking-[0.3em] uppercase mb-12">
          THE HOUSE BEHIND THE SPIRIT
        </h3>

        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-brand-ivory tracking-widest mb-4">
            PATIYALA PALACE
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-4" />
          <p className="font-sans text-xs md:text-sm text-brand-ivory/60 tracking-[0.2em] uppercase">
            SHAKSHAM SPIRITS PVT. LTD.
          </p>
        </div>

        <p className="font-serif text-2xl md:text-4xl text-brand-ivory leading-relaxed max-w-3xl">
          "Patiyala Palace is the spirit.
          <br />
          <span className="italic text-brand-ivory/80">Shaksham Spirits is the house behind it.</span>"
        </p>

        <p className="mt-12 font-sans text-sm md:text-base text-brand-ivory/70 leading-relaxed max-w-2xl font-light">
          Shaksham Spirits Pvt. Ltd. is the house behind Patiyala Palace — bringing together Indian spirit-making and a distinctive modern expression of premium whisky.
        </p>
      </motion.div>
    </section>
  );
};
