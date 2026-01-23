import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="The Shankara Experience | A Living Technology of Consciousness" 
        description="Awaken your intuition, heal your past, and master your destiny with The Shankara Oracle - a complete cosmological system."
      />
      
      {/* Global Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
        <img 
          src="/images/cosmic-nebula.jpg" 
          alt="Cosmic Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)]" />
      </div>

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
             <img 
              src="/images/hero-new.png" 
              alt="Shankara Oracle Hero" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm">
              The Sacred Oracle System
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              S H A N K A R A
            </h1>
            
            <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide mb-8 max-w-4xl mx-auto leading-relaxed">
              A living technology of consciousness.<br />
              <span className="text-accent">Awaken your intuition, heal your past, and master your destiny.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-12">
              <Link href="/shop">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-16 text-xl rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
                  Get the Oracle
                </Button>
              </Link>
              <Link href="/videos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-16 text-xl rounded-full font-bold backdrop-blur-sm gap-3">
                  <Play className="w-6 h-6 fill-current" /> Watch Trailer
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* MORE THAN A DECK SECTION */}
        <section className="py-24 relative bg-black/40 backdrop-blur-sm border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
                <img 
                  src="/images/shakti-cube-full.png" 
                  alt="Shankara Oracle Box Set" 
                  className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                  More Than a Deck.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">A Portal.</span>
                </h2>
                
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  The Shankara Oracle is a complete cosmological system designed to bridge the gap between your human experience and your divine nature.
                </p>
                
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  With 300+ cards, sacred geometry boards, and obsidian stones, it offers a depth of guidance that goes beyond traditional tarot. It doesn't just predict the future; it helps you create it.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1">4</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Sacred Decks</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1">300+</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Cards</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1">18</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Obsidian Stones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AWAKEN YOUR INNER MASTER */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Awaken Your Inner Master</h2>
              <p className="text-xl text-white/80">
                Whether you are a beginner or an advanced practitioner, Shankara meets you where you are and takes you deeper.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clarify Your Path",
                  desc: "Cut through confusion and see your life's trajectory with crystal clear vision.",
                  image: "/images/cosmic-bg-1.webp"
                },
                {
                  title: "Heal Deep Patterns",
                  desc: "Identify and release karmic blocks that have been holding you back for lifetimes.",
                  image: "/images/cosmic-bg-2.webp"
                },
                {
                  title: "Empower Your Intuition",
                  desc: "Strengthen your direct connection to Source and trust your inner guidance.",
                  image: "/images/cosmic-smoke.jpg"
                }
              ].map((item, i) => (
                <Card key={i} className="bg-black/40 border-white/10 overflow-hidden group hover:border-accent/50 transition-colors">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-8 text-center relative z-20">
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* MASTER COURSE SECTION */}
        <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black/80 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <Badge className="bg-accent text-black hover:bg-white px-4 py-1">The Master Course</Badge>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                  Master the Art of <br />
                  <span className="text-accent">Divine Communication</span>
                </h2>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Dive deep into the mysteries of the Shankara Oracle with our comprehensive Master Training. Learn to read the cards, interpret the stones, and navigate the sacred geometry of the board.
                </p>

                <ul className="space-y-4">
                  {[
                    "In-depth video lessons with Master Teachers",
                    "Live Q&A sessions and community support",
                    "Comprehensive study materials and guidebooks",
                    "Certification upon completion"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <Check className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/certification">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 mt-4 font-bold">
                    Explore the Training
                  </Button>
                </Link>
              </div>
              
              <div className="lg:w-1/2 relative">
                <img 
                  src="/images/Shankaramastercourse-3.png" 
                  alt="Shankara Master Course" 
                  className="w-full rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* THE SACRED TECHNOLOGY */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Sacred Technology</h2>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src="/images/oracle-board.png" 
                  alt="Shankara Oracle Board" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
              <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">The Oracle Board</h3>
                  <p className="text-white/70 leading-relaxed">
                    A sacred geometry grid that maps the cosmos. Place your cards and cast your stones to reveal the hidden patterns of your life.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">The Obsidian Stones</h3>
                  <p className="text-white/70 leading-relaxed">
                    18 hand-engraved obsidian stones that connect you to the earth's wisdom. Cast them onto the board to receive direct guidance.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Shakti's Cube</h3>
                  <p className="text-white/70 leading-relaxed">
                    A unique divination tool that brings the element of divine chance into your readings. Roll the cube for clarity and direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">What Seekers Are Saying</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "Shankara has completely transformed my spiritual practice. The depth of insight I get from this system is unlike anything else.",
                  author: "Sarah J.",
                  role: "Intuitive Healer"
                },
                {
                  text: "The Master Course gave me the confidence to start my own reading business. I'm now helping others find their path.",
                  author: "Michael R.",
                  role: "Certified Shankara Master"
                },
                {
                  text: "Beautifully crafted and incredibly powerful. You can feel the energy of this oracle the moment you open the box.",
                  author: "Elena T.",
                  role: "Yoga Teacher"
                }
              ].map((t, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-8 relative">
                  <div className="text-accent text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                  <p className="text-white/80 leading-relaxed mb-6 relative z-10 italic">
                    {t.text}
                  </p>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-accent">{t.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-purple-900/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Begin Your Journey
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              The Shankara Oracle is waiting to reveal its secrets to you. Are you ready to listen?
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 py-8 text-2xl rounded-full font-bold shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform">
                Get The Oracle
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
