import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sparkles, Mail, X, RefreshCw, Lock, Info, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

// Define Decks and Cards
type DeckType = "alchemy" | "master" | "release";

const DECKS: Record<DeckType, { back: string; fronts: string[]; name: string; description: string; specialty: string; color: string }> = {
  alchemy: {
    back: "/images/cards/alchemy-back-landscape.webp",
    fronts: [
      "alchemy-gods-hands.webp", "alchemy-frequency.webp", "alchemy-calmness.webp",
      "alchemy-environment.webp", "alchemy-say-yes.webp", "alchemy-sensible.webp",
      "alchemy-presence.webp", "alchemy-playfulness.webp", "alchemy-charisma.webp",
      "alchemy-friendship.webp"
    ],
    name: "Alchemy",
    description: "Transformation & Magic",
    specialty: "Connects you with the elemental forces of change. Best for when you seek to transform a situation or understand the magical currents at play in your life.",
    color: "from-amber-400 to-orange-500"
  },
  master: {
    back: "/images/cards/master-back-landscape.webp",
    fronts: [
      "master-authenticity.webp", "master-opinions.webp", "master-own-your-life.webp",
      "master-comfort.webp", "master-harvest.webp", "master-fear.webp",
      "master-protect.webp", "master-replenish.webp", "master-villains.webp",
      "master-hunger.webp", "master-vetting.webp"
    ],
    name: "Master",
    description: "Wisdom & Presence",
    specialty: "Offers deep, grounding guidance for self-mastery. Perfect for moments when you need to reclaim your power, set boundaries, or find your center.",
    color: "from-red-500 to-rose-600"
  },
  release: {
    back: "/images/cards/release-back-landscape.webp",
    fronts: [
      "release-overthinking.webp", "release-mirrors.webp", "release-coping.webp",
      "release-outcome.webp", "release-shadows.webp", "release-sentiment.webp",
      "release-restrictions.webp", "release-cycles.webp", "release-micro-release.webp",
      "release-blame-shame.webp", "release-forgiveness.webp"
    ],
    name: "Release",
    description: "Freedom & Letting Go",
    specialty: "Helps you identify and shed what no longer serves you. Choose this deck when you feel stuck, burdened, or ready to move forward with a lighter heart.",
    color: "from-cyan-400 to-blue-500"
  }
};

