import { Link } from "wouter";
import { Instagram, Facebook, Mail, Loader2, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage(data.message);
        setEmail("");
        setName("");
      } else {
        setIsSuccess(false);
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative bg-[#0d0417] text-white/80 py-24 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="relative mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/40 to-accent/20 border border-purple-500/20 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm uppercase tracking-widest text-accent font-medium">Sacred Wisdom</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Join Our Spiritual Community
              </h3>
              <p className="text-purple-200/80 text-sm md:text-base max-w-md">
                Receive sacred teachings, exclusive offers, and guidance for your spiritual journey directly in your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto md:min-w-[400px]">
              {isSuccess ? (
                <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-green-200">{message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="text"
                      placeholder="Your name (optional)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent h-12"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading || !email}
                    className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-semibold rounded-xl shadow-[0_0_20px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Subscribe to Sacred Wisdom
                      </>
                    )}
                  </Button>
                  {message && !isSuccess && (
                    <p className="text-red-400 text-sm text-center">{message}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white tracking-wide mb-8">
              SHANKARA <span className="text-accent">ORACLE</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
              The Shankara Oracle is a combination of channeled predictive and healing tools rooted in ancient wisdom. Designed to guide you on your spiritual journey.
            </p>
            
            {/* Social Media Links */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.instagram.com/paulwagner1008/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-accent/20 rounded-lg transition-all duration-300 group"
                title="Paul Wagner on Instagram"
              >
                <Instagram className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                <span className="text-xs text-white/70 group-hover:text-white transition-colors">@paulwagner1008</span>
              </a>
              <a 
                href="https://www.instagram.com/shrikrishnakalesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-accent/20 rounded-lg transition-all duration-300 group"
                title="Krishna Kalesh on Instagram"
              >
                <Instagram className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                <span className="text-xs text-white/70 group-hover:text-white transition-colors">@shrikrishnakalesh</span>
              </a>
              <a 
                href="https://www.facebook.com/paulwagner1008/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-accent/20 rounded-lg transition-all duration-300 group"
                title="Paul Wagner on Facebook"
              >
                <Facebook className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                <span className="text-xs text-white/70 group-hover:text-white transition-colors">Paul Wagner</span>
              </a>
              <a 
                href="https://www.facebook.com/believeinmiracles108" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-accent/20 rounded-lg transition-all duration-300 group"
                title="Believe In Miracles on Facebook"
              >
                <Facebook className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                <span className="text-xs text-white/70 group-hover:text-white transition-colors">Believe In Miracles</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/about"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">About Shankara</span></Link></li>
              <li><Link href="/master-training"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Training</span></Link></li>
              <li><Link href="/certification"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Master Certification</span></Link></li>
              <li><Link href="/readers"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Find a Reader</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Shop</span></Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Resources</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/how-to-shankara"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">How To Use</span></Link></li>
              <li><Link href="/videos"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Videos</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Blog</span></Link></li>
              <li><Link href="/testimonials"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Testimonials</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">FAQ</span></Link></li>
              <li><Link href="/affiliates"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Affiliates</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Contact</span></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Legal</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/privacy"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Privacy Policy</span></Link></li>
              <li><Link href="/terms"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Terms & Conditions</span></Link></li>

            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-medium uppercase tracking-wider">
          <p>&copy; 2024 Believe In Miracles LLC. All rights reserved.</p>
          <p>Created by Krishna Kalesh (Paul Wagner)</p>
        </div>
      </div>
    </footer>
  );
}
