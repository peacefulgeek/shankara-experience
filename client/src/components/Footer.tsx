import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/images/logo.svg" 
              alt="The Shankara Experience" 
              className="h-12 w-auto mb-6 opacity-90" 
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              The Shankara Oracle is a combination of channeled predictive and healing tools rooted in ancient wisdom. Designed to guide you on your spiritual journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-primary tracking-widest uppercase">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about"><span className="hover:text-white cursor-pointer transition-colors">About Shankara</span></Link></li>
              <li><Link href="/master-training"><span className="hover:text-white cursor-pointer transition-colors">Master Training</span></Link></li>
              <li><Link href="/certification"><span className="hover:text-white cursor-pointer transition-colors">Certification</span></Link></li>
              <li><Link href="/readers"><span className="hover:text-white cursor-pointer transition-colors">Find a Reader</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-white cursor-pointer transition-colors">Shop</span></Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-primary tracking-widest uppercase">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/videos"><span className="hover:text-white cursor-pointer transition-colors">Videos</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-white cursor-pointer transition-colors">Blog</span></Link></li>
              <li><Link href="/testimonials"><span className="hover:text-white cursor-pointer transition-colors">Testimonials</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-white cursor-pointer transition-colors">FAQ</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-white cursor-pointer transition-colors">Contact</span></Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-primary tracking-widest uppercase">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/privacy"><span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span></Link></li>
              <li><Link href="/terms"><span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span></Link></li>
              <li><Link href="/returns"><span className="hover:text-white cursor-pointer transition-colors">Return Policy</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Shankara Experience. All rights reserved.</p>
          <p>Created by Krishna Kalesh (Paul Wagner)</p>
        </div>
      </div>
    </footer>
  );
}
