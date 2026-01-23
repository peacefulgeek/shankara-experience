import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import SEO from "@/components/SEO";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rebecca M.",
      role: "Certified Shankara Master",
      text: "I have taken many courses, but this one is different. It didn't just teach me a system; it connected me to my own soul. Paul's teaching style is electrifying and deeply compassionate."
    },
    {
      name: "Sarah J.",
      role: "Therapist",
      text: "The Shankara Oracle has become an indispensable tool in my practice. It allows me to get to the root of my clients' issues with incredible speed and accuracy."
    },
    {
      name: "Michael T.",
      role: "Spiritual Seeker",
      text: "I was skeptical at first, but the accuracy of the readings blew me away. The Shankara system is truly a gift to humanity."
    },
    {
      name: "Elena R.",
      role: "Yoga Teacher",
      text: "The imagery of the cards is so potent. Just looking at them shifts my energy. I use them daily for my own guidance and grounding."
    },
    {
      name: "David K.",
      role: "Life Coach",
      text: "The Master Course is worth every penny. It's not just about learning a divination tool; it's a complete spiritual education."
    },
    {
      name: "Jennifer L.",
      role: "Artist",
      text: "The sacred geometry of the board is fascinating. I feel a deep connection to the ancient wisdom encoded in this system."
    }
  ];

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Testimonials" 
        description="Read stories of transformation from students, healers, and clients of the Shankara Oracle."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Transformation</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
          Hear from the community of healers, seekers, and teachers who have been touched by the Shankara Oracle.
        </p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 flex flex-col relative group backdrop-blur-md border border-white/10">
                <Quote className="absolute top-6 right-6 text-accent/20 w-12 h-12 group-hover:text-accent/40 transition-colors" />
                
                <div className="flex gap-1 mb-6 text-accent">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                
                <p className="text-white/80 leading-relaxed mb-6 italic flex-grow text-lg">
                  "{t.text}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-accent text-sm uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
