import { motion } from "framer-motion";

export default function SystemShowcase() {
  const features = [
    {
      title: "18 Oracle Stones",
      description: "Gain insight and align with Dharma with the Shankara oracle stones. Made from polished black obsidian, each stone features a channeled symbol on one side.",
      image: "/images/stones-enhanced.png",
      color: "from-purple-500 to-pink-500",
      glow: "shadow-[0_0_60px_rgba(236,72,153,0.3)]",
      scale: 1.1
    },
    {
      title: "The Oracle Board",
      description: "Source guidance and explore ancient wisdom with the Shankara oracle board. A sacred geometry map that guides your reading, connecting you to Vedic astrology insights.",
      image: "/images/oracle-board.png",
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-[0_0_60px_rgba(6,182,212,0.3)]",
      scale: 1.5 // Increased scale significantly as requested
    },
    {
      title: "Shakti's Cube",
      description: "Discover the force, energy, and flow of an aspect of your life with this unique divination die. It summons the divine, cosmic feminine energy.",
      image: "/images/shakti-cube-full.png", 
      color: "from-amber-500 to-orange-500",
      glow: "shadow-[0_0_60px_rgba(245,158,11,0.3)]",
      scale: 0.9 
    },
    {
      title: "The 4 Oracle Decks", // Renamed to reflect all 4 decks
      description: "Tap into the highest frequencies of consciousness. These cards represent the ultimate guides and forces shaping your spiritual journey.",
      image: "/images/cards-spread-table.webp", // Updated to the correct image showing all 4 decks
      color: "from-emerald-500 to-teal-500",
      glow: "shadow-[0_0_60px_rgba(16,185,129,0.3)]",
      scale: 1.0
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* 
         TRANSPARENT SECTION BACKGROUND
         Removed the opaque dark layers so the global fixed background is visible.
         Just added subtle local glows for readability.
      */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.1),_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 drop-shadow-lg">
            A Complete <span className="text-gold-gradient font-normal">Ecosystem</span>
          </h2>
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 inline-block">
            <p className="text-xl text-white font-light drop-shadow-md">
              The Shankara Oracle is more than just cards. It is a comprehensive technology of consciousness designed to help you master your life.
            </p>
          </div>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              {/* Image Side - Floating Artifacts with colored backlights */}
              <div className="flex-1 w-full relative group flex justify-center">
                {/* "God Ray" Backlight - specific to each item's color */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 blur-[100px] group-hover:opacity-40 transition-opacity duration-700 rounded-full transform scale-110`} />
                
                <div className={`relative z-10 transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2`}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    style={{ transform: `scale(${feature.scale || 1})` }}
                    className={`w-full max-w-2xl object-contain drop-shadow-2xl ${feature.glow}`} // Increased max-width for larger images
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 text-center lg:text-left">
                <div className={`inline-block w-16 h-1 bg-gradient-to-r ${feature.color} mb-6 shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                <h3 className="text-4xl md:text-5xl font-light text-white mb-6 drop-shadow-lg">{feature.title}</h3>
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <p className="text-lg text-white leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
