import * as react from 'react';
import react__default from 'react';
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

type ModeToggleRenderProps = {
    theme: Theme;
    preferredTheme: PreferredTheme;
    setTheme: (theme: Theme) => void;
    getThemeLabel: () => string;
    availableThemes: Theme[];
};
type ModeToggleProps = {
    children: (props: ModeToggleRenderProps) => react__default.ReactNode;
};
declare function ModeToggle({ children }: ModeToggleProps): react_jsx_runtime.JSX.Element;

export { ModeToggle, type ModeToggleProps, type ModeToggleRenderProps, type PreferredTheme, type Theme, ThemeProvider, ThemeProviderContext, useTheme };
