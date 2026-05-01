"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useQuoteModal } from "@/providers/QuoteModalContext";
import industrialLabHero from "@/assets/industrial-lab-hero.png";

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[78vh] lg:min-h-[680px] bg-background overflow-hidden"
    >
      {/* Background Image Container with Fade Effect */}
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        variants={imageVariants}
        className="absolute inset-y-0 right-0 w-full lg:w-[72%] h-full z-0 opacity-25 lg:opacity-100"
      >
        <Image
          src={industrialLabHero}
          alt="Industrial Material Testing Lab"
          fill
          className="w-full h-full object-cover"
          priority
        />
        {/* Desktop Gradient Fade: Moving fade closer to text to reveal more image */}
        <div className="hidden lg:block absolute inset-y-0 -left-1 w-full bg-gradient-to-r from-background via-background via-[18%] to-transparent z-10" />
        
        {/* Mobile Gradient Fade: Revealing more image at the bottom */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-background via-background/75 via-25% to-transparent z-10" />
      </motion.div>

      {/* Content Side */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <motion.div
             initial="hidden"
             animate="visible"
             transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
             className="w-full max-w-3xl"
          >
            <motion.div variants={textVariants} className="space-y-6">
              <h1 className="h1 text-hero-headline">
                Reliable Material Testing Solutions for{" "}
                <span className="text-hero-accent">Industrial Quality Assurance</span>
              </h1>

              <p className="text-body-lg max-w-xl">
                Providing accurate, certified testing services for metals, plastics, and industrial applications.
              </p>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-10 pt-8">
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ productName: "Material Testing Services" })}
                  className="btn-primary px-7 py-3.5 text-base"
                >
                  Request a Quote
                </button>
                <Link
                  href="/products"
                  className="btn-outline px-7 py-3.5 text-base"
                >
                  Talk to an Engineer
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-3 pt-6">
                {[
                  "NABL Certified",
                  "ISO 17025",
                  "25+ Years Experience"
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-hero-foreground font-semibold tracking-wide uppercase bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-hero-accent" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

