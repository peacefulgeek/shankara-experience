import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-accent tracking-wider uppercase">Online Training</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              The Shankara <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                Master Course
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              The most immersive and comprehensive course on becoming an illuminating intuitive reader & healer. Work directly with the creator's teachings to master the oracle.
            </p>
            
            <ul className="space-y-4">
              {[
                "Deep dive into the 300+ card meanings",
                "Master the Sacred Geometry Board layouts",
                "Learn to channel guidance for others",
                "Become a confident, intuitive reader"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex flex-col sm:flex-row gap-6 items-center">
              <Link href="/master-training">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 h-14 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                  Start Learning Now
                </Button>
              </Link>
              <div className="text-left">
                <span className="block text-2xl font-bold text-white">$197</span>
                <span className="text-sm text-gray-400">Lifetime Access</span>
              </div>
            </div>
          </div>

          {/* Image Content - Master Course Banner */}
          <div className="relative animate-fade-in-right delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-purple-600/30 rounded-3xl blur-[60px] -z-10" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10" />
              <img 
                src="/images/master-course-banner-2.png" 
                alt="The Shankara Master Course" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-white font-medium text-sm italic">
                    "5 STARS! Outstanding! MUCH needed!"
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
