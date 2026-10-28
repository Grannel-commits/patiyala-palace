import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GhazalTrack {
  id: string;
  youtubeId: string;
  title: string;
  hindiTitle: string;
  artist: string;
  category: "jagjit" | "classic" | "romance";
  categoryLabel: string;
  duration: string;
  ragaMood: string;
  poetryBy: string;
  coupletHindi: string;
  coupletEnglish: string;
  whiskyPairing: string;
  tastingNote: string;
  description: string;
}

const GHAZAL_CATALOG: GhazalTrack[] = [
  {
    id: "woh-kagaz-ki-kashti",
    youtubeId: "NEYRKTy5OgY",
    title: "Woh Kagaz Ki Kashti",
    hindiTitle: "वो कागज़ की कश्ती",
    artist: "Jagjit Singh & Chitra Singh",
    category: "jagjit",
    categoryLabel: "Jagjit Singh Masterpiece",
    duration: "4:00",
    ragaMood: "Nostalgic Raindrop Melancholy",
    poetryBy: "Sudarshan Faakir",
    coupletHindi: "ये दौलत भी ले लो, ये शोहरत भी ले लो, भले छीन लो मुझसे मेरी जवानी... मगर मुझको लौटा दो बचपन का सावन, वो कागज़ की कश्ती, वो बारिश का पानी।",
    coupletEnglish: "Take this wealth, take this fame, take away my youth... But return to me the monsoon of my childhood, that paper boat, that rain water.",
    whiskyPairing: "Patiyala Palace Crafted Indian Malt Neat",
    tastingNote: "Toasted oak, warm vanilla, and honeyed butterscotch that unfurls as the nostalgic harmonium notes rise.",
    description: "An immortal masterpiece reflecting on lost innocence and childhood rain. The gentle hum of Jagjit Singh's voice complements an unhurried, thoughtful dram.",
  },
  {
    id: "hothon-se-chhoo-lo-tum",
    youtubeId: "UDOD-rzC604",
    title: "Hothon Se Chhoo Lo Tum",
    hindiTitle: "होंठों से छू लो तुम",
    artist: "Jagjit Singh",
    category: "jagjit",
    categoryLabel: "Poetic Romance",
    duration: "5:05",
    ragaMood: "Velvet Acoustic Romance",
    poetryBy: "Indeevar (Prem Geet)",
    coupletHindi: "होंठों से छू लो तुम, मेरा गीत अमर कर दो... बन जाओ मीत मेरे, मेरी प्रीत अमर कर दो।",
    coupletEnglish: "Touch with your lips and make my song immortal... Become my companion and make my love eternal.",
    whiskyPairing: "Patiyala Palace Over Hand-Carved Ice",
    tastingNote: "Silky dried fruits and delicate malt sweetness chilled slowly over a single crystal ice sphere.",
    description: "Perhaps the most beloved romantic ghazal in modern Indian history. A tender acoustic ballad composed to be shared in intimate evening company.",
  },
  {
    id: "chupke-chupke-raat-din",
    youtubeId: "MWjaK_nW72E",
    title: "Chupke Chupke Raat Din",
    hindiTitle: "चुपके चुपके रात दिन",
    artist: "Ustad Ghulam Ali",
    category: "classic",
    categoryLabel: "Royal Darbar Classical",
    duration: "7:20",
    ragaMood: "Midnight Courtyard Whispers",
    poetryBy: "Maulana Hasrat Mohani",
    coupletHindi: "चुपके चुपके रात दिन आँसू बहाना याद है... हम को अब तक आशिक़ी का वो ज़माना याद है।",
    coupletEnglish: "Silently weeping tears through night and day, I remember... I still remember that timeless era of intense love.",
    whiskyPairing: "Patiyala Palace Old Fashioned",
    tastingNote: "Aged Indian malt infused with aromatic bitters and orange oils, echoing the intricate vocal flourishes of Ghulam Ali.",
    description: "The gold standard of classical Hindustani ghazal gayaki. Maulana Hasrat Mohani's exquisite poetry sung with unmatched precision and soul.",
  },
  {
    id: "ranjish-hi-sahi",
    youtubeId: "Xc6uwbXpmUY",
    title: "Ranjish Hi Sahi",
    hindiTitle: "रंजिश ही सही",
    artist: "Mehdi Hassan (King of Ghazals)",
    category: "classic",
    categoryLabel: "The Shehanshah of Ghazal",
    duration: "6:40",
    ragaMood: "Deep Soul Contemplation",
    poetryBy: "Ahmed Faraz",
    coupletHindi: "रंजिश ही सही दिल ही दुखाने के लिए आ... आ फिर से मुझे छोड़ के जाने के लिए आ।",
    coupletEnglish: "Even if in resentment, come to break my heart again... Come, even if only to leave me behind once more.",
    whiskyPairing: "Patiyala Palace Vintage Cask",
    tastingNote: "Deep amber layers of Oloroso sherry cask warmth, dark cocoa, and lingering toasted spice.",
    description: "The undisputed monarch of ghazals. Ahmed Faraz's poignant verse brought to life by Mehdi Hassan's resonant, velvet baritone.",
  },
  {
    id: "aaj-jane-ki-zid-na-karo",
    youtubeId: "uBbAOwzbAsE",
    title: "Aaj Jane Ki Zid Na Karo",
    hindiTitle: "आज जाने की ज़िद न करो",
    artist: "Farida Khanum (Malika-e-Ghazal)",
    category: "romance",
    categoryLabel: "Midnight Baithak",
    duration: "6:50",
    ragaMood: "Sultry Twilight Intimacy",
    poetryBy: "Fayyaz Hashmi",
    coupletHindi: "आज जाने की ज़िद न करो... यूँ ही पहलू में बैठे रहो, आज जाने की ज़िद न करो।",
    coupletEnglish: "Do not insist on leaving tonight... Just remain seated beside me, do not insist on leaving.",
    whiskyPairing: "Patiyala Palace Ginger Highball",
    tastingNote: "Effervescent club soda, fresh ginger zest, and smooth golden malt that keeps the evening lingering on.",
    description: "A hypnotic plea against the fleeting passage of time. Farida Khanum's seductive, measured phrasing turns every second into royal luxury.",
  },
  {
    id: "chandi-jaisa-rang-hai-tera",
    youtubeId: "5iekzA7p0V0",
    title: "Chandi Jaisa Rang Hai Tera",
    hindiTitle: "चाँदी जैसा रंग है तेरा",
    artist: "Pankaj Udhas",
    category: "romance",
    categoryLabel: "Festive Golden Savor",
    duration: "5:45",
    ragaMood: "Celebratory Golden Charm",
    poetryBy: "Mumtaz Rashid",
    coupletHindi: "चाँदी जैसा रंग है तेरा सोने जैसे बाल... एक तू ही धनवान है गोरी बाक़ी सब कंगाल।",
    coupletEnglish: "Silver is your complexion, like pure gold is your hair... You alone possess true regal richness, while all else pales.",
    whiskyPairing: "Patiyala Jam Sour with Gold Dust",
    tastingNote: "Velvety citrus acidity balanced with spiced Indian malt and subtle golden foam crema.",
    description: "An upbeat, spirited romantic ghazal celebrated across generations. Crafted for joyful gatherings and evenings of celebration.",
  },
  {
    id: "jhuki-jhuki-si-nazar",
    youtubeId: "xY2P6IAd0MI",
    title: "Jhuki Jhuki Si Nazar",
    hindiTitle: "झुकी झुकी सी नज़र",
    artist: "Jagjit Singh",
    category: "jagjit",
    categoryLabel: "Poetic Velvet",
    duration: "4:30",
    ragaMood: "Gentle Twilight Reflections",
    poetryBy: "Kaifi Azmi (Arth)",
    coupletHindi: "झुकी झुकी सी नज़र बे-क़रार है कि नहीं... दबा दबा सा सही दिल में प्यार है कि नहीं।",
    coupletEnglish: "Are those lowered eyes restless or not? Even if suppressed, is there love in your heart or not?",
    whiskyPairing: "Patiyala Palace 42.8% ABV Neat",
    tastingNote: "Pure unadulterated malt character with notes of charred bourbon cask, cardamom, and gentle caramel.",
    description: "Kaifi Azmi's heart-rending introspective poetry sung with quiet, dignified passion by Jagjit Singh.",
  },
];

