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
      
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm">
              The Sacred Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]">
              Discover The Symbolism of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">The Shankara Oracle Board</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              "I channeled Shankara during early morning dreams and sessions with my guides... Years in the making, brought into the world with the support of the spiritual community, I promise that The Shankara Oracle will nourish, inform, and uplift you!" — Shri Krishna Kalesh
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-16 text-xl rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <Play className="mr-2 w-5 h-5 fill-current" /> Watch Tutorial (04:44)
              </Button>
            </div>
          </div>
        </section>

        {/* HOW TO PLAY STEPS */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-accent/20 blur-xl rounded-2xl group-hover:bg-accent/30 transition-all duration-700" />
                   <img src="/images/oracle-board.png" alt="Shankara Oracle Board" className="relative rounded-2xl shadow-2xl border border-white/10" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">How To Use The Shankara Oracle</h2>
                
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Prepare Your Space", desc: "Find a peaceful place in your home. Open The Shankara Setup & Play Booklet." },
                    { step: 2, title: "Setup The Board", desc: "Unfold the board. Place the three decks (Master, Alchemy, Release) in their designated spots." },
                    { step: 3, title: "Cast The Stones", desc: "Hold your questions in your heart. Intuitively select stones from the pouch and drop them in the center." },
                    { step: 4, title: "Interpret The Messages", desc: "Some stones show symbols; others point arrows to elements on the board or cards. Look up meanings in The Book of Meanings." },
                    { step: 5, title: "Connect The Dots", desc: "Use your own spiritual vocabulary to interpret all that emerges. As you connect the messages, you will earn the answer to your questions." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-lg shadow-lg shadow-accent/20">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-white/70">{item.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">The Sacred Elements</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Words & Numbers */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Words & Numbers</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Do you notice certain numbers repeating in your life? Arrows pointing to specific numbers illuminate aspects highly active in your life.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Words like Gratitude, Discern, Forgive, Pray, or Release call you to focus on this aspect of your life.
                </p>
              </div>

              {/* The Four Elements */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The Four Elements</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><strong className="text-blue-300">Water:</strong> Inspire great flow, softness, and patience.</li>
                  <li><strong className="text-white">Air:</strong> Our connection to the All-That-Is.</li>
                  <li><strong className="text-yellow-600">Soil:</strong> Infused with stardust to nourish body and soul.</li>
                  <li><strong className="text-orange-500">Fire:</strong> Essential to the circle of life; your life-force.</li>
                </ul>
              </div>

              {/* Divine Beings */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Divine Beings & Archangels</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Includes Divine Mother, Buddha, Kali, Shiva, and Archangels Michael, Seraphina, Raphael, and Uriel.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mt-2">
                  Each represents a host of deities found across the world's most sacred writings. Even if you don't resonate with specific deities, you can align with their attributes.
                </p>
              </div>

              {/* The Noble Species */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The Noble Species</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><strong className="text-white">Animal (Lion):</strong> Reminds us of our intergalactic citizenship.</li>
                  <li><strong className="text-white">Flower:</strong> Explosions of goodness; light transcending vessels.</li>
                  <li><strong className="text-white">Fungi:</strong> Recycle nutrients; remind us of temporary attributes.</li>
                  <li><strong className="text-white">Water Beings:</strong> Remind us to look deeply within for answers.</li>
                </ul>
              </div>

              {/* Playful Protectors */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Box className="w-6 h-6 text-pink-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The Playful Protectors</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><strong className="text-white">Butterfly:</strong> Teach us to honor the sweetest aspects of Being.</li>
                  <li><strong className="text-white">Hummingbird:</strong> Joy, vulnerability, inspiration, and trust.</li>
                  <li><strong className="text-white">BumbleBee:</strong> Reminds you to enjoy the present moment.</li>
                  <li><strong className="text-white">Dragonfly:</strong> The Alchemist; transformative tonics.</li>
                </ul>
              </div>

              {/* Vedic Astrology */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Vedic Astrology</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  The planets are placed in counter-clockwise order to mirror the way a shaman would open a chakra to cleanse and heal it.
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs text-accent text-center font-mono">
                  <div>RAHU</div><div>MANGALA</div><div>SHUKRA</div>
                  <div>SOMA</div><div>BUDHA</div><div>KETU</div>
                  <div>SHANI</div><div>BRIHASPATI</div><div>SURYA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIPS & SWAPS */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 to-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-black/60 p-10 rounded-3xl border border-accent/30 shadow-[0_0_60px_rgba(168,85,247,0.2)]">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Shankara Tips & Swaps</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4 text-white/80">
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
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-accent mb-2">Solo & With Friends</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
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
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Play?</h2>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
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
