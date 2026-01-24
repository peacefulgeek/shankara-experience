import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Sparkles, Mail } from "lucide-react";
import { toast } from "sonner";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

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
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-cosmic-dark border-purple-500/30 text-white">
        <div className="flex flex-col md:flex-row h-full">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative min-h-[200px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
            <img 
              src="/images/master-card-spread.webp" 
              alt="Shankara Card Spread" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-cosmic-dark z-20" />
            
            <div className="absolute bottom-6 left-6 z-30 md:hidden">
              <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                Unlock Your Destiny
              </h3>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative bg-cosmic-dark">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

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
