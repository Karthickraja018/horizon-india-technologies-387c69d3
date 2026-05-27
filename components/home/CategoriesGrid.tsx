"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector, Package } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import type { Category } from "@/types";

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

interface CategoriesGridProps {
  categories?: Category[];
}

const CategoriesGrid = ({ categories = [] }: CategoriesGridProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  const totalProducts = categories.reduce((sum, c) => sum + c.productCount, 0);

  return (
    <section className="bg-background py-24 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow text-hero-accent block mb-3">Our Range</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Product Categories</h2>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-hero-accent hover:text-hero-accent/80 transition-colors mr-4"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted hover:border-foreground/20 transition-all shadow-sm"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted hover:border-foreground/20 transition-all shadow-sm"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="-mx-6 lg:-mx-12 px-6 lg:px-12 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex gap-6 min-w-max">
                {categories.map((cat) => {
                  const Icon = SLUG_ICON_MAP[cat.slug] || Package;

                  return (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="group bg-card border border-border rounded-xl w-[280px] shrink-0 snap-start flex flex-col overflow-hidden hover:border-hero-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] bg-muted/30 border-b border-border flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-hero-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Icon className="w-16 h-16 text-muted-foreground/50 group-hover:text-hero-accent group-hover:scale-110 transition-all duration-500 relative z-10" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-hero-accent transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                          {cat.description || `Explore our high-precision ${cat.name.toLowerCase()} for industrial QA.`}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                            {cat.productCount} Models
                          </span>
                          <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-hero-accent group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}

                {/* End Card */}
                {categories.length > 0 && (
                  <Link
                    href="/products"
                    className="group bg-muted/10 border-2 border-dashed border-border rounded-xl w-[280px] shrink-0 snap-start flex flex-col items-center justify-center text-center p-8 hover:bg-muted/30 hover:border-hero-accent/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mb-6 group-hover:border-hero-accent group-hover:text-hero-accent transition-colors">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <span className="eyebrow block mb-2">Full Catalogue</span>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-hero-accent transition-colors">
                      View All Categories
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {totalProducts}+ models across {categories.length} categories
                    </p>
                  </Link>
                )}
              </div>
            </div>
            
            {/* Fade Edges for Desktop */}
            <div className="hidden lg:block absolute inset-y-0 -left-6 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="hidden lg:block absolute inset-y-0 -right-6 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          </div>
        </AnimatedSection>
        
        <div className="mt-6 text-center sm:hidden">
           <Link href="/products" className="btn-outline w-full justify-center text-sm py-3 rounded-lg">
             View All Categories
           </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
