import { useEffect, useState } from "react";

export const useThemeDetector = () => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDarkTheme, setIsDarkTheme] = useState(mediaQuery.matches);

    useEffect(() => {
        const handler = (e: MediaQueryListEvent) => {
            setIsDarkTheme(e.matches);
        };
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return isDarkTheme;
};
