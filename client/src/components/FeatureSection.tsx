import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-12">
          
          {/* Text Content - Centered Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-accent tracking-wider uppercase">Group Certification</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight drop-shadow-lg">
              The Shankara <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300 drop-shadow-sm">
                Master Course
              </span>
            </h2>
            
            <p className="text-xl text-white/90 font-medium leading-relaxed drop-shadow-md max-w-2xl mx-auto">
              Join the next cohort. A comprehensive group certification program to master the oracle, develop your intuition, and become a certified reader.
            </p>
          </div>

          {/* Wide Image Container */}
          <div className="relative w-full max-w-5xl mx-auto animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-purple-600/30 rounded-3xl blur-[80px] -z-10" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_60px_rgba(212,175,55,0.2)] group">
              <img 
                src="/images/ShankaraMasterCourse+Cert.png" 
                alt="Shankara Master Course + Group Certification" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto w-full bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
             <ul className="space-y-3">
              {[
                "Live group coaching sessions",
                "Deep dive into the 300+ card meanings",
                "Master the Sacred Geometry Board layouts",
                "Official Shankara Master Certification"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium drop-shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-end">
              <div className="text-center md:text-right">
                <span className="block text-3xl font-bold text-white drop-shadow-lg">Launches Jan</span>
                <span className="text-sm text-gray-200 font-medium uppercase tracking-wide">Next Cohort</span>
              </div>
              <Link href="/master-training">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 h-14 text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto font-bold">
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
