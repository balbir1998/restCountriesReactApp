import { useEffect, useState } from "react"
import CountriesContainer from "./CountriesContainer"
import SearchFilterContainer from "./SearchFilterContainer"
import { useTheme } from "../hooks/useTheme";
import { useFilter } from "../hooks/useFilter";

const Main = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [isDark] = useTheme();

    const [filterKey, setFilterKey] = useState(() => (country) => country.name.common);
    const [filteredCountries, setQuery] = useFilter(countriesData, filterKey);

    useEffect(() => {
        const fields = ["name", "flags", "population", "capital", "region", "languages", "currencies", "tld", "subregion", "borders"].join(",");
        (async () => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
                const data = await res.json();
                setCountriesData(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <main className={`px-6 py-10 h-custom ${isDark ? "dark-mode" : ""}  bg-(--background-color) text-(--text-color)`}>
            <SearchFilterContainer
                setQuery={setQuery}
                setFilterKey={setFilterKey}
            />
            <CountriesContainer
                countriesData={countriesData}
                filteredCountries={filteredCountries}
            />
        </main>
    )
}

export default Main;