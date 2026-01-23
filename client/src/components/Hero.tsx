import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* 
         BOARD-FIRST HERO COMPOSITION 
         Prioritizing the System (Board, Stones, Cube) over the Books.
         100% Solid opacity. No ghosts. No blur.
      */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(255,0,255,0.3)]">
              <span className="text-sm font-bold text-gold tracking-widest uppercase">The #1 Tool for Spiritual Mastery</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-none tracking-tighter drop-shadow-2xl">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] drop-shadow-[0_0_30px_rgba(253,185,49,0.6)] font-normal">Divine Intuition</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed font-light max-w-xl mx-auto lg:mx-0 drop-shadow-md">
              Stop guessing. Start knowing. The Shankara Oracle is the complete system to clear confusion, heal deep wounds, and align with your soul's true purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white px-10 py-8 rounded-full text-xl shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
                Get Your Box Set
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-10 py-8 rounded-full text-xl backdrop-blur-sm flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={16} className="fill-current" />
                </div>
                Watch the Video
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-white/60">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-500 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium">Trusted by 10,000+ Seekers</p>
            </div>
          </motion.div>

          {/* 
             THE BOARD-FIRST COMPOSITION 
             Solid. Majestic. Grounded.
             Board is the foundation. Stones/Cube are the heroes. Books are background.
          */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 h-[600px] w-full flex items-center justify-center perspective-1000"
          >
             {/* 1. THE FOUNDATION: The Oracle Board (Massive, Solid, Angled) */}
             <motion.div 
               animate={{ rotateX: 15, rotateZ: -2 }}
               className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] max-w-none z-10"
             >
                <img 
                  src="/images/oracle-board.png" 
                  alt="The Shankara Oracle Board" 
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]" 
                />
             </motion.div>

             {/* 2. THE BACKGROUND: The Box Set (Supporting Role) */}
             <div className="absolute top-[10%] left-[20%] z-0 transform scale-75 -rotate-6 opacity-90 hover:opacity-100 transition-opacity">
                <img 
                  src="/images/full-set-transparent.png" 
                  alt="Shankara Box Set" 
                  className="w-full max-w-md drop-shadow-2xl" 
                />
             </div>

             {/* 3. THE HEROES: Stones & Cube (Front & Center, Floating above Board) */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-[15%] right-[10%] z-30 w-56"
             >
                <img 
                  src="/images/stones-enhanced.png" 
                  alt="18 Sacred Stones" 
                  className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
                />
             </motion.div>

             <motion.div 
               animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-[25%] left-[10%] z-30 w-40"
             >
                <img 
                  src="/images/shakti-cube-transparent.png" 
                  alt="Shakti's Cube" 
                  className="w-full drop-shadow-[0_20px_40px_rgba(253,185,49,0.4)]" 
                />
             </motion.div>

             {/* 4. THE MAGIC: Master Cards (Scattered on Board) */}
             <div className="absolute bottom-[10%] left-[30%] z-20 w-64 transform rotate-12">
                <img 
                  src="/images/master-card-spread.webp" 
                  alt="Master Cards" 
                  className="w-full drop-shadow-xl" 
                />
             </div>

             {/* Badge */}
             <div className="absolute top-10 right-0 z-40 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-float">
               <div className="text-center">
                 <span className="block text-4xl font-bold text-white drop-shadow-md">300+</span>
                 <span className="text-xs font-bold text-gold uppercase tracking-wider">Cards Included</span>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
