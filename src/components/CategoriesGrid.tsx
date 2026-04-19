import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector,
};

const HOME_LIMIT = 6;

const CategoriesGrid = () => {
  const visible = categories.slice(0, HOME_LIMIT);
  const remaining = categories.length - HOME_LIMIT;

  return (
    <section className="section-base">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="label-eyebrow">Our Range</span>
              <h2 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2">Product Categories</h2>
              <p className="text-hero-muted mt-2 max-w-xl text-sm">Material testing, metrology, and quality control equipment for every industry.</p>
            </div>
            <Link to="/products" className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View all categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Gauge;
            return (
              <AnimatedSection key={cat.slug} delay={i * 0.04}>
                <Link
                  to={`/products/${cat.slug}`}
                  className="group surface-card p-5 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background text-hero-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-hero-headline font-semibold text-base mb-1 group-hover:text-hero-accent transition-colors">{cat.name}</h3>
                      <p className="text-hero-muted text-xs leading-relaxed line-clamp-2">{cat.description}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-hero-muted text-[10px] uppercase tracking-wider">{cat.productCount} models</span>
                    <span className="text-hero-accent text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}

          {remaining > 0 && (
            <AnimatedSection delay={visible.length * 0.04}>
              <Link
                to="/products"
                className="group surface-card p-5 flex flex-col items-center justify-center text-center h-full min-h-[148px] border-dashed"
              >
                <span className="label-eyebrow mb-2">+{remaining} more</span>
                <p className="text-hero-headline font-semibold text-base mb-1 group-hover:text-hero-accent transition-colors">Explore full catalogue</p>
                <p className="text-hero-muted text-xs">All {categories.length} product categories</p>
                <span className="text-hero-accent text-xs font-semibold inline-flex items-center gap-1 mt-3 group-hover:gap-1.5 transition-all">
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
