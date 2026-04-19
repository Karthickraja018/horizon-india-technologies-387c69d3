import { Link } from "react-router-dom";
import ServicesSection from "@/components/ServicesSection";
import CTABand from "@/components/CTABand";

const ServicesPage = () => (
  <div className="bg-background min-h-screen">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <span className="label-eyebrow">What We Offer</span>
      <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2 mb-3">Our Services</h1>
      <p className="text-hero-muted max-w-2xl">Complete lifecycle support for your material testing equipment — from sales and AMC to NABL-accredited calibration.</p>
      <Link to="/services/calibration-services-chennai" className="inline-flex mt-5 text-sm font-semibold text-hero-accent hover:underline">
        Explore Calibration Services (Chennai)
      </Link>
    </div>
    <ServicesSection />
    <CTABand />
  </div>
);

export default ServicesPage;
