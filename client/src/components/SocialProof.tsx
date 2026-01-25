import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const RECENT_PURCHASES = [
  { name: "Sarah M.", location: "London, UK", item: "Shankara Oracle System" },
  { name: "Elena R.", location: "New York, USA", item: "Master Training Course" },
  { name: "Jessica T.", location: "Sydney, AU", item: "Shankara Oracle System" },
  { name: "Maria K.", location: "Toronto, CA", item: "Obsidian Stone Set" },
  { name: "Priya S.", location: "Mumbai, IN", item: "Certification Program" }
];

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(RECENT_PURCHASES[0]);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed for this session
    if (sessionStorage.getItem("shankara_social_proof_dismissed")) {
      setIsDismissed(true);
      return;
    }

    // Initial delay - longer on mobile to not interfere with navigation
    const isMobile = window.innerWidth < 768;
    const initialDelay = isMobile ? 10000 : 5000; // 10s on mobile, 5s on desktop
    
    const initialTimer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, initialDelay);

    // Loop interval - less frequent on mobile
    const loopInterval = isMobile ? 30000 : 15000; // 30s on mobile, 15s on desktop
    
    const interval = setInterval(() => {
      if (isDismissed) return;
      
      setIsVisible(false);
      setTimeout(() => {
        const randomPurchase = RECENT_PURCHASES[Math.floor(Math.random() * RECENT_PURCHASES.length)];
        setCurrentPurchase(randomPurchase);
        if (!isDismissed) {
          setIsVisible(true);
        }
      }, 2000);
    }, loopInterval);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("shankara_social_proof_dismissed", "true");
  };

  // Don't render anything if dismissed
  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-6 z-30 max-w-[280px] sm:max-w-sm"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl shadow-2xl flex items-start gap-3 sm:gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-accent/10 pointer-events-none" />
            
            <div className="bg-green-500/20 p-1.5 sm:p-2 rounded-full shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </div>
            
            <div className="space-y-0.5 sm:space-y-1 min-w-0">
              <p className="text-xs sm:text-sm font-bold text-white truncate">
                {currentPurchase.name} in {currentPurchase.location}
              </p>
              <p className="text-[10px] sm:text-xs text-purple-200">
                Just purchased <span className="text-accent font-semibold">{currentPurchase.item}</span>
              </p>
              <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest mt-0.5 sm:mt-1">
                Verified Purchase
              </p>
            </div>

            <button 
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 text-white/40 hover:text-white transition-colors touch-manipulation"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
