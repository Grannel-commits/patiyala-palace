import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Bottle3D } from '../components/Bottle3D';

export const HeroRoyalHouse = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#F4EEDF] flex items-center justify-between overflow-hidden"
    >
      {/* Background radial for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(244,238,223,1)_100%)] pointer-events-none" />

      {/* Left side: Typography */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 h-full pointer-events-none"
      >
        <h2 className="font-serif text-brand-navy/60 text-lg md:text-xl tracking-[0.2em] mb-4">
          SHAKSHAM SPIRITS PVT. LTD.
        </h2>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[140px] leading-[0.9] text-brand-navy tracking-tight mb-8">
          The Royal<br />
          Experience
        </h1>

        <p className="font-sans text-brand-navy/70 text-lg md:text-xl max-w-md font-light">
          Enter the exclusive world of Patiyala Palace. A premium Indian crafted malt whisky born from tradition.
        </p>
      </motion.div>

      {/* Right side: Massive 3D Bottle */}
      <div className="absolute top-0 right-[-10%] w-[120%] lg:w-[60%] h-full z-30 flex items-center justify-center cursor-grab active:cursor-grabbing" data-cursor="DRAG">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Bottle3D />
        </Canvas>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-24 z-30 flex flex-col items-start pointer-events-none">
        <span className="font-sans text-[10px] text-brand-navy/60 tracking-[0.2em] uppercase mb-4">Scroll Down</span>
        <div className="w-[1px] h-12 bg-brand-navy/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-brand-navy"
          />
        </div>
      </div>
    </section>
  );
};
