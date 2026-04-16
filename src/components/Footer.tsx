import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <Link to="/" className="text-hero-headline font-bold text-xl tracking-tight">
            <span className="text-hero-accent">Horizon</span> India Technologies
          </Link>
          <p className="text-hero-muted text-sm mt-4 leading-relaxed">
            Industrial Testing Equipment Supplier in Tamil Nadu. Sales, Service & Calibration of material testing, metrology, and quality control equipment.
          </p>
          <p className="text-hero-muted text-xs mt-3">Proprietor: T V Shankar</p>
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

        {/* Services */}
        <div>
          <h4 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
          <div className="space-y-2">
            {["Sales", "Services", "Calibration"].map((s) => (
              <Link key={s} to="/services" className="block text-hero-muted text-sm hover:text-hero-accent transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
          <div className="space-y-3 text-hero-muted text-sm">
            <a href="tel:+919751458300" className="flex items-start gap-2 hover:text-hero-accent transition-colors">
              <Phone className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" /> +91 97514 58300
            </a>
            <a href="mailto:horizonindiatechnologies@gmail.com" className="flex items-start gap-2 hover:text-hero-accent transition-colors">
              <Mail className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" /> horizonindiatechnologies@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
              <span>3/126, Mettu Street, Mettumahadhanapuram, Karur – 639105, Tamil Nadu</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
              <span>182, Nanjappa Nagar, 5th Street West, Singanallur, Coimbatore – 641005</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-border py-6">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-hero-muted text-xs">
        <p>© {new Date().getFullYear()} Horizon India Technologies. All rights reserved.</p>
        <p>Sales · Service · Calibration</p>
      </div>
    </div>
  </footer>
);

export default Footer;
