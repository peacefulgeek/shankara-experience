import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Star, Award, BookOpen, Users, Calendar, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Certification() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Shankara Master Course & Certification" 
        description="Elevate Your Intuitive Abilities | Discover the Pathways to Self-Mastery | Immerse Yourself in Divine Wisdom"
      />
      
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm">
              The Shankara Master Course and Certification Program
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Inner Wisdom</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Elevate Your Intuitive Abilities | Discover the Pathways to Self-Mastery | Immerse Yourself in Divine Wisdom
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-16 text-xl rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                Purchase Master Course ($397)
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-10 h-16 text-xl rounded-full font-bold">
                Get Certified ($1500)
              </Button>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Unlock Your Soul's Potential</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                The Shankara Master Course will help you release what no longer serves you to unlock your intuitive knowing. Inspire transformation in your Self, your life, and those of others. Resolve karmic ties and live in alignment with your higher purpose. Explore the ancient teachings to uplift your life. Navigate life’s challenges with confidence. Deliver the most illuminating intuitive & psychic readings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 pt-8 text-left">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-accent mb-4">Designed to Support You To:</h3>
                  <ul className="space-y-3">
                    {["Gain a Deeper Understanding of Self and Others to Serve Humanity", 
                      "Master Every Aspect of Life As a Spiritual Warrior", 
                      "Create Momentum to Overcome Challenges & Embrace Empowerment",
                      "Build a Strong Foundation with Spiritual Practices",
                      "Transcend Hype & Embrace Ancient Teachings for True Expansion",
                      "Embark on a Journey to Healing and Self-Mastery"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-accent mb-4">This Program is Designed For:</h3>
                  <ul className="space-y-3">
                    {[
                      { title: "Seekers of Self-Mastery", desc: "Understand your true Self and unlock your highest potential." },
                      { title: "Spiritually Aware (& Curious) Individuals", desc: "Discover a rich tapestry of ancient wisdom + practices." },
                      { title: "Intuitives & Healers", desc: "Enhance your abilities to offer new perspectives when helping others." },
                      { title: "Aspiring Light Workers", desc: "Be a source of light, guidance, and abundance for others." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <Star className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white block">{item.title}</span>
                          {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEET YOUR GUIDE */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center bg-purple-900/20 p-10 rounded-3xl border border-white/10">
              <div className="w-full md:w-1/3">
                <img src="/images/paul-2.png" alt="Krishna Kalesh" className="rounded-2xl shadow-2xl w-full" />
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl font-bold text-white">Meet Your Guide, Krishna Kalesh (Paul Wagner)</h2>
                <p className="text-white/80 leading-relaxed">
                  As a compassionate spiritual mentor, personal guide, clairvoyant, empath, and mystic, Krishna Kalesh has guided thousands of seekers for over 30 years, helping them navigate challenges on their path to Self-mastery. Drawing wisdom from ancient teachings and enlightened masters, Kalesh’s guidance empowers spiritually-minded individuals to connect with their inner Selves, transcend circumstances, and find liberation in every moment.
                </p>
                <Link href="/readers">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
                    Meet the Certified Shankara Masters
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* COURSE MODULES */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Become A Transformational Force <br /> Drenched In Light & Love</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Awaken Your Inner Master", desc: "Connect with your inner wisdom. Release what no longer serves you to unlock your intuitive knowing." },
                { title: "Unlock Your Intuition", desc: "Discover transformative alchemy principles that turn challenges into opportunities." },
                { title: "Become a Mighty Alchemist", desc: "Sacred practices & principles to deepen your Self-awareness." },
                { title: "Embrace Dharmic Living", desc: "Dive into pure teachings about Karma and Dharma." },
                { title: "Vedic Astrology & Numerology Basics", desc: "Discover how astrology & numerology can truly serve you on your path." },
                { title: "Developing Your Spiritual Practices", desc: "Discover the spiritual practices that help you heal, transform, and illuminate your gifts." },
                { title: "The Healing Power of Divination", desc: "Explore how divination can truly assist you in creating the life you seek." },
                { title: "Engage Beautiful, Life-Changing Rituals", desc: "Uncover the role of rituals and how they can serve you on your path." },
                { title: "Lead Shankara Sessions", desc: "A how-to guide for the most transformative Shankara sessions & all types of intuitive reading sessions." }
              ].map((mod, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-3 uppercase">{mod.title}</h3>
                  <p className="text-white/70 text-sm">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING - MASTER COURSE */}
        <section className="py-20 bg-gradient-to-b from-purple-900/40 to-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-black/60 p-10 rounded-3xl border border-accent/30 shadow-[0_0_60px_rgba(168,85,247,0.3)]">
              <h2 className="text-3xl font-bold text-white mb-2">The Shankara Master Course Includes:</h2>
              <div className="text-lg text-white/80 mb-8 space-y-2">
                <p>100 pre-recorded video lessons (a $2,000 value)</p>
                <p>Worksheets & resources for your spiritual journey (a $500 value)</p>
                <p className="text-accent font-bold">PLUS: Transformational Training Manual (Ebook)</p>
              </div>
              
              <div className="mb-8">
                <p className="text-sm text-white/60 uppercase tracking-widest mb-2">Total Value: $2,500+</p>
                <p className="text-5xl font-bold text-white mb-2">$397</p>
                <p className="text-accent text-sm">Save more than $2,200 in value</p>
              </div>
              
              <Button size="lg" className="w-full md:w-auto px-12 py-6 text-xl bg-white text-primary hover:bg-gray-100 font-bold rounded-full">
                Purchase Master Course Now
              </Button>
            </div>
          </div>
        </section>

        {/* CERTIFICATION UPGRADE */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block p-4 rounded-full bg-accent/20 border border-accent mb-4">
                <Award className="w-12 h-12 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Go Further – Get Certified As A Shankara Master</h2>
              <p className="text-xl text-white/90">
                Help Others Heal Deeply & Unlock Their Potential. Work directly with Shri Krishna Kalesh in private sessions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto py-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-accent">The Individual Certification Includes:</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex gap-2"><Check className="w-5 h-5 text-accent" /> Three (3) live, private sessions with Shri Krishna Kalesh</li>
                    <li className="flex gap-2"><Check className="w-5 h-5 text-accent" /> Access to Krishna Kalesh via Skype/email</li>
                    <li className="flex gap-2"><Check className="w-5 h-5 text-accent" /> Phenomenal ebook and worksheets</li>
                    <li className="flex gap-2"><Check className="w-5 h-5 text-accent" /> Featured on Shankara website as Certified Master</li>
                  </ul>
                </div>
                <div className="bg-black/40 p-6 rounded-xl border border-white/20 text-center flex flex-col justify-center">
                  <p className="text-sm text-white/60 uppercase mb-2">A $4,000 Value!</p>
                  <p className="text-4xl font-bold text-white mb-6">$1,500</p>
                  <Button className="w-full bg-accent text-black hover:bg-accent/90 font-bold">
                    Register for Certification
                  </Button>
                  <p className="text-xs text-white/50 mt-4">Limited spots available each quarter.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Will there be lifetime access to the course videos?", a: "The course videos will be available with indefinite access, subject to our Terms & Conditions." },
                { q: "Do I need to purchase the Shankara Oracle separately?", a: "Yes. The Shankara Oracle will need to be purchased separately. If you don’t have a Shankara Oracle, you will receive a special discount when you purchase the course." },
                { q: "I am new to intuitive practices – will I benefit?", a: "Absolutely. You don’t need to have specific knowledge to benefit from this course. Each person will benefit differently depending on their unique journey." },
                { q: "I am a healer with significant experience – is this for me?", a: "Yes – Shri Krishna is a highly experienced spiritual teacher. His teachings help people at all levels, including experienced healers." },
                { q: "Will there be a time limit to complete the course?", a: "The course is Self-paced. For those who have chosen Certification, you must complete the course within the 12 week time period." }
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-accent" /> {faq.q}
                  </h3>
                  <p className="text-white/70 pl-7">{faq.a}</p>
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
