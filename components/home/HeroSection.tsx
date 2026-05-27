"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useQuoteModal } from "@/providers/QuoteModalContext";
import industrialLabHero from "@/assets/hero_industrial_lab.png";
import AnimatedSection from "@/components/common/AnimatedSection";

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 md:pt-28 pb-12 md:pb-20 flex items-center min-h-[80vh] md:min-h-[85vh]">
      {/* Desktop Background Image (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={industrialLabHero}
            alt="Industrial Material Testing Lab"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradients to blend text and ensure legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 via-40% to-transparent" />
          <div 
            className="absolute inset-y-0 left-0 w-1/2 bg-background/50 backdrop-blur-[2px] pointer-events-none" 
            style={{ WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }} 
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="max-w-2xl text-left">
            <AnimatedSection>
              <span className="text-xs font-bold tracking-widest uppercase text-hero-accent block mb-4 md:mb-6">NABL Accredited Laboratory</span>
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-foreground leading-[1.05] mb-6 break-words min-w-0" style={{ overflowWrap: 'anywhere' }}>
                Tamil Nadu's Trusted Material Testing <span className="text-hero-accent block md:inline mt-1 md:mt-0">Equipment Supplier.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-xl">
                Providing accurate, certified testing services and metrology instruments for metals, plastics, and critical industrial applications across South India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12 w-full">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ productName: "Material Testing Services" })}
                  className="w-full sm:w-auto px-6 py-4 text-sm font-bold bg-hero-accent text-white min-h-[44px] flex items-center justify-center transition-colors hover:bg-hero-accent/90"
                >
                  Request a Quote
                </button>
                <Link
                  href="/products"
                  className="w-full sm:w-auto px-6 py-4 text-sm font-bold border border-border min-h-[44px] flex items-center justify-center gap-2 transition-colors hover:bg-muted group bg-background/50 backdrop-blur-sm"
                >
                  Explore Catalogue
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-6 md:pt-8 border-t border-border/60">
                {["NABL Accredited", "ISO/IEC 17025", "25+ Years Exp."].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[13px] sm:text-sm font-bold uppercase tracking-wider text-foreground">
                     <CheckCircle2 className="w-4 h-4 text-hero-accent" />
                     {text}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
