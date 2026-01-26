import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, Sparkles, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BUNNY_CDN = "https://shankara-pull.b-cdn.net";

interface Mantra {
  id: string;
  name: string;
  sanskrit: string;
  phonetic: string;
  meaning: string;
  description: string;
  benefits: string[];
  audioUrl: string;
  color: string;
  chakra: string;
  duration: string;
}

const mantras: Mantra[] = [
  {
    id: "om",
    name: "Om",
    sanskrit: "ॐ",
    phonetic: "Ohm (rhymes with 'home')",
    meaning: "The Primordial Sound",
    description: "Om is the cosmic vibration from which all creation emerges. It represents the union of mind, body, and spirit, and is considered the most sacred syllable in Hinduism and Buddhism.",
    benefits: ["Calms the nervous system", "Reduces stress and anxiety", "Connects to universal consciousness"],
    audioUrl: `${BUNNY_CDN}/audio/om-authentic.mp3`,
    color: "from-purple-500 to-indigo-600",
    chakra: "Crown (Sahasrara)",
    duration: "3:00"
  },
  {
    id: "om-namah-shivaya",
    name: "Om Namah Shivaya",
    sanskrit: "ॐ नमः शिवाय",
    phonetic: "Ohm Nah-mah Shee-vah-yah",
    meaning: "I Bow to Shiva (Pure Consciousness)",
    description: "One of the most powerful Hindu mantras, it honors Shiva as the supreme consciousness. It purifies the mind and removes obstacles on the spiritual path.",
    benefits: ["Destroys negative karma", "Awakens inner wisdom", "Dissolves ego attachments"],
    audioUrl: `${BUNNY_CDN}/audio/om-namah-shivaya-authentic.mp3`,
    color: "from-blue-500 to-cyan-600",
    chakra: "Third Eye (Ajna)",
    duration: "3:30"
  },
  {
    id: "lokah-samastah",
    name: "Lokah Samastah Sukhino Bhavantu",
    sanskrit: "ॐ लोकाः समस्ताः सुखिनो भवन्तु",
    phonetic: "Ohm Loh-kah Sah-mah-stah Soo-khee-noh Bhah-vahn-too",
    meaning: "May All Beings Be Happy & Free",
    description: "Known as Amma's Mantra, this blessing prayer radiates love and compassion to all beings. It's a powerful practice for developing universal love and dissolving separation.",
    benefits: ["Opens the heart chakra", "Cultivates compassion", "Generates positive karma"],
    audioUrl: `${BUNNY_CDN}/audio/lokah-samastah-authentic.mp3`,
    color: "from-pink-500 to-rose-600",
    chakra: "Heart (Anahata)",
    duration: "4:00"
  },
  {
    id: "gayatri",
    name: "Gayatri Mantra",
    sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
    phonetic: "Ohm Bhoor Bhoo-vah Swah-ha, Taht Sah-vee-toor Vah-rehn-yahm, Bhar-goh Deh-vah-syah Dhee-mah-hee, Dhee-yoh Yoh Nah Prah-choh-dah-yaht",
    meaning: "Illumination of the Intellect",
    description: "The Gayatri is one of the oldest and most powerful Vedic mantras. It invokes the divine light of the sun to illuminate the mind and awaken spiritual wisdom.",
    benefits: ["Sharpens intellect", "Removes darkness of ignorance", "Purifies the mind"],
    audioUrl: "", // Audio coming soon
    color: "from-amber-500 to-yellow-600",
    chakra: "Solar Plexus (Manipura)",
    duration: "4:30"
  },
  {
    id: "om-mani-padme-hum",
    name: "Om Mani Padme Hum",
    sanskrit: "ॐ मणि पद्मे हूँ",
    phonetic: "Ohm Mah-nee Pahd-meh Hoom",
    meaning: "The Jewel in the Lotus",
    description: "The most famous Buddhist mantra, associated with Avalokiteshvara, the Bodhisattva of Compassion. Each syllable purifies a different realm of existence.",
    benefits: ["Develops compassion", "Purifies negative emotions", "Brings peace of mind"],
    audioUrl: `${BUNNY_CDN}/audio/om-mani-padme-hum-authentic.mp3`,
    color: "from-emerald-500 to-teal-600",
    chakra: "Heart (Anahata)",
    duration: "3:45"
  },
  {
    id: "ganesha",
    name: "Om Gam Ganapataye Namaha",
    sanskrit: "ॐ गं गणपतये नमः",
    phonetic: "Ohm Gahm Gah-nah-pah-tah-yeh Nah-mah-hah",
    meaning: "Salutations to the Remover of Obstacles",
    description: "This mantra invokes Lord Ganesha, the elephant-headed deity who removes obstacles and brings success. Chant before starting any new venture or when facing challenges.",
    benefits: ["Removes obstacles", "Brings success and prosperity", "Clears the path forward"],
    audioUrl: "", // Audio coming soon
    color: "from-orange-500 to-red-600",
    chakra: "Root (Muladhara)",
    duration: "3:15"
  }
];

