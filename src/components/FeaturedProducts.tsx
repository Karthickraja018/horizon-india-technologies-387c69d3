import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

// Take first 4 products as featured
const featuredProducts = products.slice(0, 4);

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  // Auto-cycle every 6s, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featuredProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  const product = featuredProducts[activeIndex];

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
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
            
            {/* Section Header */}
            <div className="mb-12">
              <span className="eyebrow">Top Picks</span>
              <h2 className="h2 mt-2">Featured Products</h2>
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
                <span className="inline-block text-slate-500 font-semibold text-sm tracking-widest uppercase mb-3">
                  {product.category}
                </span>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3">
                  {product.name}
                </h3>

                <p className="text-hero-accent text-lg md:text-xl font-medium mb-6">
                  Ideal for {product.applications.join(", ").toLowerCase()}
                </p>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
                  {product.description}
                </p>

                <div className="mb-10 bg-[#f8fafc] rounded-xl p-6 border border-gray-200">
                  <span className="block text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Quick Specs</span>
                  <ul className="space-y-3">
                    {Object.entries(product.specifications).slice(0, 2).map(([key, val], idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <ArrowRight className="w-4 h-4 text-hero-accent mt-1 mr-3 flex-shrink-0" />
                        <span className="font-semibold text-slate-900 min-w-[120px]">{key}</span> 
                        <span>{val}</span>
                      </li>
                    ))}
                    {product.features.length > 0 && (
                      <li className="flex items-start text-slate-700">
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
                    className="group btn-primary px-8 py-4 animate-button-scale"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <Link 
                    to={`/products/${product.categorySlug}/${product.slug}`} 
                    className="btn-outline border-gray-200 text-slate-700 hover:bg-gray-50 px-8 py-4 animate-button-scale"
                  >
                    Talk to an Engineer
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right: Product Image */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="relative w-full max-w-md lg:max-w-xl">
              {/* Frame */}
              <div className="relative rounded-2xl p-8 lg:p-12 border border-gray-200 overflow-hidden bg-white flex items-center justify-center">
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
                      className="w-full h-auto max-h-[350px] object-contain transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Labeled Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 w-full max-w-md lg:max-w-xl">
              {featuredProducts.map((prod, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left px-4 py-3 rounded-xl border transition-all duration-300 ${
                    i === activeIndex
                      ? "border-hero-accent bg-white shadow-sm ring-1 ring-hero-accent/10"
                      : "border-gray-200 bg-[#f8fafc] hover:bg-white hover:border-gray-300"
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

