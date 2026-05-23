export default function ComparisonTable({ variants }: { variants: any[] }) {
  if (!variants || variants.length < 2) return null;

  // Extract all unique spec keys across all variants
  const allSpecKeys = new Set<string>();
  
  variants.forEach(variant => {
    // Add built-in fields we might want to compare
    if (variant.type) allSpecKeys.add('Type');
    if (variant.majorLoads) allSpecKeys.add('Major Loads');
    if (variant.minorLoads) allSpecKeys.add('Minor Loads');
    if (variant.resolution) allSpecKeys.add('Resolution');
    
    // Add custom spec table fields
    if (variant.specTable) {
      variant.specTable.forEach((spec: any) => allSpecKeys.add(spec.label));
    }
  });

  const specKeysArray = Array.from(allSpecKeys);

  return (
    <div className="mt-16 overflow-x-auto">
      <span className="label-eyebrow">Compare</span>
      <h2 className="text-2xl font-bold text-hero-headline mt-2 mb-6">Model Comparison</h2>
      <div className="surface-card rounded-xl overflow-hidden border border-border">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="p-4 font-semibold text-hero-headline w-1/4">Specification</th>
              {variants.map(v => (
                <th key={v.id} className="p-4 font-semibold text-hero-headline min-w-[200px]">
                  {v.modelName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {specKeysArray.map((key, i) => (
              <tr key={i} className="hover:bg-muted/20 transition-colors">
                <td className="p-4 font-medium text-hero-muted bg-muted/10">{key}</td>
                {variants.map(v => {
                  let val = '—';
                  
                  if (key === 'Type' && v.type) val = v.type;
                  else if (key === 'Major Loads' && v.majorLoads) val = v.majorLoads;
                  else if (key === 'Minor Loads' && v.minorLoads) val = v.minorLoads;
                  else if (key === 'Resolution' && v.resolution) val = v.resolution;
                  else if (v.specTable) {
                    const spec = v.specTable.find((s: any) => s.label === key);
                    if (spec) val = spec.value;
                  }

                  return (
                    <td key={`${v.id}-${key}`} className="p-4 text-hero-foreground">
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
