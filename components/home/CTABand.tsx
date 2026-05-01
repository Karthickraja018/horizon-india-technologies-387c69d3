"use client";

import { MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { useQuoteModal } from "@/providers/QuoteModalContext";

const CTABand = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
  <section className="bg-card border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 py-10">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h3 className="h3 mt-1">
              Have a testing requirement? <span className="text-gray-500 font-normal">Talk to our engineers.</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="btn-primary text-sm py-2.5 px-4 animate-button-scale"
            >
              <MessageCircle className="w-4 h-4" /> Get Recommendation
            </button>
            <a href="tel:+919751458300" className="btn-outline text-sm py-2.5 px-4 animate-button-scale">
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
