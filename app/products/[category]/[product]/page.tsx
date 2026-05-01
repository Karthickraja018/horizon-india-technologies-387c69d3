"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getProduct, getCategoryBySlug, products } from "@/constants/data";
import { MessageCircle, Phone, Mail, CheckCircle2, Download } from "lucide-react";
import SpecsTable from "@/components/products/SpecsTable";
import InlineCtaBlock from "@/components/forms/InlineCtaBlock";
import { useQuoteModal } from "@/providers/QuoteModalContext";

export default function ProductPage() {
  const params = useParams<{ category: string; product: string }>();
  const category = params?.category ?? "";
  const productSlug = params?.product ?? "";

  const cat = getCategoryBySlug(category);
  const product = getProduct(category, productSlug);
  const { openQuoteModal } = useQuoteModal();

  if (!cat || !product) {
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

  const relatedProducts = products
    .filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id)
    .slice(0, 3);

  const standardsFromSpecs = Object.entries(product.specifications)
    .filter(([key, value]) => /standard|astm|iso/i.test(key) || /astm|iso/i.test(value))
    .map(([, value]) => value);

  const standards = standardsFromSpecs.length
    ? standardsFromSpecs
    : ["ASTM compliant configuration", "ISO aligned testing workflow"];

  return (
    <div className="bg-background min-h-screen">
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

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="surface-card p-8 flex items-center justify-center aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                loading="lazy"
                width={560}
                height={560}
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7">
            <span className="label-eyebrow">{product.category}</span>
            <h1 className="h1 text-hero-headline mt-2 mb-2">
              {product.name}
            </h1>
            <p className="text-hero-muted text-sm font-mono mb-6">MODEL: {product.model}</p>
            <p className="text-hero-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">
                Key Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-hero-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="surface-card p-5 mb-2">
              <p className="text-hero-muted text-xs uppercase tracking-wider mb-3">
                Request a Quotation
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      productName: product.name,
                      model: product.model,
                      category: product.category,
                    })
                  }
                  className="btn-primary animate-button-scale"
                >
                  <MessageCircle className="w-5 h-5" /> Request Quote
                </button>
                <a
                  href="mailto:horizonindiatechnologies@gmail.com"
                  className="btn-outline animate-button-scale"
                >
                  <Mail className="w-5 h-5" /> Email Us
                </a>
                <a href="tel:+919751458300" className="btn-ghost animate-button-scale">
                  <Phone className="w-4 h-4" /> +91 97514 58300
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-16">
          <span className="label-eyebrow">Technical Data</span>
          <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-6">Specifications</h2>
          <SpecsTable specifications={product.specifications} />
        </div>

        {/* Applications */}
        <div className="mt-12">
          <span className="label-eyebrow">Use Cases</span>
          <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-4">Applications</h2>
          <ul className="grid sm:grid-cols-2 gap-2.5 max-w-3xl">
            {product.applications.map((app) => (
              <li key={app} className="tag-chip">{app}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <span className="label-eyebrow">Compliance</span>
          <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-4">Standards</h2>
          <div className="flex flex-wrap gap-2">
            {standards.map((standard) => (
              <span key={standard} className="tag-chip">{standard}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 surface-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="label-eyebrow mb-1">Documentation</p>
            <p className="text-hero-foreground text-sm">
              Product brochure download is being prepared for this model.
            </p>
          </div>
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-hero-muted cursor-not-allowed"
          >
            <Download className="w-4 h-4" /> Download Brochure (Coming Soon)
          </button>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-14">
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
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      width={320}
                      height={240}
                    />
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

        <div className="mt-12">
          <InlineCtaBlock
            title="Need assistance with test method selection?"
            description="Share your sample type, throughput, and standard target. We will recommend the right machine and accessories."
            primaryCta="Get Recommendation"
            secondaryCta="Talk to Engineer"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          openQuoteModal({
            productName: product.name,
            model: product.model,
            category: product.category,
          })
        }
        className="fixed right-6 bottom-24 z-40 btn-primary text-sm px-4 py-2.5 animate-button-scale hidden md:inline-flex"
      >
        Request Quote
      </button>

      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <button
          type="button"
          onClick={() =>
            openQuoteModal({
              productName: product.name,
              model: product.model,
              category: product.category,
            })
          }
          className="w-full btn-primary py-3"
        >
          Request Quote
        </button>
      </div>
    </div>
  );
}
