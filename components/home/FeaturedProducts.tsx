"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Package, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/providers/QuoteModalContext";
import type { Product } from "@/types";
import AnimatedSection from "@/components/common/AnimatedSection";

interface FeaturedProductsProps {
  products?: Product[];
}

const FeaturedProducts = ({ products = [] }: FeaturedProductsProps) => {
  const featuredProducts = products.slice(0, 6);
  if (featuredProducts.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  const product = featuredProducts[activeIndex];

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <section className="bg-muted/30 border-y border-border py-16 lg:py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
        
        <AnimatedSection className="mb-12">
          <span className="eyebrow text-hero-accent block mb-3">Top Picks</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
        </AnimatedSection>

        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col-reverse lg:flex-row">
          
          {/* Left Text Side */}
          <div className="lg:w-5/12 p-6 lg:p-12 flex flex-col justify-center bg-card border-t lg:border-t-0 lg:border-r border-border relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full"
              >
                <div className="mb-6">
                  <span className="inline-block text-hero-accent font-bold text-[10px] tracking-widest uppercase mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-3xl font-bold text-foreground leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mt-2">{product.model}</p>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                  {product.shortDescription || product.description}
                </p>

                <div className="space-y-3 mb-8">
                  {Object.entries(product.specifications || {}).slice(0, 3).map(([key, val], idx) => (
                    <div key={idx} className="flex flex-col border-l-2 border-border pl-3">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">{key}</span>
                      <span className="text-sm font-semibold text-foreground">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({
                      productName: product.name,
                      model: product.model,
                      category: product.category
                    })}
                    className="btn-primary px-6 py-3 text-sm rounded-lg flex-1"
                  >
                    Request Quote
                  </button>
                  <Link
                    href={`/products/${product.categorySlug}/${product.slug}`}
                    className="btn-outline bg-background px-6 py-3 text-sm rounded-lg flex-1 flex items-center justify-center gap-2 group"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Side */}
          <div className="lg:w-7/12 relative bg-white flex items-center justify-center min-h-[400px] lg:min-h-0">
            
            {/* Nav Arrows */}
            <div className="absolute inset-x-4 flex justify-between z-30">
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i - 1 + featuredProducts.length) % featuredProducts.length)}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:text-hero-accent hover:border-hero-accent shadow-sm transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i + 1) % featuredProducts.length)}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:text-hero-accent hover:border-hero-accent shadow-sm transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 p-12 flex items-center justify-center"
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-muted-foreground/30">
                    <Package className="w-24 h-24 mb-4" />
                    <span>No image provided</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
              {featuredProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? "w-8 bg-hero-accent" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;