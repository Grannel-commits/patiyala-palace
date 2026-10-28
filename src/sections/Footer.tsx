import React from "react";

interface Props {
  onNavigate: (sectionId: string) => void;
  onOpenAgeGate?: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenAgeGate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0D0D0D] text-white pt-16 sm:pt-20 pb-12 z-20 border-t border-[#E6501E]/30 select-none">
      <div className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-12">
        
        {/* Top Row: Brand Lockup & Social Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#E6501E]/70 p-1 flex items-center justify-center bg-[#1A1A1A] shadow-[0_0_15px_rgba(230,80,30,0.3)]">
              <img
                src="/assets/logo/official_silver_seal.png"
                alt="Patiyala Palace Official Gold Seal"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <span className="font-sans font-black text-xl sm:text-2xl tracking-[0.12em] uppercase text-white block leading-tight">
                PATIYALA PALACE
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#E6501E] uppercase font-bold">
                100% BLENDED MALT WHISKY • MADE FOR MIXING
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { name: "Instagram", url: "https://www.instagram.com/patiyalapalace/" },
              { name: "Facebook", url: "https://facebook.com" },
              { name: "YouTube", url: "https://youtube.com" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-[#E6501E] hover:text-black border border-white/15 text-[11px] font-sans font-bold uppercase tracking-wider transition-all"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Center Grid: 3 Clean Columns */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 text-xs">
          
          {/* Column 1: Heritage & Craft */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#E6501E] mb-3">
              THE WHISKY & ROOTS
            </h4>
            <ul className="space-y-2 font-sans text-white/70 font-light">
              <li>
                <button onClick={() => onNavigate("whiskies")} className="hover:text-white transition-colors cursor-pointer">
                  The Original (Batch 27)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("whiskies")} className="hover:text-white transition-colors cursor-pointer">
                  Smokey Peat (Batch 02)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("whiskies")} className="hover:text-white transition-colors cursor-pointer">
                  Double Oloroso (Batch 03)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("story")} className="hover:text-white transition-colors cursor-pointer">
                  Our Story & Lineage
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Cocktails */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#E6501E] mb-3">
              MADE FOR MIXING
            </h4>
            <ul className="space-y-2 font-sans text-white/70 font-light">
              <li>
                <button onClick={() => onNavigate("cocktails")} className="hover:text-white transition-colors cursor-pointer">
                  The Ginger Peg
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("cocktails")} className="hover:text-white transition-colors cursor-pointer">
                  Smoky Old Fashioned
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("cocktails")} className="hover:text-white transition-colors cursor-pointer">
                  Sour Sides of Patiyala
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("cocktails")} className="hover:text-white transition-colors cursor-pointer">
                  All Cocktail Recipes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Enquiries */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#E6501E] mb-3">
              CONTACT & ENQUIRIES
            </h4>
            <ul className="space-y-2 font-sans text-white/70 font-light">
              <li>
                <span className="text-white/80">Saksham Spirits Pvt. Ltd.</span>
              </li>
              <li>
                <span>Haryana & Delhi NCR, India</span>
              </li>
              <li>
                <a href="mailto:info@sakshamspirits.com" className="hover:text-white transition-colors">
                  info@sakshamspirits.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Responsible Drinking Disclaimer Banner */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full border-2 border-[#E6501E] text-[#E6501E] flex items-center justify-center font-bold text-xs font-mono">
              25+
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F1E6DA] font-bold">
              DRINK RESPONSIBLY • STRICTLY FOR LEGAL DRINKING AGE (25+ IN HARYANA)
            </span>
          </div>
          <p className="font-sans text-[11px] text-white/50 max-w-md font-light">
            Saksham Spirits Pvt. Ltd. advocates moderation. Do not drink and drive. Not for sale to persons under the legal age.
          </p>
        </div>

        {/* Bottom Copyright & Age Gate Recheck */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 font-mono font-light">
          <span>
            © {currentYear} Saksham Spirits Pvt. Ltd. All Rights Reserved. Patiyala Palace™ is a registered trademark.
          </span>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenAgeGate}
              className="text-[#E6501E] hover:underline cursor-pointer font-bold"
            >
              Reset Age Verification
            </button>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
