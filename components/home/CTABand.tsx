"use client";

import { MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { useQuoteModal } from "@/providers/QuoteModalContext";

const CTABand = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-hero-accent py-16 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }}
      />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-black/10 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-white/10 shadow-xl">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/70 block mb-2">Get In Touch</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Have a testing requirement? <br className="hidden sm:block" />
                <span className="text-white/80 font-medium">Talk to our engineers today.</span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="bg-white text-hero-accent hover:bg-white/90 font-bold text-sm py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" /> Get Recommendation
              </button>
              <a 
                href="tel:+919751458300" 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold text-sm py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" /> +91 97514 58300
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTABand;
