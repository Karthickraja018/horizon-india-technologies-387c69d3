"use client";

/* Hallmark · component: Header · genre: modern-minimal · theme: catalog (preserved) 
 * states: default · hover · focus 
 * contrast: pass
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, ShieldCheck, Wrench, Microscope } from "lucide-react";
import { useQuoteModal } from "@/providers/QuoteModalContext";
import BrandLogo from "@/components/common/BrandLogo";
import { categories, products } from "@/constants/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  const isActive = (path: string) => {
    if (path === "/products") return pathname?.startsWith("/products");
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProducts = products.slice(0, 3);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_3px_rgba(15,23,42,0.05)] border-b border-border/50" 
          : "bg-background/90 backdrop-blur-md border-b border-border"
      }`}
    >
      <nav className={`container mx-auto px-6 lg:px-12 grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
        {/* Left: Logo */}
        <div className="flex items-center justify-start">
          <Link href="/" className="inline-flex items-center flex-shrink-0 select-none outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
            <BrandLogo size={isScrolled ? "md" : "lg"} />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-foreground h-full">
          <Link
            href="/"
            className={`transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${isActive("/") ? "text-hero-accent" : "hover:text-hero-accent"}`}
          >
            Home
          </Link>

          {/* Products Mega Menu */}
          <div
            className="group relative flex items-center h-full"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className={`transition-colors flex items-center gap-1 h-full outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                isActive("/products") ? "text-hero-accent" : "hover:text-hero-accent"
              }`}
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {/* Mega Menu Dropdown */}
            <div
              className={`absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 w-[800px] bg-card border border-border rounded-xl shadow-[0_24px_48px_rgba(15,23,42,0.12)] p-6 transition-all duration-200 z-50 flex gap-8 ${
                productsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              {/* Left Column: Categories */}
              <div className="flex-1">
                <h3 className="eyebrow mb-4 flex items-center gap-2 text-muted-foreground">
                  <Microscope className="w-4 h-4" /> Categories
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="block px-3 py-2 -mx-3 text-foreground hover:text-hero-accent hover:bg-muted/50 rounded-md transition-colors text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1 text-hero-accent font-semibold text-sm hover:text-hero-accent-hover transition-colors group/link outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    View All Products <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Right Column: Featured & Services */}
              <div className="w-[300px] flex flex-col gap-6 shrink-0 border-l border-border pl-8">
                <div>
                  <h3 className="eyebrow mb-4 text-muted-foreground">Featured Equipment</h3>
                  <div className="flex flex-col gap-3">
                    {featuredProducts.map(p => (
                      <Link key={p.id} href={`/products/${p.categorySlug}/${p.slug}`} className="group/prod flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                        <div className="w-12 h-12 bg-muted rounded-md border border-border flex items-center justify-center overflow-hidden shrink-0">
                          {/* We would use Next Image here in production */}
                          <div className="w-full h-full bg-slate-200" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover/prod:text-hero-accent transition-colors truncate">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.model}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="eyebrow mb-3 flex items-center gap-2 text-muted-foreground">
                    <ShieldCheck className="w-4 h-4" /> Quick Services
                  </h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/services/calibration-services-chennai" className="text-sm text-foreground hover:text-hero-accent transition-colors flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                      <Wrench className="w-3.5 h-3.5 text-muted-foreground" /> NABL Calibration
                    </Link>
                    <Link href="/services" className="text-sm text-foreground hover:text-hero-accent transition-colors flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-muted-foreground" /> Annual Maintenance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/services/calibration-services-chennai"
            className={`transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
              isActive("/services/calibration-services-chennai")
                ? "text-hero-accent"
                : "hover:text-hero-accent"
            }`}
          >
            Calibration
          </Link>
          <Link
            href="/about"
            className={`transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${isActive("/about") ? "text-hero-accent" : "hover:text-hero-accent"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${isActive("/contact") ? "text-hero-accent" : "hover:text-hero-accent"}`}
          >
            Contact
          </Link>
        </div>

        {/* Right: CTA + Mobile toggle */}
        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="hidden md:inline-flex btn-primary"
          >
            Request Quote
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-foreground p-1.5 -mr-1.5 hover:bg-muted rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[100%] left-0 right-0 h-[calc(100vh-64px)] bg-background overflow-y-auto border-t border-border flex flex-col md:hidden">
          <div className="p-6 flex flex-col gap-1">
            <Link
              href="/"
              className={`p-3 text-lg font-semibold rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive("/") ? "bg-muted text-hero-accent" : "text-foreground hover:bg-muted/50"}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`p-3 text-lg font-semibold rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive("/products") ? "bg-muted text-hero-accent" : "text-foreground hover:bg-muted/50"}`}
            >
              Products
            </Link>
            <div className="pl-6 py-2 grid grid-cols-1 gap-2">
               {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="text-muted-foreground hover:text-hero-accent py-1 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {cat.name}
                  </Link>
                ))}
            </div>
            <Link
              href="/services/calibration-services-chennai"
              className={`p-3 text-lg font-semibold rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive("/services/calibration-services-chennai") ? "bg-muted text-hero-accent" : "text-foreground hover:bg-muted/50"}`}
            >
              Calibration
            </Link>
            <Link
              href="/about"
              className={`p-3 text-lg font-semibold rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive("/about") ? "bg-muted text-hero-accent" : "text-foreground hover:bg-muted/50"}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`p-3 text-lg font-semibold rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive("/contact") ? "bg-muted text-hero-accent" : "text-foreground hover:bg-muted/50"}`}
            >
              Contact
            </Link>
          </div>

          <div className="mt-auto p-6 border-t border-border bg-muted/20">
            <div className="flex flex-col gap-3 mb-6">
              <a href="tel:+919751458300" className="flex items-center gap-3 text-foreground font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                <span className="bg-background border border-border p-2 rounded-full text-hero-accent">
                  <Phone className="w-4 h-4" />
                </span>
                +91 97514 58300
              </a>
              <a
                href="mailto:horizonindiatechnologies@gmail.com"
                className="flex items-center gap-3 text-foreground font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                <span className="bg-background border border-border p-2 rounded-full text-hero-accent">
                  <Mail className="w-4 h-4" />
                </span>
                horizonindiatechnologies@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Sticky Mobile CTA (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-50 flex gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="flex-1 btn-primary py-3 rounded-md shadow-sm"
        >
          Request Quote
        </button>
        <a 
          href="https://wa.me/919751458300" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#20bd5a] px-6 py-3 font-semibold text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
