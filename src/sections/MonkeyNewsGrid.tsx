import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DispatchArticle {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  tag: string;
  content: {
    heading: string;
    paragraphs: string[];
    quote?: string;
  }[];
}

const HISTORICAL_DISPATCHES: DispatchArticle[] = [
  {
    id: "patiala-peg-origin",
    category: "ROYAL CHRONICLES & ORIGIN",
    title: "The Legend of the Patiala Peg: A 1920 Royal Legacy",
    subtitle: "How Maharaja Bhupinder Singh redefined hospitality, polo rivalry, and the generous pour.",
    date: "SUMMER 1920 • ARCHIVAL LORE",
    readTime: "4 MIN READ",
    image: "/assets/cocktails/covers/patiala_peg.jpg",
    excerpt: "Born in the summer of 1920 during a high-stakes polo duel, the Patiala Peg was never just a drink—it was a sovereign declaration of hospitality without boundaries.",
    tag: "THE ROYAL PEG",
    content: [
      {
        heading: "The Legendary Polo Wager of 1920",
        paragraphs: [
          "In the golden summer of 1920, the legendary Maharaja Bhupinder Singh of Patiala invited the Viceroy's premier polo team, 'The Pride of Simla', to a prestigious friendly encounter on the royal grounds of Patiala. The Simla team was formidable, seasoned, and widely considered unbeatable on horseback.",
          "Anticipating a fierce and hotly contested duel, the Maharaja hosted a grand banquet on the eve of the match in the marble halls of the royal palace. Feasting, music, and royal revelry stretched deep into the Punjabi night.",
        ],
        quote: "In Patiala, our hospitality knows no boundaries, and our glasses recognize no limits.",
      },
      {
        heading: "The Birth of the Heroic Measure",
        paragraphs: [
          "When the Maharaja's butlers circulated with crystal decanters of fine aged malt, Bhupinder Singh quietly issued a confidential instruction: the British guests were not to be served the customary British measure of 30ml or 60ml. Instead, every glass was filled to the height of two fingers held vertically against the tumbler—a staggering measure of 120ml or more.",
          "The hospitality was so warm and the drams so delightfully unsparing that the Simla players woke up with hazy heads and heavy limbs. On the polo field the following afternoon, Patiala's horsemen swept across the turf to a decisive, glorious victory.",
        ],
      },
      {
        heading: "An Enduring Cultural Icon",
        paragraphs: [
          "When the Viceroy's captain good-humoredly approached the Maharaja afterwards to question the immense strength of the previous evening's hospitality, Bhupinder Singh smiled his famous charismatic smile and coined the immortal phrase: 'In Patiala, our peg is as large as our heart.'",
          "A century later, the Patiala Peg remains the ultimate symbol of celebratory camaraderie, unhurried gatherings, and unapologetic generosity across the Indian subcontinent and beyond.",
        ],
      },
    ],
  },
  {
    id: "angels-share-oak",
    category: "THE COOPER'S ART",
    title: "The Angel’s Share: How Charred Oak Breathes Life into Malt",
    subtitle: "The respiration of toasted barrels and the celestial tax paid for liquid amber.",
    date: "BARREL MATURATION CRAFT",
    readTime: "3 MIN READ",
    image: "/assets/editorial/dispatch_copper_alchemy_stills.jpg",
    excerpt: "When spirit leaves the copper still, it is crystal clear. It is the charred oak barrel that breathes soul, deep amber, and velvet vanillin into every sleeping drop.",
    tag: "BARREL AGING",
    content: [
      {
        heading: "The Cask as a Living Lung",
        paragraphs: [
          "Fresh distillate emerging from the condenser is as transparent as mountain spring water. Its character is fiery, raw, and vibrant. The alchemy that converts this raw spirit into deep golden whisky occurs silently within the staves of toasted American and European white oak.",
          "As the seasons shift, the barrel acts as a living, breathing organism. In the warmth of summer, the liquid expands and forces its way deep into the micro-fissures of the charred wood. In winter, as temperatures fall, the liquid contracts, pulling back with it rich organic compounds.",
        ],
        quote: "Wood does not merely hold the spirit; it transforms time itself into amber flavor.",
      },
      {
        heading: "Char, Caramel, and Tannin Extraction",
        paragraphs: [
          "The flame-charring of the barrel interior converts natural wood hemicellulose into rich caramelized wood sugars. At the same time, it degrades lignin into aromatic vanillin and subtle smoky tannins, smoothing the alcohol's edge into honeyed velvet.",
          "Simultaneously, the charred carbon layer acts as a natural charcoal filter, absorbing harsher sulfurous elements and allowing delicate orchard fruit notes to bloom.",
        ],
      },
      {
        heading: "The Celestial Tribute",
        paragraphs: [
          "Because oak wood is naturally porous, a relentless sacrifice occurs year after year. Between two to three percent of the barrel's precious volume evaporates into the atmosphere annually.",
          "For centuries, distillers have accepted this loss without grief, naming it 'The Angel's Share'—a humble offering to the heavens in return for the gift of aged perfection.",
        ],
      },
    ],
  },
  {
    id: "aqua-vitae-stills",
    category: "ALCHEMICAL HERITAGE",
    title: "Aqua Vitae: The Ancient Alchemy That Conceived Whisky",
    subtitle: "From 8th-century Arab alembics to medieval Celtic monasteries and swan-neck copper stills.",
    date: "DISTILLATION HISTORY",
    readTime: "4 MIN READ",
    image: "/assets/editorial/dispatch_historic_copper_stills.jpg",
    excerpt: "Distillation began not in the Scottish Highlands, but in the 8th-century laboratories of Arab alchemist Jabir ibn Hayyan, who perfected the alembic still to capture the soul of liquids.",
    tag: "ANCIENT ORIGINS",
    content: [
      {
        heading: "The Alchemist's Discovery",
        paragraphs: [
          "The roots of spirit-making trace back over twelve centuries to the Islamic Golden Age. In Baghdad and Alexandria, the polymath alchemist Jabir ibn Hayyan (known in the West as Geber) perfected the alembic still—an ingenious apparatus designed to separate liquid mixtures through boiling and vapor condensation.",
          "The alchemists coined the term 'al-kuhl'—meaning the finest, most distilled essence of a substance—from which our modern word 'alcohol' directly descends.",
        ],
        quote: "Distillation is the sacred art of separating the pure essence from the earthly body.",
      },
      {
        heading: "From Monastic Medicine to Uisge Beatha",
        paragraphs: [
          "By the 12th and 13th centuries, returning scholars carried alembic technology into Italian and Celtic monastic scriptoriums. Monks began distilling fermented grain wash infused with medicinal herbs, baptizing the clear golden liquid as 'Aqua Vitae'—the Water of Life.",
          "When the practice reached the highlands of Scotland and Ireland, the Latin name was translated directly into Gaelic as 'uisge beatha' (pronounced oosh-ka beh-ha). Over centuries of vernacular speech, 'uisge' gradually softened into 'usquebaugh', then 'uiskie', and ultimately 'whisky'.",
        ],
      },
      {
        heading: "The Eternal Role of Copper",
        paragraphs: [
          "Even today, no modern steel or glass can replace traditional copper pot stills. Copper is chemically active: it bonds with heavy sulfur compounds produced during malt fermentation, neutralizing bitter notes and allowing delicate esters of apple, honey, and floral nectar to rise.",
          "The shape of the swan neck, the height of the column, and the artisan distiller's cut remain the heartbeat of crafted malt whisky worldwide.",
        ],
      },
    ],
  },
];

