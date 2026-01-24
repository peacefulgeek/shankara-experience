import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Star, Package, Check, ArrowRight, Layers, BookOpen, Hexagon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Shop() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Shop The Shankara Oracle" 
        description="Purchase the complete Shankara Oracle System, including the board, 4 decks, stones, and guidebook."
      />
      
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />

      <main>
        {/* HERO PRODUCT */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Product Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full group-hover:bg-accent/30 transition-all duration-700" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/oracle-intimate.webp" 
                  alt="Shankara Oracle Box Set" 
                  className="relative rounded-3xl shadow-2xl border border-white/10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <Badge variant="outline" className="mb-4 border-accent text-accent px-3 py-1 text-xs tracking-widest uppercase backdrop-blur-sm">
                    The Complete System
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
                    The Shankara Oracle
                  </h1>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-white/50 line-through decoration-white/50">$167.00</span>
                    <span className="text-4xl font-bold text-accent">$99.00</span>
                    <Badge className="bg-accent text-white ml-2">SALE</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-white/60 text-sm">(5.0 Stars)</span>
                  </div>
                  <p className="text-xl text-white/80 leading-relaxed font-light">
                    A living technology of consciousness. This is not just an oracle deck—it is a complete divination system designed to awaken your intuition, heal your past, and help you master your destiny.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-14 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] flex-1">
                    Add to Cart <ShoppingBag className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Package className="w-4 h-4 text-accent" /> What's Inside The Box?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "The Sacred Geometry Oracle Board",
                      "4 Oracle Decks (300+ Cards)",
                      "The Sacred Action Cards",
                      "18 Engraved Obsidian Stones",
                      "Shakti's Cube (Guidance Die)",
                      "Comprehensive Guidebook",
                      "Velvet Pouch for Stones"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/70 text-sm">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNBOXED DETAILS */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Shankara Unboxed</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Explore the components that make Shankara a powerful tool for transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Decks */}
              <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all group">
                <div className="h-48 bg-purple-900/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Layers className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-8 relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">4 Sacred Decks</h3>
                  <p className="text-white/60 text-sm mb-6">Over 300 cards across four distinct decks.</p>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>The Master Deck:</strong> Core life themes & archetypes.</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>The Alchemy Deck:</strong> Tools for transformation.</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>The Release Deck:</strong> What to let go of now.</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>Sacred Action Cards:</strong> Steps to take.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Stones & Cube */}
              <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all group">
                <div className="h-48 bg-blue-900/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Hexagon className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-8 relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Stones & Cube</h3>
                  <p className="text-white/60 text-sm mb-6">Tactile tools for intuitive casting.</p>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>18 Obsidian Stones:</strong> Engraved with sacred symbols.</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>Shakti's Cube:</strong> A die for quick clarity.</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>Velvet Pouch:</strong> To keep your stones safe.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Board & Guide */}
              <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all group">
                <div className="h-48 bg-pink-900/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <BookOpen className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-8 relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Board & Guide</h3>
                  <p className="text-white/60 text-sm mb-6">The foundation of your practice.</p>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>The Board:</strong> Sacred geometry grid (20"x20").</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>The Guidebook:</strong> In-depth meanings & spreads.</li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <strong>Setup Booklet:</strong> Quick start guide.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* UPSELL COURSES */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-3xl p-12 border border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://shankara-pull.b-cdn.net/images/cosmic-nebula.webp')] opacity-30 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Want to go deeper?</h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8">
                  Unlock the full potential of your Oracle with our Master Course and Certification Program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/master-training">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8">
                      View Master Course
                    </Button>
                  </Link>
                  <Link href="/certification">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8">
                      View Certification
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
