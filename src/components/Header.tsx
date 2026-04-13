import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-hero/95 backdrop-blur-md border-b border-hero-muted/10">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-hero-headline font-bold text-xl tracking-tight">
          <span className="text-hero-accent">Precision</span>Test
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
              className={`absolute top-full left-0 mt-2 w-64 bg-hero border border-hero-muted/20 rounded-lg shadow-2xl py-2 transition-all duration-200 ${productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="block px-4 py-2 text-hero-foreground hover:text-hero-accent hover:bg-hero-frame/50 transition-colors text-sm"
                >
                  {cat.name}
                </Link>
              ))}
              <div className="border-t border-hero-muted/10 mt-1 pt-1">
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
          className="hidden lg:inline-flex items-center gap-2 bg-hero-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-lg hover:bg-hero-accent-hover transition-colors text-sm"
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
        <div className="lg:hidden bg-hero border-t border-hero-muted/10 px-6 py-4 space-y-3">
          <Link to="/" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/products" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Products</Link>
          <Link to="/services" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/about" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/contact" className="block text-hero-foreground py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/contact" className="block bg-hero-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
