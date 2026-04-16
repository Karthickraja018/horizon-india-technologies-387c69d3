import { useState } from "react";
import { MessageCircle, Send, Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">Contact Us</h1>
        <p className="text-hero-muted max-w-2xl mb-12">Have a requirement? Fill the form below or reach us directly.</p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="surface-card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-hero-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-hero-accent" />
                </div>
                <h3 className="text-hero-headline font-semibold text-xl mb-2">Thank You!</h3>
                <p className="text-hero-muted">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name" as const, label: "Name", type: "text", required: true },
                  { name: "company" as const, label: "Company", type: "text", required: true },
                  { name: "phone" as const, label: "Phone", type: "tel", required: true },
                  { name: "email" as const, label: "Email", type: "email", required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-hero-foreground text-sm font-medium mb-1.5">{field.label} *</label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.name]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-background border border-border text-hero-foreground rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-hero-accent/50 transition-colors placeholder:text-hero-muted/50"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-hero-foreground text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-background border border-border text-hero-foreground rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-hero-accent/50 transition-colors placeholder:text-hero-muted/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-hero-headline font-semibold text-lg mb-3">Direct Contact</h3>
              <div className="space-y-3 text-hero-muted text-sm">
                <a href="tel:+919751458300" className="flex items-center gap-2 hover:text-hero-accent transition-colors">
                  <Phone className="w-4 h-4 text-hero-accent" /> +91 97514 58300
                </a>
                <a href="mailto:horizonindiatechnologies@gmail.com" className="flex items-center gap-2 hover:text-hero-accent transition-colors">
                  <Mail className="w-4 h-4 text-hero-accent" /> horizonindiatechnologies@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-hero-headline font-semibold text-lg mb-3">Head Office – Karur</h3>
              <div className="flex items-start gap-2 text-hero-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                <span>3/126, Mettu Street, Mettumahadhanapuram, Mahadhanapuram North, Karur – 639105, Tamil Nadu</span>
              </div>
            </div>

            <div>
              <h3 className="text-hero-headline font-semibold text-lg mb-3">Branch Office – Coimbatore</h3>
              <div className="flex items-start gap-2 text-hero-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                <span>182, Nanjappa Nagar, 5th Street West, Singanallur, Coimbatore – 641005</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919751458300"
                className="btn-primary"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="https://wa.me/919751458300?text=Hi%20I%20am%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>

            <div>
              <h3 className="text-hero-headline font-semibold text-lg mb-3">Business Hours</h3>
              <div className="text-hero-muted text-sm space-y-1">
                <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
