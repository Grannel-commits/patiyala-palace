import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MonkeyClubSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsRegistered(true);
      setTimeout(() => {
        setIsOpenModal(false);
        setIsRegistered(false);
        setEmail("");
      }, 2500);
    }
  };

  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4 select-none">
      
      {/* Background Ticker Effect */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden opacity-10 pointer-events-none">
        <div className="animate-marquee whitespace-nowrap text-8xl font-black font-sans uppercase">
          PATIYALA PALACE™ • WHERE ROYALTY MEETS THE BARREL • PATIYALA PALACE™ • WHERE ROYALTY MEETS THE BARREL
        </div>
      </div>

      {/* Main Centered Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[65vh] sm:h-[75vh] md:h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl flex items-center justify-end p-6 sm:p-12 md:p-16"
      >
        {/* Background Image of Friends Toasting at Luxury Lounge */}
        <img
          src="/assets/editorial/club_friends_toast.jpg"
          alt="Join Club Patiyala Palace - Connoisseurs Toasting"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Right Floating Dark Red Card */}
        <div className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#061b4c]/95 backdrop-blur-md border border-[#CBD5E1]/40 text-white shadow-2xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E2E8F0] block mb-2">
            EXCLUSIVE ROYAL PRIVILEGES
          </span>

          <h3 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-none mb-3">
            CLUB PATIYALA
          </h3>

          <p className="font-sans text-xs sm:text-sm text-white/80 font-medium uppercase tracking-wider leading-relaxed mb-6">
            ROYAL COCKTAILS, CONNOISSEUR TASTINGS, AND PRIVATE BATCH ALLOCATIONS
          </p>

          <button
            onClick={() => setIsOpenModal(true)}
            className="w-full py-4 rounded-full bg-[#CBD5E1] hover:bg-[#B3934F] text-black font-sans font-black text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105"
          >
            <span>JOIN CLUB PATIYALA PALACE</span>
            <span>↗</span>
          </button>
        </div>
      </motion.div>

      {/* Membership Signup Modal */}
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsOpenModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#061b4c] border-2 border-[#CBD5E1] p-8 text-center text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpenModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/60 hover:bg-[#CBD5E1] hover:text-black text-white flex items-center justify-center font-bold text-sm transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="w-16 h-16 mx-auto mb-4 p-1 rounded-full border border-[#CBD5E1] bg-black/40">
                <img src="/assets/logo/pp_logo_silver_clean.png" alt="PP Logo" className="w-full h-full object-contain" />
              </div>

              <h3 className="font-serif font-black text-3xl uppercase tracking-tight mb-2 text-[#E2E8F0]">
                CLUB PATIYALA PALACE
              </h3>
              <p className="font-sans text-xs text-white/80 mb-6 font-light">
                Sign up to receive priority royal cocktail guides, private tasting invitations, and exclusive release announcements.
              </p>

              {isRegistered ? (
                <div className="p-4 rounded-2xl bg-[#CBD5E1] text-black font-bold text-sm uppercase tracking-wider shadow-lg">
                  🎉 Welcome to the Club! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleRegister} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-5 py-3.5 rounded-full bg-black/60 border border-white/20 text-white placeholder-white/40 text-xs font-sans focus:outline-none focus:border-[#CBD5E1]"
                  />
                  <button
                    type="submit"
                    className="py-3.5 rounded-full bg-[#CBD5E1] hover:bg-[#b89547] text-black font-sans font-black text-xs uppercase tracking-wider cursor-pointer shadow-lg transition-all"
                  >
                    SIGN UP NOW
                  </button>
                  <span className="text-[10px] text-white/50 uppercase mt-2 font-mono">
                    Strictly 25+ years of age. Please drink responsibly.
                  </span>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
