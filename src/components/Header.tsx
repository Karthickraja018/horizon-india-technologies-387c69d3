import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { categories } from "@/data/products";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="hidden lg:block border-b border-border/80">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-end gap-6 h-9 text-xs text-hero-muted">
          <a href="tel:+919751458300" className="flex items-center gap-1.5 hover:text-hero-accent transition-colors">
            <Phone className="w-3 h-3" /> +91 97514 58300
          </a>
          <a href="mailto:horizonindiatechnologies@gmail.com" className="flex items-center gap-1.5 hover:text-hero-accent transition-colors">
            <Mail className="w-3 h-3" /> horizonindiatechnologies@gmail.com
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-hero-headline font-bold text-lg tracking-tight leading-tight">
          <span className="text-hero-accent">Horizon</span> India Technologies
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-hero-foreground hover:text-hero-accent transition-colors">Home</Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-hero-foreground hover:text-hero-accent transition-colors"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2 transition-all duration-200 ${productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="block px-4 py-2 text-hero-foreground hover:text-hero-accent hover:bg-secondary/40 transition-colors text-sm"
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

          <Link to="/services" className="text-hero-foreground hover:text-hero-accent transition-colors">Services</Link>
          <Link to="/about" className="text-hero-foreground hover:text-hero-accent transition-colors">About</Link>
          <Link to="/contact" className="text-hero-foreground hover:text-hero-accent transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 btn-primary text-sm px-5 py-2.5"
        >
          Get a Quote
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-hero-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          <Link to="/" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/products" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Products</Link>
          <Link to="/services" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/about" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/contact" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="flex flex-col gap-2 border-t border-border pt-2">
            <a href="tel:+919751458300" className="text-hero-muted text-sm flex items-center gap-2"><Phone className="w-4 h-4" /> +91 97514 58300</a>
            <a href="mailto:horizonindiatechnologies@gmail.com" className="text-hero-muted text-sm flex items-center gap-2"><Mail className="w-4 h-4" /> Email Us</a>
          </div>
          <Link to="/contact" className="block btn-primary text-center" onClick={() => setMobileOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
