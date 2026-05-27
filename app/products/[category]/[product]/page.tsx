import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getCategories, getProducts } from "@/lib/api";
import { ChevronRight } from "lucide-react";
import InlineCtaBlock from "@/components/forms/InlineCtaBlock";
import type { Metadata } from "next";
import QuoteButton from "@/components/products/QuoteButton";
import ProductFamilyClient from "@/components/products/ProductFamilyClient";
import ComparisonTable from "@/components/products/ComparisonTable";
import AnimatedSection from "@/components/common/AnimatedSection";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { product: string };
  searchParams?: { variant?: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.product);
  if (!product) return {};
  const currentVariant = searchParams?.variant;
  const selectedVariant = product.variants?.find((v: any) => v.modelName === currentVariant || v.id === currentVariant);
  const titleSuffix = selectedVariant ? ` - ${selectedVariant.modelName}` : "";
  const title = product.seo?.title || `${product.name}${titleSuffix} | Horizon India Technologies`;
  return {
    title,
    description: product.seo?.description || product.shortDescription || product.description,
    keywords: product.seo?.keywords,
    openGraph: {
      title,
      description: product.seo?.description || product.shortDescription || product.description,
      images: product.seo?.ogImage ? [{ url: product.seo.ogImage }] : [],
    },
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { category: string; product: string };
  searchParams?: { variant?: string };
}) {
  const categorySlug = params.category;
  const productSlug = params.product;

  const categories = await getCategories();
  const product = await getProductBySlug(productSlug);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Product not found</p>
          <Link href="/products" className="text-primary underline hover:text-primary/90">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const cat = categories.find((c) => c.slug === categorySlug) || {
    slug: categorySlug,
    name: product.category || categorySlug,
    description: '',
    icon: 'Package',
    image: '',
    productCount: 0,
  };

  const allProds = await getProducts(categorySlug);
  const relatedProducts = allProds
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  // Generate structured data for ProductGroup
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": product.name,
    "description": product.shortDescription || product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "FIE"
    },
    "hasVariant": product.variants?.map((v: any) => ({
      "@type": "Product",
      "name": v.modelName,
      "model": v.modelName,
      "description": v.shortDescription || product.shortDescription,
    })) || []
  };

  return (
    <div className="bg-background min-h-screen pt-8 md:pt-16 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex items-center flex-wrap gap-2 text-xs font-medium text-muted-foreground mb-12">
            <Link href="/" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">Catalogue</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/products/${cat.slug}`} className="hover:text-hero-accent transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              {cat.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <ProductFamilyClient product={product} />
        </AnimatedSection>

        {product.variants && product.variants.length > 1 && (
          <AnimatedSection className="mt-24 pt-16 border-t border-border">
            <ComparisonTable variants={product.variants} />
          </AnimatedSection>
        )}

        {relatedProducts.length > 0 && (
          <AnimatedSection className="mt-24 pt-16 border-t border-border">
            <span className="eyebrow text-hero-accent block mb-3">More Options</span>
            <h2 className="text-3xl font-bold text-foreground mb-10">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.categorySlug}/${item.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-hero-accent/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center p-8 relative">
                    {item.image ? (
                      <div className="w-full h-full relative z-10 transform transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-contain p-4"
                        />
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">No Image</span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1 border-t border-border">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-hero-accent transition-colors leading-snug mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-1 font-mono">{item.model}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection className="mt-24">
          <InlineCtaBlock
            title="Need assistance with test method selection?"
            description="Share your sample type, throughput, and standard target. We will recommend the right machine and accessories."
            primaryCta="Get Recommendation"
            secondaryCta="Talk to Engineer"
          />
        </AnimatedSection>
      </div>

    </div>
  );
}
