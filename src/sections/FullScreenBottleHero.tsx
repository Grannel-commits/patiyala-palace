interface Props {
  onExploreDecanter?: () => void;
}

export const FullScreenBottleHero = (_props: Props) => {
  return (
    <section
      id="cinematic-bottle"
      className="relative w-full overflow-hidden bg-[#020614] select-none"
      style={{ minHeight: "60vw" }}
    >
      {/* 1. Ambient Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/brand/patiala_palace_bottle_hero_full.jpg"
          alt=""
          className="w-full h-full object-cover blur-3xl scale-125 opacity-35 filter"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* 2. Main Full-Screen Photo — natural aspect ratio */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <img
          src="/assets/brand/patiala_palace_bottle_hero_full.jpg"
          alt="Patiyala Palace Signature Malt Whisky with Flame-Kissed Crystal Tumblers"
          className="w-full h-auto max-h-[90vh] object-contain object-center block mx-auto"
        />
      </div>
    </section>
  );
};
