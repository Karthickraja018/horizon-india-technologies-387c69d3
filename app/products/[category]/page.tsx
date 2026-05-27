import { getCategories, getProducts } from "@/lib/api";
import { notFound } from "next/navigation";
import CategoryClient from "@/components/products/CategoryClient";

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const categories = await getCategories();
  const cat = categories.find(c => c.slug === categorySlug);
  
  if (!cat) {
    notFound();
  }

  const prods = await getProducts(categorySlug);

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <CategoryClient category={cat} products={prods} />
    </div>
  );
}
