import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <SEO 
        title="Privacy Policy" 
        description="Read our privacy policy to understand how we protect your data at The Shankara Experience."
      />
      
      {/* Background - using global cosmic theme from index.css */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black/40 mix-blend-overlay" />
      </div>

      <Navigation />
      
      <section className="pt-32 pb-8 text-center container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-[0_2px_10px_rgba(255,0,255,0.5)]">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">Policy</span>
        </h1>
        <p className="text-white/60">Last Updated: January 16, 2026</p>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="prose prose-invert prose-lg max-w-none text-white/80 space-y-8">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  Believe In Miracles LLC ("we," "us," "our," or "Company") operates The Shankara Experience website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-bold text-accent mb-2">Personal Information You Provide</h3>
                <p className="mb-4">We collect information you voluntarily provide when you:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Create an account or register for services</li>
                  <li>Purchase products, courses, or the Shankara Oracle</li>
                  <li>Subscribe to our newsletter or mailing list</li>
                  <li>Contact us through our contact form</li>
                  <li>Participate in events, workshops, or retreats</li>
                  <li>Provide feedback or testimonials</li>
                </ul>

                <h3 className="text-xl font-bold text-accent mb-2">Types of Personal Information</h3>
                <p className="mb-6">
                  This may include: name, email address, phone number, mailing address, payment information, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-bold text-accent mb-2">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we automatically collect certain information including IP address, browser type, operating system, referring URLs, pages visited, and the time and date of your visits. We use cookies and similar tracking technologies to enhance your experience.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send promotional communications and newsletters (with your consent)</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To monitor and analyze trends, usage, and activities</li>
                  <li>To detect and prevent fraudulent transactions and other illegal activities</li>
                  <li>To personalize your experience and deliver targeted content</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. How We Share Your Information</h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. However, we may share information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Service Providers:</strong> We may share information with third-party service providers who assist us in operating our website and conducting our business (payment processors, email services, analytics providers)</li>
                  <li><strong className="text-white">Legal Requirements:</strong> We may disclose information when required by law or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others</li>
                  <li><strong className="text-white">Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical, administrative, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">6. Your Privacy Rights</h2>
                <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Access:</strong> You have the right to access your personal information</li>
                  <li><strong className="text-white">Correction:</strong> You have the right to correct inaccurate or incomplete information</li>
                  <li><strong className="text-white">Deletion:</strong> You have the right to request deletion of your information</li>
                  <li><strong className="text-white">Opt-Out:</strong> You can opt out of receiving promotional communications by clicking the unsubscribe link in our emails</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and understand how you use our site. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's account.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">11. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please{" "}
                  <Link href="/contact" className="text-accent hover:text-accent/80 underline">
                    contact us
                  </Link>.
                </p>
                <p className="mt-4 text-white/60 text-sm">
                  This Privacy Policy is provided by Believe In Miracles LLC and applies to all services offered through The Shankara Experience website and related platforms.
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
