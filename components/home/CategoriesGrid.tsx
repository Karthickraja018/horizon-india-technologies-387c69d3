"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector, Package } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

import type { Category } from "@/types";

// Icon mapping by category slug for icon-only fallback
const SLUG_ICON_MAP: Record<string, React.ElementType> = {
  "hardness-testing": Gauge,
  "universal-testing-machines": ArrowUpDown,
  "sand-testing": FlaskConical,
  "metrology": Ruler,
  "ndt-equipment": ScanSearch,
  "impact-testing": Hammer,
  "civil-lab": Building2,
  "microscopes": Microscope,
  "cutting-tools": Scissors,
  "projectors": Projector,
};

// Gradient palette per category slug for the icon tile background
const SLUG_GRADIENT_MAP: Record<string, string> = {
  "hardness-testing": "from-blue-50 to-blue-100",
  "universal-testing-machines": "from-slate-50 to-slate-100",
  "sand-testing": "from-amber-50 to-amber-100",
  "metrology": "from-violet-50 to-violet-100",
  "ndt-equipment": "from-cyan-50 to-cyan-100",
  "impact-testing": "from-red-50 to-red-100",
  "civil-lab": "from-emerald-50 to-emerald-100",
  "microscopes": "from-indigo-50 to-indigo-100",
};

interface CategoriesGridProps {
  categories?: Category[];
}

const CategoriesGrid = ({ categories = [] }: CategoriesGridProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // Total product count across shown categories
  const totalProducts = categories.reduce((sum, c) => sum + c.productCount, 0);

  return (
    <section className="section-base">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow">Our Range</span>
              <h2 className="h2 mt-2">Product Categories</h2>
              <p className="text-body-sm mt-2 max-w-xl">
                Material testing, metrology, and quality control equipment for every industry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6 w-full sm:w-auto">
              <Link
                href="/products"
                className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all order-2 sm:order-1 self-start sm:self-auto"
              >
                View all categories <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex gap-2 order-1 sm:order-2 self-end sm:self-auto">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 shadow-sm hover:shadow"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 shadow-sm hover:shadow"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative group">
            <div
              ref={scrollContainerRef}
              className="-mx-6 lg:-mx-12 px-6 lg:px-12 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex gap-4 min-w-max">
                {categories.map((cat) => {
                  const Icon = SLUG_ICON_MAP[cat.slug] || Package;
                  const gradient = SLUG_GRADIENT_MAP[cat.slug] || "from-slate-50 to-slate-100";

                  return (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="group surface-card animate-card-lift overflow-hidden flex flex-col w-[260px] sm:w-[280px] shrink-0 snap-start"
                    >
                      {/* Icon tile */}
                      <div className={`aspect-[4/3] border-b border-border flex items-center justify-center overflow-hidden relative bg-gradient-to-br ${gradient}`}>
                        <div className="flex flex-col items-center justify-center gap-3 p-6 w-full h-full">
                          <div className="w-14 h-14 rounded-xl bg-white/70 border border-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-hero-accent" />
                          </div>
                          <span className="text-xs font-semibold text-hero-muted uppercase tracking-wider text-center leading-tight">
                            {cat.name}
                          </span>
                        </div>
                      </div>

                      {/* Text */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-gray-900 font-semibold text-base mb-1 group-hover:text-hero-accent transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-body-sm line-clamp-2 flex-1">
                          {cat.description || `${cat.productCount} product${cat.productCount !== 1 ? 's' : ''} available`}
                        </p>
                        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                          <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                            {cat.productCount} model{cat.productCount !== 1 ? 's' : ''}
                          </span>
                          <span className="text-hero-accent text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                            View <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}

                {/* "View all" end card */}
                {categories.length > 0 && (
                  <Link
                    href="/products"
                    className="group surface-card animate-card-lift border-dashed flex flex-col items-center justify-center text-center w-[260px] sm:w-[280px] shrink-0 snap-start p-6"
                  >
                    <span className="eyebrow mb-2">Full Catalogue</span>
                    <p className="text-gray-900 font-semibold text-base mb-1 group-hover:text-hero-accent transition-colors">
                      Explore all categories
                    </p>
                    <p className="text-body-sm">
                      {categories.length} categories · {totalProducts}+ models
                    </p>
                    <span className="text-hero-accent text-xs font-semibold inline-flex items-center gap-1 mt-3 group-hover:gap-1.5 transition-all">
                      Browse all <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CategoriesGrid;
