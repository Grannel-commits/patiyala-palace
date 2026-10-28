import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bottle3D } from '../components/Bottle3D';

export const BottleShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewMode, setViewMode] = useState<'scroll' | 'front' | 'back' | 'angle' | 'spin'>(() => {
    if (typeof window === 'undefined') return 'scroll';
    const bView = new URLSearchParams(window.location.search).get('bottle_view');
    if (bView === 'back' || bView === 'front' || bView === 'spin' || bView === 'angle') return bView;
    return 'scroll';
  });
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;
      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScrollDistance));
      setScrollProgress(progress);

      // If user starts scrolling again and was in a preset view, return to scroll mode
      if (viewMode !== 'scroll' && !isInteracting) {
        // keep preset until scroll delta occurs
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode, isInteracting]);

  return (
    <section
      id="bottle-showcase"
      ref={sectionRef}
      className="relative w-full h-[180vh] sm:h-[200vh] bg-gradient-to-b from-black via-[#04153B]/90 to-[#04153B] text-white select-none"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center z-10">
        
        {/* Top Header Row */}
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 pt-20 sm:pt-24 flex flex-col items-center text-center z-20 pointer-events-none">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase text-[#CBD5E1] drop-shadow-md mb-2">
            THE ROYAL FLASK • 750 ML
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.15em] font-normal text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            PATIYALA PALACE
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/70 tracking-widest uppercase mt-1">
            WHERE ROYALTY MEETS BARREL
          </p>
        </div>

        {/* Center: 3D Canvas */}
        <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
          <Canvas
            camera={{ position: [0, 0, isMobile ? 8.8 : 7.6], fov: 38 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
          >
            <Suspense fallback={null}>
              <Bottle3D
                scrollProgress={scrollProgress}
                autoRotate={viewMode === 'spin'}
                targetView={viewMode === 'front' ? 'front' : viewMode === 'back' ? 'back' : viewMode === 'angle' ? 'angle' : null}
                enableOrbit={true}
                scale={isMobile ? 0.65 : 0.88}
                positionY={-0.05}
                onUserInteracting={(active) => {
                  setIsInteracting(active);
                  if (active && viewMode !== 'scroll') {
                    setViewMode('scroll');
                  }
                }}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Milestone Floating Narrative Badges (Fade in based on scroll progress) */}
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 pointer-events-none z-20 flex justify-between items-center mb-28">
          
          {/* Left Milestone: Crystal Silhouette */}
          <div
            className={`hidden md:flex flex-col max-w-xs transition-all duration-700 ${
              scrollProgress < 0.4 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#CBD5E1] mb-1">
              01 • DECANTER SILHOUETTE
            </span>
            <p className="font-serif text-sm text-white/80 leading-relaxed drop-shadow-md">
              Weighted crystal glass base with swept shoulders and precision taper, inspired by royal Punjab darbars.
            </p>
          </div>

          {/* Right Milestone: Royal Seal & Back Specs */}
          <div
            className={`hidden md:flex flex-col max-w-xs text-right transition-all duration-700 ${
              scrollProgress >= 0.4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <span className="font-sans text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#CBD5E1] mb-1">
              02 • SOVEREIGN CRAFT
            </span>
            <p className="font-serif text-sm text-white/80 leading-relaxed drop-shadow-md">
              Blended & bottled at Ghaziabad Organics. 42.8% ABV Indian Crafted Malt Whisky of depth and distinction.
            </p>
          </div>

        </div>

        {/* Bottom Floating Control Bar */}
        <div className="w-full max-w-screen-2xl mx-auto px-6 pb-6 sm:pb-8 flex flex-col items-center gap-3 z-20 pointer-events-auto">
          
          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-2 sm:gap-3 bg-[#04153B]/80 backdrop-blur-md px-3 sm:px-5 py-2 rounded-full border border-[#62A4C6]/30 shadow-2xl">
            <button
              onClick={() => setViewMode("scroll")}
              className={`px-3 py-1 text-[10px] sm:text-xs font-sans uppercase tracking-widest rounded-full transition-all ${
                viewMode === "scroll"
                  ? "bg-[#CBD5E1] text-black font-bold shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Scroll Mode
            </button>
            <button
              onClick={() => setViewMode("front")}
              className={`px-3 py-1 text-[10px] sm:text-xs font-sans uppercase tracking-widest rounded-full transition-all ${
                viewMode === "front"
                  ? "bg-[#CBD5E1] text-black font-bold shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Front Label
            </button>
            <button
              onClick={() => setViewMode("back")}
              className={`px-3 py-1 text-[10px] sm:text-xs font-sans uppercase tracking-widest rounded-full transition-all ${
                viewMode === "back"
                  ? "bg-[#CBD5E1] text-black font-bold shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Back Label
            </button>
            <button
              onClick={() => setViewMode(viewMode === "spin" ? "scroll" : "spin")}
              className={`px-3 py-1 text-[10px] sm:text-xs font-sans uppercase tracking-widest rounded-full transition-all ${
                viewMode === "spin"
                  ? "bg-[#CBD5E1] text-black font-bold shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              360° Spin
            </button>
          </div>

          {/* Interactive drag instruction */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-white/50 tracking-wider uppercase">
            <svg className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Drag bottle to rotate in 3D • Scroll down to explore</span>
          </div>

        </div>

      </div>
    </section>
  );
};
