import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import SEO from "@/components/SEO";

export default function Blog() {
  const posts = [
    {
      title: "The Power of Obsidian in Divination",
      excerpt: "Why we use obsidian stones in the Shankara Oracle and how they amplify your intuitive connection.",
      date: "Oct 12, 2025",
      author: "Paul Wagner",
      category: "Tools",
      image: "/images/stones.png"
    },
    {
      title: "Understanding the Sacred Geometry Grid",
      excerpt: "A deep dive into the layout of the Oracle Board and how it maps to the cosmic consciousness.",
      date: "Sep 28, 2025",
      author: "Paul Wagner",
      category: "Wisdom",
      image: "/images/sacred-geometry-bg.png"
    },
    {
      title: "How to Prepare for a Reading",
      excerpt: "Rituals and practices to clear your energy and open your channel before consulting the oracle.",
      date: "Sep 15, 2025",
      author: "Ana Andreea",
      category: "Practice",
      image: "/images/shankara-oracle-intimate-less-height.png"
    }
  ];

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Blog & Insights" 
        description="Articles on divination, sacred geometry, and spiritual growth from the Shankara community."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Wisdom</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
          Deepen your understanding of the Shankara system and the spiritual principles that guide it.
        </p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="group glass-panel rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col backdrop-blur-md">
                <div className="aspect-[16/10] relative overflow-hidden bg-black/40">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-white/50 mb-4 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-3 text-white group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Button variant="link" className="text-accent hover:text-white p-0 h-auto font-bold uppercase text-xs tracking-widest group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
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
