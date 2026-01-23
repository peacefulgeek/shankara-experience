import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent-foreground/90 tracking-wide uppercase">
                The Sacred System for Self-Mastery
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-white drop-shadow-lg">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-400 to-accent animate-gradient">
                Highest Potential
              </span>
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              More than an oracle—it's a complete spiritual ecosystem. The Shankara Board, Sacred Stones, and Master Cards work together to reveal your path, align your energy, and connect you with the divine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/shop">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all duration-300 group">
                  Get the Oracle System
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/master-training">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white px-8 h-14 text-lg rounded-full backdrop-blur-sm transition-all duration-300 group">
                  <Play className="mr-2 w-5 h-5 fill-current opacity-80" />
                  Watch the Trailer
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                <span>In Stock & Ready to Ship</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000 animate-fade-in-up delay-200">
             {/* Main Product Image */}
             <div className="relative w-full max-w-[600px] transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                {/* Glow behind the image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-full blur-[80px] -z-10 opacity-60" />
                
                <img 
                  src="/images/hero-new.png" 
                  alt="The Shankara Experience Complete System" 
                  className="w-full h-auto drop-shadow-2xl relative z-10"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down" />
        </div>
      </div>
    </div>
  );
}
