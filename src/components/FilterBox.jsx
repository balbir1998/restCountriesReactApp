import { memo } from "react";

const FilterBox = ({ filterSelect, handleSetFilterSelect, clearFilterBox }) => {
    return (
        <>
            <div className="flex items-center shadow-[0_0_12px_#00000026] relative bg-(--elements-color) *:bg-inherit">
                <select className="text-sm p-4" value={filterSelect} onChange={handleSetFilterSelect}>
                    <option hidden>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
                <span
                    className={`absolute -right-6 cursor-pointer ${!filterSelect ? "hidden" : ""}`}
                    onClick={clearFilterBox}
                >
                    <i className="fa-solid fa-xmark"></i>
                </span>
            </div >
        </>
    )
}

export default memo(FilterBox);