import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Box, Layers, Grid, Gem } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Unboxing() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Unboxing Shankara | What's Inside The Box" 
        description="Explore the sacred components of The Shankara Oracle system: 300+ cards, 18 obsidian stones, and the cosmic board."
      />
      
      {/* Background handled by global index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none" />

      <Navigation />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-purple-300 text-purple-700 px-4 py-1 text-sm tracking-widest uppercase bg-white/50 backdrop-blur-sm">
              The Complete System
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-purple-900 mb-6 leading-tight">
              Unboxing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">
                The Sacred Technology
              </span>
            </h1>
            <p className="text-xl text-purple-800/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              More than a deck. It's a portal. Discover the precision-crafted tools designed to bridge your human experience with divine wisdom.
            </p>
          </div>
        </section>

        {/* COMPONENT BREAKDOWN */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            
            {/* THE BOX */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-white p-8 flex items-center justify-center border border-purple-50">
                  <img src="/images/shakti-cube-transparent.png" alt="The Box" className="w-full h-full object-contain drop-shadow-lg" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-2">
                  <Box className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900">A Vessel of Light</h2>
                <p className="text-lg text-purple-800/70 leading-relaxed">
                  The Shankara Oracle arrives in a stunning, sturdy box designed to hold the sacred energy of the system. Every detail, from the gold foil accents to the magnetic closure, honors the wisdom within.
                </p>
              </div>
            </div>

            {/* THE DECKS */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-50 to-white p-8 flex items-center justify-center border border-purple-100">
                   {/* Placeholder for Cards Image - Need to fix asset */}
                   <div className="text-center">
                     <Layers className="w-16 h-16 text-purple-200 mx-auto mb-4" />
                     <p className="text-purple-300 font-bold">300+ Cards Display</p>
                   </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
                  <Layers className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900">300+ Sacred Cards</h2>
                <p className="text-lg text-purple-800/70 leading-relaxed">
                  Four distinct decks work in harmony to provide multi-dimensional guidance:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">MASTER</span>
                    <span className="text-purple-800/80">Direct guidance from Ascended Masters and Deities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">ALCHEMY</span>
                    <span className="text-purple-800/80">Transformative energies to shift your vibration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">RELEASE</span>
                    <span className="text-purple-800/80">Identify and clear blockages and karmic patterns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">SHAKTI</span>
                    <span className="text-purple-800/80">Divine feminine power and creative force.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* THE STONES */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-gray-900 p-8 flex items-center justify-center border border-gray-800">
                   <div className="text-center">
                     <Gem className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                     <p className="text-gray-400 font-bold">Obsidian Stones</p>
                   </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-800 mb-2">
                  <Gem className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900">18 Obsidian Stones</h2>
                <p className="text-lg text-purple-800/70 leading-relaxed">
                  Hand-engraved on genuine black obsidian, these stones act as the messengers of the Oracle. When cast upon the board, they land in specific realms to deliver precise insights.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                    <h4 className="font-bold text-purple-900">Planetary Stones</h4>
                    <p className="text-sm text-purple-600">Sun, Moon, Mercury, etc.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                    <h4 className="font-bold text-purple-900">Elemental Stones</h4>
                    <p className="text-sm text-purple-600">Earth, Air, Fire, Water</p>
                  </div>
                </div>
              </div>
            </div>

            {/* THE BOARD */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img src="/images/oracle-board-hd.png" alt="The Oracle Board" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-2">
                  <Grid className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900">The Cosmic Board</h2>
                <p className="text-lg text-purple-800/70 leading-relaxed">
                  A 20x20 inch sacred geometry grid that maps the cosmos. It features:
                </p>
                <ul className="space-y-3 text-purple-800/80">
                  <li className="flex gap-3"><Check className="w-5 h-5 text-accent" /> <strong>The 4 Realms:</strong> Earth, Water, Fire, Air</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-accent" /> <strong>The 12 Houses:</strong> Zodiacal archetypes</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-accent" /> <strong>The Central Lotus:</strong> The point of integration</li>
                </ul>
                <Link href="/how-to">
                  <Button size="lg" className="bg-purple-900 text-white hover:bg-purple-800 rounded-full px-8 mt-4 shadow-lg">
                    Learn How To Use It
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
