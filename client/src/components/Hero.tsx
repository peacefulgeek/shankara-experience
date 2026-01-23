import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <img
          src="/images/hero-shakti.webp"
          alt="Shankara Oracle"
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-primary tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-6">
            The Most Advanced Oracle On Earth
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
            Where the <span className="text-primary italic font-serif">Magic</span> of Divination <br />
            Meets the <span className="text-primary italic font-serif">Wisdom</span> of Your Soul
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Journey into the depths of your inner Self with Shankara. A sacred system of channeled predictive tools rooted in ancient Vedic wisdom.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg min-w-[200px]">
              Shop Oracle
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg min-w-[200px]">
              Master Training
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
