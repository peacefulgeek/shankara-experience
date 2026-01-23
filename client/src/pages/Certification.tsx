import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Video, Calendar, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Certification() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white selection:bg-accent selection:text-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/purple-nebula.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e]/80 via-[#1a0b2e]/60 to-[#1a0b2e]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase">
            Exclusive Mentorship
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Become a Certified <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">
              Shankara Master
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
            A high-touch, private mentorship program with the creator. Master the oracle, build your practice, and gain the official credentials to teach and heal.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 h-14 text-lg rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Apply for Certification - $1,500
          </Button>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
              <img 
                src="/images/ShankaraMasterCourse+Cert.png" 
                alt="Certification Program" 
                className="relative rounded-2xl border border-white/10 shadow-2xl z-10"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold">The Ultimate Commitment to Your Path</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                This is not just a course; it is an initiation. You will work directly with Krishna Kalesh (Paul Wagner) in private sessions to fine-tune your intuition, master the complex layouts of the Shankara Board, and learn how to hold space for deep transformation in others.
              </p>
              
              <div className="grid gap-6">
                {[
                  { icon: Video, title: "Private 1-on-1 Sessions", desc: "Direct mentorship calls with the creator to refine your skills." },
                  { icon: Award, title: "Official Certification", desc: "Receive a signed certificate and the right to practice professionally." },
                  { icon: Users, title: "Directory Listing", desc: "Get listed on our official 'Shankara Readers' page to attract clients." },
                  { icon: Star, title: "Business Guidance", desc: "Learn how to structure your readings and build a spiritual business." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent h-fit">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-gradient-to-br from-[#2a1b3e] to-[#1a0b2e] border-white/10 p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 bg-accent text-black font-bold text-sm uppercase tracking-wider rounded-bl-xl">
              Limited Spaces
            </div>
            
            <div className="text-center mb-10">
              <h3 className="text-3xl font-display font-bold mb-4">Platinum Certification</h3>
              <div className="flex justify-center items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white">$1,500</span>
                <span className="text-white/60">USD</span>
              </div>
              <p className="text-white/70">The complete professional pathway.</p>
            </div>

            <ul className="space-y-4 mb-10 max-w-md mx-auto">
              {[
                "Everything in the Master Course ($197 value)",
                "3 x 60-min Private Mentorship Calls",
                "Personalized feedback on your readings",
                "Exam & Certification Review",
                "Lifetime listing on Shankara Website",
                "Exclusive 'Certified Master' Badge"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full h-14 text-lg bg-accent text-black hover:bg-accent/90 font-bold rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.2)]">
              Enroll in Platinum Certification
            </Button>
            <p className="text-center text-white/40 text-sm mt-4">
              Payment plans available upon request.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
