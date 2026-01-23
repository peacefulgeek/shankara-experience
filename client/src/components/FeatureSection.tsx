import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  align?: "left" | "right";
  bgImage?: string;
}

const Feature = ({ title, subtitle, description, image, ctaText, ctaLink, align = "left", bgImage }: FeatureProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-40 relative overflow-hidden">
      {/* 
         TRANSPARENT BACKGROUND 
         Removed opaque layers. The global fixed background now shows through.
         Added only subtle texture overlays if specific bgImage is provided.
      */}
      {bgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-20 mix-blend-screen blur-sm" />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-24`}>
          
          {/* Image Side - Glass Frame */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-4 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-[0_0_60px_rgba(139,92,246,0.15)] backdrop-blur-sm">
              <div className="rounded-[2rem] overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </motion.div>

          {/* Text Side - Floating Glass Panel */}
          <motion.div 
            className="flex-1 text-center lg:text-left glass-card p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
            initial={{ opacity: 0, x: align === "left" ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-accent tracking-[0.3em] uppercase text-sm font-bold mb-6 drop-shadow-md">{subtitle}</h3>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-10 leading-tight drop-shadow-lg">{title}</h2>
            <p className="text-white/80 text-xl leading-relaxed mb-12 font-light max-w-xl mx-auto lg:mx-0 drop-shadow-md">
              {description}
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white px-12 py-8 rounded-full text-xl shadow-[0_0_30px_rgba(255,0,255,0.4)] transition-all duration-300 border border-white/20">
              {ctaText}
            </Button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default function FeatureSection() {
  return (
    <section className="relative">
      <Feature 
        title="Heal Deeply & Embrace Ancient Teachings"
        subtitle="The Master Course"
        description="The most immersive and comprehensive course on becoming an illuminating intuitive reader & healer available. Dive deep into the ancient wisdom of Shankara."
        image="/images/master-course-banner-1.png"
        ctaText="Join The Master Course"
        ctaLink="/master-training"
        align="left"
        bgImage="/images/cosmic-bg-1.webp"
      />

      <Feature 
        title="Become a Certified Shankara Master"
        subtitle="Certification Program"
        description="A deep and profound training program. Work directly with Krishna Kalesh (Paul Wagner) to master the oracle, develop your intuitive gifts, and become a certified reader."
        image="/images/paultightgroup.png" 
        ctaText="Apply for Certification"
        ctaLink="/certification"
        align="right"
        bgImage="/images/cosmic-bg-2.webp"
      />

      <Feature 
        title="The Book of Meanings"
        subtitle="In-Depth Guide"
        description="The complete guide to the Shankara Sacred Stones, Shakti's Cube, planets, stars, creatures, archangels, deities, and more found on the board."
        image="/images/ebook-cover.png"
        ctaText="Get the E-Book"
        ctaLink="/shop"
        align="left"
        bgImage="/images/cosmic-smoke.jpg"
      />
    </section>
  );
}
