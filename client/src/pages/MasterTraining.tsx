import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Play, Lock, BookOpen, Users, Lightbulb, Zap, ArrowRight, Sparkles, Crown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

export default function MasterTraining() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setActiveVideo(url);
    setIsVideoOpen(true);
  };

  const masterCourseVideos = [
    {
      id: "1099419776",
      title: "Mantras & Sanskrit Extract",
      thumbnail: "https://vumbnail.com/1099419776.jpg"
    },
    {
      id: "1099420466",
      title: "Triggers Extract",
      thumbnail: "https://vumbnail.com/1099420466.jpg"
    },
    {
      id: "1099420040",
      title: "Spiritual Bypass Extract",
      thumbnail: "https://vumbnail.com/1099420040.jpg"
    }
  ];

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative bg-[#1a0b2e]">
      <SEO 
        title="Shankara Master Training | Unlock Your Inner Wisdom" 
        description="A comprehensive 8-module course to master The Shankara Oracle, awaken your intuition, and serve humanity."
      />

      {/* BACKGROUND - Purple style from Readers/Videos */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-20 mix-blend-screen" />
      </div>

      <Navigation />

      <main className="relative z-10">
        {/* HERO - Lightened & Mystical */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-purple-400/50 text-purple-200 px-4 py-1 text-sm tracking-widest uppercase bg-purple-900/30 backdrop-blur-md">
              <Sparkles className="w-3 h-3 mr-2 text-yellow-200" /> The Master Course
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200 glow-text">
                Inner Wisdom
              </span>
            </h1>
            
            <p className="text-xl text-purple-200/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Elevate your intuitive abilities, discover the pathways to self-mastery, and immerse yourself in divine wisdom.
              <br className="hidden md:block" />
              A complete system to sharpen your clairsentience and live in alignment with your higher purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff00ff] hover:bg-[#d900d9] text-white px-8 py-6 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all transform hover:-translate-y-1">
                Enroll Now for $397
              </Button>
              <Link href="/the-ancients">
                <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-200 hover:bg-purple-900/50 px-8 py-6 text-lg rounded-full backdrop-blur-sm hover:text-white transition-all group">
                  Explore The Ancients <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* MASTER COURSE EXCERPTS - ABOVE WHAT YOU WILL MASTER */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-8 text-center">
              <h3 className="text-3xl font-display font-bold text-white mb-2">Excerpts From The Shankara Master Course</h3>
              <p className="text-purple-200/80 italic">Just A Few Selections From The 100+ Videos & Worksheets</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {masterCourseVideos.map((video, i) => (
                 <div key={i} className="flex flex-col gap-3 group">
                    <div 
                      className="aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-accent/50 transition-all"
                      onClick={() => openVideo(`https://vimeo.com/${video.id}`)}
                    >
                      <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                      <img 
                        src={video.thumbnail} 
                        loading="lazy" 
                        alt={video.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                      />
                      <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                    </div>
                    <h4 className="text-white font-bold text-lg text-center group-hover:text-accent transition-colors">{video.title}</h4>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE MODULES GRID - REDESIGNED ELEGANT GLASSMORPHISM */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              What You Will Master
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Crown, title: "Awaken Inner Master", desc: "Connect with your inner wisdom and release what no longer serves you." },
                { icon: Zap, title: "Unlock Intuition", desc: "Replace triggers with profound insight and move beyond limited identity." },
                { icon: Lightbulb, title: "Become an Alchemist", desc: "Discover transformative alchemy principles that turn challenges into opportunities." },
                { icon: BookOpen, title: "Ancient Wisdom", desc: "Dive into pure teachings about Karma, Dharma, and Vedic Astrology basics." },
                { icon: Users, title: "Serve Humanity", desc: "Enhance your abilities to offer new perspectives and guide others toward healing." },
                { icon: Lock, title: "Lead Rituals", desc: "Uncover the role of rituals and how they can serve you on your path." }
              ].map((feature, i) => (
                <div key={i} className="group relative p-8 rounded-3xl bg-purple-900/10 border border-white/5 hover:bg-purple-900/20 hover:border-white/10 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                      <feature.icon className="w-7 h-7 text-purple-200" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                    <p className="text-purple-200/60 leading-relaxed font-light text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE STACK - MYSTICAL CARD */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#2a1b4e] to-[#1a0b2e] border border-purple-500/30 rounded-3xl p-8 md:p-12 relative text-white shadow-[0_0_80px_rgba(139,92,246,0.2)]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-32 h-32 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Total Course Value: <span className="line-through text-white/40">$2,500+</span></h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="bg-purple-500/20 p-2 rounded-full"><Play className="w-5 h-5 text-purple-200" /></div>
                  <div>
                    <h4 className="text-white font-bold">100 Pre-recorded Video Lessons</h4>
                    <p className="text-purple-300/60 text-sm">A $2,000 Value</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="bg-blue-500/20 p-2 rounded-full"><BookOpen className="w-5 h-5 text-blue-200" /></div>
                  <div>
                    <h4 className="text-white font-bold">Worksheets & Spiritual Resources</h4>
                    <p className="text-purple-300/60 text-sm">A $500 Value</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-yellow-500/30">
                  <div className="bg-yellow-500/20 p-2 rounded-full"><Star className="w-5 h-5 text-yellow-200" /></div>
                  <div>
                    <h4 className="text-yellow-200 font-bold">BONUS: Transformational Training Manual</h4>
                    <p className="text-purple-300/60 text-sm">Exclusive eBook Guide (A $108 Value)</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-purple-300/60 uppercase tracking-widest mb-2">Get Instant Access Today For Only</div>
                <div className="text-6xl font-bold text-white mb-8 drop-shadow-lg">$397</div>
                <Button size="lg" className="w-full md:w-auto bg-white text-purple-900 hover:bg-gray-100 px-12 py-8 text-xl rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1">
                  Join The Master Course
                </Button>
                <p className="mt-4 text-purple-300/40 text-sm">Lifetime access • 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* MEET THE GUIDE - LIGHTENED */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="w-full md:w-1/3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl">
                  <img src="https://shankara-pull.b-cdn.net/images/paul-2.webp" alt="Krishna Kalesh" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white">Krishna Kalesh</h3>
                    <p className="text-purple-300 font-bold">Creator of Shankara</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Your Guide</h2>
                <p className="text-xl text-purple-200/80 leading-relaxed font-light">
                  As a compassionate spiritual mentor, personal guide, clairvoyant, empath, and mystic, Krishna Kalesh (Paul Wagner) has guided thousands of seekers for over 30 years.
                </p>
                <p className="text-lg text-purple-200/70 leading-relaxed font-light">
                  Drawing wisdom from ancient teachings and enlightened masters, Kalesh's guidance empowers spiritually-minded individuals to connect with their inner Selves, transcend circumstances, and find liberation in every moment.
                </p>
                <div className="pt-4">
                  <Link href="/readers">
                    <Button variant="link" className="text-purple-300 pl-0 text-lg font-bold hover:text-white group">
                      Meet other Certified Masters <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl={activeVideo || ""} />
    </div>
  );
}
