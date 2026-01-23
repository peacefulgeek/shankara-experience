import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Star, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Real data from the Shankara Certified Masters page
const readers = [
  {
    name: "Paul Wagner (Krishna Kalesh)",
    location: "Global",
    specialty: "Creator of The Shankara Oracle",
    image: "/images/paul-2.png", // Using local Paul image
    bio: "I channeled and created The Shankara Oracle over 10 years – my heart's offering to your awakening. My readings will not coddle you – they'll embrace you and walk you into the most empowered version of yourself. Every card is a living transmission – encoded with insights from the sages.",
    website: "https://paulwagner.com",
    contactType: "website"
  },
  {
    name: "Ana Andreea Guidance",
    location: "Bilingual (English/Romanian)",
    specialty: "Deep Healing & Heart Connection",
    image: "/images/170323-Andreea-Plesea-048-scaled.webp", // Using one of the Andreea images from uploads
    bio: "A warm, deeply intuitive spiritual guide. Ana's readings offer profound healing, touching clients' hearts deeply. With exceptional intuition and compassion, Ana stands out, connecting personally with those she guides. Her sessions provide a peaceful sanctuary.",
    website: "https://anaguidance.com",
    contactType: "website"
  },
  {
    name: "Suzanne D. McMurray",
    location: "Medicine Woman & Crone",
    specialty: "Holistic Healing & Reiki",
    image: "/images/stones.png", // Placeholder until we find Suzanne's specific image in uploads
    bio: "A revered Medicine Woman and Crone, devoted to guiding individuals to uncover their radiant light. She combines extensive knowledge of essential oils, herbalism, and flower essences with the transformative practices of divine channeling, the Shankara Oracle, and Reiki.",
    website: "https://suzannemcmurray.com", // Placeholder URL, need to confirm
    contactType: "website"
  },
  {
    name: "Paula Londono",
    location: "Bilingual (English/Spanish)",
    specialty: "Empowerment & Cultural Bridging",
    image: "/images/stones.png", // Placeholder
    bio: "A standout bilingual Shankara master, known for her life-changing readings. Her ability to empower clients and bridge cultures in both English and Spanish has made her services transformative. A guiding light for those seeking healing and spiritual growth.",
    website: "mailto:paula@example.com", // Need real contact info
    contactType: "email"
  },
  {
    name: "Christina Jackson",
    location: "Intuitive Healer",
    specialty: "Deep Intuitive Readings",
    image: "/images/stones.png", // Placeholder
    bio: "The essence of a deep and radiant soul, delivering profound and deeply intuitive readings that not only facilitate healing but also invite you on an exploratory voyage into the boundless potentials awaiting your path. Lovely and compassionate with academic degrees to back it up.",
    website: "mailto:christina@example.com", // Need real contact info
    contactType: "email"
  }
];

export default function Readers() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white selection:bg-accent selection:text-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase">
          Official Directory
        </Badge>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
          The Certified <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">
            Shankara Masters
          </span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Elevate Your Intuitive Abilities | Discover the Pathways to Self-Mastery | Immerse Yourself in Divine Wisdom.
          <br /><br />
          Each Master below has completed The Shankara Course & Certification Program – an immersive course of study with 100+ videos & 10 live certification sessions with the creator, Krishna Kalesh.
        </p>
      </section>

      {/* Directory Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readers.map((reader, i) => (
              <Card key={i} className="bg-white/5 border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300 group flex flex-col">
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
                
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <MapPin size={16} />
                    <span>{reader.location}</span>
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Specialty</span>
                    <p className="text-white font-medium">{reader.specialty}</p>
                  </div>
                  
                  <p className="text-white/70 text-sm leading-relaxed flex-grow">
                    "{reader.bio}"
                  </p>
                  
                  <a href={reader.website} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black group-hover:border-accent group-hover:text-accent">
                      {reader.contactType === 'email' ? <Mail size={16} className="mr-2" /> : <Globe size={16} className="mr-2" />}
                      {reader.contactType === 'email' ? 'Contact via Email' : 'Visit Website'}
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-accent/10 rounded-2xl p-10 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Become a Certified Master</h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              This program is designed specifically for those who wish to become illuminated teachers & healers in service to humanity using The Shankara Oracle.
            </p>
            <a href="/certification">
              <Button className="bg-accent text-black hover:bg-accent/90 font-bold h-12 px-8">
                Explore Certification
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
