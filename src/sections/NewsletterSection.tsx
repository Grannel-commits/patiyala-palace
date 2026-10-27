import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none z-20 bg-[#111111]">
      <div className="relative mx-auto w-full max-w-4xl">
        
        <div className="rounded-3xl p-8 sm:p-14 text-center bg-[#1A1A1A] border-2 border-[#E6501E]/50 shadow-[0_30px_90px_rgba(230,80,30,0.2)] relative overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E6501E]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E6501E] mb-3">
              JOIN CLUB PALACE • BE IN THE KNOW
            </span>

            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight text-white max-w-xl leading-none">
              NEVER MISS A <span className="text-[#E6501E]">DROP.</span>
            </h2>

            <p className="mt-4 font-sans text-xs sm:text-sm text-[#F1E6DA]/85 max-w-md leading-relaxed font-light">
              Get the latest cocktail recipes, secret speakeasy invitations, exclusive batch releases, and priority tasting allocations delivered to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-5 rounded-2xl bg-[#E6501E]/20 border border-[#E6501E]/60 text-center max-w-md"
                >
                  <h4 className="font-sans font-black text-sm text-[#E6501E] uppercase tracking-wider">
                    YOU'RE ON THE LIST!
                  </h4>
                  <p className="font-sans text-xs text-white/90 mt-1 font-light">
                    Welcome to Club Palace. Keep an eye on your inbox for our upcoming dispatches and cocktail guides.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow px-5 py-3.5 rounded-full bg-black/60 border border-white/20 text-white placeholder-white/40 text-xs font-sans focus:outline-none focus:border-[#E6501E] transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#E6501E] hover:bg-[#FF6B00] text-black font-sans text-xs font-black tracking-[0.16em] uppercase transition-all cursor-pointer whitespace-nowrap shadow-[0_4px_15px_rgba(230,80,30,0.35)] hover:scale-105"
                  >
                    SIGN UP
                  </button>
                </form>
              )}
            </AnimatePresence>

            <span className="text-[10px] text-white/40 tracking-wider uppercase mt-5 font-mono">
              Strictly 25+ years of age. Unsubscribe anytime. Drink responsibly.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};
