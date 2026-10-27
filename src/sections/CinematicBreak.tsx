import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CinematicBreak = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Video subtly scales from 105% down to 100% as requested
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.05, 1.0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.8]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[85vh] md:h-screen bg-[#071522] overflow-hidden flex items-center justify-center text-[#F3EEE4] border-b border-[#C8A85B]/15"
    >
      {/* Scroll-controlled Video */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/video/hero_poster.png"
          className="w-full h-full object-cover select-none pointer-events-none filter contrast-105 brightness-95"
        >
          <source src="/assets/video/hero_video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[#071522]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071522] via-transparent to-[#071522] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(7,21,34,0.85)_100%)] pointer-events-none" />

      {/* Floating Centered Typography */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full border border-[#C8A85B]/40 p-2 mb-6 flex items-center justify-center bg-[#071522]/60 backdrop-blur-md">
          <img
            src="/assets/logo/patiala_logo_transparent.png"
            alt="Patiyala Palace Royal Emblem"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(200,168,91,0.35)]"
          />
        </div>

        <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-[#C8A85B] mb-3 font-light">
          AN IMMORTAL IMPRESSION
        </span>

        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.1em] font-light text-[#F3EEE4] leading-[0.95] drop-shadow-xl">
          THE SPIRIT<br />
          <span className="italic font-normal text-[#C8A85B]">OF A PALACE.</span>
        </h2>

        <p className="font-sans text-xs md:text-sm text-[#F3EEE4]/70 max-w-md mt-6 leading-relaxed font-light">
          Distilled with devotion, aged in oak, and poured with sovereign pride.
        </p>
      </motion.div>
    </section>
  );
};
