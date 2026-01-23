import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Star, HelpCircle, ArrowRight, Layers, Box, Compass } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function HowToShankara() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="How To Use Shankara" 
        description="Discover the symbolism of the Shankara Oracle Board and learn how to play."
      />
      
      {/* Background handled by global index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none" />

      <Navigation />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-purple-300 text-purple-700 px-4 py-1 text-sm tracking-widest uppercase bg-white/50 backdrop-blur-sm">
              The Sacred Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-purple-900 mb-8 leading-tight">
              Discover The Symbolism of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">The Shankara Oracle Board</span>
            </h1>
            <p className="text-xl text-purple-800/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              "I channeled Shankara during early morning dreams and sessions with my guides... Years in the making, brought into the world with the support of the spiritual community, I promise that The Shankara Oracle will nourish, inform, and uplift you!" — Shri Krishna Kalesh
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-purple-900 text-white hover:bg-purple-800 px-10 h-16 text-xl rounded-full font-bold shadow-lg shadow-purple-200">
                <Play className="mr-2 w-5 h-5 fill-current" /> Watch Tutorial (04:44)
              </Button>
            </div>
          </div>
        </section>

        {/* HOW TO PLAY STEPS */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-accent/20 blur-xl rounded-2xl group-hover:bg-accent/30 transition-all duration-700" />
                   <img src="/images/oracle-board.png" alt="Shankara Oracle Board" className="relative rounded-2xl shadow-2xl border-4 border-white" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900">How To Use The Shankara Oracle</h2>
                
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Prepare Your Space", desc: "Find a peaceful place in your home. Open The Shankara Setup & Play Booklet." },
                    { step: 2, title: "Setup The Board", desc: "Unfold the board. Place the three decks (Master, Alchemy, Release) in their designated spots." },
                    { step: 3, title: "Cast The Stones", desc: "Hold your questions in your heart. Intuitively select stones from the pouch and drop them in the center." },
                    { step: 4, title: "Interpret The Messages", desc: "Some stones show symbols; others point arrows to elements on the board or cards. Look up meanings in The Book of Meanings." },
                    { step: 5, title: "Connect The Dots", desc: "Use your own spiritual vocabulary to interpret all that emerges. As you connect the messages, you will earn the answer to your questions." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-purple-900 font-bold flex items-center justify-center text-lg shadow-md">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-900 mb-1">{item.title}</h3>
                        <p className="text-purple-800/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOARD SYMBOLISM GRID */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-900 mb-16">The Sacred Elements</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Words & Numbers */}
              <div className="bg-white/60 p-8 rounded-2xl border border-white/50 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Words & Numbers</h3>
                <p className="text-purple-800/70 text-sm leading-relaxed mb-4">
                  Do you notice certain numbers repeating in your life? Arrows pointing to specific numbers illuminate aspects highly active in your life.
                </p>
                <p className="text-purple-800/70 text-sm leading-relaxed">
                  Words like Gratitude, Discern, Forgive, Pray, or Release call you to focus on this aspect of your life.
                </p>
              </div>

              {/* The Four Elements */}
              <div className="bg-white/60 p-8 rounded-2xl border border-white/50 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">The Four Elements</h3>
                <ul className="space-y-2 text-sm text-purple-800/70">
                  <li><strong className="text-blue-600">Water:</strong> Inspire great flow, softness, and patience.</li>
                  <li><strong className="text-purple-900">Air:</strong> Our connection to the All-That-Is.</li>
                  <li><strong className="text-yellow-600">Soil:</strong> Infused with stardust to nourish body and soul.</li>
                  <li><strong className="text-orange-500">Fire:</strong> Essential to the circle of life; your life-force.</li>
                </ul>
              </div>

              {/* Divine Beings */}
              <div className="bg-white/60 p-8 rounded-2xl border border-white/50 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Divine Beings & Archangels</h3>
                <p className="text-purple-800/70 text-sm leading-relaxed">
                  Includes Divine Mother, Buddha, Kali, Shiva, and Archangels Michael, Seraphina, Raphael, and Uriel.
                </p>
                <p className="text-purple-800/70 text-sm leading-relaxed mt-2">
                  Each represents a host of deities found across the world's most sacred writings. Even if you don't resonate with specific deities, you can align with their attributes.
                </p>
              </div>

              {/* The Noble Species */}
              <div className="bg-white/60 p-8 rounded-2xl border border-white/50 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">The Noble Species</h3>
                <ul className="space-y-2 text-sm text-purple-800/70">
                  <li><strong className="text-purple-900">Animal (Lion):</strong> Reminds us of our intergalactic citizenship.</li>
                  <li><strong className="text-purple-900">Flower:</strong> Explosions of goodness; light transcending vessels.</li>
                  <li><strong className="text-purple-900">Fungi:</strong> Recycle nutrients; remind us of temporary attributes.</li>
                  <li><strong className="text-purple-900">Water Beings:</strong> Remind us to look deeply within for answers.</li>
                </ul>
              </div>

              {/* Playful Protectors */}
              <div className="bg-white/60 p-8 rounded-2xl border border-white/50 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <Box className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">The Playful Protectors</h3>
                <ul className="space-y-2 text-sm text-purple-800/70">
                  <li><strong className="text-purple-900">Butterfly:</strong> Teach us to honor the sweetest aspects of Being.</li>
                  <li><strong className="text-purple-900">Hummingbird:</strong> Joy, vulnerability, inspiration, and trust.</li>
                  <li><strong className="text-purple-900">BumbleBee:</strong> Reminds you to enjoy the present moment.</li>
                  <li><strong className="text-purple-900">Dragonfly:</strong> The Alchemist; transformative tonics.</li>
                </ul>
              </div>

              {/* Vedic Astrology */}
              <div className="bg-white/60 p-8 rounded-2xl border border-white/50 hover:bg-white/80 transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Vedic Astrology</h3>
                <p className="text-purple-800/70 text-sm leading-relaxed mb-4">
                  The planets are placed in counter-clockwise order to mirror the way a shaman would open a chakra to cleanse and heal it.
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs text-purple-600 text-center font-mono font-bold">
                  <div>RAHU</div><div>MANGALA</div><div>SHUKRA</div>
                  <div>SOMA</div><div>BUDHA</div><div>KETU</div>
                  <div>SHANI</div><div>BRIHASPATI</div><div>SURYA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIPS & SWAPS */}
        <section className="py-20 bg-gradient-to-r from-purple-100 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-10 rounded-3xl border border-purple-100 shadow-xl">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Shankara Tips & Swaps</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4 text-purple-800/80">
                  <li className="flex gap-3">
                    <Star className="w-5 h-5 text-accent shrink-0" />
                    <span>You can use your favorite Tarot and Oracle Decks instead of the Shankara decks.</span>
                  </li>
                  <li className="flex gap-3">
                    <Star className="w-5 h-5 text-accent shrink-0" />
                    <span>Roll Shakti’s Cube at any point for clarity or a loving nudge.</span>
                  </li>
                  <li className="flex gap-3">
                    <Star className="w-5 h-5 text-accent shrink-0" />
                    <span>Invite your spirit guides and ancestors into your sessions.</span>
                  </li>
                </ul>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Solo & With Friends</h3>
                  <p className="text-purple-800/70 text-sm leading-relaxed">
                    Shankara is a wonderful solo or group experience. The maximum ideal number of players is four, although you can include up to 8 participants. Each side of the board has a placeholder for each player.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-purple-900 mb-8">Ready to Play?</h2>
            <Link href="/shop">
              <Button size="lg" className="bg-accent text-purple-900 hover:bg-accent/90 px-12 py-6 text-xl rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                Get Your Shankara Oracle
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
