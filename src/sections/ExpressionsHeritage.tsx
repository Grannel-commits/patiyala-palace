import { motion } from "framer-motion";

export const ExpressionsHeritage = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 md:py-40 bg-white text-[#07173E] overflow-hidden border-b border-[#00248B]/10">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        
        {/* Brand Seal Medallion */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#CBD5E1]/40 p-2 flex items-center justify-center bg-[#F0F2FC] shadow-[0_4px_20px_rgba(0,36,139,0.08)]">
            <img
              src="/assets/logo/official_silver_seal.png"
              alt="Patiyala Palace Royal Medallion"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(203,213,225,0.4)]"
            />
          </div>
        </motion.div>

        {/* Section Tag */}
        <span className="font-sans text-[10px] md:text-[11px] text-[#00248B] tracking-[0.35em] uppercase font-semibold mb-3">
          PATIYALA PALACE • INDIAN CRAFTED MALT WHISKY
        </span>

        {/* Clase Azul Exact Headline Structure */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-wide font-light leading-[1.08] text-[#07173E] mb-6">
          Expressions of Our<br />
          <span className="italic font-normal text-[#00248B]">Exquisite</span><br />
          Heritage.
        </h2>

        {/* Editorial Subtext */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#45516E] max-w-2xl mx-auto leading-relaxed font-light mb-10">
          Our spirits are born of the royal lands we inhabit, crafted as expressions of sovereign grace that reveal the enduring stories of our culture.
        </p>

        {/* Dual Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#spirit"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#00248B] text-white hover:bg-[#0F51CF] font-sans text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 rounded shadow-md hover:shadow-xl"
          >
            Explore the Collection
          </a>

          <a
            href="#spirit"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#00248B] text-[#00248B] hover:bg-[#00248B] hover:text-white font-sans text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 rounded"
          >
            Icons
          </a>
        </div>

      </div>
    </section>
  );
};
