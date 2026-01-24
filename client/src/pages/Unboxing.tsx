import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Layers, Gem, ArrowRight, Check } from "lucide-react";
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
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-purple-50 aspect-[4/3] flex items-center justify-center group">
                   <Layers className="w-32 h-32 text-purple-200 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-display font-bold text-purple-100">01</span>
                  <h2 className="text-4xl font-display font-bold text-purple-900">The 4 Sacred Decks</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over 300 cards divided into four distinct decks, each serving a unique purpose in your reading. From the Master Deck that sets the theme, to the Alchemy and Release decks that guide your transformation.
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
                    Cosmic Deck: Universal Laws
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMPONENT 2: THE STONES - DARK (YIN) */}
        <section className="py-24 bg-cosmic-dark relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] border border-white/10 aspect-[4/3] flex items-center justify-center bg-black/40 group">
                   <Gem className="w-32 h-32 text-purple-500/50 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-display font-bold text-purple-900/50">02</span>
                  <h2 className="text-4xl font-display font-bold text-white">18 Obsidian Stones</h2>
                </div>
                <p className="text-lg text-purple-200/80 leading-relaxed">
                  Hand-engraved obsidian stones that connect you to deep earth wisdom. Cast them onto the board to receive direct guidance on timing, elements, and planetary influences.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                   <div className="bg-purple-900/30 p-6 rounded-xl border border-white/10 hover:bg-purple-900/50 transition-colors">
                      <h4 className="text-accent font-bold mb-2 text-lg">Planetary Stones</h4>
                      <p className="text-sm text-purple-200/60 leading-relaxed">Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto</p>
                   </div>
                   <div className="bg-purple-900/30 p-6 rounded-xl border border-white/10 hover:bg-purple-900/50 transition-colors">
                      <h4 className="text-accent font-bold mb-2 text-lg">Elemental Stones</h4>
                      <p className="text-sm text-purple-200/60 leading-relaxed">Earth, Air, Fire, Water, Ether</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPONENT 3: THE BOARD - LIGHT (YANG) */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-square flex items-center justify-center p-8 group border-4 border-purple-50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/50 to-blue-100/50 opacity-50" />
                  <img 
                    src="/images/oracle-board-clean.png" 
                    alt="Oracle Board" 
                    className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-6xl font-display font-bold text-purple-100">03</span>
                  <h2 className="text-4xl font-display font-bold text-purple-900">The Oracle Board</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A sacred geometry grid that maps the cosmos. This isn't just a playing surface; it's an energetic field where your stones land to reveal hidden patterns and synchronicities.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-accent" /> <strong>The 4 Realms:</strong> Earth, Water, Fire, Air</li>
                  <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-accent" /> <strong>The 12 Houses:</strong> Zodiacal archetypes</li>
                  <li className="flex gap-3 items-center"><Check className="w-5 h-5 text-accent" /> <strong>The Central Lotus:</strong> The point of integration</li>
                </ul>
                <Link href="/how-to-shankara">
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 mt-4 rounded-full px-8 h-12">
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
