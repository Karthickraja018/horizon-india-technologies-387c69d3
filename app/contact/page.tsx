"use client";

/* Hallmark · component: ContactPage · genre: modern-minimal · theme: catalog (preserved) 
 * states: default · hover · focus 
 * contrast: pass
 */

import { useState } from "react";
import { MessageCircle, Send, Phone, Mail, MapPin, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    preferDemo: false,
    enquiryType: "Sales",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <AnimatedSection>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-12">
            <Link href="/" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Contact</span>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection className="mb-16 md:mb-24 max-w-3xl">
          <span className="eyebrow text-hero-accent block mb-4">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Let's discuss your testing requirements.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fill the form below or reach us directly. Our engineers typically respond within 24 hours to schedule consultations, demos, or calibrations.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Form Side */}
            <div className="lg:col-span-7">
              <div className="bg-card border border-border rounded-xl p-8 lg:p-12 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-hero-accent/10 border border-hero-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-hero-accent ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Request Received</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. An engineer will be assigned to your case and will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-semibold text-hero-accent hover:underline outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                      <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Enquiry Type *</label>
                      <div className="grid grid-cols-2 gap-4">
                        {["Sales", "Service & Calibration", "Support", "Other"].map((type) => (
                          <label key={type} className={`border rounded-lg p-4 cursor-pointer transition-all ${form.enquiryType === type ? 'border-hero-accent bg-hero-accent/5 ring-1 ring-hero-accent/20' : 'border-border bg-background hover:bg-muted'}`}>
                            <input 
                              type="radio" 
                              name="enquiryType" 
                              value={type}
                              checked={form.enquiryType === type}
                              onChange={(e) => setForm({...form, enquiryType: e.target.value})}
                              className="sr-only" 
                            />
                            <span className={`text-sm font-semibold ${form.enquiryType === type ? 'text-hero-accent' : 'text-foreground'}`}>{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-muted-foreground/50"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Company *</label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-muted-foreground/50"
                          placeholder="ACME Corp"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-muted-foreground/50"
                          placeholder="+91 90000 00000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-muted-foreground/50"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all resize-none placeholder:text-muted-foreground/50"
                        placeholder="Tell us about the equipment or standard you are looking to test..."
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-border">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={form.preferDemo}
                            onChange={(e) => setForm({ ...form, preferDemo: e.target.checked })}
                            className="w-5 h-5 appearance-none border border-border rounded text-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all checked:bg-hero-accent checked:border-hero-accent cursor-pointer peer"
                          />
                          <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm text-foreground font-medium group-hover:text-hero-accent transition-colors select-none">
                          I prefer a product demo along with quotation.
                        </span>
                      </label>
                      
                      <button
                        type="submit"
                        className="btn-primary px-8 py-3.5 shadow-sm rounded-lg"
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Info Side (F1 Bento variation) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Contact */}
              <div className="bg-hero-accent/5 border border-hero-accent/20 rounded-xl p-8">
                <span className="eyebrow text-hero-accent block mb-4">Direct Contact</span>
                <h3 className="text-2xl font-bold text-foreground mb-6">Reach Us Instantly</h3>
                <div className="space-y-6 mb-8">
                  <a href="tel:+919751458300" className="flex items-center gap-4 text-foreground hover:text-hero-accent transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                    <div className="w-12 h-12 bg-background border border-hero-accent/20 rounded-full flex items-center justify-center group-hover:bg-hero-accent group-hover:text-white transition-all shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Phone</p>
                      <p className="font-bold text-lg">+91 97514 58300</p>
                    </div>
                  </a>
                  <a href="mailto:horizonindiatechnologies@gmail.com" className="flex items-center gap-4 text-foreground hover:text-hero-accent transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                    <div className="w-12 h-12 bg-background border border-hero-accent/20 rounded-full flex items-center justify-center group-hover:bg-hero-accent group-hover:text-white transition-all shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Email</p>
                      <p className="font-bold break-all">horizonindiatechnologies@gmail.com</p>
                    </div>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/919751458300?text=Hi%20I%20am%20interested%20in%20your%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-background"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a
                    href="tel:+919751458300"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-background border border-border px-4 py-3 text-sm font-bold text-foreground hover:bg-muted transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <MapPin className="w-6 h-6 text-hero-accent mb-4" />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block mb-1">Head Office</span>
                  <h3 className="text-lg font-bold text-foreground mb-3">Karur</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    3/126, Mettu Street, Mettumahadhanapuram, Mahadhanapuram North, Karur – 639105, TN
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <MapPin className="w-6 h-6 text-hero-accent mb-4" />
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold block mb-1">Branch Office</span>
                  <h3 className="text-lg font-bold text-foreground mb-3">Coimbatore</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    182, Nanjappa Nagar, 5th Street West, Singanallur, Coimbatore – 641005
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <Clock className="w-6 h-6 text-hero-accent shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="text-lg font-bold text-foreground mb-3">Business Hours</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-muted-foreground">Mon – Sat</span>
                      <span className="font-semibold text-foreground">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
