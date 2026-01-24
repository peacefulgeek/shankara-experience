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

        {/* ANCIENT WISDOM & SANSKRIT SECTION */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/sanskrit-wisdom.jpg" 
                    alt="Ancient Illuminated Sanskrit Text" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-yellow-200 font-display text-lg italic tracking-wide">
                      "Knowledge that transcends time..."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8">
                <Badge className="bg-yellow-900/30 text-yellow-200 border border-yellow-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md">
                  <Star className="w-3 h-3 mr-2 fill-current" /> 5,000 Year Lineage
                </Badge>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Ancient Wisdom, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-400">
                    Sanskrit, And More
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-purple-100/80 font-light leading-relaxed">
                  <p>
                    The Shankara Oracle is deeply rooted in the 5,000-year-old traditions of Vedic wisdom. It is not merely a divination tool but a sacred technology designed to align your consciousness with universal truths.
                  </p>
                  <p>
                    Every card and symbol is infused with the vibrational power of <strong className="text-yellow-200 font-medium">Sanskrit mantras and sutras</strong>. These ancient sounds are keys that unlock dormant emotions, clear energetic blockages, and elevate your personal frequency.
                  </p>
                  <p>
                    By engaging with these sacred texts and symbols, you are participating in a timeless lineage of seekers, connecting directly to the source of divine knowledge that has guided humanity for millennia.
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="border-yellow-500/50 text-yellow-200 hover:bg-yellow-500/10 px-8 h-12 rounded-full group">
                    Explore the Lineage <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

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
