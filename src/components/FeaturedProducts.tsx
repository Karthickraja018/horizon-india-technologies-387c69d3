import { Link } from "react-router-dom";
import { products } from "@/data/products";
import AnimatedSection from "./AnimatedSection";

const featured = products.slice(0, 4);

const FeaturedProducts = () => (
  <section className="section-base">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Top Picks</span>
          <h2>Featured Products</h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product, i) => (
          <AnimatedSection key={product.id} delay={i * 0.08}>
            <div className="surface-card overflow-hidden group flex flex-col h-full">
              <div className="aspect-square bg-secondary/35 flex items-center justify-center p-6 border-b border-border image-hover">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-hero-accent text-xs font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="text-hero-headline font-semibold mb-1 group-hover:text-hero-accent transition-colors duration-200">{product.name}</h3>
                <p className="text-hero-muted text-xs mb-3">Model: {product.model}</p>
                <div className="text-hero-muted text-xs space-y-0.5 mb-4 flex-1">
                  {Object.entries(product.specifications).slice(0, 3).map(([k, v]) => (
                    <p key={k}><span className="text-hero-foreground font-medium">{k}:</span> {v}</p>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/products/${product.categorySlug}/${product.slug}`}
                    className="flex-1 text-center btn-outline text-xs py-2"
                  >
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/919751458300?text=${encodeURIComponent(`Hi, I am interested in ${product.name} (${product.model}). Please share a quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center btn-primary text-xs py-2"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
