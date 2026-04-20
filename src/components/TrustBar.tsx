import { Award, Building2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Clock3, label: "25+ Years of Industrial Expertise" },
  { icon: Award, label: "NABL Accredited Calibration Lab" },
  { icon: Building2, label: "3000+ Clients Served" },
  { icon: MapPin, label: "Pan-India Supply Available" },
  { icon: ShieldCheck, label: "Same-Day Inquiry Response" },
];

const TrustBar = () => {
  // Use three sets of items to ensure no gaps at any screen size or scroll speed
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="border-y border-border bg-[#f8fafc] py-8 relative overflow-hidden group">
      {/* Premium Side Fades for the "Display Board" effect */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />
      
      <div className="flex select-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Slow, professional tempo for industrial B2B
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-10 md:px-16 py-1 shrink-0 group/item transition-opacity duration-300 hover:opacity-100 opacity-80"
            >
              <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform duration-300 group-hover/item:scale-110" />
              <span className="eyebrow !text-gray-800 font-bold">
                {item.label}
              </span>
              
              {/* Divider Symbol */}
              <div className="ml-10 md:ml-16 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
