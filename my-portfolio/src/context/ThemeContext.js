import { createContext, useEffect, useState } from "react";

// Create a new context
export const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
    // Read theme from localStorage or default to dark mode
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
