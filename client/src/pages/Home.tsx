import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SystemShowcase from "@/components/SystemShowcase";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Introduction / About Snippet */}
        <section className="py-24 bg-black relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 border border-primary/30 transform translate-x-4 translate-y-4 rounded-sm" />
                <img 
                  src="/images/paul-portrait-main.jpg" 
                  alt="Paul Wagner (Krishna Kalesh)" 
                  className="relative z-10 w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <h3 className="text-primary tracking-widest uppercase text-sm font-semibold mb-4">The Creator</h3>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Krishna Kalesh</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                  "Shankara is for all walks of life, all belief systems, and every religion. I created The Shankara Oracle to help you reduce the possibility of pain and separateness, and achieve your full potential."
                </p>
                <p className="text-gray-400 leading-relaxed mb-10 font-light">
                  Also known as Paul Wagner, Krishna Kalesh is a spiritual teacher with 30+ years as a devotee of Amma. He merges ancient wisdom with modern intuition to help you engineer an inner strength and awareness.
                </p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                  Read His Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        <SystemShowcase />

        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/master-card-spread.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </div>
          
          <div className="container relative z-10 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8">Awaken Your Inner Master</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
              Get the complete Shankara Oracle system today. The most comprehensive tool for your spiritual evolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-8 rounded-full text-xl">
                Buy Shankara Now - $99
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest">Limited Time Special Offer (Regular $300)</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
