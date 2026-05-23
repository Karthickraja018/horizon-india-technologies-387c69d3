import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  categorySlug: string;
  slug: string;
  image: string | StaticImport;
  galleryImages?: { media: number | any; id?: string | null }[] | null;
  description: string;
  shortDescription?: string;
  brand?: string;
  series?: string;
  isFeatured?: boolean;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  standardsSupported?: string[];
  variants?: ProductVariant[];
  accessories?: Accessory[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
}

export interface ProductVariant {
  id: string;
  modelName: string;
  type?: string;
  majorLoads?: string;
  minorLoads?: string;
  resolution?: string;
  specifications?: Record<string, string>;
}

export interface Accessory {
  id: string;
  name: string;
  category: 'standard' | 'optional';
  description?: string;
  image?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
  image?: string | any;
}