interface Props {
  onBackToHome: () => void;
  onExploreCocktails?: () => void;
  onExploreStory?: () => void;
}

export const PalaceSessionsPage: React.FC<Props> = ({
  onBackToHome,
  onExploreCocktails,
  onExploreStory,
}) => {
  const [activeTrack, setActiveTrack] = useState<GhazalTrack>(GHAZAL_CATALOG[0]);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "jagjit" | "classic" | "romance">("all");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // PostMessage helper to control YouTube IFrame API directly
  const sendYTCommand = (func: string, args: any[] = []) => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func, args }),
          "*"
        );
      }
    } catch (err) {
      console.warn("Could not send YouTube command:", err);
    }
  };

  // Listen for YouTube player state changes to keep UI synchronized
  useEffect(() => {
    const handleYTMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data?.event === "onStateChange") {
          // 1 = PLAYING, 2 = PAUSED, 0 = ENDED, 3 = BUFFERING
          if (data.info === 1) {
            setIsPlaying(true);
          } else if (data.info === 2) {
            setIsPlaying(false);
          } else if (data.info === 0) {
            playNextTrack();
          }
        }
      } catch {
        // Non-JSON messages ignored
      }
    };

    window.addEventListener("message", handleYTMessage);
    return () => window.removeEventListener("message", handleYTMessage);
  }, [activeTrack]);

  const togglePlayPause = () => {
    if (isPlaying) {
      sendYTCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      sendYTCommand("playVideo");
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      sendYTCommand("unMute");
      setIsMuted(false);
    } else {
      sendYTCommand("mute");
      setIsMuted(true);
    }
  };

  const restartTrack = () => {
    sendYTCommand("seekTo", [0, true]);
    sendYTCommand("playVideo");
    setIsPlaying(true);
  };

  const playNextTrack = () => {
    const currentIndex = GHAZAL_CATALOG.findIndex((t) => t.id === activeTrack.id);
    const nextIndex = (currentIndex + 1) % GHAZAL_CATALOG.length;
    setActiveTrack(GHAZAL_CATALOG[nextIndex]);
    setIsPlaying(true);
  };

  const playPrevTrack = () => {
    const currentIndex = GHAZAL_CATALOG.findIndex((t) => t.id === activeTrack.id);
    const prevIndex = (currentIndex - 1 + GHAZAL_CATALOG.length) % GHAZAL_CATALOG.length;
    setActiveTrack(GHAZAL_CATALOG[prevIndex]);
    setIsPlaying(true);
  };

  const handleSelectTrack = (track: GhazalTrack) => {
    setActiveTrack(track);
    setIsPlaying(true);
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const filteredTracks = GHAZAL_CATALOG.filter((t) => {
    if (selectedFilter === "all") return true;
    return t.category === selectedFilter;
  });

  return (
    <div className="relative w-full min-h-screen bg-[#020818] text-white pt-20 sm:pt-24 pb-20">
      
      {/* Background Royal Sapphire & Gold Aura */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(198,168,101,0.12)_0%,rgba(4,18,53,0.4)_50%,transparent_80%)] blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,36,139,0.25)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. TOP HERO BREADCRUMB & INTRO
        ======================================================== */}
        <div className="flex items-center justify-between border-b border-[#C6A865]/20 pb-6 mb-8 sm:mb-12">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-[#C6A865] hover:text-black border border-[#C6A865]/40 text-[#E7C97C] font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>RETURN TO PALACE HOME</span>
          </button>

          <div className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? "bg-[#E7C97C] animate-pulse shadow-[0_0_12px_#E7C97C]" : "bg-white/40"}`} />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E7C97C] font-bold">
              {isPlaying ? "PLAYING IN PALACE" : "PAUSED"}
            </span>
          </div>
        </div>

        {/* Hero Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#C6A865]/50 backdrop-blur-md mb-4 shadow-xl">
            <span className="font-serif text-[11px] font-bold tracking-[0.3em] uppercase text-[#E7C97C]">
              ROYAL MEHFIL • GHAZAL SESSIONS
            </span>
          </div>

          <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            POETRY IN <br />
            <span className="gold-gradient-text text-[#E7C97C]">A GLASS.</span>
          </h1>

          <p className="mt-4 font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
            Ghazals are the soul of the royal Indian darbar. Unwind with timeless melodies from legends like 
            <strong className="text-[#E7C97C] font-semibold"> Jagjit Singh</strong>, 
            <strong className="text-[#E7C97C] font-semibold"> Mehdi Hassan</strong>, and 
            <strong className="text-[#E7C97C] font-semibold"> Ghulam Ali</strong> — paired thoughtfully with 
            Patiyala Palace Indian Crafted Malt.
          </p>
        </div>

        {/* ========================================================
            2. EMBEDDED MAIN STAGE (YouTube Video + Master Control Bar)
        ======================================================== */}
        <div ref={playerRef} className="mb-14 sm:mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-[#030d24] border-2 border-[#C6A865]/50 shadow-[0_25px_80px_rgba(0,0,0,0.9)] p-3 sm:p-5 md:p-6 backdrop-blur-xl">
            
            {/* Top Player Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 px-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#061b4c] border border-[#C6A865]/60 flex items-center justify-center shadow-lg">
                  <span className={`text-sm font-bold ${isPlaying ? "text-[#E7C97C] animate-spin" : "text-white/60"}`}>
                    💿
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C6A865] block">
                    NOW PLAYING IN PALACE SESSIONS
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    {activeTrack.title} <span className="text-[#E7C97C]/90 font-normal">({activeTrack.hindiTitle})</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-[#C6A865]/40 text-[#E7C97C] font-mono text-[10px] font-bold tracking-widest uppercase">
                  {activeTrack.categoryLabel}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E7C97C]/10 border border-[#E7C97C]/30 text-white font-mono text-[10px] tracking-widest uppercase">
                  {activeTrack.duration}
                </span>
              </div>
            </div>

            {/* Embedded Responsive YouTube Iframe with Pointer-Events Enabled */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner border border-white/10 pointer-events-auto">
              <iframe
                ref={iframeRef}
                key={activeTrack.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${activeTrack.youtubeId}?enablejsapi=1&autoplay=1&rel=0&modestbranding=1&controls=1&playsinline=1`}
                title={`${activeTrack.title} by ${activeTrack.artist}`}
                className="interactive-iframe absolute inset-0 w-full h-full border-0 pointer-events-auto z-10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* ========================================================
                DEDICATED MASTER CONTROL BAR (PAUSE / PLAY / NEXT / MUTE)
            ======================================================== */}
            <div className="mt-4 p-3 sm:p-4 rounded-2xl bg-[#020818]/95 border border-[#C6A865]/40 shadow-xl flex flex-wrap items-center justify-between gap-4">
              
              {/* Left: Previous, Play/Pause, Next */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Previous Button */}
                <button
                  onClick={playPrevTrack}
                  title="Previous Ghazal"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C6A865] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  ⏮
                </button>

                {/* Primary PLAY / PAUSE Button */}
                <button
                  onClick={togglePlayPause}
                  className={`px-5 sm:px-7 py-2.5 rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2.5 transition-all duration-300 shadow-2xl cursor-pointer ${
                    isPlaying
                      ? "bg-[#E7C97C] hover:bg-[#C6A865] text-black shadow-[0_0_20px_rgba(231,201,124,0.4)] scale-105"
                      : "bg-white/10 hover:bg-[#E7C97C] hover:text-black text-white border border-[#C6A865]"
                  }`}
                >
                  <span className="text-base">{isPlaying ? "⏸" : "▶"}</span>
                  <span>{isPlaying ? "PAUSE GHAZAL" : "RESUME GHAZAL"}</span>
                </button>

                {/* Next Button */}
                <button
                  onClick={playNextTrack}
                  title="Next Ghazal"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C6A865] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  ⏭
                </button>
              </div>

              {/* Middle: Soundwave Status */}
              <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[#E7C97C]">
                <div className="flex items-end gap-1 h-4">
                  <span className={`w-1 bg-[#E7C97C] rounded-full transition-all duration-300 ${isPlaying ? "h-4 animate-pulse" : "h-1"}`} />
                  <span className={`w-1 bg-[#E7C97C] rounded-full transition-all duration-300 ${isPlaying ? "h-3 animate-pulse delay-100" : "h-1"}`} />
                  <span className={`w-1 bg-[#E7C97C] rounded-full transition-all duration-300 ${isPlaying ? "h-5 animate-pulse delay-200" : "h-1"}`} />
                  <span className={`w-1 bg-[#E7C97C] rounded-full transition-all duration-300 ${isPlaying ? "h-2 animate-pulse delay-150" : "h-1"}`} />
                </div>
                <span className="text-[10px] tracking-widest uppercase">
                  {isPlaying ? "MASTER RECORDING STREAMING" : "PLAYBACK PAUSED"}
                </span>
              </div>

              {/* Right: Mute & Restart Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className={`px-3 py-1.5 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isMuted
                      ? "bg-red-950/60 border-red-500/50 text-red-300"
                      : "bg-white/5 hover:bg-white/15 border-white/20 text-white/90"
                  }`}
                >
                  <span>{isMuted ? "🔇" : "🔊"}</span>
                  <span>{isMuted ? "UNMUTE" : "MUTE"}</span>
                </button>

                <button
                  onClick={restartTrack}
                  title="Restart Track from Beginning"
                  className="px-3 py-1.5 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/15 border border-white/20 text-white/90 transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>↺</span>
                  <span className="hidden sm:inline">REPLAY</span>
                </button>
              </div>

            </div>

            {/* Now Playing Detailed Metadata Panel */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 rounded-2xl bg-[#041235]/90 border border-[#C6A865]/30">
              
              {/* Left Column: Poetry & Couplet */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#E7C97C]">
                      FEATURED SHER (THE COUPLET)
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="font-mono text-[10px] text-white/60">
                      Poetry: {activeTrack.poetryBy}
                    </span>
                  </div>

                  {/* Hindi Couplet Quote */}
                  <blockquote className="font-serif text-base sm:text-lg text-white font-medium italic leading-relaxed border-l-2 border-[#E7C97C] pl-4 py-1 my-3 bg-black/30 rounded-r-xl">
                    "{activeTrack.coupletHindi}"
                  </blockquote>

                  {/* English Translation */}
                  <p className="font-sans text-xs text-white/70 italic pl-4 font-light">
                    "{activeTrack.coupletEnglish}"
                  </p>
                </div>

                <p className="font-sans text-xs text-white/80 font-light mt-4 leading-relaxed">
                  {activeTrack.description}
                </p>
              </div>

              {/* Right Column: Royal Malt Pairing */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-[#020818]/95 border border-[#C6A865]/40 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#E7C97C]">
                      CONNOISSEUR'S PAIRING
                    </span>
                    <span className="text-xs">🥃</span>
                  </div>

                  <h4 className="font-serif font-black text-lg text-white uppercase tracking-wider">
                    {activeTrack.whiskyPairing}
                  </h4>

                  <p className="font-sans text-xs text-white/75 font-light leading-relaxed mt-2">
                    {activeTrack.tastingNote}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#E7C97C]">
                  <span className="uppercase tracking-widest">ATMOSPHERE:</span>
                  <span className="uppercase tracking-widest text-white/80">{activeTrack.ragaMood}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================
            3. INTERACTIVE GHAZAL PLAYLIST & JUKEBOX GRID
        ======================================================== */}
        <div className="mb-16 sm:mb-24">
          
          {/* Header & Filter Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#E7C97C] block mb-1">
                PALACE JUKEBOX • SELECT A GHAZAL
              </span>
              <h2 className="font-serif font-black text-2xl sm:text-4xl uppercase tracking-tight text-white">
                CURATED ROYAL REPERTOIRE
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Classics (7)" },
                { id: "jagjit", label: "Jagjit Singh" },
                { id: "classic", label: "Mehdi Hassan & Ghulam Ali" },
                { id: "romance", label: "Romantic Poetry" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedFilter === f.id
                      ? "bg-[#C6A865] text-black shadow-lg scale-105"
                      : "bg-white/5 hover:bg-white/15 text-white/70 border border-white/10"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Ghazal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredTracks.map((track) => {
              const isCurrentTrack = activeTrack.id === track.id;
              return (
                <motion.div
                  key={track.id}
                  whileHover={{ y: -4 }}
                  onClick={() => handleSelectTrack(track)}
                  className={`group relative rounded-2xl overflow-hidden bg-[#041235] p-5 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl ${
                    isCurrentTrack
                      ? "border-[#E7C97C] shadow-[0_10px_40px_rgba(231,201,124,0.25)] bg-[#05194a]"
                      : "border-[#C6A865]/25 hover:border-[#C6A865]/70"
                  }`}
                >
                  {/* Card Thumbnail & Badge */}
                  <div>
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-black">
                      <img
                        src={`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`}
                        alt={track.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Play State Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        {isCurrentTrack && isPlaying ? (
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7C97C] text-black font-mono text-[9px] font-black uppercase tracking-wider shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                            <span>PLAYING NOW</span>
                          </div>
                        ) : isCurrentTrack ? (
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-lg">
                            <span>PAUSED</span>
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-[#C6A865]/60 flex items-center justify-center text-[#E7C97C] text-xs font-bold group-hover:scale-110 group-hover:bg-[#C6A865] group-hover:text-black transition-all">
                            ▶
                          </div>
                        )}
                      </div>

                      {/* Duration */}
                      <span className="absolute bottom-2.5 right-2.5 font-mono text-[10px] bg-black/80 px-2 py-0.5 rounded text-white/90">
                        {track.duration}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#E7C97C] mb-1">
                      <span className="uppercase tracking-widest">{track.categoryLabel}</span>
                    </div>

                    <h3 className="font-serif font-black text-xl text-white group-hover:text-[#E7C97C] transition-colors leading-tight">
                      {track.title}
                    </h3>
                    <p className="font-sans text-xs text-[#E7C97C]/90 font-medium mt-0.5">
                      {track.hindiTitle} • {track.artist}
                    </p>

                    <p className="font-sans text-xs text-white/70 font-light mt-3 line-clamp-2 leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  {/* Card Bottom: Pairing & Play CTA */}
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-col text-[10px]">
                      <span className="text-white/40 font-mono uppercase tracking-widest">PAIRING</span>
                      <span className="font-mono text-white/90 font-bold truncate max-w-[170px]">
                        {track.whiskyPairing}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isCurrentTrack) {
                          togglePlayPause();
                        } else {
                          handleSelectTrack(track);
                        }
                      }}
                      className={`px-3.5 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        isCurrentTrack && isPlaying
                          ? "bg-[#E7C97C] text-black shadow-lg"
                          : "bg-white/10 group-hover:bg-[#C6A865] group-hover:text-black text-white"
                      }`}
                    >
                      {isCurrentTrack ? (isPlaying ? "⏸ PAUSE" : "▶ RESUME") : "PLAY SONG"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            4. THE CONNOISSEUR'S SAVOR RITUAL
        ======================================================== */}
        <div className="mb-16 sm:mb-20 rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-br from-[#061b4c] to-[#020818] border border-[#C6A865]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(198,168,101,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#E7C97C] block mb-2">
              THE ART OF THE SAVOR
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
              THE ROYAL MEHFIL RITUAL
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-2xl mx-auto mb-10">
              In the royal courts of Punjab and Delhi, ghazals were never rushed. They were accompanied by fine crystal, glowing candlelight, and spirits matured to royal perfection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-black/40 border border-[#C6A865]/25 backdrop-blur-md">
                <span className="font-mono text-xl font-bold text-[#E7C97C] block mb-2">01</span>
                <h4 className="font-serif font-bold text-base text-white uppercase mb-1">THE GENTLE POUR</h4>
                <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
                  Pour 60ml of Patiyala Palace into an amber crystal rocks glass or tumbler. Allow it to breathe for 2 minutes as the harmonium notes begin.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-[#C6A865]/25 backdrop-blur-md">
                <span className="font-mono text-xl font-bold text-[#E7C97C] block mb-2">02</span>
                <h4 className="font-serif font-bold text-base text-white uppercase mb-1">THE FIRST COUPLET</h4>
                <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
                  Take the first gentle sip just as the *Matla* (the opening couplet) finishes. Notice how the velvety vanilla and charred oak tannins blossom.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-[#C6A865]/25 backdrop-blur-md">
                <span className="font-mono text-xl font-bold text-[#E7C97C] block mb-2">03</span>
                <h4 className="font-serif font-bold text-base text-white uppercase mb-1">THE ROYAL FINISH</h4>
                <p className="font-sans text-xs text-white/70 font-light leading-relaxed">
                  As the ghazal reaches its peak, savor the lingering warmth of the Indian malt—rich, resonant, and made for the discerning connoisseur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            5. BOTTOM NAVIGATION CTA BAR
        ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-[#C6A865]/30">
          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C6A865] hover:bg-[#E7C97C] text-black font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
          >
            ← BACK TO HOME
          </button>

          {onExploreCocktails && (
            <button
              onClick={onExploreCocktails}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              EXPLORE COCKTAILS ↗
            </button>
          )}

          {onExploreStory && (
            <button
              onClick={onExploreStory}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-[#C6A865]/50 text-[#E7C97C] font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              OUR HERITAGE STORY
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
