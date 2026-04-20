import { Link } from "react-router-dom";
import { Wrench, ShieldCheck, Monitor, Building2, Package, Settings } from "lucide-react";

type ServiceItem = {
  icon: React.ElementType;
  id: string;
  title: string;
  description: string;
  to: string;
  cta: string;
};

const services: ServiceItem[] = [
  {
    id: "supply",
    icon: Settings,
    title: "Equipment supply",
    description: "Authorised dealer for hardness testers, UTMs, metallographic and NDT equipment from leading global brands.",
    to: "/products",
    cta: "Browse products →",
  },
  {
    id: "calibration",
    icon: ShieldCheck,
    title: "NABL calibration",
    description: "Accredited calibration with NABL certificates accepted for ISO 9001 and IATF 16949 audit compliance.",
    to: "/services#calibration",
    cta: "View calibration services →",
  },
  {
    id: "amc",
    icon: Wrench,
    title: "AMC & servicing",
    description: "Annual maintenance contracts and priority on-site breakdown support across Tamil Nadu.",
    to: "/services#amc",
    cta: "Learn more →",
  },
  {
    id: "training",
    icon: Monitor,
    title: "Demo & training",
    description: "On-site equipment demonstrations and operator training at your facility or our Chennai showroom.",
    to: "/services#training",
    cta: "Book a demo →",
  },
  {
    id: "labsetup",
    icon: Building2,
    title: "Lab setup consulting",
    description: "Turnkey testing lab setup — equipment selection, layout, installation and commissioning for new labs.",
    to: "/services#labsetup",
    cta: "Learn more →",
  },
  {
    id: "spares",
    icon: Package,
    title: "Spare parts supply",
    description: "Genuine spare parts — indenters, anvils, load cells, grips, and consumables dispatched same day.",
    to: "/services#spares",
    cta: "Request parts →",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-12 lg:py-20 bg-[#f8f8f6] border-t border-[rgba(0,0,0,0.05)]">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center lg:text-left">
        <p className="text-[12px] text-hero-accent uppercase tracking-[0.05em] font-medium">What we offer</p>
        <h2 className="text-[22px] lg:text-[30px] font-medium text-hero-headline mt-2">Services built for industrial buyers</h2>
        <p className="text-base text-hero-muted mt-3 max-w-[520px] mx-auto lg:mx-0">
          Beyond equipment supply — we support your entire testing and quality workflow.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[14px] p-5 transition-colors hover:border-[rgba(0,0,0,0.15)] group"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#E1F5EE] text-hero-accent mb-4">
              <service.icon className="w-4 h-4" />
            </div>
            <h3 className="h3 mb-3 transition-colors group-hover:text-hero-accent">
              {service.title}
            </h3>
            <p className="text-body-sm">
              {service.description}
            </p>
            <Link to={service.to} className="inline-flex mt-4 text-[12px] text-hero-accent font-medium hover:underline">
              {service.cta}
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-[rgba(0,0,0,0.06)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[13px] text-hero-muted">All services available across Tamil Nadu · Pan-India supply</p>
        <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm text-hero-foreground hover:border-hero-accent hover:text-hero-accent transition-colors">
          View all services →
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
