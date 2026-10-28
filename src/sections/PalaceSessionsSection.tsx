import React, { useState } from "react";
import { motion } from "framer-motion";

export const PalaceSessionsSection: React.FC = () => {
  const [activeSession, setActiveSession] = useState(0);

  const sessions = [
    {
      title: "MIDNIGHT SPEAKEASY",
      vibe: "Lo-Fi Beats & Velvet Jazz",
      bpm: "84 BPM",
      curator: "The Royal Bar Lounge",
      pairing: "Tasting with Crafted Indian Malt (Batch 01)",
      description: "Warm brass horns, acoustic upright bass, and hypnotic tape-saturated beats crafted for candlelit drams and unhurried conversation.",
      tag: "AFTER DARK",
      duration: "1 hr 45 min",
    },
    {
      title: "DARBAR CHILLOUT",
      vibe: "Classical Sitar & Deep Ambient",
      bpm: "96 BPM",
      curator: "Palace Vault Sessions",
      pairing: "Tasting with Vintage Peat (Batch 02)",
      description: "Hypnotic tabla rhythms interwoven with ethereal sitar melodies and subtle modular synthesizer soundscapes.",
      tag: "HERITAGE GROOVE",
      duration: "2 hr 10 min",
    },
    {
      title: "ROYAL SUNDOWNER",
      vibe: "Soulful House & Disco Funk",
      bpm: "118 BPM",
      curator: "Saksham Sound Lab",
      pairing: "Tasting with Double Oloroso (Batch 03)",
      description: "Golden hour grooves, upbeat brass riffs, and shimmering percussion meant for highball sipping with friends.",
      tag: "SUNSET HIGHBALL",
      duration: "1 hr 30 min",
    },
  ];

  return (
    <section id="sessions" className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none z-20 bg-[#111111]">
      
      {/* Background Subtle Orange Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E6501E]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-screen-2xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#E6501E] block mb-2">
              PALACE SESSIONS • SOUND & ATMOSPHERE
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              MUSIC FOR <span className="text-[#E6501E]">MIXING.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#F1E6DA]/80 max-w-md leading-relaxed font-light">
            Music made for sipping. Discover our curated playlists, speakeasy soundscapes, and sensory cocktail pairings.
          </p>
        </div>

        {/* 3 Interactive Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {sessions.map((session, idx) => {
            const isSelected = activeSession === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => setActiveSession(idx)}
                className={`bg-[#1A1A1A] border-2 rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] ${
                  isSelected ? "border-[#E6501E] shadow-[0_20px_50px_rgba(230,80,30,0.3)]" : "border-white/10 hover:border-[#E6501E]/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#E6501E]/20 text-[#E6501E]">
                      {session.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#E6501E]">
                      {session.bpm}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight">
                    {session.title}
                  </h3>
                  <p className="font-mono text-xs text-[#E6501E] tracking-wider uppercase font-bold mt-1">
                    {session.vibe}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#F1E6DA]/75 mt-4 leading-relaxed font-light">
                    {session.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-white/60 font-sans">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#E6501E]">PAIRING</span>
                    <span className="text-white font-medium text-right text-[11px] truncate max-w-[180px]">
                      {session.pairing}
                    </span>
                  </div>

                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-full text-xs font-sans font-black uppercase tracking-wider bg-[#E6501E] hover:bg-[#FF6B00] text-black shadow-[0_4px_15px_rgba(230,80,30,0.35)] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>LISTEN ON SPOTIFY</span>
                    <span>♫</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
