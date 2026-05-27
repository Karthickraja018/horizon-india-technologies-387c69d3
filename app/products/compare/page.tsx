import { getProducts } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Minus } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

export const metadata = {
  title: "Compare Products | Horizon India Technologies",
  description: "Compare specifications and features of our testing equipment.",
};

export default async function ComparePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const idsParam = searchParams.ids;
  const ids = typeof idsParam === "string" ? idsParam.split(",") : [];

  const allProducts = await getProducts();
  const productsToCompare = allProducts.filter((p) => ids.includes(p.id));

  // Collect all unique specification keys across all selected products
  const allSpecKeys = new Set<string>();
  productsToCompare.forEach((p) => {
    Object.keys(p.specifications || {}).forEach((key) => allSpecKeys.add(key));
  });
  const specKeysArray = Array.from(allSpecKeys);

  // Collect all unique feature names
  const allFeatureKeys = new Set<string>();
  productsToCompare.forEach((p) => {
    (p.features || []).forEach((feat) => allFeatureKeys.add(feat));
  });
  const featureKeysArray = Array.from(allFeatureKeys);

  if (productsToCompare.length === 0) {
    return (
      <div className="container mx-auto px-6 lg:px-12 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">No Products Selected</h1>
        <p className="text-muted-foreground mb-8">Please go back and select products to compare.</p>
        <Link href="/products" className="btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <AnimatedSection>
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-hero-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-12">Compare Models</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        {/* Desktop View: Side-by-Side Table */}
        <div className="hidden md:block overflow-x-auto pb-8 scrollbar-hide">
          <div className="min-w-[800px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="w-1/4 p-6 border-b border-r border-border bg-muted/30 align-bottom">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Overview</span>
                  </th>
                  {productsToCompare.map((product) => (
                    <th key={product.id} className="w-1/4 p-6 border-b border-border bg-card align-top">
                      <div className="flex flex-col h-full">
                        <div className="aspect-[4/3] relative bg-muted/30 rounded-lg mb-4 p-4 flex items-center justify-center overflow-hidden">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-2"
                            />
                          ) : (
                            <span className="text-xs text-muted-foreground">No image</span>
                          )}
                        </div>
                        <p className="text-xs font-bold text-hero-accent uppercase tracking-widest mb-1">{product.model}</p>
                        <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2 leading-snug">{product.name}</h3>
                        <Link
                          href={`/products/${product.categorySlug}/${product.slug}`}
                          className="mt-auto w-full inline-flex items-center justify-center py-2.5 px-4 rounded-md bg-muted text-sm font-semibold text-foreground hover:bg-hero-accent hover:text-white transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </th>
                  ))}
                  {/* Fill empty columns if less than 3 products */}
                  {Array.from({ length: Math.max(0, 3 - productsToCompare.length) }).map((_, i) => (
                    <th key={`empty-${i}`} className="w-1/4 p-6 border-b border-border bg-card/50"></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Specifications Section */}
                {specKeysArray.length > 0 && (
                  <>
                    <tr>
                      <td colSpan={4} className="p-6 bg-muted/50 border-y border-border">
                        <h4 className="font-bold text-foreground">Specifications</h4>
                      </td>
                    </tr>
                    {specKeysArray.map((spec) => (
                      <tr key={spec} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="p-6 border-r border-border bg-muted/10 font-medium text-sm text-muted-foreground">
                          {spec}
                        </td>
                        {productsToCompare.map((product) => (
                          <td key={`${product.id}-${spec}`} className="p-6 text-sm text-foreground">
                            {product.specifications?.[spec] || <Minus className="w-4 h-4 text-muted-foreground/50" />}
                          </td>
                        ))}
                        {Array.from({ length: Math.max(0, 3 - productsToCompare.length) }).map((_, i) => (
                          <td key={`empty-spec-${i}`} className="p-6"></td>
                        ))}
                      </tr>
                    ))}
                  </>
                )}

                {/* Features Section */}
                {featureKeysArray.length > 0 && (
                  <>
                    <tr>
                      <td colSpan={4} className="p-6 bg-muted/50 border-y border-border">
                        <h4 className="font-bold text-foreground">Key Features</h4>
                      </td>
                    </tr>
                    {featureKeysArray.map((feat) => (
                      <tr key={feat} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="p-6 border-r border-border bg-muted/10 font-medium text-sm text-muted-foreground">
                          {feat}
                        </td>
                        {productsToCompare.map((product) => {
                          const hasFeature = product.features?.includes(feat);
                          return (
                            <td key={`${product.id}-${feat}`} className="p-6">
                              {hasFeature ? (
                                <Check className="w-5 h-5 text-[#25D366]" />
                              ) : (
                                <Minus className="w-4 h-4 text-muted-foreground/50" />
                              )}
                            </td>
                          );
                        })}
                        {Array.from({ length: Math.max(0, 3 - productsToCompare.length) }).map((_, i) => (
                          <td key={`empty-feat-${i}`} className="p-6"></td>
                        ))}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="md:hidden flex flex-col gap-8">
          {productsToCompare.map((product) => (
            <div key={product.id} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/* Card Header */}
              <div className="p-4 border-b border-border bg-muted/30">
                <div className="aspect-[4/3] relative bg-background rounded-lg mb-4 p-4 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
                  ) : (
                    <span className="text-xs text-muted-foreground">No image</span>
                  )}
                </div>
                <p className="text-[11px] font-bold text-hero-accent uppercase tracking-widest mb-1">{product.model}</p>
                <h3 className="text-base font-bold text-foreground mb-4 line-clamp-2 leading-snug">{product.name}</h3>
                <Link
                  href={`/products/${product.categorySlug}/${product.slug}`}
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-md bg-foreground text-sm font-semibold text-background hover:bg-hero-accent transition-colors btn-mobile-press"
                >
                  View Details
                </Link>
              </div>

              {/* Specs */}
              {specKeysArray.length > 0 && (
                <div className="p-4 bg-background">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Specifications</h4>
                  <div className="flex flex-col divide-y divide-border/50">
                    {specKeysArray.map((spec) => {
                      const val = product.specifications?.[spec];
                      if (!val) return null;
                      return (
                        <div key={spec} className="py-2.5 flex justify-between gap-4">
                          <span className="text-xs font-medium text-muted-foreground w-1/2">{spec}</span>
                          <span className="text-xs font-semibold text-foreground w-1/2 text-right">{val}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Features */}
              {featureKeysArray.length > 0 && (
                <div className="p-4 border-t border-border/50 bg-muted/10">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="flex flex-col gap-2.5">
                    {featureKeysArray.map((feat) => {
                      const hasFeature = product.features?.includes(feat);
                      if (!hasFeature) return null;
                      return (
                        <li key={feat} className="flex items-start gap-2.5 text-xs font-semibold text-foreground">
                          <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
