import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ServicesSection from "@/components/home/ServicesSection";
import CTABand from "@/components/home/CTABand";
import type { Metadata } from "next";

import { getFeaturedProducts, getCategories } from "@/lib/api";

export const metadata: Metadata = {
  title: "Horizon India Technologies | Industrial Testing Equipment Supplier Tamil Nadu",
  description:
    "Horizon India Technologies – trusted supplier of material testing, metrology & quality control equipment in Tamil Nadu. NABL-accredited calibration services.",
};

export default async function HomePage() {
  const [featuredProducts, categories] = await Promise.all([
    getFeaturedProducts(6),
    getCategories(),
  ]);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts products={featuredProducts.length > 0 ? featuredProducts : undefined} />
      <CategoriesGrid categories={categories.length > 0 ? categories : undefined} />
      <ServicesSection />
      <CTABand />
    </>
  );
}
