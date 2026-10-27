import React from "react";

export const SubmergedBottleSection: React.FC = () => {
  return (
    <section
      id="submerged-bottle"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black select-none border-x-[3px] sm:border-x-[4px] border-b-[3px] sm:border-b-[4px] border-[#FF1717]"
    >
      {/* Ambient Blurred Background to seamlessly extend the moody slate palette */}
      <img
        src="/assets/brand/submerged_bottle.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center filter blur-3xl opacity-30 scale-110 pointer-events-none"
      />

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />

      {/* Main Centered Sharp Showcase Image */}
      <div className="relative z-10 w-full h-full max-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12">
        <div className="relative max-h-[85vh] sm:max-h-[88vh] flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.95)] border border-white/10">
          <img
            src="/assets/brand/submerged_bottle.png"
            alt="Patiyala Palace Liquid Essence"
            className="w-auto h-auto max-h-[85vh] sm:max-h-[88vh] max-w-full object-contain select-none filter contrast-[1.04]"
          />
        </div>
      </div>
    </section>
  );
};
