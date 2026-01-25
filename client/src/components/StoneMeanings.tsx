import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import stonesData from "@/lib/stones-data.json";

interface Stone {
  id: number;
  name: string;
  title: string;
  desc: string;
  image: string;
}

const stones: Stone[] = stonesData;

export default function StoneMeanings() {
  const [selectedStone, setSelectedStone] = useState<Stone | null>(null);
  const [showAllStones, setShowAllStones] = useState(false);

  const displayedStones = showAllStones ? stones : stones.slice(0, 6);

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#251836] to-[#1a0b2e] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-900/30 text-amber-200 border border-amber-500/30 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md mb-6">
            <Sparkles className="w-3 h-3 mr-2" /> Sacred Gemstones
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            The 18 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">Oracle Stones</span>
          </h2>
          <p className="text-xl text-purple-200/80 max-w-3xl mx-auto">
            Each black obsidian stone carries a Sanskrit name and sacred meaning, channeling ancient Vedic wisdom to illuminate your path.
          </p>
        </div>

        {/* Black Obsidian Significance */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[60px]" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] border border-white/10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black shadow-inner" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Why Black Obsidian?
                </h3>
                <p className="text-lg text-purple-100/90 leading-relaxed mb-4">
                  Black obsidian is volcanic glass forged in the earth's fire—a powerful stone of <strong className="text-amber-200">protection, truth, and transformation</strong>. It acts as a psychic shield, absorbing negative energies while revealing hidden truths buried in the subconscious.
                </p>
                <p className="text-purple-200/80 leading-relaxed">
                  In ancient traditions, obsidian was used for scrying mirrors and sacred blades. Its reflective surface symbolizes the mirror of the soul—showing us not what we want to see, but what we need to see for our evolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stone Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedStones.map((stone) => (
            <div
              key={stone.id}
              onClick={() => setSelectedStone(selectedStone?.id === stone.id ? null : stone)}
              className={`group cursor-pointer rounded-2xl p-6 transition-all duration-500 transform ${
                selectedStone?.id === stone.id
                  ? 'bg-amber-900/30 border-2 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.3)] scale-[1.02]'
                  : 'bg-purple-900/20 border border-white/10 hover:border-amber-500/40 hover:bg-purple-900/40 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(245,158,11,0.15),0_10px_40px_rgba(0,0,0,0.3)]'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Stone Image */}
                <div className={`w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-black shadow-lg border border-white/10 shrink-0 transition-all duration-500 ${
                  selectedStone?.id === stone.id
                    ? 'shadow-[0_0_20px_rgba(245,158,11,0.4)] border-amber-500/50'
                    : 'group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:border-amber-500/30'
                }`}>
                  <img 
                    src={stone.image} 
                    alt={stone.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Name & Title */}
                <div>
                  <h4 className="text-xl font-display font-bold text-white">{stone.name}</h4>
                  <p className="text-amber-300 font-medium">{stone.title}</p>
                </div>
              </div>

              {/* Description - Expandable */}
              <div className={`overflow-hidden transition-all duration-500 ${
                selectedStone?.id === stone.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-purple-100/90 leading-relaxed pt-4 border-t border-white/10">
                  {stone.desc}
                </p>
              </div>

              {/* Click hint */}
              {selectedStone?.id !== stone.id && (
                <p className="text-purple-400/60 text-sm mt-2 group-hover:text-purple-300 transition-colors">
                  Click to reveal meaning →
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAllStones(!showAllStones)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-200 hover:bg-purple-900/50 hover:border-purple-500/50 transition-all font-medium"
          >
            {showAllStones ? (
              <>
                Show Less <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show All 18 Stones <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Tip */}
        <div className="mt-12 text-center">
          <p className="text-purple-300/60 text-sm italic">
            Each stone in The Shankara Oracle is hand-selected and energetically cleansed before being placed in your sacred pouch.
          </p>
        </div>
      </div>
    </section>
  );
}
