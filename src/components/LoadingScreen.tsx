import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-[120] bg-[#030914] flex flex-col items-center justify-center overflow-hidden text-[#FAF5EC]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,37,69,0.4)_0%,rgba(3,9,20,1)_85%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center p-6 text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-28 h-28 mb-6 relative rounded-full border border-[#C5A869]/60 p-2.5 flex items-center justify-center bg-[#07182C]/90 shadow-[0_0_50px_rgba(197,168,105,0.35)]"
          >
            <img 
              src="/assets/logo/PATIALA_PALACE_LOGO.png" 
              alt="Patiyala Palace Master Emblem" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(197,168,105,0.4)]"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl text-[#FFFFFF] font-bold mb-2 tracking-widest drop-shadow-lg"
          >
            PATIYALA PALACE
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-[10px] md:text-xs text-[#C5A869] tracking-[0.35em] uppercase font-bold mb-10"
          >
            SHAKSHAM SPIRITS PVT. LTD.
          </motion.h2>

          {/* Golden Progress Bar */}
          <div className="w-64 h-[2px] bg-white/15 relative overflow-hidden mb-4 rounded-full">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#C5A869] shadow-[0_0_15px_rgba(197,168,105,0.8)]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-sans text-[10px] text-[#FAF5EC]/70 tracking-[0.25em] uppercase font-medium"
          >
            ENTERING THE ROYAL HOUSE • {progress}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
