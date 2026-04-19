import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import CTABand from "@/components/CTABand";
import InlineCtaBlock from "@/components/InlineCtaBlock";

const Index = () => (
  <>
    <HeroSection />
    <FeaturedProducts />
    <CategoriesGrid />
    <ServicesSection />
    <TrustBar />
    <section className="py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <InlineCtaBlock
          title="Need help choosing the right tester?"
          description="Share your material, test standard, and throughput target. We will recommend the right equipment configuration for your line."
          primaryCta="Get Recommendation"
          secondaryCta="Talk to Expert"
        />
      </div>
    </section>
    <CTABand />
  </>
);

export default Index;

