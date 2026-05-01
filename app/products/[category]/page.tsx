"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getCategoryBySlug, getProductsByCategory } from "@/constants/data";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import InlineCtaBlock from "@/components/forms/InlineCtaBlock";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getQuickSpecs } from "@/lib/utils";
import { useQuoteModal } from "@/providers/QuoteModalContext";

export default function CategoryPage() {
  const params = useParams<{ category: string }>();
  const category = params?.category ?? "";
  const cat = getCategoryBySlug(category);
  const [loading, setLoading] = useState(true);
  const { openQuoteModal } = useQuoteModal();

  const prods = useMemo(() => getProductsByCategory(category), [category]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, [category]);

  if (!cat) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Category not found</p>
          <Link href="/products" className="text-primary underline hover:text-primary/90">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="mb-4 text-sm text-hero-muted">
          <Link href="/" className="hover:text-hero-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-hero-accent transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-hero-foreground">{cat.name}</span>
        </div>

        <span className="label-eyebrow">Category</span>
        <h1 className="h1 text-hero-headline mt-2 mb-3">{cat.name}</h1>
        <p className="text-hero-muted max-w-2xl mb-10 md:mb-12">{cat.description}</p>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : prods.length === 0 ? (
          <p className="text-hero-muted">
            Products coming soon.{" "}
            <Link href="/contact" className="text-hero-accent hover:underline">Contact us</Link> for
            details.
          </p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {prods.map((product) => {
                const specs = Object.entries(product.specifications).slice(0, 3);
                const tooltipSpecs = getQuickSpecs(product.specifications, product.model);

                return (
                  <div
                    key={product.id}
                    className="surface-card animate-card-lift overflow-hidden group flex flex-col h-full"
                  >
                    <Tooltip delayDuration={120}>
                      <TooltipTrigger asChild>
                        <div className="aspect-square bg-background flex items-center justify-center p-5 border-b border-border image-hover cursor-help">
                          <Image
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            width={360}
                            height={360}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="w-60 rounded-md border border-border bg-background p-3 shadow-[0_4px_12px_rgba(15,23,42,0.08)] text-xs animate-in fade-in-0 data-[state=closed]:fade-out-0"
                      >
                        <p className="font-semibold text-hero-headline mb-2">Quick Specs</p>
                        <div className="space-y-1.5">
                          {tooltipSpecs.map(([key, value]) => (
                            <div key={key} className="flex items-start justify-between gap-2">
                              <span className="text-hero-muted uppercase tracking-wider text-[10px]">
                                {key}
                              </span>
                              <span className="text-hero-foreground text-right">{value}</span>
                            </div>
                          ))}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                    <div className="p-4 flex flex-col flex-1">
                      <p className="label-eyebrow mb-1.5">{product.category}</p>
                      <h3 className="text-hero-headline font-semibold text-[15px] leading-snug mb-1 group-hover:text-hero-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-hero-muted text-[11px] mb-3 font-mono">
                        MODEL: {product.model}
                      </p>
                      <div className="mb-4 flex-1">
                        {specs.map(([k, v]) => (
                          <div key={k} className="spec-row">
                            <span>{k}</span>
                            <span>{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/products/${product.categorySlug}/${product.slug}`}
                          className="btn-outline text-[11px] py-2 px-2 animate-button-scale"
                        >
                          Details
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            openQuoteModal({
                              productName: product.name,
                              model: product.model,
                              category: product.category,
                            })
                          }
                          className="btn-primary text-[11px] py-2 px-2 animate-button-scale"
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <InlineCtaBlock
                title="Need support choosing the right model in this category?"
                description="Share your test standard and sample type. We will shortlist the right configuration and delivery options."
                primaryCta="Get Recommendation"
                secondaryCta="Talk to Engineer"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
