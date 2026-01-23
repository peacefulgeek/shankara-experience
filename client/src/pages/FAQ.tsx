import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function FAQ() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about the Shankara Oracle, shipping, and courses."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-24 container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Questions</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 drop-shadow-md">
          Common questions about the Oracle, the courses, and shipping.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="glass-panel border border-white/10 rounded-xl px-6 bg-white/5 backdrop-blur-md">
            <AccordionTrigger className="text-lg font-bold hover:text-accent text-white transition-colors">What is included in the Shankara Oracle System?</AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
              The complete system includes 4 distinct Oracle Decks (300+ cards total), the sacred Geometry Oracle Board, 18 engraved Obsidian Stones, Shakti's Cube, and a comprehensive Guidebook. It is a complete ecosystem for divination.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="glass-panel border border-white/10 rounded-xl px-6 bg-white/5 backdrop-blur-md">
            <AccordionTrigger className="text-lg font-bold hover:text-accent text-white transition-colors">Do I need to be psychic to use this?</AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
              Not at all. The Shankara Oracle is designed to awaken your intuition. The system itself provides the structure and the messages. As you work with it, your own natural intuitive abilities will strengthen and expand.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="glass-panel border border-white/10 rounded-xl px-6 bg-white/5 backdrop-blur-md">
            <AccordionTrigger className="text-lg font-bold hover:text-accent text-white transition-colors">What is the difference between the Master Course and Certification?</AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
              The Master Course ($197) is a self-study video curriculum for personal mastery. The Certification Program ($1,500) includes the Master Course PLUS live private mentorship with Paul Wagner, exams, and official certification to read professionally for others.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="glass-panel border border-white/10 rounded-xl px-6 bg-white/5 backdrop-blur-md">
            <AccordionTrigger className="text-lg font-bold hover:text-accent text-white transition-colors">Do you ship internationally?</AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
              Yes, we ship worldwide. Shipping costs are calculated at checkout based on your location. Please note that international customers are responsible for any customs fees or import taxes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="glass-panel border border-white/10 rounded-xl px-6 bg-white/5 backdrop-blur-md">
            <AccordionTrigger className="text-lg font-bold hover:text-accent text-white transition-colors">How long does shipping take?</AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
              Orders are typically processed within 2-3 business days. US shipping usually takes 3-5 days. International shipping can take 10-21 days depending on the destination and customs processing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Footer />
    </div>
  );
}
