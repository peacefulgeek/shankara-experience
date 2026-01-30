import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Link } from "wouter";
import MantraPracticePromo from "@/components/MantraPracticePromo";
import { allArticles } from "@/data/articles-data";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Oracle Cards", "History", "Psychology", "Tools", "Wisdom", "Practice", "Rituals"];

  // Transform articles data for display
  const posts = allArticles.map(article => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    author: article.author,
    authorImage: article.authorImage,
    category: article.category,
    image: article.image,
    readTime: article.readTime
  }));

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#fcfcfc]">
      <SEO 
        title="Wisdom & Rituals | The Shankara Oracle" 
        description="Explore articles on divination, sacred geometry, and consciousness. Deepen your practice with wisdom from the Shankara masters."
      />
      
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 mb-20 text-center">
          <Badge variant="outline" className="border-accent text-accent px-4 py-1 text-sm tracking-[0.2em] uppercase mb-6 bg-accent/5">
            The Shankara Journal
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-[#1a0b2e] mb-8">
            Wisdom & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">Rituals</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            A library of sacred knowledge to deepen your connection with the Oracle and your own inner guidance.
          </p>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 mb-16 overflow-x-auto">
          <div className="flex justify-center gap-3 min-w-max flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-[#1a0b2e] text-white shadow-lg"
                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid - PDF Style */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-white/90 text-[#1a0b2e] hover:bg-white font-bold backdrop-blur-sm shadow-sm text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#1a0b2e] mb-3 leading-tight group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow font-serif italic text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
                         <img src={post.authorImage} alt={post.author} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{post.author}</span>
                    </div>
                    
                    <Link href={`/wisdom/${post.slug}`}>
                      <Button variant="ghost" className="text-accent hover:text-[#1a0b2e] p-0 h-auto font-bold uppercase text-[10px] tracking-widest group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight size={12} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400 font-light">No articles found in this category.</p>
              <Button variant="link" onClick={() => setActiveCategory("All")} className="text-accent mt-4">
                View all articles
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Mantra Practice Promo */}
      <MantraPracticePromo />

      <Footer />
    </div>
  );
}
