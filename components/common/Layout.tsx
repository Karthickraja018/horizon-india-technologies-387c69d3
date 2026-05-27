"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import MobileCTABar from "@/components/common/MobileCTABar";
import QuoteFormModal from "@/components/forms/QuoteFormModal";
import ScrollToTop from "@/components/common/ScrollToTop";
import type { Category } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
  categories?: Category[];
}

const Layout = ({ children, categories }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar categories={categories} />
      <ScrollToTop />
      <main className="flex-1 pt-[88px] pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTABar />
      <QuoteFormModal categories={categories} />
    </div>
  );
};

export default Layout;
