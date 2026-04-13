import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-hero border-t border-hero-muted/10">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="text-hero-headline font-bold text-xl tracking-tight">
            <span className="text-hero-accent">Precision</span>Test
          </Link>
          <p className="text-hero-muted text-sm mt-4 leading-relaxed">
            Leading supplier of material testing equipment across Southern India. NABL accredited with 25+ years of expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-hero-muted text-sm hover:text-hero-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h4 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
          <div className="space-y-2">
            {[
              { to: "/products/hardness-testing", label: "Hardness Testing" },
              { to: "/products/universal-testing-machines", label: "UTM" },
              { to: "/products/ndt-equipment", label: "NDT Equipment" },
              { to: "/products/metrology", label: "Metrology" },
              { to: "/products/impact-testing", label: "Impact Testing" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-hero-muted text-sm hover:text-hero-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
          <div className="space-y-3 text-hero-muted text-sm">
            <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-hero-accent" /> +91 98765 43210</div>
            <div className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-hero-accent" /> info@precisiontest.in</div>
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-hero-accent" /> Chennai, Tamil Nadu, India</div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-hero-muted/10 py-6">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-hero-muted text-xs">
        <p>© {new Date().getFullYear()} PrecisionTest. All rights reserved.</p>
        <p>NABL Accredited · ISO 17025 Certified</p>
      </div>
    </div>
  </footer>
);

export default Footer;
