"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import BrandLogo from "@/components/BrandLogo";
import { categories } from "@/data/products";

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

  // Detect scroll to add a stronger shadow and slight visual shrink
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${
        isScrolled ? "top-4 px-4" : "top-0 px-0"
      }`}
    >
      {/* pointer-events-auto allows the nav to be clicked. */}
      <nav
        className={`pointer-events-auto w-full flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "max-w-6xl px-6 lg:px-8 rounded-full border border-gray-100 bg-white/95 backdrop-blur-md shadow-md py-3"
            : "max-w-full px-6 lg:px-12 rounded-none border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm py-4"
        }`}
      >
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 select-none">
          <BrandLogo size={isScrolled ? "sm" : "md"} className="transition-all duration-300" />
        </Link>

        {/* Center: Full Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link
            href="/"
            className={`transition-colors py-2 ${isActive("/") ? "text-hero-accent" : "hover:text-hero-accent"}`}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative flex items-center h-full"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className={`transition-colors flex items-center gap-1 py-2 ${
                isActive("/products") ? "text-hero-accent" : "hover:text-hero-accent"
              }`}
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.12)] py-2 transition-all duration-200 z-50 overflow-hidden ${
                productsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="block px-5 py-2 text-slate-600 hover:text-hero-accent hover:bg-slate-50 transition-colors duration-200 text-sm"
                >
                  {cat.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 mt-1 pt-1">
                <Link
                  href="/products"
                  className="block px-5 py-2 text-hero-accent font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  View All Products →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/services/calibration-services-chennai"
            className={`transition-colors py-2 ${
              isActive("/services/calibration-services-chennai")
                ? "text-hero-accent"
                : "hover:text-hero-accent"
            }`}
          >
            Calibration
          </Link>
          <Link
            href="/about"
            className={`transition-colors py-2 ${isActive("/about") ? "text-hero-accent" : "hover:text-hero-accent"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`transition-colors py-2 ${isActive("/contact") ? "text-hero-accent" : "hover:text-hero-accent"}`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side: CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="hidden md:inline-flex bg-hero-accent hover:bg-hero-accent/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 shadow-sm shadow-hero-accent/20"
          >
            Get Quote
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-slate-700 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2 pointer-events-auto md:hidden overflow-hidden">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2 font-medium rounded-lg ${isActive("/") ? "bg-slate-50 text-hero-accent" : "text-slate-800 hover:bg-slate-50"}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2 font-medium rounded-lg ${isActive("/products") ? "bg-slate-50 text-hero-accent" : "text-slate-800 hover:bg-slate-50"}`}
          >
            Products
          </Link>
          <Link
            href="/services/calibration-services-chennai"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2 font-medium rounded-lg ${isActive("/services/calibration-services-chennai") ? "bg-slate-50 text-hero-accent" : "text-slate-800 hover:bg-slate-50"}`}
          >
            Calibration
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2 font-medium rounded-lg ${isActive("/about") ? "bg-slate-50 text-hero-accent" : "text-slate-800 hover:bg-slate-50"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2 font-medium rounded-lg ${isActive("/contact") ? "bg-slate-50 text-hero-accent" : "text-slate-800 hover:bg-slate-50"}`}
          >
            Contact
          </Link>

          <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 mt-1">
            <a href="tel:+919751458300" className="p-2 text-slate-600 font-medium flex items-center gap-3">
              <span className="bg-slate-50 p-1.5 rounded-full text-hero-accent">
                <Phone className="w-4 h-4" />
              </span>
              +91 97514 58300
            </a>
            <a
              href="mailto:horizonindiatechnologies@gmail.com"
              className="p-2 text-slate-600 font-medium flex items-center gap-3"
            >
              <span className="bg-slate-50 p-1.5 rounded-full text-hero-accent">
                <Mail className="w-4 h-4" />
              </span>
              Email Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              openQuoteModal();
            }}
            className="w-full btn-primary py-3 rounded-xl font-semibold mt-2"
          >
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
