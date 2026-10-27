
export const ResponsibleDrinking = () => {
  return (
    <section className="relative py-24 bg-brand-black flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-2xl mx-auto border border-brand-ivory/10 p-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-brand-gold/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
        
        <h3 className="relative z-10 font-sans text-xs md:text-sm text-brand-ivory/80 tracking-[0.3em] uppercase leading-loose">
          CONSUMPTION OF ALCOHOL IS INJURIOUS TO HEALTH.<br/>
          <span className="text-brand-gold mt-4 block">PLEASE DRINK RESPONSIBLY.</span>
        </h3>
      </div>
    </section>
  );
};