export default function MantraSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [selectedMantra, setSelectedMantra] = useState<Mantra | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlay = (mantra: Mantra, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    if (playingId === mantra.id) {
      // Pause current
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      // Stop any playing audio
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // Create new audio and play
      audioRef.current = new Audio(mantra.audioUrl);
      audioRef.current.play();
      audioRef.current.onended = () => setPlayingId(null);
      setPlayingId(mantra.id);
    }
  };

  const openMantraModal = (mantra: Mantra) => {
    setSelectedMantra(mantra);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Stop audio when closing modal
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayingId(null);
    }
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#1a0b2e] to-[#251836] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-900/30 text-purple-200 border border-purple-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
            <Volume2 className="w-3 h-3 mr-2" /> Sacred Sound
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            The Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">Mantra</span>
          </h2>
          <p className="text-xl text-purple-200/80 max-w-3xl mx-auto">
            Sanskrit mantras carry vibrational frequencies that transform consciousness. Click any mantra to learn more and listen.
          </p>
        </div>

        {/* Mantra Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mantras.map((mantra) => {
            const isPlaying = playingId === mantra.id;
            
            return (
              <div
                key={mantra.id}
                className="relative group rounded-2xl p-6 transition-all duration-300 cursor-pointer bg-purple-900/20 border border-white/10 hover:border-purple-500/50 hover:bg-purple-900/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:scale-[1.02]"
                onClick={() => openMantraModal(mantra)}
              >
                {/* Sanskrit Symbol */}
                <div className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  {mantra.sanskrit}
                </div>

                {/* Mantra Name */}
                <h3 className="text-xl font-display font-bold text-white text-center mb-1">
                  {mantra.name}
                </h3>

                {/* Phonetic Pronunciation */}
                <p className="text-xs text-purple-300/70 text-center mb-2 italic font-light">
                  {mantra.phonetic}
                </p>

                {/* Meaning */}
                <p className="text-sm text-accent text-center mb-4 font-medium">
                  {mantra.meaning}
                </p>

                {/* Play Button */}
                <div className="flex justify-center">
                  {mantra.audioUrl ? (
                    <Button
                      onClick={(e) => handlePlay(mantra, e)}
                      className={`rounded-full w-14 h-14 p-0 transition-all duration-300 ${
                        isPlaying
                          ? `bg-gradient-to-r ${mantra.color} shadow-[0_0_20px_rgba(255,255,255,0.3)]`
                          : 'bg-white/10 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </Button>
                  ) : (
                    <div className="rounded-full w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10">
                      <span className="text-[10px] text-purple-300/50 text-center leading-tight">Audio<br/>Soon</span>
                    </div>
                  )}
                </div>

                {/* Playing Indicator */}
                {isPlaying && (
                  <div className="absolute top-4 right-4 flex items-center gap-1">
                    <span className="w-1 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-accent rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-accent rounded-full animate-pulse delay-150" />
                  </div>
                )}

                {/* Click hint */}
                <p className="text-xs text-purple-400/50 text-center mt-4 group-hover:text-purple-300/70 transition-colors">
                  Click for details →
                </p>
              </div>
            );
          })}
        </div>

        {/* Tip */}
        <div className="text-center">
          <p className="text-purple-300/60 text-sm italic">
            Tip: Chant along with the audio 108 times for maximum benefit. Use mala beads to keep count.
          </p>
        </div>
      </div>

      {/* Mantra Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-[#1a0b2e] to-[#251836] border border-purple-500/30 text-white p-0 overflow-hidden">
          {selectedMantra && (
            <>
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${selectedMantra.color} p-6 pb-8`}>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 mr-1" /> Sacred Mantra
                    </Badge>
                    <button 
                      onClick={closeModal}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-5xl md:text-6xl font-bold mb-3">
                      {selectedMantra.sanskrit}
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-display font-bold text-white">
                      {selectedMantra.name}
                    </DialogTitle>
                    <p className="text-white/80 italic mt-2">{selectedMantra.phonetic}</p>
                    <p className="text-white font-medium mt-1">{selectedMantra.meaning}</p>
                  </div>
                </DialogHeader>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-purple-200/90 leading-relaxed text-center">
                  {selectedMantra.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-900/30 rounded-xl p-4 text-center">
                    <p className="text-purple-400 text-xs uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-white font-bold">{selectedMantra.duration}</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-xl p-4 text-center">
                    <p className="text-purple-400 text-xs uppercase tracking-wider mb-1">Chakra</p>
                    <p className="text-white font-bold">{selectedMantra.chakra}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-purple-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedMantra.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-purple-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Play Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    onClick={() => handlePlay(selectedMantra)}
                    className={`rounded-full px-8 py-6 text-lg font-bold transition-all duration-300 ${
                      playingId === selectedMantra.id
                        ? `bg-gradient-to-r ${selectedMantra.color} shadow-[0_0_30px_rgba(255,255,255,0.3)]`
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {playingId === selectedMantra.id ? (
                      <>
                        <Pause className="w-5 h-5 mr-2" />
                        Stop Chanting
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Listen & Chant Along
                      </>
                    )}
                  </Button>
                </div>

                {/* Audio note */}
                <p className="text-xs text-purple-400/60 text-center italic">
                  Note: For authentic pronunciation, we recommend learning from a qualified teacher.
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
