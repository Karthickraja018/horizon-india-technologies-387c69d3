import { Link, useParams } from "react-router-dom";
import { getProduct, getCategoryBySlug } from "@/data/products";
import { MessageCircle, Phone, Mail, CheckCircle2 } from "lucide-react";
import NotFound from "./NotFound";

const ProductPage = () => {
  const { category, product: productSlug } = useParams<{ category: string; product: string }>();
  const cat = getCategoryBySlug(category || "");
  const product = getProduct(category || "", productSlug || "");

  if (!cat || !product) return <NotFound />;

  const whatsappUrl = `https://wa.me/919751458300?text=${encodeURIComponent(`Hi, I am interested in ${product.name} (${product.model}). Please share a quote.`)}`;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="mb-6 text-sm text-hero-muted">
          <Link to="/" className="hover:text-hero-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-hero-accent transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <Link to={`/products/${cat.slug}`} className="hover:text-hero-accent transition-colors">{cat.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-hero-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="surface-card p-8 flex items-center justify-center aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7">
            <span className="label-eyebrow">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-hero-headline mt-2 mb-2 leading-tight">{product.name}</h1>
            <p className="text-hero-muted text-sm font-mono mb-6">MODEL: {product.model}</p>
            <p className="text-hero-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-hero-headline font-semibold text-sm uppercase tracking-wider mb-4">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-hero-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-hero-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="surface-card p-5 mb-2">
              <p className="text-hero-muted text-xs uppercase tracking-wider mb-3">Request a Quotation</p>
              <div className="flex flex-wrap gap-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Quote
                </a>
                <a href="mailto:horizonindiatechnologies@gmail.com" className="btn-outline">
                  <Mail className="w-5 h-5" /> Email Us
                </a>
                <a href="tel:+919751458300" className="btn-ghost">
                  <Phone className="w-4 h-4" /> +91 97514 58300
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-16">
          <span className="label-eyebrow">Technical Data</span>
          <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-6">Specifications</h2>
          <div className="surface-card overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                    <td className="px-6 py-3 text-hero-muted uppercase tracking-wider text-xs w-1/3 border-b border-border">{key}</td>
                    <td className="px-6 py-3 text-hero-foreground font-medium border-b border-border">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-12">
          <span className="label-eyebrow">Use Cases</span>
          <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-4">Applications</h2>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <span key={app} className="tag-chip">{app}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
