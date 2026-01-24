import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Download, Star, Sparkles, Heart, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function HowTo() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#0a0514] text-white">
      <SEO 
        title="How to Use Shankara | The Sacred Oracle System" 
        description="Learn to navigate the Shankara Oracle board, interpret the stones, and connect with the divine elements."
      />

      {/* Fixed Cosmic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/cosmic-bg-1.webp')] bg-cover bg-center opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0514] via-transparent to-[#0a0514]" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">
        
        {/* HERO SECTION - OVERHAULED */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - MASSIVE Board Image */}
            <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
               <div className="relative w-[140%] -ml-[20%] lg:w-[150%] lg:-ml-[25%] aspect-square animate-float-slow">
                 <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full" />
                 <img 
                   src="https://shankara-pull.b-cdn.net/images/board-full-flat.webp" 
                   alt="The Shankara Oracle Board" 
                   className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_80px_rgba(168,85,247,0.3)] transform rotate-12 hover:rotate-0 transition-transform duration-[2s] ease-in-out"
                 />
               </div>
            </div>

            {/* Right Side - Mystical Text */}
            <div className="order-1 lg:order-2 text-left space-y-8 z-10">
              <Badge variant="outline" className="border-purple-400/30 text-purple-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-purple-900/20 backdrop-blur-md">
                <Sparkles className="w-3 h-3 mr-2 text-yellow-200" /> Sacred Instructions
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight drop-shadow-2xl">
                How to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200 glow-text">
                  Shankara
                </span>
              </h1>
              
              <h2 className="text-3xl font-display font-light text-purple-100/90 tracking-wide italic">
                Discover the symbolism...
              </h2>
              
              <p className="text-xl text-purple-200/70 leading-relaxed font-light max-w-xl">
                Unlock the wisdom of the cosmos. Whether you seek daily guidance or deep transformation, the Shankara system meets you exactly where you are.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-[#ff00ff] hover:bg-[#d900d9] text-white h-14 px-8 rounded-full text-lg gap-2 shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,255,0.6)] transition-all">
                  <Play className="w-5 h-5 fill-current" />
                  Watch Tutorial
                </Button>
                <Button variant="outline" size="lg" className="border-purple-500/30 hover:bg-purple-500/10 text-purple-100 h-14 px-8 rounded-full text-lg gap-2 backdrop-blur-sm">
                  <Download className="w-5 h-5" />
                  Download Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SACRED ELEMENTS - ANCIENT & MYSTICAL */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-yellow-200 mb-6 drop-shadow-[0_0_15px_rgba(253,224,71,0.3)]">
                The Sacred Elements
              </h2>
              <p className="text-xl text-purple-200/60 max-w-2xl mx-auto font-light">
                The language of the universe speaks through these primordial forces.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {[
                { name: "Earth", img: "https://shankara-pull.b-cdn.net/images/element-earth.webp", desc: "Grounding & Stability" },
                { name: "Water", img: "https://shankara-pull.b-cdn.net/images/element-water.webp", desc: "Flow & Emotion" },
                { name: "Fire", img: "https://shankara-pull.b-cdn.net/images/element-fire.webp", desc: "Action & Passion" },
                { name: "Air", img: "https://shankara-pull.b-cdn.net/images/element-air.webp", desc: "Intellect & Clarity" },
                { name: "Ether", img: "https://shankara-pull.b-cdn.net/images/element-ether.webp", desc: "Spirit & Connection" },
                { name: "Cosmos", img: "https://shankara-pull.b-cdn.net/images/element-cosmos.webp", desc: "Universal Laws" },
              ].map((el, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-40 h-40 md:w-48 md:h-48 relative mb-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[360deg]">
                    <div className="absolute inset-0 bg-accent/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img 
                      src={el.img} 
                      alt={`${el.name} Element`} 
                      className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-widest uppercase">{el.name}</h3>
                  <p className="text-purple-300/60 text-sm font-medium uppercase tracking-wider">{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIPS & SWAPS - BEAUTIFIED & ENLARGED */}
        <section className="py-40 relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-10">
                <Badge className="bg-white/10 text-yellow-200 border border-yellow-500/30 px-6 py-2 text-sm tracking-widest uppercase backdrop-blur-md">
                  <Heart className="w-4 h-4 mr-2 fill-current" /> Sacred Rituals
                </Badge>
                
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                  Shankara <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                    Tips & Swaps
                  </span>
                </h2>
                
                <div className="space-y-8 text-lg text-purple-100/80 font-light leading-relaxed">
                  <p>
                    Create a sacred space before every reading. Light a candle, burn some sage, or simply take three deep breaths to center yourself.
                  </p>
                  <p>
                    <strong className="text-pink-300 font-bold block mb-2">Pro Tip:</strong>
                    Use fresh rose petals on your board to invite the energy of unconditional love. The Shankara board is not just a tool; it is an altar.
                  </p>
                  <p>
                    Don't have the stones handy? You can use crystals, coins, or even flower buds as markers. The magic is in your intention, not the object.
                  </p>
                </div>

                <Link href="/blog">
                  <Button variant="link" className="text-yellow-200 text-lg p-0 h-auto hover:text-white mt-4 group">
                    Read more rituals on our blog <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Puja Image - Right Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-pink-500/20 blur-[80px] rounded-full animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.3)] border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/puja-board.webp" 
                    alt="Shankara Puja Board with Rose Petals" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/90 text-sm font-medium italic">"The board becomes a living altar when treated with reverence."</p>
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
