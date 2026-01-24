import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Check, ArrowRight } from "lucide-react";
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
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-purple-50">
                  <img src="https://shankara-pull.b-cdn.net/images/Shankara4Decks.webp" alt="The 4 Sacred Decks" className="w-full h-full object-cover" />
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
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              {/* Left Side - Stones */}
              <div className="w-full md:w-1/2 space-y-6">
                 <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-display font-bold text-purple-900/50">02</span>
                  <h2 className="text-4xl font-display font-bold text-white">Stones & Cube</h2>
                </div>
                
                {/* Updated: Smaller container to match visual weight */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] border border-white/10 aspect-video w-full max-w-lg mx-auto flex items-center justify-center bg-black/40 group mb-6">
                   <img 
                     src="https://shankara-pull.b-cdn.net/images/ShankaraStones.webp" 
                     alt="18 Obsidian Stones" 
                     className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                
                <p className="text-lg text-purple-200/80 leading-relaxed text-center md:text-left">
                  18 Hand-engraved obsidian stones connect you to deep earth wisdom. Cast them onto the board to receive direct guidance on timing, elements, and planetary influences.
                </p>
              </div>

              {/* Right Side - Cube */}
              <div className="w-full md:w-1/2 space-y-6">
                 <div className="h-[88px] hidden md:block"></div> {/* Spacer to align with left title */}
                 
                {/* Updated: Smaller container to match visual weight */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,20,147,0.3)] border border-white/10 aspect-video w-full max-w-lg mx-auto flex items-center justify-center bg-black/40 group mb-6">
                   <img 
                     src="https://shankara-pull.b-cdn.net/images/ShaktisCube.webp" 
                     alt="Shakti's Cube" 
                     className="w-full h-full object-contain p-8 transform group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                
                <p className="text-lg text-purple-200/80 leading-relaxed text-center md:text-left">
                  Shakti's Cube adds a dimension of divine feminine power, unlocking deeper layers of intuition and creative force within your readings.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* COMPONENT 3: BOARD & BOOKS - LIGHT (YANG) */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              {/* Left Side - Board */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-display font-bold text-purple-100">03</span>
                  <h2 className="text-4xl font-display font-bold text-purple-900">Board & Wisdom</h2>
                </div>

                {/* Updated: Smaller container to match visual weight */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-video w-full max-w-lg mx-auto flex items-center justify-center p-0 group border-4 border-purple-50 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-blue-100/50 opacity-50" />
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/ShankaraBoard.webp" 
                    alt="Oracle Board" 
                    className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                  The Oracle Board is a sacred geometry grid mapping the cosmos. It's an energetic field where your stones land to reveal hidden patterns.
                </p>
              </div>

              {/* Right Side - Books */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="h-[88px] hidden md:block"></div> {/* Spacer */}

                {/* Updated: Smaller container to match visual weight */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-video w-full max-w-lg mx-auto flex items-center justify-center p-0 group border-4 border-purple-50 mb-6">
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/ShankaraBOOKSTWO.webp" 
                    alt="Shankara Books" 
                    className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                  Comprehensive guidebooks provide deep insights into every card, stone, and board position, empowering you to interpret messages with clarity and confidence.
                </p>
                
                <Link href="/how-to-shankara">
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 mt-2 rounded-full px-8 h-12 w-full md:w-auto mx-auto md:mx-0 block">
                    Learn how to use the board <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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
