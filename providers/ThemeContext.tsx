"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { defaultTheme, getThemeCssVariables, themeConfig, themes, type ThemeName } from "@/themes/themeConfig";

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  options: typeof themes;
};

const STORAGE_KEY = "horizon.theme";
const TRANSITION_CLASS = "theme-transition";

const ThemeContext = createContext<ThemeContextValue | null>(null);

const applyTheme = (themeName: ThemeName) => {
  const root = document.documentElement;
  const variables = getThemeCssVariables(themeConfig[themeName]);

  root.classList.add(TRANSITION_CLASS);
  Object.entries(variables).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });

  window.setTimeout(() => {
    root.classList.remove(TRANSITION_CLASS);
  }, 320);
};

const getStoredTheme = (): ThemeName => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored || !(stored in themeConfig)) {
    return defaultTheme;
  }

  return stored as ThemeName;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const initialTheme = getStoredTheme();
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const setTheme = (nextTheme: ThemeName) => {
    setThemeState(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      options: themes,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
