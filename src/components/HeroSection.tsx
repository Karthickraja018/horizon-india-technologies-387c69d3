import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuoteModal } from "@/context/QuoteModalContext";
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
    headline: ["Precision Impact", "Testing Equipment", "for Reliable Quality Control"],
    description:
      "High-performance systems designed to evaluate material toughness and fracture behavior under dynamic loading. Compliant with ASTM and ISO standards.",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const { openQuoteModal } = useQuoteModal();

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
    enter: (d: number) => ({ opacity: 0, y: 15 * d }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: -15 * d }),
  };

  const imageVariants = {
    enter: (d: number) => ({ opacity: 0, scale: 0.98, x: 20 * d }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 1.02, x: -20 * d }),
  };

  return (
    <section id="home" className="relative h-screen max-h-[1080px] bg-background overflow-hidden">
      {/* Background Layer: Left (White) & Right (Grey Masked) */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-[50%] bg-background h-full" />
        <div className="hidden lg:block lg:w-[50%] bg-[#f8fafc] h-full lg:clip-path-hero" />
      </div>

      {/* Background Decorative Grid (on left side) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none lg:w-[50%]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row h-full pt-40 lg:pt-36">
          {/* Left Content Area */}
          <div className="w-full lg:w-[50%] h-full flex flex-col justify-center py-12 lg:py-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                variants={textVariants}
                className="space-y-6 lg:pr-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-px w-8 bg-hero-accent" />
                  <span className="text-hero-accent eyebrow">
                    {product.tagline}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h1"
                >
                  <span className="block">{product.headline[0]}</span>
                  <span className="text-hero-accent">{product.headline[1]}</span>
                  {product.headline[2] && (
                    <span className="block lg:inline ml-0 lg:ml-3">
                      {product.headline[2]}
                    </span>
                  )}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-body-lg max-w-lg font-medium"
                >
                  {product.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div className="flex flex-wrap gap-5">
                    <button
                      type="button"
                      onClick={() => openQuoteModal({ productName: product.label })}
                      className="group bg-hero-accent text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-hero-accent/20 hover:scale-[1.02] active:scale-100"
                    >
                      Request a Quote
                    </button>
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-border font-bold text-lg hover:bg-muted/50 hover:scale-[1.02] active:scale-100 transition-all duration-300"
                    >
                      Talk to an Engineer
                    </Link>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 opacity-80">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-hero-accent" />
                      <span>NABL Certified</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-hero-accent" />
                      <span>ISO 17025</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-hero-accent" />
                      <span>25+ Years Experience</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Visual Area */}
          <div className="w-full lg:w-[50%] h-full flex items-center justify-center relative py-12 lg:py-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={imageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-0"
              >
                <img
                  src={product.image}
                  alt={product.label}
                  className="max-h-[65vh] lg:max-h-[80vh] w-auto object-contain drop-shadow-2xl grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-hero-accent/5 to-transparent -z-10" />
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute bottom-10 right-0 left-0 lg:left-auto lg:right-10 z-30 flex items-center justify-center lg:justify-end gap-6">
              <div className="flex gap-2">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    className={`h-1 transition-all duration-500 rounded-full ${i === activeIndex ? "w-12 bg-hero-accent" : "w-4 bg-hero-accent/20 hover:bg-hero-accent/40"
                      }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => goTo(-1)}
                  className="p-3 bg-white/80 backdrop-blur-sm border border-border rounded-full text-hero-muted hover:bg-hero-accent hover:text-white transition-all shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => goTo(1)}
                  className="p-3 bg-white/80 backdrop-blur-sm border border-border rounded-full text-hero-muted hover:bg-hero-accent hover:text-white transition-all shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );



};

export default HeroSection;
