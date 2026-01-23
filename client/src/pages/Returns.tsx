import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Returns() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Returns Policy" 
        description="Read our returns policy for physical and digital products."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Return <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Policy</span>
        </h1>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-panel p-10 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="prose prose-invert prose-lg max-w-none text-white/80">
              <h3>Physical Products</h3>
              <p>We want you to be absolutely delighted with your Shankara Oracle. If you receive a damaged or defective product, please contact us within 7 days of delivery for a replacement.</p>
              <p>Unopened physical products may be returned within 14 days of delivery for a refund, minus shipping costs. The item must be in its original, shrink-wrapped condition.</p>
              
              <h3>Digital Courses</h3>
              <p>Due to the immediate access nature of our digital courses (The Master Course), we generally do not offer refunds once the content has been accessed. However, we are committed to your satisfaction. If you encounter technical issues or believe the course was misrepresented, please contact our support team.</p>
              
              <h3>Certification Program</h3>
              <p>Enrollment in the Certification Program involves a commitment to the cohort. Refunds are available up to 14 days before the start of the live sessions, minus a non-refundable administrative fee.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
