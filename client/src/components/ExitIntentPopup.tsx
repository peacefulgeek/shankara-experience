import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Mail, X } from "lucide-react";
import { toast } from "sonner";

// Define Decks and Cards
type DeckType = "alchemy" | "master" | "release";

interface Card {
  front: string;
  deck: DeckType;
}

const DECKS: Record<DeckType, { back: string; fronts: string[] }> = {
  alchemy: {
    back: "/images/cards/alchemy-back.webp",
    fronts: [
      "alchemy-gods-hands.webp", "alchemy-frequency.webp", "alchemy-calmness.webp",
      "alchemy-environment.webp", "alchemy-say-yes.webp", "alchemy-sensible.webp",
      "alchemy-presence.webp", "alchemy-playfulness.webp", "alchemy-charisma.webp",
      "alchemy-friendship.webp"
    ]
  },
  master: {
    back: "/images/cards/master-back.webp",
    fronts: [
      "master-authenticity.webp", "master-opinions.webp", "master-own-your-life.webp",
      "master-comfort.webp", "master-harvest.webp", "master-fear.webp",
      "master-protect.webp", "master-replenish.webp", "master-villains.webp",
      "master-hunger.webp", "master-vetting.webp"
    ]
  },
  release: {
    back: "/images/cards/release-back.webp",
    fronts: [
      "release-overthinking.webp", "release-mirrors.webp", "release-coping.webp",
      "release-outcome.webp", "release-shadows.webp", "release-sentiment.webp",
      "release-restrictions.webp", "release-cycles.webp", "release-micro-release.webp",
      "release-blame-shame.webp", "release-forgiveness.webp"
    ]
  }
};

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState<DeckType>("alchemy");
  const [selectedCardFront, setSelectedCardFront] = useState("");

  // Select a random deck and card on mount (or when popup opens)
  useEffect(() => {
    if (isOpen && !isFlipped) {
      const deckKeys = Object.keys(DECKS) as DeckType[];
      const randomDeckKey = deckKeys[Math.floor(Math.random() * deckKeys.length)];
      const randomDeck = DECKS[randomDeckKey];
      const randomFront = randomDeck.fronts[Math.floor(Math.random() * randomDeck.fronts.length)];
      
      setSelectedDeck(randomDeckKey);
      setSelectedCardFront(randomFront);
    }
  }, [isOpen]);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("shankara_exit_popup_seen");
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("shankara_exit_popup_seen", "true");
      }
    };

    const timer = setTimeout(() => {
      if (!hasShown && !localStorage.getItem("shankara_exit_popup_seen")) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("shankara_exit_popup_seen", "true");
      }
    }, 15000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call and flip card
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFlipped(true); // Trigger the flip animation
      toast.success("Your card has been revealed!", {
        icon: <Sparkles className="h-4 w-4 text-accent" />,
      });
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-[#1a0b2e] border-purple-500/30 text-white [&>button]:hidden shadow-2xl">
        <div className="flex flex-col md:flex-row h-full relative min-h-[500px]">
          
          {/* Custom Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm"
          >
            <X size={20} />
          </button>

          {/* LEFT SIDE: Card Display Area */}
          <div className="w-full md:w-1/2 relative bg-gradient-to-br from-[#2a1b4e] to-[#1a0b2e] flex items-center justify-center p-8 overflow-hidden">
             {/* Cosmic Background Elements */}
            <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-30 mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
            
            {/* The 3D Flip Container */}
            <div className="relative w-72 aspect-[3/2] perspective-1000">
              <div className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                
                {/* CARD BACK (Front Face) */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <img 
                    src={DECKS[selectedDeck].back}
                    alt="Card Back" 
                    className="w-full h-full object-contain rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] border border-white/10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end justify-center pb-6">
                    <span className="text-white/80 font-display tracking-widest text-sm uppercase">Your Message Awaits</span>
                  </div>
                </div>

                {/* CARD FRONT (Back Face) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <img 
                    src={`/images/cards/${selectedCardFront}`}
                    alt="Card Reveal" 
                    className="w-full h-full object-contain rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] border border-white/20"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content & Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-[#1a0b2e]">
            
            {!isFlipped ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#ff00ff] font-medium text-sm tracking-wider uppercase">
                    <Sparkles size={16} />
                    <span>Free Daily Guidance</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                    Reveal Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200">
                      Sacred Message
                    </span>
                  </h2>
                  <p className="text-purple-200/70 text-lg leading-relaxed">
                    The Shankara Oracle has a message for you right now. Enter your email to flip the card and receive your guidance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-white/40" size={18} />
                      <Input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 focus:border-[#ff00ff] focus:ring-[#ff00ff] rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-[#ff00ff] hover:bg-[#d900d9] text-white shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Revealing..." : "Flip Your Card"}
                  </Button>
                  <p className="text-xs text-purple-200/40 text-center">
                    Join our newsletter for weekly wisdom. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            ) : (
              <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-[#ff00ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#ff00ff]" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  Your Message is Revealed!
                </h3>
                <p className="text-purple-200/80 text-lg">
                  Reflect on this card's meaning for your day. We've also sent a detailed interpretation to your inbox.
                </p>
                <Button 
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  className="mt-4 border-white/20 text-white hover:bg-white/10 px-8 rounded-full"
                >
                  Close & Continue
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
