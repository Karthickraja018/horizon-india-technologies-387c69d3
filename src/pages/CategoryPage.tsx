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

        <span className="label-eyebrow">Category</span>
        <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2 mb-3">{cat.name}</h1>
        <p className="text-hero-muted max-w-2xl mb-12">{cat.description}</p>

        {prods.length === 0 ? (
          <p className="text-hero-muted">Products coming soon. <Link to="/contact" className="text-hero-accent hover:underline">Contact us</Link> for details.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {prods.map((product) => {
              const specs = Object.entries(product.specifications).slice(0, 3);
              return (
                <div key={product.id} className="surface-card overflow-hidden group flex flex-col h-full">
                  <div className="aspect-square bg-background flex items-center justify-center p-5 border-b border-border image-hover">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="label-eyebrow mb-1.5">{product.category}</p>
                    <h3 className="text-hero-headline font-semibold text-[15px] leading-snug mb-1 group-hover:text-hero-accent transition-colors">{product.name}</h3>
                    <p className="text-hero-muted text-[11px] mb-3 font-mono">MODEL: {product.model}</p>
                    <div className="mb-4 flex-1">
                      {specs.map(([k, v]) => (
                        <div key={k} className="spec-row">
                          <span>{k}</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link to={`/products/${product.categorySlug}/${product.slug}`} className="btn-outline text-[11px] py-2 px-2">
                        Details
                      </Link>
                      <a
                        href={`https://wa.me/919751458300?text=${encodeURIComponent(`Hi, I am interested in ${product.name} (${product.model}). Please share a quote.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-[11px] py-2 px-2"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
