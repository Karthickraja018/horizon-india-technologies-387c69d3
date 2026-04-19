import { MessageCircle, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTABand = () => (
  <section className="bg-primary text-primary-foreground border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <AnimatedSection>
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="label-eyebrow text-hero-accent">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 leading-tight">
              Have a testing requirement?
            </h2>
            <p className="text-primary-foreground/75 text-base max-w-xl">
              Talk to our engineers for expert guidance, technical specifications, and competitive quotations.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <a
              href="https://wa.me/919751458300?text=Hi%20I%20am%20interested%20in%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <a
              href="mailto:horizonindiatechnologies@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" /> Send Email
            </a>
            <a
              href="tel:+919751458300"
              className="text-primary-foreground/80 text-sm inline-flex items-center gap-2 hover:text-primary-foreground transition-colors lg:justify-end justify-center"
            >
              <Phone className="w-4 h-4" /> +91 97514 58300
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTABand;
