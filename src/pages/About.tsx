import WhyChooseUs from "@/components/WhyChooseUs";
import CTABand from "@/components/CTABand";

const AboutPage = () => (
  <div className="bg-hero min-h-screen">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">About PrecisionTest</h1>
      <div className="max-w-3xl space-y-4 text-hero-foreground leading-relaxed mb-8">
        <p>With over 25 years of experience, PrecisionTest is one of Southern India's leading suppliers of material testing, metrology, and quality control equipment.</p>
        <p>We serve industries including aerospace, automotive, foundry, construction, and manufacturing with a comprehensive portfolio of testing solutions backed by NABL-accredited calibration and on-site service.</p>
        <p>Our commitment to precision, reliability, and customer success has earned us the trust of over 3,000 clients across the region.</p>
      </div>
    </div>
    <WhyChooseUs />
    <CTABand />
  </div>
);

export default AboutPage;
