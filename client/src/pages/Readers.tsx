import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock data based on the concept - normally would come from a database or CMS
const readers = [
  {
    name: "Sarah Jenkins",
    location: "Los Angeles, CA",
    specialty: "Relationship & Karma Readings",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Certified Shankara Master since 2023. I specialize in helping clients uncover karmic patterns in relationships using the sacred geometry board.",
    website: "https://sarahreadings.com"
  },
  {
    name: "David Chen",
    location: "Online / Zoom",
    specialty: "Career & Dharma Alignment",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Using the Shankara Oracle to clarify your life purpose. My readings focus on practical steps to align your career with your soul's blueprint.",
    website: "https://dharma-david.com"
  },
  {
    name: "Elena Rodriguez",
    location: "Miami, FL",
    specialty: "Shadow Work & Healing",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "Deep dive shadow work sessions. I hold a safe, sacred container for you to explore the hidden parts of yourself through the Oracle.",
    website: "https://elena-healing.com"
  }
];

export default function Readers() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white selection:bg-accent selection:text-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase">
          Community
        </Badge>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
          Find a Certified <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">
            Shankara Reader
          </span>
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
          Connect with our network of certified masters who have been trained directly by the creator to offer profound, life-changing readings.
        </p>
      </section>

      {/* Directory Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readers.map((reader, i) => (
              <Card key={i} className="bg-white/5 border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300 group">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={reader.image} 
                    alt={reader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-bold font-display text-white">{reader.name}</h3>
                    <div className="flex items-center gap-2 text-accent text-sm font-medium mt-1">
                      <Star size={14} fill="currentColor" />
                      <span>Certified Master</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <MapPin size={16} />
                    <span>{reader.location}</span>
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Specialty</span>
                    <p className="text-white font-medium">{reader.specialty}</p>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    "{reader.bio}"
                  </p>
                  
                  <a href={reader.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full mt-4 border-white/20 text-white hover:bg-white hover:text-black group-hover:border-accent group-hover:text-accent">
                      <Globe size={16} className="mr-2" />
                      Visit Website
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-accent/10 rounded-2xl p-10 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Want to be listed here?</h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Complete the Platinum Certification program to join our official directory of trusted readers.
            </p>
            <a href="/certification">
              <Button className="bg-accent text-black hover:bg-accent/90 font-bold">
                Get Certified
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
