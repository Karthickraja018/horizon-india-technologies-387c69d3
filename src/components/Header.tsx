import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { categories } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/services/calibration-services-chennai", label: "Calibration Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  const isActive = (path: string) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith("/products");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 py-2 shadow-sm translate-y-0"
          : "absolute top-0 left-0 right-0 bg-transparent py-4 -translate-y-1"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" aria-label="Horizon India Technologies home">
          <BrandLogo size="sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors duration-200 ${
                isScrolled
                  ? isActive(link.to) ? "text-hero-accent" : "text-slate-700 hover:text-hero-accent"
                  : isActive(link.to) ? "text-hero-accent" : "text-hero-foreground hover:text-hero-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              to="/products"
              className={`flex items-center gap-1 transition-colors duration-200 ${
                isScrolled
                  ? isProductsActive ? "text-hero-accent" : "text-slate-700 hover:text-hero-accent"
                  : isProductsActive ? "text-hero-accent" : "text-hero-foreground hover:text-hero-accent"
              }`}
            >
              Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </Link>
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2 transition-all duration-200 ${productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="block px-4 py-2 text-hero-foreground hover:text-hero-accent hover:bg-[#f8fafc] transition-colors duration-200 text-sm"
                >
                  {cat.name}
                </Link>
              ))}
              <div className="border-t border-border mt-1 pt-1">
                <Link to="/products" className="block px-4 py-2 text-hero-accent font-semibold text-sm">
                  View All Products →
                </Link>
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors duration-200 ${
                isScrolled
                  ? isActive(link.to) ? "text-hero-accent" : "text-slate-700 hover:text-hero-accent"
                  : isActive(link.to) ? "text-hero-accent" : "text-hero-foreground hover:text-hero-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="hidden lg:inline-flex items-center gap-2 btn-primary text-sm px-5 py-2.5 animate-button-scale"
        >
          Get a Quote
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className={`lg:hidden transition-colors duration-200 ${isScrolled ? "text-slate-900" : "text-hero-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-3 animate-fade-in shadow-xl">
          <Link to="/" className={`block py-2 ${isActive("/") ? "text-hero-accent font-semibold" : "text-hero-foreground"}`} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/products" className={`block py-2 ${isProductsActive ? "text-hero-accent font-semibold" : "text-hero-foreground"}`} onClick={() => setMobileOpen(false)}>Products</Link>
          <Link to="/services" className={`block py-2 ${isActive("/services") ? "text-hero-accent font-semibold" : "text-hero-foreground"}`} onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/services/calibration-services-chennai" className={`block py-2 ${isActive("/services/calibration-services-chennai") ? "text-hero-accent font-semibold" : "text-hero-foreground"}`} onClick={() => setMobileOpen(false)}>Calibration Services</Link>
          <Link to="/about" className={`block py-2 ${isActive("/about") ? "text-hero-accent font-semibold" : "text-hero-foreground"}`} onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/contact" className={`block py-2 ${isActive("/contact") ? "text-hero-accent font-semibold" : "text-hero-foreground"}`} onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="flex flex-col gap-2 border-t border-border pt-2">
            <a href="tel:+919751458300" className="text-hero-muted text-sm flex items-center gap-2"><Phone className="w-4 h-4" /> +91 97514 58300</a>
            <a href="mailto:horizonindiatechnologies@gmail.com" className="text-hero-muted text-sm flex items-center gap-2"><Mail className="w-4 h-4" /> Email Us</a>
          </div>
          <button
            type="button"
            className="block btn-primary text-center w-full"
            onClick={() => {
              setMobileOpen(false);
              openQuoteModal();
            }}
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
