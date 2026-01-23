import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Link } from "wouter";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is Shankara for?",
      a: "The Shankara Oracle serves and honors those seeking to awaken to their highest Selves, gain deep, transformative answers, release their conditioning, and live consciously and proactively embedded in The Dharma. Shankara was created for YOU."
    },
    {
      q: "Is it difficult to learn to play Shankara?",
      a: "Not at all. The Shankara Setup & Play Booklet provides detailed guidance for how to do sessions using Shankara – with your Self, friends, and clients. It has simple, step-by-step instructions so you can do your first Shankara session within minutes of opening the beautiful Shankara box."
    },
    {
      q: "Do I need to worry about protection/inviting unwanted spirits when I play Shankara?",
      a: "Shankara is a high-vibration tool designed to connect you with divine guidance. The board includes placeholders for Divine Creators and Archangels to ensure a protected and sacred space. Invite your spirit guides, ancestors, and all parts of you into your Shankara sessions to gain the most insight and to transcend all that has blocked your illumination."
    },
    {
      q: "Do I use the three oracle decks together with the board?",
      a: "Yes. The Shankara board holds The Master Deck, Alchemy Deck, and Release Deck. These Sacred Oracle decks reflect the three foundational teachings to help you become The Conscious Creator Of Your Reality. If you wish, you can also use your favorite tarot or oracle decks with Shankara, for a customized experience."
    },
    {
      q: "How long does shipping take?",
      a: "We process orders within 1-2 business days. Shipping times vary by location but typically range from 3-7 business days for domestic orders and 10-21 days for international shipments."
    },
    {
      q: "What if I need to make any changes to my order, like change my shipping address?",
      a: "Please contact our support team immediately via the Contact Us page. If your order hasn't shipped yet, we will do our best to accommodate your changes."
    }
  ];

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Frequently Asked Questions - The Shankara Oracle" 
        description="Answers to common questions about The Shankara Oracle, shipping, and how to use the system."
      />
      
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-sm">
              Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Questions</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to know about the Shankara Oracle system.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'bg-white/5 hover:bg-white/10'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-lg md:text-xl font-bold text-white flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-accent' : 'text-white/50'}`} />
                    {faq.q}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-accent shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/50 shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-white/80 leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-black/40 p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-white/70 mb-8">
              We're here to help you on your journey. Reach out to our support team.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 rounded-full font-bold">
                Contact Support <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
