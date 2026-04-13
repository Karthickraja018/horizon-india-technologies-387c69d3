import { Link } from "react-router-dom";
import { products } from "@/data/products";

const featured = products.slice(0, 4);

const FeaturedProducts = () => (
  <section className="bg-hero py-20">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-12">
        <span className="text-hero-accent font-semibold text-sm tracking-widest uppercase">Top Picks</span>
        <h2 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2">Featured Products</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product) => (
          <div key={product.id} className="bg-hero-frame border border-hero-muted/10 rounded-lg overflow-hidden group">
            <div className="aspect-square bg-hero-frame flex items-center justify-center p-6">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" loading="lazy" />
            </div>
            <div className="p-5">
              <p className="text-hero-accent text-xs font-semibold uppercase tracking-wider mb-1">{product.category}</p>
              <h3 className="text-hero-headline font-semibold mb-1">{product.name}</h3>
              <p className="text-hero-muted text-xs mb-3">Model: {product.model}</p>
              <div className="text-hero-muted text-xs space-y-0.5 mb-4">
                {Object.entries(product.specifications).slice(0, 3).map(([k, v]) => (
                  <p key={k}><span className="text-hero-foreground">{k}:</span> {v}</p>
                ))}
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/products/${product.categorySlug}/${product.slug}`}
                  className="flex-1 text-center border border-hero-muted/20 text-hero-foreground text-xs font-semibold py-2 rounded-lg hover:border-hero-accent/50 hover:text-hero-accent transition-colors"
                >
                  View Details
                </Link>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I am interested in ${product.name} (${product.model}). Please share a quote.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-hero-accent text-accent-foreground text-xs font-semibold py-2 rounded-lg hover:bg-hero-accent-hover transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
