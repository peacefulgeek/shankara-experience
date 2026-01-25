import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Calendar, MessageCircle, FileText, Award, Users, HelpCircle, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Certification() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative bg-[#1a0b2e]">
      <SEO 
        title="Become a Certified Shankara Master | Professional Certification" 
        description="A 3-month individual mentorship program with Krishna Kalesh. Become a certified reader and healer."
      />

      {/* BACKGROUND - Purple style from Readers/Videos */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://shankara-pull.b-cdn.net/images/stars-pattern.webp')] opacity-20 mix-blend-screen" />
      </div>

      <Navigation />

      <main className="relative z-10">
        {/* HERO - Lightened & Mystical */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-purple-400/50 text-purple-200 px-4 py-1 text-sm tracking-widest uppercase bg-purple-900/30 backdrop-blur-md">
              <Sparkles className="w-3 h-3 mr-2 text-yellow-200" /> Professional Certification
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
              Become a Certified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-purple-200 glow-text">
                Shankara Master
              </span>
            </h1>
            
            <p className="text-xl text-purple-200/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Work directly with Shri Krishna Kalesh in private sessions.
              <br className="hidden md:block" />
              Help others heal deeply and unlock their potential as a professional intuitive guide.
            </p>
            
            <Button size="lg" className="bg-[#ff00ff] hover:bg-[#d900d9] text-white px-10 py-8 text-xl rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all">
              Apply for Certification
            </Button>
            
            <p className="mt-6 text-purple-300/50 text-sm tracking-widest uppercase">Limited spots available each quarter</p>
            
            {/* Mandala Community Image */}
            <div className="mt-12 mb-3">
              <img 
                src="https://shankara-pull.b-cdn.net/images/mandala-community.webp" 
                alt="Shankara Community" 
                className="mx-auto max-w-xl w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* PROGRAM DETAILS - Ancient Mystical Style */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Go Further. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-100">Get Certified.</span>
                </h2>
                <p className="text-lg text-purple-200/80 leading-relaxed font-light">
                  The Certification is a unique opportunity to dive deeply and take your skills to the next level with the benefit of personal guidance from Shri Krishna Kalesh.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Deepen your understanding of spiritual teachings & healing modalities",
                    "Dive deeply into the teachings of the Master course",
                    "Practice delivering transformational Shankara sessions",
                    "Receive support and guidance on your spiritual journey",
                    "Be listed on the Website as a trained Certified Shankara Master"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 bg-purple-500/20 p-2 rounded-full border border-purple-500/30 group-hover:bg-purple-500/40 transition-colors">
                        <Check className="w-4 h-4 text-purple-200" />
                      </div>
                      <p className="text-purple-100/90 font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Card - Mystical Style */}
              <div className="bg-[#2a1b4e]/80 border border-purple-500/20 rounded-3xl p-8 md:p-10 relative shadow-[0_0_60px_rgba(139,92,246,0.15)] backdrop-blur-md">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Award className="w-40 h-40 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-8 tracking-wide">What's Included:</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full border border-purple-500/30">
                      <Users className="w-6 h-6 text-purple-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">3 Private Live Sessions</h4>
                      <p className="text-purple-300/60 text-sm">Individual mentorship with Krishna Kalesh</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/30">
                      <MessageCircle className="w-6 h-6 text-blue-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Direct Access & Support</h4>
                      <p className="text-purple-300/60 text-sm">Email/Skype support throughout the program</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-full border border-pink-500/30">
                      <FileText className="w-6 h-6 text-pink-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Advanced Materials</h4>
                      <p className="text-purple-300/60 text-sm">Exclusive eBook and deep-dive worksheets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500/20 p-3 rounded-full border border-yellow-500/30">
                      <Award className="w-6 h-6 text-yellow-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Official Certification</h4>
                      <p className="text-purple-300/60 text-sm">Listed on Shankara website as a Master</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                  <div className="text-sm text-purple-300/60 uppercase tracking-widest mb-2">Total Value: $4,000+</div>
                  <div className="text-5xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">$1,500</div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold h-14 text-lg rounded-xl shadow-lg transition-all">
                    Register for Certification
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Dark & Clean */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Will there be a time limit to complete the course?",
                  a: "For Certification students, you must complete the course within the 12-week time period to maintain momentum with your private sessions. Extensions can be granted on an individual basis."
                },
                {
                  q: "I am new to intuitive practices – will I benefit?",
                  a: "Absolutely. You don't need specific prior knowledge. The course is designed to meet you where you are, whether you are a beginner or an experienced healer."
                },
                {
                  q: "Do I need to purchase the Shankara Oracle separately?",
                  a: "Yes. The Shankara Oracle will need to be purchased separately. If you don't have one, you will receive a special discount when you purchase the course."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-purple-400" /> {faq.q}
                  </h3>
                  <p className="text-purple-200/70 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
