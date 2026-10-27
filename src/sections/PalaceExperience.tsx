import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Bottle3D } from '../components/Bottle3D';

export const PalaceExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="experience" ref={containerRef} className="relative h-[150vh] bg-brand-navy">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[2000px]">
        
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center transform-style-preserve-3d"
        >
          <div className="relative w-[80vw] h-[80vh] md:w-[60vw] md:h-[90vh] border-[1px] border-brand-gold/30 rounded-t-full shadow-[inset_0_0_100px_rgba(11,58,99,0.8)] flex items-end justify-center pb-12">
            
            <div className="absolute bottom-0 w-[60%] h-[80%] border-x-[1px] border-t-[1px] border-brand-gold/20 rounded-t-full flex justify-center items-end" style={{ transform: 'translateZ(-100px)' }}>
              <div className="absolute bottom-0 w-[60%] h-[80%] border-x-[1px] border-t-[1px] border-brand-gold/10 rounded-t-full" style={{ transform: 'translateZ(-200px)' }} />
            </div>

            <div className="relative z-10 w-64 md:w-96 h-[50vh] pointer-events-none" style={{ transform: 'translateZ(100px)' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-amber/40 rounded-full blur-[60px]" />
              <div className="absolute inset-0 z-10">
                 <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
                    <Bottle3D />
                 </Canvas>
              </div>
            </div>

          </div>
        </motion.div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]) }}
            className="text-center bg-brand-navy/60 backdrop-blur-md p-12 border border-white/10 rounded-sm"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-brand-ivory leading-tight mb-4 tracking-widest">
              WHERE ROYAL<br/>CHARACTER MEETS<br/><span className="italic text-brand-gold">MODERN CRAFT</span>
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
