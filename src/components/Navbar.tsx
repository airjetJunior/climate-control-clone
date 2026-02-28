import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAirjet from "@/assets/logo-airjet.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50 py-1"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src={logoAirjet}
              alt="AirJet Climatização e Refrigeração"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-6`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button asChild variant="hero" size="default" className="shadow-md hover:shadow-lg transition-shadow">
              <a href="#contato">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              scrolled ? "text-foreground hover:bg-muted" : "text-foreground hover:bg-primary/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 mt-2 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all font-semibold py-3 px-4 rounded-xl uppercase text-sm tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-4 shadow-md">
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
