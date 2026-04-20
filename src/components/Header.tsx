import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <motion.div
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`pointer-events-auto bg-white flex flex-col w-full origin-top transition-colors duration-400 ${
          isScrolled
            ? "lg:max-w-6xl lg:mt-4 lg:rounded-xl border-b lg:border border-gray-200 shadow-sm"
            : "max-w-full mt-0 rounded-none border-b border-white shadow-none"
        }`}
      >
        <motion.div 
          layout
          className={`container mx-auto flex items-center justify-between w-full transition-all duration-400 ease-in-out ${
            isScrolled ? "px-4 py-2" : "px-6 lg:px-12 py-4"
          }`}
        >
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
                  isActive(link.to) ? "text-hero-accent" : "text-slate-700 hover:text-hero-accent"
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
                isProductsActive ? "text-hero-accent" : "text-slate-700 hover:text-hero-accent"
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
                  className="block px-4 py-2 text-slate-700 hover:text-hero-accent hover:bg-[#f8fafc] transition-colors duration-200 text-sm"
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
                isActive(link.to) ? "text-hero-accent" : "text-slate-700 hover:text-hero-accent"
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
          className="lg:hidden text-slate-900 transition-colors duration-200"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 animate-fade-in shadow-xl w-full">
          <Link to="/" className={`block py-2 ${isActive("/") ? "text-hero-accent font-semibold" : "text-slate-700"}`} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/products" className={`block py-2 ${isProductsActive ? "text-hero-accent font-semibold" : "text-slate-700"}`} onClick={() => setMobileOpen(false)}>Products</Link>
          <Link to="/services" className={`block py-2 ${isActive("/services") ? "text-hero-accent font-semibold" : "text-slate-700"}`} onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/services/calibration-services-chennai" className={`block py-2 ${isActive("/services/calibration-services-chennai") ? "text-hero-accent font-semibold" : "text-slate-700"}`} onClick={() => setMobileOpen(false)}>Calibration Services</Link>
          <Link to="/about" className={`block py-2 ${isActive("/about") ? "text-hero-accent font-semibold" : "text-slate-700"}`} onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/contact" className={`block py-2 ${isActive("/contact") ? "text-hero-accent font-semibold" : "text-slate-700"}`} onClick={() => setMobileOpen(false)}>Contact</Link>
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
      </motion.div>
    </header>
  );
};

export default Header;
