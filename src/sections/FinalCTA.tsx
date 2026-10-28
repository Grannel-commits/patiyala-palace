import { motion } from "framer-motion";

interface Props {
  onExplore: () => void;
  onContact: () => void;
}

export const FinalCTA = ({ onExplore, onContact }: Props) => {
  return (
    <section
      id="cta"
      className="relative w-full py-36 md:py-48 bg-[#050D15] text-[#F3EEE4] overflow-hidden flex flex-col items-center justify-center text-center border-b border-[#CBD5E1]/15"
    >
      {/* Background Radial Ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(18,54,90,0.4)_0%,rgba(5,13,21,0.95)_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Large Gold Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10 group"
        >
          <div className="absolute -inset-6 rounded-full bg-[#CBD5E1]/15 blur-2xl opacity-60 animate-pulse-subtle" />
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-[#CBD5E1]/40 p-4 flex items-center justify-center bg-[#071522]/80 backdrop-blur-md shadow-[0_0_50px_rgba(203,213,225,0.25)]">
            <img
              src="/assets/logo/patiala_logo_transparent.png"
              alt="Patiyala Palace Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(203,213,225,0.35)]"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-[#F3EEE4] leading-tight mb-4"
        >
          WELCOME TO<br />
          <span className="italic text-[#CBD5E1] font-normal">PATIYALA PALACE.</span>
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-xs sm:text-sm text-[#CBD5E1] tracking-[0.35em] uppercase font-light mb-12"
        >
          DISCOVER THE ROYAL SPIRIT.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={onExplore}
            data-cursor="EXPLORE"
            className="group relative w-full sm:w-auto px-10 py-4 bg-[#CBD5E1] text-[#071522] font-sans text-xs tracking-[0.3em] uppercase font-semibold transition-all duration-500 overflow-hidden shadow-[0_10px_30px_rgba(203,213,225,0.25)] hover:bg-[#F3EEE4] hover:shadow-[0_15px_40px_rgba(203,213,225,0.4)]"
          >
            EXPLORE THE COLLECTION
          </button>

          <button
            onClick={onContact}
            data-cursor="CONTACT"
            className="w-full sm:w-auto px-10 py-4 border border-[#F3EEE4]/30 text-[#F3EEE4] font-sans text-xs tracking-[0.3em] uppercase font-medium hover:border-[#CBD5E1] hover:text-[#CBD5E1] transition-all duration-300"
          >
            CONTACT US
          </button>
        </motion.div>

      </div>
    </section>
  );
};
