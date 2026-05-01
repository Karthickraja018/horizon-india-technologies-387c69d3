import { useMemo, useState } from "react";

interface SpecsTableProps {
  specifications: Record<string, string>;
}

const SpecsTable = ({ specifications }: SpecsTableProps) => {
  const [expanded, setExpanded] = useState(false);
  const allSpecs = useMemo(() => Object.entries(specifications), [specifications]);
  const initialCount = 3;
  const visibleSpecs = expanded ? allSpecs : allSpecs.slice(0, initialCount);
  const hiddenCount = Math.max(allSpecs.length - initialCount, 0);

  return (
    <div className="surface-card overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {visibleSpecs.map(([key, value]) => (
            <tr key={key} className="border-b border-border last:border-0">
              <td className="px-5 py-3 text-hero-muted uppercase tracking-wider text-[11px] w-2/5">{key}</td>
              <td className="px-5 py-3 text-hero-foreground font-medium">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {hiddenCount > 0 && (
        <div className="border-t border-border p-3">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="text-sm font-semibold text-hero-accent hover:text-hero-accent-hover transition-colors"
          >
            {expanded ? "View Less" : `View More (${hiddenCount})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecsTable;
