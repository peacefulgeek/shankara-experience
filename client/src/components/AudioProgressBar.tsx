import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AudioProgressBarProps {
  src: string;
  title?: string;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function AudioProgressBar({
  src,
  title,
  className,
  onPlay,
  onPause,
  onEnded
}: AudioProgressBarProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onEnded?.();
    };

    const handlePlay = () => {
      setIsPlaying(true);
      onPlay?.();
    };

    const handlePause = () => {
      setIsPlaying(false);
      onPause?.();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [isDragging, onEnded, onPause, onPlay]);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [isPlaying]);

  // Reset to beginning
  const handleReset = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setCurrentTime(0);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  // Seek to position
  const seekToPosition = useCallback((clientX: number) => {
    const audio = audioRef.current;
    const progressBar = progressRef.current;
    if (!audio || !progressBar || !isLoaded) return;

    const rect = progressBar.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newTime = percent * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }, [duration, isLoaded]);

  // Handle click on progress bar
  const handleProgressClick = useCallback((e: React.MouseEvent) => {
    seekToPosition(e.clientX);
  }, [seekToPosition]);

  // Handle drag start
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    seekToPosition(clientX);
  }, [seekToPosition]);

  // Handle drag move
  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      seekToPosition(clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleEnd);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, seekToPosition]);

  return (
    <div className={cn("bg-purple-900/40 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30", className)}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Title */}
      {title && (
        <p className="text-sm text-purple-200 mb-3 font-medium">{title}</p>
      )}

      {/* Controls and Progress */}
      <div className="flex items-center gap-3">
        {/* Play/Pause Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 text-white p-0 flex-shrink-0"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </Button>

        {/* Progress Bar */}
        <div className="flex-1 flex flex-col gap-1">
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            className="relative h-2 bg-purple-900/60 rounded-full cursor-pointer group touch-manipulation"
          >
            {/* Progress Fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: isDragging ? 0 : 0.1 }}
            />
            
            {/* Seek Handle */}
            <motion.div
              className={cn(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg",
                "opacity-0 group-hover:opacity-100 transition-opacity",
                isDragging && "opacity-100"
              )}
              style={{ left: `calc(${progress}% - 8px)` }}
              transition={{ duration: isDragging ? 0 : 0.1 }}
            />
          </div>

          {/* Time Display */}
          <div className="flex justify-between text-xs text-purple-300/70">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Reset Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="w-8 h-8 rounded-full text-purple-300 hover:text-white hover:bg-purple-500/20 p-0 flex-shrink-0"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
