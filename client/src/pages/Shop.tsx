import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingBag, Star } from "lucide-react";
import SEO from "@/components/SEO";

const products = [
  {
    id: "oracle-system",
    name: "The Shankara Oracle System",
    price: 99,
    originalPrice: 300,
    image: "/images/shankara-oracle-intimate-less-height.png", // Updated to real image
    tag: "Best Seller",
    description: "The complete 4-deck system with board, stones, cube, and guidebook. Everything you need to start your journey."
  },
  {
    id: "master-course",
    name: "The Master Course",
    price: 197,
    originalPrice: 397,
    image: "/images/Shankaramastercourse-3.png",
    tag: "Online Course",
    description: "Deep dive video training to master the system. Learn the meanings, layouts, and intuition techniques."
  },
  {
    id: "certification",
    name: "Platinum Certification",
    price: 1500,
    image: "/images/Shankara-Master-Certification-Program-2.png",
    tag: "Mentorship",
    description: "Private mentorship with Paul Wagner. Become a certified master reader and teacher."
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Shop" 
        description="Purchase the Shankara Oracle Deck, Master Course, and private readings. Tools for your spiritual journey."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Tools</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
          Invest in your spiritual evolution. These tools are crafted to last a lifetime and guide you through every season of life.
        </p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group glass-panel rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] flex flex-col backdrop-blur-md">
                <div className="aspect-[4/3] relative overflow-hidden bg-purple-900/20 p-6 flex items-center justify-center">
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-accent text-black hover:bg-accent font-bold tracking-wide shadow-lg">
                        {product.tag}
                      </Badge>
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-display mb-2 text-white">{product.name}</h3>
                  <div className="flex items-center gap-1 text-accent mb-4 drop-shadow-sm">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                    <span className="text-xs text-white/50 ml-2">(5.0)</span>
                  </div>
                  
                  <p className="text-white/70 text-sm mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <div className="flex flex-col">
                      {product.originalPrice && (
                        <span className="text-white/40 text-sm line-through">${product.originalPrice}</span>
                      )}
                      <span className="text-2xl font-bold text-white drop-shadow-md">${product.price}</span>
                    </div>
                    <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-6 font-bold shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all">
                      <ShoppingBag size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
