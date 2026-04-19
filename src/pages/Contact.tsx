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
        <span className="label-eyebrow">Get In Touch</span>
        <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2 mb-3">Contact Us</h1>
        <p className="text-hero-muted max-w-2xl mb-12">Have a requirement? Fill the form below or reach us directly — our engineers respond within 24 hours.</p>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="surface-card p-6 lg:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 border border-border rounded-md flex items-center justify-center mx-auto mb-4">
                    <Send className="w-5 h-5 text-hero-accent" />
                  </div>
                  <h3 className="text-hero-headline font-semibold text-xl mb-2">Thank You</h3>
                  <p className="text-hero-muted text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "name" as const, label: "Name", type: "text", required: true },
                      { name: "company" as const, label: "Company", type: "text", required: true },
                      { name: "phone" as const, label: "Phone", type: "tel", required: true },
                      { name: "email" as const, label: "Email", type: "email", required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-hero-muted text-xs uppercase tracking-wider font-semibold mb-1.5">{field.label} *</label>
                        <input
                          type={field.type}
                          required={field.required}
                          value={form[field.name]}
                          onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                          className="w-full bg-background border border-border text-hero-foreground rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-hero-accent transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-hero-muted text-xs uppercase tracking-wider font-semibold mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border text-hero-foreground rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-hero-accent transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card p-6">
              <span className="label-eyebrow">Direct Contact</span>
              <h3 className="text-hero-headline font-semibold text-base mt-1 mb-4">Reach Us</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+919751458300" className="flex items-center gap-2.5 text-hero-foreground hover:text-hero-accent transition-colors">
                  <Phone className="w-4 h-4 text-hero-accent" /> +91 97514 58300
                </a>
                <a href="mailto:horizonindiatechnologies@gmail.com" className="flex items-center gap-2.5 text-hero-foreground hover:text-hero-accent transition-colors break-all">
                  <Mail className="w-4 h-4 text-hero-accent shrink-0" /> horizonindiatechnologies@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
                <a
                  href="https://wa.me/919751458300?text=Hi%20I%20am%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href="tel:+919751458300" className="btn-outline text-sm py-2 px-4">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            </div>

            <div className="surface-card p-6">
              <span className="label-eyebrow">Head Office</span>
              <h3 className="text-hero-headline font-semibold text-base mt-1 mb-3">Karur</h3>
              <div className="flex items-start gap-2 text-hero-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                <span>3/126, Mettu Street, Mettumahadhanapuram, Mahadhanapuram North, Karur – 639105, Tamil Nadu</span>
              </div>
            </div>

            <div className="surface-card p-6">
              <span className="label-eyebrow">Branch Office</span>
              <h3 className="text-hero-headline font-semibold text-base mt-1 mb-3">Coimbatore</h3>
              <div className="flex items-start gap-2 text-hero-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                <span>182, Nanjappa Nagar, 5th Street West, Singanallur, Coimbatore – 641005</span>
              </div>
            </div>

            <div className="surface-card p-6">
              <span className="label-eyebrow">Hours</span>
              <h3 className="text-hero-headline font-semibold text-base mt-1 mb-3">Business Hours</h3>
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
