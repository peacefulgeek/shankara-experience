import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight, Download, Star, Heart } from "lucide-react";
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
        {/* HERO SECTION - RESTORED ORIGINAL */}
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
                          src="https://shankara-pull.b-cdn.net/images/reading-preparation.webp" 
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

        {/* ANCIENT WISDOM SECTION - REPLACING THE HATED CIRCLES */}
        <section className="py-32 relative border-y border-white/5 bg-[#251836]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - The Ancient Sanskrit Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="/images/ancient-sanskrit.jpg" 
                    alt="Ancient Illuminated Sanskrit Text" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-yellow-200 font-display text-lg italic tracking-wide">
                      "The frequency of the divine..."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content about 5000 Years, Egyptology, Sanskrit */}
              <div className="space-y-8">
                <Badge className="bg-yellow-900/30 text-yellow-200 border border-yellow-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md">
                  <Star className="w-3 h-3 mr-2 fill-current" /> 5,000 Year Lineage
                </Badge>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Ancient Divination & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-400">
                    The Power of Sanskrit
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-purple-100/80 font-light leading-relaxed">
                  <p>
                    This is how they did it 5,000 years ago. The Shankara Oracle is not a modern invention but a resurrection of sacred technologies used in <strong className="text-yellow-200 font-medium">Ancient Egypt and Vedic India</strong> to commune with the divine.
                  </p>
                  <p>
                    At the heart of this system lies the frequency-changing beauty of <strong className="text-yellow-200 font-medium">Sanskrit</strong>. Known as the "language of the gods," Sanskrit vibrations have the power to restructure consciousness, clear karmic debris, and elevate your energetic frequency instantly.
                  </p>
                  <p>
                    By engaging with these sacred symbols and sounds, you are not just "playing a game"—you are stepping into a timeless stream of wisdom, accessing the same profound depth and clarity that guided pharaohs and rishis millennia ago.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TIPS & SWAPS - RESTORED ORIGINAL */}
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
                    src="https://shankara-pull.b-cdn.net/images/puja-board.webp" 
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
