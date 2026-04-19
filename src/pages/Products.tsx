import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector,
};

const ProductsPage = () => (
  <div className="bg-background min-h-screen">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="mb-4 text-sm text-hero-muted">
        <Link to="/" className="hover:text-hero-accent transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-hero-foreground">Products</span>
      </div>

      <span className="label-eyebrow">Catalogue</span>
      <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2 mb-3">Our Products</h1>
      <p className="text-hero-muted max-w-2xl mb-12">Browse our complete range of material testing, metrology, and quality control equipment.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Gauge;
          return (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group surface-card p-5 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background text-hero-accent shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-hero-headline font-semibold text-base mb-1 group-hover:text-hero-accent transition-colors">{cat.name}</h2>
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
          );
        })}
      </div>
    </div>
  </div>
);

export default ProductsPage;
