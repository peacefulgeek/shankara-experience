import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Calendar, MessageCircle, FileText, Award, Users, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Certification() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Become a Certified Shankara Master | Professional Certification" 
        description="A 3-month individual mentorship program with Krishna Kalesh. Become a certified reader and healer."
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <div className="absolute inset-0 bg-[url('/images/cosmic-bg-main.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/20 to-black/90" />
      </div>

      <Navigation />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm">
              Professional Certification
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Become a Certified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                Shankara Master
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              Work directly with Shri Krishna Kalesh in private sessions.
              <br className="hidden md:block" />
              Help others heal deeply and unlock their potential as a professional intuitive guide.
            </p>
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 px-10 py-8 text-xl rounded-full font-bold shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              Apply for Certification
            </Button>
            <p className="mt-4 text-white/50 text-sm">Limited spots available each quarter</p>
          </div>
        </section>

        {/* PROGRAM DETAILS */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Go Further. <span className="text-accent">Get Certified.</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
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
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-accent/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Award className="w-40 h-40 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-8">What's Included:</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <Users className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">3 Private Live Sessions</h4>
                      <p className="text-white/60 text-sm">Individual mentorship with Krishna Kalesh</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <MessageCircle className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Direct Access & Support</h4>
                      <p className="text-white/60 text-sm">Email/Skype support throughout the program</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-xl">
                      <FileText className="w-6 h-6 text-pink-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Advanced Materials</h4>
                      <p className="text-white/60 text-sm">Exclusive eBook and deep-dive worksheets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-xl">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Official Certification</h4>
                      <p className="text-white/60 text-sm">Listed on Shankara website as a Master</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                  <div className="text-sm text-white/60 uppercase tracking-widest mb-2">Total Value: $4,000+</div>
                  <div className="text-5xl font-bold text-white mb-6">$1,500</div>
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold h-14 text-lg rounded-xl">
                    Register for Certification
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
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
                    <HelpCircle className="w-5 h-5 text-accent" /> {faq.q}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{faq.a}</p>
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
