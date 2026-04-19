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
  <section className="bg-card border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 py-5">
      <div className="flex flex-wrap items-center justify-center divide-x divide-border">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="flex items-center gap-2.5 px-5 lg:px-8 py-1"
          >
            <item.icon className="w-4 h-4 text-hero-accent shrink-0" />
            <span className="text-hero-foreground text-xs lg:text-sm font-medium uppercase tracking-wider whitespace-nowrap">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
