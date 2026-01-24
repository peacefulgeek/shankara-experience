import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import SEO from "@/components/SEO";

export default function Videos() {
  const videos = [
    {
      title: "Unboxing The Shankara Oracle",
      description: "Watch as we reveal the sacred components of the Shankara system.",
      thumbnail: "https://shankara-pull.b-cdn.net/images/full-set.webp",
      duration: "12:45"
    },
    {
      title: "How to Use the Oracle Board",
      description: "A step-by-step guide to the sacred geometry grid.",
      thumbnail: "https://shankara-pull.b-cdn.net/images/shankara-oracle-intimate-less-height.webp",
      duration: "08:30"
    },
    {
      title: "Student Testimonials",
      description: "Hear from our certified masters about their journey.",
      thumbnail: "https://shankara-pull.b-cdn.net/images/paul-2.webp",
      duration: "15:20"
    },
    {
      title: "The Meaning of the 4 Decks",
      description: "Deep dive into the symbolism of each deck.",
      thumbnail: "https://shankara-pull.b-cdn.net/images/master-course-banner-1.webp",
      duration: "22:10"
    }
  ];

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Video Library" 
        description="Watch tutorials, sample readings, and deep dives into the Shankara Oracle system."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Wisdom</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
          Immerse yourself in the teachings of the Shankara Oracle. Watch tutorials, unboxings, and inspirational messages from Krishna Kalesh.
        </p>
      </section>

      {/* Featured Video: The Shankara Oracle Board */}
      <section className="pb-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)] bg-black/40 backdrop-blur-sm">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe 
              src="https://player.vimeo.com/video/1127562653?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
              title="The Shankara Oracle Board" 
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <div key={i} className="group glass-panel rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col backdrop-blur-md">
                <div className="aspect-video relative overflow-hidden bg-black/40 group-hover:bg-black/30 transition-colors">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-accent fill-accent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-xs font-mono">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-display mb-2 text-white group-hover:text-accent transition-colors">{video.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {video.description}
                  </p>
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
