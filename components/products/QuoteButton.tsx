"use client";

import { useQuoteModal } from "@/providers/QuoteModalContext";

interface QuoteButtonProps {
  productName: string;
  model: string;
  category: string;
  className?: string;
  children?: React.ReactNode;
}

export default function QuoteButton({ productName, model, category, className, children }: QuoteButtonProps) {
  const { openQuoteModal } = useQuoteModal();
  
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        openQuoteModal({ productName, model, category });
      }}
      className={className}
    >
      {children || "Request Quote"}
    </button>
  );
}
