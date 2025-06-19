import { createContext, useContext } from 'react';
export const ThemeContext = createContext({
    themeMode: "light",
    darktheme: () => {},
    lighttheme: () => {},
});


export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return useContext(ThemeContext);
}