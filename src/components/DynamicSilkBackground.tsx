import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const DynamicSilkBackground: React.FC = () => {
  // Track scroll position across the full document
  const { scrollYProgress } = useScroll();

  // Smooth out scroll progress with high-performance spring physics
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.0005,
  });

  // Vertical Parallax Translation: As user scrolls down, the background glides subtly
  const translateY = useTransform(smoothScroll, [0, 1], ["0%", "-16%"]);

  // Dynamic Scale: Breathes organically as you scroll through the experience
  const scale = useTransform(smoothScroll, [0, 0.5, 1], [1.06, 1.14, 1.08]);

  // Subtle rotation tilt on deep scroll for organic fluid flow
  const rotate = useTransform(smoothScroll, [0, 0.5, 1], [0, -0.75, 0.5]);

  // Subtle mouse interactive offset for layered depth
  const mouseX = useSpring(0, { stiffness: 45, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 45, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from center (-1 to 1)
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      // Subtle shift: max 16px in either direction
      mouseX.set(normX * 16);
      mouseY.set(normY * 12);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#020818]"
    >
      {/* Dynamic Animated Motion Container */}
      <motion.div
        style={{
          y: translateY,
          scale,
          rotate,
          x: mouseX,
        }}
        className="relative w-full h-[126vh] -top-[13vh] will-change-transform"
      >
        {/* Responsive High-Resolution Liquid Silk Photography */}
        <picture className="w-full h-full block">
          {/* Mobile optimized high-res vertical crop (2304 x 4096) */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/backgrounds/royal_silk_bg_portrait_hq.jpg"
          />
          {/* Desktop & 4K ultra-wide seamless landscape (3840 x 3000) */}
          <img
            src="/assets/backgrounds/royal_silk_bg_wide_hq.jpg"
            alt="Patiyala Palace Royal Silk Texture"
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.08]"
          />
        </picture>

        {/* Ambient Liquid Shimmer Breathing Overlay */}
        <motion.div
          animate={{
            opacity: [0.18, 0.32, 0.18],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-tr from-[#020818]/60 via-[#1e3a8a]/20 to-transparent mix-blend-screen pointer-events-none"
        />
      </motion.div>

      {/* Floating Caustic Light Orb */}
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-5%", "6%", "-5%"],
          opacity: [0.25, 0.42, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[#1e40af]/20 blur-[130px] pointer-events-none"
      />

      {/* Elegant Radial Dark Vignette to keep text & cards crystal sharp */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,8,24,0.65)_80%,rgba(2,8,24,0.92)_100%)] pointer-events-none" />

      {/* Top & Bottom Atmospheric Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020818]/70 via-transparent to-[#020818]/85 pointer-events-none" />
    </div>
  );
};
