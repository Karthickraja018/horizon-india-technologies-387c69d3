"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";

import BrandLogo from "@/components/common/BrandLogo";
import { categories as fallbackCategories } from "@/constants/data";
import { useQuoteModal } from "@/providers/QuoteModalContext";

const SCROLL_THRESHOLD_PX = 80;
// Keep this value in sync with Layout's top padding.
const NAVBAR_HEIGHT_PX = 88;

function useFloatingNav(thresholdPx = SCROLL_THRESHOLD_PX) {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const read = () => {
      rafId = 0;
      setIsFloating(window.scrollY > thresholdPx);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(read);
    };

    // Initialize immediately (covers refresh mid-scroll)
    read();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [thresholdPx]);

  return isFloating;
}

export default function Navbar({ categories = fallbackCategories }) {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const shouldReduceMotion = useReducedMotion();

  const isFloating = useFloatingNav(SCROLL_THRESHOLD_PX);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsCloseTimeoutRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (productsCloseTimeoutRef.current) window.clearTimeout(productsCloseTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const activeFloating = isFloating && !isMobile;

  const openProducts = () => {
    if (productsCloseTimeoutRef.current) window.clearTimeout(productsCloseTimeoutRef.current);
    setProductsOpen(true);
  };

  const closeProductsSoon = () => {
    if (productsCloseTimeoutRef.current) window.clearTimeout(productsCloseTimeoutRef.current);
    productsCloseTimeoutRef.current = window.setTimeout(() => setProductsOpen(false), 120);
  };

  const navItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products", isDropdown: true },
      { href: "/services/calibration-services-chennai", label: "Calibration" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  const isActive = (path) => {
    if (path === "/products") return pathname?.startsWith("/products");
    return pathname === path;
  };

  const shellMotion = shouldReduceMotion
    ? {}
    : {
        animate: activeFloating
          ? {
              y: 10,
              scale: 0.96,
              opacity: 1,
            }
          : {
              y: 0,
              scale: 1,
              opacity: 1,
            },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      };

  const islandMotion = shouldReduceMotion
    ? {}
    : {
        animate: activeFloating
          ? {
              borderRadius: 9999,
              // visually "shorter" without layout shift (shell stays 88px)
              scaleY: 0.78,
              opacity: 1,
            }
          : {
              borderRadius: 16,
              scaleY: 1,
              opacity: 1,
            },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Full-width sticky bar (top state). Island appears only after scroll. */}
        <div
          className={[
            "absolute inset-0 z-0 transition-all duration-300 pointer-events-none",
            activeFloating ? "bg-transparent" : "bg-white border-b border-slate-200/60 shadow-sm",
          ].join(" ")}
        />

        <motion.div className="w-full relative z-10" {...shellMotion}>
          <div className="w-full flex justify-center px-4">
            <motion.div
              className={[
                "w-full origin-top",
                // NOTE: must be a static Tailwind class (no template strings),
                // otherwise the height utility won't be generated in production builds.
                "h-[88px]",
                // Allow dropdowns to escape the navbar shell.
                "overflow-visible",
                "transition-all duration-300",
                activeFloating
                  ? "max-w-5xl bg-white shadow-[0_12px_36px_rgba(15,23,42,0.14)] border border-slate-200/70 ring-1 ring-black/5"
                  : "max-w-none bg-transparent border border-transparent shadow-none",
              ].join(" ")}
              style={{
                // Ensure the "island" width shrink is visible even on < 5xl viewports.
                width: activeFloating ? "calc(100% - 2rem)" : "100%",
                maxWidth: activeFloating ? "64rem" : "none",
                height: `${NAVBAR_HEIGHT_PX}px`,
              }}
              {...islandMotion}
            >
              <nav className="h-full px-6 sm:px-8">
                <div className="h-full flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
                {/* Left: Logo */}
                <div className="flex items-center justify-start min-w-0">
                  <Link href="/" className="inline-flex items-center flex-shrink-0 select-none">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : { scale: activeFloating ? 0.94 : 1.04 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <BrandLogo size="lg" />
                    </motion.div>
                  </Link>
                </div>

                {/* Center: Links */}
                <div className="hidden md:flex items-center justify-center gap-6 text-sm font-medium text-slate-700">
                  {navItems.map((item) => {
                    if (!item.isDropdown) {
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={[
                            "transition-colors text-[15px] leading-none",
                            isActive(item.href) ? "text-hero-accent" : "hover:text-hero-accent",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={item.href}
                        className="relative flex items-center"
                        onMouseEnter={openProducts}
                        onMouseLeave={closeProductsSoon}
                      >
                        <Link
                          href="/products"
                          className={[
                            "transition-colors flex items-center gap-1 text-[15px] leading-none",
                            isActive("/products") ? "text-hero-accent" : "hover:text-hero-accent",
                          ].join(" ")}
                        >
                          Products
                          <ChevronDown
                            className={[
                              "w-3.5 h-3.5 transition-transform duration-200",
                              productsOpen ? "rotate-180" : "",
                            ].join(" ")}
                          />
                        </Link>

                        <div
                          className={[
                            "absolute left-1/2 top-full mt-3 -translate-x-1/2 w-72",
                            "bg-white border border-slate-200 rounded-2xl",
                            "shadow-[0_18px_55px_rgba(15,23,42,0.14)]",
                            "py-2 z-50 overflow-hidden",
                            "transition-all duration-200",
                            productsOpen
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2 pointer-events-none",
                          ].join(" ")}
                          onMouseEnter={openProducts}
                          onMouseLeave={closeProductsSoon}
                        >
                          {categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products/${cat.slug}`}
                              className="block px-5 py-2 text-slate-700 hover:text-hero-accent hover:bg-slate-50/80 transition-colors duration-200 text-sm"
                            >
                              {cat.name}
                            </Link>
                          ))}
                          <div className="border-t border-slate-100 mt-1 pt-1">
                            <Link
                              href="/products"
                              className="block px-5 py-2 text-hero-accent font-semibold text-sm hover:bg-slate-50/80 transition-colors"
                            >
                              View All Products →
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right: CTA + mobile toggle */}
                <div className="flex items-center justify-end gap-3">
                  <motion.button
                    type="button"
                    onClick={() => openQuoteModal()}
                    className={[
                      "hidden md:inline-flex items-center justify-center",
                      "bg-hero-accent hover:bg-hero-accent/90 text-white",
                      "px-5 py-2.5 rounded-md text-[15px] font-semibold",
                      "transition-colors",
                    ].join(" ")}
                    animate={shouldReduceMotion ? undefined : { scale: activeFloating ? 0.96 : 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Get Quote
                  </motion.button>

                  <button
                    type="button"
                    className={[
                      "md:hidden inline-flex items-center justify-center",
                      "h-10 w-10 rounded-full",
                      activeFloating ? "bg-white/70 backdrop-blur border border-slate-200/70" : "bg-white border border-slate-200/60",
                      "text-slate-800 transition-colors",
                    ].join(" ")}
                    onClick={() => setMobileMenuOpen((v) => !v)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
                </div>
              </nav>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu (Slide-in Drawer) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={shouldReduceMotion ? undefined : { x: "100%" }}
              animate={shouldReduceMotion ? undefined : { x: 0 }}
              exit={shouldReduceMotion ? undefined : { x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-background border-l border-border z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-border h-[88px]">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="touch-target rounded-full bg-slate-100 flex items-center justify-center btn-mobile-press"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-2 pb-[120px]">
                {navItems.map((item) => {
                  if (item.isDropdown) {
                    return (
                      <div key={item.href} className="border-b border-border/50 pb-2 mb-2">
                        <button
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          className="flex items-center justify-between w-full p-3 font-semibold text-left rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <span className={isActive("/products") ? "text-hero-accent" : "text-slate-900"}>
                            Products
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-2 pb-2 space-y-1">
                                {categories.map((cat) => (
                                  <Link
                                    key={cat.slug}
                                    href={`/products/${cat.slug}`}
                                    className="block p-3 rounded-lg text-sm text-slate-600 hover:text-hero-accent hover:bg-slate-50 font-medium"
                                  >
                                    {cat.name}
                                  </Link>
                                ))}
                                <div className="mt-2 pt-2 border-t border-border/50">
                                  <Link
                                    href="/products"
                                    className="flex items-center justify-between p-3 rounded-lg text-sm font-bold text-hero-accent hover:bg-hero-accent/10"
                                  >
                                    View All Products
                                    <ChevronRight className="w-4 h-4" />
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "p-3 rounded-lg font-semibold border-b border-border/50 mb-1",
                        isActive(item.href)
                          ? "text-hero-accent bg-hero-accent/5"
                          : "text-slate-900 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

