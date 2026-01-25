import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ArrowRight, Download, Star, Heart, Pyramid, Flower2, Moon, Sun, Compass, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";
import MantraSection from "@/components/MantraSection";
import StoneMeanings from "@/components/StoneMeanings";

// Timeline data for the interactive visual
const timelineData = [
  {
    id: "egypt",
    era: "3000 BCE",
    title: "Ancient Egypt",
    subtitle: "The Temple Mysteries",
    description: "Egyptian priests developed sophisticated divination systems using sacred geometry, hieroglyphics, and the wisdom of Thoth. The Temple of Karnak housed oracle chambers where seekers received divine guidance through symbolic interpretation.",
    icon: Pyramid,
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-900/20",
    borderColor: "border-amber-500/30",
    practices: ["Hieroglyphic Oracle", "Temple Scrying", "Dream Interpretation", "Sacred Geometry"]
  },
  {
    id: "india",
    era: "2500 BCE",
    title: "Vedic India",
    subtitle: "The Sanskrit Frequencies",
    description: "The Rishis of ancient India channeled the Vedas—sacred texts containing mantras that restructure consciousness. Sanskrit, the 'language of the gods,' carries vibrational frequencies that align the seeker with cosmic truth.",
    icon: Flower2,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-900/20",
    borderColor: "border-orange-500/30",
    practices: ["Jyotish Astrology", "Mantra Divination", "Yantra Meditation", "Nadi Reading"]
  },
  {
    id: "shaman",
    era: "10000+ BCE",
    title: "Shamanic Traditions",
    subtitle: "The Spirit Walkers",
    description: "Across every continent, shamans served as bridges between worlds. Through trance, ceremony, and sacred objects, they accessed guidance from ancestors, nature spirits, and the cosmic web of interconnection.",
    icon: Moon,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/30",
    practices: ["Stone Casting", "Spirit Journey", "Animal Totems", "Plant Medicine"]
  },
  {
    id: "pagan",
    era: "500 BCE",
    title: "Pagan Wisdom",
    subtitle: "The Earth Keepers",
    description: "Celtic druids, Norse seers, and Greek oracles preserved earth-based wisdom traditions. The Oracle at Delphi, rune casting, and ogham divination connected seekers to the rhythms of nature and the voice of the divine feminine.",
    icon: Sun,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-900/20",
    borderColor: "border-emerald-500/30",
    practices: ["Rune Casting", "Ogham Reading", "Delphic Oracle", "Wheel of the Year"]
  },
  {
    id: "shankara",
    era: "2024 CE",
    title: "The Shankara Oracle",
    subtitle: "The Sacred Synthesis",
    description: "The Shankara Oracle unites these ancient streams into a living technology of consciousness. Channeled through Krishna Kalesh over 30 years of devotion, it carries the frequencies of all traditions while offering a uniquely modern path to self-realization.",
    icon: Eye,
    color: "from-accent to-purple-500",
    bgColor: "bg-accent/20",
    borderColor: "border-accent/30",
    practices: ["Stone Divination", "Card Wisdom", "Sacred Board", "Mantra Integration"]
  }
];

