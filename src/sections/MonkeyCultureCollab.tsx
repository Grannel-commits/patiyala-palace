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
        className="relative w-full h-[48vh] sm:h-[70vh] md:h-[80vh] min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black group shadow-2xl"
      >
        <img
          src="/assets/editorial/patiyala_sessions_live.jpg"
          alt="Patiyala Palace Sessions - Modern Indian Artistry and Royal Culture"
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Top-Left Card */}
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 z-10 max-w-[calc(100%-2rem)] sm:max-w-md">
          <div 
            onClick={onExploreSessions}
            className="p-3.5 sm:p-6 rounded-xl sm:rounded-3xl bg-[#061b4c]/95 backdrop-blur-md text-white shadow-2xl border border-[#CBD5E1]/40 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3 mb-1">
              <h3 className="font-serif font-normal text-lg sm:text-2xl text-white tracking-wide">
                Palace Sessions
              </h3>
              <span className="text-base sm:text-lg text-[#CBD5E1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </div>
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#CBD5E1]/80 uppercase">
              Acoustic Ghazals & Indian Malt
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
