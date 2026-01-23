import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Star, Heart, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="The Shankara Oracle | Sacred Technology of Consciousness" 
        description="A living technology of consciousness. Awaken your intuition, heal your past, and master your destiny with The Shankara Oracle."
      />

      <Navigation />

      <main>
        {/* HERO SECTION - LIGHT COSMIC */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Cosmic Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-purple-300 text-purple-700 px-4 py-1 text-sm tracking-widest uppercase bg-white/50 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3 h-3 mr-2 text-accent" /> The Sacred Oracle System
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-900 via-purple-700 to-purple-900 mb-6 leading-tight drop-shadow-sm">
              SHANKARA
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-purple-900/80 mb-4 tracking-wide">
              A living technology of consciousness.
            </p>
            
            <p className="text-xl text-purple-800/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              <span className="text-accent font-bold">Awaken your intuition</span>, heal your past, and master your destiny.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/shop">
                <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 px-10 h-14 text-lg rounded-full font-bold shadow-lg shadow-purple-200 hover:shadow-xl transition-all">
                  Get the Oracle
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-10 h-14 text-lg rounded-full bg-white/50 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2 fill-current" /> Watch Trailer
              </Button>
            </div>

            {/* HERO IMAGE - ORACLE BOARD */}
            <div className="relative max-w-5xl mx-auto mt-10 perspective-1000">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(100,0,100,0.2)] border-4 border-white/50 bg-white">
                <img 
                  src="/images/oracle-board-hd.png" 
                  alt="The Shankara Oracle Board" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Interactive Hotspots (Visual Only for now) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/30 rounded-full animate-ping opacity-20" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-[60px] opacity-40 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-[80px] opacity-40" />
            </div>
          </div>
        </section>

        {/* FEATURES GRID - LIGHT & AIRY */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clarify Your Path",
                  desc: "Cut through confusion and see your life's trajectory with crystal clear vision.",
                  gradient: "from-purple-500 to-indigo-600",
                  bg: "bg-purple-50",
                  image: "/images/clarify-your-path.png" // Fallback to color if missing
                },
                {
                  title: "Heal Deep Patterns",
                  desc: "Identify and release karmic blocks that have been holding you back for lifetimes.",
                  gradient: "from-pink-500 to-rose-600",
                  bg: "bg-pink-50",
                  image: "/images/heal-deep-patterns.png"
                },
                {
                  title: "Empower Your Intuition",
                  desc: "Strengthen your direct connection to Source and trust your inner guidance.",
                  gradient: "from-blue-500 to-cyan-600",
                  bg: "bg-blue-50",
                  image: "/images/empower-your-intuition.png"
                }
              ].map((feature, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-3xl p-8 ${feature.bg} hover:shadow-xl transition-all duration-300 border border-white flex flex-col justify-between h-full`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                  </div>

                  {/* Visual Indicator */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-24 transition-all duration-300 mt-auto`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE SYSTEM SHOWCASE */}
        <section className="py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full" />
                <img 
                  src="/images/shakti-cube-transparent.png" 
                  alt="Shakti Cube" 
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl transform hover:-translate-y-4 transition-transform duration-500"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-900">
                  More Than a Deck. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                    A Portal.
                  </span>
                </h2>
                
                <p className="text-xl text-purple-800/70 leading-relaxed">
                  The Shankara Oracle is a complete cosmological system designed to bridge the gap between your human experience and your divine nature.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Sacred Decks</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-1">300+</div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Cards</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-1">18</div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Obsidian Stones</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-1">∞</div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Possibilities</div>
                  </div>
                </div>

                <Link href="/unboxing">
                  <Button variant="link" className="text-purple-700 font-bold text-lg p-0 h-auto hover:text-purple-900 mt-4">
                    See what's inside the box <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MASTER TRAINING CTA */}
        <section className="py-24 relative overflow-hidden bg-purple-900 text-white">
          <div className="absolute inset-0 bg-[url('/images/cosmic-stars.png')] opacity-30 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px] opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge className="bg-accent text-purple-900 hover:bg-accent mb-6 px-4 py-1 text-sm font-bold tracking-widest uppercase">
              The Master Course
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Master the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Divine Communication
              </span>
            </h2>
            
            <p className="text-xl text-purple-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Dive deep into the mysteries of the Shankara Oracle with our comprehensive Master Training. Learn to read the cards, interpret the stones, and navigate the sacred geometry of the board.
            </p>
            
            <Link href="/master-training">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-10 h-14 text-lg rounded-full font-bold shadow-lg shadow-purple-900/50">
                Explore the Training
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
