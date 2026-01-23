import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-accent tracking-wider uppercase">Group Certification</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight drop-shadow-lg">
              The Shankara <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300 drop-shadow-sm">
                Master Course
              </span>
            </h2>
            
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-md">
              Join the next cohort. A comprehensive group certification program to master the oracle, develop your intuition, and become a certified reader.
            </p>
            
            <ul className="space-y-4">
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

            <div className="pt-6 flex flex-col sm:flex-row gap-6 items-center">
              <Link href="/master-training">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 h-14 text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto font-bold">
                  Join the Waitlist
                </Button>
              </Link>
              <div className="text-left bg-black/30 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
                <span className="block text-3xl font-bold text-white drop-shadow-lg">Launches Jan</span>
                <span className="text-sm text-gray-200 font-medium uppercase tracking-wide">Next Cohort</span>
              </div>
            </div>
          </div>

          {/* Image Content - New Group Certification Image */}
          <div className="relative animate-fade-in-right delay-200 flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-purple-600/30 rounded-3xl blur-[60px] -z-10" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] group max-w-xl w-full">
              <img 
                src="/images/ShankaraMasterCourse+Cert.png" 
                alt="Shankara Master Course + Group Certification" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
