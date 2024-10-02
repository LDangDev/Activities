import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function Button({ children }) {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const className = 'button-' + theme

    return (
        <button className={className} onClick={toggleTheme}>
            {children}
        </button>
    )
}
