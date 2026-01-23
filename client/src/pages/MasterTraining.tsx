import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Play, BookOpen, Users, Star } from "lucide-react";
import SEO from "@/components/SEO";

export default function MasterTraining() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Master Training Course" 
        description="Deep dive into the Shankara Oracle system with our comprehensive video training course."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm">
                  Online Video Course
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-display font-light text-white leading-[1.1] mb-8 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
                  Master the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 font-bold">
                    Shankara Oracle
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed mb-10 drop-shadow-md">
                  A comprehensive journey into the heart of the system. Learn the meanings, the layouts, and the intuition techniques directly from the creator.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 h-14 text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all font-bold">
                    Enroll Now - $197
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-8 h-14 text-lg rounded-full font-bold transition-all">
                    Watch Free Preview
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/20 blur-xl rounded-2xl group-hover:bg-accent/30 transition-all duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/images/master-course-banner-1.png" 
                    alt="Master Course Preview" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors cursor-pointer">
                    <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="py-24 bg-purple-900/20 backdrop-blur-md border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-bold text-white mb-6">What You Will Learn</h2>
              <p className="text-white/70 text-lg">
                Over 10 hours of high-definition video content, broken down into easy-to-digest modules.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "The 4 Decks",
                  desc: "Deep dive into the symbolism and meaning of every card in the Alchemy, Tantra, Shakti, and Shiva decks."
                },
                {
                  icon: Star,
                  title: "Sacred Geometry",
                  desc: "Understand the layout of the Oracle Board and how to navigate the cosmic grid."
                },
                {
                  icon: Users,
                  title: "Reading for Others",
                  desc: "Learn ethical guidelines, how to hold space, and how to deliver powerful, transformative readings."
                }
              ].map((module, i) => (
                <div key={i} className="glass-panel p-8 rounded-2xl border border-white/10 hover:bg-white/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <module.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                  <p className="text-white/70 leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-panel p-12 rounded-3xl border border-white/10 backdrop-blur-md max-w-4xl mx-auto text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-black p-4 rounded-full shadow-lg">
                <Star className="w-8 h-8 fill-current" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-display font-light text-white leading-relaxed mb-8 mt-4">
                "This course changed everything for me. It wasn't just about learning a system; it was a deep initiation into my own intuition. Paul is a master teacher."
              </blockquote>
              
              <div className="font-bold text-accent uppercase tracking-wider">
                — Sarah Jenkins, Certified Master
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 drop-shadow-[0_0_20px_rgba(255,0,255,0.3)]">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Master</span> the Oracle?
            </h2>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 font-bold">
              Enroll in the Master Course
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
