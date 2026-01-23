import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white selection:bg-accent selection:text-black">
      <Navigation />
      <section className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-12">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none">
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
      </section>
      <Footer />
    </div>
  );
}
