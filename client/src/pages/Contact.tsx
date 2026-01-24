import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Send, CheckCircle, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">Thank you for reaching out. We'll get back to you soon.</p>
                  <Button 
                    onClick={() => setStatus("idle")} 
                    className="mt-6 bg-accent text-black hover:bg-accent/90"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users, visible to bots */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Name *</label>
                      <Input 
                        placeholder="Your Name" 
                        className="bg-black/20 border-white/10 text-white h-12"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Email *</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-black/20 border-white/10 text-white h-12"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Subject</label>
                    <Input 
                      placeholder="How can we help?" 
                      className="bg-black/20 border-white/10 text-white h-12"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 uppercase tracking-wider">Message *</label>
                    <Textarea 
                      placeholder="Write your message here..." 
                      className="bg-black/20 border-white/10 text-white min-h-[150px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-14 bg-accent text-black hover:bg-accent/90 font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.3)] disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12 py-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-white">Connect With Us</h3>
                <div className="space-y-6">
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
