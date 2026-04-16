import { Shield, Award, Clock, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Shield, label: "NABL Accredited" },
  { icon: Award, label: "ISO 17025" },
  { icon: Clock, label: "24h Response" },
  { icon: Wrench, label: "Sales + Service + Calibration" },
  { icon: MapPin, label: "Southern India Coverage" },
];

const TrustBar = () => (
  <section className="bg-secondary/30 border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 py-6">
      <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="p-1.5 rounded-lg bg-hero-accent/8 group-hover:bg-hero-accent/15 transition-colors duration-300">
              <item.icon className="w-4 h-4 text-hero-accent" />
            </div>
            <span className="text-hero-foreground text-sm font-medium whitespace-nowrap">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
