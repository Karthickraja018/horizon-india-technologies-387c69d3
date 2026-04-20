import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { getQuickSpecs } from "@/lib/utils";

const featured = products.slice(0, 4);
const badgeFor = (i: number) => (i === 0 ? "best" : i === 1 ? "new" : null);

const FeaturedProducts = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
  <section id="products" className="section-alt border-y border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="eyebrow">Top Picks</span>
            <h2 className="h2 mt-2">Featured Products</h2>
            <p className="text-body-sm mt-2 max-w-xl">Selected models trusted by quality labs across automotive, foundry, and construction industries.</p>
          </div>
          <Link to="/products" className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featured.map((product, i) => {
          const badge = badgeFor(i);
          const specs = Object.entries(product.specifications).slice(0, 3);
          const tooltipSpecs = getQuickSpecs(product.specifications, product.model);

          return (
            <AnimatedSection key={product.id} delay={i * 0.05}>
              <div className="surface-card animate-card-lift overflow-hidden group flex flex-col h-full">
                <Tooltip delayDuration={120}>
                  <TooltipTrigger asChild>
                    <div className="relative aspect-[4/3] bg-background flex items-center justify-center p-4 border-b border-border image-hover cursor-help">
                      {badge && (
                        <span className={`absolute top-2.5 left-2.5 z-10 ${badge === "best" ? "badge-best" : "badge-new"}`}>
                          {badge === "best" ? "Best Seller" : "New"}
                        </span>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={400}
                        height={300}
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
                          <span className="text-hero-muted uppercase tracking-wider text-[10px]">{key}</span>
                          <span className="text-hero-foreground text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>

                <div className="p-4 flex flex-col flex-1">
                  <p className="eyebrow mb-1">{product.category}</p>
                  <h3 className="text-gray-900 font-semibold text-base leading-snug mb-1 group-hover:text-hero-accent transition-colors line-clamp-2">{product.name}</h3>
                  <p className="text-gray-500 text-[10px] mb-3 font-mono">{product.model}</p>

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
                      to={`/products/${product.categorySlug}/${product.slug}`}
                      className="btn-outline text-[11px] py-1.5 px-2 animate-button-scale"
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
                      className="btn-primary text-[11px] py-1.5 px-2 animate-button-scale"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);
};

export default FeaturedProducts;
