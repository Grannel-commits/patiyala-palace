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
    { label: "Home", id: "home", tag: "The Entry" },
    { label: "Find Us", id: "find-us", tag: "Store Locator & Outlets" },
    { label: "Palace Cocktails", id: "cocktails", tag: "Mixology" },
    { label: "Our Story", id: "story", tag: "Patrimony & Roots" },
    { label: "Palace Sessions", id: "sessions", tag: "Ghazal & Spirit" },
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
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-12 py-4 sm:py-6 flex items-center justify-between border-b border-[#CBD5E1]/25">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#CBD5E1]/60 p-1 flex items-center justify-center bg-black/60 shadow-lg">
                <img
                  src="/assets/logo/pp_logo_silver_clean.png"
                  alt="Patiyala Palace Royal Seal"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <span className="font-serif font-bold text-base sm:text-lg uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#E2E8F0]">
                PATIYALA PALACE
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Menu"
              className="flex items-center gap-1.5 sm:gap-2 group p-2 text-white hover:text-[#E2E8F0] transition-colors cursor-pointer"
            >
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                CLOSE
              </span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 group-hover:border-[#E2E8F0] flex items-center justify-center font-bold text-xs bg-white/5">
                ✕
              </div>
            </button>
          </div>

          {/* Clean Navigation Links */}
          <div className="w-full max-w-screen-xl mx-auto px-5 sm:px-16 py-8 sm:py-12 flex-1 flex flex-col justify-center">
            <ul className="flex flex-col gap-4 sm:gap-7">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleSelect(link.id)}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-6 text-left cursor-pointer w-full"
                  >
                    <span className="font-mono text-xs sm:text-base text-[#CBD5E1]/60 font-medium">
                      0{idx + 1}
                    </span>
                    <span className="font-serif font-light text-2xl sm:text-4xl md:text-5xl text-white group-hover:text-[#E2E8F0] group-hover:italic group-hover:translate-x-2 transition-all duration-300">
                      {link.label}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-[#CBD5E1]/60 group-hover:text-[#E2E8F0] transition-colors sm:ml-auto">
                      {link.tag}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Footer inside Menu */}
          <div className="w-full max-w-screen-xl mx-auto px-5 sm:px-16 py-6 sm:py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 font-light">
            <span className="font-mono tracking-[0.2em] text-[#CBD5E1] uppercase text-[10px] font-bold">
              SAKSHAM SPIRITS PVT. LTD. • STRICTLY 25+ ENJOY RESPONSIBLY
            </span>
            <div className="flex gap-6 font-mono text-xs uppercase tracking-wider">
              <a href="https://www.instagram.com/patiyalapalace/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2E8F0] transition-colors flex items-center gap-1.5 font-bold">
                <span>Instagram</span>
                <span className="text-[10px] text-[#E2E8F0]">(@patiyalapalace)</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2E8F0] transition-colors font-bold">
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
