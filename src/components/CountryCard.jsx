import { Link } from "react-router";

const CountryCard = ({ img, title, population, capital, region, data }) => {
    return (
        <Link to={`/${title}`} state={data} className="bg-(--elements-color) flex flex-col justify-between rounded-lg shadow-[0_2px_4px_#0000001a] cursor-pointer">
            <div className="p-2 w-full">
                <img className="rounded-lg h-40 object-cover w-full" src={img} alt="country=flag" />
            </div>
            <div className="px-4 pb-6">
                <h3 className="my-4 text-2xl font-bold">{title}</h3>
                <p className="my-2"><b>Population:</b> {population.toLocaleString("en-IN")}</p>
                <p className="my-2"><b>Region:</b> {region}</p>
                <p className="my-2"><b>Capital:</b> {capital ? capital.join(", ") : "Unknown"}</p>
            </div>
        </Link>
    )
}

export default CountryCard;