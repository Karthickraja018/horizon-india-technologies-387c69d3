import Image from "next/image";
import { Accessory } from "@/types";

interface AccessoriesListProps {
  accessories: Accessory[];
}

export default function AccessoriesList({ accessories }: AccessoriesListProps) {
  if (!accessories || accessories.length === 0) return null;

  const standard = accessories.filter(a => a.category === 'standard');
  const optional = accessories.filter(a => a.category === 'optional');

  return (
    <div className="mt-12">
      <span className="label-eyebrow">Enhancements</span>
      <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-6">Accessories</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {standard.length > 0 && (
          <div>
            <h3 className="text-hero-foreground font-semibold mb-4 border-b border-border pb-2">Standard Accessories</h3>
            <ul className="space-y-3">
              {standard.map(acc => (
                <li key={acc.id} className="flex gap-4 items-start p-3 surface-card rounded-md">
                  {acc.image && (
                    <div className="w-16 h-16 shrink-0 bg-background rounded border border-border flex items-center justify-center p-1">
                      <Image src={acc.image} alt={acc.name} width={60} height={60} className="object-contain" />
                    </div>
                  )}
                  <div className={!acc.image ? "py-1" : ""}>
                    <p className="text-sm font-medium text-hero-foreground">{acc.name}</p>
                    {acc.description && <p className="text-xs text-hero-muted mt-1">{acc.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {optional.length > 0 && (
          <div>
            <h3 className="text-hero-foreground font-semibold mb-4 border-b border-border pb-2">Optional Accessories</h3>
            <ul className="space-y-3">
              {optional.map(acc => (
                <li key={acc.id} className="flex gap-4 items-start p-3 surface-card rounded-md">
                  {acc.image && (
                    <div className="w-16 h-16 shrink-0 bg-background rounded border border-border flex items-center justify-center p-1">
                      <Image src={acc.image} alt={acc.name} width={60} height={60} className="object-contain" />
                    </div>
                  )}
                  <div className={!acc.image ? "py-1" : ""}>
                    <p className="text-sm font-medium text-hero-foreground">{acc.name}</p>
                    {acc.description && <p className="text-xs text-hero-muted mt-1">{acc.description}</p>}
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
