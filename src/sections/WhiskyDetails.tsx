
export const WhiskyDetails = () => {
  return (
    <section className="relative py-32 bg-brand-navy border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        
        <h2 className="font-serif text-5xl md:text-8xl text-brand-ivory mb-12 tracking-widest uppercase">
          PATIYALA PALACE
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 font-sans text-xs md:text-sm text-brand-gold tracking-[0.3em] uppercase w-full">
          <span>INDIAN CRAFTED MALT WHISKY</span>
          <span className="hidden md:block w-1 h-1 bg-brand-gold rounded-full" />
          <span>42.8% V/V</span>
          <span className="hidden md:block w-1 h-1 bg-brand-gold rounded-full" />
          <span>750 ML</span>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 font-sans text-[10px] md:text-xs text-brand-ivory/50 tracking-[0.2em] uppercase w-full">
          <span>PRODUCT OF INDIA</span>
          <span className="hidden md:block w-1 h-1 bg-brand-ivory/30 rounded-full" />
          <span className="border border-brand-ivory/30 px-4 py-2">FOR SALE IN HARYANA STATE ONLY</span>
        </div>

      </div>
    </section>
  );
};
