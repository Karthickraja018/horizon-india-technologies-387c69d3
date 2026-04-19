import { AlertTriangle, Activity, FileWarning, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: Activity,
    title: "Unplanned downtime",
    desc: "Critical testing equipment fails without warning, halting QC and production.",
  },
  {
    icon: AlertTriangle,
    title: "Calibration drift",
    desc: "Measurement accuracy slips over time, putting product compliance at risk.",
  },
  {
    icon: FileWarning,
    title: "Audit & compliance gaps",
    desc: "Missing NABL traceability documentation during customer or regulatory audits.",
  },
];

const solutions = [
  "Single-vendor sales, AMC, and NABL calibration",
  "24-hour engineer dispatch across South India",
  "ISO/IEC 17025 traceable certificates",
  "Genuine spares & retrofit upgradation",
];

const IndustryChallenges = () => (
  <section className="section-base">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Challenges We Solve</span>
          <h2>From Equipment Risk to Reliable QC</h2>
          <p>Quality teams across automotive, foundry, and construction trust us to keep their labs running and audit-ready.</p>
        </div>
      </AnimatedSection>

      <div className="grid lg:grid-cols-12 gap-6">
        <AnimatedSection>
          <div className="lg:col-span-7 surface-card p-6 lg:p-8">
            <span className="label-eyebrow">The Problem</span>
            <h3 className="text-hero-headline font-bold text-xl md:text-2xl mt-1 mb-6">Common pain points in QC labs</h3>
            <ul className="space-y-5">
              {problems.map((p) => (
                <li key={p.title} className="problem-item">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-hero-muted shrink-0">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-hero-headline font-semibold text-[15px] mb-1">{p.title}</h4>
                    <p className="text-hero-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="lg:col-span-5 surface-card p-6 lg:p-8 h-full flex flex-col">
            <span className="label-eyebrow">Our Response</span>
            <h3 className="text-hero-headline font-bold text-xl md:text-2xl mt-1 mb-6">Lifecycle support, one partner</h3>
            <ul className="space-y-3 flex-1">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-hero-foreground">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-hero-muted text-xs uppercase tracking-wider">25+ years · 5 states · NABL accredited</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default IndustryChallenges;
