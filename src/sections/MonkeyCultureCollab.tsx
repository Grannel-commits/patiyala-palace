import React from "react";
import { motion } from "framer-motion";

interface Props {
  onExploreSessions?: () => void;
}

export const MonkeyCultureCollab: React.FC<Props> = ({ onExploreSessions }) => {
  return (
    <section className="relative w-full p-2 sm:p-3 md:p-4 my-2 sm:my-4 flex flex-col gap-2 sm:gap-3 md:gap-4 select-none">
      
      {/* Top Large Feature: Fred Again Collab */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden bg-black group shadow-2xl"
      >
        <img
          src="/assets/editorial/patiyala_sessions_live.jpg"
          alt="Patiyala Palace Sessions - Modern Indian Artistry and Royal Culture"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Top-Left Card */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10 max-w-md">
          <div 
            onClick={onExploreSessions}
            className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#061b4c]/95 backdrop-blur-md text-white shadow-2xl border border-[#CBD5E1]/40 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-4 mb-1.5">
              <h3 className="font-serif font-normal text-xl sm:text-2xl text-white tracking-wide">
                Palace Sessions
              </h3>
              <span className="text-lg text-[#CBD5E1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#CBD5E1]/80 uppercase">
              Acoustic Ghazals & Indian Malt
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Split Cards: Studio Patiyala Palace & Selects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-[55vh] sm:h-[65vh]">
        
        {/* Card 1: Studio Patiyala (Club/Music) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black group shadow-2xl"
        >
          <img
            src="/assets/editorial/studio_vinyl_culture.jpg"
            alt="Studio Patiyala - Vinyl, Sound and Royal Culture"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Floating Card */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#041235]/95 backdrop-blur-md border border-[#CBD5E1]/40 text-white shadow-2xl flex items-center justify-between group-hover:-translate-y-1 transition-transform cursor-pointer">
              <div>
                <h4 className="font-serif font-normal text-lg sm:text-xl text-white tracking-wide">
                  Studio Patiyala
                </h4>
                <p className="font-mono text-[10px] text-[#CBD5E1]/80 uppercase tracking-[0.2em] mt-1">
                  Vinyl, Sound & Spirit
                </p>
              </div>
              <span className="text-lg text-[#CBD5E1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Palace Selects (Bartender) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black group shadow-2xl"
        >
          <img
            src="/assets/editorial/selects_luxury_bartender.jpg"
            alt="Palace Selects - Artisanal Speakeasy Bartenders"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Floating Card */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#041235]/95 backdrop-blur-md border border-[#CBD5E1]/40 text-white shadow-2xl flex items-center justify-between group-hover:-translate-y-1 transition-transform cursor-pointer">
              <div>
                <h4 className="font-serif font-normal text-lg sm:text-xl text-white tracking-wide">
                  Palace Selects
                </h4>
                <p className="font-mono text-[10px] text-[#CBD5E1]/80 uppercase tracking-[0.2em] mt-1">
                  Partner Bars & Speakeasies
                </p>
              </div>
              <span className="text-lg text-[#CBD5E1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
};
