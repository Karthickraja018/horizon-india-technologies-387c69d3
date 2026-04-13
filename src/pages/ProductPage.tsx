import { Link, useParams } from "react-router-dom";
import { getProduct, getCategoryBySlug } from "@/data/products";
import { MessageCircle, FileDown } from "lucide-react";
import NotFound from "./NotFound";

const ProductPage = () => {
  const { category, product: productSlug } = useParams<{ category: string; product: string }>();
  const cat = getCategoryBySlug(category || "");
  const product = getProduct(category || "", productSlug || "");

  if (!cat || !product) return <NotFound />;

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I am interested in ${product.name} (${product.model}). Please share a quote.`)}`;

  return (
    <div className="bg-hero min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-hero-muted">
          <Link to="/" className="hover:text-hero-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-hero-accent transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products/${cat.slug}`} className="hover:text-hero-accent transition-colors">{cat.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-hero-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="bg-hero-frame border border-hero-muted/10 rounded-lg p-8 flex items-center justify-center aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
          </div>

          {/* Details */}
          <div>
            <p className="text-hero-accent text-sm font-semibold uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mb-2">{product.name}</h1>
            <p className="text-hero-muted text-lg mb-6">Model: {product.model}</p>
            <p className="text-hero-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-hero-headline font-semibold text-lg mb-3">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-hero-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-hero-accent mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-hero-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:bg-hero-accent-hover transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Request Quote
              </a>
              <button className="inline-flex items-center gap-2 border border-hero-muted/30 text-hero-foreground font-semibold px-6 py-3 rounded-lg hover:border-hero-accent/50 hover:text-hero-accent transition-colors">
                <FileDown className="w-5 h-5" /> Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-hero-headline mb-6">Specifications</h2>
          <div className="bg-hero-frame border border-hero-muted/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? "bg-hero-frame" : "bg-hero"}>
                    <td className="px-6 py-3 text-hero-foreground font-medium w-1/3">{key}</td>
                    <td className="px-6 py-3 text-hero-muted">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-hero-headline mb-4">Applications</h2>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <span key={app} className="px-4 py-1.5 bg-hero-frame border border-hero-muted/10 rounded-full text-hero-foreground text-sm">
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
