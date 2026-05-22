export interface PayloadMedia {
  id: number;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}

export interface PayloadCategory {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  heroImage?: (number | null) | PayloadMedia;
  updatedAt: string;
  createdAt: string;
}

export interface PayloadProduct {
  id: number;
  name: string;
  category: number | PayloadCategory;
  modelCode?: string | null;
  slug: string;
  heroImage?: (number | null) | PayloadMedia;
  galleryImages?: { media: number | PayloadMedia; id?: string | null }[] | null;
  shortDescription?: string | null;
  description?: string | null;
  brand?: string | null;
  series?: string | null;
  applications?: string | null;
  keyFeatures?: { feature: string; id?: string | null }[] | null;
  standardsSupported?: { standard: string; id?: string | null }[] | null;
  specTable?: { label: string; value: string; id?: string | null }[] | null;
  variants?: any[] | null;
  accessories?: any[] | null;
  pdf?: (number | null) | PayloadMedia;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  ogImage?: (number | null) | PayloadMedia;
  updatedAt: string;
  createdAt: string;
}

export interface PayloadService {
  id: number;
  title: string;
  description?: string | null;
  features?: { feature: string; id?: string | null }[] | null;
  cta?: { label?: string | null; href?: string | null };
  updatedAt: string;
  createdAt: string;
}
