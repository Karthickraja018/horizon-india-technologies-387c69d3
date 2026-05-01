"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import QuoteFormModal from "@/components/forms/QuoteFormModal";
import ScrollToTop from "@/components/common/ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1 pt-[88px]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteFormModal />
    </div>
  );
};

export default Layout;
