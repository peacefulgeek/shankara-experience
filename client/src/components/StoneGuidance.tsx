import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Share2, ArrowRight, Mail } from "lucide-react";
import stonesData from "@/lib/stones-data.json";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

type RevealStage = "IDLE" | "STONE_REVEALED" | "MESSAGE_REVEALED";

export default function StoneGuidance() {
  const [stage, setStage] = useState<RevealStage>("IDLE");
  const [currentStone, setCurrentStone] = useState(stonesData[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Audio ref for the chime sound
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  const handleInitialClick = () => {
    if (stage === "IDLE") {
      setIsAnimating(true);
      playSound();
      
      // Randomly select stone
      const randomIndex = Math.floor(Math.random() * stonesData.length);
      setCurrentStone(stonesData[randomIndex]);
      
      setTimeout(() => {
        setStage("STONE_REVEALED");
        setIsAnimating(false);
      }, 800); // Animation duration
    }
  };

  const handleStoneClick = () => {
    if (stage === "STONE_REVEALED") {
      setIsAnimating(true);
      playSound();
      
      setTimeout(() => {
        setStage("MESSAGE_REVEALED");
        setIsAnimating(false);
      }, 600);
    }
  };

  const handleReset = () => {
    setStage("IDLE");
    setIsAnimating(false);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Reading saved! Check your inbox.");
      setEmail("");
    }, 1000);
  };

  const handleShare = async () => {
    const shareData = {
      title: `Guidance from The Shankara Oracle: ${currentStone.name}`,
      text: `I drew the ${currentStone.name} stone (${currentStone.title}): "${currentStone.desc}"`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Shared successfully!");
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`);
        toast.success("Copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy to clipboard");
      }
    }
  };

  return (
    <section className="py-32 bg-cosmic-dark relative overflow-hidden">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/sounds/reveal-chime.mp3" preload="auto" />

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
            Focus on a question or situation in your life. When you are ready, click below to reveal your secret stone.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            
            {/* INTERACTIVE REVEAL CONTAINER */}
            <div className="relative group perspective-1000 w-full max-w-md mx-auto lg:mx-0">
              
              {/* STAGE 1: IDLE (Purple Void) */}
              {stage === "IDLE" && (
                <div 
                  onClick={handleInitialClick}
                  className={`relative w-full aspect-square cursor-pointer transition-all duration-700 ${isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100 hover:scale-105"}`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-900 to-cosmic-dark rounded-[2rem] border border-white/10 flex items-center justify-center p-12 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-30 mix-blend-screen animate-pulse" />
                    <div className="relative z-10 text-center space-y-4">
                      <Sparkles className="w-12 h-12 text-accent mx-auto animate-spin-slow" />
                      <span className="block text-white/80 text-sm uppercase tracking-[0.3em] font-bold">Click To Reveal<br/>Your Secret Stone</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 2: STONE REVEALED (Image Only) */}
              {stage === "STONE_REVEALED" && (
                <div 
                  onClick={handleStoneClick}
                  className={`relative w-full aspect-square cursor-pointer transition-all duration-700 ${isAnimating ? "scale-95 opacity-0 blur-md" : "scale-100 opacity-100 blur-0 hover:scale-105"}`}
                >
                  <div className="relative w-full h-full bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 flex flex-col items-center justify-center p-12 shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                    {/* Glowing orb behind stone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse" />
                    
                    {/* Stone Name Title */}
                    <h3 className="text-2xl font-display font-bold text-white mb-6 animate-fade-in-up tracking-wide drop-shadow-lg">
                      {currentStone.name}
                    </h3>

                    {/* Stone Image - Reduced Size (25% smaller) */}
                    <img 
                      src={currentStone.image} 
                      alt={currentStone.name}
                      className="relative z-10 w-36 h-36 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-float mb-8"
                    />
                    
                    {/* Divine Button */}
                    <div className="relative z-20 animate-fade-in-up delay-300">
                       <button className="relative px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-accent/50 text-white font-medium tracking-[0.15em] text-xs uppercase shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:bg-black/60 hover:border-accent transition-all duration-300 group-hover:scale-105">
                          <span className="relative z-10 flex items-center gap-2">
                             <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                             Click to Reveal Message
                             <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                          </span>
                       </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 3: MESSAGE REVEALED (Text + Guidance) */}
              {stage === "MESSAGE_REVEALED" && (
                <div className={`relative w-full aspect-square transition-all duration-700 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/95 to-cosmic-dark/95 backdrop-blur-xl rounded-[2rem] border border-accent/30 flex flex-col items-center justify-center p-8 text-center shadow-[0_0_60px_rgba(255,20,147,0.25)] overflow-y-auto custom-scrollbar">
                    
                    <h3 className="text-3xl font-display font-bold text-white mb-1 mt-2">
                      {currentStone.name}
                    </h3>
                    <div className="text-accent font-medium uppercase tracking-widest text-xs mb-6">
                      {currentStone.title}
                    </div>
                    
                    <p className="text-lg text-purple-100 leading-relaxed font-light italic mb-8 px-2">
                      "{currentStone.desc}"
                    </p>

                    <div className="flex gap-3 w-full justify-center">
                      <Button 
                        onClick={handleShare}
                        variant="ghost" 
                        size="sm"
                        className="text-purple-300 hover:text-white hover:bg-white/10 rounded-full"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button 
                        onClick={handleReset}
                        variant="ghost" 
                        size="sm"
                        className="text-purple-300 hover:text-white hover:bg-white/10 rounded-full"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        New Draw
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MARKETING & UPSELL SECTION (Visible only in Stage 3) */}
            {stage === "MESSAGE_REVEALED" ? (
              <div className="flex flex-col gap-6 w-full max-w-md animate-fade-in-up">
                
                {/* Email Capture */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" /> Save Your Reading
                  </h4>
                  <p className="text-sm text-purple-200/60 mb-4">
                    Enter your email to receive this guidance and a weekly digest of oracle wisdom.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-black/20 border-white/10 text-white placeholder:text-white/30"
                      required
                    />
                    <Button type="submit" disabled={isSubmitting} className="bg-accent hover:bg-accent/90 text-white font-bold">
                      {isSubmitting ? "Saving..." : "Save"}
                    </Button>
                  </form>
                </div>

                {/* Product Upsell */}
                <div className="bg-gradient-to-br from-accent/20 to-purple-900/40 backdrop-blur-md rounded-2xl p-8 border border-accent/30 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">
                    The Shankara Oracle
                  </h3>
                  <p className="text-purple-100/80 mb-6 relative z-10">
                    Unlock the full power of the 18 Obsidian Stones and Sacred Geometry board.
                  </p>
                  
                  <Link href="/shop/oracle-deck">
                    <Button size="lg" className="w-full bg-white text-purple-900 hover:bg-gray-100 font-bold text-lg h-14 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all relative z-10">
                      Get The Oracle <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

              </div>
            ) : (
              // Instructions (Visible in Stage 1 & 2)
              <div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left max-w-sm animate-fade-in">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {stage === "IDLE" ? "Ask the Oracle" : "Your Stone Awaits"}
                  </h3>
                  <p className="text-purple-200/70 leading-relaxed">
                    {stage === "IDLE" 
                      ? "Take a deep breath. Center yourself. Hold your question in your mind, then click the void to summon your stone."
                      : "The universe has selected a stone for you. Observe its form. When you are ready to receive its wisdom, click to reveal the message."
                    }
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
