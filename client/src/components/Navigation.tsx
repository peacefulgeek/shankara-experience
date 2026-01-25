import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Memoized toggle function for better touch responsiveness
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
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

  const getNavTextColor = () => {
    if (isLightPage && !scrolled) return "text-[#1a0b2e]";
    if (isLightPage && scrolled) return "text-[#1a0b2e]";
    return "text-white/80";
  };

  const getNavBgColor = () => {
    if (scrolled) {
      if (isLightPage) return "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200";
      return "bg-[#1a0b2e]/90 backdrop-blur-xl shadow-lg border-b border-purple-500/30";
    }
    return "bg-transparent";
  };

  const getLogoColor = () => {
     if (isLightPage && !scrolled) return "text-[#ff00ff]";
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
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
          scrolled ? "py-4" : "",
          getNavBgColor()
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-4 cursor-pointer group">
              <img 
                src="https://shankara-pull.b-cdn.net/images/logo.svg" 
                alt="Shankara Logo" 
                className={cn(
                  "transition-all duration-300",
                  scrolled ? "h-16 w-auto" : "h-20 w-auto",
                  "hidden md:block",
                  !isLightPage && "drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]"
                )}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className={cn(
                "hidden md:block font-display font-bold text-4xl tracking-wider transition-colors",
                getLogoColor(),
                !isLightPage && "drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]"
              )}>
                SHANKARA
              </span>
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

          {/* Mobile Menu Toggle - Improved touch target and responsiveness */}
          <button 
            onClick={toggleMobileMenu}
            className={cn(
              "xl:hidden p-3 -mr-3 rounded-lg active:scale-95 transition-transform touch-manipulation",
              "focus:outline-none focus:ring-2 focus:ring-accent/50",
              isLightPage && !mobileMenuOpen ? "text-[#1a0b2e]" : "text-white"
            )}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Separate from nav for better performance */}
      <div 
        className={cn(
          "fixed inset-0 z-40 xl:hidden transition-all duration-200",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        
        {/* Menu Content */}
        <div 
          className={cn(
            "absolute top-0 right-0 w-full max-w-sm h-full bg-[#1a0b2e] shadow-2xl",
            "transform transition-transform duration-200 ease-out",
            "flex flex-col pt-24 pb-8 px-6 overflow-y-auto",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button 
                  onClick={closeMobileMenu}
                  className={cn(
                    "w-full text-left py-3 px-4 rounded-lg text-xl font-light transition-all",
                    "active:scale-98 touch-manipulation",
                    location === link.href 
                      ? "text-[#ff00ff] bg-purple-500/20" 
                      : "text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-purple-500/30">
            <Link href="/shop">
              <Button 
                onClick={closeMobileMenu}
                className="w-full bg-accent text-white rounded-full py-6 text-lg shadow-lg hover:bg-accent/80 active:scale-98 touch-manipulation"
              >
                Buy Oracle
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
