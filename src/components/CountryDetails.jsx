import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { useTheme } from "../hooks/useTheme";

const CountryDetails = () => {
    const [countryData, setCountryData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const { state } = useLocation();
    const [isDark] = useTheme();

    const params = useParams();
    const countryName = params.country;


    async function handleSetCountryData(data) {
        const country = {
            img: data.flags.svg,
            title: data.name.common,
            nativeName: Object.values(data.name.nativeName)[0]?.common || data.name.common,
            population: data.population,
            region: data.region,
            subRegion: data.subregion || data.region,
            capital: data.capital.join(", ") || "unknown",
            topLevelDomain: data.tld.join(", "),
            currencies: Object.values(data.currencies).map(({ name }) => name).join(", ") || "unknown",
            languages: Object.values(data.languages).join(", ") || "unknown",
            borders: []
        };

        setCountryData(country);

        if (data.borders) {
            try {
                const borderCountries = await Promise.all(data.borders.map(async (border) => {

                    const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
                    const data = await res.json();

                    const countryName = data[0].name.common;
                    return countryName;

                }));

                setCountryData(prevState => ({ ...prevState, borders: [...borderCountries] }));

            } catch (err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
        if (state) {
            handleSetCountryData(state);
            return;
        }

        (async () => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);

                if (!res.ok) throw new Error("Country not found");

                const country = await res.json();
                handleSetCountryData(country[0]);

            } catch (err) {
                setNotFound(true);
            }
        })();
    }, [countryName]);
    return (
        <main className={`px-6 py-10 h-custom ${isDark ? "dark-mode" : ""}  bg-(--background-color) text-(--text-color)`}>
            <section className="max-w-300 mx-auto">
                <span onClick={() => history.back()} className="rounded-sm shadow-[0_0_4px_#0003] py-1.5 px-6 cursor-pointer bg-(--elements-color) ">
                    <i className="fa-solid fa-arrow-left"></i>  Back
                </span>
                {
                    notFound ? <h1 className="text-center mt-4 text-xl">Country Not Found</h1>

                        : !countryData ? <h1 className="text-center mt-4 text-xl">Loading...</h1>

                            : <div className="my-16 flex gap-16 flex-col media840:flex-row max-w-125 media840:max-w-[unset] mx-auto">
                                <img className="self-center w-full media840:w-[40%] max-h-80 object-contain" src={countryData.img} alt="country-flag" />
                                <div>
                                    <h1 className="text-[32px] font-bold mb-5">{countryData.title}</h1>
                                    <div className="flex flex-col media500:flex-row media500:gap-8 mb-10">
                                        <div className="[&>*+*]:my-2.5">
                                            <p><b>Native Name: </b><span>{countryData.nativeName}</span></p>
                                            <p><b>Population: </b><span>{countryData.population.toLocaleString("en-IN")}</span></p>
                                            <p><b>Region: </b><span>{countryData.region}</span></p>
                                            <p><b>Sub Region: </b><span>{countryData.subRegion}</span></p>
                                            <p><b>Capital: </b><span>{countryData.capital}</span></p>
                                        </div>
                                        <div className="[&>*+*]:my-2.5">
                                            <p><b>Top Level Domain: </b><span>{countryData.topLevelDomain}</span></p>
                                            <p><b>Currencies: </b><span>{countryData.currencies}</span></p>
                                            <p><b>Languages: </b><span>{countryData.languages}</span></p>
                                        </div>
                                    </div>
                                    {
                                        countryData.borders.length !== 0 && <div className="flex items-center gap-6 ">
                                            <span><b>Border Countries: </b></span>
                                            <div className="flex gap-4 flex-wrap *:shadow-[0_0_4px_#0003] *:py-1 *:px-4 *:bg-(--elements-color) ">
                                                {
                                                    countryData.borders.map(borderCountry => <Link to={`/${borderCountry}`} key={crypto.randomUUID()}>{borderCountry}</Link>)
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                }
            </section>
        </main>
    )
}

export default CountryDetails;