import { memo } from "react";

const SearchBox = ({ searchItem, handleSetInput, clearSearchBox, inputRef }) => {
    return (
        <div className="flex items-center px-6 max-w-100 w-full shadow-[0_0_12px_#00000026] bg-(--elements-color) ">
            <label htmlFor="country">
                <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
                type="text"
                className="text-sm ml-4 py-4 px-0.5 outline-none w-full placeholder-inherit"
                name="country"
                id="country"
                placeholder="Search for a country..."
                value={searchItem}
                ref={inputRef}
                onChange={handleSetInput}
            />
            <span
                className={`ml-2 cursor-pointer ${!searchItem ? "hidden" : ""}`}
                onClick={clearSearchBox}
            >
                <i className="fa-solid fa-xmark"></i>
            </span>
        </div>
    )
}

export default memo(SearchBox);