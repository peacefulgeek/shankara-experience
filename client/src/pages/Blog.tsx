import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, Share2 } from "lucide-react";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Link } from "wouter";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tools", "Wisdom", "Practice", "Rituals"];

  const posts = [
    {
      id: 1,
      title: "The Power of Obsidian in Divination",
      excerpt: "In the journey of spiritual awakening, few tools offer the profound grounding and clarity of obsidian. Discover why this volcanic glass is the heartbeat of the Shankara Oracle.",
      date: "Oct 12, 2025",
      author: "Paul Wagner",
      category: "Tools",
      image: "/images/obsidian-divination.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding the Sacred Geometry Grid",
      excerpt: "The Shankara Board is not just a surface—it is a map of the cosmos. A deep dive into how the Sri Yantra and Lotus patterns guide your intuition.",
      date: "Sep 28, 2025",
      author: "Paul Wagner",
      category: "Wisdom",
      image: "/images/sacred-geometry-grid.jpg",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "How to Prepare for a Reading",
      excerpt: "Before you ask the Oracle, you must quiet the mind. Learn the essential rituals to clear your energy and open your channel to the Divine.",
      date: "Sep 15, 2025",
      author: "Ana Andreea",
      category: "Practice",
      image: "/images/reading-preparation.jpg",
      readTime: "6 min read"
    }
  ];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#fcfcfc]">
      <SEO 
        title="Wisdom & Insights | The Shankara Oracle" 
        description="Deepen your spiritual practice with articles on divination, sacred geometry, and emotional freedom."
      />
      
      <Navigation />
      
      {/* Header Section - Clean & Elegant */}
      <section className="pt-40 pb-20 text-center container mx-auto px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-accent to-purple-500" />
        
        <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 text-[#1a0b2e] tracking-tight">
          Wisdom
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Sacred teachings, rituals, and insights to guide your journey with the Shankara Oracle.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-[#1a0b2e] text-white shadow-lg scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-32 bg-gray-50 pt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {filteredPosts.map((post, i) => (
              <article key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-gray-100">
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-[#1a0b2e] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest border border-gray-200">
                    {post.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Date & Author */}
                  <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-4 uppercase tracking-wider font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-accent" />
                      {post.date}
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-accent" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-[#1a0b2e] mb-4 leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                         <img src="/images/paul-wagner-avatar.jpg" alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{post.author}</span>
                    </div>
                    
                    <Button variant="ghost" className="text-accent hover:text-[#1a0b2e] p-0 h-auto font-bold uppercase text-[10px] tracking-widest group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight size={12} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup - PDF Style */}
      <section className="py-24 bg-[#1a0b2e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/sacred-geometry-grid.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-12 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Join the Inner Circle
            </h2>
            <p className="text-purple-200 mb-8 font-light">
              Receive weekly wisdom, ritual guides, and exclusive offers directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 font-bold tracking-wide shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
