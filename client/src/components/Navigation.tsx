import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we are on a "light mode" page (Wisdom or Article pages)
  const isLightPage = location === "/wisdom" || location.startsWith("/article/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how", label: "HOW" },
    { href: "/unboxing", label: "Unboxing" },
    { href: "/master-training", label: "Training" },
    { href: "/certification", label: "Certification" },
    { href: "/readers", label: "Readers" },
    { href: "/videos", label: "Videos" },
    { href: "/wisdom", label: "Wisdom" },
    { href: "/testimonials", label: "Stories" },
    { href: "/shop", label: "Shop" },
  ];

  // Determine text color based on page type and scroll state
  // On light pages (Wisdom/Article): Dark text initially, White text when scrolled (if bg becomes dark) 
  // OR keep consistent background. 
  // Strategy: 
  // - Default (Dark pages): Text White, Scrolled Bg Dark Purple
  // - Light Pages: Text Dark Purple, Scrolled Bg White/Light
  
  const getNavTextColor = () => {
    if (isLightPage && !scrolled) return "text-[#1a0b2e]"; // Dark text on light bg
    if (isLightPage && scrolled) return "text-[#1a0b2e]"; // Dark text on scrolled light bg (if we keep it light)
    return "text-white/80"; // Default white text
  };

  const getNavBgColor = () => {
    if (scrolled) {
      if (isLightPage) return "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200";
      return "bg-[#1a0b2e]/90 backdrop-blur-xl shadow-lg border-b border-purple-500/30";
    }
    return "bg-transparent";
  };

  const getLogoColor = () => {
     if (isLightPage && !scrolled) return "text-[#ff00ff]"; // Keep pink logo
     return "text-[#ff00ff]";
  };

  const getButtonStyles = () => {
    if (isLightPage && !scrolled) {
      return "bg-[#1a0b2e] text-white hover:bg-[#1a0b2e]/80 border-transparent";
    }
    if (isLightPage && scrolled) {
      return "bg-[#1a0b2e] text-white hover:bg-[#1a0b2e]/80 border-transparent";
    }
    return "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-accent border-white/20";
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-6",
        scrolled ? "py-4" : "",
        getNavBgColor()
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer group">
            {/* Image Logo - Only show if not on light page or handle differently? Keeping consistent for now */}
            <img 
              src="https://shankara-pull.b-cdn.net/images/logo.svg" 
              alt="Shankara Logo" 
              className={cn(
                "transition-all duration-500",
                scrolled ? "h-16 w-auto" : "h-20 w-auto",
                "hidden md:block",
                !isLightPage && "drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]"
              )}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Text Logo */}
            <span className={cn(
              "hidden md:block font-display font-bold text-4xl tracking-wider transition-colors",
              getLogoColor(),
              !isLightPage && "drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]"
            )}>
              SHANKARA
            </span>
            {/* Mobile Logo Text */}
            <span className={cn(
              "md:hidden font-display font-bold text-2xl tracking-wider",
              getLogoColor(),
              !isLightPage && "drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]"
            )}>
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
                  "text-[12px] font-bold tracking-[0.15em] uppercase hover:text-accent transition-all duration-300 cursor-pointer relative group",
                  getNavTextColor(),
                  location === link.href ? "text-[#ff00ff]" : ""
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full bg-[#ff00ff]" : "bg-accent"
                )} />
              </span>
            </Link>
          ))}
          <Link href="/shop">
            <Button 
              className={cn(
                "rounded-full px-6 py-5 transition-all shadow-md hover:shadow-lg text-sm font-bold border",
                getButtonStyles()
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
            className={cn(
              "p-2 hover:text-accent transition-colors",
              isLightPage && !mobileMenuOpen ? "text-[#1a0b2e]" : "text-white"
            )}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-[#1a0b2e]/95 backdrop-blur-xl z-40 xl:hidden flex flex-col items-center justify-center gap-8 p-8 animate-in slide-in-from-top-10 fade-in duration-300 border-t border-purple-500/30 overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-light hover:scale-110 transition-all duration-300 cursor-pointer",
                  location === link.href ? "text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]" : "text-white hover:text-accent"
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/shop">
            <Button className="w-full max-w-xs bg-accent text-white rounded-full py-6 text-lg mt-4 shadow-lg hover:bg-accent/80">
              Buy Oracle
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
