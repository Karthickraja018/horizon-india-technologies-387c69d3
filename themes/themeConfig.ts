export type ThemeName = "blueLight";

export type ThemePalette = {
  bgPrimary: string;
  bgSecondary: string;
  textPrimary: string;
  textSecondary: string;
  accentPrimary: string;
  accentSecondary: string;
  darkPrimary: string;
  border: string;
};

type ThemeMeta = {
  label: string;
  key: ThemeName;
  palette: ThemePalette;
};

export const themeConfig: Record<ThemeName, ThemePalette> = {
  blueLight: {
    bgPrimary: "#FFFFFF",
    bgSecondary: "#FFFFFF",
    textPrimary: "#1A2A3A",
    textSecondary: "#4B6072",
    accentPrimary: "#2E86DE",
    accentSecondary: "#5B8AB5",
    darkPrimary: "#0A1628",
    border: "#E5E7EB",
  },
};

export const themes: ThemeMeta[] = [
  { key: "blueLight", label: "Blue Light", palette: themeConfig.blueLight },
];

export const defaultTheme: ThemeName = "blueLight";

const clamp = (value: number, min = 0, max = 100): number => Math.min(max, Math.max(min, value));

const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
  const normalized = hex.replace("#", "");
  const fullHex = normalized.length === 3
    ? normalized
        .split("")
        .map((char) => `${char}${char}`)
        .join("")
    : normalized;

  const r = parseInt(fullHex.slice(0, 2), 16) / 255;
  const g = parseInt(fullHex.slice(2, 4), 16) / 255;
  const b = parseInt(fullHex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return {
    h,
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const hslToString = ({ h, s, l }: { h: number; s: number; l: number }): string => `${h} ${s}% ${l}%`;

const withLightness = (hex: string, delta: number): string => {
  const hsl = hexToHsl(hex);
  return hslToString({
    h: hsl.h,
    s: hsl.s,
    l: clamp(hsl.l + delta),
  });
};

const asHslVar = (hex: string): string => hslToString(hexToHsl(hex));

export const getThemeCssVariables = (theme: ThemePalette): Record<string, string> => {
  const neutralSurface = "#F8FAFC";
  const neutralMuted = "#F1F5F9";

  return {
    "--bgPrimary": theme.bgPrimary,
    "--bgSecondary": theme.bgSecondary,
    "--textPrimary": theme.textPrimary,
    "--textSecondary": theme.textSecondary,
    "--accentPrimary": theme.accentPrimary,
    "--accentSecondary": theme.accentSecondary,
    "--darkPrimary": theme.darkPrimary,
    "--border": asHslVar(theme.border),

    "--background": asHslVar(theme.bgPrimary),
    "--foreground": asHslVar(theme.textPrimary),
    "--card": asHslVar(theme.bgSecondary),
    "--card-foreground": asHslVar(theme.textPrimary),
    "--popover": asHslVar(theme.bgSecondary),
    "--popover-foreground": asHslVar(theme.textPrimary),

    "--primary": asHslVar(theme.darkPrimary),
    "--primary-foreground": asHslVar(theme.bgSecondary),
    "--secondary": asHslVar(neutralSurface),
    "--secondary-foreground": asHslVar(theme.textPrimary),

    "--muted": asHslVar(neutralMuted),
    "--muted-foreground": asHslVar(theme.textSecondary),

    "--accent": asHslVar(theme.accentPrimary),
    "--accent-foreground": asHslVar(theme.bgSecondary),

    "--destructive": "0 65% 52%",
    "--destructive-foreground": asHslVar(theme.bgSecondary),

    "--input": asHslVar(theme.border),
    "--ring": asHslVar(theme.accentPrimary),

    "--hero-bg": asHslVar(theme.bgSecondary),
    "--hero-foreground": asHslVar(theme.textPrimary),
    "--hero-headline": asHslVar(theme.textPrimary),
    "--hero-accent": asHslVar(theme.accentPrimary),
    "--hero-accent-hover": withLightness(theme.accentPrimary, -7),
    "--hero-muted": asHslVar(theme.textSecondary),
    "--hero-frame": asHslVar(neutralSurface),
    "--hero-frame-border": asHslVar(theme.border),

    "--overlay": asHslVar(theme.darkPrimary),
    "--whatsapp": asHslVar(theme.accentPrimary),
    "--whatsapp-hover": withLightness(theme.accentPrimary, -8),

    "--sidebar-background": asHslVar(theme.bgSecondary),
    "--sidebar-foreground": asHslVar(theme.textPrimary),
    "--sidebar-primary": asHslVar(theme.darkPrimary),
    "--sidebar-primary-foreground": asHslVar(theme.bgSecondary),
    "--sidebar-accent": asHslVar(neutralSurface),
    "--sidebar-accent-foreground": asHslVar(theme.textPrimary),
    "--sidebar-border": asHslVar(theme.border),
    "--sidebar-ring": asHslVar(theme.accentPrimary),
  };
};
