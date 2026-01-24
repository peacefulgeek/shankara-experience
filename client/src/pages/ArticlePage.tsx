import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { Link } from "wouter";

// This would typically come from a CMS or database
const articles = {
  "the-power-of-obsidian-in-divination": {
    title: "The Power of Obsidian in Divination",
    subtitle: "Why this volcanic glass is the heartbeat of the Shankara Oracle.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    author: "Paul Wagner",
    authorBio: "Paul Wagner is the creator of The Shankara Oracle, a spiritual guide, and a 5-time EMMY® Award winner. He has spent decades exploring the intersection of consciousness, ritual, and personal transformation.",
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
  const slug = params.slug;
  const article = articles[slug as keyof typeof articles];

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

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-accent selection:text-white overflow-x-hidden relative bg-[#fcfcfc]">
      <SEO 
        title={`${article.title} | Shankara Wisdom`} 
        description={article.subtitle}
      />
      
      <Navigation />
      
      {/* Clean White Header - PDF Style */}
      <div className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-[#1a0b2e] mb-6 leading-tight tracking-tight">
            {article.title}
          </h1>
          <p className="text-2xl text-gray-500 font-serif italic font-light mb-8">
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
                 <div className="flex-1">
                   <h3 className="text-3xl font-display font-bold text-white mb-4">
                     Dive Deeper with Paul Wagner
                   </h3>
                   <p className="text-purple-200 text-lg mb-6 leading-relaxed">
                     Ready to experience the Shankara Oracle firsthand? Book a private session with Paul or bring the magic home today.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                     <Link href="/shop">
                       <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 font-bold text-base h-12">
                         Buy The Oracle
                       </Button>
                     </Link>
                     <a href="https://paulwagner.com/book" target="_blank" rel="noopener noreferrer">
                       <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 font-bold text-base h-12">
                         Book a Session
                       </Button>
                     </a>
                   </div>
                 </div>
                 <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                    <Sparkles className="w-16 h-16 text-accent animate-pulse" />
                 </div>
               </div>
             </div>
          </article>

          {/* Sidebar - Author Bio - CORRECT IMAGE & STYLING */}
          <aside className="lg:w-1/4 sticky top-32">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg ring-1 ring-gray-100">
                 <img src="https://shankara-pull.b-cdn.net/images/paul-wagner.webp" alt={article.author} className="w-full h-full object-cover" />
              </div>
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-[#1a0b2e] text-lg">Written by</h3>
                <p className="text-accent font-bold uppercase text-xs tracking-widest mt-1">{article.author}</p>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed italic mb-8">
                {article.authorBio}
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Share</h4>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-50 text-purple-900">
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
               <Link href="/wisdom">
                <a className="inline-flex items-center text-gray-400 hover:text-accent font-bold uppercase tracking-widest text-xs transition-colors">
                  <ArrowLeft size={14} className="mr-2" /> Back to Wisdom
                </a>
              </Link>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
