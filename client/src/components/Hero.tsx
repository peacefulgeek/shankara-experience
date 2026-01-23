import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
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
      <div className="container relative z-20 px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-6xl mx-auto glass-panel p-12 md:p-20"
        >
          <img 
            src="/images/logo.svg" 
            alt="The Shankara Experience" 
            className="h-32 md:h-48 w-auto mx-auto mb-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          />
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 leading-tight tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <span className="text-glow font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent">LOVE</span> <br />
            <span className="text-4xl md:text-6xl lg:text-7xl opacity-90 font-light italic">is the Answer</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/90 font-light mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Step into the <span className="text-accent font-medium">Cosmic Heart</span> of Shankara. <br/>
            Where ancient wisdom meets the vibrant pulse of your soul.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold px-12 py-10 rounded-full text-2xl shadow-[0_0_40px_rgba(255,0,255,0.6)] hover:shadow-[0_0_60px_rgba(255,0,255,0.8)] transition-all duration-300 border-2 border-white/20 transform hover:-translate-y-1">
              Shop Oracle
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black px-12 py-10 rounded-full text-2xl font-bold shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300">
              Master Training
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
