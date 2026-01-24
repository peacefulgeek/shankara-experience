import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Sparkles, Zap, Star, User, Unlock, Heart, Crown, Eye, Flame, BookOpen, Users, Key } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="About Us" 
        description="Learn about the origins of the Shankara Oracle and its creator, Paul Wagner (Krishna Kalesh)."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
            The Story of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">
              Shankara
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-5xl space-y-24 text-lg text-white/80 leading-relaxed">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-6 drop-shadow-md">A Divine Transmission</h2>
            <p>
              The Shankara Oracle was born out of a vision to open a divine portal to the infinite wisdom of The Universe, guiding seekers to embody virtue, gain clarity, and walk the path of self-mastery.
            </p>
            <p className="mt-4">
              Created by Paul Wagner (Krishna Kalesh), a spiritual teacher and devotee of Amma for over 30 years, this system is not merely a set of cards—it is a living technology of consciousness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <img 
              src="https://shankara-pull.b-cdn.net/images/paul-2.webp" 
              alt="Paul Wagner" 
              className="rounded-2xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
            />
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 drop-shadow-md">Meet the Creator</h3>
              <p>
                Paul Wagner, also known as Krishna Kalesh, has spent decades studying with masters in India and around the world. His mission is to empower individuals to liberate themselves from suffering and awaken to their true nature.
              </p>
              <p className="mt-4 italic border-l-2 border-accent/50 pl-4">
                "Shankara is my heart's offering to your awakening. It is designed to mirror your soul's journey and provide the precise guidance you need in every moment."
              </p>
            </div>
          </div>

          {/* ELEGANT 6 PILLARS SECTION - REDESIGNED */}
          <div className="py-16 relative">
             {/* Ambient Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

             <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4 drop-shadow-lg relative z-10">
                What You Will Master
             </h2>
             <p className="text-center text-purple-200/70 mb-16 max-w-2xl mx-auto relative z-10 font-light text-xl">
                The Shankara system is a complete pathway to spiritual sovereignty.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {[
                  { icon: Crown, title: "Awaken Inner Master", desc: "Connect with your inner wisdom and release what no longer serves you." },
                  { icon: Eye, title: "Unlock Intuition", desc: "Replace triggers with profound insight and move beyond limited identity." },
                  { icon: Flame, title: "Become an Alchemist", desc: "Discover transformative alchemy principles that turn challenges into opportunities." },
                  { icon: BookOpen, title: "Ancient Wisdom", desc: "Dive into pure teachings about Karma, Dharma, and astrology basics." },
                  { icon: Users, title: "Serve Humanity", desc: "Enhance your abilities to offer new perspectives and guide others toward healing." },
                  { icon: Key, title: "Lead Rituals", desc: "Uncover the role of rituals and how they can serve you on your path." }
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-black/20 backdrop-blur-sm">
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 border border-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-6 p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all duration-500">
                        <item.icon className="w-8 h-8 text-purple-200 group-hover:text-white transition-colors duration-500" />
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-purple-200/70 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-6 drop-shadow-md">The Meaning of "Shankara"</h2>
            <p>
              "Shankara" is a Sanskrit name often associated with Lord Shiva, the transformer of the universe. It translates to "Giver of Joy" or "Beneficent." In the context of this oracle, it represents the transformative power of truth and the joy that arises from aligning with your dharma (life purpose).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
