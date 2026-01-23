import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* 
         BACKGROUND ELEMENTS 
         We keep these subtle so they don't compete with the massive board.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* TEXT CONTENT - Centered and Cinematic */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight tracking-tight text-white drop-shadow-2xl mb-6">
            Unlock Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-400 to-accent animate-gradient">
              Highest Potential
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            The world's most comprehensive spiritual ecosystem. Align your energy, reveal your path, and connect with the divine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 h-16 text-xl rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_50px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-105 group">
                Get the Oracle System
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/master-training">
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white px-10 h-16 text-xl rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Play className="mr-2 w-6 h-6 fill-current opacity-80" />
                Watch the Trailer
              </Button>
            </Link>
          </div>
        </div>

        {/* 
           THE MASSIVE BOARD CENTERPIECE 
           This is the "world-class" change. Instead of a small image on the right,
           we make the board HUGE, spanning the width, tilted in 3D perspective
           to invite the user "into" the game.
        */}
        <div className="relative w-full max-w-6xl mx-auto perspective-1000 mt-8 animate-fade-in-up delay-200">
           {/* Glow behind the board */}
           <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-full blur-[100px] -z-10 opacity-60" />
           
           <div className="relative transform transition-transform duration-1000 hover:scale-[1.02] hover:rotate-x-2">
              <img 
                src="/images/hero-new.png" 
                alt="The Shankara Experience Oracle Board" 
                className="w-full h-auto drop-shadow-2xl rounded-xl border border-white/5"
              />
              
              {/* Floating "Interactive" Elements (Visual Only for now) */}
              <div className="absolute top-1/4 left-10 hidden lg:block animate-float">
                 <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
                    <p className="text-accent font-bold text-xs uppercase tracking-widest mb-1">Step 1</p>
                    <p className="text-white font-medium">Cast the Stones</p>
                 </div>
              </div>

              <div className="absolute bottom-1/4 right-10 hidden lg:block animate-float delay-500">
                 <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
                    <p className="text-accent font-bold text-xs uppercase tracking-widest mb-1">Step 2</p>
                    <p className="text-white font-medium">Receive Guidance</p>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down" />
        </div>
      </div>
    </div>
  );
}
