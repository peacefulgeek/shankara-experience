import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Sparkles, Zap, Star, User, Unlock, Heart } from "lucide-react";

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
        <div className="container mx-auto px-4 max-w-4xl space-y-12 text-lg text-white/80 leading-relaxed">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6 drop-shadow-md">A Divine Transmission</h2>
            <p>
              The Shankara Oracle was born out of a vision to open a divine portal to the infinite wisdom of The Universe, guiding seekers to embody virtue, gain clarity, and walk the path of self-mastery.
            </p>
            <p className="mt-4">
              Created by Paul Wagner (Krishna Kalesh), a spiritual teacher and devotee of Amma for over 30 years, this system is not merely a set of cards—it is a living technology of consciousness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <div className="py-16">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-16 drop-shadow-md">
                Awaken Your Inner Master
             </h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Star, title: "Awaken Inner Master", desc: "Connect with your inner wisdom and release what no longer serves you." },
                  { icon: Zap, title: "Unlock Intuition", desc: "Replace triggers with profound insight and move beyond limited identity." },
                  { icon: User, title: "Become an Alchemist", desc: "Discover transformative alchemy principles that turn challenges into opportunities." },
                  { icon: Unlock, title: "Lead Rituals", desc: "Learn to hold sacred space for yourself and others with confidence." },
                  { icon: Heart, title: "Serve Humanity", desc: "Use your gifts to bring healing and light to the world around you." },
                  { icon: Sparkles, title: "Master Your Destiny", desc: "Align with your soul's blueprint and create a life of purpose and joy." }
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="p-4 rounded-full bg-black/30 border border-white/10 group-hover:border-accent/50 transition-colors">
                        <item.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                        <p className="text-white/60 text-base leading-relaxed group-hover:text-white/80 transition-colors">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div>
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
