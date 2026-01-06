import CardsShimmerEffect from "./CardsShimmerEffect.jsx";
import CountryCard from "./CountryCard.jsx";

const CountriesContainer = ({ countriesData, filteredCountries }) => {
    return (
        <div className="max-w-300 mx-auto mt-10 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 relative">
            {
                !countriesData.length ? < CardsShimmerEffect />
                    : !filteredCountries.length ?
                        <h1 className="text-2xl text-center absolute w-full">County Not Found!</h1>
                        : filteredCountries.map(country => {
                            return <CountryCard
                                key={crypto.randomUUID()}
                                img={country.flags.svg}
                                title={country.name.common}
                                population={country.population}
                                capital={country.capital}
                                region={country.region}
                                data={country}
                            />
                        })
            }
        </div >
    )
}

export default CountriesContainer;