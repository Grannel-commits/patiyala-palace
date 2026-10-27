import { motion } from "framer-motion";

export const TheInvitation = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-36 bg-[#F0F2FC] text-[#07173E] overflow-hidden border-b border-[#00248B]/10">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-blue-panel border border-[#C8A85B]/30 rounded-lg p-6 sm:p-10 md:p-20 text-center shadow-2xl overflow-hidden"
        >
          {/* Subtle Decorative Royal Frame */}
          <div className="absolute inset-2 sm:inset-4 border border-[#C8A85B]/20 pointer-events-none rounded-lg" />

          {/* Crest Seal */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <img
              src="/assets/logo/official_gold_seal.png"
              alt="Patiyala Palace Royal Seal"
              className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_12px_rgba(200,168,91,0.5)]"
            />
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-[#C8A85B] uppercase font-semibold block">
              MEMBERSHIP &amp; CELLAR ALLOCATION
            </span>

            <h2 className="font-serif text-[1.15rem] leading-snug sm:text-4xl md:text-5xl text-white font-light uppercase tracking-normal sm:tracking-tight hyphens-auto">
              An Invitation to<br className="sm:hidden" /> the Exceptional
            </h2>

            <p className="font-sans text-[11px] sm:text-sm text-white/80 leading-relaxed font-light pt-1 sm:pt-2 break-words">
              We invite connoisseurs and collectors to join our inner circle for privileged access to limited barrel bottlings, private cellar acquisitions, and sovereign tasting salon reservations.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#C8A85B] text-[#010817] font-sans text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl rounded"
            >
              Request Private Invitation
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-sans text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold hover:bg-white/10 transition-all duration-300 rounded"
            >
              Contact Palace Concierge
            </a>
          </div>

          {/* Discreet Footer Note */}
          <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-white/15 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4 text-[9px] sm:text-[10px] font-sans tracking-widest text-white/60 uppercase">
            <span>BY PRIVATE APPOINTMENT ONLY</span>
            <span className="hidden sm:inline">•</span>
            <span>FOR SALE IN HARYANA ONLY</span>
            <span className="hidden sm:inline">•</span>
            <span>LEGAL DRINKING AGE (25+)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
