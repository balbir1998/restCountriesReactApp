import { useState } from "react";

export function useFilter(data, callback) {
    const [query, setQuery] = useState("");

    const filteredData = data.filter(country =>
        callback(country).toLowerCase().includes(query.toLowerCase())
    );

    return [filteredData, setQuery];
}