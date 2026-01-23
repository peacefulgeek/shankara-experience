import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SystemShowcase from "@/components/SystemShowcase";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      {/* 
         GLOBAL FIXED BACKGROUND 
         This is the fix. A single, fixed layer that sits behind EVERYTHING.
         No matter where you scroll, you see this rich cosmic texture.
         No more black gaps.
      */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#1e1b4b]" />
        <img 
          src="/images/cosmic-nebula.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" 
        />
        {/* Animated grain/noise for texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <main>
        <Hero />
        
        {/* THE CREATOR: Reimagined with "Sacred Frame" Mounting */}
        <section className="py-40 relative z-10">
          {/* Subtle connecting line from Hero */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left: Paul's "Golden Card" Portrait */}
              <div className="lg:col-span-5 relative group perspective-1000 flex justify-center lg:justify-end">
                {/* 
                   THE SACRED FRAME:
                   Fixed to ensure Paul's head is not cut off.
                   Removed 'overflow-hidden' from the inner container and adjusted padding/margins.
                */}
                <div className="relative z-20 w-full max-w-md aspect-[4/5] bg-gradient-to-br from-[#F5E6CA] via-[#D4AF37] to-[#AA8C2C] p-[2px] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 hover:rotate-y-2 hover:scale-[1.01]">
                   {/* Inner Border (The "Card" edge) */}
                   <div className="w-full h-full bg-white rounded-[10px] relative border-4 border-[#D4AF37]/30 overflow-hidden">
                      <img 
                        src="/images/paul-2.png" 
                        alt="Paul Wagner Namaste" 
                        className="w-full h-full object-cover object-top" 
                      />
                      {/* Inner Gold Inset Shadow to make it look recessed */}
                      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(212,175,55,0.4)] pointer-events-none" />
                      
                      {/* Nameplate Overlay - elegantly placed at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h3 className="text-3xl font-light text-white tracking-wide font-serif">Paul Wagner</h3>
                        <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mt-1 font-bold">The Guide</p>
                      </div>
                   </div>
                </div>
                
                {/* REMOVED: Secondary floating photos that were causing clutter behind the main portrait */}
              </div>
              
              {/* Right: The Message in a Glass Vessel */}
              <div className="lg:col-span-7">
                <div className="glass-vessel rounded-[3rem] p-12 md:p-16 relative border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                  {/* Decorative quote mark */}
                  <div className="absolute top-10 left-10 text-9xl leading-none text-primary/20 font-serif">"</div>

                  <div className="relative z-10 pl-8">
                    <h3 className="text-gold-gradient tracking-[0.3em] uppercase text-xs font-bold mb-8">A Message from the Heart</h3>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 leading-[1.1]">
                      I created Shankara to help you <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-normal">remember who you are</span>.
                    </h2>
                    
                    <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed">
                      <p>
                        For over 30 years, I've walked the path of devotion as a disciple of Amma. I've seen the confusion, the pain, and the longing in thousands of eyes.
                      </p>
                      <p>
                        The Shankara Oracle isn't just a deck of cards. It is a <strong className="text-white font-normal">living technology of consciousness</strong>—a bridge between ancient Vedic wisdom and your modern life. It cuts through the noise to give you the clarity you've been praying for.
                      </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6 items-center">
                      <Button variant="outline" className="border-primary/50 text-white hover:bg-primary hover:text-white rounded-full px-10 py-7 text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_40px_rgba(255,0,255,0.4)] bg-transparent backdrop-blur-sm">
                        Read My Story
                      </Button>
                      <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all">
                          <Play size={20} className="ml-1 fill-current" />
                        </div>
                        <span className="text-sm tracking-widest uppercase">Watch Interview</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY: The "Global Awakening" - Mounted Editorial Cards */}
        <section className="py-32 relative overflow-hidden">
           {/* Cinematic Background */}
           <div className="absolute inset-0 z-0">
             <img src="/images/DSC_2054-scaled.jpg" alt="Community Audience" className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay" />
           </div>

           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center max-w-4xl mx-auto mb-20">
               <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                 Join the <span className="text-gold-gradient font-normal">Global Awakening</span>
               </h2>
               <p className="text-xl text-white/60 font-light">
                 Connect with a worldwide community of seekers, healers, and masters.
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               {/* Editorial Card 1 - Mounted on White Card Stock */}
               <div className="group relative aspect-[3/4] bg-white p-2 rounded-[1rem] shadow-xl transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                 <div className="w-full h-full relative overflow-hidden rounded-[0.5rem]">
                    <img src="/images/paultightgroup.png" alt="Master Classes" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl text-white font-normal mb-1">Master Classes</h3>
                      <p className="text-white/80 text-sm">Deep dive workshops.</p>
                    </div>
                 </div>
               </div>

               {/* Editorial Card 2 - Center Focus - Gold Border */}
               <div className="group relative aspect-[3/4] bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] p-[3px] rounded-[1rem] shadow-2xl md:-mt-12 transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer z-10">
                 <div className="w-full h-full relative overflow-hidden rounded-[0.8rem] bg-white">
                    <img src="/images/paulreadingshotelpurpleshirt.jpeg" alt="Live Events" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl text-[#D4AF37] font-normal mb-1">Live Events</h3>
                      <p className="text-white/80 text-sm">Electric energy in person.</p>
                    </div>
                 </div>
               </div>

               {/* Editorial Card 3 - Mounted on White Card Stock */}
               <div className="group relative aspect-[3/4] bg-white p-2 rounded-[1rem] shadow-xl transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                 <div className="w-full h-full relative overflow-hidden rounded-[0.5rem]">
                    <img src="/images/DSC_2054-scaled.jpg" alt="Global Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl text-white font-normal mb-1">Global Tribe</h3>
                      <p className="text-white/80 text-sm">Support, love, and wisdom.</p>
                    </div>
                 </div>
               </div>
             </div>
             
             {/* REMOVED: "Find an Event Near You" button as requested */}
           </div>
        </section>

        <SystemShowcase />
        
        <FeatureSection />

        {/* CALL TO ACTION: The Final Invitation */}
        <section className="py-48 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/cosmic-meditation.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-40 mix-blend-screen"
            />
          </div>
          
          <div className="container relative z-10 text-center px-4">
            <div className="glass-vessel max-w-5xl mx-auto p-16 md:p-24 rounded-[4rem] border border-white/10 shadow-2xl bg-black/20 backdrop-blur-xl">
              <h2 className="text-5xl md:text-8xl font-light text-white mb-10 tracking-tighter">
                Awaken Your <span className="text-gold-gradient font-normal">Mastery</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-16 font-light">
                The most comprehensive tool for your spiritual evolution is waiting for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-16 py-12 rounded-full text-3xl font-bold shadow-[0_0_60px_rgba(255,0,255,0.4)] hover:shadow-[0_0_100px_rgba(255,0,255,0.6)] transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                  Get the Box Set
                </Button>
                <span className="text-2xl font-light text-white/60 line-through decoration-red-500/50">$300</span>
                <span className="text-4xl font-bold text-white">$99</span>
              </div>
              <p className="mt-12 text-sm text-white/40 uppercase tracking-widest font-medium">Limited Time Special Offer</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
