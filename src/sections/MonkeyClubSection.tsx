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
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden opacity-5 pointer-events-none">
        <div className="animate-marquee whitespace-nowrap text-8xl font-serif font-light text-[#CBD5E1] uppercase tracking-[0.3em]">
          RESERVE CELLAR • INDIAN CRAFTED MALT • PATIYALA PALACE • 
        </div>
      </div>

      {/* Main Centered Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[52vh] sm:h-[70vh] md:h-[80vh] min-h-[380px] sm:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-12 md:p-16"
      >
        {/* Background Image of Friends Toasting at Luxury Lounge */}
        <img
          src="/assets/editorial/club_friends_toast.jpg"
          alt="The Royal Circle - Private Cellar Toasting"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Right Floating Dark Card */}
        <div className="relative z-10 w-full max-w-md p-4 sm:p-8 rounded-xl sm:rounded-3xl bg-[#061b4c]/95 backdrop-blur-md border border-[#CBD5E1]/40 text-white shadow-2xl">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#CBD5E1]/80 block mb-1.5 sm:mb-2">
            Private Cellar
          </span>

          <h3 className="font-serif font-normal text-2xl sm:text-4xl text-white tracking-tight leading-none mb-2 sm:mb-3">
            The Royal Circle
          </h3>

          <p className="font-serif font-light text-xs sm:text-sm text-[#CBD5E1]/90 leading-relaxed mb-4 sm:mb-6">
            Ceremonial tastings, private batch reserves, and cellar access privileges.
          </p>

          <button
            onClick={() => setIsOpenModal(true)}
            className="w-full py-3.5 sm:py-4 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(226,232,240,0.3)] hover:scale-[1.02]"
          >
            <span>Request Access</span>
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

              <h3 className="font-serif font-normal text-3xl text-white tracking-tight mb-2">
                The Royal Circle
              </h3>
              <p className="font-serif text-xs text-[#CBD5E1]/80 mb-6 font-light">
                Invitations to ceremonial tastings and private reserve allocations.
              </p>

              {isRegistered ? (
                <div className="p-4 rounded-2xl bg-[#CBD5E1] text-[#020818] font-serif font-semibold text-sm tracking-wide shadow-lg">
                  Welcome to The Royal Circle. We look forward to connecting with you.
                </div>
              ) : (
                <form onSubmit={handleRegister} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-5 py-3.5 rounded-full bg-black/60 border border-white/20 text-white placeholder-white/40 text-xs font-mono focus:outline-none focus:border-[#CBD5E1]"
                  />
                  <button
                    type="submit"
                    className="py-3.5 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono font-bold text-xs uppercase tracking-[0.2em] cursor-pointer shadow-lg transition-all"
                  >
                    Request Invitation
                  </button>
                  <span className="text-[10px] text-white/50 uppercase mt-2 font-mono tracking-widest">
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
