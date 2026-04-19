import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const featured = products.slice(0, 4);
const badgeFor = (i: number) => (i === 0 ? "best" : i === 1 ? "new" : null);

const FeaturedProducts = () => (
  <section className="section-alt border-y border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="label-eyebrow">Top Picks</span>
            <h2 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2">Featured Products</h2>
            <p className="text-hero-muted mt-2 max-w-xl text-sm">Selected models trusted by quality labs across automotive, foundry, and construction industries.</p>
          </div>
          <Link to="/products" className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featured.map((product, i) => {
          const badge = badgeFor(i);
          const specs = Object.entries(product.specifications).slice(0, 3);
          return (
            <AnimatedSection key={product.id} delay={i * 0.05}>
              <div className="surface-card overflow-hidden group flex flex-col h-full">
                <div className="relative aspect-[4/3] bg-background flex items-center justify-center p-4 border-b border-border image-hover">
                  {badge && (
                    <span className={`absolute top-2.5 left-2.5 z-10 ${badge === "best" ? "badge-best" : "badge-new"}`}>
                      {badge === "best" ? "Best Seller" : "New"}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="label-eyebrow mb-1 text-[10px]">{product.category}</p>
                  <h3 className="text-hero-headline font-semibold text-sm leading-snug mb-1 group-hover:text-hero-accent transition-colors line-clamp-2">{product.name}</h3>
                  <p className="text-hero-muted text-[10px] mb-3 font-mono">{product.model}</p>

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
                      className="btn-outline text-[11px] py-1.5 px-2"
                    >
                      Details
                    </Link>
                    <a
                      href={`https://wa.me/919751458300?text=${encodeURIComponent(`Hi, I am interested in ${product.name} (${product.model}). Please share a quote.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-[11px] py-1.5 px-2"
                    >
                      Quote
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
