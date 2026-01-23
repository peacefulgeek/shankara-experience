import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <div className="text-center relative z-10 p-8">
        <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
          <AlertTriangle className="w-12 h-12 text-accent" />
        </div>
        
        <h1 className="text-6xl font-display font-bold mb-4 text-white">404</h1>
        <p className="text-2xl text-white/80 mb-8 font-light">Page Not Found</p>
        <p className="text-white/60 mb-12 max-w-md mx-auto">
          The path you are looking for seems to be lost in the cosmos. Let's guide you back home.
        </p>
        
        <Link href="/">
          <Button size="lg" className="bg-white text-black hover:bg-accent hover:text-black font-bold rounded-full px-8 h-12 shadow-lg transition-all">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
