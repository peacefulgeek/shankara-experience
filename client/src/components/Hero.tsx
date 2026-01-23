import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cosmic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10" />
        <img 
          src="/images/cosmic-nebula.jpg" 
          alt="Cosmic Background" 
          className="w-full h-full object-cover opacity-80 animate-pulse-slow"
        />
      </div>

      {/* Floating Particles/Stars Overlay */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen">
        <img src="/images/cosmic-stars.png" alt="Stars" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content - Left Side */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm drop-shadow-md">
                The #1 Tool for Spiritual Mastery
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              Unlock Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent text-glow">
                Divine Intuition
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed drop-shadow-md max-w-xl mx-auto lg:mx-0">
              Stop guessing. Start knowing. The Shankara Oracle is the complete system to clear confusion, heal deep wounds, and align with your soul's true purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold px-10 py-8 rounded-full text-xl shadow-[0_0_40px_rgba(255,0,255,0.6)] hover:shadow-[0_0_60px_rgba(255,0,255,0.8)] transition-all duration-300 border-2 border-white/20 transform hover:-translate-y-1">
                Get Your Box Set
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-8 rounded-full text-xl font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                Watch the Video
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-white/60 text-sm">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20 border border-white/40" />
                ))}
              </div>
              <p>Trusted by 10,000+ Seekers</p>
            </div>
          </motion.div>

          {/* Product Image - Right Side - CLEAN TRANSPARENCY */}
          <motion.div 
            className="flex-1 w-full max-w-2xl relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            {/* The Product Image - Now truly transparent */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <img 
                src="/images/full-set-transparent.png" 
                alt="The Shankara Oracle Complete Box Set" 
                className="w-full h-auto drop-shadow-2xl"
              />
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -top-10 -right-5 md:top-0 md:right-0 bg-white/10 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <span className="block text-2xl font-bold text-white drop-shadow-md">300+</span>
                  <span className="text-xs uppercase tracking-wider text-accent font-bold">Cards Included</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
