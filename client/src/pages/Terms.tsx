import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white selection:bg-accent selection:text-black">
      <Navigation />
      <section className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-12">Terms & Conditions</h1>
        <div className="prose prose-invert prose-lg max-w-none">
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
      </section>
      <Footer />
    </div>
  );
}
