import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, ShieldCheck } from "lucide-react";

const calibrationRows = [
  {
    equipment: "Hardness Testers",
    standard: "ASTM E18 / IS 1586",
    certificate: "NABL Certificate",
    turnaround: "24-48 hrs",
  },
  {
    equipment: "Universal Testing Machine (UTM)",
    standard: "ASTM E4",
    certificate: "NABL Certificate",
    turnaround: "48-72 hrs",
  },
  {
    equipment: "Impact Testing Machines",
    standard: "ASTM E23 / IS 1757",
    certificate: "NABL Certificate",
    turnaround: "48-72 hrs",
  },
  {
    equipment: "Metrology Instruments",
    standard: "ISO 17025 Traceable Methods",
    certificate: "NABL Certificate",
    turnaround: "24-72 hrs",
  },
  {
    equipment: "NDT Instruments",
    standard: "Applicable ASTM / ISO Methods",
    certificate: "NABL Certificate",
    turnaround: "48-96 hrs",
  },
];

const witnessBodies = ["IBR", "Lloyds", "TUV", "BVQI", "DNV", "RITES"];

const CalibrationServicesChennaiPage = () => {
  const [form, setForm] = useState({
    equipmentName: "",
    serialNo: "",
    location: "",
    urgency: "Standard",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const title = "NABL Calibration Services Chennai | Horizon India Technologies - Industrial Testing Equipment";
    const description =
      "NABL accredited calibration services in Chennai for hardness testers, UTMs, and material testing equipment. ISO/IEC 17025 compliant. Same-day scheduling. Serving Tamil Nadu.";
    const defaultTitle = "Horizon India Technologies | Industrial Testing Equipment";
    const defaultDescription = "Industrial testing equipment supplier in Tamil Nadu with sales, service, and NABL-accredited calibration support.";

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    return () => {
      document.title = defaultTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", defaultDescription);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="mb-5 text-sm text-hero-muted">
          <Link to="/" className="hover:text-hero-accent transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-hero-accent transition-colors">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-hero-foreground">Calibration Services Chennai</span>
        </div>

        <section className="mb-14">
          <span className="label-eyebrow">NABL & ISO/IEC 17025</span>
          <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2 mb-4 max-w-4xl">
            Accredited Calibration Services for Industrial Testing Equipment - Chennai, Tamil Nadu
          </h1>
          <p className="text-hero-muted max-w-4xl leading-relaxed">
            Calibration is the documented process of validating instrument accuracy against traceable standards. It is essential for
            consistent quality control, statutory compliance, and audit readiness under ISO 9001, IATF 16949, and NABL requirements.
            Our team provides fast, traceable, and accredited calibration support across Chennai and Tamil Nadu.
          </p>
        </section>

        <section className="mb-14">
          <span className="label-eyebrow">Scope of Calibration</span>
          <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-5">Coverage, Standards & Turnaround</h2>
          <div className="overflow-x-auto surface-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-[#f8fafc]">
                  <th className="text-left px-4 py-3 text-hero-headline">Equipment Type</th>
                  <th className="text-left px-4 py-3 text-hero-headline">Calibration Standard</th>
                  <th className="text-left px-4 py-3 text-hero-headline">Certificate Issued</th>
                  <th className="text-left px-4 py-3 text-hero-headline">Turnaround Time</th>
                </tr>
              </thead>
              <tbody>
                {calibrationRows.map((row) => (
                  <tr key={row.equipment} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-hero-foreground">{row.equipment}</td>
                    <td className="px-4 py-3 text-hero-muted">{row.standard}</td>
                    <td className="px-4 py-3 text-hero-foreground font-medium">{row.certificate}</td>
                    <td className="px-4 py-3 text-hero-muted">{row.turnaround}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <span className="label-eyebrow">Third-Party Witnessing</span>
          <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-4">Accepted Witnessing Bodies</h2>
          <p className="text-hero-muted mb-4 max-w-3xl">
            We can support calibration programs with third-party witnessing where project or customer requirements apply.
          </p>
          <div className="flex flex-wrap gap-2">
            {witnessBodies.map((body) => (
              <span key={body} className="tag-chip">
                {body}
              </span>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 surface-card p-6 lg:p-8">
            <span className="label-eyebrow">Calibration CTA</span>
            <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-4">Schedule a Calibration</h2>
            {submitted ? (
              <div className="rounded-md border border-border bg-background p-4">
                <p className="text-hero-headline font-semibold">Request received.</p>
                <p className="text-hero-muted text-sm mt-1">Our calibration team will contact you for slot confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-hero-muted text-xs uppercase tracking-wider font-semibold mb-1.5">Equipment Name</label>
                  <input
                    type="text"
                    required
                    value={form.equipmentName}
                    onChange={(event) => setForm({ ...form, equipmentName: event.target.value })}
                    className="w-full bg-background border border-border text-hero-foreground rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-hero-accent transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-hero-muted text-xs uppercase tracking-wider font-semibold mb-1.5">Serial No.</label>
                    <input
                      type="text"
                      required
                      value={form.serialNo}
                      onChange={(event) => setForm({ ...form, serialNo: event.target.value })}
                      className="w-full bg-background border border-border text-hero-foreground rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-hero-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-hero-muted text-xs uppercase tracking-wider font-semibold mb-1.5">Location</label>
                    <input
                      type="text"
                      required
                      value={form.location}
                      onChange={(event) => setForm({ ...form, location: event.target.value })}
                      className="w-full bg-background border border-border text-hero-foreground rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-hero-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-hero-muted text-xs uppercase tracking-wider font-semibold mb-1.5">Urgency</label>
                  <select
                    value={form.urgency}
                    onChange={(event) => setForm({ ...form, urgency: event.target.value })}
                    className="w-full bg-background border border-border text-hero-foreground rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-hero-accent transition-colors"
                  >
                    <option>Standard</option>
                    <option>Priority (24 hrs)</option>
                    <option>Same-day Scheduling</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary">
                  Schedule a Calibration
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 surface-card p-6 lg:p-8 h-fit">
            <span className="label-eyebrow">Download</span>
            <h3 className="text-xl font-bold text-hero-headline mt-2 mb-3">NABL Scope Certificate</h3>
            <p className="text-hero-muted text-sm mb-5">
              Download our NABL scope certificate directly for vendor qualification and audit documentation.
            </p>
            <a href="/nabl-scope-certificate.pdf" download className="btn-outline w-full justify-center">
              <Download className="w-4 h-4" /> Download NABL Scope Certificate (PDF)
            </a>
            <div className="mt-6 pt-5 border-t border-border text-sm text-hero-muted space-y-2">
              <p className="inline-flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-hero-accent" /> ISO/IEC 17025 aligned workflows
              </p>
              <p className="inline-flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-hero-accent" /> Chennai and Tamil Nadu coverage
              </p>
              <p className="inline-flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-hero-accent" /> Same-day scheduling options
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default CalibrationServicesChennaiPage;