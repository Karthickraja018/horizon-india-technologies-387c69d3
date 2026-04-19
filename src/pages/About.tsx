import { MapPin, Award, Users, Building2 } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABand from "@/components/CTABand";

const credentials = [
  { icon: Award, label: "NABL accredited calibration lab" },
  { icon: Building2, label: "Offices in Karur & Coimbatore" },
  { icon: Users, label: "Engineers across Tamil Nadu & South India" },
  { icon: MapPin, label: "Coverage: TN, KA, KL, AP, TG" },
];

const AboutPage = () => (
  <div className="bg-background min-h-screen">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <span className="label-eyebrow">About Us</span>
      <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2 mb-10">About Horizon India Technologies</h1>

      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-7 space-y-4 text-hero-foreground leading-relaxed">
          <p>
            <strong className="text-hero-headline">Horizon India Technologies</strong>, led by proprietor <strong className="text-hero-headline">T V Shankar</strong>, is a trusted name in Sales, Service & Calibration of Testing Equipment across Tamil Nadu and South India.
          </p>
          <p>
            We serve industries including aerospace, automotive, foundry, construction, and manufacturing with a comprehensive portfolio of material testing, metrology, and quality control solutions.
          </p>
          <p>
            With offices in <strong className="text-hero-headline">Karur</strong> and <strong className="text-hero-headline">Coimbatore</strong>, we provide prompt regional coverage backed by expert technical support and NABL-accredited calibration services.
          </p>
          <p>
            Our commitment to precision, reliability, and customer success has earned us the trust of clients across the region.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="surface-card p-6">
            <span className="label-eyebrow">Credentials & Coverage</span>
            <h2 className="text-hero-headline font-bold text-xl mt-1 mb-5">At a Glance</h2>
            <ul className="space-y-4">
              {credentials.map((c) => (
                <li key={c.label} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-hero-accent shrink-0">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <span className="text-hero-foreground text-sm leading-snug">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <WhyChooseUs />
    <CTABand />
  </div>
);

export default AboutPage;
