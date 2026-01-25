import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Play, Lock, BookOpen, Users, Lightbulb, Zap, ArrowRight, Sparkles, Crown, Heart, Sun, Compass, ChevronDown, HelpCircle, Quote, MessageCircle } from "lucide-react";
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
      thumbnail: "https://vumbnail.com/1099419776.jpg",
      description: "Explore the sacred power of ancient mantras and Sanskrit chanting to elevate consciousness and invoke divine energies."
    },
    {
      id: "1099420466",
      title: "Triggers Extract",
      thumbnail: "https://vumbnail.com/1099420466.jpg",
      description: "Learn to identify and transform emotional triggers into doorways for healing, growth, and deeper self-awareness."
    },
    {
      id: "1099420040",
      title: "Spiritual Bypass Extract",
      thumbnail: "https://vumbnail.com/1099420040.jpg",
      description: "Understand how to avoid spiritual bypassing and integrate shadow work for authentic, grounded spiritual development."
    }
  ];

  const programDesignedFor = [
    {
      icon: Crown,
      title: "Seekers of Self-Mastery",
      description: "Understand your true Self and unlock your highest potential as you master the Program's insights and tools."
    },
    {
      icon: Sparkles,
      title: "Spiritually Aware (& Curious) Individuals",
      description: "Discover a rich tapestry of ancient wisdom + practices to deepen your spirituality and harmony with The Divine."
    },
    {
      icon: Heart,
      title: "Intuitives & Healers",
      description: "Enhance your abilities to offer new perspectives when helping others – using transformative techniques to guide your clients toward healing and Self-discovery."
    },
    {
      icon: Sun,
      title: "Aspiring Light Workers",
      description: "Be a source of light, guidance, and abundance for others as you connect with your Divinity and illuminate the path for those seeking their own inner truth."
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
            
            <p className="text-xl md:text-2xl text-purple-100/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              <span className="font-semibold text-white">Finally break free from the patterns holding you back</span> and awaken the intuitive healer within you. <span className="text-[#ffd700]">Join thousands who have transformed their lives</span> with this proven spiritual mastery system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://shankara.thrivecart.com/shankara-master-course-training-main/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff00ff] hover:bg-[#d900d9] text-white px-8 py-6 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all transform hover:-translate-y-1">
                  Enroll Now for $197
                </Button>
              </a>
              <Link href="/the-ancients">
                <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-200 hover:bg-purple-900/50 px-8 py-6 text-lg rounded-full backdrop-blur-sm hover:text-white transition-all group">
                  Explore The Ancients <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Heart-shaped collage image */}
            <div className="mt-16 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#ff00ff]/20 blur-[60px] rounded-full pointer-events-none" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/training-hero-collage.webp" 
                  alt="Transformational journeys - people finding peace, healing, and connection" 
                  className="relative z-10 w-full max-w-md md:max-w-lg drop-shadow-[0_20px_60px_rgba(255,0,255,0.3)]" 
                />
              </div>
              {/* Tagline under image */}
              <p className="mt-8 text-lg md:text-xl text-purple-200/90 italic max-w-2xl mx-auto">
                <span className="text-[#ffd700] font-semibold not-italic">The Shankara Oracle System</span> — your portal to a dimension within, where every answer already resides.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSFORM YOUR LIFE - REDESIGNED ENGAGING SECTION */}
        <section className="py-24 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff00ff]/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ffd700]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Engaging Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6 px-6 py-2 rounded-full border border-[#ffd700]/40 bg-[#ffd700]/10 backdrop-blur-sm">
                <span className="text-[#ffd700] font-bold tracking-widest uppercase text-sm">100+ Videos & Workshops</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#ff66ff] to-[#ffd700] drop-shadow-[0_0_30px_rgba(255,0,255,0.5)]">Unlock Your Soul's Potential</span>
              </h2>
              
              <p className="text-2xl text-purple-100/90 max-w-4xl mx-auto leading-relaxed mb-12">
                The Shankara Master Course is a <span className="text-[#ff00ff] font-semibold">complete healing journey</span> with over 100 video lessons and transformational worksheets designed to help you release deep wounds, awaken your gifts, and step into your highest Self.
              </p>
              
              {/* Checklist with pink/purple checkmarks */}
              <div className="max-w-3xl mx-auto text-left">
                <h3 className="text-2xl font-bold text-white text-center mb-8">The Shankara Master Course will help you…</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#ff00ff]/10 border border-[#ff00ff]/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff00ff] flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-purple-100 text-lg"><span className="font-semibold text-white">Release</span> what no longer serves you to unlock your intuitive knowing.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-purple-100 text-lg"><span className="font-semibold text-white">Inspire</span> transformation in your Self, your life, and those of others.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-purple-100 text-lg"><span className="font-semibold text-white">Resolve</span> karmic ties and live in alignment with your higher purpose.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#ff00ff]/10 border border-[#ff00ff]/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff00ff] flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-purple-100 text-lg"><span className="font-semibold text-white">Explore</span> the ancient teachings to uplift your life.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#ff00ff]/10 border border-[#ff00ff]/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff00ff] flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-purple-100 text-lg"><span className="font-semibold text-white">Navigate</span> life's challenges with confidence.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-purple-100 text-lg"><span className="font-semibold text-white">Deliver</span> the most illuminating intuitive & psychic readings.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WHO THIS IS FOR - Section Header */}
            <div className="text-center mb-16 mt-24 pt-16">
              <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full border border-purple-400/40 bg-purple-900/30 backdrop-blur-sm">
                <Users className="w-4 h-4 text-[#ff00ff]" />
                <span className="text-[#ff00ff] font-bold tracking-widest uppercase text-sm">Who This Is For</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#ffd700]">Life's Purpose</span>
              </h2>
              <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
                Whether you're just beginning your spiritual journey or deepening an existing practice, this course meets you exactly where you are.
              </p>
            </div>

            {/* Cards with gold outlines and neon accents */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {programDesignedFor.map((item, i) => (
                <div key={i} className="group relative p-10 rounded-3xl bg-gradient-to-br from-[#1a0b2e] to-[#2d1b4e] border-2 border-[#ffd700]/30 hover:border-[#ffd700]/60 transition-all duration-500 overflow-hidden text-center shadow-[0_0_40px_rgba(255,215,0,0.1)] hover:shadow-[0_0_60px_rgba(255,0,255,0.2)]">
                  {/* Neon glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/10 to-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon with gold ring */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff00ff]/40 to-purple-500/30 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 border-2 border-[#ffd700]/50 shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                      <item.icon className="w-10 h-10 text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-5 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{item.title}</h3>
                    <p className="text-purple-100/80 leading-relaxed text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing statement with CTA feel */}
            <div className="mt-20 max-w-4xl mx-auto text-center">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#ff00ff]/10 via-purple-900/20 to-[#ffd700]/10 border border-[#ff00ff]/20">
                <p className="text-xl text-purple-100/90 leading-relaxed">
                  This is your invitation to <span className="text-[#ffd700] font-semibold">step into your purest potential</span>, illuminate your path, and become a beacon of light in your own life and the lives of others. The Shankara Master Course offers a sacred space for <span className="text-[#ff00ff] font-semibold">growth, healing, and true transformation</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MASTER COURSE EXCERPTS - ABOVE WHAT YOU WILL MASTER */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-8 text-center">
              <h3 className="text-4xl font-display font-bold text-white mb-2">Excerpts From The Shankara Master Course</h3>
              <p className="text-lg text-purple-200/80 italic">Just A Few Selections From The 100+ Videos & Worksheets</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {masterCourseVideos.map((video, i) => (
                 <div key={i} className="flex flex-col gap-4 group">
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
                    <h4 className="text-white font-bold text-2xl text-center group-hover:text-accent transition-colors">{video.title}</h4>
                    <p className="text-purple-200/60 text-lg text-center leading-relaxed">{video.description}</p>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE MODULES GRID - VIBRANT REDESIGN */}
        <section className="py-24 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff00ff]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ffd700]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full border border-[#ffd700]/40 bg-[#ffd700]/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                <span className="text-[#ffd700] font-bold tracking-widest uppercase text-sm">Your Transformation</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                What You Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#ffd700]">Master</span>
              </h2>
              <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
                Six powerful pillars of wisdom to guide your spiritual evolution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Crown, title: "Awaken Inner Master", desc: "Connect with your inner wisdom and release what no longer serves you.", color: "#ff00ff" },
                { icon: Zap, title: "Unlock Intuition", desc: "Replace triggers with profound insight and move beyond limited identity.", color: "#ffd700" },
                { icon: Lightbulb, title: "Become an Alchemist", desc: "Discover transformative alchemy principles that turn challenges into opportunities.", color: "#ff00ff" },
                { icon: BookOpen, title: "Ancient Wisdom", desc: "Dive into pure teachings about Karma, Dharma, and Vedic Astrology basics.", color: "#ffd700" },
                { icon: Users, title: "Serve Humanity", desc: "Enhance your abilities to offer new perspectives and guide others toward healing.", color: "#ff00ff" },
                { icon: Lock, title: "Lead Rituals", desc: "Uncover the role of rituals and how they can serve you on your path.", color: "#ffd700" }
              ].map((feature, i) => (
                <div key={i} className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1a0b2e] to-[#2d1b4e] border-2 border-[#ffd700]/30 hover:border-[#ffd700]/60 transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.1)] hover:shadow-[0_0_60px_rgba(255,0,255,0.2)]">
                  {/* Neon glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/10 to-[#ffd700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon with neon ring */}
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border-2"
                      style={{ 
                        backgroundColor: `${feature.color}30`,
                        borderColor: `${feature.color}60`,
                        boxShadow: `0 0 25px ${feature.color}40`
                      }}
                    >
                      <feature.icon 
                        className="w-8 h-8" 
                        style={{ 
                          color: feature.color,
                          filter: `drop-shadow(0 0 8px ${feature.color})`
                        }} 
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{feature.title}</h3>
                    <p className="text-purple-100/80 leading-relaxed text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE STACK - VIBRANT REDESIGN */}
        <section className="py-24 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ffd700]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] border-2 border-[#ffd700]/40 rounded-3xl p-8 md:p-12 relative text-white shadow-[0_0_100px_rgba(255,0,255,0.3),0_0_40px_rgba(255,215,0,0.2)]">
              {/* Decorative sparkles */}
              <div className="absolute top-4 right-4 opacity-30">
                <Sparkles className="w-24 h-24 text-[#ffd700]" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <Sparkles className="w-16 h-16 text-[#ff00ff]" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
                Total Course Value: <span className="line-through text-white/30">$2,500+</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {/* Video Lessons */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#ff00ff]/10 to-transparent p-6 rounded-2xl border border-[#ff00ff]/30 hover:border-[#ff00ff]/50 transition-all group">
                  <div className="bg-[#ff00ff]/30 p-4 rounded-full border border-[#ff00ff]/50 shadow-[0_0_20px_rgba(255,0,255,0.4)] group-hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all">
                    <Play className="w-7 h-7 text-[#ff00ff] drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">100 Pre-recorded Video Lessons</h4>
                    <p className="text-[#ff00ff]/80 text-lg font-semibold">A $2,000 Value</p>
                  </div>
                </div>
                
                {/* Worksheets */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-purple-500/10 to-transparent p-6 rounded-2xl border border-purple-400/30 hover:border-purple-400/50 transition-all group">
                  <div className="bg-purple-500/30 p-4 rounded-full border border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all">
                    <BookOpen className="w-7 h-7 text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">Worksheets & Spiritual Resources</h4>
                    <p className="text-purple-300/80 text-lg font-semibold">A $500 Value</p>
                  </div>
                </div>

                {/* Bonus - Gold highlight */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#ffd700]/15 to-transparent p-6 rounded-2xl border-2 border-[#ffd700]/50 hover:border-[#ffd700]/70 transition-all group shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                  <div className="bg-[#ffd700]/30 p-4 rounded-full border border-[#ffd700]/60 shadow-[0_0_25px_rgba(255,215,0,0.5)] group-hover:shadow-[0_0_35px_rgba(255,215,0,0.7)] transition-all">
                    <Star className="w-7 h-7 text-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                  </div>
                  <div>
                    <h4 className="text-[#ffd700] font-bold text-xl">BONUS: Transformational Training Manual</h4>
                    <p className="text-[#ffd700]/70 text-lg font-semibold">Exclusive eBook Guide (A $108 Value)</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-4">
                <div className="inline-block mb-4 px-6 py-2 rounded-full border border-[#ffd700]/40 bg-[#ffd700]/10">
                  <span className="text-[#ffd700] font-bold tracking-widest uppercase text-sm">Get Instant Access Today For Only</span>
                </div>
                <div className="text-7xl font-bold text-white mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  $197
                </div>
                <a href="https://shankara.thrivecart.com/shankara-master-course-training-main/" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button size="lg" className="bg-[#ff00ff] hover:bg-[#d900d9] text-white px-16 py-8 text-2xl rounded-full font-bold shadow-[0_0_40px_rgba(255,0,255,0.5)] hover:shadow-[0_0_60px_rgba(255,0,255,0.7)] transition-all transform hover:-translate-y-1 hover:scale-105">
                    Join The Master Course
                  </Button>
                </a>
                <p className="mt-6 text-purple-200/60 text-base">Lifetime access • 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ff00ff]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#ffd700]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10 backdrop-blur-sm">
                <Star className="w-4 h-4 text-[#ffd700]" />
                <span className="text-[#ffd700] font-bold tracking-widest uppercase text-sm">Student Experiences</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                What Our Students Say
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  quote: "The Shankara Master Course completely transformed how I understand myself and my spiritual path. Krishna's teachings are profound yet accessible.",
                  name: "Sarah M.",
                  location: "California, USA",
                  highlight: "Life-changing wisdom"
                },
                {
                  quote: "As an experienced healer, I was skeptical at first. But this course offered depths I hadn't encountered elsewhere. My readings have become so much more powerful.",
                  name: "David R.",
                  location: "London, UK",
                  highlight: "Deepened my practice"
                },
                {
                  quote: "The ancient teachings combined with practical exercises helped me finally break through patterns I'd struggled with for years. Worth every penny.",
                  name: "Maria L.",
                  location: "Toronto, Canada",
                  highlight: "Breakthrough healing"
                }
              ].map((testimonial, i) => (
                <div key={i} className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-[#1a0b2e] border border-purple-400/20 hover:border-purple-400/40 transition-all group">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-[#ff00ff]/20" />
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#ff00ff]/20 text-[#ff00ff] text-sm font-semibold">
                      {testimonial.highlight}
                    </span>
                  </div>
                  
                  <p className="text-purple-100/90 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff00ff] to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-purple-300/60 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* FAQ SECTION */}
        <section className="py-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-purple-400/40 bg-purple-900/30 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 font-bold tracking-widest uppercase text-sm">Common Questions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
                Everything you need to know before beginning your transformational journey.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "I'm new to spiritual practices – will I benefit from this course?",
                  answer: "Absolutely. The Shankara Master Course is designed for seekers at all levels. You don't need any prior knowledge or experience to benefit from these teachings. Each person's journey is unique, and the course meets you exactly where you are. All practices and concepts are explained clearly so you can implement them immediately."
                },
                {
                  question: "I'm an experienced healer – is this course still valuable for me?",
                  answer: "Yes. Shri Krishna Kalesh is a highly experienced spiritual teacher whose wisdom has helped practitioners at all levels, including seasoned healers. The course offers advanced insights, ancient techniques, and fresh perspectives that will deepen your practice and enhance your ability to serve others. If you find it's not the right fit, simply reach out – we want everyone to feel supported."
                },
                {
                  question: "Do I need to purchase the Shankara Oracle separately?",
                  answer: "Yes, the Shankara Oracle is a separate purchase. However, as a Master Course student, you'll receive an exclusive discount when you purchase the Oracle. The course teaches you how to use the Oracle at the deepest level, so having one will greatly enhance your experience."
                },
                {
                  question: "Will I have lifetime access to the course videos?",
                  answer: "The course videos are available with indefinite access, allowing you to learn at your own pace and revisit teachings whenever you need them. While access is designed to be long-term, it is subject to our Terms & Conditions – in rare cases like business changes, you would receive ample notice."
                },
                {
                  question: "Is there a time limit to complete the course?",
                  answer: "The Master Course is self-paced, so you can move through the material at your own rhythm. We recommend completing it within 90 days to maintain momentum, but there's no strict deadline. For those pursuing Certification, the 12-week timeline applies due to private sessions with Shri Krishna Kalesh – though extensions can be granted on an individual basis."
                },
                {
                  question: "Do I need to practice between sessions?",
                  answer: "To experience the full transformation this course offers, we encourage practicing mindfulness and self-awareness between sessions. These practices aren't just for the course – they become valuable tools that support every area of your life. The more you engage, the deeper your results."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-purple-900/20 border border-purple-400/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-purple-300 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-purple-200/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
            
            {/* Final CTA after FAQ */}
            <div className="mt-16 text-center">
              <p className="text-xl text-purple-100/80 mb-6">Ready to begin your transformation?</p>
              <a href="https://shankara.thrivecart.com/shankara-master-course-training-main/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#ff00ff] hover:bg-[#d900d9] text-white px-12 py-6 text-xl rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all transform hover:-translate-y-1">
                  Enroll Now for $197
                </Button>
              </a>
              
              {/* Still have questions? */}
              <div className="mt-10 pt-8 border-t border-purple-400/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-purple-300" />
                  <p className="text-lg text-purple-200/80">Still have questions?</p>
                </div>
                <Link href="/contact">
                  <Button variant="link" className="text-[#ffd700] hover:text-[#ffed4a] text-lg font-semibold group">
                    Get in touch with us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
