import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Mail, X, RefreshCw, Lock } from "lucide-react";
import { toast } from "sonner";

// Define Decks and Cards
type DeckType = "alchemy" | "master" | "release";

const DECKS: Record<DeckType, { back: string; fronts: string[] }> = {
  alchemy: {
    back: "/images/cards/alchemy-back-landscape.webp",
    fronts: [
      "alchemy-gods-hands.webp", "alchemy-frequency.webp", "alchemy-calmness.webp",
      "alchemy-environment.webp", "alchemy-say-yes.webp", "alchemy-sensible.webp",
      "alchemy-presence.webp", "alchemy-playfulness.webp", "alchemy-charisma.webp",
      "alchemy-friendship.webp"
    ]
  },
  master: {
    back: "/images/cards/master-back-landscape.webp",
    fronts: [
      "master-authenticity.webp", "master-opinions.webp", "master-own-your-life.webp",
      "master-comfort.webp", "master-harvest.webp", "master-fear.webp",
      "master-protect.webp", "master-replenish.webp", "master-villains.webp",
      "master-hunger.webp", "master-vetting.webp"
    ]
  },
  release: {
    back: "/images/cards/release-back-landscape.webp",
    fronts: [
      "release-overthinking.webp", "release-mirrors.webp", "release-coping.webp",
      "release-outcome.webp", "release-shadows.webp", "release-sentiment.webp",
      "release-restrictions.webp", "release-cycles.webp", "release-micro-release.webp",
      "release-blame-shame.webp", "release-forgiveness.webp"
    ]
  }
};

