"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import BrandLogo from "./BrandLogo";

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Link href="/" aria-label="Horizon India Technologies home">
              <BrandLogo size="md" />
            </Link>
            <p className="text-body-sm mt-4">
              Industrial Testing Equipment Supplier in Tamil Nadu. Sales, Service & Calibration of
              material testing, metrology, and quality control equipment.
            </p>
            <p className="text-gray-500 text-xs mt-3">Proprietor: T V Shankar</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="eyebrow !text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/services", label: "Services" },
                { to: "/services/calibration-services-chennai", label: "Calibration Services" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  href={l.to}
                  className="block text-body-sm hover:text-hero-accent transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="eyebrow !text-gray-900 mb-4">Services</h4>
            <div className="space-y-2.5">
              {["Sales", "Services", "Calibration"].map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="block text-body-sm hover:text-hero-accent transition-colors duration-200"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow !text-gray-900 mb-4">Contact Us</h4>
            <div className="space-y-3 text-body-sm">
              <a
                href="tel:+919751458300"
                className="flex items-start gap-2 hover:text-hero-accent transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mt-0.5 text-hero-muted shrink-0" /> +91 97514 58300
              </a>
              <a
                href="mailto:horizonindiatechnologies@gmail.com"
                className="flex items-start gap-2 hover:text-hero-accent transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mt-0.5 text-hero-muted shrink-0" />{" "}
                horizonindiatechnologies@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-hero-muted shrink-0" />
                <span>
                  3/126, Mettu Street, Mettumahadhanapuram, Karur – 639105, Tamil Nadu
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-hero-muted shrink-0" />
                <span>182, Nanjappa Nagar, 5th Street West, Singanallur, Coimbatore – 641005</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>

    <div className="border-t border-border py-6">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Horizon India Technologies. All rights reserved.</p>
        <p>Sales · Service · Calibration</p>
      </div>
    </div>
  </footer>
);

export default Footer;
