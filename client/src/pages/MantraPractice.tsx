import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Heart, 
  Wind, 
  Eye, 
  Clock, 
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  Flame
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

const BUNNY_CDN = "https://shankara-pull.b-cdn.net";

interface Mantra {
  id: string;
  sanskrit: string;
  name: string;
  translation: string;
  description: string;
  benefits: string[];
  audioUrl: string;
  duration: string;
  chakra?: string;
  bestTime?: string;
  repetitions?: number;
}

const mantras: Mantra[] = [
  {
    id: "om",
    sanskrit: "ॐ",
    name: "Om",
    translation: "The Primordial Sound",
    description: "Om is the cosmic vibration from which all creation emerges. It represents the union of mind, body, and spirit, and is considered the most sacred syllable in Hinduism and Buddhism.",
    benefits: [
      "Calms the nervous system",
      "Reduces stress and anxiety",
      "Enhances concentration",
      "Connects you to universal consciousness"
    ],
    audioUrl: `${BUNNY_CDN}/audio/om.mp3`,
    duration: "3:00",
    chakra: "Crown (Sahasrara)",
    bestTime: "Sunrise or Sunset",
    repetitions: 108
  },
  {
    id: "om-namah-shivaya",
    sanskrit: "ॐ नमः शिवाय",
    name: "Om Namah Shivaya",
    translation: "I Bow to Shiva (Pure Consciousness)",
    description: "One of the most powerful Hindu mantras, it honors Shiva as the supreme consciousness. It purifies the mind and removes obstacles on the spiritual path.",
    benefits: [
      "Destroys negative karma",
      "Awakens inner wisdom",
      "Brings peace and clarity",
      "Connects to divine masculine energy"
    ],
    audioUrl: `${BUNNY_CDN}/audio/om-namah-shivaya.mp3`,
    duration: "3:30",
    chakra: "Third Eye (Ajna)",
    bestTime: "Early morning (Brahma Muhurta)",
    repetitions: 108
  },
  {
    id: "lokah-samastah",
    sanskrit: "ॐ लोकाः समस्ताः सुखिनो भवन्तु",
    name: "Lokah Samastah Sukhino Bhavantu",
    translation: "May All Beings Be Happy & Free",
    description: "Known as Amma's Mantra, this blessing prayer radiates love and compassion to all beings. It's a powerful practice for developing universal love and dissolving separation.",
    benefits: [
      "Opens the heart chakra",
      "Cultivates compassion",
      "Creates positive karma",
      "Heals relationships"
    ],
    audioUrl: `${BUNNY_CDN}/audio/lokah-samastah.mp3`,
    duration: "4:00",
    chakra: "Heart (Anahata)",
    bestTime: "Any time, especially before sleep",
    repetitions: 27
  },
  {
    id: "gayatri",
    sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
    name: "Gayatri Mantra",
    translation: "Illumination of the Intellect",
    description: "The Gayatri is one of the oldest and most powerful Vedic mantras. It invokes the divine light of the sun to illuminate the mind and awaken spiritual wisdom.",
    benefits: [
      "Sharpens intellect",
      "Removes darkness of ignorance",
      "Protects from negative influences",
      "Accelerates spiritual evolution"
    ],
    audioUrl: `${BUNNY_CDN}/audio/gayatri.mp3`,
    duration: "4:30",
    chakra: "Solar Plexus (Manipura)",
    bestTime: "Sunrise (most powerful)",
    repetitions: 108
  },
  {
    id: "om-mani-padme-hum",
    sanskrit: "ॐ मणि पद्मे हूँ",
    name: "Om Mani Padme Hum",
    translation: "The Jewel in the Lotus",
    description: "The most famous Buddhist mantra, associated with Avalokiteshvara, the Bodhisattva of Compassion. Each syllable purifies a different realm of existence.",
    benefits: [
      "Develops compassion",
      "Purifies negative emotions",
      "Brings blessings and protection",
      "Leads to enlightenment"
    ],
    audioUrl: `${BUNNY_CDN}/audio/om-mani-padme-hum.mp3`,
    duration: "3:45",
    chakra: "Heart (Anahata)",
    bestTime: "Any time",
    repetitions: 108
  },
  {
    id: "ganesha",
    sanskrit: "ॐ गं गणपतये नमः",
    name: "Om Gam Ganapataye Namaha",
    translation: "Salutations to the Remover of Obstacles",
    description: "This mantra invokes Lord Ganesha, the elephant-headed deity who removes obstacles and brings success. Chant before starting any new venture or when facing challenges.",
    benefits: [
      "Removes obstacles",
      "Brings success and prosperity",
      "Enhances wisdom",
      "Protects new beginnings"
    ],
    audioUrl: `${BUNNY_CDN}/audio/ganesha.mp3`,
    duration: "3:15",
    chakra: "Root (Muladhara)",
    bestTime: "Tuesday or before new ventures",
    repetitions: 108
  }
];

