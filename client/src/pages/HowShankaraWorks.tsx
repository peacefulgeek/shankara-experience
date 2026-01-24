import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight, Download, Star, Heart, HelpCircle, Users, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function HowShankaraWorks() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#2a1b3d]">
      <SEO 
        title="How Shankara Works | Sacred Rituals & Instructions" 
        description="Learn how to use The Shankara Oracle. A step-by-step guide to casting stones, interpreting symbols, and connecting with divine wisdom."
      />

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-24 relative overflow-hidden min-h-[80vh] flex items-center bg-[#2a1b3d]">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-purple-400 text-purple-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-purple-900/30 backdrop-blur-md mx-auto">
                <Sparkles className="w-3 h-3 mr-2 text-accent" /> The Sacred Ritual
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                How Shankara <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300 glow-text">
                  Works
                </span>
              </h1>
              
              <p className="text-xl text-purple-200/90 leading-relaxed font-light max-w-2xl mx-auto">
                Sessions with The Shankara Oracle are fun, satisfying, and truly divine experiences. Learn how to source deep, transformative answers from the Universe.
              </p>

              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 rounded-full font-bold shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                  <Play className="w-4 h-4 mr-2 fill-current" /> Watch Video Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* STEP BY STEP GUIDE */}
        <section className="py-24 bg-[#1a0b2e] relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-2xl hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mb-6 group-hover:scale-110 transition-transform">1</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Set the Space</h3>
                <p className="text-purple-200/80 leading-relaxed">
                  Find a peaceful place in your home. Open The Shankara Setup & Play Booklet and set up your Shankara Oracle Board. This is your sacred altar for the session.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-2xl hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mb-6 group-hover:scale-110 transition-transform">2</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Cast the Stones</h3>
                <p className="text-purple-200/80 leading-relaxed">
                  Hold your questions in your heart. Intuitively select a few stones from the pouch, then drop them in the center of the board. Each stone carries a sacred symbol and directional arrows.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-2xl hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mb-6 group-hover:scale-110 transition-transform">3</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Read the Signs</h3>
                <p className="text-purple-200/80 leading-relaxed">
                  Some stones give specific messages through symbols. Others point to elements on the board or cards from the Sacred Oracle Decks. Look up meanings in The Book of Meanings.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* TIPS & VARIATIONS */}
        <section className="py-24 bg-[#2a1b3d] relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-display font-bold text-white">
                  Shankara <span className="text-accent">Tips & Swaps</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <BookOpen className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">The Book of Meanings</h4>
                      <p className="text-purple-200/80">Contains all channeled guidance for stones, words, and symbols. It is your Rosetta Stone for the divine language.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Sparkles className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Use Any Deck</h4>
                      <p className="text-purple-200/80">You can use The Shankara Oracle Decks or integrate your favorite Tarot and Oracle decks into the reading.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Shakti's Cube</h4>
                      <p className="text-purple-200/80">Roll Shakti's Cube at any point for clarity, insight, or a loving nudge from the Universe.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 bg-purple-900/10 rounded-3xl p-8 border border-white/5">
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-accent" /> Solo & With Friends
                </h3>
                <div className="space-y-6 text-lg text-purple-200/90 font-light">
                  <p>
                    Shankara is a wonderful solo experience for deep introspection, but it also shines as a group journey.
                  </p>
                  <p>
                    The board features placeholders for up to 4 players, though up to 8 can participate. It is the perfect adventure for family and friends hoping to elevate their consciousness and connect more profoundly.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10 text-white">
                      Download Setup Guide PDF
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Shankara was created for <span className="text-accent italic">YOU</span>.
            </h2>
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto mb-12">
              To serve and honor those seeking to awaken to their highest Selves, gain deep transformative answers, and live consciously in The Dharma.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-12 py-6 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
