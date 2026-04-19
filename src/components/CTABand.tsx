import { MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTABand = () => (
  <section className="bg-card border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 py-10">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <span className="label-eyebrow">Get In Touch</span>
            <h2 className="text-xl md:text-2xl font-bold text-hero-headline mt-1 leading-tight">
              Have a testing requirement? <span className="text-hero-muted font-normal">Talk to our engineers.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a
              href="https://wa.me/919751458300?text=Hi%20I%20am%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-4"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a href="tel:+919751458300" className="btn-outline text-sm py-2.5 px-4">
              <Phone className="w-4 h-4" /> +91 97514 58300
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTABand;
