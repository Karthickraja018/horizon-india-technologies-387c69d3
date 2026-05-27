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
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Blended Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={industrialLabHero}
          alt="Industrial Material Testing Lab"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
        {/* Gradients to blend text and ensure legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 via-40% to-transparent lg:w-[120%]" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-background/50 backdrop-blur-[2px] mask-gradient-to-r pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }} />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-2xl">
          <AnimatedSection>
            <span className="eyebrow text-hero-accent block mb-4">NABL Accredited Laboratory</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Tamil Nadu's Trusted Material Testing <span className="text-hero-accent">Equipment Supplier.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-10 max-w-xl">
              Providing accurate, certified testing services and metrology instruments for metals, plastics, and critical industrial applications across South India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 w-full">
              <button
                type="button"
                onClick={() => openQuoteModal({ productName: "Material Testing Services" })}
                className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-bold shadow-lg shadow-hero-accent/20 transition-transform hover:-translate-y-0.5 rounded-lg btn-mobile-press flex justify-center"
              >
                Request a Quote
              </button>
              <Link
                href="/products"
                className="btn-outline w-full sm:w-auto px-8 py-4 text-sm font-bold bg-background/50 backdrop-blur-md flex items-center justify-center gap-2 group rounded-lg btn-mobile-press"
              >
                Explore Catalogue
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-border/40">
              {["NABL Accredited", "ISO/IEC 17025", "25+ Years Exp."].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-hero-accent" />
                  {text}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
