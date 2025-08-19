import * as react from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type Theme = "dark" | "light" | "system";
type PreferredTheme = "dark" | "light";
type ThemeProviderState = {
    theme: Theme;
    preferredTheme: PreferredTheme;
    setTheme: (theme: Theme) => void;
};
declare const ThemeProviderContext: react.Context<ThemeProviderState>;

declare const useTheme: () => {
    theme: Theme;
    preferredTheme: PreferredTheme;
    setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};
declare function ThemeProvider({ children, defaultTheme, storageKey, ...props }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

export { type PreferredTheme, type Theme, ThemeProvider, ThemeProviderContext, useTheme };
