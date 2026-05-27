import { CheckCircle2, PlusCircle } from "lucide-react";
import { Accessory } from "@/types";

interface AccessoriesListProps {
  accessories: Accessory[];
}

export default function AccessoriesList({ accessories }: AccessoriesListProps) {
  if (!accessories || accessories.length === 0) return null;

  const standard = accessories.filter(a => a.category === 'standard');
  const optional = accessories.filter(a => a.category === 'optional');

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <span className="text-[11px] font-bold uppercase tracking-widest text-hero-accent">Enhancements</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Accessories & Add-ons</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {standard.length > 0 && (
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-4">Standard Included</h3>
            <ul className="flex flex-col gap-3">
              {standard.map(acc => (
                <li key={acc.id} className="group flex gap-4 items-start p-5 bg-muted/20 border border-border/50 rounded-xl hover:border-hero-accent/50 hover:bg-muted/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-hero-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-base font-bold text-foreground leading-snug">{acc.name}</p>
                    {acc.description && <p className="text-sm text-muted-foreground leading-relaxed">{acc.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {optional.length > 0 && (
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-4">Optional Upgrades</h3>
            <ul className="flex flex-col gap-3">
              {optional.map(acc => (
                <li key={acc.id} className="group flex gap-4 items-start p-5 bg-card border border-border rounded-xl hover:border-hero-accent/50 hover:shadow-md transition-all">
                  <PlusCircle className="w-5 h-5 text-muted-foreground group-hover:text-hero-accent transition-colors shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-base font-bold text-foreground leading-snug group-hover:text-hero-accent transition-colors">{acc.name}</p>
                    {acc.description && <p className="text-sm text-muted-foreground leading-relaxed">{acc.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
