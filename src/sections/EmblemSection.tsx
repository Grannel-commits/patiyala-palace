import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const EmblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section ref={ref} className="relative py-48 bg-brand-navy overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise" />
      
      <div className="relative z-10 text-center mb-16">
        <h2 className="font-serif text-5xl md:text-7xl text-brand-ivory mb-6 tracking-widest">
          THE MARK OF<br/>THE HOUSE
        </h2>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto" />
      </div>

      <motion.div 
        style={{ rotate, scale }}
        className="relative w-64 h-64 md:w-96 md:h-96"
      >
        <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-3xl" />
        <img 
          src="/assets/product/patiala-palace-emblem.jpg" 
          alt="The Royal Emblem" 
          className="relative z-10 w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(185,154,91,0.3)]"
        />
        
        <div className="absolute inset-0 rounded-full border border-brand-gold/30 scale-110" />
        <div className="absolute inset-0 rounded-full border border-brand-ivory/10 scale-125" />
      </motion.div>
    </section>
  );
};
