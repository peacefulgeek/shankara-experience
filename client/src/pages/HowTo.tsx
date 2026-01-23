import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Download, Star } from "lucide-react";

export default function HowTo() {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white selection:bg-accent selection:text-white">
      {/* Fixed Cosmic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/cosmic-bg-1.webp')] bg-cover bg-center opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0514] via-transparent to-[#0a0514]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="py-8 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#0a0514]/80">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/shop">
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6">
                  Get the System
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -z-10" />
          
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium tracking-wide uppercase text-yellow-100">Beginner or Advanced • Solo or With Friends</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight drop-shadow-2xl">
              How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Shankara</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-12">
              Unlock the wisdom of the cosmos in 5 simple steps. Whether you seek daily guidance or deep transformation, the Shankara system meets you exactly where you are.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 rounded-full text-lg gap-2 shadow-lg hover:shadow-xl transition-all">
                <Play className="w-5 h-5 fill-current" />
                Watch Tutorial
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white h-14 px-8 rounded-full text-lg gap-2">
                <Download className="w-5 h-5" />
                Download Guide
              </Button>
            </div>
          </div>
        </section>

        {/* The Infographic Steps */}
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a103c]/50">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-purple-500/5 pointer-events-none" />
              
              {/* Infographic Image */}
              <img 
                src="/images/how-to-infographic.png" 
                alt="5 Steps to Shankara: Cast Stones, Follow Arrows, Read Guidance, Draw Cards, Roll Die" 
                className="w-full h-auto relative z-10"
              />
            </div>

            {/* Detailed Text Breakdown (SEO & Accessibility) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {[
                {
                  step: "01",
                  title: "Cast the Stones",
                  desc: "Place the decks on the board and gently throw the 18 sacred oracle stones into the center. Let your energy guide their landing."
                },
                {
                  step: "02",
                  title: "Follow the Arrows",
                  desc: "Observe where the arrows on the stones point. Do they point to a symbol on the board? Or to one of the oracle decks?"
                },
                {
                  step: "03",
                  title: "Read the Guidance",
                  desc: "Consult the Book of Meanings for the symbols the stones landed on. This is your foundational message from the universe."
                },
                {
                  step: "04",
                  title: "Draw Oracle Cards",
                  desc: "If an arrow points toward a deck, draw a card from that specific deck (Harvest, Sky, etc.) for deeper insight."
                },
                {
                  step: "05",
                  title: "Roll the Die",
                  desc: "For final clarification, roll Shakti's Cube. It summons the divine feminine energy to bless your reading."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                  <span className="text-4xl font-display font-bold text-white/10 group-hover:text-accent/20 transition-colors block mb-4">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              The Shankara Experience is waiting to reveal the wisdom that already lives inside you.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white h-16 px-12 rounded-full text-xl shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                Get Your Oracle System
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
