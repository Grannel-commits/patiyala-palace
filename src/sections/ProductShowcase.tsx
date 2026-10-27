import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProductShowcase = () => {
  const initialSide = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("side") === "back" ? "back" : "front";
  const [viewSide, setViewSide] = useState<"front" | "back">(initialSide);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse-following subtle 3D parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    // Opposite subtle movement
    setMouseOffset({ x: -x * 12, y: -y * 8 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="spirit"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-28 md:py-36 bg-white text-[#07173E] overflow-hidden border-b border-[#00248B]/10"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(240,242,252,0.9)_0%,rgba(240,242,252,0.3)_50%,rgba(255,255,255,0)_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[1.5px] bg-[#00248B]" />
            <span className="font-sans text-[11px] tracking-[0.35em] text-[#00248B] uppercase font-semibold">
              ICONS • SIGNATURE BOTTLE
            </span>
            <span className="w-8 h-[1.5px] bg-[#00248B]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-[#07173E]"
          >
            THE CRAFTED MALT
          </motion.h2>
          
          <p className="font-sans text-xs sm:text-sm text-[#00248B] tracking-[0.25em] uppercase font-medium mt-3">
            EXPLORE THE BOTTLE IN 360° PERSPECTIVE
          </p>
        </div>

        {/* 3-Column Presentation: Left Details, Center Bottle Showcase, Right Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Tasting & Label Notes */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-6 border border-[#00248B]/15 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(7,23,62,0.04)]"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#00248B] font-semibold block mb-2">
                ORIGIN & BLEND
              </span>
              <h4 className="font-serif text-2xl text-[#07173E] font-light mb-2">
                Dual Heritage
              </h4>
              <p className="font-sans text-xs text-[#45516E] leading-relaxed font-light">
                Crafted from premium Indian matured malts and the finest Scotch whiskies. Masterfully blended into one extraordinary whisky of bold character and unique depth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="p-6 border border-[#00248B]/15 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(7,23,62,0.04)]"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#00248B] font-semibold block mb-2">
                THE EMBOSSED SEAL
              </span>
              <h4 className="font-serif text-2xl text-[#07173E] font-light mb-2">
                Royal Seal of Royalty
              </h4>
              <p className="font-sans text-xs text-[#45516E] leading-relaxed font-light">
                Bearing the official motto: <span className="italic text-[#00248B] font-medium">"Where Royalty Meets The Barrel"</span>, with the regal monogram medallion and royal palace architecture.
              </p>
            </motion.div>
          </div>

          {/* Center Column: Massive Interactive Bottle with 3D Flip */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center relative">
            
            {/* Front / Back Toggle Buttons */}
            <div className="flex items-center gap-2 p-1.5 border border-[#00248B]/20 rounded-full bg-white/90 backdrop-blur-md mb-8 z-30 shadow-md">
              <button
                onClick={() => setViewSide("front")}
                data-cursor="VIEW"
                className={`px-6 py-2 rounded-full font-sans text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 ${
                  viewSide === "front"
                    ? "bg-[#00248B] text-white shadow-md"
                    : "text-[#00248B] hover:bg-[#00248B]/5"
                }`}
              >
                FRONT VIEW
              </button>
              <button
                onClick={() => setViewSide("back")}
                data-cursor="VIEW"
                className={`px-6 py-2 rounded-full font-sans text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 ${
                  viewSide === "back"
                    ? "bg-[#00248B] text-white shadow-md"
                    : "text-[#00248B] hover:bg-[#00248B]/5"
                }`}
              >
                BACK LABEL
              </button>
            </div>

            {/* Bottle Card with 3D Perspective Flip and Mouse Parallax */}
            <motion.div
              style={{
                x: mouseOffset.x,
                y: mouseOffset.y,
                perspective: 1200,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={viewSide}
                  initial={{ rotateY: viewSide === "front" ? -35 : 35, opacity: 0, scale: 0.92 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: viewSide === "front" ? 35 : -35, opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full flex flex-col items-center justify-center"
                >
                  {/* Luxury Ambient Pedestal Aura */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#F0F2FC] via-white to-white rounded-3xl border border-[#00248B]/15 p-4 shadow-[0_25px_70px_rgba(7,23,62,0.08)] overflow-hidden">
                    <div className="absolute inset-2 border border-[#00248B]/10 rounded-2xl pointer-events-none" />
                    
                    {/* Actual Uploaded Bottle Image */}
                    <img
                      src={viewSide === "front" ? "/assets/product/bottle_front_raw.jpg" : "/assets/product/bottle_back_raw.jpg"}
                      alt={viewSide === "front" ? "Patiyala Palace Bottle Front" : "Patiyala Palace Bottle Back Label"}
                      className="w-full h-full object-contain filter contrast-[1.02] drop-shadow-[0_20px_35px_rgba(7,23,62,0.18)]"
                    />

                    {/* Subtle Side Badge */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-white/95 border border-[#00248B]/20 rounded-full text-center shadow-sm backdrop-blur-md">
                      <span className="font-sans text-[9px] text-[#00248B] tracking-[0.25em] uppercase font-semibold">
                        {viewSide === "front" ? "FRONT VIEW • SIGNATURE DECANTER" : "BACK VIEW • OFFICIAL LABEL"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floor Shadow / Subtle Mirror Reflection */}
              <div className="absolute -bottom-6 w-3/4 h-8 bg-[#00248B]/10 blur-xl rounded-full pointer-events-none" />
            </motion.div>

          </div>

          {/* Right Column: Verified Bottle Specifications */}
          <div className="lg:col-span-3 order-3 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-6 border border-[#00248B]/15 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(7,23,62,0.04)]"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#00248B] font-semibold block mb-2">
                SPECIFICATIONS
              </span>
              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#00248B]/10">
                  <span className="text-[#45516E]">STRENGTH</span>
                  <span className="text-[#07173E] font-semibold">42.8% v/v (75° PROOF)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#00248B]/10">
                  <span className="text-[#45516E]">VOLUME</span>
                  <span className="text-[#07173E] font-semibold">750 ML</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#00248B]/10">
                  <span className="text-[#45516E]">ORIGIN</span>
                  <span className="text-[#00248B] font-bold">PRODUCT OF INDIA</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#00248B]/10">
                  <span className="text-[#45516E]">DISTRIBUTION</span>
                  <span className="text-[#07173E] font-semibold">FOR SALE IN HARYANA ONLY</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#45516E]">STANDARD DRINKS</span>
                  <span className="text-[#07173E] font-semibold">APPROX. 25.3</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="p-6 border border-[#00248B]/15 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(7,23,62,0.04)]"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#00248B] font-semibold block mb-2">
                BOTTLING & SOURCING
              </span>
              <p className="font-sans text-[11px] text-[#45516E] leading-relaxed font-light mb-3">
                <strong className="text-[#07173E] font-medium">Blended & Bottled:</strong> Ghaziabad Organics Limited, Modinagar, UP.<br />
                <strong className="text-[#07173E] font-medium">Marketed by:</strong> Saksham Spirits Pvt. Ltd., Gurgaon, Haryana.<br />
                <strong className="text-[#07173E] font-medium">Distributed by:</strong> M/S. HS Oberoi Spirits, Gurugram.
              </p>
              <span className="font-sans text-[9px] text-[#00248B] font-semibold tracking-wider uppercase block border-t border-[#00248B]/10 pt-2">
                SCOTCH MALT CONCENTRATES & GRAIN NEUTRAL SPIRITS
              </span>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
