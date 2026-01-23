import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SystemShowcase from "@/components/SystemShowcase";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Introduction / About Snippet - COSMIC THEME */}
        <section className="py-40 relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="relative group">
                {/* Glowing Frame */}
                <div className="absolute inset-0 border-2 border-primary/50 rounded-3xl transform rotate-3 scale-105 blur-sm opacity-70 transition-all duration-500 group-hover:rotate-0 group-hover:scale-100" />
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(255,0,255,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10 mix-blend-overlay" />
                  <img 
                    src="/images/paul-portrait-main.jpg" 
                    alt="Paul Wagner (Krishna Kalesh)" 
                    className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="glass-card p-12 rounded-[3rem]">
                <h3 className="text-accent tracking-[0.3em] uppercase text-sm font-bold mb-8 drop-shadow-md">The Creator</h3>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 drop-shadow-lg">Krishna Kalesh</h2>
                <p className="text-white/90 text-xl leading-relaxed mb-8 font-light drop-shadow-md">
                  "Shankara is for all walks of life, all belief systems, and every religion. I created The Shankara Oracle to help you reduce the possibility of pain and separateness, and achieve your full potential."
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-12 font-light">
                  Also known as Paul Wagner, Krishna Kalesh is a spiritual teacher with 30+ years as a devotee of Amma. He merges ancient wisdom with modern intuition.
                </p>
                <Button variant="outline" className="border-2 border-primary text-white hover:bg-primary hover:text-white rounded-full px-10 py-6 text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_40px_rgba(255,0,255,0.5)]">
                  Read His Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        <SystemShowcase />
        
        <FeatureSection />

        {/* Call to Action - COSMIC MEDITATION */}
        <section className="py-48 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/cosmic-meditation.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          </div>
          
          <div className="container relative z-10 text-center px-4">
            <div className="glass-panel max-w-4xl mx-auto p-16 md:p-24 rounded-[4rem]">
              <h2 className="text-5xl md:text-7xl font-light text-white mb-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                Awaken Your <span className="text-primary font-normal">Inner Master</span>
              </h2>
              <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-16 font-light drop-shadow-md">
                Get the complete Shankara Oracle system today. The most comprehensive tool for your spiritual evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-16 py-12 rounded-full text-3xl font-bold shadow-[0_0_60px_rgba(255,0,255,0.5)] hover:shadow-[0_0_80px_rgba(255,0,255,0.7)] transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/30">
                  Buy Shankara Now - $99
                </Button>
              </div>
              <p className="mt-10 text-base text-white/60 uppercase tracking-widest font-medium">Limited Time Special Offer (Regular $300)</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
