import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Star, BookOpen, Users, Award } from "lucide-react";

export default function MasterTraining() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      {/* Background */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#1e1b4b]" />
        <img 
          src="/images/cosmic-nebula.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <Star className="w-5 h-5 text-accent fill-current" />
                  <span className="text-sm font-bold text-accent tracking-wider uppercase">Most Popular Training</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-display font-light text-white leading-[1.1]">
                  The Shankara <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 font-bold">
                    Master Course
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  Unlock your intuitive gifts, master the 300+ cards of the Shankara Oracle, and learn to give profound, life-changing readings for yourself and others.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-16 text-xl rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 w-full sm:w-auto">
                    Enroll Now for $197
                  </Button>
                  <div className="flex items-center gap-4 text-white/80 cursor-pointer hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all">
                      <Play size={20} className="ml-1 fill-current" />
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase">Watch Trailer</span>
                  </div>
                </div>
                
                <p className="text-sm text-white/40 uppercase tracking-widest">Lifetime Access • 30-Day Money Back Guarantee</p>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-600/20 rounded-[2rem] blur-[80px] -z-10" />
                <img 
                  src="/images/master-course-banner-1.png" 
                  alt="Shankara Master Course" 
                  className="w-full h-auto rounded-[2rem] border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM HIGHLIGHTS */}
        <section className="py-24 bg-black/20 backdrop-blur-sm border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                What You Will <span className="text-gold-gradient font-bold">Master</span>
              </h2>
              <p className="text-lg text-white/60">
                This isn't just a course on how to read cards. It's a deep dive into consciousness, energy work, and the ancient Vedic sciences that underpin the Shankara system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Deep Card Knowledge",
                  desc: "Go beyond the keywords. Learn the esoteric meanings, astrological connections, and hidden symbolism of all 300+ cards."
                },
                {
                  icon: Users,
                  title: "Reading for Others",
                  desc: "Learn the protocols, ethics, and energy management techniques required to hold space and give professional-level readings."
                },
                {
                  icon: Award,
                  title: "Sacred Geometry",
                  desc: "Master the Oracle Board. Understand how the placement of cards on the sacred geometry grid alters and amplifies their meaning."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED MODULES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bold tracking-widest uppercase text-sm">Course Curriculum</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {[
                "Module 1: The Foundations of Shankara & Vedic Wisdom",
                "Module 2: The 4 Decks - Deep Dive & Meanings",
                "Module 3: The Oracle Board & Sacred Geometry",
                "Module 4: The 18 Stones & Shakti's Cube",
                "Module 5: Alchemy & Integration - The Master Spreads",
                "Module 6: Professional Practice - Ethics & Business"
              ].map((module, i) => (
                <div key={i} className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-accent font-bold font-serif text-xl border border-white/10">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{module}</h3>
                    <p className="text-white/60 text-sm">
                      Video lessons • Audio meditations • PDF workbooks
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
             <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                 <div className="absolute -inset-4 bg-accent/20 blur-xl rounded-full" />
                 <img src="/images/paul-teaching.webp" alt="Paul Teaching" className="relative rounded-2xl shadow-2xl border border-white/10" />
               </div>
               <div className="space-y-8">
                 <div className="text-4xl text-accent font-serif">"</div>
                 <h3 className="text-3xl font-light text-white leading-relaxed">
                   I have taken many courses, but this one is different. It didn't just teach me a system; it connected me to my own soul. Paul's teaching style is electrifying and deeply compassionate.
                 </h3>
                 <div>
                   <p className="text-white font-bold text-lg">Rebecca M.</p>
                   <p className="text-white/50">Certified Shankara Master</p>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Begin?</span>
            </h2>
            <p className="text-2xl text-white/70 max-w-2xl mx-auto mb-12">
              Join thousands of students worldwide and start your journey with the Shankara Master Course today.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-16 py-8 text-2xl rounded-full shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_100px_rgba(255,255,255,0.4)] transition-all duration-300">
              Get Instant Access - $197
            </Button>
            <p className="mt-6 text-white/40 text-sm">Secure Checkout • Instant Digital Delivery</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
