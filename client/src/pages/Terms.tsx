import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Terms of Service" 
        description="Read our terms of service for using the Shankara Experience website and products."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Conditions</span>
        </h1>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-panel p-10 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="prose prose-invert prose-lg max-w-none text-white/80">
              <p>Last updated: January 2026</p>
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing and using The Shankara Experience website and purchasing our products or courses, you agree to be bound by these Terms and Conditions.</p>
              
              <h3>2. Intellectual Property</h3>
              <p>All content, including the Shankara Oracle system, card images, board designs, course materials, videos, and text, is the exclusive intellectual property of Paul Wagner. You may not reproduce, distribute, or create derivative works without express written permission.</p>
              
              <h3>3. Certification & Usage</h3>
              <p>Completion of the Master Course does not automatically grant the right to teach the material. Only those who complete the full Certification Program and receive official designation may market themselves as "Certified Shankara Masters."</p>
              
              <h3>4. Medical Disclaimer</h3>
              <p>The Shankara Oracle is a tool for spiritual guidance and self-reflection. It is not a substitute for professional medical, psychological, or legal advice.</p>
              
              <h3>5. Purchases & Refunds</h3>
              <p>Please refer to our Return Policy for details on physical product returns. Digital course purchases are generally non-refundable once accessed, due to the nature of digital content.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
