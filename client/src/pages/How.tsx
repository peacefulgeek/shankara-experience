import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight, BookOpen, Gem, Star, Heart, Layers, Compass, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import VideoModal from "@/components/VideoModal";
import AncientsPromoBox from "@/components/AncientsPromoBox";

export default function How() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setActiveVideo(url);
    setIsVideoOpen(true);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#2a1b3d]">
      <SEO 
        title="HOW | The Shankara Oracle" 
        description="Learn how to use The Shankara Oracle. A step-by-step guide to casting stones, interpreting symbols, and connecting with divine wisdom."
      />

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-24 relative overflow-hidden min-h-[70vh] flex items-center bg-[#2a1b3d]">
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
              
              <div className="pt-4 max-w-2xl mx-auto space-y-8">
                <p className="text-2xl md:text-3xl font-display italic text-purple-200/90 leading-relaxed">
                  "Awakening you to your divine nature and the deepest truths within."
                </p>

                {/* NEW STYLED BUTTON */}
                <Button 
                  onClick={() => openVideo("https://vimeo.com/1050726877")}
                  className="bg-[#ff00ff] hover:bg-[#d900d9] text-white border-2 border-amber-400 px-8 py-6 h-auto text-lg rounded-full font-bold shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all group animate-pulse-slow"
                >
                  <Play className="w-5 h-5 mr-3 fill-current" />
                  Watch The Trailer
                </Button>
              </div>
            </div>
          </div>

          {/* Illuminating Golden Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent animate-divine-pulse z-20" />
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent blur-[2px] animate-pulse z-20" />
        </section>

        {/* IMAGE GALLERY STRIP */}
        <section className="py-12 bg-[#1a0b2e]/50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/how-community-4.webp" 
                  loading="lazy" 
                  alt="Friends sharing a Shankara moment" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group translate-y-8 md:translate-y-12">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/how-community-2.webp" 
                  loading="lazy" 
                  alt="Deep connection over the board" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/how-musa-1.webp" 
                  loading="lazy" 
                  alt="Joyful discovery with Shankara" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group translate-y-8 md:translate-y-12">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/how-layout.webp" 
                  loading="lazy" 
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
              <div className="space-y-12 flex flex-col h-full">
                {/* Featured Layout Image */}
                <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] border border-white/10 group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/board-full-setup.webp" 
                    loading="lazy" 
                    alt="The Shankara Oracle Board Full Setup" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                      <p className="text-white/90 text-sm font-medium text-center">
                        "A sacred mirror reflecting the deepest truths of your soul."
                      </p>
                    </div>
                  </div>
                </div>


                <div className="space-y-4 text-lg text-purple-200/80 leading-relaxed flex-grow flex flex-col justify-between">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0 mt-1">1</div>
                    <p>Find a peaceful place & read The Setup & Play Booklet. Setup your Shankara Oracle with loving intention.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0 mt-1">2</div>
                    <p>Place your stones in the pouch and meditate on a question. Pull two stones and drop them on the board.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0 mt-1">3</div>
                    <p>Explore your arrow trajectories, stone symbols, and cards in the arrows path for your guidance.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0 mt-1">4</div>
                    <p>Read each card and The Book Of Meanings to learn about each aspect that emerged.</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-accent/40 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0 mt-1">5</div>
                    <p>Form your own summary of your understandings and apply them to your question. Be grateful.</p>
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
                      Hold your questions in your heart, intuitively select a few stones from the pouch, then drop them in the center of the board. Some stones will give you specific messages through their symbols, while the arrows on other stones will point to elements on the board or cards from the three The Shankara Oracle Decks.
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
                      <h3 className="text-xl font-bold text-white">Interpret the Message</h3>
                    </div>
                    <p className="text-purple-200/80 leading-relaxed">
                      Consult the comprehensive Guidebooks to interpret the messages. The system is designed to bypass the analytical mind and speak directly to your soul, offering clarity, healing, and actionable guidance for your life's path.
                    </p>
                  </div>
                </div>

                 {/* Card 4: The Integration */}
                 <div className="bg-[#2a1b3d] rounded-2xl overflow-hidden shadow-lg border border-white/10 group hover:border-accent/30 transition-all duration-500">
                  <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500" />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                        <Zap size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Integrate & Act</h3>
                    </div>
                    <p className="text-purple-200/80 leading-relaxed">
                      Take the wisdom you've received and apply it to your daily life. The Oracle empowers you to make decisions aligned with your highest self, transforming challenges into opportunities for growth.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* NEW VIDEO ROW */}
            <div className="mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] bg-white/20 flex-grow" />
                <h3 className="text-2xl font-display font-bold text-white text-center uppercase tracking-widest">Watch & Learn</h3>
                <div className="h-[1px] bg-white/20 flex-grow" />
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-8">
                 <div 
                    className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    onClick={() => openVideo("https://vimeo.com/818723938")}
                  >
                    <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                    <img src="https://vumbnail.com/818723938.jpg" loading="lazy" alt="Testimonials" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-bold text-sm md:text-lg truncate">Testimonials</p>
                    </div>
                  </div>

                  <div 
                    className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    onClick={() => openVideo("https://vimeo.com/819081252")}
                  >
                    <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                    <img src="https://vumbnail.com/819081252.jpg" loading="lazy" alt="How It Works" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-bold text-sm md:text-lg truncate">The Experience</p>
                    </div>
                  </div>

                  <div 
                    className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    onClick={() => openVideo("https://vimeo.com/1157965783")}
                  >
                    <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                    <img src="https://vumbnail.com/1157965783.jpg" loading="lazy" alt="Deep Dive" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-bold text-sm md:text-lg truncate">Deep Dive</p>
                    </div>
                  </div>

                  <div 
                    className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    onClick={() => openVideo("https://vimeo.com/1157965175")}
                  >
                    <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                    <img src="https://vumbnail.com/1157965175.jpg" loading="lazy" alt="Shankara Reading" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-bold text-sm md:text-lg truncate">Shankara Reading</p>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </section>

        {/* The Ancients Promo */}
        <section className="py-16 bg-[#1a0b2e]">
          <div className="container mx-auto px-4 max-w-5xl">
            <AncientsPromoBox />
          </div>
        </section>

      </main>
      <Footer />
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl={activeVideo || "https://vimeo.com/1050726877"} 
      />
    </div>
  );
}
