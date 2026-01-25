import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import StoneGuidance from "@/components/StoneGuidance";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MysticalBackground from "@/components/MysticalBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative home-page-v2">
      <SEO 
        title="The Shankara Oracle | Sacred Technology of Consciousness" 
        description="A living technology of consciousness. Awaken your intuition, heal your past, and master your destiny with The Shankara Oracle."
      />

      <Navigation />

      <main>
        {/* HERO SECTION - DARK COSMIC (YIN) */}
        <section className="bg-cosmic-dark pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center">
          {/* Neon Glow Effects */}
          <MysticalBackground />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0" />
          
          <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <Badge variant="outline" className="border-purple-500 text-purple-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-purple-900/30 backdrop-blur-md">
                <Sparkles className="w-3 h-3 mr-2 text-accent" /> The Sacred Oracle System
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight glow-text">
                SHANKARA
              </h1>
              
              <p className="text-2xl md:text-3xl font-light text-purple-200 tracking-wide">
                A living technology of consciousness.
              </p>
              
              <div className="prose prose-lg prose-invert text-purple-300/80 max-w-xl leading-relaxed">
                <p>
                  <span className="text-accent font-bold">Awaken your intuition</span>, heal your past, and master your destiny.
                </p>
                <p>
                  The Shankara Oracle is not just a board game—it is a sacred mirror reflecting the deepest truths of your soul. Through the synergy of cards, stones, and sacred geometry, it reveals the hidden currents shaping your life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link href="/shop">
                  <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-10 h-14 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all transform hover:scale-105">
                    Get the Oracle
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-purple-500/50 text-purple-200 hover:bg-purple-900/50 px-10 h-14 text-lg rounded-full backdrop-blur-sm hover:text-white transition-all"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2 fill-current" /> Watch Trailer
                </Button>
              </div>
            </div>

            {/* HERO IMAGE - UPDATED WITH USER PROVIDED ASSET */}
            <div className="relative perspective-1000 flex flex-col items-center lg:items-end">
              <div className="relative w-full max-w-xl">
                <img 
                  src="https://shankara-pull.b-cdn.net/images/hero-board-detail.webp" 
                  alt="The Shankara Oracle Board Detail" 
                  className="relative z-10 w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-1000 rounded-3xl"
                />
              </div>
              
              {/* Tagline directly under the image */}
              <p className="text-center mt-4 text-purple-200/80 italic text-lg max-w-xl">
                <span className="text-[#ffd700] font-semibold not-italic">The Shankara Oracle System</span> — your portal to a dimension within, where every answer already resides.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSFORMATION BENEFITS - RICH & INSPIRING */}
        <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
          {/* Subtle sacred geometry background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <p className="text-purple-600 font-semibold tracking-widest uppercase text-sm mb-4">The Sacred Journey Awaits</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Unlock the Wisdom of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Ancient Teachings</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Shankara Oracle bridges timeless Vedic wisdom with modern spiritual practice, 
                offering you a direct pathway to self-realization, divine connection, and profound inner healing.
              </p>
            </div>

            {/* 6 Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  title: "Access Ancient Vedic Wisdom",
                  desc: "Receive teachings passed down through sacred lineages for thousands of years. The Shankara Oracle embodies the essence of Advaita Vedanta, Tantra, and the mystical traditions of India.",
                  icon: "🕉️",
                  gradient: "from-amber-500 to-orange-600"
                },
                {
                  title: "Connect with Divine Beings",
                  desc: "Open channels to ascended masters, spirit guides, and celestial helpers who await your invitation. Each reading creates a sacred space for divine communion and spiritual guidance.",
                  icon: "✨",
                  gradient: "from-purple-500 to-indigo-600"
                },
                {
                  title: "Heal to Your Core",
                  desc: "Release karmic patterns, ancestral wounds, and emotional blockages that have held you back for lifetimes. The Oracle reveals the root causes and pathways to deep, lasting transformation.",
                  icon: "💜",
                  gradient: "from-pink-500 to-rose-600"
                },
                {
                  title: "Awaken Your Intuition",
                  desc: "Strengthen your connection to your Higher Self and develop unwavering trust in your inner knowing. The Oracle trains your psychic senses and expands your spiritual perception.",
                  icon: "👁️",
                  gradient: "from-blue-500 to-cyan-600"
                },
                {
                  title: "Navigate Life's Crossroads",
                  desc: "Gain crystal clarity on relationships, career, purpose, and major life decisions. The Oracle illuminates your soul's path and reveals the choices aligned with your highest destiny.",
                  icon: "🧭",
                  gradient: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Embody Your Divine Nature",
                  desc: "Remember who you truly are beyond the illusions of separation. The Shankara Oracle is a mirror reflecting your infinite nature, guiding you home to the Self that was never lost.",
                  icon: "🌟",
                  gradient: "from-violet-500 to-purple-600"
                }
              ].map((benefit, i) => (
                <div key={i} className="group relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="text-4xl mb-5">{benefit.icon}</div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {benefit.desc}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Inspiring Statement */}
            <div className="text-center mt-20 max-w-3xl mx-auto">
              <div className="inline-block">
                <p className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 leading-relaxed">
                  Enjoy The Deepest And Most Enriching Readings Of Your Life
                </p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* THE SYSTEM - DARK COSMIC (YIN) */}
        <section className="py-32 bg-cosmic-dark relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full animate-pulse" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/full-system.webp" 
                  alt="Shankara Oracle Full System" 
                  className="relative z-10 w-full max-w-lg mx-auto drop-shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-float rounded-2xl"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-12">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                  More Than a Deck. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 glow-text">
                    A Portal.
                  </span>
                </h2>
                
                <p className="text-xl text-purple-200/80 leading-relaxed font-light">
                  The Shankara Oracle is a complete cosmological system designed to bridge the gap between your human experience and your divine nature.
                </p>
                
                <div className="grid grid-cols-2 gap-y-10 gap-x-12">
                  <div className="border-l-4 border-accent pl-6">
                    <div className="text-5xl font-display font-bold text-white mb-1">4</div>
                    <div className="text-sm text-purple-300 font-bold uppercase tracking-widest">Sacred Decks</div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="text-5xl font-display font-bold text-white mb-1">300+</div>
                    <div className="text-sm text-purple-300 font-bold uppercase tracking-widest">Cards</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="text-5xl font-display font-bold text-white mb-1">18</div>
                    <div className="text-sm text-purple-300 font-bold uppercase tracking-widest">Obsidian Stones</div>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-6">
                    <div className="text-5xl font-display font-bold text-white mb-1">∞</div>
                    <div className="text-sm text-purple-300 font-bold uppercase tracking-widest">Possibilities</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/unboxing">
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-6 h-auto text-lg rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all group"
                    >
                      See what's inside the box 
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MASTER TRAINING - LIGHT (YANG) - UPDATED LAYOUT */}
        <section className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content - Flushed Left */}
              <div className="w-full lg:w-1/2 text-left">
                <Badge className="bg-purple-900 text-white hover:bg-purple-800 mb-8 px-6 py-2 text-sm font-bold tracking-widest uppercase">
                  The Master Course
                </Badge>
                
                <h2 className="text-5xl md:text-7xl font-display font-bold text-purple-900 mb-8 leading-tight">
                  Master the Art of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-accent">
                    Divine Communication
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 max-w-xl mb-12 leading-relaxed">
                  Dive deep into the mysteries of the Shankara Oracle with our comprehensive Master Training. Learn to read the cards, interpret the stones, and navigate the sacred geometry of the board.
                </p>
                
                <Link href="/certification">
                  <Button size="lg" className="bg-purple-900 text-white hover:bg-purple-800 px-12 h-16 text-lg rounded-full font-bold shadow-xl transition-all hover:-translate-y-1">
                    Explore the Training
                  </Button>
                </Link>
              </div>

              {/* 4-Square Image Grid - Right Side */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                    <img src="https://shankara-pull.b-cdn.net/images/board-full-flat.webp" alt="Oracle Board Flat" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform translate-y-8 hover:translate-y-6 transition-transform duration-500">
                    <img src="https://shankara-pull.b-cdn.net/images/cards-spread.webp" alt="Oracle Cards" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                    <img src="https://shankara-pull.b-cdn.net/images/stones-bag.webp" alt="Obsidian Stones" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform translate-y-8 hover:translate-y-6 transition-transform duration-500">
                    <img src="https://shankara-pull.b-cdn.net/images/guidebooks.webp" alt="Guidebooks" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TESTIMONIALS CAROUSEL */}
        <TestimonialsCarousel />

        {/* STONE GUIDANCE SECTION */}
        <StoneGuidance />
      </main>
      <Footer />
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl="https://vimeo.com/833058091" 
      />
    </div>
  );
}
