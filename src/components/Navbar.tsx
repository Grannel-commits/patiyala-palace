import React, { useState, useEffect } from "react";

interface Props {
  onOpenMenu?: () => void;
  onNavigate: (sectionId: string) => void;
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
  currentPage?: "home" | "cocktails" | "story";
}

export const Navbar: React.FC<Props> = ({
  onNavigate,
  onOpenMenu,
  isAudioPlaying = false,
  onToggleAudio,
  currentPage = "home",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled || currentPage !== "home"
          ? "bg-[#111111]/95 backdrop-blur-xl border-b border-[#E6501E]/40 shadow-2xl py-3"
          : "bg-[#111111]/80 backdrop-blur-md border-b border-white/10 py-3.5"
      }`}
    >
      <nav className="mx-auto block w-full max-w-screen-xl px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Royal Emblem & Wordmark */}
          <div
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#E6501E]/60 p-1 flex items-center justify-center bg-[#1A1A1A] shadow-[0_0_15px_rgba(230,80,30,0.3)] transition-transform duration-300 group-hover:scale-105">
              <img
                alt="Patiyala Palace Official Seal"
                src="/assets/logo/official_gold_seal.png"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-sans font-black text-sm sm:text-base tracking-[0.12em] uppercase text-white group-hover:text-[#E6501E] transition-colors leading-tight">
                PATIYALA PALACE
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-[#E6501E] font-bold">
                MADE FOR MIXING
              </span>
            </div>
          </div>

          {/* CENTER: Desktop Navigation Links (Monkey Shoulder Clean & Bold) */}
          <ul className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {[
              { id: "whiskies", label: "OUR WHISKIES" },
              { id: "cocktails", label: "COCKTAILS" },
              { id: "story", label: "OUR STORY" },
              { id: "sessions", label: "PALACE SESSIONS" },
            ].map((link) => {
              const isActive =
                (currentPage === "story" && link.id === "story") ||
                (currentPage === "cocktails" && link.id === "cocktails") ||
                (currentPage === "home" && link.id === "whiskies" && !isScrolled);
              return (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className={`px-3.5 py-1.5 font-sans font-bold text-[11px] uppercase tracking-[0.14em] rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "text-[#E6501E] bg-[#E6501E]/15 border border-[#E6501E]/40"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* RIGHT: Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Audio Toggle */}
            {onToggleAudio && (
              <button
                onClick={onToggleAudio}
                aria-label={isAudioPlaying ? "Mute ambiance" : "Play ambiance"}
                className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isAudioPlaying
                    ? "bg-[#E6501E]/20 border-[#E6501E]/60 text-[#E6501E]"
                    : "bg-white/5 border-white/15 text-white/60 hover:text-white"
                }`}
              >
                <span>{isAudioPlaying ? "SOUND: ON" : "MUTED"}</span>
              </button>
            )}

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/patiyalapalace/"
              target="_blank"
              rel="noreferrer"
              aria-label="Patiyala Palace Instagram"
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-[#E6501E] hover:text-black border border-white/15 text-white/80 transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Chunky High-Impact Orange Pill Button */}
            <button
              onClick={() => onNavigate("locator")}
              className="px-5 sm:px-6 py-2.5 rounded-full bg-[#E6501E] hover:bg-[#FF6B00] text-black font-sans text-xs font-black tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(230,80,30,0.35)] hover:scale-105"
            >
              FIND A BOTTLE
            </button>

            {/* Menu Drawer */}
            {onOpenMenu && (
              <button
                onClick={onOpenMenu}
                aria-label="Open menu"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 flex flex-col items-center justify-center gap-1 text-white transition-all cursor-pointer"
              >
                <span className="w-4 h-[1px] bg-white rounded-full" />
                <span className="w-4 h-[1px] bg-[#D4AF37] rounded-full" />
                <span className="w-4 h-[1px] bg-white rounded-full" />
              </button>
            )}

          </div>

        </div>
      </nav>
    </header>
  );
};
