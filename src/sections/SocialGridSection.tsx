import React from "react";
import { motion } from "framer-motion";

export const SocialGridSection: React.FC = () => {
  const socialPosts = [
    {
      img: "/assets/cocktails/social_1.jpg",
      handle: "@patiyalapalace",
      tag: "THE ORIGINAL SERVE",
    },
    {
      img: "/assets/cocktails/social_2.jpg",
      handle: "@patiyalapalace",
      tag: "THE GINGER PEG",
    },
    {
      img: "/assets/cocktails/social_3.jpg",
      handle: "@patiyalapalace",
      tag: "HIGHBALL SESSIONS",
    },
    {
      img: "/assets/cocktails/social_4.jpg",
      handle: "@patiyalapalace",
      tag: "FIRST-FILL OAK",
    },
  ];

  return (
    <section id="community" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 select-none z-20 bg-[#111111]">
      <div className="relative mx-auto w-full max-w-screen-xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#E6501E] block mb-1">
              COMMUNITY • INSTAGRAM
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              #MADEFOR<span className="text-[#E6501E]">MIXING</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/patiyalapalace/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#E6501E] hover:text-[#FF6B00] transition-colors flex items-center gap-2"
          >
            <span>FOLLOW @PATIYALAPALACE</span>
            <span>➔</span>
          </a>
        </div>

        {/* 4 Clean Photo Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {socialPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/patiyalapalace/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group relative aspect-square rounded-2xl overflow-hidden block bg-[#1A1A1A] border-2 border-white/10 hover:border-[#E6501E]/70 transition-all duration-300 shadow-xl"
            >
              <img
                src={post.img}
                alt={post.tag}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#E6501E]">
                  {post.tag}
                </span>
                <span className="font-sans text-xs font-semibold truncate mt-0.5 text-white/90">
                  {post.handle}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

