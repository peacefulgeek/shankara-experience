import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CARDS = [
  {
    id: 1,
    name: "The Void",
    meaning: "Embrace the unknown. In emptiness, all potential exists.",
    image: "https://shankara-pull.b-cdn.net/images/card-front-template.webp",
    element: "Ether"
  },
  {
    id: 2,
    name: "Inner Fire",
    meaning: "Your passion is your compass. Let it burn away doubt.",
    image: "https://shankara-pull.b-cdn.net/images/card-front-template.webp",
    element: "Fire"
  },
  {
    id: 3,
    name: "Flow State",
    meaning: "Surrender to the current. Resistance creates suffering.",
    image: "https://shankara-pull.b-cdn.net/images/card-front-template.webp",
    element: "Water"
  },
  {
    id: 4,
    name: "Rooted Wisdom",
    meaning: "Stand firm in your truth. You are supported.",
    image: "https://shankara-pull.b-cdn.net/images/card-front-template.webp",
    element: "Earth"
  },
  {
    id: 5,
    name: "Sacred Breath",
    meaning: "Pause. Breathe. The answer is in the silence.",
    image: "https://shankara-pull.b-cdn.net/images/card-front-template.webp",
    element: "Air"
  }
];

export default function DailyCardDraw() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCard, setSelectedCard] = useState(CARDS[0]);
  const [isShuffling, setIsShuffling] = useState(false);

  const drawCard = () => {
    if (isShuffling) return;
    setIsShuffling(true);
    setIsFlipped(false);
    
    // Simulate shuffle delay
    setTimeout(() => {
      const randomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
      setSelectedCard(randomCard);
      setIsShuffling(false);
      setIsFlipped(true);
    }, 1000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-cosmic-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Receive Your Message
          </h2>
          <p className="text-purple-200/80 max-w-lg mx-auto">
            Close your eyes, take a deep breath, and ask for guidance. When you are ready, reveal your card for the day.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative w-64 h-96 perspective-1000 cursor-pointer group" onClick={drawCard}>
            <motion.div
              className="w-full h-full relative preserve-3d transition-transform duration-700"
              animate={{ 
                rotateY: isFlipped ? 180 : 0,
                scale: isShuffling ? 0.95 : 1
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-shadow">
                <img 
                  src="https://shankara-pull.b-cdn.net/images/card-back-mystical.webp" 
                  alt="Card Back" 
                  className="w-full h-full object-cover rounded-xl border border-white/10"
                />
                {!isFlipped && !isShuffling && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl backdrop-blur-[2px]">
                    <span className="text-white font-display text-xl tracking-widest uppercase border border-white/30 px-6 py-2 rounded-full bg-black/40 backdrop-blur-md">
                      Tap to Reveal
                    </span>
                  </div>
                )}
              </div>

              {/* Card Front */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-accent/50 shadow-[0_0_40px_rgba(255,0,255,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/card-front-template.webp')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 border border-accent/50">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{selectedCard.name}</h3>
                  <div className="w-8 h-[1px] bg-accent/50 my-4" />
                  <p className="text-purple-100 font-light italic leading-relaxed">
                    "{selectedCard.meaning}"
                  </p>
                  <span className="absolute bottom-6 text-xs text-accent/60 uppercase tracking-widest">
                    {selectedCard.element}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <AnimatePresence>
            {isFlipped && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Button 
                  onClick={(e) => { e.stopPropagation(); drawCard(); }}
                  variant="outline" 
                  className="border-purple-500/50 text-purple-200 hover:bg-purple-900/50 px-8 rounded-full"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isShuffling ? 'animate-spin' : ''}`} />
                  Draw Another Card
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
