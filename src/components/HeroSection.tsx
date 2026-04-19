import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import testingMachine from "@/assets/testing-machine.png";
import hardnessTester from "@/assets/hardness-tester.png";
import impactTester from "@/assets/impact-tester.png";

const products = [
  {
    image: testingMachine,
    label: "Universal Testing Machine",
    tagline: "Precision Engineering",
    headline: ["Advanced Material", "Testing", "Solutions"],
    description:
      "Industry-leading universal testing machines engineered for precision, reliability, and compliance across aerospace, automotive, and manufacturing sectors.",
  },
  {
    image: hardnessTester,
    label: "Rockwell Hardness Tester",
    tagline: "Surface Analysis",
    headline: ["Hardness Testing", "Redefined", ""],
    description:
      "State-of-the-art hardness testers delivering accurate, repeatable measurements for quality control in metals, plastics, and composites.",
  },
  {
    image: impactTester,
    label: "Charpy Impact Tester",
    tagline: "Structural Integrity",
    headline: ["Impact Resistance", "Analysis", "Systems"],
    description:
      "High-performance impact testing systems designed to evaluate material toughness and fracture behavior under dynamic loading conditions.",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Auto-cycle every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((i) => (i + 1) % products.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const goTo = (dir: 1 | -1) => {
    setDirection(dir);
    setActiveIndex((i) => (i + dir + products.length) % products.length);
  };

  const product = products[activeIndex];

  const textVariants = {
    enter: (d: number) => ({ opacity: 0, y: 20 * d }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: -20 * d }),
  };

  const imageVariants = {
    enter: (d: number) => ({ opacity: 0, x: 60 * d }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: -60 * d }),
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 min-h-[420px] flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={textVariants}
              >
                <span className="inline-block text-hero-accent font-semibold text-sm tracking-widest uppercase mb-4">
                  {product.tagline}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-headline leading-tight mb-6">
                  {product.headline[0]}
                  <br />
                  <span className="text-hero-accent">{product.headline[1]}</span>
                  {product.headline[2] && (
                    <>
                      {" "}
                      {product.headline[2]}
                    </>
                  )}
                </h1>

                <p className="text-hero-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="group btn-primary px-8 py-4">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-outline px-8 py-4">
                    View Products
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-10 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "25+", label: "Years Experience" },
                { value: "3,000+", label: "Systems Deployed" },
                { value: "99.9%", label: "Uptime Guarantee" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-hero-headline">{stat.value}</div>
                  <div className="text-xs text-hero-muted uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product Image */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="relative w-full max-w-md">
              {/* Frame */}
              <div className="relative rounded-2xl p-8 border border-border overflow-hidden bg-gradient-to-br from-card to-secondary/35 shadow-2xl">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img
                        src={product.image}
                        alt={product.label}
                        width={800}
                        height={900}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="w-full drop-shadow-2xl"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-hero-accent/30 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-hero-accent/30 rounded-bl-2xl" />
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-hero-accent/10 rounded-3xl blur-3xl -z-10" />
            </div>

            {/* Navigation dots + arrows */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => goTo(-1)}
                className="p-2 rounded-full border border-hero-muted/20 text-hero-muted hover:text-hero-accent hover:border-hero-accent/40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-hero-accent w-6"
                        : "bg-hero-muted/30 hover:bg-hero-muted/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => goTo(1)}
                className="p-2 rounded-full border border-hero-muted/20 text-hero-muted hover:text-hero-accent hover:border-hero-accent/40 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
