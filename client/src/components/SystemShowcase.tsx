import { motion } from "framer-motion";

export default function SystemShowcase() {
  const features = [
    {
      title: "18 Oracle Stones",
      description: "Gain insight and align with Dharma with the Shankara oracle stones. Made from polished black obsidian, each stone features a channeled symbol on one side.",
      image: "/images/stones-transparent.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "The Oracle Board",
      description: "Source guidance and explore ancient wisdom with the Shankara oracle board. A sacred geometry map that guides your reading, connecting you to Vedic astrology insights.",
      image: "/images/shankaraboardwithstonesandcards.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Shakti's Cube",
      description: "Discover the force, energy, and flow of an aspect of your life with this unique divination die. It summons the divine, cosmic feminine energy.",
      image: "/images/shakti-cube.png",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "The Master Cards",
      description: "Tap into the highest frequencies of consciousness. These cards represent the ultimate guides and forces shaping your spiritual journey.",
      image: "/images/Master-Cards-FINAL-1-4-23_Page_28.webp",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glows to fix "too dark" complaint */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            A Complete <span className="text-gold-gradient font-normal">Ecosystem</span>
          </h2>
          <p className="text-xl text-white/70 font-light">
            The Shankara Oracle is more than just cards. It is a comprehensive technology of consciousness designed to help you master your life.
          </p>
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
              {/* Image Side - No more boxes, just floating artifacts */}
              <div className="flex-1 w-full relative group">
                {/* "God Ray" Backlight for each item */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity duration-700 rounded-full`} />
                
                <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 flex justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full max-w-lg object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 text-center lg:text-left">
                <div className={`inline-block w-16 h-1 bg-gradient-to-r ${feature.color} mb-6`} />
                <h3 className="text-4xl md:text-5xl font-light text-white mb-6">{feature.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
