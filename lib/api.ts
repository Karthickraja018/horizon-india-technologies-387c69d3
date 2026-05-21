import type { PayloadProduct, PayloadCategory, PayloadService } from "@/types/payload";
import type { Product, Category } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

function getMediaUrl(media: any): string {
  if (!media) return '';
  if (typeof media === 'string') return media;
  if (typeof media === 'number') return ''; // Unpopulated
  return media.url || '';
}

export function mapCategory(payloadCategory: PayloadCategory): Category {
  return {
    slug: payloadCategory.slug,
    name: payloadCategory.name,
    description: payloadCategory.description || '',
    icon: 'Package', // fallback icon since payload doesn't have it
    image: getMediaUrl(payloadCategory.heroImage),
    productCount: 0, // Fallback
  };
}

export function mapProduct(payloadProduct: PayloadProduct): Product {
  const category = payloadProduct.category;
  const categorySlug = typeof category === 'object' && category !== null ? category.slug : '';
  const categoryName = typeof category === 'object' && category !== null ? category.name : '';

  return {
    id: String(payloadProduct.id),
    name: payloadProduct.name,
    model: payloadProduct.modelCode || '',
    category: categoryName,
    categorySlug: categorySlug,
    slug: payloadProduct.slug,
    image: getMediaUrl(payloadProduct.heroImage),
    description: payloadProduct.description || '',
    features: payloadProduct.keyFeatures?.map((kf) => kf.feature) || [],
    specifications: payloadProduct.specTable?.reduce((acc, curr) => {
      acc[curr.label] = curr.value;
      return acc;
    }, {} as Record<string, string>) || {},
    applications: payloadProduct.applications ? payloadProduct.applications.split('\n').filter(Boolean) : [],
  };
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_URL}/api/categories?depth=1&limit=100`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs.map(mapCategory);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/api/products?depth=1&limit=100`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    let mapped = data.docs.map(mapProduct);
    if (categorySlug) {
      mapped = mapped.filter((p: Product) => p.categorySlug === categorySlug);
    }
    return mapped;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_URL}/api/products?where[slug][equals]=${slug}&depth=1`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.docs.length === 0) return null;
    return mapProduct(data.docs[0]);
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
}

export async function getServices(): Promise<PayloadService[]> {
  try {
    const res = await fetch(`${API_URL}/api/services?depth=1&limit=100`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.docs;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}
