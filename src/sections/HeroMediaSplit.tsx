import { motion } from "framer-motion";

interface SplitCardProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  href: string;
  image: string;
  reverse?: boolean;
}

const SplitCard = ({
  category,
  title,
  subtitle,
  description,
  ctaText,
  href,
  image,
}: SplitCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="group relative flex flex-col justify-between overflow-hidden bg-white border border-[#00248B]/10 hover:border-[#00248B]/30 transition-all duration-500 rounded-sm shadow-sm hover:shadow-xl"
  >
    {/* Image Container with Zoom Effect */}
    <div className="relative w-full h-80 sm:h-96 md:h-[420px] overflow-hidden bg-[#F0F2FC]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      
      <div className="absolute top-6 left-6 z-10">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#00248B] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase border border-[#00248B]/20">
          {category}
        </span>
      </div>
    </div>

    {/* Text Content */}
    <div className="p-8 md:p-12 space-y-5 bg-white flex flex-col flex-1 justify-between">
      <div className="space-y-3">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#CBD5E1] font-semibold block">
          {subtitle}
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#00248B] font-light uppercase tracking-tight group-hover:text-[#0F51CF] transition-colors">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#45516E] leading-relaxed font-light">
          {description}
        </p>
      </div>

      <div className="pt-4">
        <a
          href={href}
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#00248B] hover:text-[#0F51CF] group/link transition-all"
        >
          <span className="border-b-2 border-[#00248B] pb-0.5 group-hover/link:border-[#0F51CF]">
            {ctaText}
          </span>
          <span className="text-sm group-hover/link:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </div>
  </motion.div>
);

export const HeroMediaSplit = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white text-[#07173E] border-b border-[#00248B]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Editorial 50/50 Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1: Our Story */}
          <SplitCard
            category="ORIGIN & HERITAGE"
            title="Our Story"
            subtitle="THE ROYAL HOUSE OF PATIALA"
            description="Born from the grandeur of Maharaja Bhupinder Singh's sovereign courts, Patiyala Palace weaves timeless princely hospitality, royal banquets, and regal devotion into an extraordinary liquid legacy."
            ctaText="DISCOVER OUR STORY"
            href="#palace"
            image="/assets/editorial/palace_heritage_corridor.jpg"
          />

          {/* Card 2: Our Craft */}
          <SplitCard
            category="DISTILLATION & MATURATION"
            title="Our Craft"
            subtitle="MASTERY OF THE STILLS"
            description="Every drop represents the union of select Himalayan malted barley, pristine river aquifers, slow artisanal copper distillation, and double-cask maturation tailored to Northern India's monsoon seasons."
            ctaText="EXPLORE OUR CRAFT"
            href="#craft"
            image="/assets/editorial/craft_malt.jpg"
          />
        </div>

      </div>
    </section>
  );
};
