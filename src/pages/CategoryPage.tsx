import { Link, useParams } from "react-router-dom";
import { getCategoryBySlug, getProductsByCategory } from "@/data/products";
import NotFound from "./NotFound";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const cat = getCategoryBySlug(category || "");
  const prods = getProductsByCategory(category || "");

  if (!cat) return <NotFound />;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="mb-4 text-sm text-hero-muted">
          <Link to="/" className="hover:text-hero-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-hero-accent transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-hero-foreground">{cat.name}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">{cat.name}</h1>
        <p className="text-hero-muted max-w-2xl mb-12">{cat.description}</p>

        {prods.length === 0 ? (
          <p className="text-hero-muted">Products coming soon. <Link to="/contact" className="text-hero-accent hover:underline">Contact us</Link> for details.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prods.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.categorySlug}/${product.slug}`}
                className="surface-card overflow-hidden group hover:border-hero-accent/35 transition-all"
              >
                <div className="aspect-square bg-secondary/35 flex items-center justify-center p-6 border-b border-border">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-hero-headline font-semibold group-hover:text-hero-accent transition-colors">{product.name}</h3>
                  <p className="text-hero-muted text-xs mt-1">Model: {product.model}</p>
                  <span className="text-hero-accent text-sm font-semibold mt-3 inline-block">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
