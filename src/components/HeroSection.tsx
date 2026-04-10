import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import testingMachine from "@/assets/testing-machine.png";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [sweepKey, setSweepKey] = useState(0);

  // Restart sweep every 7s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSweepKey((k) => k + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleHover = useCallback((hover: boolean) => setIsHovered(hover), []);

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--hero-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hero-foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <span className="inline-block text-hero-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Precision Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-headline leading-tight mb-6"
            >
              Advanced Material
              <br />
              <span className="text-hero-accent">Testing</span> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
              className="text-hero-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Industry-leading universal testing machines engineered for
              precision, reliability, and compliance across aerospace,
              automotive, and manufacturing sectors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 bg-hero-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-colors duration-300 hover:bg-hero-accent-hover"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-hero-muted/30 text-hero-foreground font-semibold px-8 py-4 rounded-lg transition-colors duration-300 hover:border-hero-accent/50 hover:text-hero-accent"
              >
                View Products
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-10 mt-12 pt-8 border-t border-hero-muted/15"
            >
              {[
                { value: "25+", label: "Years Experience" },
                { value: "3,000+", label: "Systems Deployed" },
                { value: "99.9%", label: "Uptime Guarantee" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-hero-headline">
                    {stat.value}
                  </div>
                  <div className="text-xs text-hero-muted uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div
              className="relative"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              {/* Frame */}
              <div className="relative bg-hero-frame rounded-2xl p-8 border border-hero-frame-border/20 overflow-hidden">
                {/* Subtle floating effect */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={testingMachine}
                    alt="Universal Material Testing Machine"
                    width={800}
                    height={900}
                    className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                  />
                </motion.div>

                {/* Light sweep overlay */}
                <div
                  key={sweepKey}
                  className={`absolute inset-0 z-20 pointer-events-none overflow-hidden ${
                    isHovered ? "" : "light-sweep-interval"
                  }`}
                  style={
                    isHovered
                      ? { animation: "none" }
                      : undefined
                  }
                >
                  <div
                    className={`absolute inset-0 ${
                      isHovered ? "" : "light-sweep-interval"
                    }`}
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
                      ...(isHovered
                        ? { animation: "none" }
                        : {
                            animation: "light-sweep 2s ease-in-out forwards",
                          }),
                    }}
                  />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-hero-frame-border/40 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-hero-frame-border/40 rounded-bl-2xl" />
              </div>

              {/* Glow behind frame */}
              <div className="absolute -inset-4 bg-hero-accent/5 rounded-3xl blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
