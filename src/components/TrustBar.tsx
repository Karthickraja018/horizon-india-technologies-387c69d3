import { Shield, Award, Clock, MapPin } from "lucide-react";

const items = [
  { icon: Shield, label: "NABL Accredited" },
  { icon: Award, label: "ISO 17025" },
  { icon: Clock, label: "24h Response" },
  { icon: MapPin, label: "Regional Service Coverage" },
];

const TrustBar = () => (
  <section className="bg-secondary/30 border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 py-6">
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon className="w-5 h-5 text-hero-accent" />
            <span className="text-hero-foreground text-sm font-medium whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
