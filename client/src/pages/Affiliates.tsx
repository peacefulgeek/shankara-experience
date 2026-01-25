import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Globe } from "lucide-react";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Affiliates() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Affiliate Program" 
        description="Partner with Shankara. Earn commissions by sharing the wisdom of the Shankara Oracle with your community."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Us</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
          Join our affiliate program and earn commissions by sharing the wisdom of the Shankara Oracle.
        </p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: DollarSign,
                title: "Generous Commissions",
                desc: "Earn 20% on every sale you refer, including courses and physical products."
              },
              {
                icon: Users,
                title: "Growing Community",
                desc: "Be part of a global movement of spiritual seekers and teachers."
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Share your unique link anywhere in the world. We ship globally."
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 text-accent shadow-inner">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-white">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-10 bg-gradient-to-br from-purple-900/40 to-black/40 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl">
            <h2 className="text-3xl font-bold font-display mb-6 text-white">Ready to Start Earning?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Apply now to become an official Shankara affiliate. We review every application personally.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-bold px-10 h-14 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                Apply to Affiliate Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
