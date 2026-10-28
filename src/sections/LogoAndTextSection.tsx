import React from "react";

export const LogoAndTextSection: React.FC = () => {
  return (
    <section
      data-type="composable-element-logo-and-text"
      className="relative w-full bg-[#04153B]/50 backdrop-blur-[2px] border-b border-[#62A4C6]/15"
    >
      <div className="relative mx-auto w-full max-w-screen-2xl overflow-hidden z-20 flex flex-col-reverse justify-end lg:flex-row lg:justify-center py-10 sm:py-24">
        <div className="relative flex h-full flex-col justify-center px-6 sm:px-12 md:px-20 text-white lg:w-9/12 xl:w-8/12">
          
          {/* Centered Royal Emblem */}
          <div className="my-4 flex w-full justify-center">
            <div className="relative h-[65px] w-[200px] flex items-center justify-center">
              <img
                alt="Patiyala Palace Royal Crest"
                loading="lazy"
                src="/assets/logo/official_silver_seal.png"
                className="h-16 w-16 object-contain drop-shadow-[0_0_20px_rgba(203,213,225,0.5)]"
              />
            </div>
          </div>

          {/* Subtitle Royal Stamp */}
          <div className="text-center mb-6">
            <span className="font-sans text-[9px] sm:text-[11px] font-bold tracking-[0.35em] uppercase text-[#CBD5E1]">
              SHAKSHAM SPIRITS • THE SOVEREIGN HERITAGE
            </span>
          </div>

          {/* Manifesto Text Paragraph 1 */}
          <div
            className="font-donjulio py-3 text-center text-lg sm:text-2xl md:text-3xl lg:text-[1.75rem] font-light leading-relaxed text-white/95"
            data-type="text"
          >
            <p>
              Patiyala Palace brings the spirit of India to the world through a bold and refined interpretation of the legendary Patiyala Peg, crafted with carefully selected barley and the expertise of seasoned spirits professionals. Rooted in a tradition synonymous with royalty, generosity and celebration, it is a spirit of depth and character, created with contemporary craftsmanship for those who appreciate authenticity, heritage and distinction.
            </p>
          </div>

          {/* Manifesto Concluding Statement */}
          <div
            className="font-donjulio py-3 text-center text-xl sm:text-2xl md:text-3xl lg:text-[1.75rem] font-light leading-relaxed text-[#CBD5E1]"
            data-type="text"
          >
            <p className="italic">
              Patiyala Palace is more than a pour—it is the return of an Indian legend, reimagined for the world.
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="mt-8 mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-[#CBD5E1]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};
