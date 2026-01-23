import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-lg text-white/80 py-24 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/images/logo.svg" 
              alt="The Shankara Experience" 
              className="h-20 w-auto mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
            />
            <p className="text-white/60 text-sm leading-relaxed font-light">
              The Shankara Oracle is a combination of channeled predictive and healing tools rooted in ancient wisdom. Designed to guide you on your spiritual journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/about"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">About Shankara</span></Link></li>
              <li><Link href="/master-training"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Master Training</span></Link></li>
              <li><Link href="/certification"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Certification</span></Link></li>
              <li><Link href="/readers"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Find a Reader</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Shop</span></Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent tracking-widest uppercase drop-shadow-md">Resources</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li><Link href="/videos"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Videos</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Blog</span></Link></li>
              <li><Link href="/testimonials"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">Testimonials</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] cursor-pointer transition-all duration-300">FAQ</span></Link></li>
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
          <p>&copy; {new Date().getFullYear()} The Shankara Experience. All rights reserved.</p>
          <p>Created by Krishna Kalesh (Paul Wagner)</p>
        </div>
      </div>
    </footer>
  );
}