type PopupStage = "INVITE" | "DECK_SELECTION" | "DECK_SELECTED" | "CARD_REVEALED" | "LIMIT_REACHED";

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

  // Sound Preloading Logic
  useEffect(() => {
    if (isOpen) {
      // Preload all deck sounds
      const sounds = ["alchemy", "master", "release"];
      sounds.forEach(sound => {
        const audio = new Audio(`/sounds/${sound}.mp3`);
        audio.preload = "auto";
        audio.load(); // Force load
      });
    }
  }, [isOpen]);

  // Check daily limit
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
    }
  }, [isOpen]);

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

  const handleStartDraw = () => {
    setStage("DECK_SELECTION");
  };

  const handleSelectDeck = (deck: DeckType) => {
    const randomDeck = DECKS[deck];
    const randomFront = randomDeck.fronts[Math.floor(Math.random() * randomDeck.fronts.length)];
    
    setSelectedDeck(deck);
    setSelectedCardFront(randomFront);
    setIsFlipped(false); // CRITICAL: Ensure card starts showing BACK
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
      setIsFlipped(true); // Trigger the flip animation to FRONT
      
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

          {/* LEFT SIDE: Visual/Interactive Area */}
          <div className="w-full md:w-1/2 relative bg-gradient-to-br from-[#2a1b4e] to-[#0d041a] flex items-center justify-center p-6 md:p-8 overflow-hidden min-h-[300px] md:min-h-auto group">
             {/* Dynamic CSS Energy Vortex Background */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ff00ff_100%)] animate-spin-slower blur-[80px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_270deg_at_50%_50%,#00000000_50%,#00ffff_100%)] animate-spin-reverse-slower blur-[60px] mix-blend-screen" />
            </div>
            
            {/* STAGE 1 & 5: INVITE / LIMIT (Pure CSS Energy) */}
            {(stage === "INVITE" || stage === "LIMIT_REACHED") && (
              <div className="text-center space-y-8 relative z-10 flex flex-col items-center">
                {/* CSS Energy Orb */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ff00ff] via-[#aa00ff] to-[#00ffff] blur-xl animate-pulse-slow opacity-60"></div>
                    <div className="absolute inset-4 rounded-full bg-[#1a0b2e] z-10 flex items-center justify-center border border-white/20">
                        <Sparkles className="w-16 h-16 text-white animate-spin-slow duration-[10s]" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-ping-slow"></div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    {stage === "LIMIT_REACHED" ? "Daily Limit" : "Guidance"}
                  </h3>
                  <p className="text-xl md:text-2xl text-purple-200 font-light uppercase tracking-[0.2em] animate-pulse">
                    {stage === "LIMIT_REACHED" ? "Reached" : "Awaits You"}
                  </p>
                </div>
              </div>
            )}

            {/* STAGE 2: DECK SELECTION (MASSIVE TEXT & ARROW) */}
            {stage === "DECK_SELECTION" && (
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-500">
                
                {/* Massive Text */}
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight drop-shadow-[0_0_25px_rgba(255,0,255,0.6)]">
                  CHOOSE<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">YOUR PATH</span>
                </h2>

                {/* Giant Divine Arrow */}
                <div className="relative">
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse"></div>
                    <ArrowRight className="relative z-10 w-24 h-24 text-white animate-pulse-subtle drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                </div>

                <p className="text-xl text-white/80 font-medium tracking-wide uppercase">
                  Select on the Right
                </p>

              </div>
            )}

            {/* STAGE 3 & 4: CARD DISPLAY (Back -> Front) */}
            {(stage === "DECK_SELECTED" || stage === "CARD_REVEALED") && (
              <div className="relative w-[85%] md:w-[90%] aspect-[1.45/1] perspective-1000 animate-in zoom-in duration-500">
                <div className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                  
                  {/* CARD BACK (Front Face - Visible initially) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                    <img 
                      src={DECKS[selectedDeck].back}
                      alt="Card Back" 
                      className="w-full h-full object-contain rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] border-2 border-amber-400/50 bg-[#1a0b2e]"
                    />
                  </div>

                  {/* CARD FRONT (Back Face - Visible after flip) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 group" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="relative w-full h-full overflow-hidden rounded-xl border-2 border-amber-400/50 bg-[#1a0b2e]">
                      <img 
                        src={`/images/cards/${selectedCardFront}`}
                        alt="Card Reveal" 
                        className="w-full h-full object-contain shadow-[0_0_50px_rgba(255,255,255,0.3)]"
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
                  onClick={handleStartDraw}
                  className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-[#ff00ff] hover:bg-[#d900d9] text-white shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all rounded-full"
                >
                  Draw Your Card
                </Button>
              </div>
            )}

            {/* STAGE 2: DECK SELECTION */}
            {stage === "DECK_SELECTION" && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 h-full overflow-y-auto pr-2 flex flex-col justify-center">
                 <div className="space-y-3 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-none tracking-tight">
                    Choose Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200">Path</span>
                  </h2>
                  <p className="text-purple-200/70 text-base md:text-lg">
                    Which energy calls to you? Select a deck below.
                  </p>
                </div>

                {/* DESKTOP: Vertical List */}
                <div className="hidden md:grid grid-cols-1 gap-4">
                  <TooltipProvider delayDuration={0}>
                    {(Object.keys(DECKS) as DeckType[]).map((deckKey) => (
                      <Tooltip key={deckKey}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => handleSelectDeck(deckKey)}
                            className="group relative flex items-center p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] text-left overflow-hidden w-full animate-pulse-subtle"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${DECKS[deckKey].color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                            
                            <div className="relative w-28 aspect-[1.45/1] rounded-lg overflow-hidden shadow-lg mr-5 shrink-0 border-2 border-amber-400/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                               <img 
                                src={DECKS[deckKey].back} 
                                alt={DECKS[deckKey].name}
                                className="w-full h-full object-cover"
                              />
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-white group-hover:text-[#ff00ff] transition-colors flex items-center gap-2">
                                {DECKS[deckKey].name}
                                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#ff00ff] group-hover:translate-x-1 transition-all" />
                              </h3>
                              <p className="text-sm text-purple-200/60 truncate">
                                {DECKS[deckKey].description}
                              </p>
                            </div>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-[#2a1b4e] border-purple-500/30 text-white max-w-xs p-4 shadow-xl z-[60]">
                          <p className="font-bold text-[#ff00ff] mb-1">{DECKS[deckKey].name} Deck</p>
                          <p className="text-sm leading-relaxed">{DECKS[deckKey].specialty}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>

                {/* MOBILE: Horizontal Scroll Snap Carousel */}
                <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide flex gap-4">
                  {(Object.keys(DECKS) as DeckType[]).map((deckKey) => (
                    <button
                      key={deckKey}
                      onClick={() => handleSelectDeck(deckKey)}
                      className="snap-center shrink-0 w-[85%] sm:w-[70%] flex flex-col p-4 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-b ${DECKS[deckKey].color} opacity-5`} />
                      
                      <div className="relative w-full aspect-[1.45/1] rounded-lg overflow-hidden shadow-lg mb-4 border-2 border-amber-400/50">
                         <img 
                          src={DECKS[deckKey].back} 
                          alt={DECKS[deckKey].name}
                          className="w-full h-full object-cover"
                        />
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                      </div>
                      
                      <div className="text-center w-full">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {DECKS[deckKey].name}
                        </h3>
                        <p className="text-sm text-purple-200/60">
                          {DECKS[deckKey].description}
                        </p>
                        <div className="mt-3 text-xs text-[#ff00ff] font-medium uppercase tracking-wider border border-[#ff00ff]/30 rounded-full py-1 px-3 inline-block">
                          Tap to Select
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

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

            {/* STAGE 3: EMAIL CAPTURE (Before Flip) */}
            {stage === "DECK_SELECTED" && (
              <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-3 text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                    Your <span className="text-[#ff00ff]">{DECKS[selectedDeck].name}</span> Card<br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200">
                      Is Waiting...
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

            {/* STAGE 5: REVEALED CONTENT */}
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
