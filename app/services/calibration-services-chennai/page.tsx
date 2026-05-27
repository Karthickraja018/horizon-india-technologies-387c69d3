"use client";

/* Hallmark · component: CalibrationPage · genre: modern-minimal · theme: catalog (preserved) 
 * states: default · hover · focus 
 * contrast: pass
 */

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Download, ShieldCheck, ChevronRight, Send, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

const calibrationRows = [
  { equipment: "Hardness Testers", standard: "ASTM E18 / IS 1586", certificate: "NABL", turnaround: "24-48 hrs" },
  { equipment: "Universal Testing Machines", standard: "ASTM E4", certificate: "NABL", turnaround: "48-72 hrs" },
  { equipment: "Impact Testing Machines", standard: "ASTM E23 / IS 1757", certificate: "NABL", turnaround: "48-72 hrs" },
  { equipment: "Metrology Instruments", standard: "ISO 17025 Traceable", certificate: "NABL", turnaround: "24-72 hrs" },
  { equipment: "NDT Instruments", standard: "ASTM / ISO Methods", certificate: "NABL", turnaround: "48-96 hrs" },
];

const witnessBodies = ["IBR", "Lloyds", "TUV", "BVQI", "DNV", "RITES"];

export default function CalibrationServicesChennaiPage() {
  const [form, setForm] = useState({
    equipmentName: "",
    serialNo: "",
    location: "",
    urgency: "Standard",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <AnimatedSection>
          <div className="flex items-center flex-wrap gap-2 text-xs font-medium text-muted-foreground mb-12">
            <Link href="/" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Calibration</span>
          </div>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection className="mb-20">
          <div className="max-w-4xl">
            <span className="eyebrow text-hero-accent block mb-4">NABL & ISO/IEC 17025</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Accredited Calibration Services for South India.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ensure audit readiness and manufacturing precision. Fast, traceable, and accredited calibration support across Chennai, Coimbatore, and Tamil Nadu.
            </p>
          </div>
        </AnimatedSection>

        {/* Scope Table */}
        <AnimatedSection className="mb-24 pt-16 border-t border-border">
          <div className="mb-10">
            <span className="eyebrow text-hero-accent block mb-3">Scope of Calibration</span>
            <h2 className="text-3xl font-bold text-foreground">Standards & Turnaround Times</h2>
          </div>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="px-6 py-4 font-bold text-foreground uppercase tracking-widest text-[11px]">Equipment Type</th>
                    <th className="px-6 py-4 font-bold text-foreground uppercase tracking-widest text-[11px]">Calibration Standard</th>
                    <th className="px-6 py-4 font-bold text-foreground uppercase tracking-widest text-[11px]">Certificate</th>
                    <th className="px-6 py-4 font-bold text-foreground uppercase tracking-widest text-[11px]">Turnaround</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {calibrationRows.map((row) => (
                    <tr key={row.equipment} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground whitespace-nowrap">{row.equipment}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.standard}</td>
                      <td className="px-6 py-4 text-hero-accent font-semibold">{row.certificate}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* Third Party Witnessing */}
        <AnimatedSection className="mb-24 pt-16 border-t border-border">
          <div className="mb-8">
            <span className="eyebrow text-hero-accent block mb-3">Compliance</span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Accepted Witnessing Bodies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We support complex calibration programs requiring third-party witnessing for critical projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {witnessBodies.map((body) => (
              <span key={body} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-bold text-foreground hover:border-hero-accent/50 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-hero-accent" /> {body}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Scheduling Form & Download block */}
        <AnimatedSection className="pt-16 border-t border-border">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Form */}
            <div className="lg:col-span-7">
              <span className="eyebrow text-hero-accent block mb-3">Service Request</span>
              <h2 className="text-3xl font-bold text-foreground mb-8">Schedule a Calibration</h2>
              
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-hero-accent/10 border border-hero-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-hero-accent ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Request Received</h3>
                    <p className="text-muted-foreground">Our calibration team will contact you shortly to confirm your slot.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Equipment Name *</label>
                      <input
                        type="text"
                        required
                        value={form.equipmentName}
                        onChange={(event) => setForm({ ...form, equipmentName: event.target.value })}
                        className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-muted-foreground/50"
                        placeholder="e.g. Universal Testing Machine 100kN"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Serial No. *</label>
                        <input
                          type="text"
                          required
                          value={form.serialNo}
                          onChange={(event) => setForm({ ...form, serialNo: event.target.value })}
                          className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-muted-foreground/50"
                          placeholder="Machine Serial No."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Location *</label>
                        <input
                          type="text"
                          required
                          value={form.location}
                          onChange={(event) => setForm({ ...form, location: event.target.value })}
                          className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all placeholder:text-muted-foreground/50"
                          placeholder="City / Area"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-8">
                      <label className="block text-xs uppercase tracking-widest font-bold text-foreground">Urgency</label>
                      <div className="relative">
                        <select
                          value={form.urgency}
                          onChange={(event) => setForm({ ...form, urgency: event.target.value })}
                          className="w-full bg-background border border-border text-foreground rounded-lg px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-hero-accent focus:ring-1 focus:ring-hero-accent/20 transition-all appearance-none"
                        >
                          <option>Standard (48-72 hrs)</option>
                          <option>Priority (24-48 hrs)</option>
                          <option>Same-day Scheduling (if available)</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn-primary w-full py-3.5 rounded-lg text-sm">
                      Submit Schedule Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Download */}
            <aside className="lg:col-span-5 h-fit lg:sticky lg:top-24 mt-12 lg:mt-0">
              <div className="bg-hero-accent/5 border border-hero-accent/20 rounded-xl p-8 lg:p-10">
                <span className="eyebrow text-hero-accent block mb-3">Download</span>
                <h3 className="text-2xl font-bold text-foreground mb-4">NABL Scope Certificate</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Download our official NABL scope certificate for your vendor qualification process, QA records, and audit documentation.
                </p>
                <a href="/nabl-scope-certificate.pdf" download className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-hero-accent px-6 py-4 text-sm font-bold text-white hover:bg-hero-accent/90 transition-colors shadow-lg shadow-hero-accent/20 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-background">
                  <Download className="w-5 h-5" /> Download PDF Certificate
                </a>
                
                <div className="mt-8 pt-8 border-t border-hero-accent/20 space-y-4">
                  <p className="flex items-start gap-3 text-sm text-foreground font-medium">
                    <ShieldCheck className="w-5 h-5 text-hero-accent shrink-0" /> 
                    <span>ISO/IEC 17025 aligned workflows ensuring complete traceability.</span>
                  </p>
                  <p className="flex items-start gap-3 text-sm text-foreground font-medium">
                    <ShieldCheck className="w-5 h-5 text-hero-accent shrink-0" /> 
                    <span>Pan-South India coverage with quick turnaround capabilities.</span>
                  </p>
                </div>
              </div>
            </aside>
            
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
