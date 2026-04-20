import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import FloatingThemeButton from "./FloatingThemeButton";
import QuoteFormModal from "./QuoteFormModal";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingThemeButton />
      <QuoteFormModal />
    </div>
  );
};

export default Layout;
