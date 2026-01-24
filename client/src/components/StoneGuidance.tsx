import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";
import stonesData from "@/lib/stones-data.json";

export default function StoneGuidance() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentStone, setCurrentStone] = useState(stonesData[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const drawStone = () => {
    setIsAnimating(true);
    setIsRevealed(false);
    
    // Small delay to allow the card to flip back if it was revealed
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * stonesData.length);
      setCurrentStone(stonesData[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <section className="py-32 bg-cosmic-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-20 mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium uppercase tracking-widest mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Sacred Wisdom</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Receive Guidance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">
              From The Stones
            </span>
          </h2>
          <p className="text-xl text-purple-200/60 leading-relaxed">
            Focus on a question or situation in your life. When you are ready, click the stone to reveal its message for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            
            {/* Stone Display Container */}
            <div className="relative group perspective-1000 w-full max-w-md mx-auto md:mx-0">
              <div 
                onClick={handleReveal}
                className={`relative w-full aspect-square cursor-pointer transition-all duration-700 transform-style-3d ${isRevealed ? "rotate-y-180" : ""} ${isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"}`}
              >
                
                {/* FRONT: Stone Image */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative w-full h-full bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 flex items-center justify-center p-12 shadow-[0_0_50px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_80px_rgba(139,92,246,0.3)] transition-all duration-500">
                    {/* Glowing orb behind stone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-[60px] animate-pulse" />
                    
                    <img 
                      src={currentStone.image} 
                      alt={currentStone.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <span className="text-white/40 text-sm uppercase tracking-[0.3em] font-medium">Click to Reveal</span>
                    </div>
                  </div>
                </div>

                {/* BACK: Guidance Text */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/90 to-cosmic-dark/90 backdrop-blur-xl rounded-[2rem] border border-accent/30 flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-[0_0_50px_rgba(255,20,147,0.2)]">
                    <Sparkles className="w-8 h-8 text-accent mb-6 animate-pulse" />
                    
                    <h3 className="text-3xl font-display font-bold text-white mb-2">
                      {currentStone.name}
                    </h3>
                    <div className="text-accent font-medium uppercase tracking-widest text-sm mb-6">
                      {currentStone.title}
                    </div>
                    
                    <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-light italic">
                      "{currentStone.desc}"
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Controls / Instructions (Desktop: Right side, Mobile: Bottom) */}
            <div className="flex flex-col items-center md:items-start gap-8 text-center md:text-left max-w-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {isRevealed ? "Your Guidance" : "Ask the Oracle"}
                </h3>
                <p className="text-purple-200/70 leading-relaxed">
                  {isRevealed 
                    ? "Reflect on this message. How does it apply to your current situation? The stones speak the language of the earth and the soul."
                    : "Take a deep breath. Center yourself. Hold your question in your mind, then interact with the stone to receive your answer."
                  }
                </p>
              </div>

              <Button 
                onClick={drawStone}
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white h-14 px-8 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(255,20,147,0.1)] hover:shadow-[0_0_30px_rgba(255,20,147,0.4)]"
              >
                <RefreshCw className={`w-5 h-5 mr-3 ${isAnimating ? "animate-spin" : ""}`} />
                Draw Another Stone
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
