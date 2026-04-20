import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "NABL", label: "Accredited Lab" },
  { value: "24h", label: "Response SLA" },
  { value: "5", label: "States Covered" },
];

const WhyChooseUs = () => (
  <section className="bg-card border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 py-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="lg:max-w-xs">
          <span className="eyebrow">Why Us</span>
          <h3 className="h3 mt-1">
            Engineered for reliability
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-border lg:flex-1">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="px-4 py-3 lg:px-8 text-center lg:text-left"
            >
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight leading-none">{s.value}</div>
              <div className="eyebrow mt-1.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
