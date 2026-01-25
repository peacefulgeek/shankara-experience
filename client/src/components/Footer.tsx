import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0417] text-white/80 py-24 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white tracking-wide mb-8">
              SHANKARA <span className="text-accent">ORACLE</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              The Shankara Oracle is a combination of channeled predictive and healing tools rooted in ancient wisdom. Designed to guide you on your spiritual journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/about"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">About Shankara</span></Link></li>
              <li><Link href="/master-training"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Training</span></Link></li>
              <li><Link href="/certification"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Master Certification</span></Link></li>
              <li><Link href="/readers"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Find a Reader</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Shop</span></Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Resources</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/how-to-shankara"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">How To Use</span></Link></li>
              <li><Link href="/videos"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Videos</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Blog</span></Link></li>
              <li><Link href="/testimonials"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Testimonials</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">FAQ</span></Link></li>
              <li><Link href="/affiliates"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Affiliates</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Contact</span></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Legal</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/privacy"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Privacy Policy</span></Link></li>
              <li><Link href="/terms"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Terms & Conditions</span></Link></li>
              <li><Link href="/returns"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Return Policy</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-medium uppercase tracking-wider">
          <p>&copy; 2024 Believe In Miracles LLC. All rights reserved.</p>
          <p>Created by Krishna Kalesh (Paul Wagner)</p>
        </div>
      </div>
    </footer>
  );
}
