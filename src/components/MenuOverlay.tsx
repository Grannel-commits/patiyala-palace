import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MenuOverlay: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const handleSelect = (id: string) => {
    onNavigate(id);
    onClose();
  };

  const navLinks = [
    { label: "Our Whiskies", id: "whiskies", tag: "BATCH 27 • 100% MALT" },
    { label: "Cocktails", id: "cocktails", tag: "MADE FOR MIXING" },
    { label: "Our Story", id: "story", tag: "THE ROOTS & CRAFT" },
    { label: "Palace Sessions", id: "sessions", tag: "SOUND & MUSIC" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[120] bg-[#02091c]/98 backdrop-blur-3xl text-white flex flex-col justify-between overflow-y-auto"
        >
          {/* Header Row */}
          <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between border-b border-[#C6A865]/25">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C6A865]/60 p-1 flex items-center justify-center bg-black/60 shadow-lg">
                <img
                  src="/assets/logo/pp_logo_gold_clean.png"
                  alt="Patiyala Palace Royal Seal"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <span className="font-serif font-bold text-lg uppercase tracking-[0.2em] text-[#E7C97C]">
                PATIYALA PALACE
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Menu"
              className="flex items-center gap-2 group p-2 text-white hover:text-[#E7C97C] transition-colors cursor-pointer"
            >
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                CLOSE
              </span>
              <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#E7C97C] flex items-center justify-center font-bold text-xs bg-white/5">
                ✕
              </div>
            </button>
          </div>

          {/* Clean Navigation Links */}
          <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-16 py-12 flex-1 flex flex-col justify-center">
            <ul className="flex flex-col gap-6 sm:gap-8">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleSelect(link.id)}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 text-left cursor-pointer"
                  >
                    <span className="font-mono text-base sm:text-lg text-[#C6A865] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-sans font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white group-hover:text-[#E7C97C] group-hover:translate-x-2 transition-all duration-300">
                      {link.label}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/40 group-hover:text-[#E7C97C] transition-colors sm:ml-auto">
                      {link.tag}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Footer inside Menu */}
          <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-16 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
            <span className="font-mono tracking-[0.2em] text-[#C6A865] uppercase text-[10px] font-bold">
              SAKSHAM SPIRITS PVT. LTD. • STRICTLY 25+ ENJOY RESPONSIBLY
            </span>
            <div className="flex gap-6 font-mono text-xs uppercase tracking-wider">
              <a href="https://www.instagram.com/patiyalapalace/" target="_blank" rel="noreferrer" className="hover:text-[#E7C97C] transition-colors flex items-center gap-1.5 font-bold">
                <span>Instagram</span>
                <span className="text-[10px] text-[#E7C97C]">(@patiyalapalace)</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#E7C97C] transition-colors font-bold">
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