interface BreathingExercise {
  id: string;
  name: string;
  description: string;
  steps: string[];
  duration: string;
  icon: React.ReactNode;
}

const breathingExercises: BreathingExercise[] = [
  {
    id: "4-7-8",
    name: "4-7-8 Breath",
    description: "A calming technique that activates the parasympathetic nervous system, perfect for preparing your mind for mantra practice.",
    steps: [
      "Inhale quietly through your nose for 4 seconds",
      "Hold your breath for 7 seconds",
      "Exhale completely through your mouth for 8 seconds",
      "Repeat 4 cycles"
    ],
    duration: "2-3 minutes",
    icon: <Wind className="w-6 h-6" />
  },
  {
    id: "box",
    name: "Box Breathing",
    description: "Used by Navy SEALs for focus and calm. Creates a balanced, centered state ideal for deep mantra meditation.",
    steps: [
      "Inhale for 4 seconds",
      "Hold for 4 seconds",
      "Exhale for 4 seconds",
      "Hold empty for 4 seconds",
      "Repeat 4-6 cycles"
    ],
    duration: "3-4 minutes",
    icon: <Moon className="w-6 h-6" />
  },
  {
    id: "nadi-shodhana",
    name: "Nadi Shodhana",
    description: "Alternate nostril breathing balances the left and right hemispheres of the brain, creating harmony for sacred chanting.",
    steps: [
      "Close right nostril, inhale through left",
      "Close both nostrils, hold briefly",
      "Release right nostril, exhale through right",
      "Inhale through right nostril",
      "Close both, hold briefly",
      "Release left, exhale through left",
      "Repeat 5-10 cycles"
    ],
    duration: "5-10 minutes",
    icon: <Sun className="w-6 h-6" />
  }
];

interface Visualization {
  id: string;
  name: string;
  description: string;
  prompt: string;
  color: string;
}

const visualizations: Visualization[] = [
  {
    id: "golden-light",
    name: "Golden Light Meditation",
    description: "Visualize divine light entering your crown and filling your entire being.",
    prompt: "As you chant, imagine a brilliant golden light descending from above, entering through the crown of your head. With each repetition, this light grows brighter, filling every cell of your body with warmth and healing energy. See it radiating outward from your heart, blessing all beings.",
    color: "from-amber-500 to-yellow-300"
  },
  {
    id: "lotus-heart",
    name: "Lotus Heart Opening",
    description: "Visualize a lotus flower blooming in your heart center.",
    prompt: "Picture a beautiful lotus flower resting in your heart center. With each mantra repetition, one petal slowly opens. As the lotus fully blooms, feel your heart expanding with unconditional love and compassion. The fragrance of the lotus fills your entire being with peace.",
    color: "from-pink-500 to-rose-300"
  },
  {
    id: "cosmic-ocean",
    name: "Cosmic Ocean of Sound",
    description: "Merge with the infinite ocean of primordial vibration.",
    prompt: "Imagine yourself floating in an infinite ocean of cosmic sound. Each mantra you chant creates ripples that extend to the edges of the universe. Feel yourself dissolving into this ocean of vibration, becoming one with the primordial sound that underlies all creation.",
    color: "from-blue-500 to-cyan-300"
  },
  {
    id: "sacred-fire",
    name: "Sacred Fire Purification",
    description: "Burn away negativity in the sacred fire of transformation.",
    prompt: "Visualize a sacred fire burning in your solar plexus. With each mantra, offer your fears, doubts, and negative patterns into this divine flame. Watch them transform into light and rise as smoke, carrying your prayers to the heavens. Feel yourself becoming lighter and more radiant.",
    color: "from-orange-500 to-red-400"
  }
];

