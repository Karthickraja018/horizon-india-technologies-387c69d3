"use client";

import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import FloatingThemeButton from "./FloatingThemeButton";
import QuoteFormModal from "./QuoteFormModal";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingThemeButton />
      <QuoteFormModal />
    </div>
  );
};

export default Layout;
