import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  categorySlug: string;
  slug: string;
  image: string | StaticImport;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}
