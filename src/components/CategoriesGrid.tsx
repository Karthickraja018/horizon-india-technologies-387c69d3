import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector,
};

const CategoriesGrid = () => (
  <section className="section-base">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection>
        <div className="section-header">
          <span>Our Range</span>
          <h2>Product Categories</h2>
          <p>Comprehensive range of material testing, metrology, and quality control equipment for every industry.</p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const Icon = iconMap[cat.icon] || Gauge;
          return (
            <AnimatedSection key={cat.slug} delay={i * 0.06}>
              <Link
                to={`/products/${cat.slug}`}
                className="group surface-card p-6 flex flex-col h-full hover:border-hero-accent/30"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-hero-accent/8 group-hover:bg-hero-accent/15 transition-colors duration-300 mb-4">
                  <Icon className="w-6 h-6 text-hero-accent" />
                </div>
                <h3 className="text-hero-headline font-semibold text-lg mb-2 group-hover:text-hero-accent transition-colors duration-200">{cat.name}</h3>
                <p className="text-hero-muted text-sm leading-relaxed mb-4 flex-1">{cat.description}</p>
                <span className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  View Products <span aria-hidden>→</span>
                </span>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default CategoriesGrid;
