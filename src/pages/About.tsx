import WhyChooseUs from "@/components/WhyChooseUs";
import CTABand from "@/components/CTABand";

const AboutPage = () => (
  <div className="bg-background min-h-screen">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">About Horizon India Technologies</h1>
      <div className="max-w-3xl space-y-4 text-hero-foreground leading-relaxed mb-8">
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
    </div>
    <WhyChooseUs />
    <CTABand />
  </div>
);

export default AboutPage;
