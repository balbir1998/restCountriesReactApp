import { Link } from "react-router";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
    const [isDark, setIsDark] = useTheme();

    return (
        <header className={`px-6 shadow-[0_2px_4px_#0000001a] sticky top-0 z-50 ${isDark ? "dark-mode" : ""}  bg-(--elements-color) text-(--text-color)`}>
            <nav className="flex gap-2.5 justify-between items-center max-w-300 mx-auto">
                <h1 className="my-5 text-lg media500:text-2xl font-extrabold">
                    <Link to="/">Where in the world?</Link>
                </h1>
                <div className="cursor-pointer shrink-0" onClick={() => {
                    setIsDark(!isDark);
                    localStorage.setItem("darkMode", !isDark);
                }}>
                    <i className={`fa-regular fa-${isDark ? "sun" : "moon"} -rotate-23`}></i>
                    &nbsp;&nbsp;<span>{isDark ? "Light" : "Dark"} Mode</span>
                </div>
            </nav>
        </header >
    )
}

export default Header;