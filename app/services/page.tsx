import ServicesSection from "@/components/home/ServicesSection";
import CTABand from "@/components/home/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Horizon India Technologies",
  description:
    "Sales, service, and calibration of industrial testing equipment across Tamil Nadu and South India.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <ServicesSection />
      <CTABand />
    </div>
  );
}
