import { useCallback, useEffect, useRef, useState } from "react";
import FilterBox from "./FilterBox.jsx"
import SearchBox from "./SearchBox.jsx"

const SearchFilterContainer = ({ setQuery, setFilterKey }) => {
    const [searchItem, setSearchItem] = useState("");
    const [filterSelect, setFilterSelect] = useState("");

    const inputRef = useRef(null);
    const timerRef = useRef(null);

    const handleSetInput = useCallback((e) => {
        const value = e.target.value;

        setSearchItem(value);
        setFilterSelect("");

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        };

        if (!value.trim()) {
            setQuery("");
            return;
        };

        timerRef.current = setTimeout(() => {
            setQuery(value.trim());
            setFilterKey(() => (country) => country.name.common);
            timerRef.current = null;
        }, 300);

    }, [setQuery, setFilterKey]);

    const handleSetFilterSelect = useCallback((e) => {
        const value = e.target.value;

        setFilterSelect(value);
        setQuery(value);
        setFilterKey(() => (country) => country.region);

        setSearchItem("");
    }, [setQuery, setFilterKey])

    const clearSearchBox = useCallback(() => {
        setSearchItem("");
        setQuery("");
        inputRef.current?.focus();
    }, [setQuery]);

    const clearFilterBox = useCallback(() => {
        setFilterSelect("");
        setQuery("");
    }, [setQuery]);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, []);

    return (
        <div className="max-w-300 mx-auto flex gap-6 flex-col md:flex-row items-start md:justify-between">
            <SearchBox
                searchItem={searchItem}
                handleSetInput={handleSetInput}
                clearSearchBox={clearSearchBox}
                inputRef={inputRef}
            />
            <FilterBox
                filterSelect={filterSelect}
                handleSetFilterSelect={handleSetFilterSelect}
                clearFilterBox={clearFilterBox}
            />
        </div>
    )
}

export default SearchFilterContainer;