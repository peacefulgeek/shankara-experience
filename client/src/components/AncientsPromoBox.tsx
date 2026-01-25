import { Link } from "wouter";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AncientsPromoBox() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-900/20 via-purple-900/30 to-black/40 p-8 md:p-10 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Icon */}
        <div className="shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/30 to-purple-600/30 flex items-center justify-center border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-10 h-10 text-amber-400" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">The Ancients</span>
          </h3>
          <p className="text-white/70 leading-relaxed mb-4 max-w-xl">
            Journey through 5,000 years of sacred divination wisdom—from ancient Egypt and India to shamanic traditions and the modern Shankara Oracle System.
          </p>
        </div>
        
        {/* CTA */}
        <div className="shrink-0">
          <Link href="/the-ancients">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 px-8 rounded-full font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all group"
            >
              Explore the Lineage
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
