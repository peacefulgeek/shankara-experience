import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Play, Lock, BookOpen, Users, Lightbulb, Zap, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function MasterTraining() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Shankara Master Training | Unlock Your Inner Wisdom" 
        description="A comprehensive 8-module course to master The Shankara Oracle, awaken your intuition, and serve humanity."
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-[-1]">
        {/* Light Cosmic Background handled by global index.css body style */}
      </div>

      <Navigation />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-purple-300 text-purple-700 px-4 py-1 text-sm tracking-widest uppercase bg-white/50 backdrop-blur-sm">
              The Master Course
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-purple-900 mb-6 leading-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">
                Inner Wisdom
              </span>
            </h1>
            <p className="text-xl text-purple-800/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              Elevate your intuitive abilities, discover the pathways to self-mastery, and immerse yourself in divine wisdom.
              <br className="hidden md:block" />
              A complete system to sharpen your clairsentience and live in alignment with your higher purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-purple-900 hover:bg-accent/90 px-8 py-6 text-lg rounded-full font-bold shadow-lg shadow-yellow-200">
                Enroll Now for $397
              </Button>
              <Link href="/certification">
                <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-white/50 px-8 py-6 text-lg rounded-full backdrop-blur-sm">
                  View Certification
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* COURSE MODULES GRID */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-purple-900 mb-16">
              What You Will Master
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8 text-accent" />,
                  title: "Awaken Inner Master",
                  desc: "Connect with your inner wisdom and release what no longer serves you."
                },
                {
                  icon: <Zap className="w-8 h-8 text-accent" />,
                  title: "Unlock Intuition",
                  desc: "Replace triggers with profound insight and move beyond limited identity."
                },
                {
                  icon: <Lightbulb className="w-8 h-8 text-accent" />,
                  title: "Become an Alchemist",
                  desc: "Discover transformative alchemy principles that turn challenges into opportunities."
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-accent" />,
                  title: "Ancient Wisdom",
                  desc: "Dive into pure teachings about Karma, Dharma, and Vedic Astrology basics."
                },
                {
                  icon: <Users className="w-8 h-8 text-accent" />,
                  title: "Serve Humanity",
                  desc: "Enhance your abilities to offer new perspectives and guide others toward healing."
                },
                {
                  icon: <Lock className="w-8 h-8 text-accent" />,
                  title: "Lead Rituals",
                  desc: "Uncover the role of rituals and how they can serve you on your path."
                }
              ].map((module, i) => (
                <div key={i} className="bg-white/60 border border-white/50 p-8 rounded-2xl hover:bg-white/80 transition-colors group shadow-sm hover:shadow-md">
                  <div className="mb-6 bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">{module.title}</h3>
                  <p className="text-purple-800/70 leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE STACK */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900 to-indigo-900 border border-white/20 rounded-3xl p-8 md:p-12 relative text-white shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Sparkles className="w-32 h-32 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Total Course Value: <span className="line-through text-white/50">$2,500+</span></h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                  <div className="bg-accent/20 p-2 rounded-full"><Play className="w-5 h-5 text-accent" /></div>
                  <div>
                    <h4 className="text-white font-bold">100 Pre-recorded Video Lessons</h4>
                    <p className="text-white/60 text-sm">A $2,000 Value</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                  <div className="bg-accent/20 p-2 rounded-full"><BookOpen className="w-5 h-5 text-accent" /></div>
                  <div>
                    <h4 className="text-white font-bold">Worksheets & Spiritual Resources</h4>
                    <p className="text-white/60 text-sm">A $500 Value</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-accent/30">
                  <div className="bg-accent/20 p-2 rounded-full"><Star className="w-5 h-5 text-accent" /></div>
                  <div>
                    <h4 className="text-accent font-bold">BONUS: Transformational Training Manual</h4>
                    <p className="text-white/60 text-sm">Exclusive eBook Guide (A $108 Value)</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-white/60 uppercase tracking-widest mb-2">Get Instant Access Today For Only</div>
                <div className="text-6xl font-bold text-white mb-8">$397</div>
                <Button size="lg" className="w-full md:w-auto bg-white text-purple-900 hover:bg-gray-100 px-12 py-8 text-xl rounded-full font-bold shadow-lg">
                  Join The Master Course
                </Button>
                <p className="mt-4 text-white/50 text-sm">Lifetime access • 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* MEET THE GUIDE */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <img src="/images/paul-2.png" alt="Krishna Kalesh" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white">Krishna Kalesh</h3>
                    <p className="text-accent font-bold">Creator of Shankara</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900">Meet Your Guide</h2>
                <p className="text-xl text-purple-800/80 leading-relaxed font-light">
                  As a compassionate spiritual mentor, personal guide, clairvoyant, empath, and mystic, Krishna Kalesh (Paul Wagner) has guided thousands of seekers for over 30 years.
                </p>
                <p className="text-lg text-purple-800/70 leading-relaxed">
                  Drawing wisdom from ancient teachings and enlightened masters, Kalesh’s guidance empowers spiritually-minded individuals to connect with their inner Selves, transcend circumstances, and find liberation in every moment.
                </p>
                <div className="pt-4">
                  <Link href="/readers">
                    <Button variant="link" className="text-purple-600 pl-0 text-lg font-bold hover:text-purple-800">
                      Meet other Certified Masters <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
