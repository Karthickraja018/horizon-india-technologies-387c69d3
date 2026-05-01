import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horizon India Technologies | Industrial Testing Equipment Supplier Tamil Nadu",
  description:
    "Horizon India Technologies – trusted supplier of material testing, metrology & quality control equipment in Tamil Nadu. NABL-accredited calibration services.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <CategoriesGrid />
      <ServicesSection />
      <CTABand />
    </>
  );
}