export const MonkeyNewsGrid: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<DispatchArticle | null>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedArticle) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      (window as any).__lenis?.stop();
      return () => {
        document.body.style.overflow = prevOverflow;
        (window as any).__lenis?.start();
      };
    }
  }, [selectedArticle]);

  return (
    <section id="dispatches" className="relative w-full py-14 sm:py-20 md:py-24 px-3 sm:px-6 md:px-8 select-none">
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 border-b border-white/15 pb-6">
          <div>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#CBD5E1]/80 block mb-1 drop-shadow">
              HERITAGE & CHRONICLES
            </span>
            <h2 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              The Dispatches
            </h2>
          </div>

          <a
            href="#dispatches"
            onClick={(e) => {
              e.preventDefault();
              setSelectedArticle(HISTORICAL_DISPATCHES[0]);
            }}
            className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#E2E8F0] hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#CBD5E1]/40 shadow-lg hover:border-white"
          >
            <span className="border-b border-[#CBD5E1]/60 group-hover:border-white pb-0.5">
              Archive
            </span>
            <span className="text-base font-bold group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </a>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Large Left Feature (The Patiala Peg Origin) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedArticle(HISTORICAL_DISPATCHES[0])}
            className="lg:col-span-6 rounded-2xl sm:rounded-3xl overflow-hidden bg-transparent group cursor-pointer flex flex-col"
          >
            <div className="relative flex-1 min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 shadow-2xl border border-[#CBD5E1]/35 group-hover:border-[#E2E8F0] transition-all">
              <img
                src={HISTORICAL_DISPATCHES[0].image}
                alt={HISTORICAL_DISPATCHES[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white font-mono text-[9px] sm:text-[10px] tracking-widest uppercase border border-white/20 shadow-md">
                {HISTORICAL_DISPATCHES[0].tag} • {HISTORICAL_DISPATCHES[0].readTime}
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#E2E8F0] text-[#020818] flex items-center justify-center font-bold text-base shadow-lg group-hover:scale-110 transition-transform">
                ↗
              </div>
            </div>

            <div className="flex-shrink-0 pt-3.5">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#CBD5E1]/80 uppercase block mb-1 drop-shadow">
                {HISTORICAL_DISPATCHES[0].category}
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl md:text-3xl text-white group-hover:text-[#E2E8F0] transition-colors leading-tight mb-2 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                {HISTORICAL_DISPATCHES[0].title}
              </h3>
              <p className="font-serif font-light text-xs sm:text-sm text-[#CBD5E1]/90 line-clamp-2 leading-relaxed drop-shadow">
                {HISTORICAL_DISPATCHES[0].excerpt}
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2 Cards Stacked */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row lg:flex-row gap-6">
            
            {/* Card 2: Angel's Share & Oak Aging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => setSelectedArticle(HISTORICAL_DISPATCHES[1])}
              className="flex-1 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="relative flex-1 min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 shadow-2xl border border-[#CBD5E1]/35 group-hover:border-[#E2E8F0] transition-all">
                <img
                  src={HISTORICAL_DISPATCHES[1].image}
                  alt={HISTORICAL_DISPATCHES[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white font-mono text-[9px] tracking-widest uppercase border border-white/20 shadow-md">
                  {HISTORICAL_DISPATCHES[1].tag}
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E2E8F0] text-[#020818] flex items-center justify-center font-bold text-xs shadow-lg group-hover:scale-110 transition-transform">
                  ↗
                </div>
              </div>

              <div className="flex-shrink-0 pt-3.5">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#CBD5E1]/80 uppercase block mb-1 drop-shadow">
                  {HISTORICAL_DISPATCHES[1].category}
                </span>
                <h4 className="font-serif font-normal text-lg sm:text-xl text-white group-hover:text-[#E2E8F0] transition-colors leading-snug mb-1 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                  {HISTORICAL_DISPATCHES[1].title}
                </h4>
                <p className="font-serif font-light text-xs text-[#CBD5E1]/90 line-clamp-2 leading-relaxed drop-shadow">
                  {HISTORICAL_DISPATCHES[1].excerpt}
                </p>
              </div>
            </motion.div>

            {/* Card 3: Aqua Vitae & Stills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => setSelectedArticle(HISTORICAL_DISPATCHES[2])}
              className="flex-1 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="relative flex-1 min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 shadow-2xl border border-[#CBD5E1]/35 group-hover:border-[#E2E8F0] transition-all">
                <img
                  src={HISTORICAL_DISPATCHES[2].image}
                  alt={HISTORICAL_DISPATCHES[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white font-mono text-[9px] tracking-widest uppercase border border-white/20 shadow-md">
                  {HISTORICAL_DISPATCHES[2].tag}
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E2E8F0] text-[#020818] flex items-center justify-center font-bold text-xs shadow-lg group-hover:scale-110 transition-transform">
                  ↗
                </div>
              </div>

              <div className="flex-shrink-0 pt-3.5">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#CBD5E1]/80 uppercase block mb-1 drop-shadow">
                  {HISTORICAL_DISPATCHES[2].category}
                </span>
                <h4 className="font-serif font-normal text-lg sm:text-xl text-white group-hover:text-[#E2E8F0] transition-colors leading-snug mb-1 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                  {HISTORICAL_DISPATCHES[2].title}
                </h4>
                <p className="font-serif font-light text-xs text-[#CBD5E1]/90 line-clamp-2 leading-relaxed drop-shadow">
                  {HISTORICAL_DISPATCHES[2].excerpt}
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Interactive Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent="true"
            className="fixed inset-0 z-[140] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto overscroll-contain"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              data-lenis-prevent="true"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                if (modalScrollRef.current && !modalScrollRef.current.contains(e.target as Node)) {
                  modalScrollRef.current.scrollTop += e.deltaY;
                }
              }}
              className="relative w-full max-w-4xl bg-[#030d24] text-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#CBD5E1]/50 shadow-2xl max-h-[92vh] flex flex-col my-auto"
            >
              {/* Sticky Top Header Bar */}
              <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-[#030d24]/95 backdrop-blur-md z-30 flex-shrink-0">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#E2E8F0] text-[#020818] font-bold">
                    {selectedArticle.tag}
                  </span>
                  <span className="font-mono text-[10px] text-[#CBD5E1]/80 tracking-widest uppercase">
                    {selectedArticle.readTime}
                  </span>
                  <span className="hidden sm:inline font-mono text-[10px] text-[#CBD5E1]/50 tracking-widest uppercase">
                    • {selectedArticle.date}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E2E8F0] hover:text-[#020818] text-white flex items-center justify-center font-bold text-sm transition-all border border-white/20 cursor-pointer shadow-lg"
                  aria-label="Close Article"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Article Body with Full Image */}
              <div
                ref={modalScrollRef}
                data-lenis-prevent="true"
                className="p-5 sm:p-8 md:p-10 overflow-y-auto overscroll-contain space-y-8 select-text flex-1"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {/* Article Header */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-[#CBD5E1]/70 uppercase block">
                    {selectedArticle.category}
                  </span>
                  <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <p className="font-serif italic text-base sm:text-xl text-[#E2E8F0] leading-relaxed border-l-2 border-[#CBD5E1] pl-4 pt-1">
                    {selectedArticle.subtitle}
                  </p>
                </div>

                {/* FULL UN-CROPPED ARTICLE IMAGE */}
                <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-white/15 shadow-2xl">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-auto max-h-[70vh] object-contain sm:object-cover mx-auto"
                  />
                </div>

                {/* Article Text Sections */}
                {selectedArticle.content.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="font-serif font-normal text-xl sm:text-2xl text-white tracking-wide border-b border-white/10 pb-2">
                      {section.heading}
                    </h4>

                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="font-serif font-light text-sm sm:text-base text-[#CBD5E1]/90 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {section.quote && (
                      <div className="my-6 p-5 sm:p-6 rounded-xl bg-black/40 border border-[#CBD5E1]/30 text-center">
                        <p className="font-serif italic text-base sm:text-lg text-[#E2E8F0]">
                          "{section.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Bottom Dismiss / Navigation */}
                <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-[10px] text-[#CBD5E1]/60 tracking-widest uppercase">
                    PATIYALA PALACE • THE DISPATCHES
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E2E8F0] hover:bg-white text-[#020818] transition-all cursor-pointer shadow-lg"
                  >
                    Close Dispatch ✕
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
