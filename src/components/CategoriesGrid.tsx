import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector,
};

const CategoriesGrid = () => {
  const [featured, ...rest] = categories;
  const FeaturedIcon = iconMap[featured.icon] || Gauge;

  return (
    <section className="section-base">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="section-header">
            <span>Our Range</span>
            <h2>Product Categories</h2>
            <p>Comprehensive material testing, metrology, and quality control equipment for every industry.</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-5">
          <AnimatedSection>
            <Link
              to={`/products/${featured.slug}`}
              className="group surface-card p-8 flex flex-col h-full lg:row-span-2 bg-secondary/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-hero-accent text-accent-foreground">
                  <FeaturedIcon className="w-6 h-6" />
                </div>
                <span className="label-eyebrow">Featured Range</span>
              </div>
              <h3 className="text-hero-headline font-bold text-2xl lg:text-3xl mb-3 leading-tight">{featured.name}</h3>
              <p className="text-hero-muted text-sm leading-relaxed mb-6 flex-1">{featured.description}</p>
              <div className="pt-5 border-t border-border flex items-center justify-between">
                <span className="text-hero-muted text-xs uppercase tracking-wider">{featured.productCount} models</span>
                <span className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </AnimatedSection>

          {rest.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Gauge;
            return (
              <AnimatedSection key={cat.slug} delay={i * 0.05}>
                <Link
                  to={`/products/${cat.slug}`}
                  className="group surface-card p-5 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-hero-accent/10 text-hero-accent shrink-0">
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
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
