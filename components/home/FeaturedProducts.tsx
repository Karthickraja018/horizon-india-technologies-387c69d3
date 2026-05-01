"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/constants/data";
import { ArrowRight, ChevronLeft, ChevronRight, Activity, Cpu } from "lucide-react";
import { useQuoteModal } from "@/providers/QuoteModalContext";

const featuredProducts = products.slice(0, 4);

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  // Auto-slide timing: 4s
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  const product = featuredProducts[activeIndex];

  const fadeVariants = {
    enter: { opacity: 0, x: -10 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.98 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  return (
    <section id="featured-products" className="relative min-h-[80vh] bg-background overflow-hidden border-y border-border">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="relative z-10 container mx-auto px-6 lg:px-12 flex items-center min-h-[80vh]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Changed to a 12-column grid for the uneven split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full py-20">

          {/* Left: Text & Specs (Takes up 5 out of 12 columns - roughly 40%) */}
          <div className="order-2 lg:order-1 lg:col-span-5 min-h-[420px] flex flex-col justify-center">

            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Top Picks</span>
              <h2 className="text-2xl font-medium text-slate-700 mt-1">Featured Products</h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                variants={fadeVariants}
              >
                <div className="mb-6">
                  <span className="inline-block text-hero-accent font-bold text-xs tracking-[0.15em] uppercase mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                    {product.name}
                  </h3>
                </div>

                <div className="mb-6 border-l-4 border-hero-accent pl-4 py-1">
                  <p className="text-slate-800 text-lg font-medium leading-snug">
                    Ideal for {product.applications.join(", ").toLowerCase()}
                  </p>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
                  {product.description}
                </p>

                {/* Quick Specs - 3 Items Max */}
                <div className="mb-10 flex flex-col gap-2 max-w-md">
                  {Object.entries(product.specifications).slice(0, 3).map(([key, val], idx) => (
                    <div key={idx} className="text-sm md:text-base text-slate-700">
                      <span className="font-bold text-slate-900 mr-2">{key}:</span>
                      <span className="text-slate-600">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({
                      productName: product.name,
                      model: product.model,
                      category: product.category
                    })}
                    className="btn-primary px-8 py-3.5 font-semibold rounded shadow transition-opacity hover:opacity-90 w-full sm:w-auto text-center flex items-center justify-center whitespace-nowrap"
                  >
                    Request a Quote
                  </button>
                  <Link
                    href={`/products/${product.categorySlug}/${product.slug}`}
                    className="bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-8 py-3.5 font-semibold rounded transition-colors w-full sm:w-auto text-center flex items-center justify-center whitespace-nowrap"
                  >
                    Talk to an Engineer
                  </Link>
                </div>

                <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                  <span className="text-green-500 font-bold text-lg leading-none">✔</span>
                  Used in 300+ labs • NABL-compliant • 25+ yrs experience
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Product Image & Nav (Takes up 7 out of 12 columns - roughly 60%) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[600px] w-full">
            <div className="relative w-full group h-full flex flex-col justify-center">

              <div className="relative rounded-2xl p-8 lg:p-16 overflow-hidden bg-white flex-grow flex items-center justify-center cursor-pointer w-full aspect-square md:aspect-video lg:aspect-auto lg:h-[500px]">

                {/* Product Name On Image */}
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20 pointer-events-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`info-${activeIndex}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <h3 className="text-sm font-semibold tracking-widest uppercase text-white bg-slate-900/90 backdrop-blur-sm px-5 py-2.5 rounded shadow-lg border border-slate-700/50">
                        {product.name}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Left Arrow Navigation */}
                <div className="absolute inset-y-0 left-4 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((i) => (i - 1 + featuredProducts.length) % featuredProducts.length);
                    }}
                    className="p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-hero-accent backdrop-blur-sm shadow-md border border-slate-100 transition-all hover:scale-110"
                    aria-label="Previous product"
                  >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>

                {/* Right Arrow Navigation */}
                <div className="absolute inset-y-0 right-4 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((i) => (i + 1) % featuredProducts.length);
                    }}
                    className="p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-hero-accent backdrop-blur-sm shadow-md border border-slate-100 transition-all hover:scale-110"
                    aria-label="Next product"
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                    className="w-full h-full flex items-center justify-center lg:p-8"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={1000}
                      height={1000}
                      loading="eager"
                      className="w-full h-full object-contain max-h-[400px] lg:max-h-[450px] transition-transform duration-1000 group-hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Industry Tags Overlaid */}
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-20 pointer-events-none hidden sm:block">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`tags-${activeIndex}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                      className="flex items-center text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] text-slate-500 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded shadow-sm border border-slate-100"
                    >
                      {product.applications.slice(0, 3).map((app, i, arr) => (
                        <span key={i} className="flex items-center">
                          {app}
                          {i < arr.length - 1 && <span className="mx-3 text-slate-300">•</span>}
                        </span>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Minimal Dot Indicators */}
              <div className="flex justify-center items-center gap-3 mt-8">
                {featuredProducts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 transition-all duration-500 rounded-full ${i === activeIndex
                        ? "w-10 bg-hero-accent"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;