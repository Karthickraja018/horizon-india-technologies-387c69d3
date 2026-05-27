"use client";

/* Hallmark · component: ProductFamilyClient · genre: modern-minimal · theme: catalog (preserved) 
 * states: default · hover · focus 
 * contrast: pass
 */

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, MessageCircle, Mail, Phone, Download, CheckSquare } from 'lucide-react';
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

  const rawStandards = selectedVariant.standards?.length > 0
    ? selectedVariant.standards.map((s: any) => s.standard)
    : product.standardsSupported?.map((s: any) => s.standard) || [];
  const standards = rawStandards.filter((s: string) => s && s.trim() !== "");

  const rawApplications = Array.isArray(product.applications) 
    ? product.applications 
    : typeof product.applications === 'string' 
      ? product.applications.split('\n') 
      : [];
  const applications = rawApplications.filter((app: string) => app && app.trim() !== "");

  const accessories = selectedVariant.accessories?.length > 0 ? selectedVariant.accessories : product.accessories || [];
  const pdfUrl = selectedVariant.downloadablePDF?.url || product.pdf?.url;

  return (
    <>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-6 lg:sticky lg:top-24">
          <div className="bg-card border border-border p-12 flex items-center justify-center aspect-square transition-opacity duration-300 rounded-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-muted/50 to-transparent rounded-xl" />
            {heroImage ? (
              <div className="w-full h-full relative z-10 transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={heroImage}
                  alt={currentModel}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8"
                  priority
                />
              </div>
            ) : (
              <div className="text-muted-foreground text-sm flex items-center justify-center h-full w-full bg-muted/30 border border-border/50 rounded z-10">No Image Available</div>
            )}
          </div>
          
          {/* Thumbnails if multiple images exist */}
          {images.length > 1 && (
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {images.map((img: any, i: number) => (
                <button key={i} className="w-20 h-20 shrink-0 bg-card border border-border rounded-lg p-2 outline-none focus-visible:ring-2 focus-visible:ring-ring hover:border-hero-accent transition-colors">
                  <div className="w-full h-full bg-muted/30" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-6 flex flex-col pt-4">
          <p className="eyebrow text-hero-accent mb-3">{product.category?.name || product.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            {product.name}
          </h1>
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-8 pb-8 border-b border-border">
            Model: <span className="text-foreground">{currentModel}</span>
          </p>
          
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-6">
            {selectedVariant.shortDescription || product.shortDescription}
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-10">
            {product.description}
          </p>

          {/* Variant Selector */}
          {product.variants && product.variants.length > 1 && (
            <div className="mb-10 bg-background/95 backdrop-blur-md border border-border p-4 md:p-6 rounded-xl shadow-sm md:shadow-none mx-[-16px] px-[16px] md:mx-0 md:bg-muted/30">
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-3 md:mb-4">Configuration</h3>
              {product.variantSelectorType === 'tabs' ? (
                <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                  {product.variants.map((v: any) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveVariantId(v.id)}
                      className={`shrink-0 px-5 py-2.5 text-sm font-semibold rounded-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring btn-mobile-press ${
                        activeVariantId === v.id 
                          ? 'bg-foreground text-background shadow-md' 
                          : 'bg-background border border-border text-foreground hover:border-hero-accent/50 hover:bg-muted'
                      }`}
                    >
                      {v.modelName}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <select 
                    className="w-full p-3.5 bg-background border border-border rounded-lg text-sm font-medium focus:ring-2 focus:ring-hero-accent focus:border-hero-accent outline-none transition-all appearance-none"
                    value={activeVariantId}
                    onChange={(e) => setActiveVariantId(e.target.value)}
                  >
                    {product.variants.map((v: any) => (
                      <option key={v.id} value={v.id}>{v.modelName} — {v.type}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <QuoteButton
              productName={product.name}
              model={currentModel}
              category={product.category?.name || product.category}
              className="flex-1 btn-primary py-3.5 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Request Quote
            </QuoteButton>
            <a
              href="mailto:horizonindiatechnologies@gmail.com"
              className="sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-card border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring btn-mobile-press"
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-10 pt-10 border-t border-border">
              <h2 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">
                Key Capabilities
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <CheckSquare className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Specifications Table */}
      <div className="mt-24 pt-16 border-t border-border">
        <div className="max-w-4xl">
          <span className="eyebrow text-hero-accent mb-3 block">Technical Data</span>
          <h2 className="text-3xl font-bold text-foreground mb-10">Specifications for {currentModel}</h2>
          <div className="transition-all duration-300">
            <SpecsTable specifications={combinedSpecifications} />
          </div>
        </div>
      </div>

      {/* Accessories */}
      {accessories.length > 0 && (
        <div className="mt-24 pt-16 border-t border-border">
          <AccessoriesList accessories={accessories} />
        </div>
      )}

      {/* Applications & Standards */}
      {(applications.length > 0 || standards.length > 0) && (
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-24 pt-16 border-t border-border">
          {applications.length > 0 && (
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-widest text-hero-accent mb-3 block">Use Cases</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Applications</h2>
              <ul className="flex flex-col gap-3">
                {applications.map((app: string, i: number) => (
                  <li key={i} className="group flex items-start gap-4 p-4 bg-muted/20 border border-border/50 rounded-xl hover:border-hero-accent/50 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-hero-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-hero-accent/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-hero-accent" />
                    </div>
                    <span className="text-sm font-semibold text-foreground leading-relaxed">{app.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {standards.length > 0 && (
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-widest text-hero-accent mb-3 block">Compliance</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Standards Supported</h2>
              <div className="flex flex-wrap gap-3">
                {standards.map((standard: string, i: number) => (
                  <div key={i} className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg shadow-sm hover:border-hero-accent/50 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    <span className="text-sm font-bold text-foreground">{standard.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Documentation Download */}
      <div className="mt-24 bg-card border border-border rounded-xl p-8 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <span className="eyebrow text-hero-accent mb-3 block">Documentation</span>
          <h3 className="text-2xl font-bold text-foreground mb-2">Technical Brochure</h3>
          <p className="text-muted-foreground text-sm max-w-md">
            {pdfUrl ? 'Download the official brochure and technical specifications in PDF format.' : 'Product brochure download is being prepared for this model.'}
          </p>
        </div>
        {pdfUrl ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-hero-accent text-white px-8 py-4 font-semibold hover:bg-hero-accent/90 transition-colors shadow-lg shadow-hero-accent/20"
          >
            <Download className="w-5 h-5" /> Download PDF
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 px-8 py-4 font-semibold text-muted-foreground cursor-not-allowed"
          >
            <Download className="w-5 h-5" /> Coming Soon
          </button>
        )}
      </div>
    </>
  );
}
