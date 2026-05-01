"use client";

import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { categories } from "@/constants/data";
import { useQuoteModal } from "@/providers/QuoteModalContext";

interface QuoteFormState {
  category: string;
  productRequirement: string;
  application: string;
  requirements: string[];
  quantity: string;
  notes: string;
  name: string;
  company: string;
  phone: string;
  email: string;
}

const requirementOptions = ["Portable", "Desktop", "Automated", "Manual", "High-throughput"];

const initialState: QuoteFormState = {
  category: "",
  productRequirement: "",
  application: "",
  requirements: [],
  quantity: "",
  notes: "",
  name: "",
  company: "",
  phone: "",
  email: "",
};

const QuoteFormModal = () => {
  const { isOpen, closeQuoteModal, prefill } = useQuoteModal();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<QuoteFormState>(initialState);

  useEffect(() => {
    if (!isOpen) return;
    setStep(1);
    setForm((prev) => ({
      ...initialState,
      category: prefill?.category ?? prev.category,
      productRequirement:
        prefill?.productName && prefill?.model
          ? `${prefill.productName} (${prefill.model})`
          : prefill?.productName ?? "",
    }));
  }, [isOpen, prefill]);

  const progress = useMemo(() => (step / 3) * 100, [step]);

  const toggleRequirement = (value: string) => {
    setForm((prev) => {
      const exists = prev.requirements.includes(value);
      return {
        ...prev,
        requirements: exists
          ? prev.requirements.filter((item) => item !== value)
          : [...prev.requirements, value],
      };
    });
  };

  const canContinue =
    (step === 1 && Boolean(form.category)) ||
    (step === 2 && Boolean(form.application.trim())) ||
    (step === 3 && Boolean(form.name.trim() && form.company.trim() && form.phone.trim() && form.email.trim()));

  const submit = () => {
    const message = [
      "Hi, I need a quotation.",
      `Category: ${form.category}`,
      `Requirement: ${form.productRequirement || "Not specified"}`,
      `Application: ${form.application}`,
      `Preferences: ${form.requirements.length ? form.requirements.join(", ") : "Not specified"}`,
      `Quantity: ${form.quantity || "Not specified"}`,
      `Notes: ${form.notes || "None"}`,
      `Contact: ${form.name}, ${form.company}, ${form.phone}, ${form.email}`,
    ].join("\n");

    window.open(`https://wa.me/919751458300?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    closeQuoteModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? undefined : closeQuoteModal())}>
      <DialogContent className="max-w-xl border-border shadow-[0_20px_25px_rgba(15,23,42,0.1),0_8px_10px_rgba(15,23,42,0.06)]">
        <DialogHeader>
          <DialogTitle className="text-hero-headline">Get a Fast Quote</DialogTitle>
          <DialogDescription>Step {step} of 3. Tell us your requirement and our engineers will respond quickly.</DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-hero-accent transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex justify-between mt-2 text-[11px] uppercase tracking-wider text-hero-muted">
              <span>Requirement</span>
              <span>Details</span>
              <span>Contact</span>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-hero-muted mb-1.5">Product Category *</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.slug} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-hero-muted mb-1.5">Specific Product (optional)</label>
                <input
                  type="text"
                  value={form.productRequirement}
                  onChange={(e) => setForm((prev) => ({ ...prev, productRequirement: e.target.value }))}
                  placeholder="Model or product name"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-hero-muted mb-1.5">Application / Industry *</label>
                <input
                  type="text"
                  value={form.application}
                  onChange={(e) => setForm((prev) => ({ ...prev, application: e.target.value }))}
                  placeholder="Example: Automotive fasteners testing"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-hero-muted mb-2">Preferred Setup</p>
                <div className="grid grid-cols-2 gap-2">
                  {requirementOptions.map((option) => {
                    const selected = form.requirements.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleRequirement(option)}
                        className={`text-sm rounded-md border px-3 py-2 text-left transition-colors ${
                          selected ? "border-hero-accent text-hero-accent" : "border-border text-hero-foreground"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="number"
                  value={form.quantity}
                  onChange={(e) => setForm((prev) => ({ ...prev, quantity: e.target.value }))}
                  placeholder="Quantity"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
                <input
                  type="text"
                  value={form.notes}
                  onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any spec note"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Name *"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                  placeholder="Company *"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Phone *"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="Email *"
                  className="w-full rounded-md border border-border px-3 py-2.5 bg-background text-sm"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
              disabled={step === 1}
              className="btn-outline text-sm px-4 py-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => Math.min(prev + 1, 3))}
                disabled={!canContinue}
                className="btn-primary text-sm px-4 py-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={!canContinue}
                className="btn-primary text-sm px-4 py-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                Get Quote
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
