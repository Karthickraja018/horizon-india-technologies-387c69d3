import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, ShieldCheck, X } from "lucide-react";
import { categories } from "@/data/products";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useQuoteModal } from "@/context/QuoteModalContext";

const sectionLinks = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
];

const StickyHeader = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const activeSection = useScrollSpy(["home", "products", "services"]);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const trustIndicators = useMemo(
    () => ["NABL Ready", "ISO Support", "24h Response"],
    [],
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-[#e5e7eb] transition-all duration-300 ${
        isCompact ? "shadow-[0_4px_12px_rgba(15,23,42,0.08)]" : ""
      }`}
    >
      <div
        className={`container mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-300 ${
          isCompact ? "h-14" : "h-16"
        }`}
      >
        <Link to="/" className="text-hero-headline font-bold text-base lg:text-lg tracking-tight">
          <span className="text-hero-accent">Horizon</span> India Technologies
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {sectionLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`relative transition-colors duration-200 ${
                  active ? "text-hero-accent" : "text-hero-foreground hover:text-hero-accent"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-hero-accent transition-all duration-200 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link to="/products" className="flex items-center gap-1 text-hero-foreground hover:text-hero-accent transition-colors duration-200">
              All Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </Link>
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-md shadow-[0_10px_15px_rgba(15,23,42,0.08)] py-2 transition-all duration-200 ${
                productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="block px-4 py-2 text-hero-foreground hover:text-hero-accent hover:bg-[#f9fafb] transition-colors duration-200 text-sm"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="text-hero-foreground hover:text-hero-accent transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="text-hero-foreground hover:text-hero-accent transition-colors duration-200">
            Contact
          </Link>
        </nav>

        <div className="hidden xl:flex items-center gap-2 mr-3">
          {trustIndicators.map((indicator) => (
            <span key={indicator} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] text-hero-muted">
              <ShieldCheck className="w-3 h-3" />
              {indicator}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="hidden lg:inline-flex btn-primary text-sm px-4 py-2.5 animate-button-scale"
        >
          Get Quote
        </button>

        <button onClick={() => setMobileOpen((prev) => !prev)} className="lg:hidden text-hero-foreground">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-3 animate-fade-in">
          {sectionLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={`block py-2 text-left w-full ${activeSection === link.id ? "text-hero-accent font-semibold" : "text-hero-foreground"}`}
            >
              {link.label}
            </button>
          ))}

          <Link to="/products" className="block py-2 text-hero-foreground" onClick={() => setMobileOpen(false)}>
            All Products
          </Link>
          <Link to="/about" className="block py-2 text-hero-foreground" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="block py-2 text-hero-foreground" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          <button type="button" onClick={() => openQuoteModal()} className="w-full btn-primary text-sm py-2.5">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
