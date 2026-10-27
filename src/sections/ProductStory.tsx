import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Bottle3D } from '../components/Bottle3D';

export const ProductStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="story" ref={containerRef} className="relative py-32 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            style={{ y: textY }}
            className="w-full lg:w-1/2 relative z-20"
          >
            <h2 className="font-serif text-5xl md:text-7xl text-brand-ivory leading-[1.1] mb-8">
              A SPIRIT WITH<br/>
              <span className="italic text-brand-gold">A ROYAL PRESENCE</span>
            </h2>
            
            <p className="font-sans text-base text-brand-ivory/80 leading-relaxed font-light max-w-lg mb-8">
              Every detail of Patiyala Palace has been crafted to evoke the grandeur of a royal house. From the heavy rectangular glass to the intricate palace illustration on the ivory label.
            </p>
            
            <p className="font-sans text-base text-brand-ivory/80 leading-relaxed font-light max-w-lg">
              The amber liquid within reflects the warm light of grand corridors, offering a premium Indian crafted malt whisky experience that balances tradition with modern luxury.
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2 relative h-[70vh] flex justify-center items-center cursor-grab active:cursor-grabbing z-10" data-cursor="DRAG TO ROTATE">
            <div className="absolute inset-0 bg-brand-navy/50 rounded-full blur-3xl transform -scale-x-100" />
            
            <div className="relative z-10 w-full h-full pointer-events-auto">
              <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                <Bottle3D />
              </Canvas>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