export default function MantraPractice() {
  const [activeMantra, setActiveMantra] = useState<Mantra | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [expandedBreathing, setExpandedBreathing] = useState<string | null>(null);
  const [selectedVisualization, setSelectedVisualization] = useState<Visualization | null>(null);
  const [practiceTimer, setPracticeTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(11); // minutes
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTimerRunning && practiceTimer > 0) {
      timerRef.current = setTimeout(() => {
        setPracticeTimer(prev => prev - 1);
      }, 1000);
    } else if (practiceTimer === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      // Play completion sound or notification
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isTimerRunning, practiceTimer]);

  const startTimer = () => {
    setPracticeTimer(selectedDuration * 60);
    setIsTimerRunning(true);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setPracticeTimer(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const playMantra = (mantra: Mantra) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setActiveMantra(mantra);
    audioRef.current = new Audio(mantra.audioUrl);
    audioRef.current.loop = true;
    audioRef.current.muted = isMuted;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const stopMantra = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setActiveMantra(null);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Mantra Practice | Guided Meditation | The Shankara Experience" 
        description="Transform your consciousness with sacred Sanskrit mantras. Guided meditation sessions with breathing exercises and visualization prompts for deep spiritual practice."
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-cosmic-dark pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-20 mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
                <Sparkles className="w-3 h-3 mr-2" /> Sacred Sound Practice
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Mantra <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">Practice</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
                Transform your consciousness through the sacred vibrations of Sanskrit mantras. 
                Combine ancient chanting with breathing exercises and visualization for profound spiritual awakening.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Timer Section */}
        <section className="py-16 bg-gradient-to-b from-cosmic-dark to-[#1a0b2e] relative">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-purple-900/30 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="text-2xl font-display font-bold text-white">Practice Timer</h3>
                  <p className="text-purple-200/70 mt-2">Set your intention and duration for today's practice</p>
                </div>

                <div className="flex items-center justify-center gap-4 mb-6">
                  {[5, 11, 21, 33].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => setSelectedDuration(mins)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedDuration === mins
                          ? 'bg-accent text-white shadow-[0_0_20px_rgba(255,0,255,0.4)]'
                          : 'bg-purple-900/50 text-purple-200 hover:bg-purple-900/70'
                      }`}
                    >
                      {mins} min
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-white mb-6 tabular-nums">
                    {formatTime(practiceTimer || selectedDuration * 60)}
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    {!isTimerRunning ? (
                      <Button 
                        onClick={startTimer}
                        className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.3)]"
                      >
                        <Play className="w-5 h-5 mr-2" /> Start Practice
                      </Button>
                    ) : (
                      <>
                        <Button 
                          onClick={() => setIsTimerRunning(false)}
                          variant="outline"
                          className="border-purple-500/50 text-purple-200 hover:bg-purple-900/50 px-6 py-6 rounded-full"
                        >
                          <Pause className="w-5 h-5 mr-2" /> Pause
                        </Button>
                        <Button 
                          onClick={resetTimer}
                          variant="outline"
                          className="border-purple-500/50 text-purple-200 hover:bg-purple-900/50 px-6 py-6 rounded-full"
                        >
                          <RotateCcw className="w-5 h-5 mr-2" /> Reset
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breathing Exercises Section */}
        <section className="py-20 bg-[#1a0b2e] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge className="bg-blue-900/50 text-blue-200 border border-blue-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
                <Wind className="w-3 h-3 mr-2" /> Prepare Your Practice
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Breathing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Exercises</span>
              </h2>
              <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
                Begin with pranayama to calm the mind and prepare your body for sacred chanting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {breathingExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer group"
                  onClick={() => setExpandedBreathing(expandedBreathing === exercise.id ? null : exercise.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                      {exercise.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">{exercise.name}</h3>
                      <p className="text-blue-300/70 text-sm">{exercise.duration}</p>
                    </div>
                    {expandedBreathing === exercise.id ? (
                      <ChevronUp className="w-5 h-5 text-blue-300 ml-auto" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-300 ml-auto" />
                    )}
                  </div>
                  
                  <p className="text-purple-200/80 text-sm mb-4">{exercise.description}</p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedBreathing === exercise.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-blue-500/20">
                      <h4 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-3">Steps:</h4>
                      <ol className="space-y-2">
                        {exercise.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-purple-100/90 text-sm">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-xs shrink-0">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mantras Section */}
        <section className="py-20 bg-gradient-to-b from-[#1a0b2e] to-cosmic-dark relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge className="bg-accent/20 text-accent border border-accent/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
                <Volume2 className="w-3 h-3 mr-2" /> Sacred Mantras
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Mantra</span>
              </h2>
              <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
                Select a mantra that resonates with your intention. Click to play and chant along.
              </p>
            </div>

            {/* Active Mantra Player */}
            {activeMantra && (
              <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-gradient-to-br from-accent/20 to-purple-900/40 rounded-3xl p-8 border border-accent/30 shadow-[0_0_50px_rgba(255,0,255,0.2)]">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{activeMantra.sanskrit}</div>
                    <h3 className="text-2xl font-display font-bold text-white">{activeMantra.name}</h3>
                    <p className="text-accent">{activeMantra.translation}</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      onClick={togglePlay}
                      className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 shadow-[0_0_30px_rgba(255,0,255,0.4)]"
                    >
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                    </Button>
                    <Button
                      onClick={toggleMute}
                      variant="outline"
                      className="w-12 h-12 rounded-full border-purple-500/50 text-purple-200 hover:bg-purple-900/50"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <Button
                      onClick={stopMantra}
                      variant="outline"
                      className="px-6 rounded-full border-purple-500/50 text-purple-200 hover:bg-purple-900/50"
                    >
                      Stop
                    </Button>
                  </div>
                  
                  <p className="text-center text-purple-200/70 mt-6 text-sm">
                    Recommended: {activeMantra.repetitions} repetitions • Best time: {activeMantra.bestTime}
                  </p>
                </div>
              </div>
            )}

            {/* Mantra Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {mantras.map((mantra) => (
                <div
                  key={mantra.id}
                  className={`group rounded-2xl p-6 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                    activeMantra?.id === mantra.id
                      ? 'bg-accent/20 border-2 border-accent/50 shadow-[0_0_30px_rgba(255,0,255,0.3)]'
                      : 'bg-purple-900/20 border border-white/10 hover:border-accent/30 hover:bg-purple-900/30 hover:shadow-[0_0_20px_rgba(255,0,255,0.1)]'
                  }`}
                  onClick={() => playMantra(mantra)}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">{mantra.sanskrit}</div>
                    <h3 className="text-xl font-display font-bold text-white">{mantra.name}</h3>
                    <p className="text-accent text-sm">{mantra.translation}</p>
                  </div>
                  
                  <p className="text-purple-200/70 text-sm mb-4 line-clamp-2">{mantra.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-purple-300/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {mantra.duration}
                    </span>
                    <span>{mantra.chakra}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {mantra.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="text-purple-200/70 text-xs flex items-center gap-2">
                          <Heart className="w-3 h-3 text-accent shrink-0" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visualization Section */}
        <section className="py-20 bg-cosmic-dark relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge className="bg-purple-900/50 text-purple-200 border border-purple-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
                <Eye className="w-3 h-3 mr-2" /> Inner Vision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Visualization <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Prompts</span>
              </h2>
              <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
                Enhance your practice with guided visualizations. Choose one to accompany your mantra meditation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {visualizations.map((viz) => (
                <div
                  key={viz.id}
                  onClick={() => setSelectedVisualization(selectedVisualization?.id === viz.id ? null : viz)}
                  className={`rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
                    selectedVisualization?.id === viz.id
                      ? 'bg-gradient-to-br ' + viz.color + ' bg-opacity-20 border-2 border-white/30 shadow-lg'
                      : 'bg-purple-900/20 border border-white/10 hover:border-purple-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${viz.color} flex items-center justify-center`}>
                      <Flame className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">{viz.name}</h3>
                      <p className="text-purple-200/70 text-sm">{viz.description}</p>
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    selectedVisualization?.id === viz.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-purple-100/90 leading-relaxed italic">
                        "{viz.prompt}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-gradient-to-b from-cosmic-dark to-[#1a0b2e] relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/40 to-accent/10 rounded-3xl p-8 md:p-12 border border-purple-500/20">
                <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                  Sacred Practice <span className="text-accent">Guidelines</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-amber-200 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" /> Before Practice
                    </h4>
                    <ul className="space-y-3 text-purple-100/90">
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Find a quiet, clean space free from distractions
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Sit comfortably with spine erect (cushion or chair)
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Light a candle or incense to create sacred atmosphere
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Set a clear intention for your practice
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-amber-200 mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5" /> During Practice
                    </h4>
                    <ul className="space-y-3 text-purple-100/90">
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Use mala beads to count 108 repetitions
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Chant aloud, whisper, or mentally repeat
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Focus on the vibration, not perfection
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent">•</span>
                        Allow thoughts to pass without attachment
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-purple-500/20 text-center">
                  <p className="text-purple-200/80 italic">
                    "The mantra is not just words—it is a living vibration that transforms consciousness. 
                    Approach with reverence, and the sacred sound will reveal its secrets."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1a0b2e] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-600/10" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Deepen Your <span className="text-accent">Practice</span>
            </h2>
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto mb-10">
              The Shankara Oracle includes a complete mantra integration system with the sacred board, 
              cards, and obsidian stones for the ultimate spiritual practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 h-14 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)]">
                  Get the Oracle
                </Button>
              </Link>
              <Link href="/the-ancients">
                <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-900/50 px-10 h-14 text-lg rounded-full">
                  Learn the Wisdom
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
