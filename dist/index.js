// src/context/ThemeProviderContext.ts
import { createContext } from "react";
var initialState = {
  theme: "system",
  preferredTheme: "light",
  setTheme: () => null
};
var ThemeProviderContext = createContext(initialState);

// src/hooks/useTheme.ts
import { useContext } from "react";
var useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

// src/providers/ThemeProvider.tsx
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const preferredTheme = theme === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : theme;
  const value = {
    theme,
    preferredTheme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
export {
  ThemeProvider,
  ThemeProviderContext,
  useTheme
};
