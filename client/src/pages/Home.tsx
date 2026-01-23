import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play, ArrowRight, Star, Sparkles, Layers, BookOpen, Hexagon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="The Shankara Oracle | A Living Technology of Consciousness" 
        description="Awaken your intuition, heal your past, and master your destiny with The Shankara Oracle System."
      />

      {/* GLOBAL BACKGROUND - Deep Cosmic Void */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <div className="absolute inset-0 bg-[url('/images/cosmic-bg-main.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/10 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black/0 to-black/0" />
      </div>

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium tracking-wider text-white/80 uppercase">The Sacred Oracle System</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-fade-in-up delay-100">
              SHANKARA
            </h1>

            <p className="text-xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
              A living technology of consciousness.<br />
              <span className="text-accent font-normal">Awaken your intuition</span>, heal your past, and master your destiny.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
              <Link href="/shop">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-8 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  Get the Oracle
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-8 rounded-full backdrop-blur-sm transition-all hover:border-white">
                <Play className="w-5 h-5 mr-3 fill-current" /> Watch Trailer
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full" />
            </div>
          </div>
        </section>

        {/* BOARD SHOWCASE - RESIZED HEROIC */}
        <section className="py-0 relative z-20 -mt-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="relative w-full max-w-6xl mx-auto transform hover:scale-[1.02] transition-transform duration-700 ease-out">
              <div className="absolute -inset-10 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl rounded-full opacity-50" />
              <img 
                src="/images/oracle-board.png" 
                alt="The Shankara Oracle Board" 
                className="relative w-full h-auto drop-shadow-[0_0_50px_rgba(139,92,246,0.3)] rounded-lg"
              />
              
              {/* Floating Cards Decoration */}
              <img src="/images/card-back.png" alt="" className="absolute -top-10 -right-10 w-32 md:w-48 transform rotate-12 drop-shadow-2xl animate-float-slow hidden md:block" />
              <img src="/images/card-back.png" alt="" className="absolute -bottom-10 -left-10 w-32 md:w-48 transform -rotate-12 drop-shadow-2xl animate-float-delayed hidden md:block" />
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                  More Than a Deck.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">A Portal.</span>
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  The Shankara Oracle is a complete cosmological system designed to bridge the gap between your human experience and your divine nature.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  With 300+ cards, sacred geometry boards, and obsidian stones, it offers a depth of guidance that goes beyond traditional tarot. It doesn't just predict the future; it helps you create it.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-4xl font-bold text-accent mb-2">4</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Sacred Decks</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-4xl font-bold text-accent mb-2">300+</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Cards</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-4xl font-bold text-accent mb-2">18</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Obsidian Stones</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-4xl font-bold text-accent mb-2">∞</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Possibilities</div>
                  </div>
                </div>
              </div>

              {/* SHAKTI CUBE - NEW TRANSPARENT IMAGE */}
              <div className="w-full lg:w-1/2 relative flex justify-center">
                <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
                <img 
                  src="/images/shakti-cube-transparent.png" 
                  alt="Shakti's Cube" 
                  className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clarify Your Path",
                  desc: "Cut through confusion and see your life's trajectory with crystal clear vision.",
                  image: "/images/cosmic-nebula.jpg"
                },
                {
                  title: "Heal Deep Patterns",
                  desc: "Identify and release karmic blocks that have been holding you back for lifetimes.",
                  image: "/images/cosmic-bg-main.jpg"
                },
                {
                  title: "Empower Your Intuition",
                  desc: "Strengthen your direct connection to Source and trust your inner guidance.",
                  image: "/images/cosmic-nebula.jpg"
                }
              ].map((feature, i) => (
                <div key={i} className="group relative h-96 rounded-3xl overflow-hidden border border-white/10 cursor-pointer">
                  <div className="absolute inset-0">
                    <img src={feature.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MASTER TRAINING TEASER */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-900/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block px-4 py-1 rounded-full border border-accent/50 text-accent text-sm tracking-widest uppercase mb-4">
                The Master Course
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white">
                Master the Art of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Divine Communication</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Dive deep into the mysteries of the Shankara Oracle with our comprehensive Master Training. Learn to read the cards, interpret the stones, and navigate the sacred geometry of the board.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto py-8">
                {[
                  "In-depth video lessons with Master Teachers",
                  "Live Q&A sessions and community support",
                  "Comprehensive study materials and guidebooks",
                  "Certification upon completion"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-accent" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/training">
                <Button size="lg" className="bg-accent text-black hover:bg-accent/90 px-10 py-6 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  Explore the Training
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-display font-bold text-white mb-16">Voices from the Community</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Shankara has completely transformed how I make decisions. It's like having a direct line to my higher self.",
                  author: "Sarah J.",
                  role: "Healer"
                },
                {
                  quote: "The depth of this system is incredible. Every time I use the board, I discover something new about myself.",
                  author: "Michael R.",
                  role: "Teacher"
                },
                {
                  quote: "Finally, an oracle that combines astrology, numerology, and intuition in one seamless experience.",
                  author: "Elena M.",
                  role: "Astrologer"
                }
              ].map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
                  <div className="text-accent text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                  <p className="text-white/80 italic mb-6 relative z-10 leading-relaxed">{t.quote}</p>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-white/50">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
