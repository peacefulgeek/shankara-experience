import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Sparkles, Zap, Star, User, Unlock, Heart, Crown, Eye, Flame, BookOpen, Users, Key, Infinity, Sun, Moon, Compass } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="About The Shankara Experience" 
        description="Discover the sacred origins of The Shankara Oracle, born from 30+ years of devotion to Amma and the ancient wisdom traditions of India."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      {/* Hero Section - More Divine */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Ethereal Glow Effects */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-pulse">
            ✦ A Sacred Transmission ✦
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 drop-shadow-[0_2px_20px_rgba(255,0,255,0.4)]">
            The Story of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-accent">
              Shankara
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-3xl mx-auto font-light leading-relaxed">
            Born from devotion. Channeled through grace. <br className="hidden md:block" />
            Offered to awaken the divine within you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-5xl space-y-32 text-lg text-white/80 leading-relaxed">
          
          {/* Divine Transmission Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <Sparkles className="w-12 h-12 text-accent mx-auto animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 drop-shadow-lg">A Portal to the Infinite</h2>
            <p className="text-xl text-purple-200/90 leading-relaxed">
              The Shankara Oracle was born from a vision to open a divine portal to the infinite wisdom of The Universe—guiding seekers to embody virtue, gain clarity, and walk the path of self-mastery.
            </p>
            <p className="mt-6 text-xl text-purple-200/90 leading-relaxed">
              This is not merely a set of cards. It is a <span className="text-accent font-semibold">living technology of consciousness</span>—a sacred mirror reflecting the deepest truths of your soul, channeled through decades of devotion and spiritual practice.
            </p>
          </div>

          {/* Meet the Creator Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <img 
                src="https://shankara-pull.b-cdn.net/images/paul-2.webp" 
                alt="Paul Wagner (Krishna Kalesh)" 
                className="relative rounded-2xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-lg">
                Meet the Creator
              </h3>
              <p className="text-lg text-purple-200/90 leading-relaxed">
                <span className="text-white font-semibold">Paul Wagner</span>, also known as <span className="text-accent font-semibold">Krishna Kalesh</span>, has spent over three decades immersed in the sacred traditions of India. As a devoted student of <span className="text-white font-semibold">Amma (Mata Amritanandamayi)</span> for more than 30 years, he has received profound transmissions of love, wisdom, and healing.
              </p>
              <p className="text-lg text-purple-200/90 leading-relaxed">
                His journey has taken him to ashrams, temples, and sacred sites across the world, studying with enlightened masters and absorbing the essence of Advaita Vedanta, Tantra, and the mystical heart of India's spiritual heritage.
              </p>
              <div className="pt-4 border-l-4 border-accent/50 pl-6">
                <p className="text-xl italic text-white/90 leading-relaxed">
                  "Shankara is my heart's offering to your awakening. It is designed to mirror your soul's journey and provide the precise guidance you need in every moment."
                </p>
                <p className="mt-4 text-accent font-medium">— Krishna Kalesh</p>
              </div>
            </div>
          </div>

          {/* Paul with Amma Section - NEW */}
          <div className="relative py-16">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-purple-900/30 rounded-3xl" />
            
            <div className="relative z-10 text-center mb-12">
              <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
                ✦ Blessed by the Divine Mother ✦
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-lg">
                30+ Years of Devotion to Amma
              </h2>
              <p className="mt-4 text-lg text-purple-200/80 max-w-2xl mx-auto">
                The Shankara Oracle carries the blessings of Amma—the hugging saint who has embraced over 40 million people worldwide, transmitting unconditional love and awakening hearts to their divine nature.
              </p>
            </div>
            
            {/* Two Photos Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/paul-amma-hug-1.webp" 
                  alt="Paul receiving Amma's embrace" 
                  className="relative rounded-2xl shadow-2xl border border-white/20 w-full aspect-square object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-600/30 to-pink-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="https://shankara-pull.b-cdn.net/images/paul-amma-hug-2.webp" 
                  alt="Paul in Amma's loving embrace" 
                  className="relative rounded-2xl shadow-2xl border border-white/20 w-full aspect-square object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            
            <p className="text-center mt-8 text-purple-200/70 italic max-w-2xl mx-auto">
              "In Amma's embrace, I found the source of all wisdom. The Shankara Oracle is a vessel for that same unconditional love—a bridge between the human heart and the infinite."
            </p>
          </div>

          {/* ELEGANT 6 PILLARS SECTION */}
          <div className="py-16 relative">
             {/* Ambient Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

             <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4 drop-shadow-lg relative z-10">
                What You Will Master
             </h2>
             <p className="text-center text-purple-200/70 mb-16 max-w-2xl mx-auto relative z-10 font-light text-xl">
                The Shankara system is a complete pathway to spiritual sovereignty.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {[
                  { icon: Crown, title: "Awaken Inner Master", desc: "Connect with your inner wisdom and release what no longer serves you." },
                  { icon: Eye, title: "Unlock Intuition", desc: "Replace triggers with profound insight and move beyond limited identity." },
                  { icon: Flame, title: "Become an Alchemist", desc: "Discover transformative alchemy principles that turn challenges into opportunities." },
                  { icon: BookOpen, title: "Ancient Wisdom", desc: "Dive into pure teachings about Karma, Dharma, and astrology basics." },
                  { icon: Users, title: "Serve Humanity", desc: "Enhance your abilities to offer new perspectives and guide others toward healing." },
                  { icon: Key, title: "Lead Rituals", desc: "Uncover the role of rituals and how they can serve you on your path." }
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-black/20 backdrop-blur-sm">
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 border border-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-6 p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all duration-500">
                        <item.icon className="w-8 h-8 text-purple-200 group-hover:text-white transition-colors duration-500" />
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-purple-200/70 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Core Philosophy & Mission Section - NEW */}
          <div className="relative py-20">
            {/* Sacred Geometry Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white rounded-full" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                  <Sun className="w-6 h-6 text-accent" />
                  <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">Our Sacred Mission</span>
                  <Moon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-lg">
                  Core Philosophy
                </h2>
              </div>
              
              <div className="space-y-12">
                {/* Philosophy Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-panel p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-purple-900/40 to-black/40">
                    <Infinity className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-4">You Are Already Whole</h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      We believe that enlightenment is not something to be achieved—it is your natural state, temporarily obscured by conditioning. The Shankara Oracle does not give you answers from outside; it reveals the wisdom that already lives within you.
                    </p>
                  </div>
                  
                  <div className="glass-panel p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-purple-900/40 to-black/40">
                    <Heart className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Love Is the Ultimate Truth</h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      At the heart of all spiritual traditions lies one truth: unconditional love. Every card, every stone, every aspect of this system is infused with the intention to return you to love—love for yourself, for others, and for the divine mystery of existence.
                    </p>
                  </div>
                  
                  <div className="glass-panel p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-purple-900/40 to-black/40">
                    <Compass className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Your Path Is Unique</h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      There is no one-size-fits-all approach to awakening. The Shankara Oracle honors your individual journey, meeting you exactly where you are and guiding you toward your own unique expression of truth, purpose, and liberation.
                    </p>
                  </div>
                  
                  <div className="glass-panel p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-purple-900/40 to-black/40">
                    <Zap className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Transformation Through Grace</h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      While effort has its place, the deepest transformations happen through grace—through surrender to something greater than the ego. This oracle is a conduit for that grace, opening doorways that the mind alone cannot access.
                    </p>
                  </div>
                </div>
                
                {/* Mission Statement */}
                <div className="text-center pt-8">
                  <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-purple-900/30 border border-accent/30">
                    <p className="text-2xl md:text-3xl font-display text-white leading-relaxed max-w-3xl">
                      "Our mission is to empower every soul to <span className="text-accent">remember their divinity</span>, heal their deepest wounds, and step fully into their sacred purpose."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Meaning of Shankara Section */}
          <div className="relative py-16">
            {/* Ethereal Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent rounded-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">
                  ॐ The Sacred Name ॐ
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-lg">
                  The Meaning of "Shankara"
                </h2>
              </div>
              
              <div className="glass-panel p-10 md:p-12 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md">
                <div className="space-y-6 text-lg text-purple-200/90 leading-relaxed">
                  <p>
                    <span className="text-3xl font-display text-accent float-left mr-3 mt-1">श</span>
                    <span className="text-white font-semibold">"Shankara"</span> (शंकर) is one of the most sacred names in the Hindu tradition, a name of Lord Shiva himself—the cosmic transformer, the destroyer of illusion, and the supreme consciousness that pervades all existence.
                  </p>
                  
                  <p>
                    The name is composed of two Sanskrit roots: <span className="text-accent font-semibold">"Sham"</span> meaning auspiciousness, peace, and bliss, and <span className="text-accent font-semibold">"Kara"</span> meaning the one who creates or bestows. Together, Shankara translates as <span className="text-white font-semibold italic">"The Bestower of Bliss"</span> or <span className="text-white font-semibold italic">"The Giver of Supreme Joy."</span>
                  </p>
                  
                  <p>
                    But Shankara is more than a name—it is a vibration, a frequency of transformation. Just as Lord Shiva dissolves the old to make way for the new, the Shankara Oracle dissolves the veils of illusion that keep you from seeing your true nature. It burns away karma, clears ancestral patterns, and reveals the radiant being you have always been.
                  </p>
                  
                  <div className="border-l-4 border-accent pl-6 my-8">
                    <p className="text-xl italic text-white/90">
                      When you work with this oracle, you invoke the energy of Shankara—the transformative power of truth and the boundless joy that arises when you align with your dharma, your sacred life purpose.
                    </p>
                  </div>
                  
                  <p>
                    This is why we call it <span className="text-white font-semibold">The Shankara Experience</span>—because it is not merely a reading or a tool. It is an experience of your own divinity, a remembrance of who you truly are beneath all the stories, all the pain, all the forgetting. It is an invitation to come home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Begin Your Sacred Journey
            </h2>
            <p className="text-xl text-purple-200/80 mb-10 max-w-2xl mx-auto">
              Whether you seek clarity, healing, or a deeper connection to your soul's purpose, the Shankara Oracle awaits you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/shop">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-10 h-14 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)] transition-all">
                  Get the Oracle
                </Button>
              </Link>
              <Link href="/master-training">
                <Button variant="outline" size="lg" className="border-purple-500/50 text-purple-200 hover:bg-purple-900/50 px-10 h-14 text-lg rounded-full backdrop-blur-sm hover:text-white transition-all">
                  Explore the Training
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
