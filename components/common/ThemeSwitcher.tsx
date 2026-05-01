import { useTheme } from "@/providers/ThemeContext";

type ThemeSwitcherProps = {
  compact?: boolean;
};

const ThemeSwitcher = ({ compact = false }: ThemeSwitcherProps) => {
  const { theme, setTheme, options } = useTheme();

  return (
    <div className={compact ? "flex items-center gap-2" : "grid grid-cols-2 gap-2 sm:grid-cols-4"}>
      {options.map((option) => {
        const isActive = option.key === theme;

        return (
          <button
            key={option.key}
            type="button"
            onClick={() => setTheme(option.key)}
            className={`group relative overflow-hidden rounded-xl border p-2 text-left transition-all duration-300 ${
              isActive
                ? "border-hero-accent bg-white"
                : "border-border bg-white hover:border-hero-accent/55 hover:bg-[#f8fafc]"
            }`}
            aria-pressed={isActive}
            aria-label={`Switch to ${option.label} theme`}
            title={option.label}
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-hero-accent/70 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-hero-muted">
              Theme
            </span>
            <span className="mb-2 block text-xs font-semibold text-hero-headline">
              {compact ? option.label.split(" ")[0] : option.label}
            </span>
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span
                className="h-3.5 w-3.5 rounded-full border border-hero-muted/30"
                style={{ backgroundColor: option.palette.accentPrimary }}
              />
              <span
                className="h-3.5 w-3.5 rounded-full border border-hero-muted/30"
                style={{ backgroundColor: option.palette.accentSecondary }}
              />
              <span
                className="h-3.5 w-3.5 rounded-full border border-hero-muted/30"
                style={{ backgroundColor: option.palette.darkPrimary }}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
