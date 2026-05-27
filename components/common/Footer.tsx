"use client";

/* Hallmark · component: Footer · genre: modern-minimal · theme: catalog (preserved) 
 * macrostructure: Index style category list (Ft3)
 * states: default · hover · focus 
 * contrast: pass
 */

import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import BrandLogo from "@/components/common/BrandLogo";

const Footer = () => (
  <footer className="bg-background border-t border-border mt-auto">
    <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
      <AnimatedSection>
        {/* Top Section: Logo & Address */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12">
          
          <div className="flex flex-col gap-6 lg:pr-8">
            <Link href="/" aria-label="Horizon India Technologies home" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              <BrandLogo size="md" />
            </Link>
            <p className="text-body-sm max-w-sm">
              Industrial Testing Equipment Supplier in Tamil Nadu. Sales, Service & Calibration of
              material testing, metrology, and quality control equipment.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground mt-2">
              <a
                href="tel:+919751458300"
                className="flex items-start gap-3 hover:text-hero-accent transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 97514 58300
              </a>
              <a
                href="mailto:horizonindiatechnologies@gmail.com"
                className="flex items-start gap-3 hover:text-hero-accent transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /> horizonindiatechnologies@gmail.com
              </a>
            </div>
          </div>

          {/* Columns */}
          <div>
            <p className="eyebrow mb-5 text-foreground">Equipment</p>
            <ul className="flex flex-col gap-3">
              {[
                { to: "/products/hardness-testing", label: "Hardness Testers" },
                { to: "/products/universal-testing-machines", label: "Universal Testing" },
                { to: "/products/metrology", label: "Metrology" },
                { to: "/products/ndt-equipment", label: "NDT Equipment" },
                { to: "/products", label: "View All Products" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    className="text-sm text-muted-foreground hover:text-hero-accent transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-foreground">Services</p>
            <ul className="flex flex-col gap-3">
              {[
                { to: "/services/calibration-services-chennai", label: "NABL Calibration" },
                { to: "/services", label: "Annual Maintenance" },
                { to: "/services", label: "Installation & Training" },
                { to: "/services", label: "Equipment Repair" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    className="text-sm text-muted-foreground hover:text-hero-accent transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-foreground">Company</p>
            <ul className="flex flex-col gap-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact & Locations" },
                { to: "/about#certifications", label: "Certifications" },
                { to: "/about#clients", label: "Clients" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    className="text-sm text-muted-foreground hover:text-hero-accent transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-foreground">Locations</p>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground block mb-1">Karur (Head Office)</span>
                3/126, Mettu Street, Mettumahadhanapuram, Karur – 639105, TN
              </li>
              <li className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold text-foreground block mb-1">Coimbatore</span>
                182, Nanjappa Nagar, 5th St West, Singanallur, Coimbatore – 641005
              </li>
            </ul>
          </div>

        </div>
      </AnimatedSection>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-border bg-muted/20 pb-20 md:pb-0">
      <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p>© {new Date().getFullYear()} Horizon India Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">·</span>
            <span>GSTIN: 33BTYPS8489P1Z2</span>
            <span className="hidden md:inline">·</span>
            <span>Proprietor: T V Shankar</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
