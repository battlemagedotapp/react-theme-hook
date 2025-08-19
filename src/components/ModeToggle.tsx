import React from "react";
import { useTheme } from "../hooks/useTheme";
import type { Theme, PreferredTheme } from "../context/ThemeProviderContext";

export type ModeToggleRenderProps = {
    theme: Theme;
    preferredTheme: PreferredTheme;
    setTheme: (theme: Theme) => void;
    getThemeLabel: () => string;
    availableThemes: Theme[];
};

export type ModeToggleProps = {
    children: (props: ModeToggleRenderProps) => React.ReactNode;
};

export function ModeToggle({ children }: ModeToggleProps) {
    const { theme, preferredTheme, setTheme } = useTheme();

    const getThemeLabel = () => {
        switch (theme) {
            case "light":
                return "Light";
            case "dark":
                return "Dark";
            case "system":
                return "System";
            default:
                return "System";
        }
    };


    const renderProps: ModeToggleRenderProps = {
        theme,
        preferredTheme,
        setTheme,
        getThemeLabel,
        availableThemes: ["light", "dark", "system"],
    };

    return <>{children(renderProps)}</>;
}


