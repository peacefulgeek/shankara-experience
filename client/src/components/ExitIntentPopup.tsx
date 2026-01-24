import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Mail, X } from "lucide-react";
import { toast } from "sonner";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // CONFIGURATION: Replace this URL with the actual "Back of Card" image URL
  const CARD_BACK_IMAGE_URL = "https://shankara-pull.b-cdn.net/images/card-back-placeholder.webp"; 

  useEffect(() => {
    // Check if we've already shown the popup in this session or recently
    const hasSeenPopup = localStorage.getItem("shankara_exit_popup_seen");
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("shankara_exit_popup_seen", "true");
      }
    };

    // Fallback timer for mobile or if mouse leave doesn't trigger
    const timer = setTimeout(() => {
      if (!hasShown && !localStorage.getItem("shankara_exit_popup_seen")) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("shankara_exit_popup_seen", "true");
      }
    }, 15000); // Show after 15 seconds if not triggered by exit intent

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

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast.success("Thank you! Your digital card draw is on its way to your inbox.", {
        icon: <Sparkles className="h-4 w-4 text-accent" />,
      });
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* 
        We hide the default Dialog close button using [&>button]:hidden 
        and provide our own custom styled close button for better control and visibility.
      */}
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-cosmic-dark border-purple-500/30 text-white [&>button]:hidden">
        <div className="flex flex-col md:flex-row h-full relative">
          
          {/* Custom Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-sm"
          >
            <X size={20} />
          </button>

          {/* Image Side - Card Back */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px] bg-black/20 flex items-center justify-center p-8">
             {/* Background glow */}
            <div className="absolute inset-0 bg-accent/10 blur-3xl" />
            
            {/* The Card Back Image */}
            <div className="relative z-10 w-48 md:w-56 aspect-[2/3] rounded-xl shadow-[0_0_30px_rgba(255,20,147,0.3)] transition-transform duration-700 hover:scale-105 hover:rotate-1">
               <img 
                 src={CARD_BACK_IMAGE_URL}
                 alt="Shankara Oracle Card Back" 
                 className="w-full h-full object-cover rounded-xl border border-white/10"
                 onError={(e) => {
                   // Fallback if image fails
                   e.currentTarget.src = "https://placehold.co/400x600/1a0b2e/ff00ff?text=Card+Back";
                 }}
               />
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center z-30 md:hidden">
              <h3 className="text-xl font-display font-bold text-white drop-shadow-lg">
                Your Card Awaits...
              </h3>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative bg-cosmic-dark">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent font-medium text-sm tracking-wider uppercase">
                  <Sparkles size={16} />
                  <span>Free Gift</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                  Get a Free <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                    Digital Card Draw
                  </span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Join our sacred circle and receive a personalized digital reading delivered instantly to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-white/40" size={18} />
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 focus:border-accent focus:ring-accent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(255,20,147,0.4)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Reveal My Card"}
                </Button>
                <p className="text-xs text-white/40 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
