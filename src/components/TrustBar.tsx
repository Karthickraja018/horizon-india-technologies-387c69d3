import { Award, Building2, Clock3, MapPin, ShieldCheck } from "lucide-react";

const items = [
  { icon: Clock3, label: "25+ Years of Industrial Expertise" },
  { icon: Award, label: "NABL Accredited Calibration Lab · Certificate [No.]" },
  { icon: Building2, label: "3000+ Clients Served" },
  { icon: MapPin, label: "Serving Tamil Nadu · Pan-India Supply Available" },
  { icon: ShieldCheck, label: "Same-Day Inquiry Response" },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-start gap-2.5 px-3 lg:px-5 py-3 ${
                i === items.length - 1 ? "col-span-2 lg:col-span-1" : ""
              } ${
                i !== items.length - 1 ? "lg:border-r lg:border-border" : ""
              } ${i % 2 === 0 && i !== items.length - 1 ? "border-r border-border lg:border-r" : ""} ${i < items.length - 2 ? "border-b border-border lg:border-b-0" : ""}`}
            >
              <item.icon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 text-hero-muted" />
              <span className="text-[11px] lg:text-xs font-medium tracking-wide text-hero-foreground leading-relaxed">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
