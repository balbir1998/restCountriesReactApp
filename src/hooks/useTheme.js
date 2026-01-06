import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export function useTheme() {
    const [isDark, setIsDark] = useContext(ThemeContext);

    return [isDark, setIsDark];
}