import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight, Search } from "lucide-react"; // Imported Search icon
import { useQuoteModal } from "@/context/QuoteModalContext";

const featuredProducts = products.slice(0, 4);

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featuredProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  const product = featuredProducts[activeIndex];

  const fadeVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20">
          
          {/* Left: Text */}
          <div className="order-2 lg:order-1 min-h-[420px] flex flex-col justify-center">
            
            {/* IMPROVEMENT: Demoted Section Header visual weight */}
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
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={fadeVariants}
              >
                <span className="inline-block text-hero-accent font-semibold text-sm tracking-widest uppercase mb-3">
                  {product.category}
                </span>

                {/* IMPROVEMENT: Promoted Product Name to be the massive focal point */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
                  {product.name}
                </h3>

                <p className="text-slate-700 text-lg md:text-xl font-medium mb-6 border-l-4 border-hero-accent pl-4">
                  Ideal for {product.applications.join(", ").toLowerCase()}
                </p>

                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
                  {product.description}
                </p>

                {/* Quick Specs */}
                <div className="mb-10 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Quick Specs</span>
                  <ul className="space-y-3">
                    {Object.entries(product.specifications).slice(0, 2).map(([key, val], idx) => (
                      <li key={idx} className="flex items-start text-sm md:text-base text-slate-700">
                        <ArrowRight className="w-4 h-4 text-hero-accent mt-1 mr-3 flex-shrink-0" />
                        <span className="font-semibold text-slate-900 min-w-[120px]">{key}</span> 
                        <span>{val}</span>
                      </li>
                    ))}
                    {product.features.length > 0 && (
                      <li className="flex items-start text-sm md:text-base text-slate-700">
                        <ArrowRight className="w-4 h-4 text-hero-accent mt-1 mr-3 flex-shrink-0" />
                        <span className="font-semibold text-slate-900 min-w-[120px]">Key Feature</span> 
                        <span>{product.features[0]}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({ 
                      productName: product.name,
                      model: product.model,
                      category: product.category 
                    })}
                    className="group btn-primary px-8 py-4 font-semibold rounded-md shadow-lg shadow-hero-accent/20 transition-all hover:-translate-y-1"
                  >
                    Request a Quote
                    <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <Link 
                    to={`/products/${product.categorySlug}/${product.slug}`} 
                    className="btn-outline border-2 border-slate-200 text-slate-700 font-semibold rounded-md hover:border-slate-300 hover:bg-slate-50 px-8 py-4 transition-all"
                  >
                    View Full Details
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Product Image & Nav */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="relative w-full max-w-md lg:max-w-xl group">
              
              {/* IMPROVEMENT: Image Frame with hover hint */}
              <div className="relative rounded-2xl p-8 lg:p-12 border border-gray-200 overflow-hidden bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md cursor-pointer">
                
                {/* Hover overlay hint */}
                <div className="absolute top-4 right-4 bg-slate-100 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 text-slate-600">
                  <Search className="w-4 h-4" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    variants={fadeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={900}
                      loading="eager"
                      className="w-full h-auto max-h-[350px] object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* IMPROVEMENT: Clearer Active State in Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 w-full max-w-md lg:max-w-xl">
              {featuredProducts.map((prod, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left px-4 py-3 rounded-xl border transition-all duration-300 ${
                    i === activeIndex
                      ? "border-hero-accent bg-hero-accent/10 shadow-sm ring-1 ring-hero-accent/20"
                      : "border-gray-200 bg-slate-50 hover:bg-white hover:border-gray-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 transition-colors ${i === activeIndex ? "text-hero-accent" : "text-slate-400"}`}>
                    0{i + 1}
                  </span>
                  <span className={`block font-semibold text-xs transition-colors line-clamp-2 ${i === activeIndex ? "text-slate-900" : "text-slate-600"}`}>
                    {prod.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;