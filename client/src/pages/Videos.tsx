import Navigation from "@/components/Navigation";
import MantraPracticePromo from "@/components/MantraPracticePromo";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import SEO from "@/components/SEO";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

export default function Videos() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setActiveVideo(url);
    setIsVideoOpen(true);
  };

  const newVideos = [
    {
      id: "1157972251",
      title: "TSE Video page 6",
      thumbnail: "https://vumbnail.com/1157972251.jpg"
    },
    {
      id: "1157972065",
      title: "TSE Video page 5",
      thumbnail: "https://vumbnail.com/1157972065.jpg"
    },
    {
      id: "1157972114",
      title: "TSE Video page 4",
      thumbnail: "https://vumbnail.com/1157972114.jpg"
    },
    {
      id: "1157972186",
      title: "TSE Video page 3",
      thumbnail: "https://vumbnail.com/1157972186.jpg"
    },
    {
      id: "1157972228",
      title: "TSE Video page 2",
      thumbnail: "https://vumbnail.com/1157972228.jpg"
    }
  ];

  const masterCourseVideos = [
    {
      id: "1099419776",
      title: "Mantras & Sanskrit Extract",
      thumbnail: "https://vumbnail.com/1099419776.jpg"
    },
    {
      id: "1099420466",
      title: "Triggers Extract",
      thumbnail: "https://vumbnail.com/1099420466.jpg"
    },
    {
      id: "1099420040",
      title: "Spiritual Bypass Extract",
      thumbnail: "https://vumbnail.com/1099420040.jpg"
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

      {/* SHANKARA READINGS & REVIEWS - 2 PER ROW */}
      <section className="pb-16 container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8 max-w-4xl mx-auto">
          <div className="h-[1px] bg-white/20 flex-grow" />
          <h3 className="text-xl font-display font-bold text-white text-center uppercase tracking-widest">Shankara Readings & Reviews</h3>
          <div className="h-[1px] bg-white/20 flex-grow" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {newVideos.map((video, i) => (
             <div 
                key={i}
                className="aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                onClick={() => openVideo(`https://vimeo.com/${video.id}`)}
              >
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                <img 
                  src={video.thumbnail} 
                  loading="lazy" 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                />
                <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-bold text-sm truncate">{video.title}</p>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* MASTER COURSE EXCERPTS - NOW BELOW READINGS & REVIEWS */}
      <section className="pb-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-2">Excerpts From The Shankara Master Course</h3>
          <p className="text-purple-200/80 italic">Just A Few Selections From The 100+ Videos & Worksheets</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {masterCourseVideos.map((video, i) => (
             <div key={i} className="flex flex-col gap-3 group">
                <div 
                  className="aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-accent/50 transition-all"
                  onClick={() => openVideo(`https://vimeo.com/${video.id}`)}
                >
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                  <img 
                    src={video.thumbnail} 
                    loading="lazy" 
                    alt={video.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                  />
                  <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                </div>
                <h4 className="text-white font-bold text-lg text-center group-hover:text-accent transition-colors">{video.title}</h4>
             </div>
          ))}
        </div>
      </section>

      {/* Mantra Practice Promo */}
      <MantraPracticePromo />

      <Footer />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl={activeVideo || ""} />
    </div>
  );
}
