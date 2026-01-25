import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, Sparkles, Wind, Eye, ArrowRight } from "lucide-react";

interface MantraPracticePromoProps {
  variant?: "full" | "compact";
}

export default function MantraPracticePromo({ variant = "full" }: MantraPracticePromoProps) {
  if (variant === "compact") {
    return (
      <section className="py-16 bg-gradient-to-r from-purple-900/40 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-10 mix-blend-screen" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 shrink-0">
                <Volume2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  Sacred Mantra Practice
                </h3>
                <p className="text-purple-200/80">
                  Transform your consciousness with guided Sanskrit mantra meditation
                </p>
              </div>
            </div>
            
            <Link href="/mantra-practice">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 h-12 rounded-full font-bold shadow-[0_0_20px_rgba(255,0,255,0.3)] whitespace-nowrap">
                Start Practice <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0b2e] to-cosmic-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-15 mix-blend-screen" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/40 to-accent/20 rounded-3xl p-8 md:p-12 border border-purple-500/20 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <Badge className="bg-accent/20 text-accent border border-accent/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
                  <Sparkles className="w-3 h-3 mr-2" /> Sacred Sound Practice
                </Badge>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  Mantra <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Practice</span>
                </h2>
                
                <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
                  Transform your consciousness through the sacred vibrations of Sanskrit mantras combined with breathing exercises and visualization.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Volume2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">6 Sacred Mantras</h3>
                  <p className="text-purple-200/70 text-sm">
                    Om, Om Namah Shivaya, Gayatri, and more with audio playback
                  </p>
                </div>
                
                <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Breathing Exercises</h3>
                  <p className="text-purple-200/70 text-sm">
                    4-7-8 Breath, Box Breathing, and Nadi Shodhana pranayama
                  </p>
                </div>
                
                <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Visualization Prompts</h3>
                  <p className="text-purple-200/70 text-sm">
                    Guided inner journeys to deepen your meditation practice
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link href="/mantra-practice">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 h-14 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,255,0.6)] transition-all">
                    Begin Your Practice <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-purple-300/60 text-sm mt-4">
                  Free guided meditation • No account required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
