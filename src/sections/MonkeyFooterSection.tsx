import React from "react";

interface Props {
  onOpenAgeGate?: () => void;
  onNavigateHome?: () => void;
  onNavigateFindUs?: () => void;
}

export const MonkeyFooterSection: React.FC<Props> = ({
  onOpenAgeGate,
  onNavigateHome,
  onNavigateFindUs,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4">
        
        {/* Left Card (8 cols): Deep Royal Card with Embossed Watermark */}
        <div className="lg:col-span-8 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 bg-[#061b4c] text-white relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[550px] border border-[#CBD5E1]/30">
          
          {/* Whole Embossed Watermark: PATIYALA PALACE (Unclipped) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.14] px-4 sm:px-8">
            <svg
              viewBox="0 0 1200 180"
              className="w-full h-auto max-h-[160px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-[#E2E8F0] font-serif font-black"
                style={{
                  fontSize: "105px",
                  letterSpacing: "0.16em",
                  fontWeight: 900,
                }}
              >
                PATIYALA PALACE
              </text>
            </svg>
          </div>

          <div className="relative z-10 pt-2 sm:pt-4">
            {/* Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-[11px] font-mono tracking-[0.18em] uppercase text-[#CBD5E1]/80">
              {onNavigateFindUs ? (
                <button
                  onClick={onNavigateFindUs}
                  className="text-left text-emerald-300 hover:text-white font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>📍</span> FIND US (35+ HUBS)
                </button>
              ) : (
                <a href="?page=find-us" className="text-emerald-300 hover:text-white font-bold transition-colors">
                  📍 FIND US (STORE LOCATOR)
                </a>
              )}
              <a href="#terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
              <a href="#global" className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>🌐</span> INDIA (ORIGIN)
              </a>
              <a href="#privacy" className="hover:text-white transition-colors">PRIVACY NOTICE</a>
              <a href="mailto:info@sakshamspirits.com" className="hover:text-white transition-colors">CONTACT US</a>
              <a href="#cookie" className="hover:text-white transition-colors">COOKIE POLICY</a>
              <button onClick={onOpenAgeGate} className="text-left text-[#CBD5E1]/80 hover:text-white hover:underline cursor-pointer uppercase">
                RESET AGE GATE
              </button>
              <a href="#ugc" className="hover:text-white transition-colors">UGC POLICY</a>
            </div>
          </div>

          {/* Bottom Compliance & Copyright */}
          <div className="relative z-10 pt-10 border-t border-white/15 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[11px] font-sans text-white/60">
            
            {/* Social Icons */}
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
                  className="px-3.5 py-1 rounded-full bg-black/40 hover:bg-[#CBD5E1] hover:text-black border border-white/20 text-[10px] font-mono font-bold uppercase transition-all"
                >
                  {s.name}
                </a>
              ))}
            </div>

            {/* Drink Responsibly Statement */}
            <div className="text-left sm:text-right">
              <p className="font-bold text-[#E2E8F0] uppercase text-[11px] tracking-wider mb-1">
                Sip with Royal Elegance. Please drink responsibly.
              </p>
              <p className="text-[10px] text-white/50">
                © {currentYear} Saksham Spirits Pvt. Ltd. All rights reserved. Strictly 25+.
              </p>
            </div>

          </div>

        </div>

        {/* Right Card (4 cols): Royal Seal Showcase Card */}
        <div className="lg:col-span-4 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#03102B] relative shadow-2xl min-h-[400px] lg:min-h-[550px] group border border-[#CBD5E1]/40 flex flex-col items-center justify-center p-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,232,240,0.2)_0%,transparent_70%)] pointer-events-none" />

          <div 
            onClick={onNavigateHome}
            className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 my-auto flex items-center justify-center cursor-pointer"
          >
            <img
              src="/assets/logo/pp_logo_silver_clean.png"
              alt="Patiyala Palace Official Crest"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_30px_rgba(226,232,240,0.7)] group-hover:scale-105 group-hover:rotate-6 transition-transform duration-700"
            />
          </div>

          {/* Floating Royal Motto Badge */}
          <div className="relative z-10 pt-4 border-t border-[#CBD5E1]/30 w-full text-center">
            <h4 
              onClick={onNavigateHome}
              className="font-serif font-black text-base uppercase tracking-[0.2em] text-[#E2E8F0] cursor-pointer hover:text-white transition-colors"
            >
              PATIYALA PALACE
            </h4>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white/80 block mt-1">
              WHERE ROYALTY MEETS THE BARREL
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
