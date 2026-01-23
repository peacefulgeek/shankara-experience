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
    { href: "/unboxing", label: "Unboxing" },
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
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-purple-100" 
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
                "transition-all duration-500",
                scrolled ? "h-12 w-auto" : "h-16 w-auto",
                "hidden md:block" 
              )}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text Logo */}
            <span className="hidden md:block font-display font-bold text-2xl tracking-wider text-purple-900 group-hover:text-accent transition-colors">
              SHANKARA
            </span>
            {/* Mobile Logo Text */}
            <span className="md:hidden font-display font-bold text-xl tracking-wider text-purple-900">
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
                  "text-[10px] font-bold tracking-[0.15em] uppercase hover:text-purple-600 transition-all duration-300 cursor-pointer relative group",
                  scrolled ? "text-purple-900" : "text-purple-900",
                  location === link.href && "text-purple-600"
                )}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
          <Link href="/shop">
            <Button 
              className={cn(
                "rounded-full px-6 py-5 transition-all shadow-md hover:shadow-lg text-sm font-bold border border-purple-100",
                scrolled 
                  ? "bg-purple-900 text-white hover:bg-purple-800" 
                  : "bg-white/50 backdrop-blur-md text-purple-900 hover:bg-white/80"
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
            className="text-purple-900 p-2 hover:text-purple-600 transition-colors"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-white/95 backdrop-blur-xl z-40 xl:hidden flex flex-col items-center justify-center gap-8 p-8 animate-in slide-in-from-top-10 fade-in duration-300 border-t border-purple-100 overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light text-purple-900 hover:text-purple-600 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/shop">
            <Button className="w-full max-w-xs bg-purple-900 text-white rounded-full py-6 text-lg mt-4 shadow-lg">
              Buy Oracle
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
