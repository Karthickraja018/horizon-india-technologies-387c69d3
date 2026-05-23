'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, MessageCircle, Mail, Phone, Download } from 'lucide-react';
import VariantSelector from '@/components/products/VariantSelector';
import QuoteButton from '@/components/products/QuoteButton';
import AccessoriesList from '@/components/products/AccessoriesList';
import SpecsTable from '@/components/products/SpecsTable';

export default function ProductFamilyClient({ product }: { product: any }) {
  const [activeVariantId, setActiveVariantId] = useState<string>(
    product.variants?.[0]?.id || ''
  );

  const selectedVariant = product.variants?.find((v: any) => v.id === activeVariantId) || product.variants?.[0] || {};
  const currentModel = selectedVariant.modelName || product.modelCode || product.name;

  const combinedSpecifications = {
    ...(selectedVariant.specifications || {}),
    ...Object.fromEntries(
      Object.entries(product.specifications || {}).filter(
        ([key]) => !(selectedVariant.specifications || {})[key]
      )
    )
  };

  const images = selectedVariant.images?.length > 0 ? selectedVariant.images : product.galleryImages || [];
  const heroImage = images[0]?.image?.url || images[0]?.media?.url || product.image;
  
  const features = selectedVariant.features?.length > 0 
    ? selectedVariant.features.map((f: any) => f.feature) 
    : product.keyFeatures?.map((f: any) => f.feature) || product.features || [];

  const standards = selectedVariant.standards?.length > 0
    ? selectedVariant.standards.map((s: any) => s.standard)
    : product.standardsSupported?.map((s: any) => s.standard) || [];

  const accessories = selectedVariant.accessories?.length > 0 ? selectedVariant.accessories : product.accessories || [];
  const pdfUrl = selectedVariant.downloadablePDF?.url || product.pdf?.url;

  return (
    <>
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="surface-card p-8 flex items-center justify-center aspect-square transition-opacity duration-300">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={currentModel}
                className="w-full h-full object-contain"
                loading="lazy"
                width={560}
                height={560}
              />
            ) : (
              <div className="text-hero-muted text-sm flex items-center justify-center h-full w-full bg-background border border-border rounded">No Image Available</div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-7">
          <span className="label-eyebrow">{product.category?.name || product.category}</span>
          <h1 className="h1 text-hero-headline mt-2 mb-2">
            {product.name}
          </h1>
          <p className="text-hero-muted text-sm font-mono mb-6">MODEL: {currentModel}</p>
          
          <p className="text-xl text-hero-foreground font-medium leading-relaxed mb-6">
            {selectedVariant.shortDescription || product.shortDescription}
          </p>
          
          <p className="text-hero-foreground leading-relaxed mb-8">{product.description}</p>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">
                Key Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-hero-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Variant Selector */}
          {product.variants && product.variants.length > 1 && (
            <div className="mb-8 p-4 bg-muted/30 border border-border rounded-lg sticky top-20 z-30 backdrop-blur-md">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-hero-muted mb-3">Select Variant</h3>
              {product.variantSelectorType === 'tabs' ? (
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v: any) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveVariantId(v.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        activeVariantId === v.id 
                          ? 'bg-primary text-primary-foreground shadow-sm' 
                          : 'bg-background border border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {v.modelName}
                    </button>
                  ))}
                </div>
              ) : (
                <select 
                  className="w-full p-2.5 bg-background border border-border rounded-md text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={activeVariantId}
                  onChange={(e) => setActiveVariantId(e.target.value)}
                >
                  {product.variants.map((v: any) => (
                    <option key={v.id} value={v.id}>{v.modelName} - {v.type}</option>
                  ))}
                </select>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="surface-card p-5 mb-2 sticky top-[160px] z-20">
            <p className="text-hero-muted text-xs uppercase tracking-wider mb-3">
              Request a Quotation
            </p>
            <div className="flex flex-wrap gap-3">
              <QuoteButton
                productName={product.name}
                model={currentModel}
                category={product.category?.name || product.category}
                className="btn-primary flex items-center gap-2 animate-button-scale"
              >
                <MessageCircle className="w-5 h-5" /> Request Quote
              </QuoteButton>
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
        <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-6">Specifications for {currentModel}</h2>
        <div className="transition-all duration-300">
          <SpecsTable specifications={combinedSpecifications} />
        </div>
      </div>

      {/* Accessories */}
      {accessories.length > 0 && (
        <div className="mt-16 transition-all duration-300">
          <AccessoriesList accessories={accessories} />
        </div>
      )}

      {/* Applications & Standards */}
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {product.applications && (
          <div>
            <span className="label-eyebrow">Use Cases</span>
            <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-4">Applications</h2>
            <ul className="flex flex-wrap gap-2.5">
              {(Array.isArray(product.applications) ? product.applications : typeof product.applications === 'string' ? product.applications.split('\\n') : []).map((app: string, i: number) => (
                <li key={i} className="tag-chip">{app}</li>
              ))}
            </ul>
          </div>
        )}
        
        {standards.length > 0 && (
          <div>
            <span className="label-eyebrow">Compliance</span>
            <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-4">Standards</h2>
            <div className="flex flex-wrap gap-2">
              {standards.map((standard: string, i: number) => (
                <span key={i} className="tag-chip">{standard}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Documentation */}
      <div className="mt-10 surface-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-300">
        <div>
          <p className="label-eyebrow mb-1">Documentation</p>
          <p className="text-hero-foreground text-sm">
            {pdfUrl ? 'Download the official brochure and technical specifications.' : 'Product brochure download is being prepared for this model.'}
          </p>
        </div>
        {pdfUrl ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary/10 text-primary px-4 py-2.5 text-sm font-semibold hover:bg-primary/20 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Brochure
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-hero-muted cursor-not-allowed"
          >
            <Download className="w-4 h-4" /> Download Brochure (Coming Soon)
          </button>
        )}
      </div>
    </>
  );
}
