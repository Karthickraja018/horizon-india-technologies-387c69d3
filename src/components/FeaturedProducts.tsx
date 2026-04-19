import { Link } from "react-router-dom";
import { products } from "@/data/products";
import AnimatedSection from "./AnimatedSection";

const featured = products.slice(0, 4);
const badgeFor = (i: number) => (i === 0 ? "best" : i === 1 ? "new" : null);

const FeaturedProducts = () => (
  <section className="section-alt border-y border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Top Picks</span>
          <h2>Featured Products</h2>
          <p>Selected models trusted by quality labs across automotive, foundry, and construction industries.</p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((product, i) => {
          const badge = badgeFor(i);
          const specs = Object.entries(product.specifications).slice(0, 3);
          return (
            <AnimatedSection key={product.id} delay={i * 0.06}>
              <div className="surface-card overflow-hidden group flex flex-col h-full">
                <div className="relative aspect-square bg-background flex items-center justify-center p-5 border-b border-border image-hover">
                  {badge && (
                    <span className={`absolute top-3 left-3 z-10 ${badge === "best" ? "badge-best" : "badge-new"}`}>
                      {badge === "best" ? "Best Seller" : "New"}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
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
                    <Link
                      to={`/products/${product.categorySlug}/${product.slug}`}
                      className="btn-outline text-[11px] py-2 px-2"
                    >
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
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