export default function TheAncients() {
  const [activeTimeline, setActiveTimeline] = useState("shankara");
  const activeData = timelineData.find(t => t.id === activeTimeline) || timelineData[4];

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#2a1b3d]">
      <SEO 
        title="The Ancients | Sacred Lineage of Shankara" 
        description="Explore the ancient origins of The Shankara Oracle. Discover the 5,000-year lineage connecting Vedic India and Ancient Egypt through sacred Sanskrit frequencies."
      />

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="pt-32 pb-24 relative overflow-hidden min-h-[90vh] flex items-center bg-[#2a1b3d]">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content - Left Side */}
              <div className="w-full lg:w-1/2 text-left space-y-8">
                <Badge variant="outline" className="border-purple-400 text-purple-200 px-4 py-1 text-sm tracking-[0.2em] uppercase bg-purple-900/30 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 mr-2 text-accent" /> Sacred Lineage
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                  The <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-accent to-purple-300 glow-text">
                    Ancients
                  </span>
                </h1>
                
                <p className="text-xl text-purple-200/90 leading-relaxed font-light max-w-xl">
                  Journey through 5,000 years of sacred divination wisdom. From the temple mysteries of Egypt to the Sanskrit frequencies of India, discover the timeless lineage that flows through The Shankara Oracle.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/shop">
                    <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 rounded-full font-bold shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                      Get the Oracle <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/master-training">
                    <Button variant="outline" size="lg" className="border-purple-400/30 text-purple-200 hover:bg-purple-900/30 px-8 rounded-full backdrop-blur-sm">
                      Learn the Wisdom
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Header Image - Right Side */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-2xl transform scale-115 origin-center">
                   {/* Elegant Container with Gold Border */}
                   <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#d4af37] via-[#f9e59e] to-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                      <div className="rounded-[22px] overflow-hidden bg-[#1a0b2e] relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay z-10" />
                        <img 
                          src="https://shankara-pull.b-cdn.net/images/ancient-egypt-divination.webp" 
                          alt="Ancient Egyptian Divination System" 
                          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                        />
                      </div>
                   </div>
                   
                   {/* Decorative Elements */}
                   <div className="absolute -top-6 -right-6 w-12 h-12 border border-[#d4af37]/50 rounded-full animate-spin-slow" />
                   <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-[#d4af37]/30 rounded-full animate-spin-reverse-slow" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE TIMELINE SECTION */}
        <section className="py-24 relative bg-gradient-to-b from-[#1a0b2e] to-[#251836]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <Badge className="bg-amber-900/30 text-amber-200 border border-amber-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
                <Compass className="w-3 h-3 mr-2" /> Interactive Timeline
              </Badge>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                The Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-accent">Lineage</span>
              </h2>
              <p className="text-xl text-purple-200/80 max-w-3xl mx-auto mb-4">
                Click each tradition to explore how ancient wisdom flows through The Shankara Oracle
              </p>
              <div className="flex items-center justify-center gap-2 animate-pulse">
                <span className="text-accent font-bold text-lg">👆 Click the icons below to explore</span>
              </div>
            </div>

            {/* Timeline Navigation */}
            <div className="relative mb-16">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/30 via-purple-500/30 to-accent/30 transform -translate-y-1/2 hidden md:block" />
              
              {/* Timeline Points */}
              <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 relative z-10">
                {timelineData.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeTimeline === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTimeline(item.id)}
                      className={`flex flex-col items-center group transition-all duration-500 ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                    >
                      {/* Icon Circle */}
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? `bg-gradient-to-br ${item.color} shadow-[0_0_30px_rgba(255,255,255,0.3)]` 
                          : 'bg-purple-900/50 border border-white/20 group-hover:border-white/40'
                      }`}>
                        <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${isActive ? 'text-white' : 'text-purple-300 group-hover:text-white'}`} />
                      </div>
                      
                      {/* Era Label */}
                      <span className={`mt-3 text-xs md:text-sm font-bold tracking-wider transition-colors ${
                        isActive ? 'text-white' : 'text-purple-400 group-hover:text-purple-200'
                      }`}>
                        {item.era}
                      </span>
                      
                      {/* Title */}
                      <span className={`text-sm md:text-base font-display transition-colors ${
                        isActive ? 'text-accent' : 'text-purple-300 group-hover:text-white'
                      }`}>
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Timeline Content */}
            <div className={`max-w-5xl mx-auto rounded-3xl p-8 md:p-12 ${activeData.bgColor} border ${activeData.borderColor} backdrop-blur-sm transition-all duration-500`}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon & Title */}
                <div className="shrink-0">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${activeData.color} flex items-center justify-center shadow-lg`}>
                    <activeData.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">{activeData.era}</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mt-1">{activeData.title}</h3>
                    <p className="text-lg text-accent font-medium mt-1">{activeData.subtitle}</p>
                  </div>
                  
                  <p className="text-lg text-purple-100/90 leading-relaxed">
                    {activeData.description}
                  </p>
                  
                  {/* Practices */}
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-purple-400 font-bold mb-3">Sacred Practices</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeData.practices.map((practice, i) => (
                        <span 
                          key={i} 
                          className={`px-4 py-2 rounded-full text-sm font-medium ${activeData.bgColor} border ${activeData.borderColor} text-white/90`}
                        >
                          {practice}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Arrow to Shankara */}
            {activeTimeline !== "shankara" && (
              <div className="text-center mt-12">
                <button 
                  onClick={() => setActiveTimeline("shankara")}
                  className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors group"
                >
                  <span className="text-lg font-medium">See how this flows into Shankara</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ANCIENT WISDOM SECTION */}
        <section className="py-32 relative border-y border-white/5 bg-[#251836]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - The Mystical Stones Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/stones-bag.webp" 
                    alt="Sacred Stones in the Cosmos" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-yellow-200 font-display text-lg italic tracking-wide">
                      "The frequency of the divine..."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content about 5000 Years, Egyptology, Sanskrit */}
              <div className="space-y-8">
                <Badge className="bg-yellow-900/30 text-yellow-200 border border-yellow-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md">
                  <Star className="w-3 h-3 mr-2 fill-current" /> 5,000 Year Lineage
                </Badge>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Ancient Divination & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-400">
                    The Power of Sanskrit
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-purple-100/80 font-light leading-relaxed">
                  <p>
                    This is how they did it 5,000 years ago. The Shankara Oracle is not a modern invention but a resurrection of sacred technologies used in <strong className="text-yellow-200 font-medium">Ancient Egypt and Vedic India</strong> to commune with the divine.
                  </p>
                  <p>
                    At the heart of this system lies the frequency-changing beauty of <strong className="text-yellow-200 font-medium">Sanskrit</strong>. Known as the "language of the gods," Sanskrit vibrations have the power to restructure consciousness, clear karmic debris, and elevate your energetic frequency instantly.
                  </p>
                  <p>
                    By engaging with these sacred symbols and sounds, you are not just "playing a game"—you are stepping into a timeless stream of wisdom, accessing the same profound depth and clarity that guided pharaohs and rishis millennia ago.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TIPS & SWAPS */}
        <section className="py-32 bg-[#2a1b3d] relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              
              {/* Content - Left */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                  Shankara <br />
                  <span className="text-accent">Tips & Swaps</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-2xl hover:border-accent/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-accent mr-3" /> The Puja Ritual
                    </h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      Transform your board into an altar. Place fresh flowers on the lotus petals, light a candle in the center (Bindu), and offer your intentions before you even cast a stone. This charges the board with your unique frequency.
                    </p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/20 p-8 rounded-2xl hover:border-accent/30 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-accent mr-3" /> Stone Swaps
                    </h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      While Obsidian is the master stone, you can swap it for Rose Quartz when asking about love, or Amethyst for higher spiritual guidance. The board welcomes all crystalline energies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image - Right - Puja Board */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b3d] via-transparent to-transparent opacity-50 z-10" />
                  <img 
                    src="https://shankara-pull.b-cdn.net/images/puja-board.webp" 
                    alt="Shankara Puja Ritual" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <p className="text-white/90 font-serif italic text-lg text-center">
                      "The board is a temple. Enter with reverence."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STONE MEANINGS SECTION */}
        <StoneMeanings />

        {/* MANTRA SECTION */}
        <MantraSection />

        {/* CTA SECTION */}
        <section className="py-24 bg-gradient-to-b from-[#251836] to-[#1a0b2e] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Step Into the Lineage
            </h2>
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto mb-10">
              Join the thousands who have reconnected with this ancient stream of wisdom through The Shankara Oracle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-12 h-16 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all transform hover:scale-105">
                  Get the Oracle
                </Button>
              </Link>
              <Link href="/master-training">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-12 h-16 text-lg rounded-full font-bold">
                  Learn the Wisdom
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
