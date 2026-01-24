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

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Loop interval
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        const randomPurchase = RECENT_PURCHASES[Math.floor(Math.random() * RECENT_PURCHASES.length)];
        setCurrentPurchase(randomPurchase);
        setIsVisible(true);
      }, 2000); // Wait 2s before showing next
    }, 15000); // Show every 15s

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -20 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl flex items-start gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-accent/10 pointer-events-none" />
            
            <div className="bg-green-500/20 p-2 rounded-full shrink-0">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-bold text-white">
                {currentPurchase.name} in {currentPurchase.location}
              </p>
              <p className="text-xs text-purple-200">
                Just purchased <span className="text-accent font-semibold">{currentPurchase.item}</span>
              </p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                Verified Purchase
              </p>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
