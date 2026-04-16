import { MessageCircle, Mail } from "lucide-react";

const CTABand = () => (
  <section className="bg-background py-16 border-y border-border">
    <div className="container mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">
        Ready to discuss your requirement?
      </h2>
      <p className="text-hero-muted mb-8 max-w-xl mx-auto">
        Get in touch with our team for expert advice, quotations, or technical support.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/919751458300?text=Hi%20I%20am%20interested%20in%20your%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-8 py-3"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp Us
        </a>
        <a
          href="mailto:horizonindiatechnologies@gmail.com"
          className="btn-outline px-8 py-3"
        >
          <Mail className="w-5 h-5" /> Send Email
        </a>
      </div>
    </div>
  </section>
);

export default CTABand;
