import { Outlet } from "react-router";
import Header from "./components/Header";
import "./index.css";
import { ThemeProvider } from "./contexts/themeContext";

const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <Outlet />
        </ThemeProvider>
    )
}

export default App;