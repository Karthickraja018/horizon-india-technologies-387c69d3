import ServicesSection from "@/components/ServicesSection";
import CTABand from "@/components/CTABand";

const ServicesPage = () => (
  <div className="bg-hero min-h-screen">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">Our Services</h1>
      <p className="text-hero-muted max-w-2xl mb-4">Complete lifecycle support for your material testing equipment.</p>
    </div>
    <ServicesSection />
    <CTABand />
  </div>
);

export default ServicesPage;
