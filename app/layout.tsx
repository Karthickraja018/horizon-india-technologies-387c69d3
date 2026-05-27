import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Layout from "@/components/common/Layout";
import { getCategories } from "@/lib/api";

export const metadata: Metadata = {
  title: "Horizon India Technologies | Industrial Testing Equipment",
  description:
    "Industrial testing equipment supplier in Tamil Nadu with sales, service, and NABL-accredited calibration support. Serving automotive, aerospace, foundry, and manufacturing industries.",
  keywords:
    "industrial testing equipment, material testing, metrology, calibration, Tamil Nadu, Chennai, Karur, Coimbatore, NABL",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Layout categories={categories.length > 0 ? categories : undefined}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
