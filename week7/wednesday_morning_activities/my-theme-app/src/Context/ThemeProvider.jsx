import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}