import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "25+", label: "Years Experience", sub: "Serving industrial clients" },
  { value: "NABL", label: "Accredited Lab", sub: "ISO/IEC 17025 calibration" },
  { value: "24h", label: "Response Time", sub: "Engineer dispatch SLA" },
  { value: "5", label: "States Covered", sub: "TN, KA, KL, AP, TG" },
];

const WhyChooseUs = () => (
  <section className="section-alt border-y border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Why Us</span>
          <h2>Engineered for Reliability</h2>
          <p>Numbers that reflect our commitment to precision, uptime, and technical support.</p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border border border-border bg-card">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.06}>
            <div className="p-8 lg:p-10 text-center h-full flex flex-col justify-center">
              <div className="text-4xl lg:text-5xl font-bold text-hero-headline tracking-tight mb-2">{s.value}</div>
              <div className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-hero-muted text-xs">{s.sub}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
