import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-to-shankara", label: "How To" },
    { href: "/master-training", label: "Training" },
    { href: "/certification", label: "Certification" },
    { href: "/readers", label: "Readers" },
    { href: "/videos", label: "Videos" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Stories" },
    { href: "/shop", label: "Shop" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-6",
        scrolled 
          ? "bg-purple-900/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] py-4 border-b border-white/10" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Fallback to text if logo image is missing, but keeping img tag for now */}
            <img 
              src="/images/logo.svg" 
              alt="Shankara Logo" 
              className={cn(
                "transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
                scrolled ? "h-12 w-auto" : "h-16 w-auto",
                "hidden md:block" // Hide on mobile if broken or too large, or handle with error
              )}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-display font-bold text-2xl tracking-wider text-white group-hover:text-accent transition-colors">
              SHANKARA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className={cn(
                  "text-[10px] font-bold tracking-[0.15em] uppercase hover:text-accent transition-all duration-300 cursor-pointer relative group",
                  scrolled ? "text-white/90" : "text-white drop-shadow-md",
                  location === link.href && "text-accent"
                )}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              </span>
            </Link>
          ))}
          <Link href="/shop">
            <Button 
              className={cn(
                "rounded-full px-6 py-5 transition-all shadow-[0_0_20px_rgba(255,0,255,0.2)] hover:shadow-[0_0_30px_rgba(255,0,255,0.4)] text-sm font-bold border border-white/20",
                scrolled 
                  ? "bg-accent text-black hover:bg-accent/90" 
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
              )}
            >
              Buy Oracle
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:text-accent transition-colors"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-black/95 backdrop-blur-xl z-40 xl:hidden flex flex-col items-center justify-center gap-8 p-8 animate-in slide-in-from-top-10 fade-in duration-300 border-t border-white/10 overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-white hover:text-accent hover:scale-110 transition-all duration-300 cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/shop">
            <Button className="w-full max-w-xs bg-accent text-black rounded-full py-6 text-lg mt-4 shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              Buy Oracle
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
