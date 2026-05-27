"use client";

/* Hallmark · component: AboutPage · genre: modern-minimal · theme: catalog (preserved) 
 * states: default · hover · focus 
 * contrast: pass
 */

import { MapPin, Award, Users, Building2, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABand from "@/components/home/CTABand";
import AnimatedSection from "@/components/common/AnimatedSection";

const credentials = [
  { icon: Award, label: "NABL Accredited", desc: "ISO/IEC 17025 compliant calibration laboratory" },
  { icon: Building2, label: "Regional Hubs", desc: "Headquartered in Karur, with a branch in Coimbatore" },
  { icon: Users, label: "Expert Engineers", desc: "Factory-trained technicians across Tamil Nadu" },
  { icon: MapPin, label: "Wide Coverage", desc: "Serving TN, Karnataka, Kerala, AP, and Telangana" },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-8 md:pt-16 pb-12 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <AnimatedSection>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-12">
            <Link href="/" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">About Us</span>
          </div>
        </AnimatedSection>

        {/* Hero: Split Diptych (H2) */}
        <AnimatedSection className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <p className="eyebrow text-hero-accent mb-4">Our Story</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Engineered for <br/> <span className="text-muted-foreground">Accuracy.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Horizon India Technologies is the trusted partner for precision industrial testing equipment, metrology, and accredited calibration services across South India.
              </p>
            </div>
            <div className="bg-muted/30 border border-border p-8 lg:p-12 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-accent/5 opacity-50"></div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6 relative z-10">Founder's Vision</h3>
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed relative z-10 italic">
                "Our goal is to ensure every manufacturing floor and quality lab has access to reliable, accurate instruments backed by prompt, localized service."
              </p>
              <div className="mt-8 relative z-10">
                <p className="font-bold text-foreground">T V Shankar</p>
                <p className="text-sm text-muted-foreground">Proprietor & Principal Engineer</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Credentials Grid (F1 Bento variation) */}
        <AnimatedSection className="mb-24 pt-16 border-t border-border">
          <div className="mb-12">
            <span className="eyebrow text-hero-accent block mb-3">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Footprint & Accreditation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-xl hover:border-hero-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-6 group-hover:bg-hero-accent/10 group-hover:text-hero-accent transition-colors">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline / Journey */}
        <AnimatedSection className="mb-24 pt-16 border-t border-border">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow text-hero-accent block mb-3">The Journey</span>
              <h2 className="text-3xl font-bold text-foreground mb-6">Building Trust in South India</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our roots in Karur to expanding our reach across the entire southern peninsula, our journey has been defined by a singular commitment to quality and service.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="space-y-8 border-l border-border/50 pl-6 ml-2 md:pl-10 md:ml-4">
                {[
                  { year: "2015", title: "Foundation in Karur", desc: "Started as a regional service provider for mechanical testing equipment." },
                  { year: "2018", title: "Metrology Division", desc: "Expanded portfolio to include digital metrology tools and profile projectors." },
                  { year: "2021", title: "NABL Accreditation", desc: "Achieved ISO/IEC 17025 standard for our calibration laboratory." },
                  { year: "2023", title: "Coimbatore Expansion", desc: "Opened second branch to serve the growing automotive and foundry sectors." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className="absolute w-3 h-3 bg-card border-2 border-hero-accent rounded-full -left-[1.9rem] md:-left-[2.9rem] top-1.5 ring-4 ring-background"></div>
                    <span className="text-xs font-bold text-hero-accent uppercase tracking-wider block mb-1">{item.year}</span>
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Industries Served */}
        <AnimatedSection className="mb-24 pt-16 border-t border-border">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="eyebrow text-hero-accent block mb-3">Industries</span>
            <h2 className="text-3xl font-bold text-foreground">Sectors We Empower</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {["Aerospace & Defense", "Automotive Manufacturing", "Foundries & Forgings", "Civil Construction", "Plastics & Polymers", "Educational Institutes", "R&D Laboratories", "Heavy Engineering"].map((industry, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-hero-accent/30 transition-colors shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-hero-accent shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <WhyChooseUs />
      
      <div className="mt-16">
        <CTABand />
      </div>
    </div>
  );
}
