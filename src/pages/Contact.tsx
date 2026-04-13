import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with API/email service
    setSubmitted(true);
  };

  return (
    <div className="bg-hero min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">Contact Us</h1>
        <p className="text-hero-muted max-w-2xl mb-12">Have a requirement? Fill the form below or reach us directly via WhatsApp.</p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-hero-frame border border-hero-muted/10 rounded-lg p-8">
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
                  { name: "company" as const, label: "Company", type: "text", required: false },
                  { name: "phone" as const, label: "Phone", type: "tel", required: true },
                  { name: "email" as const, label: "Email", type: "email", required: true },
                  { name: "product" as const, label: "Product of Interest", type: "text", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-hero-foreground text-sm font-medium mb-1.5">{field.label}{field.required && " *"}</label>
                    <input
                      type={field.type}
                      required={field.required}
                      value={form[field.name]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-hero border border-hero-muted/20 text-hero-foreground rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-hero-accent/50 transition-colors placeholder:text-hero-muted/50"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-hero-foreground text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-hero border border-hero-muted/20 text-hero-foreground rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-hero-accent/50 transition-colors placeholder:text-hero-muted/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-hero-accent text-accent-foreground font-semibold py-3 rounded-lg hover:bg-hero-accent-hover transition-colors"
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
              <div className="space-y-2 text-hero-muted text-sm">
                <p>📞 +91 98765 43210</p>
                <p>✉️ info@precisiontest.in</p>
                <p>📍 Chennai, Tamil Nadu, India</p>
              </div>
            </div>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
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
