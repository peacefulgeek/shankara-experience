import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Check, ArrowRight, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Unboxing() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Unboxing Shankara | What's Inside" 
        description="Explore the sacred components of the Shankara Oracle system: 4 decks, 18 obsidian stones, the Oracle Board, and Shakti's Cube."
      />

      <Navigation />

      <main>
        {/* HERO - DARK COSMIC */}
        <section className="bg-cosmic-dark pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-purple-500 text-purple-200 px-4 py-1 text-sm tracking-widest uppercase bg-purple-900/30 backdrop-blur-md">
              <Box className="w-3 h-3 mr-2 text-accent" /> Inside the Box
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight glow-text">
              The Sacred <br /> Components
            </h1>
            
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto mb-10 font-light">
              Every element of the Shankara Oracle is crafted with intention to serve as a bridge between the physical and the divine.
            </p>
          </div>
        </section>

        {/* COMPONENT 1: THE DECKS - LIGHT (YANG) */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              
              {/* Left Side - 4 Decks Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-purple-50 aspect-[4/3]">
                  <img src="https://shankara-pull.b-cdn.net/images/Shankara4Decks.webp" 
                  loading="lazy" alt="The 4 Sacred Decks" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Right Side - Text */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-display font-bold text-purple-100">01</span>
                  <h2 className="text-4xl font-display font-bold text-purple-900">The 4 Sacred Decks</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over 300 cards divided into four distinct decks, each serving a unique purpose in your reading. From the Master Deck that sets the theme, to the Alchemy and Release decks that guide your transformation, and the new Sacred Action Cards.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-purple-900 font-medium p-3 bg-purple-50 rounded-lg">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    Master Deck: Ascended Masters & Guides
                  </li>
                  <li className="flex items-center text-purple-900 font-medium p-3 bg-blue-50 rounded-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Alchemy Deck: Transformation & Shift
                  </li>
                  <li className="flex items-center text-purple-900 font-medium p-3 bg-pink-50 rounded-lg">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    Release Deck: Clearing Blockages
                  </li>
                  <li className="flex items-center text-purple-900 font-medium p-3 bg-yellow-50 rounded-lg">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                    Sacred Action Cards: Practical Steps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMPONENT 2: STONES & CUBE - DARK (YIN) */}
        <section className="py-24 bg-cosmic-dark relative overflow-hidden">
          <div className="container mx-auto px-4">
             <div className="flex items-center gap-4 mb-12">
               <span className="text-6xl font-display font-bold text-purple-900/50">02</span>
               <h2 className="text-4xl font-display font-bold text-white">Stones & Cube</h2>
             </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* Left Side - Stones */}
              <div className="space-y-6">
                {/* STRICTLY UNIFORM CONTAINER */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] border border-white/10 aspect-[4/3] w-full bg-black/40 group">
                   <img 
                     src="https://shankara-pull.b-cdn.net/images/ShankaraStones.webp" 
                     loading="lazy" 
                     alt="18 Obsidian Stones" 
                     className="w-full h-full object-contain p-8 transform group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                
                <p className="text-lg text-purple-200/80 leading-relaxed">
                  18 Hand-engraved obsidian stones connect you to deep earth wisdom. Cast them onto the board to receive direct guidance on timing, elements, and planetary influences.
                </p>
              </div>

              {/* Right Side - Cube */}
              <div className="space-y-6">
                {/* STRICTLY UNIFORM CONTAINER */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,20,147,0.3)] border border-white/10 aspect-[4/3] w-full bg-black/40 group">
                   <img 
                     src="https://shankara-pull.b-cdn.net/images/ShaktisCube.webp" 
                     loading="lazy" 
                     alt="Shakti's Cube" 
                     className="w-full h-full object-contain p-12 transform group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                
                <p className="text-lg text-purple-200/80 leading-relaxed">
                  Shakti's Cube adds a dimension of divine feminine power, unlocking deeper layers of intuition and creative force within your readings.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* COMPONENT 3: BOARD & BOOKS - LIGHT (YANG) */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
               <span className="text-6xl font-display font-bold text-purple-100">03</span>
               <h2 className="text-4xl font-display font-bold text-purple-900">Board & Wisdom</h2>
             </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* Left Side - Board */}
              <div className="space-y-6">
                {/* STRICTLY UNIFORM CONTAINER */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/3] w-full group border-4 border-purple-50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-blue-100/50 opacity-50" />
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/ShankaraBoard.webp" 
                    loading="lazy" 
                    alt="Oracle Board" 
                    className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  The Oracle Board is a sacred geometry grid mapping the cosmos. It's an energetic field where your stones land to reveal hidden patterns.
                </p>
              </div>

              {/* Right Side - Books */}
              <div className="space-y-6">
                {/* STRICTLY UNIFORM CONTAINER */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/3] w-full group border-4 border-purple-50">
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/ShankaraBOOKSTWO.webp" 
                    loading="lazy" 
                    alt="Shankara Books" 
                    className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Comprehensive guidebooks provide deep insights into every card, stone, and board position, empowering you to interpret messages with clarity and confidence.
                </p>
                
                <div className="pt-8">
                  <Link href="/how">
                    <Button 
                      size="lg"
                      className="w-full bg-[#ff00ff] hover:bg-[#d900d9] text-white font-bold text-xl py-8 rounded-full shadow-[0_10px_40px_rgba(255,0,255,0.4)] hover:shadow-[0_15px_50px_rgba(255,0,255,0.6)] transition-all transform hover:-translate-y-1 group"
                    >
                      Learn How To Use Shankara
                      <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* THE SHANKARA BOX SECTION */}
        <section className="py-24 bg-[#1a0b2e] relative overflow-hidden border-t border-white/10">
           {/* Background decorative elements */}
           <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 mix-blend-overlay" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-16 max-w-4xl mx-auto">
               <Badge variant="outline" className="border-pink-400 text-pink-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-pink-900/30 backdrop-blur-md mb-6">
                 <Package className="w-3 h-3 mr-2 text-pink-400" /> The Vessel
               </Badge>
               <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Shankara Box</h2>
               <p className="text-lg text-purple-200/80 leading-relaxed">
                 More than just packaging, the Shankara Box is a sacred vessel designed to hold the high vibrations of your Oracle. Adorned with channeled symbols and vibrant cosmic art, it serves as a beautiful altar piece in your home, protecting your tools and inviting divine energy into your space.
               </p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {/* Box Image 1: Top */}
               <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 group bg-black/20">
                 <img 
                   src="/images/box-top.webp" 
                   loading="lazy" 
                   alt="Shankara Box Top View" 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
               </div>
               {/* Box Image 2: Side 1 */}
               <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 group bg-black/20">
                 <img 
                   src="/images/box-side-1.webp" 
                   loading="lazy" 
                   alt="Shankara Box Side Detail" 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
               </div>
               {/* Box Image 3: Side 2 */}
               <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 group bg-black/20">
                 <img 
                   src="/images/box-side-2.webp" 
                   loading="lazy" 
                   alt="Shankara Box Side Art" 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
               </div>
               {/* Box Image 4: Bottom */}
               <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 group bg-black/20">
                 <img 
                   src="/images/box-bottom.webp" 
                   loading="lazy" 
                   alt="Shankara Box Bottom Information" 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
               </div>
             </div>
           </div>
        </section>

        {/* CTA - DARK COSMIC */}
        <section className="py-24 bg-cosmic-dark text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to begin your journey?
            </h2>
            <Link href="/shop">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-12 h-16 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all transform hover:scale-105">
                Get the Full System
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
