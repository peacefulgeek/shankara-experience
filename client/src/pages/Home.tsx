import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Play, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Home" 
        description="The Shankara Oracle: A sacred technology for self-mastery and divine connection. Discover your path with ancient wisdom."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Hero Background Video or Image Placeholder */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('/images/purple-nebula.jpg')] bg-cover bg-center opacity-40 mix-blend-screen animate-pulse-slow" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="animate-fade-in-up">
              <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                The Sacred Oracle System
              </Badge>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-8 leading-tight drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]">
                SHANKARA
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md">
                A living technology of consciousness. <br className="hidden md:block" />
                Awaken your intuition, heal your past, and master your destiny.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-16 text-xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 w-full sm:w-auto font-bold group">
                  Get the Oracle <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 h-16 text-xl rounded-full w-full sm:w-auto font-bold backdrop-blur-sm transition-all">
                  <Play className="mr-2 w-5 h-5 fill-current" /> Watch Trailer
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/20 blur-xl rounded-2xl group-hover:bg-accent/30 transition-all duration-700" />
                <img 
                  src="/images/shankara-oracle-intimate-less-height.png" 
                  alt="Shankara Oracle Deck" 
                  className="relative rounded-2xl shadow-2xl border border-white/10 transform group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-lg">
                  More Than a Deck. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">A Portal.</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  The Shankara Oracle is a complete cosmological system designed to bridge the gap between your human experience and your divine nature.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  With 300+ cards, sacred geometry boards, and obsidian stones, it offers a depth of guidance that goes beyond traditional tarot. It doesn't just predict the future; it helps you create it.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {[
                    { label: "Sacred Decks", value: "4" },
                    { label: "Cards", value: "300+" },
                    { label: "Obsidian Stones", value: "18" },
                    { label: "Possibilities", value: "∞" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-sm">
                      <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                      <div className="text-xs uppercase tracking-wider text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-purple-900/20 backdrop-blur-md border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-bold text-white mb-6">Awaken Your Inner Master</h2>
              <p className="text-white/70 text-lg">
                Whether you are a beginner or an advanced practitioner, Shankara meets you where you are and takes you deeper.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clarify Your Path",
                  desc: "Cut through confusion and see your life's trajectory with crystal clear vision.",
                  icon: Sparkles
                },
                {
                  title: "Heal Deep Patterns",
                  desc: "Identify and release karmic blocks that have been holding you back for lifetimes.",
                  icon: Star
                },
                {
                  title: "Empower Your Intuition",
                  desc: "Strengthen your direct connection to Source and trust your inner guidance.",
                  icon: Play
                }
              ].map((feature, i) => (
                <div key={i} className="glass-panel p-10 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 drop-shadow-[0_0_20px_rgba(255,0,255,0.3)]">
              Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Journey</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-2xl mx-auto mb-12 drop-shadow-md">
              The Oracle is waiting to speak to you. Are you ready to listen?
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-16 py-8 text-2xl rounded-full shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_100px_rgba(255,255,255,0.4)] transition-all duration-300 font-bold">
              Shop the Collection
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
