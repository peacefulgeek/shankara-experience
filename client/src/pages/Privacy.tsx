import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Privacy Policy" 
        description="Read our privacy policy to understand how we protect your data."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Policy</span>
        </h1>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-panel p-10 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="prose prose-invert prose-lg max-w-none text-white/80">
              <p>Last updated: January 2026</p>
              <p>Your privacy is sacred to us. This policy outlines how we collect, use, and protect your personal information.</p>
              
              <h3>Information We Collect</h3>
              <p>We collect information you provide directly to us, such as when you purchase a product, enroll in a course, or sign up for our newsletter. This includes your name, email address, shipping address, and payment information.</p>
              
              <h3>How We Use Your Information</h3>
              <p>We use your information to process transactions, deliver course content, send you updates about the Shankara Oracle, and improve our services. We do not sell your personal data to third parties.</p>
              
              <h3>Course Platform</h3>
              <p>Our courses are hosted on secure platforms. When you enroll, your progress and completion data are tracked to issue certifications.</p>
              
              <h3>Cookies</h3>
              <p>We use cookies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
