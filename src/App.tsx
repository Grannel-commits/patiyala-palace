import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";

// Core Components
import { CustomCursor } from "./components/CustomCursor";
import { AgeGate } from "./components/AgeGate";
import { MenuOverlay } from "./components/MenuOverlay";
import { MonkeyHeader } from "./components/MonkeyHeader";

// Monkey Shoulder Exact Video Sections
import { MonkeyHeroSection } from "./sections/MonkeyHeroSection";
import { MonkeyEditorialSection } from "./sections/MonkeyEditorialSection";
import { MonkeyCraftSection } from "./sections/MonkeyCraftSection";
import { MonkeyCocktailsCarousel } from "./sections/MonkeyCocktailsCarousel";
import { MonkeyCultureCollab } from "./sections/MonkeyCultureCollab";
import { MonkeyMarquee } from "./sections/MonkeyMarquee";
import { MonkeyNewsGrid } from "./sections/MonkeyNewsGrid";
import { MonkeyClubSection } from "./sections/MonkeyClubSection";
import { MonkeyFooterSection } from "./sections/MonkeyFooterSection";

// Dedicated Sub-Pages
import { OurCocktailsPage } from "./sections/OurCocktailsPage";
import { OurStoryPage } from "./sections/OurStoryPage";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "cocktails" | "story">(() => {
    if (typeof window === "undefined") return "home";
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash;
    if (
      params.get("page") === "cocktails" ||
      hash === "#cocktails" ||
      hash === "#our-cocktails"
    ) {
      return "cocktails";
    }
    if (
      params.get("page") === "story" ||
      hash === "#story" ||
      hash === "#our-story" ||
      hash === "#story-page"
    ) {
      return "story";
    }
    return "home";
  });

  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("patiala_age_verified") === "true" ||
      new URLSearchParams(window.location.search).get("verified") === "true"
    );
  });

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;
      if (params.get("page") === "cocktails" || hash === "#cocktails") {
        setCurrentPage("cocktails");
      } else if (
        params.get("page") === "story" ||
        hash === "#story" ||
        hash === "#our-story"
      ) {
        setCurrentPage("story");
      } else {
        setCurrentPage("home");
      }
    };
    window.addEventListener("popstate", handlePopState);

    // Smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    document.body.style.backgroundColor = "#030D26";
    document.body.style.color = "#ffffff";

    return () => {
      window.removeEventListener("popstate", handlePopState);
      lenis.destroy();
    };
  }, []);

  const handleAgeVerification = () => {
    localStorage.setItem("patiala_age_verified", "true");
    setIsAgeVerified(true);
  };

  const handleResetAgeGate = () => {
    localStorage.removeItem("patiala_age_verified");
    setIsAgeVerified(false);
  };

  const navigateTo = (page: "home" | "cocktails" | "story") => {
    setCurrentPage(page);
    if (page === "home") {
      window.history.pushState({}, "", "/");
    } else {
      window.history.pushState({}, "", `?page=${page}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020818] via-[#041235] to-[#020818] text-white overflow-x-hidden selection:bg-[#C6A865] selection:text-black font-sans border-[4px] sm:border-[6px] md:border-[8px] border-[#C6A865]/30">
      
      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* 25+ Age Verification Gate */}
      <AnimatePresence>
        {!isAgeVerified && <AgeGate onVerify={handleAgeVerification} />}
      </AnimatePresence>

      {/* Floating Monkey Shoulder Top Controls */}
      <MonkeyHeader
        onOpenMenu={() => setIsMenuOpen(true)}
        onNavigateHome={() => navigateTo("home")}
      />

      {/* Slide-out Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={(sectionId) => {
          if (sectionId === "story") navigateTo("story");
          else if (sectionId === "cocktails") navigateTo("cocktails");
          else navigateTo("home");
        }}
      />

      {/* Main Pages Flow */}
      {currentPage === "cocktails" ? (
        <main className="relative z-10 w-full pt-16">
          <OurCocktailsPage
            onBackToHome={() => navigateTo("home")}
            onNavigateToDecanter={() => navigateTo("home")}
          />
        </main>
      ) : currentPage === "story" ? (
        <main className="relative z-10 w-full">
          <OurStoryPage
            onBackToHome={() => navigateTo("home")}
            onExploreCocktails={() => navigateTo("cocktails")}
          />
        </main>
      ) : (
        <main className="relative z-10 w-full flex flex-col">
          
          {/* 1. HERO SPLIT: THREE SINGLE MALTS. ONE BOLD BLEND. */}
          <MonkeyHeroSection />

          {/* 2. EDITORIAL SPLIT: A NEW ERA OF INDIAN MALT. SMOOTH. RICH. VIBRANT. */}
          <MonkeyEditorialSection />

          {/* 3. BORN IN SPEYSIDE / OUR CRAFT */}
          <MonkeyCraftSection onExploreCraft={() => navigateTo("story")} />

          {/* 4. FIND YOUR NEXT FAVOURITE COCKTAIL (HORIZONTAL CAROUSEL) */}
          <MonkeyCocktailsCarousel onSeeAllRecipes={() => navigateTo("cocktails")} />

          {/* 5. COLLABORATION & CULTURE: FRED AGAIN.. + STUDIO + SELECTS */}
          <MonkeyCultureCollab />

          {/* 6. CONTINUOUS MARQUEE TICKER: THREE MONKEYS. THREE MALTS. */}
          <MonkeyMarquee />

          {/* 7. WHAT WE'RE TALKING ABOUT (NEWS & CULTURE GRID) */}
          <MonkeyNewsGrid />

          {/* 8. JOIN CLUB MONKEY (FRIENDS ON RED LEATHER BOOTH) */}
          <MonkeyClubSection />

          {/* 9. FOOTER WITH EMBOSSED WATERMARK & GLOWING NEON MONKEYS */}
          <MonkeyFooterSection
            onOpenAgeGate={handleResetAgeGate}
            onNavigateHome={() => navigateTo("home")}
          />

        </main>
      )}

    </div>
  );
}

export default App;
