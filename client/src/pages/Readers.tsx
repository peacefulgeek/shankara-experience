import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Star, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Real data from the Shankara Certified Masters PDF
const readers = [
  {
    name: "Paul Wagner (also Krishna Kalesh)",
    location: "Global",
    specialty: "Creator of The Shankara Oracle",
    image: "/images/paul-2.png", 
    bio: "Welcome! I am Paul Wagner, also known as Krishna Kalesh. I channeled and created The Shankara Oracle over 10 years – my heart’s offering to your awakening. Born from decades of mystical practice, psychic intuition, and profound love for the human spirit, this profound Oracle is a map to your soul’s liberation. Every card is a living transmission – encoded with insights from the sages, truths from ancient lineages, and the wild breath of the Divine. My readings will not coddle you – they’ll embrace you and walk you into the most empowered version of yourself. I created Shankara for seekers, visionaries, lovers, and those ready to shatter illusions and remember who they truly are. This divine tool will not worship your ego – it’s raw, real, and radiant with fire and grace. It will challenge you, change you – adore you – and show you the mirrors you’ve been avoiding. If you’re craving clarity, truth, and connection to your deeper Self, you’ve found the sacred tool. And my readings will give you great confidence to finally heal and transform your life.",
    website: "https://paulwagner.com",
    contactType: "website"
  },
  {
    name: "Ana Andreea Guidance",
    location: "Bilingual (English/Romanian)",
    specialty: "Content Director & Business Partner",
    image: "/images/readers/ana-andreea.jpg", 
    bio: "Ana Andrea Guidance is a warm, deeply intuitive spiritual guide. She is also the content director and business partner for Shankara. Ana’s readings offer profound healing, touching clients’ hearts deeply. With exceptional intuition and compassion, Ana stands out, connecting personally with those she guides. Her sessions provide a peaceful sanctuary, uplifting and aligning individuals with their paths. Ana’s work showcases the transformative power of empathy and intuition. (Ana Andrea Guidance este un ghid spiritual cald și profund intuitiv. Lecturile sale oferă vindecare profundă, atingând profund inimile clienților. Cu intuiție excepțională și compasiune, Ana se distinge, conectându-se personal cu cei pe care îi ghidează.)",
    website: "https://anaguidance.com",
    contactType: "website"
  },
  {
    name: "Suzanne D. McMurray",
    location: "Medicine Woman & Crone",
    specialty: "Holistic Healing & Reiki",
    image: "/images/readers/unknown1.jpg", 
    bio: "Suzanne DeGraw McMurray, a revered Medicine Woman and Crone, is devoted to guiding individuals on their journey to uncover the radiant light that resides within them. As a spiritual healer, teacher, and protector, she combines her extensive knowledge of essential oils, herbalism, and flower essences with the transformative practices of divine channeling, the Shankara Oracle, and Reiki. Suzanne’s holistic approach ensures a personalized experience for each person, fostering deep healing and empowerment. With ongoing training as a reiki master/sensei and as a Shankara Master, Suzanne stands as a beacon of wisdom in her community, committed to assisting others in awakening their inner brilliance and embracing their unique paths.",
    website: "https://suzannemcmurray.com", 
    contactType: "website"
  },
  {
    name: "Paula Londono",
    location: "Bilingual (English/Spanish)",
    specialty: "Empowerment & Cultural Bridging",
    image: "/images/stones.png", 
    bio: "Paula Londoño is a standout bilingual Shankara master, known for her life-changing Shankara Oracle readings. Her ability to empower clients and bridge cultures in both English and Spanish has made her services transformative. Recognized for her profound impact, Paula is a guiding light for those seeking healing and spiritual growth. (Paula Londoño es una destacada maestra bilingüe de Shankara, conocida por sus lecturas transformadoras del Oráculo Shankara. Su habilidad para empoderar a los clientes y unir culturas tanto en inglés como en español ha hecho que sus servicios sean transformadores.)",
    website: "mailto:paula@example.com", 
    contactType: "email"
  },
  {
    name: "Christina Jackson",
    location: "Intuitive Healer",
    specialty: "Deep Intuitive Readings",
    image: "/images/stones.png", 
    bio: "Christina is the essence of a deep and radiant soul, delivering profound and deeply intuitive readings that not only facilitate healing but also invite you on an exploratory voyage into the boundless potentials awaiting your path. She is lovely and compassionate with all the academic degrees to back it up.",
    website: "mailto:christina@example.com", 
    contactType: "email"
  }
];

export default function Readers() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Certified Shankara Readers" 
        description="Connect with a certified Shankara Master for a personal reading. Gain clarity, healing, and guidance on your life path."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm">
          Official Directory
        </Badge>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          The Certified <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">
            Shankara Masters
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
          Elevate Your Intuitive Abilities | Discover the Pathways to Self-Mastery | Immerse Yourself in Divine Wisdom
          <br /><br />
          Each Shankara Master below completed The Shankara Course & Certification Program – an immersive course of study, with in-depth homework, 100+ videos & 10 live certification sessions with The Shankara Oracle’s creator, Krishna Kalesh, a mystic and spiritual guide for over 30 years.
        </p>
      </section>

      {/* Directory Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readers.map((reader, i) => (
              <Card key={i} className="bg-white/5 border-white/20 overflow-hidden hover:border-accent/50 transition-all duration-300 group flex flex-col backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={reader.image} 
                    alt={reader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-bold font-display text-white drop-shadow-lg">{reader.name}</h3>
                    <div className="flex items-center gap-2 text-accent text-sm font-medium mt-1 drop-shadow-md">
                      <Star size={14} fill="currentColor" />
                      <span>Certified Master</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin size={16} className="text-accent" />
                    <span>{reader.location}</span>
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Specialty</span>
                    <p className="text-white font-medium">{reader.specialty}</p>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed flex-grow whitespace-pre-wrap">
                    "{reader.bio}"
                  </p>
                  
                  <a href={reader.website} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-accent hover:text-black group-hover:border-accent group-hover:text-accent transition-colors font-bold">
                      {reader.contactType === 'email' ? <Mail size={16} className="mr-2" /> : <Globe size={16} className="mr-2" />}
                      {reader.contactType === 'email' ? 'Contact via Email' : 'Visit Website'}
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-purple-900/30 rounded-2xl p-10 border border-accent/20 backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <h3 className="text-2xl font-bold mb-4 text-white">Become a Certified Master</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              This program is designed specifically for those who wish to become illuminated teachers & healers in service to humanity using The Shankara Oracle.
            </p>
            <a href="/certification">
              <Button className="bg-accent text-black hover:bg-accent/90 font-bold h-12 px-8 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
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
