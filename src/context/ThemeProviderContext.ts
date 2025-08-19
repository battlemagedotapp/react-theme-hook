import { createContext } from "react";

export type Theme = "dark" | "light" | "system";
export type PreferredTheme = "dark" | "light";

type ThemeProviderState = {
  theme: Theme;
  preferredTheme: PreferredTheme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  preferredTheme: "light",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
