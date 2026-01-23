import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <div className="cursor-pointer flex items-center gap-3">
            <img 
              src="/images/logo.svg" 
              alt="The Shankara Experience" 
              className="h-10 md:h-12 w-auto" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`cursor-pointer text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Buy Oracle
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className="cursor-pointer text-lg font-medium py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <Button className="w-full bg-primary text-white mt-4">
            Buy Oracle
          </Button>
        </div>
      )}
    </nav>
  );
}