type PopupStage = "INVITE" | "DECK_SELECTED" | "CARD_REVEALED" | "LIMIT_REACHED";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<PopupStage>("INVITE");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState<DeckType>("alchemy");
  const [selectedCardFront, setSelectedCardFront] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Check daily limit and select deck
  useEffect(() => {
    if (isOpen) {
      // Check Daily Limit
      const lastDrawTime = localStorage.getItem("shankara_last_draw_timestamp");
      if (lastDrawTime) {
        const now = new Date().getTime();
        const timeSinceLastDraw = now - parseInt(lastDrawTime);
        const cooldown = 24 * 60 * 60 * 1000; // 24 hours in ms

        if (timeSinceLastDraw < cooldown) {
          setStage("LIMIT_REACHED");
          
          // Calculate time left for display
          const remaining = cooldown - timeSinceLastDraw;
          const hours = Math.floor(remaining / (1000 * 60 * 60));
          const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
          setTimeLeft(`${hours}h ${minutes}m`);
          return;
        }
      }

      // Initialize Deck if not limited
      if (stage === "INVITE") {
        const deckKeys = Object.keys(DECKS) as DeckType[];
        const randomDeckKey = deckKeys[Math.floor(Math.random() * deckKeys.length)];
        const randomDeck = DECKS[randomDeckKey];
        const randomFront = randomDeck.fronts[Math.floor(Math.random() * randomDeck.fronts.length)];
        
        setSelectedDeck(randomDeckKey);
        setSelectedCardFront(randomFront);
        setIsFlipped(false);
      }
    }
  }, [isOpen, stage]);

  // Exit Intent Logic
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("shankara_exit_popup_session_seen");
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("shankara_exit_popup_session_seen", "true");
      }
    };

    const timer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem("shankara_exit_popup_session_seen")) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("shankara_exit_popup_session_seen", "true");
      }
    }, 15000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleDrawCard = () => {
    setStage("DECK_SELECTED");
  };

  const playDeckSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const soundPath = `/sounds/${selectedDeck}.mp3`;
    const audio = new Audio(soundPath);
    audio.volume = 0.4;
    audio.play().catch(e => console.log("Audio play failed:", e));
    audioRef.current = audio;
  };

  const handleFlipCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call and flip card
    setTimeout(() => {
      setIsSubmitting(false);
      setStage("CARD_REVEALED");
      setIsFlipped(true); // Trigger the flip animation
      
      // Play Sound Effect
      playDeckSound();

      // Set Daily Limit Timestamp
      localStorage.setItem("shankara_last_draw_timestamp", new Date().getTime().toString());

      toast.success("Your card has been revealed!", {
        icon: <Sparkles className="h-4 w-4 text-accent" />,
      });
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[95vw] sm:max-w-[1000px] p-0 overflow-hidden bg-[#1a0b2e] border-purple-500/30 text-white [&>button]:hidden shadow-2xl rounded-xl">
        <div className="flex flex-col md:flex-row h-full relative min-h-[500px] md:min-h-[600px] max-h-[90vh] overflow-y-auto md:overflow-hidden">
          
          {/* Custom Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm"
          >
            <X size={20} />
          </button>

          {/* LEFT SIDE: Card Display Area (Top on Mobile) */}
          <div className="w-full md:w-1/2 relative bg-gradient-to-br from-[#2a1b4e] to-[#1a0b2e] flex items-center justify-center p-6 md:p-8 overflow-hidden min-h-[300px] md:min-h-auto">
             {/* Cosmic Background Elements */}
            <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-30 mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-[60px] md:blur-[80px]" />
            
            {/* STAGE 1 & 4: INVITE / LIMIT (Generic Symbol) */}
            {(stage === "INVITE" || stage === "LIMIT_REACHED") && (
              <div className="text-center space-y-4 md:space-y-6 animate-fade-in relative z-10">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                  <img src="/images/logo.png" alt="Shankara Symbol" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white/90">
                    {stage === "LIMIT_REACHED" ? "Daily Guidance Limit" : "Your Shankara Oracle\nCard Guidance"}
                  </h3>
                  <p className="text-xs md:text-sm text-purple-200/60 uppercase tracking-widest">
                    {stage === "LIMIT_REACHED" ? "Return Tomorrow" : "Awaits You"}
                  </p>
                </div>
              </div>
            )}

            {/* STAGE 2 & 3: CARD DISPLAY (Back -> Front) */}
            {(stage === "DECK_SELECTED" || stage === "CARD_REVEALED") && (
              <div className="relative w-[85%] md:w-[90%] aspect-[1.45/1] perspective-1000 animate-in zoom-in duration-500">
                <div className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                  
                  {/* CARD BACK (Front Face) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <img 
                      src={DECKS[selectedDeck].back}
                      alt="Card Back" 
                      className="w-full h-full object-contain rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] border border-white/10"
                    />
                  </div>

                  {/* CARD FRONT (Back Face) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 group">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <img 
                        src={`/images/cards/${selectedCardFront}`}
                        alt="Card Reveal" 
                        className="w-full h-full object-contain shadow-[0_0_50px_rgba(255,255,255,0.3)] border border-white/20"
                      />
                      {/* Holographic Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Content & Form (Bottom on Mobile) */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative bg-[#1a0b2e]">
            
            {/* STAGE 1: INVITE CONTENT */}
            {stage === "INVITE" && (
              <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-3 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[#ff00ff] font-medium text-sm tracking-wider uppercase">
                    <Sparkles size={16} />
                    <span>Daily Wisdom</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                    Unlock Your <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200">
                      Hidden Potential
                    </span>
                  </h2>
                  <p className="text-purple-200/70 text-base md:text-lg leading-relaxed">
                    The Shankara Oracle has chosen a specific card for you today. Are you ready to receive its guidance?
                  </p>
                </div>
                <Button 
                  onClick={handleDrawCard}
                  className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-[#ff00ff] hover:bg-[#d900d9] text-white shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all rounded-full"
                >
                  Draw Your Card
                </Button>
              </div>
            )}

            {/* STAGE 4: LIMIT REACHED */}
            {stage === "LIMIT_REACHED" && (
              <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 text-center md:text-left">
                 <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <Lock className="w-8 h-8 text-red-400" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    Guidance Received
                  </h2>
                  <p className="text-purple-200/70 text-base md:text-lg leading-relaxed">
                    You have already drawn your card for today. The Oracle speaks in silence to let the wisdom settle.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-purple-200">
                    <RefreshCw className="w-4 h-4 animate-spin-slow" />
                    <span>Next draw available in: <span className="text-white font-mono font-bold">{timeLeft}</span></span>
                  </div>
                </div>
                <Button 
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 h-12 rounded-full mt-4"
                >
                  Return to Site
                </Button>
              </div>
            )}

            {/* STAGE 2: EMAIL CAPTURE (Before Flip) */}
            {stage === "DECK_SELECTED" && (
              <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-3 text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                    Your Card Is <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200">
                      Waiting...
                    </span>
                  </h2>
                  <p className="text-purple-200/70 text-base md:text-lg leading-relaxed">
                    Enter your email to flip the card and reveal the message that the universe has prepared for you.
                  </p>
                </div>

                <form onSubmit={handleFlipCard} className="space-y-4">
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
            )}

            {/* STAGE 3: REVEALED CONTENT */}
            {stage === "CARD_REVEALED" && (
              <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-[#ff00ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#ff00ff]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                  Message Received
                </h3>
                <p className="text-purple-200/80 text-base md:text-lg">
                  Reflect on this card's meaning for your day. We've also sent a detailed interpretation to your inbox.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => setIsOpen(false)}
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 h-12 rounded-full"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
