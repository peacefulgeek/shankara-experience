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
    { href: "/about", label: "About" },
    { href: "/master-training", label: "Master Training" },
    { href: "/certification", label: "Certification" },
    { href: "/readers", label: "Readers" },
    { href: "/shop", label: "Shop" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-6",
        scrolled 
          ? "bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4 border-b border-white/5" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="/images/logo.svg" 
              alt="Shankara Logo" 
              className={cn(
                "transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
                scrolled ? "h-12 w-auto" : "h-16 w-auto"
              )}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className={cn(
                  "text-sm font-bold tracking-[0.2em] uppercase hover:text-primary transition-all duration-300 cursor-pointer relative group",
                  scrolled ? "text-white/90" : "text-white drop-shadow-md",
                  location === link.href && "text-primary"
                )}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
              </span>
            </Link>
          ))}
          <Button 
            className={cn(
              "rounded-full px-8 py-6 transition-all shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] text-lg font-bold border border-white/20",
              scrolled 
                ? "bg-primary text-white hover:bg-primary/80" 
                : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
            )}
          >
            Buy Oracle
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-black/95 backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-center gap-10 p-8 animate-in slide-in-from-top-10 fade-in duration-300 border-t border-white/10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-light text-white hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Button className="w-full max-w-xs bg-primary text-white rounded-full py-8 text-xl mt-8 shadow-[0_0_30px_rgba(255,0,255,0.5)]">
            Buy Oracle
          </Button>
        </div>
      )}
    </nav>
  );
}
