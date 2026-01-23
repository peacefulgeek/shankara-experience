import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import SEO from "@/components/SEO";

export default function HowToShankara() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="How To Use The Shankara Oracle" 
        description="Learn the basics of casting stones, interpreting cards, and using the sacred geometry board for guidance."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Shankara</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
          A quick start guide to using your Oracle Board, Cards, and Stones.
        </p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl mb-16 group cursor-pointer">
            <img 
              src="/images/shankara-oracle-intimate-less-height.png" 
              alt="How to Shankara Video" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-black fill-black ml-1" />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {[
              {
                step: 1,
                title: "Prepare Your Space",
                text: "Find a quiet place. Light a candle or incense. Place your Oracle Board on a flat surface facing East or North."
              },
              {
                step: 2,
                title: "Shuffle the Decks",
                text: "Hold each deck in your hands. Close your eyes and connect with your intention. Shuffle until you feel guided to stop."
              },
              {
                step: 3,
                title: "Cast the Stones",
                text: "Hold the 18 obsidian stones. Shake them gently in your cupped hands. Release them onto the board."
              },
              {
                step: 4,
                title: "Interpret the Layout",
                text: "Observe where the stones land. Consult the guidebook for the meaning of the cards and their positions on the sacred geometry grid."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 font-display font-bold text-2xl text-accent shadow-inner">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display mb-2 text-white">{item.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-bold px-10 h-14 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              Get the Full Guidebook
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
