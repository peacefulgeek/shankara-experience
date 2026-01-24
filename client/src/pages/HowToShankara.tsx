import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function HowToShankara() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#2a1b3d]">
      <SEO 
        title="How to Use The Shankara Oracle | Sacred Instructions" 
        description="Learn the sacred rituals and mechanics of The Shankara Oracle. A step-by-step guide to casting the stones, reading the cards, and interpreting the board."
      />

      <Navigation />

      <main>
        {/* HERO SECTION - LIGHTER PURPLE BACKGROUND (Matches Readers/Videos) */}
        <section className="pt-32 pb-24 relative overflow-hidden min-h-[90vh] flex items-center bg-[#2a1b3d]">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content - Left Side */}
              <div className="w-full lg:w-1/2 text-left space-y-8">
                <Badge variant="outline" className="border-purple-400 text-purple-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-purple-900/30 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 mr-2 text-accent" /> Sacred Instructions
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                  Discover the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300 glow-text">
                    Symbolism
                  </span>
                </h1>
                
                <p className="text-xl text-purple-200/90 leading-relaxed font-light max-w-xl">
                  The Shankara Board is a map of the cosmos. Every circle, line, and color is a frequency designed to align your intuition with the heartbeat of the Universe.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 rounded-full font-bold shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                    <Play className="w-4 h-4 mr-2 fill-current" /> Watch Tutorial
                  </Button>
                  <Button variant="outline" size="lg" className="border-purple-400/30 text-purple-200 hover:bg-purple-900/30 px-8 rounded-full backdrop-blur-sm">
                    <Download className="w-4 h-4 mr-2" /> Download Guide PDF
                  </Button>
                </div>
              </div>

              {/* Header Image - Right Side - Gold Border & 15% Larger */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-2xl transform scale-115 origin-center">
                   {/* Elegant Container with Gold Border */}
                   <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#d4af37] via-[#f9e59e] to-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                      <div className="rounded-[22px] overflow-hidden bg-[#1a0b2e] relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay z-10" />
                        <img 
                          src="/images/reading-preparation.jpg" 
                          alt="Shankara Board Detail" 
                          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                        />
                      </div>
                   </div>
                   
                   {/* Decorative Elements */}
                   <div className="absolute -top-6 -right-6 w-12 h-12 border border-[#d4af37]/50 rounded-full animate-spin-slow" />
                   <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-[#d4af37]/30 rounded-full animate-spin-reverse-slow" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SACRED ELEMENTS - ANCIENT STYLE (NO GRAY) */}
        <section className="py-32 bg-[#251836] relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Sacred Elements</h2>
              <p className="text-purple-200/80 max-w-2xl mx-auto text-lg">
                The board is divided into five elemental zones plus the cosmos. Where your stones land reveals the energies at play in your life.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "Earth", desc: "Grounding, Stability, Body" },
                { name: "Water", desc: "Emotion, Flow, Intuition" },
                { name: "Fire", desc: "Action, Passion, Will" },
                { name: "Air", desc: "Intellect, Communication" },
                { name: "Ether", desc: "Space, Spirit, Potential" },
                { name: "Cosmos", desc: "Divine Order, Destiny" }
              ].map((el, i) => (
                <div key={i} className="flex flex-col items-center group">
                  {/* Circular Ancient Icon Frame - Using text/icon fallback until images restored */}
                  <div className="w-32 h-32 rounded-full border border-purple-500/30 bg-purple-900/20 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="w-12 h-12 text-accent/50 group-hover:text-accent transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-2 tracking-wide">{el.name}</h3>
                  <p className="text-sm text-purple-300/70 text-center font-light">{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIPS & SWAPS - BEAUTIFIED & ENLARGED */}
        <section className="py-32 bg-[#2a1b3d] relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              
              {/* Content - Left */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                  Shankara <br />
                  <span className="text-accent">Tips & Swaps</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-2xl hover:border-accent/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-accent mr-3" /> The Puja Ritual
                    </h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      Transform your board into an altar. Place fresh flowers on the lotus petals, light a candle in the center (Bindu), and offer your intentions before you even cast a stone. This charges the board with your unique frequency.
                    </p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-2xl hover:border-accent/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-accent mr-3" /> Stone Swaps
                    </h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      While Obsidian is the master stone, you can swap it for Rose Quartz when asking about love, or Amethyst for higher spiritual guidance. The board welcomes all crystalline energies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image - Right - Puja Board */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b3d] via-transparent to-transparent opacity-50 z-10" />
                  <img 
                    src="/images/puja-board.jpg" 
                    alt="Shankara Puja Ritual" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <p className="text-white/90 font-serif italic text-lg text-center">
                      "The board is a temple. Enter with reverence."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
