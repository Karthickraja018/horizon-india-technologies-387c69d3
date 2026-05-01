"use client";

import { useQuoteModal } from "@/context/QuoteModalContext";

interface InlineCtaBlockProps {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

const InlineCtaBlock = ({ title, description, primaryCta, secondaryCta }: InlineCtaBlockProps) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="surface-card p-6 md:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div className="max-w-2xl">
          <p className="label-eyebrow mb-2">Consultation</p>
          <h3 className="text-xl md:text-2xl font-bold text-hero-headline leading-tight">{title}</h3>
          <p className="text-hero-muted text-sm mt-2">{description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="btn-primary text-sm px-5 py-2.5 animate-button-scale"
          >
            {primaryCta}
          </button>
          <a href="tel:+919751458300" className="btn-outline text-sm px-5 py-2.5 animate-button-scale">
            {secondaryCta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InlineCtaBlock;
