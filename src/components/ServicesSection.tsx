import { Wrench, FileCheck, Gauge, ArrowUpCircle, Package, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Wrench, title: "Sales", description: "New equipment supply from leading global brands with application support." },
  { icon: FileCheck, title: "AMC", description: "Annual maintenance contracts with preventive checks and priority breakdown support." },
  { icon: Gauge, title: "Calibration", description: "NABL-accredited calibration services for all types of testing instruments." },
  { icon: ArrowUpCircle, title: "Upgradation", description: "Retrofit and upgrade older equipment with digital readouts and PC interfaces." },
  { icon: Package, title: "Spares", description: "Genuine spare parts and consumables for all major instrument brands." },
  { icon: GraduationCap, title: "Training", description: "Operator training and application workshops on testing standards and methods." },
];

const ServicesSection = () => (
  <section className="section-alt">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Services</span>
          <h2>End-to-End Support</h2>
          <p>From sales to calibration, we provide complete lifecycle support for your testing equipment.</p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.06}>
            <div className="surface-card p-6 h-full hover:border-hero-accent/25 group">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-hero-accent/8 group-hover:bg-hero-accent/15 transition-colors duration-300 mb-4">
                <s.icon className="w-5 h-5 text-hero-accent" />
              </div>
              <h3 className="text-hero-headline font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-hero-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
