import type { Metadata } from "next";
import Link from "next/link";
import { Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector, Package, ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import { getCategories } from "@/lib/api";
import AnimatedSection from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: "Products Catalogue | Horizon India Technologies",
  description:
    "Browse our premium range of industrial testing equipment, metrology tools, and quality control systems.",
};

const iconMap: Record<string, React.ElementType> = {
  Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector, Package,
};

export default async function ProductsPage() {
  const categories = await getCategories();
  
  // Calculate total products to show in stats
  const totalProducts = categories.reduce((sum, cat) => sum + (cat.productCount || 0), 0);
  
  return (
    <div className="bg-background min-h-screen pt-8 md:pt-16 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <AnimatedSection>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Catalogue</span>
          </div>
        </AnimatedSection>

        {/* Industrial Catalogue Hero */}
        <AnimatedSection className="mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <p className="eyebrow mb-4 text-hero-accent">Equipment Catalogue</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Industrial Precision.
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Engineered for exactness. Discover our complete range of material testing, metrology, and quality control equipment for the modern shop floor.
              </p>
            </div>
            
            {/* Category Stats Strip (T4 Numbered stat strip variant) */}
            <div className="grid grid-cols-2 gap-8 border-l-2 border-border pl-8 py-2">
              <div>
                <p className="text-4xl font-bold tracking-tighter text-foreground mb-1">{categories.length}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Categories</p>
              </div>
              <div>
                <p className="text-4xl font-bold tracking-tighter text-foreground mb-1">{totalProducts}+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Instruments</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Masonry-inspired Category Grid (F1 Bento variant) */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Gauge;
              
              // Make every 4th item span 2 columns on large screens for a masonry/bento feel
              const isLarge = i % 4 === 0 || i % 4 === 3;
              
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className={`group relative bg-card border border-border p-8 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-hero-accent/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-hero-accent ${
                    isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:text-hero-accent group-hover:bg-hero-accent/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground bg-background border border-border px-2 py-1 rounded-sm shadow-sm group-hover:border-hero-accent/30 transition-colors">
                      {cat.productCount} Series
                    </span>
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-hero-accent transition-colors">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 pr-12">
                      {cat.description}
                    </p>
                  </div>
                  
                  {/* Decorative background accent on hover */}
                  <div className="absolute right-0 bottom-0 p-8 translate-x-8 translate-y-8 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:translate-x-4 group-hover:translate-y-4">
                    <Icon className="w-32 h-32" />
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
        
      </div>
    </div>
  );
}
