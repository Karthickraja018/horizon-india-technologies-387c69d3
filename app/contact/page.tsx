"use client";

import { useState } from "react";
import { MessageCircle, Send, Phone, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

// Note: metadata export must be in a server component.
// For contact, the form is interactive so we use "use client".
// Title/description handled in layout or a parent server page wrapper if needed.

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    preferDemo: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-16">
          <span className="label-eyebrow">Get In Touch</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-headline mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-hero-muted max-w-2xl mx-auto text-lg">
            Have a requirement? Fill the form below or reach us directly — our engineers respond
            within 24 hours.
          </p>
        </div>

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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                    {[
                      { name: "name" as const, label: "Name", type: "text", required: true, placeholder: "Your Name" },
                      { name: "company" as const, label: "Company", type: "text", required: true, placeholder: "Company Name" },
                      { name: "phone" as const, label: "Phone", type: "tel", required: true, placeholder: "Phone Number" },
                      { name: "email" as const, label: "Email", type: "email", required: true, placeholder: "Email Address" },
                    ].map((field) => (
                      <div key={field.name} className="space-y-1.5">
                        <label className="block text-hero-muted text-xs uppercase tracking-wider font-bold">
                          {field.label} *
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={form[field.name]}
                          onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                          className="w-full bg-background border border-border text-hero-foreground rounded-md px-4 py-3 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-hero-muted/40"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-hero-muted text-xs uppercase tracking-wider font-bold">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border text-hero-foreground rounded-md px-4 py-3 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all resize-none placeholder:text-hero-muted/40"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                    <label className="inline-flex items-center gap-3 text-sm text-hero-foreground cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={form.preferDemo}
                        onChange={(e) => setForm({ ...form, preferDemo: e.target.checked })}
                        className="w-4 h-4 rounded border-border text-hero-accent focus:ring-hero-accent transition-colors cursor-pointer"
                      />
                      <span className="group-hover:text-hero-accent transition-colors">
                        I prefer a product demo along with quotation.
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="btn-primary px-10 py-3.5 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card p-6 lg:p-8">
              <span className="label-eyebrow">Direct Contact</span>
              <h3 className="text-hero-headline font-semibold text-lg mt-2 mb-4">Reach Us</h3>
              <div className="space-y-4 text-sm">
                <a
                  href="tel:+919751458300"
                  className="flex items-center gap-3 text-hero-foreground hover:text-hero-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-hero-accent/10 flex items-center justify-center group-hover:bg-hero-accent group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+91 97514 58300</span>
                </a>
                <a
                  href="mailto:horizonindiatechnologies@gmail.com"
                  className="flex items-center gap-3 text-hero-foreground hover:text-hero-accent transition-colors break-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-hero-accent/10 flex items-center justify-center group-hover:bg-hero-accent group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">horizonindiatechnologies@gmail.com</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                <a
                  href="https://wa.me/919751458300?text=Hi%20I%20am%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2.5 px-0 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href="tel:+919751458300"
                  className="btn-outline text-sm py-2.5 px-0 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            </div>

            <div className="surface-card p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-hero-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-hero-accent" />
                </div>
                <div>
                  <span className="label-eyebrow">Head Office</span>
                  <h3 className="text-hero-headline font-semibold text-lg mt-1 mb-2">Karur</h3>
                  <p className="text-hero-muted text-sm leading-relaxed">
                    3/126, Mettu Street, Mettumahadhanapuram, Mahadhanapuram North, Karur – 639105,
                    Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-hero-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-hero-accent" />
                </div>
                <div>
                  <span className="label-eyebrow">Branch Office</span>
                  <h3 className="text-hero-headline font-semibold text-lg mt-1 mb-2">Coimbatore</h3>
                  <p className="text-hero-muted text-sm leading-relaxed">
                    182, Nanjappa Nagar, 5th Street West, Singanallur, Coimbatore – 641005
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card p-6 lg:p-8">
              <span className="label-eyebrow">Hours</span>
              <h3 className="text-hero-headline font-semibold text-lg mt-2 mb-3">
                Business Hours
              </h3>
              <div className="text-hero-muted text-sm space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-border/50">
                  <span>Monday – Saturday</span>
                  <span className="font-medium text-hero-foreground">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
