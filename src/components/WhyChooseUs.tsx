import { Shield, Users, Clock, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  { icon: Shield, title: "NABL Certified", description: "Accredited laboratory ensuring all instruments meet national standards for precision and accuracy." },
  { icon: Users, title: "Technical Expertise", description: "25+ years of application knowledge across metals, polymers, construction, and foundry industries." },
  { icon: Clock, title: "Fast Response", description: "24-hour response time with dedicated service engineers across Southern India." },
  { icon: MapPin, title: "Regional Coverage", description: "Strong presence in Tamil Nadu, Karnataka, Kerala, AP, and Telangana with local service centers." },
];

const WhyChooseUs = () => (
  <section className="section-alt">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Why Us</span>
          <h2>Why Choose Horizon India Technologies</h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.08}>
            <div className="surface-card p-6 text-center h-full hover:border-hero-accent/25">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-hero-accent/8 mb-5">
                <card.icon className="w-7 h-7 text-hero-accent" />
              </div>
              <h3 className="text-hero-headline font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-hero-muted text-sm leading-relaxed">{card.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
