import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export interface QuotePrefill {
  productName?: string;
  model?: string;
  category?: string;
}

interface QuoteModalContextValue {
  isOpen: boolean;
  prefill: QuotePrefill | null;
  openQuoteModal: (prefill?: QuotePrefill) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | undefined>(undefined);

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<QuotePrefill | null>(null);

  const openQuoteModal = useCallback((nextPrefill?: QuotePrefill) => {
    setPrefill(nextPrefill ?? null);
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      prefill,
      openQuoteModal,
      closeQuoteModal,
    }),
    [isOpen, prefill, openQuoteModal, closeQuoteModal],
  );

  return <QuoteModalContext.Provider value={value}>{children}</QuoteModalContext.Provider>;
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return context;
};
