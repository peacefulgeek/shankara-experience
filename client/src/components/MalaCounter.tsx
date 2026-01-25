import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Sparkles, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MalaCounterProps {
  onComplete?: () => void;
  className?: string;
}

const TOTAL_BEADS = 108;
const BEADS_PER_ROW = 18;

export default function MalaCounter({ onComplete, className }: MalaCounterProps) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [lastClickedBead, setLastClickedBead] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Create audio for bead click
  const playClickSound = useCallback(() => {
    if (!soundEnabled) return;
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = "sine";
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, [soundEnabled]);

  // Play completion sound
  const playCompletionSound = useCallback(() => {
    if (!soundEnabled) return;
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    notes.forEach((freq, i) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = freq;
      oscillator.type = "sine";
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime + i * 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.3);
      
      oscillator.start(audioContext.currentTime + i * 0.15);
      oscillator.stop(audioContext.currentTime + i * 0.15 + 0.3);
    });
  }, [soundEnabled]);

  const handleBeadClick = useCallback(() => {
    if (isComplete) return;
    
    playClickSound();
    setLastClickedBead(count);
    setCount(prev => {
      const newCount = prev + 1;
      if (newCount >= TOTAL_BEADS) {
        setIsComplete(true);
        playCompletionSound();
        onComplete?.();
      }
      return newCount;
    });
  }, [count, isComplete, onComplete, playClickSound, playCompletionSound]);

  const handleReset = useCallback(() => {
    setCount(0);
    setIsComplete(false);
    setLastClickedBead(null);
  }, []);

  // Clear last clicked bead animation after delay
  useEffect(() => {
    if (lastClickedBead !== null) {
      const timer = setTimeout(() => setLastClickedBead(null), 300);
      return () => clearTimeout(timer);
    }
  }, [lastClickedBead]);

  const progress = (count / TOTAL_BEADS) * 100;

  return (
    <div className={cn("bg-purple-900/30 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Mala Counter
          </h3>
          <p className="text-sm text-purple-300/70 mt-1">Click to count your mantra repetitions</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={cn(
              "text-purple-300 hover:text-white hover:bg-purple-500/20",
              !soundEnabled && "opacity-50"
            )}
          >
            <Volume2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-purple-300 hover:text-white hover:bg-purple-500/20"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Count Display */}
      <div className="text-center mb-6">
        <motion.div
          key={count}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl font-display font-bold text-white"
        >
          {count}
        </motion.div>
        <p className="text-purple-300/70 text-sm mt-1">of {TOTAL_BEADS} beads</p>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-purple-900/50 rounded-full overflow-hidden mb-6">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        {isComplete && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/50 to-purple-500/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>

      {/* Main Click Area */}
      <motion.button
        onClick={handleBeadClick}
        disabled={isComplete}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-full py-8 rounded-xl transition-all duration-300 touch-manipulation",
          "bg-gradient-to-br from-purple-600/50 to-accent/30 border border-purple-500/50",
          "hover:from-purple-600/70 hover:to-accent/50 hover:border-accent/50",
          "active:from-purple-700/70 active:to-accent/60",
          "focus:outline-none focus:ring-2 focus:ring-accent/50",
          isComplete && "opacity-50 cursor-not-allowed"
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={lastClickedBead !== null ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.2 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-400/50 shadow-lg shadow-purple-500/30 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-purple-300/30" />
          </motion.div>
          <span className="text-white font-medium text-lg">
            {isComplete ? "Complete! 🙏" : "Tap to Count"}
          </span>
        </div>
      </motion.button>

      {/* Bead Grid Visualization */}
      <div className="mt-6 grid grid-cols-18 gap-[2px]" style={{ gridTemplateColumns: `repeat(${BEADS_PER_ROW}, 1fr)` }}>
        {Array.from({ length: TOTAL_BEADS }).map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              backgroundColor: i < count ? "rgb(168, 85, 247)" : "rgb(88, 28, 135)",
              scale: i === lastClickedBead ? 1.5 : 1,
              boxShadow: i < count ? "0 0 8px rgba(168, 85, 247, 0.6)" : "none"
            }}
            transition={{ duration: 0.2 }}
            className="aspect-square rounded-full"
          />
        ))}
      </div>

      {/* Completion Celebration */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 text-center p-4 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-xl border border-accent/30"
          >
            <h4 className="text-xl font-display font-bold text-white mb-2">
              🎉 Congratulations! 🎉
            </h4>
            <p className="text-purple-200 text-sm">
              You have completed one full mala of 108 repetitions. May your practice bring peace and enlightenment.
            </p>
            <Button
              onClick={handleReset}
              className="mt-4 bg-accent hover:bg-accent/80 text-white rounded-full"
            >
              Start Another Round
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
