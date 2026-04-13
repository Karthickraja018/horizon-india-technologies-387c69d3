import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector,
};

const CategoriesGrid = () => (
  <section className="bg-hero py-20">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-12">
        <span className="text-hero-accent font-semibold text-sm tracking-widest uppercase">Our Range</span>
        <h2 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2">Product Categories</h2>
        <p className="text-hero-muted mt-4 max-w-2xl mx-auto">Comprehensive range of material testing, metrology, and quality control equipment for every industry.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Gauge;
          return (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group bg-hero-frame border border-hero-muted/10 rounded-lg p-6 hover:border-hero-accent/30 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-hero-accent mb-4" />
              <h3 className="text-hero-headline font-semibold text-lg mb-2 group-hover:text-hero-accent transition-colors">{cat.name}</h3>
              <p className="text-hero-muted text-sm leading-relaxed mb-4">{cat.description}</p>
              <span className="text-hero-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View Products →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default CategoriesGrid;
