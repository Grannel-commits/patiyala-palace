import { useState } from "react";
import { motion } from "framer-motion";
import { sound } from "../utils/audio";

interface Props {
  onVerify: () => void;
}

export const AgeGate = ({ onVerify }: Props) => {
  const [selectedAge, setSelectedAge] = useState<"yes" | "no" | null>("yes");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAge) {
      setErrorMessage("Please select an option to continue.");
      return;
    }
    if (selectedAge === "yes") {
      sound.playChime(660, 0.2);
      onVerify();
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-[140] bg-[#020B1F] flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto selection:bg-[#D4AF37]/30 text-white"
    >
      {/* Textured Royal Damask & Gold Fleck Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/assets/backgrounds/age_gate_royal_textured_bg.jpg')` }}
      />
      {/* Soft Vignette and Ambient Radial Shadows to emphasize the texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03102B]/50 via-transparent to-[#020B1F]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,11,31,0.65)_100%)] pointer-events-none" />

      {/* Top Brand Header */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-display pointer-events-none font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        <span>PATIYALA PALACE</span>
        <span>WHERE ROYALTY MEETS THE BARREL</span>
      </div>

      {/* Main Centered Dialog Card */}
      <motion.div
        initial={{ y: 25, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl w-full bg-[#03102B]/85 backdrop-blur-2xl border border-[#D4AF37]/50 shadow-[0_30px_90px_rgba(0,0,0,0.9)] rounded-3xl p-8 sm:p-12 text-center my-auto text-white"
      >
        {/* Animated Gold Seal */}
        <div className="relative mx-auto mb-6 w-20 h-20 md:w-24 md:h-24">
          <div className="absolute -inset-2 rounded-full bg-[#D4AF37]/25 blur-xl" />
          <div className="relative w-full h-full rounded-full border border-[#D4AF37] p-2 flex items-center justify-center bg-[#04153B] shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
            <img 
              src="/assets/logo/pp_logo_gold_clean.png" 
              alt="Patiyala Palace Official Gold Seal" 
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.5)]"
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-6">
          <span className="font-display text-[11px] text-[#D4AF37] tracking-[0.35em] uppercase font-extrabold block mb-1">
            ROYAL HOUSE OF
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-white tracking-[0.12em] font-black uppercase">
            PATIYALA PALACE
          </h1>
        </div>

        {/* Legal Drinking Age Heading */}
        <h2 className="font-display text-lg sm:text-xl text-white font-bold leading-snug tracking-wide uppercase mb-6 max-w-md mx-auto">
          YOU MUST BE OF LEGAL DRINKING AGE (25+) TO ENTER.
        </h2>

        {/* Form with Radio Selectors */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col items-center">
          
          <div className="w-full flex flex-col gap-3 mb-6">
            <label 
              onClick={() => { setSelectedAge("yes"); setErrorMessage(""); }}
              className={`flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedAge === "yes" 
                  ? "border-[#D4AF37] bg-[#D4AF37]/15 shadow-md text-white" 
                  : "border-white/15 hover:border-[#D4AF37]/40 text-white/70"
              }`}
            >
              <span className="font-sans text-xs sm:text-sm tracking-wide font-medium">I am of legal drinking age (25+)</span>
              <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                selectedAge === "yes" ? "border-[#D4AF37] bg-[#D4AF37]" : "border-white/30"
              }`}>
                {selectedAge === "yes" && <span className="w-1.5 h-1.5 rounded-full bg-[#04153B]" />}
              </span>
            </label>

            <label 
              onClick={() => { setSelectedAge("no"); setErrorMessage(""); }}
              className={`flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedAge === "no" 
                  ? "border-[#D4AF37] bg-[#D4AF37]/15 shadow-md text-white" 
                  : "border-white/15 hover:border-[#D4AF37]/40 text-white/70"
              }`}
            >
              <span className="font-sans text-xs sm:text-sm tracking-wide font-medium">I am not of legal age</span>
              <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                selectedAge === "no" ? "border-[#D4AF37] bg-[#D4AF37]" : "border-white/30"
              }`}>
                {selectedAge === "no" && <span className="w-1.5 h-1.5 rounded-full bg-[#04153B]" />}
              </span>
            </label>
          </div>

          {errorMessage && (
            <p className="font-sans text-xs text-red-400 mb-4 tracking-wide">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-8 gold-cta-btn font-display text-xs tracking-[0.25em] uppercase font-extrabold transition-all duration-300 rounded-full shadow-2xl mb-6 cursor-pointer"
          >
            ENTER THE SITE
          </button>

          {/* Terms & Compliance */}
          <div className="space-y-1.5 text-center">
            <p className="font-sans text-[11px] text-white/60 leading-relaxed">
              By accessing this website you agree that you are of legal drinking age in your jurisdiction and accept our terms and conditions.
            </p>
            <p className="font-sans text-[10px] text-[#F3E5AB] font-bold tracking-wide">
              STRICTLY 25+ • SAKSHAM SPIRITS PVT. LTD. • DRINK RESPONSIBLY
            </p>
          </div>

        </form>

      </motion.div>

      {/* Bottom Footer Note */}
      <div className="absolute bottom-6 text-center">
        <p className="font-sans text-[9px] text-white/40 tracking-[0.25em] uppercase">
          SAKSHAM SPIRITS PVT. LTD. • INDIAN CRAFTED MALT WHISKY
        </p>
      </div>

    </motion.div>
  );
};
