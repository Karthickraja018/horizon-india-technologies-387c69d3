import { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const FloatingThemeButton = () => {
  const { theme, setTheme, options } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 left-6 z-40" ref={menuRef}>
      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 mb-2 flex flex-col gap-2 bg-card border border-border rounded-lg p-3 backdrop-blur-sm min-w-max">
          {options.map((option) => {
            const isActive = option.key === theme;
            return (
              <button
                key={option.key}
                onClick={() => {
                  setTheme(option.key);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-hero-accent text-white"
                    : "hover:bg-[#f8fafc] text-hero-foreground"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-current"
                    style={{ backgroundColor: option.palette.accentPrimary }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-current"
                    style={{ backgroundColor: option.palette.accentSecondary }}
                  />
                </div>
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-hero-accent hover:bg-hero-accent-hover text-white transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Toggle theme"
        title="Change theme"
      >
        <Palette className="w-6 h-6 transition-transform group-hover:rotate-12" />
      </button>
    </div>
  );
};

export default FloatingThemeButton;
