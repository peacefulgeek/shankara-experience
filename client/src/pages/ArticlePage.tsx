import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/ArticleSchema";
import { Link } from "wouter";
import { articlesBySlug, allArticles } from "@/data/articles-data";

// Legacy articles for backwards compatibility (existing articles)
const legacyArticles: Record<string, {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  authorBio: string;
  authorImage: string;
  image: string;
  content: React.ReactNode;
}> = {
  "the-power-of-obsidian-in-divination": {
    title: "The Power of Obsidian in Divination",
    subtitle: "Why this volcanic glass is the heartbeat of the Shankara Oracle.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    author: "Paul Wagner",
    authorBio: "Paul Wagner is the creator of The Shankara Oracle, a spiritual guide, and a 5-time EMMY® Award winner. He has spent decades exploring the intersection of consciousness, ritual, and personal transformation.",
    authorImage: "https://shankara-pull.b-cdn.net/images/authors/paul-wagner.webp",
    image: "https://shankara-pull.b-cdn.net/images/obsidian-divination.webp",
    content: (
      <>
        <p className="lead-paragraph text-xl leading-relaxed text-gray-700 mb-8">
          In the realm of spiritual tools, few materials command the raw, grounding presence of Obsidian. Born from the belly of the earth, cooled rapidly from volcanic lava, it is a stone of truth, protection, and profound clarity. In the Shankara Oracle, the 18 Obsidian Stones are not mere accessories—they are the conduits through which the Divine speaks.
        </p>
        
        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">The Mirror of Truth</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Ancient cultures, from the Mayans to the Aztecs, revered Obsidian as a mirror. They believed it could reveal not just one's reflection, but one's soul. When you cast the stones onto the Shankara board, you are engaging in this ancient practice of scrying. The way they fall, the patterns they form, and the elements they touch are a direct reflection of your energetic state.
        </p>

        <div className="pull-quote border-l-4 border-accent pl-6 py-2 my-10 italic text-2xl text-gray-600 font-serif bg-gray-50 rounded-r-lg">
          "Obsidian does not lie. It cuts through illusion to reveal the core of the matter, offering a clarity that can be startling but is always liberating."
        </div>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">Grounding the Ethereal</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Divination can often feel ungrounded—a flight into the ethers without a tether. Obsidian provides that tether. It is deeply connected to the Root Chakra (Muladhara), anchoring high-frequency spiritual insights into physical reality. This ensures that the guidance you receive is not just theoretical, but actionable and tangible.
        </p>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">Working with Your Stones</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Before every reading, hold the bag of stones to your heart. Feel their weight. They are millions of years old, carrying the wisdom of the Earth itself. Breathe your intention into them. When you release them onto the board, trust that their placement is not random. It is a sacred choreography of gravity, intention, and Spirit.
        </p>
      </>
    )
  },
  "understanding-the-sacred-geometry-grid": {
    title: "Understanding the Sacred Geometry Grid",
    subtitle: "A deep dive into how the Sri Yantra and Lotus patterns guide your intuition.",
    date: "Sep 28, 2025",
    readTime: "8 min read",
    author: "Paul Wagner",
    authorBio: "Paul Wagner is the creator of The Shankara Oracle, a spiritual guide, and a 5-time EMMY® Award winner. He has spent decades exploring the intersection of consciousness, ritual, and personal transformation.",
    authorImage: "https://shankara-pull.b-cdn.net/images/authors/paul-wagner.webp",
    image: "https://shankara-pull.b-cdn.net/images/sacred-geometry-grid.webp",
    content: (
      <>
        <p className="lead-paragraph text-xl leading-relaxed text-gray-700 mb-8">
          The Shankara Board is more than a playing surface; it is a cosmological map. Every line, circle, and color has been meticulously designed to resonate with the fundamental frequencies of the Universe. At its heart lies the Sri Yantra, one of the most powerful symbols in sacred geometry.
        </p>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">The Sri Yantra: The Engine of Creation</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The central motif of the board is inspired by the Sri Yantra, representing the union of the Divine Masculine and Divine Feminine. The upward-pointing triangles symbolize Shiva (consciousness), while the downward-pointing triangles symbolize Shakti (energy). Where they intersect is the point of creation—the Bindu.
        </p>

        <div className="pull-quote border-l-4 border-accent pl-6 py-2 my-10 italic text-2xl text-gray-600 font-serif bg-gray-50 rounded-r-lg">
          "When you place your focus on the center of the board, you are aligning yourself with the creative force of the Universe itself."
        </div>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">The Lotus of Unfolding</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Surrounding the center are the petals of a lotus. In Eastern traditions, the lotus represents the unfolding of the soul. Just as the lotus rises from the mud to bloom in the sun, your consciousness rises through the layers of the board. The outer rings represent the external world, while the inner rings guide you closer to your own center.
        </p>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">Navigating the Grid</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          As the stones land on different sections of the grid—Earth, Water, Fire, Air, Ether—they highlight which elemental forces are active in your life. A stone on Fire might indicate a need for action or transformation, while a stone on Water calls for emotional flow and intuition. The grid gives structure to the intuitive messages, allowing you to read the "weather" of your soul.
        </p>
      </>
    )
  },
  "how-to-prepare-for-a-reading": {
    title: "How to Prepare for a Reading",
    subtitle: "Essential rituals to clear your energy and open your channel to the Divine.",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    author: "Ana Andreea",
    authorBio: "Ana Andreea is a Shankara Master and intuitive guide. She specializes in creating sacred spaces and helping others connect with their inner wisdom through ritual and meditation.",
    authorImage: "https://shankara-pull.b-cdn.net/images/authors/ana-andreea.webp",
    image: "https://shankara-pull.b-cdn.net/images/reading-preparation.webp",
    content: (
      <>
        <p className="lead-paragraph text-xl leading-relaxed text-gray-700 mb-8">
          The quality of your answer depends on the quality of your question—and the clarity of your presence. The Shankara Oracle is a sensitive instrument. To receive clear guidance, you must first tune the instrument: yourself.
        </p>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">1. Clear the Space</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Physical clutter creates energetic clutter. Before you open the board, take a moment to tidy your surroundings. You might light a candle or burn some sage to signal to your subconscious that you are entering a sacred time. This simple act creates a boundary between the mundane world and the mystical space of the reading.
        </p>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">2. Center Yourself</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Sit comfortably with your spine straight. Close your eyes and take three deep breaths. Inhale peace, exhale distraction. visualize a cord of light connecting your tailbone to the center of the Earth, and a beam of light from the crown of your head connecting to the Source. You are the bridge between Heaven and Earth.
        </p>

        <div className="pull-quote border-l-4 border-accent pl-6 py-2 my-10 italic text-2xl text-gray-600 font-serif bg-gray-50 rounded-r-lg">
          "The Oracle speaks in whispers. To hear it, you must quiet the roar of the daily mind."
        </div>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">3. Formulate Your Question</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Avoid Yes/No questions, as they limit the scope of the guidance. Instead of asking "Will I get the job?", ask "What do I need to know about my career path?" or "How can I align with my highest purpose?" Open-ended questions invite the Universe to give you a fuller, more nuanced picture.
        </p>

        <h2 className="text-3xl font-bold text-[#1a0b2e] mt-12 mb-6 font-display">4. Invocation</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          You may wish to say a simple prayer or invocation. "I call upon my guides and the highest wisdom to be present with me now. May this reading bring clarity, healing, and truth for the highest good of all." Now, you are ready to cast the stones.
        </p>
      </>
    )
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Check both new articles data and legacy articles
  const newArticle = articlesBySlug[slug];
  const legacyArticle = legacyArticles[slug];
  
  // Use new article if available, otherwise fall back to legacy
  const article = newArticle || legacyArticle;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc]">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-[#1a0b2e] mb-4">Article Not Found</h1>
          <Link href="/wisdom">
            <Button>Return to Wisdom</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = allArticles
    .filter(a => a.slug !== slug && a.category === (newArticle?.category || 'Wisdom'))
    .slice(0, 3);

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#fcfcfc]">
      <SEO 
        title={`${article.title} | Shankara Wisdom`} 
        description={newArticle?.metaDescription || article.subtitle}
        image={article.image}
      />
      
      {/* JSON-LD Structured Data for Rich Snippets */}
      <ArticleSchema
        title={article.title}
        description={newArticle?.metaDescription || article.subtitle}
        image={article.image}
        datePublished={article.date}
        authorName={article.author}
        authorImage={article.authorImage}
        url={`https://theshankaraexperience.com/wisdom/${slug}`}
        category={newArticle?.category || 'Wisdom'}
      />
      
      <Navigation />
      
      {/* Clean White Header - PDF Style */}
      <div className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1a0b2e] mb-6 leading-tight tracking-tight">
            {article.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-serif italic font-light mb-8">
            {article.subtitle}
          </p>
          
          <div className="flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-accent" />
              {article.date}
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-accent" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Main Content - WIDER & CLEANER */}
          <article className="lg:w-3/4">
             {/* Featured Image - Clean, no parallax */}
             <div className="rounded-xl overflow-hidden shadow-sm mb-12">
               <img src={article.image} alt={article.title} className="w-full h-auto" />
             </div>

             <div className="prose prose-xl prose-purple max-w-none font-serif text-gray-800 leading-relaxed">
               {article.content}
             </div>

             {/* PREMIUM CTA BOX */}
             <div className="mt-20 p-10 bg-[#1a0b2e] rounded-2xl relative overflow-hidden group">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-1000" />
               
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                 <div>
                   <h3 className="text-3xl font-display font-bold text-white mb-4">
                     Dive Deeper with Paul Wagner
                   </h3>
                   <p className="text-purple-200/80 mb-6 text-lg">
                     Join the Shankara Master Training and learn to read the oracle like a professional. Unlock your intuition and start your certification journey today.
                   </p>
                   <Link href="/certification">
                     <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                       Explore Training <ArrowRight className="ml-2 w-5 h-5" />
                     </Button>
                   </Link>
                 </div>
               </div>
             </div>

             {/* Related Articles */}
             {relatedArticles.length > 0 && (
               <div className="mt-16">
                 <h3 className="text-2xl font-display font-bold text-[#1a0b2e] mb-8">Related Articles</h3>
                 <div className="grid md:grid-cols-3 gap-6">
                   {relatedArticles.map((related) => (
                     <Link key={related.slug} href={`/wisdom/${related.slug}`}>
                       <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
                         <div className="h-32 overflow-hidden">
                           <img 
                             src={related.image} 
                             alt={related.title} 
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                         </div>
                         <div className="p-4">
                           <h4 className="font-display font-bold text-[#1a0b2e] text-sm leading-tight group-hover:text-accent transition-colors line-clamp-2">
                             {related.title}
                           </h4>
                         </div>
                       </div>
                     </Link>
                   ))}
                 </div>
               </div>
             )}
          </article>

          {/* Sidebar - ELEGANT & MINIMAL */}
          <aside className="lg:w-1/4 sticky top-32 space-y-12 hidden lg:block">
            
            {/* Author Widget */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent p-1">
                 <img src={article.authorImage} alt={article.author} className="w-full h-full object-cover rounded-full" />
              </div>
              <h4 className="font-display font-bold text-[#1a0b2e] text-lg">{article.author}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Author & Creator</p>
              <p className="text-sm text-gray-600 leading-relaxed font-serif italic">
                {article.authorBio}
              </p>
            </div>

            <div className="w-full h-px bg-gray-200" />

            {/* Share Widget */}
            <div>
              <h4 className="font-display font-bold text-[#1a0b2e] mb-4 flex items-center gap-2">
                <Share2 size={18} className="text-accent" /> Share this Wisdom
              </h4>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full text-gray-600 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full text-gray-600 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full text-gray-600 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                  <span className="sr-only">X</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full text-gray-600 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                   <span className="sr-only">LinkedIn</span>
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </Button>
              </div>
            </div>

            {/* Back to Wisdom */}
            <div className="pt-4">
              <Link href="/wisdom">
                <Button variant="outline" className="w-full rounded-full text-gray-600 border-gray-300 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                  <ArrowLeft size={16} className="mr-2" /> Back to Wisdom
                </Button>
              </Link>
            </div>

          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
