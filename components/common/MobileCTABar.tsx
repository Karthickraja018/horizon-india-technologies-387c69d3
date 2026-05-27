"use client";

import { useQuoteModal } from "@/providers/QuoteModalContext";
import { MessageCircle, Phone, FileText } from "lucide-react";

export default function MobileCTABar() {
  const { openQuoteModal } = useQuoteModal();
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919751458300?text=Hi I am interested in your products`, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.open(`tel:+919751458300`);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-sticky-cta mobile-safe-bottom md:hidden flex items-center justify-between px-4 py-3 gap-3 animate-slide-in-up">
      <div className="flex gap-2">
        <button 
          onClick={handleWhatsApp}
          className="touch-target rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center btn-mobile-press flex-shrink-0"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
        <button 
          onClick={handleCall}
          className="touch-target rounded-full bg-hero-accent/10 text-hero-accent flex items-center justify-center btn-mobile-press flex-shrink-0"
          aria-label="Call Us"
        >
          <Phone className="w-5 h-5" />
        </button>
      </div>
      
      <button
        onClick={() => openQuoteModal()}
        className="flex-1 bg-hero-accent text-accent-foreground font-semibold rounded-md flex items-center justify-center h-11 btn-mobile-press gap-2 shadow-sm"
      >
        <FileText className="w-4 h-4" />
        Get Quote
      </button>
    </div>
  );
}
