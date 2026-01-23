import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SystemItem = ({ title, description, image, align = "left" }: { title: string, description: string, image: string, align?: "left" | "right" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`flex flex-col ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16 md:gap-32 py-32`}>
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, rotate: align === "left" ? -5 : 5 }}
        animate={isInView ? { opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_0_60px_rgba(255,0,255,0.3)] border-2 border-white/20 bg-black/20 backdrop-blur-sm group">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
          />
        </div>
      </motion.div>

      <motion.div 
        className="flex-1 text-center md:text-left glass-card p-10 rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-4xl md:text-5xl font-light mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{title}</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-8 mx-auto md:mx-0 rounded-full" />
        <p className="text-xl text-white/90 leading-relaxed font-light drop-shadow-md">{description}</p>
      </motion.div>
    </div>
  );
};

export default function SystemShowcase() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Flower Collage Decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20 pointer-events-none mix-blend-screen animate-pulse-slow">
        <img src="/images/flower-collage-1.png" alt="Flower Decoration" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-20 pointer-events-none mix-blend-screen animate-pulse-slow delay-1000">
        <img src="/images/flower-collage-2.png" alt="Flower Decoration" className="w-full h-full object-contain" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-40 glass-panel p-16">
          <h2 className="text-sm font-bold text-accent tracking-[0.5em] uppercase mb-8 drop-shadow-md">The Complete System</h2>
          <h3 className="text-6xl md:text-7xl text-white font-light mb-12 drop-shadow-lg">Tools for <span className="text-primary font-normal">Divine Connection</span></h3>
          <p className="text-white/80 text-2xl font-light leading-relaxed">
            The Shankara Oracle is more than just cards. It is a comprehensive ecosystem of spiritual technologies designed to help you master your life.
          </p>
        </div>

        <div className="space-y-12">
          <SystemItem 
            title="The Oracle Board" 
            description="Source guidance and explore ancient wisdom with the Shankara oracle board. A sacred geometry map that guides your reading, connecting you to Vedic astrology insights."
            image="/images/oracle-board-detail.webp"
            align="left"
          />

          <SystemItem 
            title="4 Unique Oracle Decks" 
            description="Discover your Self with 300+ cards across 4 unique decks: Alchemy, Master, Release, and Sacred Action. Each deck is specifically created to help you master your life."
            image="/images/cards-spread-table.webp"
            align="right"
          />

          <SystemItem 
            title="18 Oracle Stones" 
            description="Gain insight and align with Dharma with the Shankara oracle stones. Made from polished black obsidian, each stone features a channeled symbol on one side."
            image="/images/stones-hand.webp"
            align="left"
          />

          <SystemItem 
            title="Shakti's Cube" 
            description="Discover the force, energy, and flow of an aspect of your life with this unique divination die. It summons the divine, cosmic feminine energy."
            image="/images/cube-close-up.webp"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}
