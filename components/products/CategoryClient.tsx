"use client";

/* Hallmark · component: CategoryClient · genre: modern-minimal · theme: catalog (preserved) 
 * states: default · hover · focus 
 * contrast: pass
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Filter, SlidersHorizontal, CheckSquare, Square, ArrowRight, ArrowRightLeft, X, Layers, ChevronDown, Check } from "lucide-react";
import InlineCtaBlock from "@/components/forms/InlineCtaBlock";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function CategoryClient({ category, products }: { category: any, products: any[] }) {
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedStandards, setSelectedStandards] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((x) => x !== id));
    } else if (compareIds.length < 3) {
      setCompareIds([...compareIds, id]);
    }
  };

  const clearCompare = () => setCompareIds([]);

  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Find all unique standards in current products
  const dynamicStandards = Array.from(
    new Set(
      products
        .flatMap((p) => p.standardsSupported || [])
        .filter(Boolean)
    )
  );

  const standardsList = dynamicStandards.length > 0 
    ? dynamicStandards 
    : ["ASTM E-18", "ISO 6508", "JIS Z2245"];

  const toggleStandard = (std: string) => {
    if (selectedStandards.includes(std)) {
      setSelectedStandards(selectedStandards.filter((s) => s !== std));
    } else {
      setSelectedStandards([...selectedStandards, std]);
    }
  };

  const filteredProducts = products.filter((product) => {
    // 1. Filter by Active Filter (Type of model)
    if (activeFilter !== "All") {
      const searchString = `
        ${product.name || ""} 
        ${product.description || ""} 
        ${product.model || ""} 
        ${product.modelCode || ""}
        ${Object.values(product.specifications || {}).join(" ")}
      `.toLowerCase();
      
      if (!searchString.includes(activeFilter.toLowerCase())) {
        return false;
      }
    }

    // 2. Filter by Selected Industry Standards
    if (selectedStandards.length > 0) {
      const productStds = product.standardsSupported || [];
      
      if (productStds.length > 0) {
        const hasMatchingStandard = productStds.some((pStd) =>
          selectedStandards.some(
            (sStd) => normalize(pStd) === normalize(sStd) || pStd.toLowerCase().includes(sStd.toLowerCase()) || sStd.toLowerCase().includes(pStd.toLowerCase())
          )
        );
        if (!hasMatchingStandard) return false;
      } else {
        const searchString = `
          ${product.name || ""} 
          ${product.description || ""} 
          ${product.model || ""} 
          ${product.modelCode || ""}
          ${Object.values(product.specifications || {}).join(" ")}
        `.toLowerCase();
        
        const hasMatchingStandard = selectedStandards.some((sStd) => {
          const normStd = normalize(sStd);
          const normSearch = normalize(searchString);
          return normSearch.includes(normStd) || searchString.includes(sStd.toLowerCase());
        });
        
        if (!hasMatchingStandard) return false;
      }
    }

    return true;
  });

  return (
    <div className="container mx-auto px-6 lg:px-12 pt-8 pb-16 md:py-16">
      {/* Breadcrumbs */}
      <AnimatedSection>
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Catalogue</Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-12 md:mb-16">
          <span className="eyebrow text-hero-accent block mb-4">Category</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">{category.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Mobile Filter Dropdown */}
          <div className="lg:hidden w-full mb-6 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Filter by Type</label>
              <div className="relative">
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="w-full appearance-none bg-background border border-border rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-hero-accent transition-all shadow-sm"
                >
                  {["All", "Digital", "Analogue", "Touchscreen", "Automatic"].map((filter) => (
                    <option key={filter} value={filter}>
                      {filter === "All" ? "All Models" : `${filter} Models`}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Mobile Standards Filter */}
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">Filter by Standard</label>
                {(activeFilter !== "All" || selectedStandards.length > 0) && (
                  <button
                    onClick={() => {
                      setActiveFilter("All");
                      setSelectedStandards([]);
                    }}
                    className="text-xs text-hero-accent font-semibold hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {standardsList.map((std) => {
                  const isSelected = selectedStandards.includes(std);
                  return (
                    <button
                      key={std}
                      onClick={() => toggleStandard(std)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-hero-accent ${
                        isSelected
                          ? "bg-hero-accent border-hero-accent text-white"
                          : "bg-background border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {std}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar Filters Desktop */}
          <div className="hidden lg:block w-full lg:w-64 shrink-0 lg:sticky lg:top-24 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </h3>
                {(activeFilter !== "All" || selectedStandards.length > 0) && (
                  <button
                    onClick={() => {
                      setActiveFilter("All");
                      setSelectedStandards([]);
                    }}
                    className="text-xs text-hero-accent hover:underline font-semibold transition-all"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-2">
                {["All", "Digital", "Analogue", "Touchscreen", "Automatic"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-left px-3 py-2 rounded-md text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      activeFilter === filter 
                        ? "bg-muted text-foreground font-semibold" 
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Industry Standard
              </h3>
              <div className="flex flex-col gap-3">
                {standardsList.map((std) => {
                  const isSelected = selectedStandards.includes(std);
                  return (
                    <button
                      key={std}
                      onClick={() => toggleStandard(std)}
                      className="flex items-center gap-3 cursor-pointer group text-left w-full focus:outline-none"
                    >
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                        isSelected 
                          ? "border-hero-accent bg-hero-accent text-white" 
                          : "border-border group-hover:border-hero-accent"
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={`text-sm transition-colors ${
                        isSelected ? "text-foreground font-semibold" : "text-muted-foreground group-hover:text-foreground"
                      }`}>{std}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-card border border-border rounded-xl">
                <p className="text-lg text-muted-foreground">No products found matching the selected filters.</p>
                <button 
                  onClick={() => {
                    setActiveFilter("All");
                    setSelectedStandards([]);
                  }}
                  className="mt-4 text-hero-accent font-semibold hover:underline animate-button-scale"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const variantCount = product.variants?.length || 0;
                  const isCompared = compareIds.includes(product.id);
                  
                  return (
                    <div
                      key={product.id}
                      className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-hero-accent/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                    >
                      {/* Compare Checkbox */}
                      <button
                        type="button"
                        onClick={() => toggleCompare(product.id)}
                        className={`absolute z-20 m-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          isCompared
                            ? "bg-foreground text-background"
                            : "bg-background/80 text-foreground border border-border/50 hover:bg-background"
                        }`}
                      >
                        {isCompared ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                        {isCompared ? "Compared" : "Compare"}
                      </button>
                      
                      {/* Image Area */}
                      <Link
                        href={`/products/${product.categorySlug}/${product.slug}`}
                        className="aspect-[4/3] bg-muted/30 p-8 flex items-center justify-center relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent z-10" />
                        {product.image ? (
                          <div className="w-full h-full relative z-0 transform transition-transform duration-700 group-hover:scale-105">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain p-4"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground rounded text-xs">
                            No Image
                          </div>
                        )}
                        {variantCount > 0 && (
                          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-background/90 text-xs font-medium text-foreground backdrop-blur-sm shadow-sm border border-border/50">
                            <Layers className="w-3.5 h-3.5 text-muted-foreground" />
                            {variantCount} {variantCount === 1 ? 'Variant' : 'Variants'}
                          </div>
                        )}
                      </Link>
                      
                      {/* Card Content */}
                      <div className="p-4 md:p-6 flex flex-col flex-1 border-t border-border">
                        <div className="flex-1">
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                            {product.model || product.modelCode}
                          </p>
                          <h2 className="text-base md:text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-hero-accent transition-colors">
                            {product.name}
                          </h2>
                          <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                            {Object.entries(product.specifications || {}).slice(0, 3).map(([k, v]) => (
                              <div key={k} className="flex items-center justify-between text-xs py-1 border-b border-border/50 last:border-0">
                                <span className="text-muted-foreground">{k}</span>
                                <span className="font-medium text-foreground text-right ml-4 truncate">{String(v)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto flex flex-col gap-2">
                          <Link
                            href={`/products/${product.categorySlug}/${product.slug}`}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-hero-accent hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring btn-mobile-press"
                          >
                            View Series Details <ArrowRight className="w-4 h-4" />
                          </Link>
                          {/* Quick Mobile Actions */}
                          <div className="grid grid-cols-2 gap-2 lg:hidden">
                            <a 
                              href={`https://wa.me/919751458300?text=Hi, I am interested in ${product.name}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-[#25D366] text-[#25D366] bg-[#25D366]/5 px-3 py-2 text-xs font-semibold btn-mobile-press"
                            >
                              WhatsApp
                            </a>
                            <a 
                              href="#"
                              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border text-foreground px-3 py-2 text-xs font-semibold btn-mobile-press"
                            >
                              Brochure
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-16">
                <InlineCtaBlock
                  title="Need support choosing the right model?"
                  description="Share your test standard and sample type. We will shortlist the right configuration."
                  primaryCta="Get Recommendation"
                  secondaryCta="Talk to Engineer"
                />
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Sticky Compare Bar */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-[80px] md:bottom-0 left-0 right-0 z-50 p-4 transform transition-all duration-300 translate-y-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-foreground text-background rounded-xl shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-foreground/90">
              <div className="flex items-center gap-4">
                <div className="bg-background/10 p-2 rounded-lg">
                  <ArrowRightLeft className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Compare Models</h4>
                  <p className="text-xs text-background/70">{compareIds.length} of 3 selected</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={clearCompare}
                  className="px-4 py-2 text-sm font-medium text-background/80 hover:text-background transition-colors outline-none focus-visible:underline"
                >
                  Clear All
                </button>
                <Link
                  href={`/products/compare?ids=${compareIds.join(",")}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-background"
                >
                  View Comparison
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
