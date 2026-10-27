import { motion } from "framer-motion";

interface ServeRitual {
  id: string;
  title: string;
  ritual: string;
  temperature: string;
  glassware: string;
  description: string;
}

const RITUALS: ServeRitual[] = [
  {
    id: "neat",
    title: "NEAT",
    ritual: "The Royal Purity",
    temperature: "18°C – 20°C (Room Temp)",
    glassware: "Crystal Glencairn or Tulip Glass",
    description: "Pour 60 ml at ambient room temperature. Allow the spirit to breathe for two minutes in a tulip glass to awaken the toasted barley, delicate honey, and warm spice aromatics without dilution.",
  },
  {
    id: "rocks",
    title: "ON THE ROCKS",
    ritual: "The Slow Chill",
    temperature: "Chilled over dense ice",
    glassware: "Heavy-Base Crystal Tumbler",
    description: "Presented over a single, hand-carved clear ice sphere. The gradual, slow dilution softens the 42.8% proof, revealing subtle nuances of dried fruit, oak char, and butterscotch.",
  },
  {
    id: "royal-pour",
    title: "THE ROYAL POUR",
    ritual: "The Celebratory Custom",
    temperature: "Cool with a splash of pure spring water",
    glassware: "Regal Highball or Double Rocks",
    description: "Honouring the celebrated Patiala measure — a grand, celebratory pour served with a splash of chilled still spring water. Created for joyous gatherings and regal camaraderie.",
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-32 md:py-48 bg-[#071522] text-[#F3EEE4] overflow-hidden border-b border-[#C8A85B]/15"
    >
      {/* Ambient warm amber backlight */}
      <div className="absolute bottom-1/4 right-1/3 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(169,104,32,0.18)_0%,rgba(7,21,34,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#C8A85B]" />
            <span className="font-sans text-[11px] tracking-[0.35em] text-[#C8A85B] uppercase font-medium">
              RITUALS OF TASTE
            </span>
            <span className="w-8 h-[1px] bg-[#C8A85B]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-[#F3EEE4] leading-tight"
          >
            THE PATIYALA PALACE<br />
            <span className="italic text-[#C8A85B] font-normal">EXPERIENCE.</span>
          </motion.h2>

          <p className="font-sans text-xs sm:text-sm text-[#F3EEE4]/70 mt-4 tracking-wider font-light">
            Three ceremonial ways to savour the spirit of kings.
          </p>
        </div>

        {/* 3 Editorial Serve Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {RITUALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 md:p-10 border border-[#C8A85B]/20 bg-[#040B12]/75 backdrop-blur-md rounded-sm flex flex-col justify-between hover:border-[#C8A85B]/60 transition-all duration-500 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#C8A85B]/15">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C8A85B]">
                    RITUAL 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C8A85B]/40 group-hover:bg-[#C8A85B] transition-colors" />
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-[#F3EEE4] font-light tracking-wide mb-2">
                  {item.title}
                </h3>

                <span className="font-sans text-xs text-[#C8A85B] tracking-widest uppercase font-medium block mb-6">
                  {item.ritual}
                </span>

                <p className="font-sans text-xs md:text-sm text-[#F3EEE4]/75 leading-relaxed font-light mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#C8A85B]/15 space-y-2 font-sans text-[11px]">
                <div className="flex justify-between text-[#F3EEE4]/60">
                  <span>TEMP:</span>
                  <span className="text-[#F3EEE4]">{item.temperature}</span>
                </div>
                <div className="flex justify-between text-[#F3EEE4]/60">
                  <span>VESSEL:</span>
                  <span className="text-[#C8A85B]">{item.glassware}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsible Drinking Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 p-6 border border-[#C8A85B]/15 bg-[#071522]/40 rounded-sm text-center max-w-2xl mx-auto"
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C8A85B] block mb-1 font-semibold">
            RESPONSIBLE CONSUMPTION
          </span>
          <p className="font-sans text-xs text-[#F3EEE4]/50 tracking-wider">
            Patiyala Palace champions mindful enjoyment. Alcohol is best savoured with restraint, dignity, and care. Never drink and drive.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
