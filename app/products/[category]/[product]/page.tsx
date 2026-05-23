import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getCategories, getProducts } from "@/lib/api";
import { MessageCircle, Phone, Mail, CheckCircle2, Download } from "lucide-react";
import InlineCtaBlock from "@/components/forms/InlineCtaBlock";
import type { Metadata } from "next";
import QuoteButton from "@/components/products/QuoteButton";
import ProductFamilyClient from "@/components/products/ProductFamilyClient";
import ComparisonTable from "@/components/products/ComparisonTable";

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
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="mb-6 text-sm text-hero-muted">
          <Link href="/" className="hover:text-hero-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-hero-accent transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <Link href={`/products/${cat.slug}`} className="hover:text-hero-accent transition-colors">
            {cat.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-hero-foreground">{product.name}</span>
        </div>

        <ProductFamilyClient product={product} />

        {product.variants && product.variants.length > 1 && (
          <ComparisonTable variants={product.variants} />
        )}

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <span className="label-eyebrow">More Options</span>
            <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.categorySlug}/${item.slug}`}
                  className="surface-card animate-card-lift p-4"
                >
                  <div className="aspect-[4/3] border border-border rounded-md flex items-center justify-center p-4 bg-background">
                    {item.image ? (
                      <Image
                        src={item.image as string}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={320}
                        height={240}
                      />
                    ) : (
                      <span className="text-xs text-hero-muted">No Image</span>
                    )}
                  </div>
                  <p className="text-xs uppercase tracking-wider text-hero-muted mt-3">
                    {item.category}
                  </p>
                  <h3 className="text-hero-headline text-sm font-semibold mt-1">{item.name}</h3>
                  <p className="text-hero-muted text-xs font-mono mt-1">{item.model}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <InlineCtaBlock
            title="Need assistance with test method selection?"
            description="Share your sample type, throughput, and standard target. We will recommend the right machine and accessories."
            primaryCta="Get Recommendation"
            secondaryCta="Talk to Engineer"
          />
        </div>
      </div>

      <QuoteButton
        productName={product.name}
        model={product.model || product.name}
        category={product.category}
        className="fixed right-6 bottom-24 z-40 btn-primary text-sm px-4 py-2.5 animate-button-scale hidden md:inline-flex"
      />

      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <QuoteButton
          productName={product.name}
          model={product.model || product.name}
          category={product.category}
          className="w-full btn-primary py-3"
        />
      </div>
    </div>
  );
}
