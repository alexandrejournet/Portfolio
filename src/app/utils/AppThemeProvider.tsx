"use client";
// Helper component to set theme in cookie
import {ThemeProviderProps} from "next-themes/dist/types";
import {ThemeProvider, useTheme} from "next-themes";
import {useEffect} from "react";
import {setCookie} from "cookies-next";

export function AppThemeProvider({children, ...props }: ThemeProviderProps) {
    return (
        <ThemeProvider enableColorScheme {...props}>
            <AppThemeProviderHelper />
            {children}
        </ThemeProvider>
    );
}
function AppThemeProviderHelper() {
    const { theme } = useTheme();

    useEffect(() => {
        setCookie("__theme__", theme, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
            path: "/",
        });
    }, [theme]);

    return null;
}