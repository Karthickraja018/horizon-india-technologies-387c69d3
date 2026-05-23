"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ProductVariant } from "@/types";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedModel: string;
}

export default function VariantSelector({ variants, selectedModel }: VariantSelectorProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!variants || variants.length === 0) return null;

  const activeModel = selectedModel || variants[0]?.modelName || "";
  const selectedVariant = variants.find(v => v.modelName === activeModel) || variants[0];

  return (
    <div className="mt-8 mb-6">
      <h3 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-3">
        Available Models
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {variants.map(variant => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("model", variant.modelName);
          const href = `${pathname}?${params.toString()}`;
          const isActive = activeModel === variant.modelName;

          return (
            <Link
              key={variant.id}
              href={href}
              scroll={false}
              className={`px-4 py-2 text-sm rounded-md border transition-all duration-200 font-medium ${
                isActive
                  ? 'bg-hero-accent border-hero-accent text-white shadow-sm'
                  : 'bg-background border-border text-hero-foreground hover:border-hero-accent/50'
              }`}
            >
              {variant.modelName}
            </Link>
          );
        })}
      </div>
      
      <div className="surface-card p-4 rounded-md">
        <div className="grid sm:grid-cols-2 gap-4">
          {selectedVariant.type && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-hero-muted mb-1">Type</p>
              <p className="text-sm font-medium">{selectedVariant.type}</p>
            </div>
          )}
          {selectedVariant.majorLoads && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-hero-muted mb-1">Major Loads</p>
              <p className="text-sm font-medium">{selectedVariant.majorLoads}</p>
            </div>
          )}
          {selectedVariant.minorLoads && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-hero-muted mb-1">Minor Loads</p>
              <p className="text-sm font-medium">{selectedVariant.minorLoads}</p>
            </div>
          )}
          {selectedVariant.resolution && (
            <div>
              <p className="text-[11px] uppercase tracking-wider text-hero-muted mb-1">Resolution</p>
              <p className="text-sm font-medium">{selectedVariant.resolution}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
