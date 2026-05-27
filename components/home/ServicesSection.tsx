import Link from "next/link";
import { Wrench, ShieldCheck, Monitor, Building2, Package, Settings, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

type ServiceItem = {
  icon: React.ElementType;
  id: string;
  title: string;
  description: string;
  to: string;
};

const services: ServiceItem[] = [
  {
    id: "supply",
    icon: Settings,
    title: "Equipment Supply",
    description: "Authorised dealer for hardness testers, UTMs, and NDT equipment from global brands.",
    to: "/products",
  },
  {
    id: "calibration",
    icon: ShieldCheck,
    title: "NABL Calibration",
    description: "Accredited calibration with certificates accepted for ISO 9001 and IATF 16949 compliance.",
    to: "/services/calibration-services-chennai",
  },
  {
    id: "amc",
    icon: Wrench,
    title: "AMC & Servicing",
    description: "Annual maintenance contracts and priority on-site breakdown support across Tamil Nadu.",
    to: "/services",
  },
  {
    id: "training",
    icon: Monitor,
    title: "Demo & Training",
    description: "On-site equipment demonstrations and operator training at your facility.",
    to: "/contact",
  },
  {
    id: "labsetup",
    icon: Building2,
    title: "Lab Setup Consulting",
    description: "Turnkey testing lab setup — equipment selection, layout, and commissioning.",
    to: "/services",
  },
  {
    id: "spares",
    icon: Package,
    title: "Spare Parts Supply",
    description: "Genuine spare parts — indenters, anvils, load cells, and consumables dispatched same day.",
    to: "/contact",
  },
];

const ServicesSection = () => (
  <section className="py-24 bg-muted/30 border-y border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow text-hero-accent block mb-3">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Industrial Buyers</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond equipment supply — we support your entire testing and quality workflow from procurement to lifetime calibration.
            </p>
          </div>
          <Link href="/services" className="btn-outline px-6 py-3 rounded-lg text-sm bg-background inline-flex items-center gap-2 group shrink-0">
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.to}
              className="group bg-card border border-border rounded-xl p-8 hover:border-hero-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-hero-accent group-hover:text-white text-muted-foreground transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-hero-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <div className="flex justify-end mt-auto pt-4 border-t border-border">
                <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-hero-accent group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesSection;
