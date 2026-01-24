import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight } from "lucide-react";
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
                  <Button variant="outline" size="lg" className="border-purple-400/30 text-purple-200 hover:bg-purple-900/30 px-8 rounded-full backdrop-blur-sm">
                    Learn About Ancient Divination <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SETUP & PROCESS (User's First Block) */}
        <section className="py-24 bg-[#1a0b2e] relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Video & Setup */}
              <div className="space-y-12">
                <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <span className="absolute bottom-4 right-4 text-xs font-mono text-white/60">04:44</span>
                </div>
                
                <div className="space-y-6 text-lg text-purple-200/80 leading-relaxed">
                  <p>Find a peaceful place in your home.</p>
                  <p>Open The Shankara Setup & Play Booklet.</p>
                  <p>Setup your Shankara Oracle Board.</p>
                  <p>Watch Our Video:</p>
                </div>
              </div>

              {/* Right Column: The Process Text */}
              <div className="space-y-6 text-lg text-purple-200/80 font-light leading-relaxed">
                <p>
                  Sessions with The Shankara Oracle are fun, satisfying, and truly divine experiences. To source answers to your questions, use the beautiful Shankara Oracle Stones. Each stone has a sacred, channeled symbol on one side, and arrows on the other.
                </p>
                <p>
                  Hold your questions in your heart, intuitively select a few stones from the pouch, then drop them in the center of the board.
                </p>
                <p>
                  Some stones will give you specific messages through their symbols, while the arrows on other stones will point to elements on the board or cards from the three The Sacred Oracle Decks.
                </p>
                <p>
                  Look up the elements in The Book of Meanings. Use your own spiritual vocabulary to interpret all that emerges. As you connect the many messages and cards together, you will earn the answer to your questions. Pick a Sacred Action Card, too!
                </p>
                <p className="font-medium text-white">
                  Make Shankara your own and enjoy it!
                </p>
                <p className="italic text-white/90 border-l-4 border-accent pl-4 py-2 bg-purple-900/20 rounded-r-lg">
                  The Shankara Oracle serves and honors those seeking to awaken to their highest Selves, gain deep, transformative answers, release their conditioning, and live consciously and proactively embedded in The Dharma.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* GUIDANCE & INTEGRATION (User's Second Block) */}
        <section className="py-24 bg-[#2a1b3d] relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <div className="space-y-6 text-xl text-purple-200/90 font-light leading-relaxed">
                <p>
                  The Shankara Book of Meanings contains all of the channeled guidance for the Shankara Sacred Stones, words, and symbols on the board.
                </p>
                <p>
                  You can do your Shankara session using The Shankara Oracle Decks or you can use your favorite Tarot and Oracle Decks.
                </p>
                <p>
                  You may roll Shakti’s Cube at any point during your session, especially when you need clarity, insight, or a loving nudge.
                </p>
                <p>
                  Integrating the various messages that emerge during your session, you can source the answers to all of your questions.
                </p>
                <p className="font-medium text-white text-2xl pt-4">
                  Invite your spirit guides, ancestors, and all parts of you into your Shankara sessions to gain the most insight and to transcend all that has blocked your illumination.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
