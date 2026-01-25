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
  Flame,
  BookOpen,
  Languages
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
  phonetic: string;
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
    phonetic: "Ohm (rhymes with 'home')",
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
    phonetic: "Ohm Nah-mah Shee-vah-yah",
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
    phonetic: "Ohm Loh-kah Sah-mah-stah Soo-khee-noh Bhah-vahn-too",
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
    phonetic: "Ohm Bhoor Bhoo-vah Swah-ha, Taht Sah-vee-toor Vah-rehn-yahm, Bhar-goh Deh-vah-syah Dhee-mah-hee, Dhee-yoh Yoh Nah Prah-choh-dah-yaht",
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
    phonetic: "Ohm Mah-nee Pahd-meh Hoom",
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
    phonetic: "Ohm Gahm Gah-nah-pah-tah-yeh Nah-mah-hah",
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

interface Sutra {
  id: string;
  name: string;
  tradition: string;
  description: string;
  text: string;
  phonetic?: string;
  chinese?: string;
  chineseTitle?: string;
  benefits: string[];
  hasChinese: boolean;
  audioUrlEnglish?: string;
  audioUrlChinese?: string;
}

const sutras: Sutra[] = [
  {
    id: "heart-sutra",
    name: "Heart Sutra (Prajñāpāramitā Hṛdaya)",
    tradition: "Mahayana Buddhism",
    description: "The Heart Sutra is the most widely recited sutra in Mahayana Buddhism. It encapsulates the essence of the Perfection of Wisdom teachings in just 260 Chinese characters, revealing the nature of emptiness (śūnyatā) and the path to liberation.",
    text: "Gate gate pāragate pārasaṃgate bodhi svāhā",
    phonetic: "Gah-teh Gah-teh Pah-rah-gah-teh Pah-rah-sahm-gah-teh Boh-dee Svah-hah",
    chinese: "觀自在菩薩，行深般若波羅蜜多時，照見五蘊皆空，度一切苦厄。舍利子，色不異空，空不異色，色即是空，空即是色，受想行識，亦復如是。舍利子，是諸法空相，不生不滅，不垢不淨，不增不減。是故空中無色，無受想行識，無眼耳鼻舌身意，無色聲香味觸法，無眼界，乃至無意識界，無無明，亦無無明盡，乃至無老死，亦無老死盡。無苦集滅道，無智亦無得。以無所得故，菩提薩埵，依般若波羅蜜多故，心無罣礙，無罣礙故，無有恐怖，遠離顛倒夢想，究竟涅槃。三世諸佛，依般若波羅蜜多故，得阿耨多羅三藐三菩提。故知般若波羅蜜多，是大神咒，是大明咒，是無上咒，是無等等咒，能除一切苦，真實不虛。故說般若波羅蜜多咒，即說咒曰：揭諦揭諦，波羅揭諦，波羅僧揭諦，菩提薩婆訶。",
    chineseTitle: "般若波羅蜜多心經",
    benefits: [
      "Realizes the nature of emptiness",
      "Liberates from suffering",
      "Develops wisdom and insight",
      "Transcends dualistic thinking"
    ],
    hasChinese: true,
    audioUrlEnglish: `${BUNNY_CDN}/audio/heart-sutra-english.mp3`,
    audioUrlChinese: `${BUNNY_CDN}/audio/heart-sutra-chinese.mp3`
  },
  {
    id: "great-compassion",
    name: "Great Compassion Mantra (Nīlakaṇṭha Dhāraṇī)",
    tradition: "Mahayana Buddhism",
    description: "The Great Compassion Mantra is one of the most important dharani in East Asian Buddhism. Associated with Avalokiteśvara (Guanyin), it invokes the boundless compassion of the Bodhisattva and is believed to have miraculous protective powers.",
    text: "Namo Ratna Trayāya, Nama Āryāvalokiteśvarāya Bodhisattvāya Mahāsattvāya Mahākāruṇikāya...",
    phonetic: "Nah-moh Raht-nah Trah-yah-yah, Nah-mah Ahr-yah-vah-loh-kee-tesh-vah-rah-yah Boh-dee-saht-vah-yah Mah-hah-saht-vah-yah Mah-hah-kah-roo-nee-kah-yah",
    chinese: "南無喝囉怛那哆囉夜耶。南無阿唎耶。婆盧羯帝爍缽囉耶。菩提薩埵婆耶。摩訶薩埵婆耶。摩訶迦盧尼迦耶。唵。薩皤囉罰曳。數怛那怛寫。南無悉吉栗埵伊蒙阿唎耶。婆盧吉帝室佛囉楞馱婆。南無那囉謹墀。醯利摩訶皤哆沙咩。薩婆阿他豆輸朋。阿逝孕。薩婆薩哆那摩婆薩哆那摩婆伽。摩罰特豆。怛姪他。唵。阿婆盧醯。盧迦帝。迦羅帝。夷醯唎。摩訶菩提薩埵。薩婆薩婆。摩囉摩囉。摩醯摩醯唎馱孕。俱盧俱盧羯蒙。度盧度盧罰闍耶帝。摩訶罰闍耶帝。陀囉陀囉。地唎尼。室佛囉耶。遮囉遮囉。摩麼罰摩囉。穆帝隸。伊醯伊醯。室那室那。阿囉參佛囉舍利。罰沙罰參。佛囉舍耶。呼嚧呼嚧摩囉。呼嚧呼嚧醯利。娑囉娑囉。悉唎悉唎。蘇嚧蘇嚧。菩提夜菩提夜。菩馱夜菩馱夜。彌帝唎夜。那囉謹墀。地利瑟尼那。婆夜摩那。娑婆訶。悉陀夜。娑婆訶。摩訶悉陀夜。娑婆訶。悉陀喻藝。室皤囉耶。娑婆訶。那囉謹墀。娑婆訶。摩囉那囉。娑婆訶。悉囉僧阿穆佉耶。娑婆訶。娑婆摩訶阿悉陀夜。娑婆訶。者吉囉阿悉陀夜。娑婆訶。波陀摩羯悉陀夜。娑婆訶。那囉謹墀皤伽囉耶。娑婆訶。摩婆利勝羯囉夜。娑婆訶。南無喝囉怛那哆囉夜耶。南無阿唎耶。婆嚧吉帝。爍皤囉夜。娑婆訶。唵。悉殿都。漫多囉。跋陀耶。娑婆訶。",
    chineseTitle: "大悲咒",
    benefits: [
      "Invokes compassionate protection",
      "Removes obstacles and negativity",
      "Heals physical and mental ailments",
      "Cultivates boundless compassion"
    ],
    hasChinese: true,
    audioUrlEnglish: `${BUNNY_CDN}/audio/great-compassion-english.mp3`,
    audioUrlChinese: `${BUNNY_CDN}/audio/great-compassion-chinese.mp3`
  },
  {
    id: "medicine-buddha",
    name: "Medicine Buddha Mantra",
    tradition: "Mahayana Buddhism",
    description: "The Medicine Buddha Mantra invokes the healing power of Bhaiṣajyaguru, the Buddha of Healing. It is recited for physical and mental healing, and to purify negative karma related to illness.",
    text: "Tayata Om Bekandze Bekandze Maha Bekandze Radza Samudgate Soha",
    phonetic: "Tah-yah-tah Ohm Beh-kahn-dzeh Beh-kahn-dzeh Mah-hah Beh-kahn-dzeh Rahd-zah Sah-mood-gah-teh Soh-hah",
    benefits: [
      "Promotes physical healing",
      "Purifies illness-related karma",
      "Brings mental peace",
      "Invokes healing blessings"
    ],
    hasChinese: false
  },
  {
    id: "green-tara",
    name: "Green Tara Mantra",
    tradition: "Tibetan Buddhism",
    description: "Green Tara is the female Buddha of compassionate action. Her mantra is recited for protection, to overcome fears, and to receive swift assistance in times of need.",
    text: "Om Tare Tuttare Ture Soha",
    phonetic: "Ohm Tah-reh Too-tah-reh Too-reh Soh-hah",
    benefits: [
      "Provides swift protection",
      "Overcomes fears and obstacles",
      "Grants wishes and blessings",
      "Connects to divine feminine energy"
    ],
    hasChinese: false
  },
  {
    id: "vajrasattva",
    name: "Vajrasattva Mantra (100 Syllable)",
    tradition: "Vajrayana Buddhism",
    description: "The Vajrasattva mantra is the most powerful purification practice in Vajrayana Buddhism. It purifies negative karma, broken vows, and obstacles to spiritual progress.",
    text: "Om Vajrasattva Samayam Anupalaya, Vajrasattva Tvenopatishtha, Dridho Me Bhava, Sutoshyo Me Bhava, Suposhyo Me Bhava, Anurakto Me Bhava, Sarva Siddhim Me Prayaccha, Sarva Karma Sucha Me, Chittam Shriyam Kuru Hum, Ha Ha Ha Ha Ho, Bhagavan Sarva Tathagata, Vajra Ma Me Muncha, Vajri Bhava Maha Samaya Sattva Ah Hum Phat",
    phonetic: "Ohm Vahj-rah-saht-vah Sah-mah-yahm Ah-noo-pah-lah-yah...",
    benefits: [
      "Purifies negative karma",
      "Restores broken commitments",
      "Removes spiritual obstacles",
      "Accelerates enlightenment"
    ],
    hasChinese: false
  },
  {
    id: "amitabha",
    name: "Amitabha Buddha Mantra",
    tradition: "Pure Land Buddhism",
    description: "The Amitabha mantra invokes the Buddha of Infinite Light. Recitation with faith is said to ensure rebirth in the Pure Land, a realm where enlightenment is easily attained.",
    text: "Om Ami Dewa Hrih / Namo Amitabha Buddha",
    phonetic: "Ohm Ah-mee Deh-wah Hree / Nah-moh Ah-mee-tah-bah Boo-dah",
    benefits: [
      "Ensures rebirth in Pure Land",
      "Invokes infinite light and compassion",
      "Purifies obstacles to enlightenment",
      "Brings peace at time of death"
    ],
    hasChinese: false
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
  const [selectedDuration, setSelectedDuration] = useState(11);
  const [expandedSutra, setExpandedSutra] = useState<string | null>(null);
  const [showChineseMap, setShowChineseMap] = useState<Record<string, boolean>>({});
  const [playingSutraAudio, setPlayingSutraAudio] = useState<{sutraId: string; language: 'english' | 'chinese'} | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sutraAudioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTimerRunning && practiceTimer > 0) {
      timerRef.current = setTimeout(() => {
        setPracticeTimer(prev => prev - 1);
      }, 1000);
    } else if (practiceTimer === 0 && isTimerRunning) {
      setIsTimerRunning(false);
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

  const toggleChinese = (sutraId: string) => {
    setShowChineseMap(prev => ({
      ...prev,
      [sutraId]: !prev[sutraId]
    }));
  };

  const playSutraAudio = (sutra: Sutra, language: 'english' | 'chinese') => {
    // Stop any currently playing sutra audio
    if (sutraAudioRef.current) {
      sutraAudioRef.current.pause();
      sutraAudioRef.current = null;
    }

    const audioUrl = language === 'english' ? sutra.audioUrlEnglish : sutra.audioUrlChinese;
    if (!audioUrl) return;

    // If clicking the same audio that's playing, stop it
    if (playingSutraAudio?.sutraId === sutra.id && playingSutraAudio?.language === language) {
      setPlayingSutraAudio(null);
      return;
    }

    sutraAudioRef.current = new Audio(audioUrl);
    sutraAudioRef.current.play();
    setPlayingSutraAudio({ sutraId: sutra.id, language });

    sutraAudioRef.current.onended = () => {
      setPlayingSutraAudio(null);
    };
  };

  const stopSutraAudio = () => {
    if (sutraAudioRef.current) {
      sutraAudioRef.current.pause();
      sutraAudioRef.current = null;
    }
    setPlayingSutraAudio(null);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Mantras & Sutras | Sacred Sound Practice | The Shankara Experience" 
        description="Transform your consciousness with sacred Sanskrit mantras and Buddhist sutras. Guided meditation sessions with breathing exercises and visualization prompts for deep spiritual practice."
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
                Mantras <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">&</span> Sutras
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
                Transform your consciousness through the sacred vibrations of Sanskrit mantras and Buddhist sutras. 
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
                    <p className="text-purple-300/70 text-sm italic mt-1">{activeMantra.phonetic}</p>
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
                    <p className="text-purple-300/60 text-xs italic mt-1">{mantra.phonetic}</p>
                    <p className="text-accent text-sm mt-1">{mantra.translation}</p>
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

        {/* Sutras Section */}
        <section className="py-20 bg-[#1a0b2e] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge className="bg-emerald-900/50 text-emerald-200 border border-emerald-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
                <BookOpen className="w-3 h-3 mr-2" /> Sacred Texts
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Buddhist <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Sutras</span>
              </h2>
              <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
                Explore the profound wisdom of Buddhist sutras and dharanis. These sacred texts carry transformative power when recited with devotion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {sutras.map((sutra) => (
                <div
                  key={sutra.id}
                  className={`rounded-2xl p-6 transition-all duration-500 ${
                    expandedSutra === sutra.id
                      ? 'bg-gradient-to-br from-emerald-900/40 to-purple-900/40 border-2 border-emerald-500/40'
                      : 'bg-purple-900/20 border border-white/10 hover:border-emerald-500/30'
                  }`}
                >
                  <div 
                    className="cursor-pointer"
                    onClick={() => setExpandedSutra(expandedSutra === sutra.id ? null : sutra.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white">{sutra.name}</h3>
                        <p className="text-emerald-300/70 text-sm">{sutra.tradition}</p>
                      </div>
                      {expandedSutra === sutra.id ? (
                        <ChevronUp className="w-5 h-5 text-emerald-300 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-emerald-300 shrink-0" />
                      )}
                    </div>
                    
                    <p className="text-purple-200/80 text-sm mb-4">{sutra.description}</p>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedSutra === sutra.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-emerald-500/20 space-y-4">
                      {/* Sanskrit/Pali Text */}
                      <div>
                        <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wider mb-2">Sacred Text:</h4>
                        <p className="text-purple-100/90 text-sm italic leading-relaxed bg-black/20 p-4 rounded-lg">
                          {sutra.text}
                        </p>
                        {sutra.phonetic && (
                          <p className="text-purple-300/60 text-xs mt-2 italic">
                            Pronunciation: {sutra.phonetic}
                          </p>
                        )}
                      </div>
                      
                      {/* Audio Playback - Only for Heart Sutra and Great Compassion Mantra */}
                      {sutra.audioUrlEnglish && (
                        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-4 border border-emerald-500/20">
                          <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Volume2 className="w-4 h-4" /> Listen to Recitation
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                playSutraAudio(sutra, 'english');
                              }}
                              className={`${
                                playingSutraAudio?.sutraId === sutra.id && playingSutraAudio?.language === 'english'
                                  ? 'bg-emerald-600 hover:bg-emerald-700'
                                  : 'bg-emerald-900/50 hover:bg-emerald-800/50'
                              } text-white border border-emerald-500/30`}
                            >
                              {playingSutraAudio?.sutraId === sutra.id && playingSutraAudio?.language === 'english' ? (
                                <><Pause className="w-4 h-4 mr-2" /> Stop Sanskrit/English</>
                              ) : (
                                <><Play className="w-4 h-4 mr-2" /> Play Sanskrit/English</>
                              )}
                            </Button>
                            {sutra.audioUrlChinese && (
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  playSutraAudio(sutra, 'chinese');
                                }}
                                className={`${
                                  playingSutraAudio?.sutraId === sutra.id && playingSutraAudio?.language === 'chinese'
                                    ? 'bg-amber-600 hover:bg-amber-700'
                                    : 'bg-amber-900/50 hover:bg-amber-800/50'
                                } text-white border border-amber-500/30`}
                              >
                                {playingSutraAudio?.sutraId === sutra.id && playingSutraAudio?.language === 'chinese' ? (
                                  <><Pause className="w-4 h-4 mr-2" /> Stop Chinese</>
                                ) : (
                                  <><Play className="w-4 h-4 mr-2" /> Play Chinese</>
                                )}
                              </Button>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Chinese Version Toggle - Only for Heart Sutra and Great Compassion Mantra */}
                      {sutra.hasChinese && sutra.chinese && (
                        <div>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleChinese(sutra.id);
                            }}
                            variant="outline"
                            className="border-emerald-500/50 text-emerald-200 hover:bg-emerald-900/30 mb-3"
                          >
                            <Languages className="w-4 h-4 mr-2" />
                            {showChineseMap[sutra.id] ? 'Hide' : 'Show'} Chinese Version ({sutra.chineseTitle})
                          </Button>
                          
                          <div className={`overflow-hidden transition-all duration-500 ${
                            showChineseMap[sutra.id] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="bg-black/30 p-4 rounded-lg border border-emerald-500/20">
                              <h5 className="text-lg font-bold text-amber-200 mb-3 text-center">{sutra.chineseTitle}</h5>
                              <p className="text-purple-100/90 text-sm leading-loose whitespace-pre-wrap font-serif">
                                {sutra.chinese}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Benefits */}
                      <div>
                        <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wider mb-2">Benefits:</h4>
                        <ul className="space-y-2">
                          {sutra.benefits.map((benefit, i) => (
                            <li key={i} className="text-purple-200/80 text-sm flex items-center gap-2">
                              <Heart className="w-3 h-3 text-emerald-400 shrink-0" /> {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
