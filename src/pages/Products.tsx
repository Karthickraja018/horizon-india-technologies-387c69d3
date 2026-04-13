import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Gauge, ArrowUpDown, FlaskConical, Ruler, ScanSearch, Hammer, Building2, Microscope, Scissors, Projector,
};

const ProductsPage = () => (
  <div className="bg-hero min-h-screen">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="mb-4 text-sm text-hero-muted">
        <Link to="/" className="hover:text-hero-accent transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-hero-foreground">Products</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-4">Our Products</h1>
      <p className="text-hero-muted max-w-2xl mb-12">Browse our complete range of material testing, metrology, and quality control equipment.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Gauge;
          return (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group bg-hero-frame border border-hero-muted/10 rounded-lg p-6 hover:border-hero-accent/30 transition-all"
            >
              <Icon className="w-8 h-8 text-hero-accent mb-4" />
              <h2 className="text-hero-headline font-semibold text-lg mb-2 group-hover:text-hero-accent transition-colors">{cat.name}</h2>
              <p className="text-hero-muted text-sm leading-relaxed mb-3">{cat.description}</p>
              <span className="text-hero-accent text-sm font-semibold">{cat.productCount} Products →</span>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

export default ProductsPage;
