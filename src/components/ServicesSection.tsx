import { Wrench, FileCheck, Gauge, ArrowUpCircle, Package, GraduationCap } from "lucide-react";

const services = [
  { icon: Wrench, title: "Sales", description: "New equipment supply from leading global brands with application support." },
  { icon: FileCheck, title: "AMC", description: "Annual maintenance contracts with preventive checks and priority breakdown support." },
  { icon: Gauge, title: "Calibration", description: "NABL-accredited calibration services for all types of testing instruments." },
  { icon: ArrowUpCircle, title: "Upgradation", description: "Retrofit and upgrade older equipment with digital readouts and PC interfaces." },
  { icon: Package, title: "Spares", description: "Genuine spare parts and consumables for all major instrument brands." },
  { icon: GraduationCap, title: "Training", description: "Operator training and application workshops on testing standards and methods." },
];

const ServicesSection = () => (
  <section className="bg-hero-frame py-20">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-12">
        <span className="text-hero-accent font-semibold text-sm tracking-widest uppercase">Services</span>
        <h2 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2">End-to-End Support</h2>
        <p className="text-hero-muted mt-4 max-w-2xl mx-auto">From sales to calibration, we provide complete lifecycle support for your testing equipment.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-hero border border-hero-muted/10 rounded-lg p-6 hover:border-hero-accent/20 transition-colors">
            <s.icon className="w-8 h-8 text-hero-accent mb-4" />
            <h3 className="text-hero-headline font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-hero-muted text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
