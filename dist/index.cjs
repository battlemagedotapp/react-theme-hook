"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ThemeProvider: () => ThemeProvider,
  ThemeProviderContext: () => ThemeProviderContext,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(src_exports);

// src/context/ThemeProviderContext.ts
var import_react = require("react");
var initialState = {
  theme: "system",
  preferredTheme: "light",
  setTheme: () => null
};
var ThemeProviderContext = (0, import_react.createContext)(initialState);

// src/hooks/useTheme.ts
var import_react2 = require("react");
var useTheme = () => {
  const context = (0, import_react2.useContext)(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

// src/providers/ThemeProvider.tsx
var import_react3 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = (0, import_react3.useState)(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProviderContext.Provider, { ...props, value, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeProvider,
  ThemeProviderContext,
  useTheme
});
