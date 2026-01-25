import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Terms & Conditions" 
        description="Read our terms and conditions for using The Shankara Experience website and products."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-8 text-center container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Conditions</span>
        </h1>
        <p className="text-white/60">Last Updated: January 16, 2026</p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="prose prose-invert prose-lg max-w-none text-white/80 space-y-8">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website and the services provided by Believe In Miracles LLC ("Company," "we," "us," "our"), you agree to be bound by these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Use License</h2>
                <p className="mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on The Shankara Experience website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. Disclaimer</h2>
                <p className="mb-4">
                  The materials on The Shankara Experience website are provided on an 'as is' basis. Believe In Miracles LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  The services provided through The Shankara Experience are for spiritual guidance, mentorship, and personal development purposes only. They are not a substitute for professional medical, psychological, legal, or financial advice. Always consult with qualified professionals for matters requiring professional expertise.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. Limitations</h2>
                <p>
                  In no event shall Believe In Miracles LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Shankara Experience website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on The Shankara Experience website could include technical, typographical, or photographic errors. Believe In Miracles LLC does not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">6. Materials and Links</h2>
                <p>
                  Believe In Miracles LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
                </p>
                <p className="mt-4">
                  If you believe that a link on our website is inappropriate or infringes upon intellectual property rights, please contact us immediately.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">7. Modifications</h2>
                <p>
                  Believe In Miracles LLC may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">9. User Conduct</h2>
                <p className="mb-4">
                  You agree not to use our website or services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. Prohibited behavior includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Harassing or causing distress or inconvenience to any person</li>
                  <li>Obscene or offensive content or language</li>
                  <li>Disrupting the normal flow of dialogue within our website</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Transmitting viruses or malicious code</li>
                  <li>Spamming or sending unsolicited messages</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">10. Purchases and Refunds</h2>
                <p className="mb-4">
                  All purchases of digital products, courses, and services are final unless otherwise stated. Specific refund policies are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Events & Workshops:</strong> Full refunds available up to 48 hours before the event</li>
                  <li><strong className="text-white">Digital Products:</strong> No refunds on digital downloads once access has been granted</li>
                  <li><strong className="text-white">Courses & Memberships:</strong> Refunds available within 14 days of purchase if not yet accessed</li>
                  <li><strong className="text-white">Physical Products:</strong> Please refer to our <Link href="/returns" className="text-accent hover:text-accent/80 underline">Return Policy</Link> for details</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">11. Intellectual Property Rights</h2>
                <p>
                  All content on The Shankara Experience website, including text, graphics, logos, images, audio clips, digital downloads, the Shankara Oracle system, card designs, board designs, course materials, and software, is the property of Believe In Miracles LLC or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">12. Certification & Usage</h2>
                <p>
                  Completion of The Shankara Master Course does not automatically grant the right to teach the material. Only those who complete the full Certification Program and receive official designation may market themselves as "Certified Shankara Masters."
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">13. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Believe In Miracles LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of or inability to use the website or services.
                </p>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">14. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Believe In Miracles LLC and its officers, directors, employees, and agents from any and all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from your use of the website or services or your violation of these Terms and Conditions.
                </p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">15. Testimonials and Results</h2>
                <p>
                  Testimonials and results shared on our website are from real clients and represent their personal experiences. However, individual results may vary. We do not guarantee specific outcomes or results from our services. Your success depends on many factors, including your commitment, effort, and personal circumstances.
                </p>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">16. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please{" "}
                  <Link href="/contact" className="text-accent hover:text-accent/80 underline">
                    contact us
                  </Link>.
                </p>
                <p className="mt-4 text-white/60 text-sm">
                  These Terms and Conditions constitute the entire agreement between you and Believe In Miracles LLC regarding your use of The Shankara Experience website and services.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
