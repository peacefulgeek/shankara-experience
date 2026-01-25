import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const testimonials = [
  {
    name: "Rebecca M.",
    role: "Certified Shankara Master",
    text: "I have taken many courses, but this one is different. It didn't just teach me a system; it connected me to my own soul. Paul's teaching style is electrifying and deeply compassionate."
  },
  {
    name: "Sarah J.",
    role: "Therapist",
    text: "The Shankara Oracle has become an indispensable tool in my practice. It allows me to get to the root of my clients' issues with incredible speed and accuracy."
  },
  {
    name: "Michael T.",
    role: "Spiritual Seeker",
    text: "I was skeptical at first, but the accuracy of the readings blew me away. The Shankara system is truly a gift to humanity."
  },
  {
    name: "Elena R.",
    role: "Yoga Teacher",
    text: "The imagery of the cards is so potent. Just looking at them shifts my energy. I use them daily for my own guidance and grounding."
  },
  {
    name: "David K.",
    role: "Life Coach",
    text: "The Master Course is worth every penny. It's not just about learning a divination tool; it's a complete spiritual education."
  },
  {
    name: "Jennifer L.",
    role: "Artist",
    text: "The sacred geometry of the board is fascinating. I feel a deep connection to the ancient wisdom encoded in this system."
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-cosmic-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium uppercase tracking-widest mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Stories of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Transformation
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 text-accent/20 w-16 h-16" />
            
            {/* Stars */}
            <div className="flex gap-1 mb-6 text-[#ffd700]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} fill="currentColor" />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic min-h-[120px]">
              "{current.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-xl">{current.name}</h4>
                <p className="text-accent text-sm uppercase tracking-wider font-bold">
                  {current.role}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrev}
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-accent w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* View all link */}
          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button
                variant="ghost"
                className="text-purple-300 hover:text-white hover:bg-white/10"
              >
                View All Testimonials →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
