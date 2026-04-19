import { Link } from "react-router-dom";
import { Wrench, FileCheck, Gauge, ArrowUpCircle, Package, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  to?: string;
  cta?: string;
};

const groups = [
  {
    title: "Core Services",
    eyebrow: "Primary Offering",
    items: [
      { icon: Wrench, title: "Sales", description: "New equipment supply from leading global brands with application support." },
      { icon: FileCheck, title: "AMC", description: "Annual maintenance contracts with preventive checks and priority breakdown response." },
      {
        icon: Gauge,
        title: "Calibration Services",
        description: "NABL-accredited calibration services in Chennai for hardness testers, UTMs, and material testing equipment.",
        to: "/services/calibration-services-chennai",
        cta: "View Calibration Page",
      },
    ],
  },
  {
    title: "Support Services",
    eyebrow: "Lifecycle Care",
    items: [
      { icon: GraduationCap, title: "Training", description: "Operator training and application workshops on testing standards and methods." },
      { icon: Package, title: "Spares", description: "Genuine spare parts and consumables for all major instrument brands." },
      { icon: ArrowUpCircle, title: "Upgradation", description: "Retrofit older equipment with digital readouts, automation, and PC interfaces." },
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-base">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Services</span>
          <h2>End-to-End Support</h2>
          <p>From sales to calibration, we provide complete lifecycle support for your testing equipment.</p>
        </div>
      </AnimatedSection>

      <div className="space-y-12">
        {groups.map((group, gi) => (
          <div key={group.title} className={gi === 1 ? "pt-12 border-t border-border" : ""}>
            <AnimatedSection>
              <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
                <div>
                  <span className="label-eyebrow">{group.eyebrow}</span>
                  <h3 className="text-hero-headline font-bold text-xl md:text-2xl mt-1">{group.title}</h3>
                </div>
                <div className="h-px bg-border flex-1 ml-6 hidden md:block" />
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(group.items as ServiceItem[]).map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 0.05}>
                  <div className="surface-card animate-card-lift p-6 h-full group">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background text-hero-accent mb-4 animate-icon-shift">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-hero-headline font-semibold text-base mb-1.5">{s.title}</h4>
                    <p className="text-hero-muted text-sm leading-relaxed">{s.description}</p>
                    {s.to && s.cta && (
                      <Link to={s.to} className="inline-flex mt-4 text-xs font-semibold text-hero-accent hover:underline">
                        {s.cta}
                      </Link>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
