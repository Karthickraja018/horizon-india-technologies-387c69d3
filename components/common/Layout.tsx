"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
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
      <main className="flex-1 pt-[88px]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteFormModal categories={categories} />
    </div>
  );
};

export default Layout;
