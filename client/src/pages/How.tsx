import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight, BookOpen, Gem, Star, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function How() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#2a1b3d]">
      <SEO 
        title="HOW | The Shankara Oracle" 
        description="Learn how to use The Shankara Oracle. A step-by-step guide to casting stones, interpreting symbols, and connecting with divine wisdom."
      />

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-24 relative overflow-hidden min-h-[80vh] flex items-center bg-[#2a1b3d]">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-purple-400 text-purple-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-purple-900/30 backdrop-blur-md mx-auto">
                <Sparkles className="w-3 h-3 mr-2 text-accent" /> The Sacred Ritual
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                How Shankara <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300 glow-text">
                  Works
                </span>
              </h1>
              
              <div className="flex justify-center gap-4 pt-4">
                <Link href="/the-ancients">
                  <Button variant="outline" size="lg" className="border-purple-400/30 text-purple-200 hover:bg-purple-900/30 px-8 rounded-full backdrop-blur-sm group">
                    Learn About Ancient Divination <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE GALLERY STRIP */}
        <section className="py-12 bg-[#1a0b2e]/50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="/images/how-community-1.png" 
                  alt="Friends sharing a Shankara moment" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group translate-y-8 md:translate-y-12">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="/images/how-community-3.jpg" 
                  alt="Deep connection over the board" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="/images/how-rachel.jpg" 
                  alt="Joyful discovery with Shankara" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group translate-y-8 md:translate-y-12">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="/images/how-musa-1.jpg" 
                  alt="Intimate moment with the Oracle" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SETUP & PROCESS */}
        <section className="py-32 bg-[#1a0b2e] relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Layout Image & Video */}
              <div className="space-y-12">
                {/* Featured Layout Image */}
                <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] border border-white/10 group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="/images/how-layout.jpg" 
                    alt="The Shankara Oracle Board Layout" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                      <p className="text-white/90 text-sm font-medium text-center">
                        "The board is a temple. Enter with reverence."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <span className="absolute bottom-4 right-4 text-xs font-mono text-white/60 bg-black/50 px-2 py-1 rounded">04:44</span>
                </div>
                
                <div className="space-y-6 text-lg text-purple-200/80 leading-relaxed">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0">1</div>
                    <p>Find a peaceful place in your home.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0">2</div>
                    <p>Open The Shankara Setup & Play Booklet.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0">3</div>
                    <p>Setup your Shankara Oracle Board.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0">4</div>
                    <p>Watch Our Video above.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: The Process Text with Lovely Card Headers */}
              <div className="space-y-8">
                
                {/* Card 1: The Experience */}
                <div className="bg-[#2a1b3d] rounded-2xl overflow-hidden shadow-lg border border-white/10 group hover:border-accent/30 transition-all duration-500">
                  <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-pink-500/20 rounded-lg text-pink-300">
                        <Heart size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Divine Experience</h3>
                    </div>
                    <p className="text-purple-200/80 leading-relaxed">
                      Sessions with The Shankara Oracle are fun, satisfying, and truly divine experiences. To source answers to your questions, use the beautiful Shankara Oracle Stones. Each stone has a sacred, channeled symbol on one side, and arrows on the other.
                    </p>
                  </div>
                </div>

                {/* Card 2: The Ritual */}
                <div className="bg-[#2a1b3d] rounded-2xl overflow-hidden shadow-lg border border-white/10 group hover:border-accent/30 transition-all duration-500">
                  <div className="h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400" />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-300">
                        <Gem size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Cast the Stones</h3>
                    </div>
                    <p className="text-purple-200/80 leading-relaxed">
                      Hold your questions in your heart, intuitively select a few stones from the pouch, then drop them in the center of the board. Some stones will give you specific messages through their symbols, while the arrows on other stones will point to elements on the board or cards from the three The Sacred Oracle Decks.
                    </p>
                  </div>
                </div>

                {/* Card 3: The Wisdom */}
                <div className="bg-[#2a1b3d] rounded-2xl overflow-hidden shadow-lg border border-white/10 group hover:border-accent/30 transition-all duration-500">
                  <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400" />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-amber-500/20 rounded-lg text-amber-300">
                        <BookOpen size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Interpret & Integrate</h3>
                    </div>
                    <p className="text-purple-200/80 leading-relaxed mb-4">
                      Look up the elements in The Book of Meanings. Use your own spiritual vocabulary to interpret all that emerges. As you connect the many messages and cards together, you will earn the answer to your questions. Pick a Sacred Action Card, too!
                    </p>
                    <p className="font-medium text-white italic border-l-2 border-accent pl-4">
                      "Make Shankara your own and enjoy it!"
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-purple-900/20 rounded-xl border border-purple-500/20">
                  <p className="italic text-white/90 text-center">
                    The Shankara Oracle serves and honors those seeking to awaken to their highest Selves, gain deep, transformative answers, release their conditioning, and live consciously and proactively embedded in The Dharma.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* GUIDANCE & INTEGRATION (User's Second Block) */}
        <section className="py-24 bg-[#2a1b3d] relative overflow-hidden">
           {/* Background decorative elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="border-blue-400 text-blue-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-blue-900/30 backdrop-blur-md mb-6">
                  <Star className="w-3 h-3 mr-2 text-blue-400" /> Deepening the Connection
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Guidance & Integration</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-4">The Book of Meanings</h3>
                  <p className="text-purple-200/80 leading-relaxed">
                    The Shankara Book of Meanings contains all of the channeled guidance for the Shankara Sacred Stones, words, and symbols on the board.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-4">Flexible Practice</h3>
                  <p className="text-purple-200/80 leading-relaxed">
                    You can do your Shankara session using The Shankara Oracle Decks or you can use your favorite Tarot and Oracle Decks.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-4">Shakti's Cube</h3>
                  <p className="text-purple-200/80 leading-relaxed">
                    You may roll Shakti’s Cube at any point during your session, especially when you need clarity, insight, or a loving nudge.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-4">Sourcing Answers</h3>
                  <p className="text-purple-200/80 leading-relaxed">
                    Integrating the various messages that emerge during your session, you can source the answers to all of your questions.
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center max-w-3xl mx-auto">
                <p className="font-display text-2xl md:text-3xl text-white leading-relaxed drop-shadow-lg">
                  "Invite your spirit guides, ancestors, and all parts of you into your Shankara sessions to gain the most insight and to transcend all that has blocked your illumination."
                </p>
                
                <div className="mt-12">
                   <Link href="/the-ancients">
                    <Button className="bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-white font-bold text-lg px-10 py-6 h-auto rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all transform hover:-translate-y-1">
                      Explore The Ancients Lineage <ArrowRight className="ml-2 w-5 h-5" />
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
