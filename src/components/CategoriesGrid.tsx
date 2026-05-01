"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import hardnessImg from "@/assets/products/rockwell-hardness-tester.png";
import utmImg from "@/assets/products/electromechanical-utm.png";
import impactImg from "@/assets/products/charpy-impact-tester.png";
import ndtImg from "@/assets/products/ultrasonic-flaw-detector.png";
import metrologyImg from "@/assets/products/digital-height-gauge.png";
import microscopeImg from "@/assets/products/metallurgical-microscope.png";

const featuredCategories = [
  { slug: "hardness-testing", name: "Hardness Testing", description: "Rockwell, Brinell & Vickers testers for metals and composites.", image: hardnessImg, productCount: 8 },
  { slug: "universal-testing-machines", name: "Universal Testing Machines", description: "Servo-hydraulic & electromechanical UTMs for tensile and compression.", image: utmImg, productCount: 6 },
  { slug: "impact-testing", name: "Impact Testing", description: "Charpy & Izod impact testers with digital readouts.", image: impactImg, productCount: 4 },
  { slug: "ndt-equipment", name: "NDT Equipment", description: "Ultrasonic flaw detectors and inspection systems.", image: ndtImg, productCount: 6 },
  { slug: "metrology", name: "Metrology", description: "Precision measuring instruments and height gauges.", image: metrologyImg, productCount: 7 },
  { slug: "microscopes", name: "Microscopes", description: "Metallurgical, stereo and digital microscopes.", image: microscopeImg, productCount: 5 },
];

const CategoriesGrid = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="section-base">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow">Our Range</span>
              <h2 className="h2 mt-2">Product Categories</h2>
              <p className="text-body-sm mt-2 max-w-xl">Material testing, metrology, and quality control equipment for every industry.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6 w-full sm:w-auto">
              <Link href="/products" className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all order-2 sm:order-1 self-start sm:self-auto">
                View all categories <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex gap-2 order-1 sm:order-2 self-end sm:self-auto">
                <button 
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 shadow-sm hover:shadow"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 shadow-sm hover:shadow"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative group">
            <div 
              ref={scrollContainerRef}
              className="-mx-6 lg:-mx-12 px-6 lg:px-12 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex gap-4 min-w-max">
                {featuredCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="group surface-card animate-card-lift overflow-hidden flex flex-col w-[260px] sm:w-[280px] shrink-0 snap-start"
                  >
                    <div className="aspect-[4/3] bg-background border-b border-border flex items-center justify-center p-5 image-hover relative">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-contain p-5"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-semibold text-base mb-1 group-hover:text-hero-accent transition-colors">{cat.name}</h3>
                      <p className="text-body-sm line-clamp-2 flex-1">{cat.description}</p>
                      <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                        <span className="text-gray-500 text-[10px] uppercase tracking-wider">{cat.productCount} models</span>
                        <span className="text-hero-accent text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                          View <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}

                <Link
                  href="/products"
                  className="group surface-card animate-card-lift border-dashed flex flex-col items-center justify-center text-center w-[260px] sm:w-[280px] shrink-0 snap-start p-6"
                >
                  <span className="eyebrow mb-2">Full Catalogue</span>
                  <p className="text-gray-900 font-semibold text-base mb-1 group-hover:text-hero-accent transition-colors">Explore all categories</p>
                  <p className="text-body-sm">10 product categories · 50+ models</p>
                  <span className="text-hero-accent text-xs font-semibold inline-flex items-center gap-1 mt-3 group-hover:gap-1.5 transition-all">
                    Browse all <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CategoriesGrid;
