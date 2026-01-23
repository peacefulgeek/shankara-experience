import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Globe } from "lucide-react";
import SEO from "@/components/SEO";

export default function Contact() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Shankara Experience team. We are here to support your journey."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">Get in Touch</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
              Have questions about the Oracle, the Master Course, or Certification? We're here to help you on your journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 backdrop-blur-md">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Name</label>
                    <Input placeholder="Your Name" className="bg-black/20 border-white/10 text-white h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-black/20 border-white/10 text-white h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Subject</label>
                  <Input placeholder="How can we help?" className="bg-black/20 border-white/10 text-white h-12" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Message</label>
                  <Textarea placeholder="Write your message here..." className="bg-black/20 border-white/10 text-white min-h-[150px]" />
                </div>
                
                <Button className="w-full h-14 bg-accent text-black hover:bg-accent/90 font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12 py-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-white">Connect Directly</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent shadow-inner">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Email Us</h4>
                      <p className="text-white/60 mb-1">For general inquiries and support</p>
                      <a href="mailto:support@paulwagner.com" className="text-accent hover:underline">support@paulwagner.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent shadow-inner">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Paul Wagner's Site</h4>
                      <p className="text-white/60 mb-1">Explore more teachings and offerings</p>
                      <a href="https://paulwagner.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.paulwagner.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 p-8 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-4 text-white">Frequently Asked Questions</h4>
                <p className="text-white/70 mb-6">
                  Many common questions about shipping, course access, and the oracle system are answered in our FAQ section.
                </p>
                <a href="/faq">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black font-bold">
                    Visit FAQ Page
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
