"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import QuoteFormModal from "@/components/forms/QuoteFormModal";
import ScrollToTop from "@/components/common/ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteFormModal />
    </div>
  );
};

export default Layout;
