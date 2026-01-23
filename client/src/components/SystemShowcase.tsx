import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SystemItem = ({ title, description, image, align = "left" }: { title: string, description: string, image: string, align?: "left" | "right" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`flex flex-col ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24 py-24`}>
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-white/10 group">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      </motion.div>

      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h3 className="text-3xl md:text-4xl font-light mb-6 text-white">{title}</h3>
        <div className="w-16 h-[1px] bg-primary mb-8 mx-auto md:mx-0" />
        <p className="text-lg text-gray-300 leading-relaxed font-light">{description}</p>
      </motion.div>
    </div>
  );
};

export default function SystemShowcase() {
  return (
    <section className="bg-background py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h2 className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-4">The Complete System</h2>
          <h3 className="text-4xl md:text-5xl text-white font-light mb-8">Tools for Divine Connection</h3>
          <p className="text-gray-400 text-lg font-light">
            The Shankara Oracle is more than just cards. It is a comprehensive ecosystem of spiritual technologies designed to help you master your life.
          </p>
        </div>

        <div className="space-y-12">
          <SystemItem 
            title="The Oracle Board" 
            description="Source guidance and explore ancient wisdom with the Shankara oracle board. A sacred geometry map that guides your reading, connecting you to Vedic astrology insights, angels, deities, and natural elements."
            image="/images/oracle-board-detail.webp"
            align="left"
          />

          <SystemItem 
            title="4 Unique Oracle Decks" 
            description="Discover your Self with 300+ cards across 4 unique decks: Alchemy, Master, Release, and Sacred Action. Each deck is specifically created to help you master your life, release limiting beliefs, and embrace your true nature."
            image="/images/cards-spread-table.webp"
            align="right"
          />

          <SystemItem 
            title="18 Oracle Stones" 
            description="Gain insight and align with Dharma with the Shankara oracle stones. Made from polished black obsidian, each stone features a channeled symbol on one side and arrows on the others to point you toward specific guidance."
            image="/images/stones-hand.webp"
            align="left"
          />

          <SystemItem 
            title="Shakti's Cube" 
            description="Discover the force, energy, and flow of an aspect of your life with this unique divination die. It summons the divine, cosmic feminine energy to reveal guidance around probability and flow."
            image="/images/cube-close-up.webp"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}
