import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
