import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/audio';
import { Sparkles, ArrowUpRight, Check } from 'lucide-react';

interface Props {
  activeHotspot: string | null;
  onSelectHotspot: (id: string | null) => void;
  onToggle360Mode: () => void;
  is360Mode: boolean;
}

export const ScrollOverlay = ({ activeHotspot, onSelectHotspot, onToggle360Mode, is360Mode }: Props) => {
  const [activeCraftTab, setActiveCraftTab] = useState(0);
  const [activeServeTab, setActiveServeTab] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const CRAFT_STAGES = [
    {
      step: '01',
      title: 'THE GRAIN SELECTION',
      subtitle: 'Sun-Drenched Indian Harvest',
      desc: 'Selected indigenous golden grain forms the foundational neutral spirit of the house. Distilled to pure clarity to highlight the subsequent aged malt infusion.',
      highlight: 'Triple-Filtered Grain Purity',
    },
    {
      step: '02',
      title: 'THE MALT BLEND',
      subtitle: 'Scotch Malt Concentrate Infusion',
      desc: 'Masterfully harmonized with aged Scottish malt concentrates, marrying the smoky peat of the Scottish Highlands with the vibrant warmth of Indian spirit-making.',
      highlight: 'Imported Scotch Malt Concentrates',
    },
    {
      step: '03',
      title: 'THE BARREL REST',
      subtitle: 'Charred Oak Maturation',
      desc: 'Rested in bespoke toasted oak barrels that infuse deep amber-golden hues, rich vanilla tannins, and a velvety smooth palate.',
      highlight: 'Charred American & European Oak',
    },
    {
      step: '04',
      title: 'THE MASTER CUT',
      subtitle: '42.8% V/V (75° Proof)',
      desc: 'Slowly cut with mineral-demineralized mountain water to exactly 42.8% alcohol by volume (25° Under Proof), balancing power with smooth elegance.',
      highlight: 'Bottled by Ghaziabad Organics Ltd.',
    },
  ];

  const ROYAL_SERVES = [
    {
      name: 'THE ROYAL PATIALA PEG',
      subtitle: '120ml Heritage Pour • The Connoisseur Standard',
      glass: 'Heavy Cut Crystal Tumbler',
      notes: 'Poured neat to the measure of two fingers. Allow 60 seconds for the bouquet of toasted oak and honey malt to open in the glass.',
      pair: 'Roasted almonds & smoked cheeses',
    },
    {
      name: 'ON THE ROCK SPHERE',
      subtitle: 'Slow-Melting Crystal Ice Chill',
      glass: 'Lowball Crystal Tumbler',
      notes: '60ml Patiyala Palace poured over a single hand-carved clear ice sphere. Chills the spirit without breaking the malt viscosity.',
      pair: 'Expressed orange zest & dark chocolate',
    },
    {
      name: 'THE PALACE OLD FASHIONED',
      subtitle: 'Royal Cardamom & Orange Bitters',
      glass: 'Smoked Double Old Fashioned',
      notes: '60ml Patiyala Palace stirred over ice with 5ml demerara syrup, 2 dashes aromatic bitters, and a gently crushed green cardamom pod.',
      pair: 'Candied orange peel & flamed cinnamon',
    },
  ];

  const HOTSPOT_INFO: Record<string, { title: string; subtitle: string; body: string; spec: string }> = {
    cap: {
      title: 'ROYAL CROWN SEAL',
      subtitle: 'Metallic Royal Blue & Silver Medallion',
      body: 'Sealed with the official royal mark: "WHERE ROYALTY MEETS THE BARREL". Fluted aluminum hermetic security cap engineered for preservation.',
      spec: '28mm Tamper-Evident Seal',
    },
    emblem: {
      title: 'ARCHED PALACE CREST',
      subtitle: 'Silver Foil Stamped Architectural Label',
      body: 'Features the intricate hand-drawn engraving of the Patiyala Palace facade, bordered in deep sapphire blue with silver foil typography.',
      spec: 'Haryana State Registered',
    },
    crest: {
      title: 'ARCHED PALACE CREST',
      subtitle: 'Silver Foil Stamped Architectural Label',
      body: 'Features the intricate hand-drawn engraving of the Patiyala Palace facade, bordered in deep sapphire blue with silver foil typography.',
      spec: 'Haryana State Registered',
    },
    liquid: {
      title: 'MALT WHISKY CORE',
      subtitle: '42.8% V/V (75° Proof) Indian Crafted Malt',
      body: 'A golden-amber spirit crafted from matured Indian grain spirits and fine imported Scotch malt concentrates, delivering bold depth and smooth warmth.',
      spec: '750 ML • 42.8% ABV • Product of India',
    },
    glass: {
      title: 'FACETED EXTRA-FLINT GLASS',
      subtitle: 'Sculptural Rectangular Architecture',
      body: 'Forged from ultra-pure extra-flint glass with geometric beveled edges that refract light through the golden spirit inside with brilliant clarity.',
      spec: 'Beveled Extra-Flint Glass',
    },
    base: {
      title: 'WEIGHTED CRYSTAL BASE',
      subtitle: 'Heavy Crystal Rectangular Silhouette',
      body: 'Engineered with substantial glass thickness at the heel and beveled chamfered corners, providing a weighted, authoritative hand-feel.',
      spec: 'Solid Glass Foot • Chamfered',
    },
  };

  return (
    <div className="w-full relative pointer-events-none text-[#FAF5EC]">
      
      {/* ================= SECTION 1: THE ROYAL ENTRANCE (HERO) ================= */}
      <section id="section-1" className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 w-full relative pt-24 pb-20">
        <div className="w-full lg:w-1/2 max-w-xl flex flex-col justify-center pointer-events-auto z-20">
          
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1.5px] bg-[#C5A869]" />
            <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold">
              THE HOUSE OF SHAKSHAM SPIRITS
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight mb-6 text-[#FFFFFF] font-bold drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
            PATIALA<br />
            <span className="font-normal italic text-[#C5A869]">PALACE</span>
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3.5 py-1.5 bg-[#0B2545]/90 border border-[#C5A869]/60 text-[#FAF5EC] font-sans text-[10px] tracking-[0.25em] uppercase font-bold shadow-lg backdrop-blur-md">
              INDIAN CRAFTED MALT WHISKY
            </span>
            <span className="text-[10px] font-sans text-[#FAF5EC]/90 tracking-widest uppercase font-semibold bg-white/10 px-3 py-1.5 backdrop-blur-md rounded-sm border border-white/10">
              750 ML • 42.8% V/V (75° PROOF)
            </span>
          </div>

          <p className="font-sans text-sm md:text-base font-normal text-[#FAF5EC]/85 leading-relaxed mb-10 drop-shadow-md">
            A spirit born from Indian regal heritage and contemporary distillation mastery. Where the majesty of a royal house meets the depth of aged malt concentrates.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#section-anatomy"
              onMouseEnter={() => sound.playChime(640, 0.15)}
              className="px-7 py-3.5 bg-[#C5A869] text-[#030914] font-sans text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#FFFFFF] hover:text-[#030914] transition-all duration-300 shadow-[0_10px_30px_rgba(197,168,105,0.35)] inline-flex items-center gap-2"
            >
              <span>EXPLORE THE SPIRIT</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              onClick={onToggle360Mode}
              onMouseEnter={() => sound.playGlassClink()}
              className="px-6 py-3.5 border border-[#C5A869]/80 bg-[#07182C]/90 text-[#FAF5EC] font-sans text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#C5A869] hover:text-[#030914] transition-all duration-300 backdrop-blur-md shadow-xl"
            >
              {is360Mode ? 'RESUME SCROLL' : '360° INSPECT'}
            </button>
          </div>

        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-10 left-6 md:left-24 flex items-center gap-3 pointer-events-auto">
          <div className="w-8 h-[1.5px] bg-[#C5A869]" />
          <span className="font-sans text-[10px] text-[#FAF5EC]/70 tracking-[0.25em] uppercase font-bold">
            SCROLL TO ENTER THE HOUSE
          </span>
        </div>
      </section>

      {/* ================= SECTION 2: THE PARENT HOUSE & LINEAGE ================= */}
      <section id="section-house" className="min-h-screen flex items-center justify-end px-6 md:px-16 lg:px-24 w-full py-32 relative">
        <div className="w-full lg:w-1/2 max-w-xl text-left lg:text-right pointer-events-auto flex flex-col lg:items-end z-20">
          
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold">
              THE HOUSE BEHIND THE SPIRIT
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-4 text-[#FFFFFF] font-bold drop-shadow-lg">
            Shaksham Spirits<br />
            <span className="font-normal italic text-[#C5A869]">Private Limited</span>
          </h2>

          <div className="w-16 h-[1.5px] bg-[#C5A869] my-4" />

          <p className="font-serif text-lg sm:text-xl text-[#FAF5EC] italic leading-relaxed max-w-md mb-6 drop-shadow-md">
            "Patiyala Palace is the spirit. Shaksham Spirits is the royal house behind it."
          </p>

          <p className="font-sans text-sm font-normal text-[#FAF5EC]/80 leading-relaxed mb-8">
            Shaksham Spirits Pvt. Ltd. brings together timeless Indian spirit-making with a distinctive modern expression of premium whisky. Rooted in Gurugram, Haryana, the house champions regal character, precision blending, and uncompromising quality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg text-left">
            <div className="p-5 border border-white/10 bg-[#07182C]/90 backdrop-blur-xl rounded-sm shadow-xl hover:border-[#C5A869]/50 transition-colors">
              <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">HEADQUARTERS</span>
              <span className="block font-serif text-base font-bold text-[#FFFFFF]">South City-1, Gurugram</span>
              <span className="block font-sans text-[10px] text-[#FAF5EC]/70 mt-0.5">Haryana — 122001</span>
            </div>

            <div className="p-5 border border-white/10 bg-[#07182C]/90 backdrop-blur-xl rounded-sm shadow-xl hover:border-[#C5A869]/50 transition-colors">
              <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">DISTRIBUTION HOUSE</span>
              <span className="block font-serif text-base font-bold text-[#FFFFFF]">M/S HS Oberoi Spirits</span>
              <span className="block font-sans text-[10px] text-[#FAF5EC]/70 mt-0.5">Haryana State Exclusive</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2.5: THE MARK OF THE HOUSE (OFFICIAL MASTER LOGO) ================= */}
      <section id="section-emblem" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 w-full py-32 relative">
        <div className="max-w-4xl w-full flex flex-col items-center text-center pointer-events-auto z-20">
          
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-[#C5A869]" />
            <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold">
              THE MASTER BRAND IDENTITY
            </span>
            <span className="w-8 h-[1.5px] bg-[#C5A869]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FFFFFF] font-bold tracking-tight mb-3 drop-shadow-xl">
            The Mark of the House
          </h2>

          <p className="font-sans text-xs md:text-sm text-[#C5A869] tracking-[0.3em] uppercase font-semibold mb-12">
            WHERE ROYALTY MEETS THE BARREL
          </p>

          {/* Master Emblem Showcase Card */}
          <div className="relative group p-10 md:p-14 border border-[#C5A869]/40 bg-gradient-to-b from-[#07182C]/95 to-[#030914]/95 backdrop-blur-2xl rounded-sm shadow-[0_20px_80px_rgba(0,0,0,0.95)] max-w-2xl w-full flex flex-col items-center">
            
            {/* Concentric Gold Glow Rings */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#C5A869]/15 rounded-full blur-2xl group-hover:bg-[#C5A869]/25 transition-all duration-700" />
              <div className="absolute inset-0 rounded-full border border-[#C5A869]/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-white/10 scale-125" />
              <div className="w-full h-full rounded-full border-2 border-[#C5A869] p-3 flex items-center justify-center bg-[#07182C]/95 shadow-2xl">
                <img
                  src="/assets/logo/PATIALA_PALACE_LOGO.png"
                  alt="Patiyala Palace Official Master Logo - Where Royalty Meets the Barrel"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(197,168,105,0.5)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="w-16 h-[1.5px] bg-[#C5A869] mb-5" />

            <p className="font-sans text-xs md:text-sm text-[#FAF5EC]/85 max-w-lg leading-relaxed font-normal mb-6">
              The circular royal crest anchors the heritage of Patiyala Palace. At its heart lies the interlaced royal monogram, surrounded by baroque palace flourishes and the proud declaration of origin and craft.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3.5 py-1.5 bg-[#0B2545]/80 border border-[#C5A869]/40 text-[#FAF5EC] font-sans text-[10px] tracking-widest uppercase font-bold">
                OFFICIAL ROYAL EMBLEM
              </span>
              <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-[#C5A869] font-sans text-[10px] tracking-widest uppercase font-bold">
                PATIYALA PALACE ICON
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 2.7: PRODUCT STORY & PHOTOGRAPHIC LINEAGE ================= */}
      <section id="section-story" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 w-full py-32 relative">
        <div className="max-w-6xl w-full mx-auto pointer-events-auto z-20">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold block mb-1">
                PRODUCT ARCHITECTURE & AUTHENTICITY
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#FFFFFF] font-bold tracking-tight">
                The Royal Presence
              </h2>
            </div>
            <p className="font-sans text-xs text-[#FAF5EC]/70 max-w-sm mt-3 md:mt-0">
              Photographed under studio master lighting. The real bottle in its full tactile majesty.
            </p>
          </div>

          {/* 3-Column Photographic Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Photo 1: Front Bottle */}
            <div className="group p-6 border border-white/10 bg-[#07182C]/90 backdrop-blur-xl rounded-sm hover:border-[#C5A869]/60 transition-all duration-500 shadow-xl flex flex-col">
              <div className="w-full h-72 sm:h-80 overflow-hidden mb-5 bg-[#030914] rounded-sm flex items-center justify-center p-3">
                <img
                  src="/assets/product/PATIALA_PALACE_BOTTLE_FRONT.jpg"
                  alt="Patiyala Palace Bottle Front View"
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">FRONT ELEVATION</span>
              <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-2">The Architectural Silhouette</h3>
              <p className="font-sans text-xs text-[#FAF5EC]/75 leading-relaxed font-light">
                Sculpted rectangular extra-flint glass featuring the iconic ivory label, arched royal blue border, and hand-engraved palace illustration.
              </p>
            </div>

            {/* Photo 2: Cap Medallion */}
            <div className="group p-6 border border-white/10 bg-[#07182C]/90 backdrop-blur-xl rounded-sm hover:border-[#C5A869]/60 transition-all duration-500 shadow-xl flex flex-col">
              <div className="w-full h-72 sm:h-80 overflow-hidden mb-5 bg-[#030914] rounded-sm flex items-center justify-center p-3">
                <img
                  src="/assets/product/PATIALA_PALACE_BOTTLE_CAP.jpg"
                  alt="Patiyala Palace Metallic Blue Cap Top"
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">CROWN APEX</span>
              <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-2">Metallic Blue Security Cap</h3>
              <p className="font-sans text-xs text-[#FAF5EC]/75 leading-relaxed font-light">
                Deep royal blue aluminum cap crown-embossed with the white master crest: "WHERE ROYALTY MEETS THE BARREL".
              </p>
            </div>

            {/* Photo 3: Back Specifications */}
            <div className="group p-6 border border-white/10 bg-[#07182C]/90 backdrop-blur-xl rounded-sm hover:border-[#C5A869]/60 transition-all duration-500 shadow-xl flex flex-col">
              <div className="w-full h-72 sm:h-80 overflow-hidden mb-5 bg-[#030914] rounded-sm flex items-center justify-center p-3">
                <img
                  src="/assets/product/PATIALA_PALACE_BOTTLE_BACK.jpg"
                  alt="Patiyala Palace Bottle Back Specifications"
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">BACK PEDIGREE</span>
              <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-2">The Excise & Blending Seal</h3>
              <p className="font-sans text-xs text-[#FAF5EC]/75 leading-relaxed font-light">
                Complete traceability: Ghaziabad Organics Ltd distillation, Saksham Spirits marketing, and official Haryana excise registration.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 3: 3D ANATOMY & INTERACTIVE HOTSPOTS ================= */}
      <section id="section-anatomy" className="min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 w-full py-32">
        
        {/* Top Controls Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end pointer-events-auto border-b border-white/10 pb-6 z-20">
          <div>
            <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold block mb-1">
              INTERACTIVE 3D EXPLORER
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#FFFFFF] font-bold tracking-tight">
              Anatomy of the Spirit
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-4 md:mt-0">
            {['cap', 'emblem', 'liquid', 'glass', 'base'].map((id) => (
              <button
                key={id}
                onClick={() => {
                  sound.playChime(580, 0.15);
                  onSelectHotspot(activeHotspot === id ? null : id);
                }}
                className={`px-4 py-2 font-sans text-[10px] tracking-widest uppercase border transition-all duration-300 rounded-sm font-bold ${
                  activeHotspot === id
                    ? 'bg-[#C5A869] text-[#030914] border-[#C5A869] shadow-[0_5px_20px_rgba(197,168,105,0.4)]'
                    : 'bg-[#07182C]/90 border-white/20 text-[#FAF5EC] hover:border-[#C5A869] hover:text-[#C5A869]'
                }`}
              >
                {id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Focus Information Card */}
        <div className="w-full flex justify-between items-end pointer-events-auto mt-auto pt-12 z-20">
          
          <AnimatePresence mode="wait">
            {activeHotspot && HOTSPOT_INFO[activeHotspot] && (
              <motion.div
                key={activeHotspot}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="w-full md:w-[440px] p-7 border border-[#C5A869] bg-[#07182C]/95 text-[#FAF5EC] backdrop-blur-2xl rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-sans text-[10px] text-[#C5A869] tracking-[0.3em] uppercase font-bold">
                    FEATURE 0{['cap', 'emblem', 'liquid', 'glass', 'base'].indexOf(activeHotspot) + 1}
                  </span>
                  <span className="text-[10px] px-2.5 py-1 bg-[#C5A869]/20 text-[#C5A869] font-sans font-bold border border-[#C5A869]/40">
                    {HOTSPOT_INFO[activeHotspot].spec}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-[#FFFFFF] font-bold mb-1">
                  {HOTSPOT_INFO[activeHotspot].title}
                </h3>
                <p className="font-sans text-[11px] text-[#C5A869] tracking-wider uppercase font-semibold mb-3">
                  {HOTSPOT_INFO[activeHotspot].subtitle}
                </p>

                <p className="font-sans text-xs md:text-sm text-[#FAF5EC]/85 leading-relaxed font-normal">
                  {HOTSPOT_INFO[activeHotspot].body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Specifications Pill */}
          <div className="hidden lg:flex flex-col gap-4 text-right p-6 bg-[#07182C]/90 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl">
            <div>
              <span className="block font-serif text-4xl font-bold text-[#FFFFFF]">42.8%</span>
              <span className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[#C5A869] font-bold">ALCOHOL V/V (75° PROOF)</span>
            </div>
            <div>
              <span className="block font-serif text-4xl font-bold text-[#FFFFFF]">750 ML</span>
              <span className="block font-sans text-[9px] tracking-[0.3em] uppercase text-[#C5A869] font-bold">STANDARD BOTTLE VOLUME</span>
            </div>
          </div>

        </div>

      </section>

      {/* ================= SECTION 4: THE CRAFT & ALCHEMY ================= */}
      <section id="section-craft" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 w-full py-32">
        <div className="w-full lg:w-1/2 max-w-xl pointer-events-auto z-20">
          
          <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold mb-2 block">
            MASTER BLENDING PROTOCOL
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#FFFFFF] font-bold tracking-tight mb-8 drop-shadow-md">
            Crafted With<br />
            <span className="italic font-normal text-[#C5A869]">Royal Intention</span>
          </h2>

          {/* Craft Tabs */}
          <div className="flex border-b border-white/10 mb-6 overflow-x-auto pb-1 gap-1">
            {CRAFT_STAGES.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playChime(480 + idx * 80, 0.15);
                  setActiveCraftTab(idx);
                }}
                className={`pb-3 pr-6 font-sans text-xs tracking-[0.2em] uppercase transition-all whitespace-nowrap font-bold ${
                  activeCraftTab === idx
                    ? 'border-b-2 border-[#C5A869] text-[#C5A869]'
                    : 'text-[#FAF5EC]/50 hover:text-[#FFFFFF]'
                }`}
              >
                {stage.step} {stage.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Active Craft Panel */}
          <motion.div
            key={activeCraftTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="p-7 border border-white/10 bg-[#07182C]/90 backdrop-blur-2xl rounded-sm shadow-2xl"
          >
            <span className="font-sans text-[10px] text-[#C5A869] tracking-[0.3em] uppercase font-bold block mb-1">
              STAGE {CRAFT_STAGES[activeCraftTab].step}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#FFFFFF] font-bold mb-1">
              {CRAFT_STAGES[activeCraftTab].title}
            </h3>
            <p className="font-sans text-xs text-[#C5A869] font-semibold tracking-wide mb-3">
              {CRAFT_STAGES[activeCraftTab].subtitle}
            </p>
            <p className="font-sans text-sm text-[#FAF5EC]/85 font-normal leading-relaxed mb-5">
              {CRAFT_STAGES[activeCraftTab].desc}
            </p>
            <div className="inline-block px-3.5 py-1.5 bg-[#C5A869]/20 border border-[#C5A869]/40 rounded-sm font-sans text-xs text-[#FFFFFF] font-medium">
              ✓ {CRAFT_STAGES[activeCraftTab].highlight}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= SECTION 5: PALACE NOCTURNE & TASTING PROFILE ================= */}
      <section id="section-palace" className="min-h-screen flex items-center justify-end px-6 md:px-16 lg:px-24 w-full py-32">
        <div className="w-full lg:w-1/2 max-w-xl text-left lg:text-right pointer-events-auto flex flex-col lg:items-end z-20">
          
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles size={15} className="text-[#C5A869]" />
            <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold">
              THE NOCTURNE OF PATIALA
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[0.95] text-[#FFFFFF] font-bold tracking-tight mb-6 drop-shadow-md">
            Where Royal Character<br />
            <span className="italic font-normal text-[#C5A869]">Meets Modern Craft</span>
          </h2>

          <div className="w-16 h-[1.5px] bg-[#C5A869] my-2" />

          <p className="font-sans text-sm font-normal text-[#FAF5EC]/80 leading-relaxed mb-8">
            Inside the grand arches and polished corridors of Patiyala Palace, time is measured in the quiet maturation of grain and Scottish malts in toasted wood.
          </p>

          {/* Tasting Notes Triad */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-lg text-left">
            <div className="p-4 bg-[#07182C]/90 border border-white/10 backdrop-blur-xl rounded-sm shadow-xl">
              <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">NOSE</span>
              <span className="block font-serif text-base font-bold text-[#FFFFFF]">Warm Oak</span>
              <span className="block font-sans text-[10px] text-[#FAF5EC]/70 mt-0.5">Vanilla & Honey</span>
            </div>

            <div className="p-4 bg-[#07182C]/90 border border-white/10 backdrop-blur-xl rounded-sm shadow-xl">
              <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">PALATE</span>
              <span className="block font-serif text-base font-bold text-[#FFFFFF]">Rich Malt</span>
              <span className="block font-sans text-[10px] text-[#FAF5EC]/70 mt-0.5">Spiced Caramel</span>
            </div>

            <div className="p-4 bg-[#07182C]/90 border border-white/10 backdrop-blur-xl rounded-sm shadow-xl">
              <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold mb-1">FINISH</span>
              <span className="block font-serif text-base font-bold text-[#FFFFFF]">Bold & Lingering</span>
              <span className="block font-sans text-[10px] text-[#FAF5EC]/70 mt-0.5">Velvet Warmth</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: ROYAL SERVES ================= */}
      <section id="section-serves" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 w-full py-32">
        <div className="w-full lg:w-1/2 max-w-xl pointer-events-auto z-20">
          
          <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold mb-2 block">
            THE ART OF THE POUR
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#FFFFFF] font-bold tracking-tight mb-8 drop-shadow-md">
            The Royal Rituals
          </h2>

          <div className="flex gap-2.5 mb-6 overflow-x-auto pb-2">
            {ROYAL_SERVES.map((serve, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playGlassClink();
                  setActiveServeTab(idx);
                }}
                className={`px-4 py-2 border font-sans text-xs tracking-widest uppercase transition-all whitespace-nowrap font-bold rounded-sm ${
                  activeServeTab === idx
                    ? 'bg-[#C5A869] text-[#030914] border-[#C5A869] shadow-xl'
                    : 'bg-[#07182C]/90 border-white/20 text-[#FAF5EC] hover:border-[#C5A869]'
                }`}
              >
                {serve.name.split(' ')[1] || serve.name}
              </button>
            ))}
          </div>

          <motion.div
            key={activeServeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-7 border border-white/10 bg-[#07182C]/90 backdrop-blur-2xl rounded-sm shadow-2xl"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-serif text-2xl md:text-3xl text-[#FFFFFF] font-bold">
                {ROYAL_SERVES[activeServeTab].name}
              </h3>
              <span className="font-sans text-[10px] px-2.5 py-1 bg-[#C5A869]/20 text-[#C5A869] font-bold border border-[#C5A869]/30">
                {ROYAL_SERVES[activeServeTab].glass}
              </span>
            </div>

            <p className="font-sans text-xs text-[#C5A869] mb-4 tracking-wider font-semibold">
              {ROYAL_SERVES[activeServeTab].subtitle}
            </p>

            <p className="font-sans text-sm text-[#FAF5EC]/85 leading-relaxed font-normal mb-5">
              {ROYAL_SERVES[activeServeTab].notes}
            </p>

            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              <span className="font-sans text-[10px] text-[#C5A869] uppercase tracking-widest font-bold">PAIRING:</span>
              <span className="font-sans text-xs text-[#FAF5EC]/80">{ROYAL_SERVES[activeServeTab].pair}</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= SECTION 7: EXCISE & PACKAGING AUTHENTICITY ================= */}
      <section id="section-specs" className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 w-full py-32">
        <div className="w-full max-w-4xl p-8 md:p-12 border border-[#C5A869]/40 bg-[#07182C]/95 backdrop-blur-2xl rounded-sm pointer-events-auto shadow-[0_20px_70px_rgba(0,0,0,0.95)] z-20">
          
          <div className="text-center mb-10">
            <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold block mb-2">
              AUTHENTICATED PACKAGING & EXCISE REGISTRY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FFFFFF] font-bold tracking-tight">
              Verified Product Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left border-y border-white/10 py-8">
            <div className="space-y-4">
              <div>
                <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold">BRAND NAME</span>
                <span className="block font-serif text-2xl font-bold text-[#FFFFFF]">PATIYALA PALACE</span>
              </div>

              <div>
                <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold">PRODUCT CATEGORY</span>
                <span className="block font-sans text-xs text-[#FAF5EC] font-semibold">INDIAN CRAFTED MALT WHISKY</span>
              </div>

              <div>
                <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold">ALCOHOL STRENGTH & VOLUME</span>
                <span className="block font-sans text-xs text-[#FAF5EC] font-semibold">42.8% V/V | 75° PROOF | 25° UP | 750 ML</span>
              </div>

              <div>
                <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold">AUTHORIZED TERRITORY</span>
                <span className="inline-block px-3 py-1 bg-[#C5A869]/20 border border-[#C5A869] text-[#C5A869] font-sans text-[10px] tracking-wider uppercase font-bold mt-1">
                  FOR SALE IN HARYANA STATE ONLY
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold">BLENDED & BOTTLED BY</span>
                <span className="block font-sans text-xs text-[#FFFFFF] font-bold">GHAZIABAD ORGANICS LIMITED</span>
                <span className="block font-sans text-[10px] text-[#FAF5EC]/70">Khasra No. 1579, 1580, Hapur Road, Bhojpur, Modinagar, Ghaziabad, U.P. - 201204</span>
                <span className="block font-sans text-[10px] text-[#C5A869] font-semibold mt-0.5">fssai Lic No. 12726055000320</span>
              </div>

              <div>
                <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold">MARKETED BY (PARENT HOUSE)</span>
                <span className="block font-sans text-xs text-[#FFFFFF] font-bold">SAKSHAM SPIRITS PRIVATE LIMITED</span>
                <span className="block font-sans text-[10px] text-[#FAF5EC]/70">Q-190A, South City-1, Gurugram, Haryana - 122001</span>
                <span className="block font-sans text-[10px] text-[#C5A869] font-semibold mt-0.5">fssai Lic No. 10826999000621</span>
              </div>

              <div>
                <span className="block font-sans text-[9px] text-[#C5A869] tracking-widest uppercase font-bold">STATE DISTRIBUTOR</span>
                <span className="block font-sans text-xs text-[#FAF5EC] font-semibold">M/S HS OBEROI SPIRITS, Gurugram, Haryana</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="font-sans text-[9px] text-[#FAF5EC]/60 tracking-widest uppercase font-medium">
              OFFICIAL HOUSE PORTAL: WWW.SAKSHAMSPIRITS.COM • CUSTOMER CARE: +91 76783 09432
            </span>
          </div>

        </div>
      </section>

      {/* ================= SECTION 8: PRIVATE CONCIERGE & CONTACT ================= */}
      <section id="section-contact" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 w-full py-32">
        <div className="w-full max-w-2xl mx-auto pointer-events-auto z-20">
          
          <div className="text-center mb-8">
            <span className="font-sans text-[10px] md:text-[11px] text-[#C5A869] tracking-[0.35em] uppercase font-bold block mb-2">
              DISTRIBUTION & PRIVATE ACQUISITIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#FFFFFF] font-bold tracking-tight">
              Connect With The House
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#FAF5EC]/75 mt-2">
              For state distribution queries, luxury retail inquiries, or corporate accounts.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 border border-[#C5A869] bg-[#07182C]/95 text-center rounded-sm shadow-2xl"
            >
              <Check className="w-12 h-12 text-[#C5A869] mx-auto mb-3" />
              <h3 className="font-serif text-2xl md:text-3xl text-[#FFFFFF] font-bold mb-1">Enquiry Registered</h3>
              <p className="font-sans text-xs md:text-sm text-[#FAF5EC]/85">
                The House of Shaksham Spirits concierge will review your dispatch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sound.playChime(720, 0.2);
                setFormSubmitted(true);
              }}
              className="space-y-5 p-8 md:p-10 border border-white/15 bg-[#07182C]/90 backdrop-blur-2xl rounded-sm shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  placeholder="FULL NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-[#FFFFFF] placeholder-white/40 focus:outline-none focus:border-[#C5A869] transition-colors font-medium"
                />

                <input
                  type="email"
                  required
                  placeholder="OFFICIAL EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-[#FFFFFF] placeholder-white/40 focus:outline-none focus:border-[#C5A869] transition-colors font-medium"
                />
              </div>

              <input
                type="text"
                placeholder="ORGANIZATION / VENUE (OPTIONAL)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-[#FFFFFF] placeholder-white/40 focus:outline-none focus:border-[#C5A869] transition-colors font-medium"
              />

              <textarea
                rows={3}
                required
                placeholder="NATURE OF ENQUIRY / BATCH ALLOCATION"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest text-[#FFFFFF] placeholder-white/40 focus:outline-none focus:border-[#C5A869] transition-colors resize-none font-medium"
              />

              <button
                type="submit"
                onMouseEnter={() => sound.playChime(600, 0.1)}
                className="w-full py-4 bg-[#C5A869] text-[#030914] font-sans text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#FFFFFF] transition-all duration-300 shadow-xl"
              >
                TRANSMIT ENQUIRY TO THE HOUSE
              </button>
            </form>
          )}

        </div>
      </section>

      {/* ================= SECTION 9: STATUTORY WARNING & FOOTER ================= */}
      <footer className="w-full py-16 px-6 md:px-16 lg:px-24 bg-[#030914] border-t border-white/10 text-[#FAF5EC] pointer-events-auto z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Statutory Warning Box */}
          <div className="w-full max-w-2xl border-2 border-[#C5A869]/70 bg-black/80 p-5 mb-12 shadow-2xl">
            <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-[#FFFFFF] mb-1.5">
              CONSUMPTION OF ALCOHOL IS INJURIOUS TO HEALTH.
            </p>
            <p className="font-sans text-xs tracking-widest text-[#C5A869] font-semibold">
              BE SAFE — DON'T DRINK AND DRIVE. | मदिरा सेवन स्वास्थ्य के लिए हानिकारक है।
            </p>
          </div>

          {/* Master Brand Lockup */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full border border-[#C5A869]/70 p-1.5 flex items-center justify-center mb-3 shadow-xl bg-[#07182C]">
              <img src="/assets/logo/PATIALA_PALACE_LOGO.png" alt="Patiyala Palace Official Master Logo" className="w-full h-full object-contain" />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-[#FFFFFF] font-bold tracking-widest mb-1">
              PATIYALA PALACE
            </h3>

            <p className="font-sans text-[10px] text-[#C5A869] tracking-[0.35em] uppercase font-bold mb-2">
              SHAKSHAM SPIRITS PVT. LTD.
            </p>

            <span className="font-sans text-[9px] text-[#FAF5EC]/70 tracking-widest uppercase font-medium">
              INDIAN CRAFTED MALT WHISKY • PRODUCT OF INDIA
            </span>
          </div>

          {/* Territorial Notice */}
          <div className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#FAF5EC]/60 tracking-widest uppercase gap-4 font-medium">
            <span className="text-[#C5A869] font-bold">FOR SALE IN HARYANA STATE ONLY</span>
            <span>&copy; {new Date().getFullYear()} SAKSHAM SPIRITS PRIVATE LIMITED. ALL RIGHTS RESERVED.</span>
            <span>DESIGNED FOR CONNOISSEURS</span>
          </div>

        </div>
      </footer>

    </div>
  );
};
