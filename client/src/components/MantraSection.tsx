import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2, Sparkles } from "lucide-react";

const BUNNY_CDN = "https://shankara-pull.b-cdn.net";

interface Mantra {
  id: string;
  name: string;
  sanskrit: string;
  phonetic: string;
  meaning: string;
  description: string;
  audioUrl: string;
  color: string;
}

const mantras: Mantra[] = [
  {
    id: "om",
    name: "Om",
    sanskrit: "ॐ",
    phonetic: "Ohm (rhymes with 'home')",
    meaning: "The Primordial Sound",
    description: "The cosmic vibration from which all creation emerges. Chanting Om aligns you with the universe's fundamental frequency.",
    audioUrl: `${BUNNY_CDN}/audio/om.mp3`,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "om-namah-shivaya",
    name: "Om Namah Shivaya",
    sanskrit: "ॐ नमः शिवाय",
    phonetic: "Ohm Nah-mah Shee-vah-yah",
    meaning: "I Bow to Shiva (Pure Consciousness)",
    description: "One of the most powerful mantras for transformation. It dissolves ego and connects you to your highest Self.",
    audioUrl: `${BUNNY_CDN}/audio/om-namah-shivaya.mp3`,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "lokah-samastah",
    name: "Lokah Samastah",
    sanskrit: "ॐ लोकाः समस्ताः सुखिनो भवन्तु",
    phonetic: "Ohm Loh-kah Sah-mah-stah Soo-khee-noh Bhah-vahn-too",
    meaning: "May All Beings Be Happy & Free",
    description: "Amma's beloved mantra. A prayer for universal peace and the liberation of all beings from suffering.",
    audioUrl: `${BUNNY_CDN}/audio/lokah-samastah.mp3`,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "gayatri",
    name: "Gayatri Mantra",
    sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं",
    phonetic: "Ohm Bhoor Bhoo-vah Swah-ha, Taht Sah-vee-toor Vah-rehn-yahm, Bhar-goh Deh-vah-syah Dhee-mah-hee, Dhee-yoh Yoh Nah Prah-choh-dah-yaht",
    meaning: "Illumination of the Intellect",
    description: "The most sacred Vedic mantra. It invokes the divine light of the sun to illuminate your mind and guide your path.",
    audioUrl: `${BUNNY_CDN}/audio/gayatri.mp3`,
    color: "from-amber-500 to-yellow-600"
  },
  {
    id: "om-mani-padme-hum",
    name: "Om Mani Padme Hum",
    sanskrit: "ॐ मणि पद्मे हूँ",
    phonetic: "Ohm Mah-nee Pahd-meh Hoom",
    meaning: "The Jewel in the Lotus",
    description: "The compassion mantra of Avalokiteshvara. Each syllable purifies a realm of existence and cultivates boundless compassion.",
    audioUrl: `${BUNNY_CDN}/audio/om-mani-padme-hum.mp3`,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "ganesha",
    name: "Om Gam Ganapataye Namaha",
    sanskrit: "ॐ गं गणपतये नमः",
    phonetic: "Ohm Gahm Gah-nah-pah-tah-yeh Nah-mah-hah",
    meaning: "Salutations to the Remover of Obstacles",
    description: "Invoke Lord Ganesha to clear your path. Perfect for new beginnings, removing blocks, and inviting success.",
    audioUrl: `${BUNNY_CDN}/audio/ganesha.mp3`,
    color: "from-orange-500 to-red-600"
  }
];

export default function MantraSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [activeMantra, setActiveMantra] = useState<Mantra>(mantras[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (mantra: Mantra) => {
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
      setActiveMantra(mantra);
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
            Sanskrit mantras carry vibrational frequencies that transform consciousness. Click to listen and feel the ancient resonance.
          </p>
        </div>

        {/* Mantra Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mantras.map((mantra) => {
            const isPlaying = playingId === mantra.id;
            const isActive = activeMantra.id === mantra.id;
            
            return (
              <div
                key={mantra.id}
                className={`relative group rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? 'bg-purple-900/40 border-2 border-accent/50 shadow-[0_0_30px_rgba(255,0,255,0.2)]' 
                    : 'bg-purple-900/20 border border-white/10 hover:border-purple-500/30'
                }`}
                onClick={() => setActiveMantra(mantra)}
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
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlay(mantra);
                    }}
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
                </div>

                {/* Playing Indicator */}
                {isPlaying && (
                  <div className="absolute top-4 right-4 flex items-center gap-1">
                    <span className="w-1 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-accent rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-accent rounded-full animate-pulse delay-150" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Mantra Description */}
        <div className="max-w-3xl mx-auto text-center">
          <div className={`rounded-2xl p-8 bg-gradient-to-br ${activeMantra.color} bg-opacity-20 border border-white/10`}>
            <Sparkles className="w-8 h-8 text-white mx-auto mb-4" />
            <h4 className="text-2xl font-display font-bold text-white mb-2">{activeMantra.name}</h4>
            <p className="text-lg text-white/90 leading-relaxed">{activeMantra.description}</p>
          </div>
        </div>

        {/* Tip */}
        <div className="mt-12 text-center">
          <p className="text-purple-300/60 text-sm italic">
            Tip: Chant along with the audio 108 times for maximum benefit. Use mala beads to keep count.
          </p>
        </div>
      </div>
    </section>
  );
}
