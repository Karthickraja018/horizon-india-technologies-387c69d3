import { Shield, Award, Clock, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { icon: Shield, label: "NABL Accredited" },
  { icon: Award, label: "ISO 17025" },
  { icon: Clock, label: "24h Response" },
  { icon: Wrench, label: "Sales + Service + Calibration" },
  { icon: MapPin, label: "Southern India Coverage" },
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

// Item animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Icon hover variants
const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

const TrustBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-12 py-5">
        <motion.div
          className="flex flex-wrap items-center justify-center divide-x divide-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex items-center gap-2.5 px-5 lg:px-8 py-1 transition-colors duration-200 rounded-sm ${
                hoveredIndex === i ? "bg-[#f8fafc]" : ""
              }`}
            >
              {/* Divider fade effect */}
              {i > 0 && (
                <motion.div
                  className="absolute -left-px h-4 w-px bg-border"
                  animate={{
                    opacity: hoveredIndex === i || hoveredIndex === i - 1 ? 0.3 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ pointerEvents: "none" }}
                />
              )}

              {/* Icon with hover animation */}
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <item.icon
                  className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                    hoveredIndex === i ? "text-hero-accent" : "text-hero-accent"
                  }`}
                />
              </motion.div>

              {/* Text with hover effect */}
              <span
                className={`text-xs lg:text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                  hoveredIndex === i
                    ? "text-hero-headline font-semibold"
                    : "text-hero-foreground"
                }`}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
