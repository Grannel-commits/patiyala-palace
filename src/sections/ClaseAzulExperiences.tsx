interface ExperienceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  image: string;
  tag: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "cellar",
    category: "PRIVATE VAULTS",
    title: "The Royal Cellar",
    subtitle: "Cask Solera & Private Allocations",
    description:
      "Deep beneath the palace grounds, our temperature-regulated cellar shelters bespoke ex-bourbon and European sherry casks aging in quiet sovereignty.",
    location: "Qila Mubarak Estate, Patiala",
    image: "/assets/brand/palace_architecture_clean_gold.png",
    tag: "BY PRIVATE INVITATION",
  },
  {
    id: "grounds",
    category: "ROYAL RESIDENCE",
    title: "The Palace Sanctuary",
    subtitle: "Baradari Heritage & Court Traditions",
    description:
      "Walk the historic stone corridors and courtyards that inspired our crest, where the Maharaja entertained emperors with legendary banquets.",
    location: "Baradari Gardens, Patiala",
    image: "/assets/editorial/palace_heritage_corridor.jpg",
    tag: "HISTORIC ESTATE",
  },
  {
    id: "salon",
    category: "TASTING RITUAL",
    title: "The Tasting Salons",
    subtitle: "Curated Flight & Sensory Mastery",
    description:
      "An intimate multi-sensorial tasting guided by our Master Malt Blender, pairing Patiyala Palace with traditional royal confectionery and pairing dishes.",
    location: "Gurugram Reserve Lounge & Patiala",
    image: "/assets/product/bottle_front_raw.jpg",
    tag: "MASTERCLASS",
  },
];

export const ClaseAzulExperiences = () => {
  return (
    <section
      id="experiences"
      className="relative w-full py-16 sm:py-24 md:py-36 bg-[#F0F2FC] text-[#07173E] overflow-hidden border-b border-[#00248B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <span className="w-6 sm:w-8 h-[1px] bg-[#00248B]" />
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-[#00248B] uppercase font-semibold">
              SANCTUARIES • EXPERIENCES
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#00248B]" />
          </div>

          <h2 className="font-serif text-xl sm:text-4xl md:text-5xl text-[#00248B] font-light tracking-tight uppercase">
            Discover Our<br className="sm:hidden" /> Experiences
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#45516E] max-w-xl mx-auto leading-relaxed font-light">
            Step into our sanctuaries dedicated to art, royal heritage, and the sovereign spirit of Indian crafted malt whisky.
          </p>
        </div>

        {/* 3 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col bg-white border border-[#00248B]/10 rounded-sm overflow-hidden hover:border-[#00248B]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Media Visual */}
              <div className="relative h-64 sm:h-72 w-full bg-[#F0F2FC] flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 bg-[#00248B] text-white text-[9px] font-sans font-semibold tracking-[0.2em] uppercase rounded-sm">
                    {exp.tag}
                  </span>
                </div>

                {exp.image.endsWith(".jpg") ? (
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="p-6 flex items-center justify-center w-full h-full">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="max-h-52 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-sm"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-[#00248B]/0 group-hover:bg-[#00248B]/5 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-8 flex flex-col flex-1 justify-between space-y-4 sm:space-y-6">
                <div className="space-y-3">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-[#C8A85B] uppercase font-semibold block">
                    {exp.category}
                  </span>
                  
                  <h3 className="font-serif text-2xl text-[#00248B] font-light group-hover:text-[#0F51CF] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="font-sans text-[11px] tracking-wider text-[#07173E]/80 font-medium">
                    {exp.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#45516E] leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#00248B]/10 flex items-center justify-between">
                  <span className="font-sans text-[10px] tracking-wider text-[#45516E]/80 font-light">
                    {exp.location}
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-sans text-xs text-[#00248B] font-semibold tracking-wider hover:gap-2.5 transition-all group-hover:text-[#0F51CF]"
                  >
                    <span>EXPLORE</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
