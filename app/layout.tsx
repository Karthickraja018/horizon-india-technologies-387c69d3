import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Layout from "@/components/common/Layout";

export const metadata: Metadata = {
  title: "Horizon India Technologies | Industrial Testing Equipment",
  description:
    "Industrial testing equipment supplier in Tamil Nadu with sales, service, and NABL-accredited calibration support. Serving automotive, aerospace, foundry, and manufacturing industries.",
  keywords:
    "industrial testing equipment, material testing, metrology, calibration, Tamil Nadu, Chennai, Karur, Coimbatore, NABL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
