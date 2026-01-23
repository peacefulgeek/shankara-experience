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
        
        {/* Creator Section - Paul Wagner */}
        <section className="py-32 relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              
              {/* Left: Paul's Image Collage */}
              <div className="relative group">
                 {/* Main Portrait */}
                <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(255,0,255,0.3)] border-4 border-white/10 transform transition-transform duration-700 hover:scale-[1.02]">
                  <img 
                    src="/images/paul-2.png" 
                    alt="Paul Wagner Namaste" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-bold tracking-widest uppercase text-accent mb-2">The Creator</p>
                    <h3 className="text-3xl font-light">Paul Wagner</h3>
                  </div>
                </div>

                {/* Floating Action Shot 1 */}
                <div className="absolute -bottom-12 -right-12 z-30 w-48 md:w-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform rotate-6 hover:rotate-0 transition-all duration-500">
                  <img src="/images/paulreadingredshirt.jpg" alt="Paul Reading" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating Action Shot 2 */}
                <div className="absolute -top-12 -left-12 z-10 w-40 md:w-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform -rotate-6 hover:rotate-0 transition-all duration-500 opacity-80">
                  <img src="/images/paulholdingwomanhand.png" alt="Connection" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="glass-card p-12 rounded-[3rem] relative z-20">
                <h3 className="text-accent tracking-[0.3em] uppercase text-sm font-bold mb-6 drop-shadow-md">A Message from the Heart</h3>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 drop-shadow-lg leading-tight">
                  "I created Shankara to help you <span className="text-primary font-normal">remember who you are</span>."
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-light drop-shadow-md">
                  For over 30 years, I've walked the path of devotion as a disciple of Amma. The Shankara Oracle is the culmination of that journey—a bridge between ancient Vedic wisdom and your modern life.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                  It's not just a deck of cards. It's a living system that speaks directly to your soul, cutting through the noise to give you the clarity you've been praying for.
                </p>
                <Button variant="outline" className="border-2 border-primary text-white hover:bg-primary hover:text-white rounded-full px-10 py-6 text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_40px_rgba(255,0,255,0.5)]">
                  Read My Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community / Social Proof Section */}
        <section className="py-24 relative overflow-hidden">
           {/* Background Image */}
           <div className="absolute inset-0 z-0">
             <img src="/images/DSC_2054-scaled.jpg" alt="Community Audience" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
           </div>

           <div className="container mx-auto px-4 relative z-10 text-center">
             <h2 className="text-4xl md:text-6xl font-light text-white mb-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
               Join the <span className="text-primary font-normal">Global Awakening</span>
             </h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               {/* Community Card 1 */}
               <div className="glass-panel p-2 rounded-3xl overflow-hidden group">
                 <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                   <img src="/images/paultightgroup.png" alt="Master Class Group" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   <div className="absolute bottom-4 left-4 text-left">
                     <p className="text-white font-bold text-lg">Master Classes</p>
                     <p className="text-white/70 text-sm">Deep dive workshops</p>
                   </div>
                 </div>
               </div>

               {/* Community Card 2 */}
               <div className="glass-panel p-2 rounded-3xl overflow-hidden group">
                 <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                   <img src="/images/paulreadingshotelpurpleshirt.jpeg" alt="Intimate Readings" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   <div className="absolute bottom-4 left-4 text-left">
                     <p className="text-white font-bold text-lg">Live Events</p>
                     <p className="text-white/70 text-sm">Experience the energy in person</p>
                   </div>
                 </div>
               </div>

               {/* Community Card 3 */}
               <div className="glass-panel p-2 rounded-3xl overflow-hidden group">
                 <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                   <img src="/images/DSC_2054-scaled.jpg" alt="Conference" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   <div className="absolute bottom-4 left-4 text-left">
                     <p className="text-white font-bold text-lg">Global Community</p>
                     <p className="text-white/70 text-sm">Connect with thousands of seekers</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-12 py-8 rounded-full text-xl font-bold shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300">
               Find an Event Near You
             </Button>
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
