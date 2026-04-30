import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";

export const PrimeAutoComplete = ({
    selectedValue,
    setSelectedValue,
    suggestionsData,
    placeholder,
    optionLabel,
    className,
    style,
}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const search = (event) => {
        let query = event.query.toLowerCase();
        let filtered = suggestionsData.filter((item) =>
            item[optionLabel].toLowerCase().includes(query)
        );
        setFilteredSuggestions(filtered);
    };

    return (
        <AutoComplete
            value={selectedValue}
            suggestions={filteredSuggestions}
            completeMethod={search}
            field={optionLabel}
            onChange={(e) => setSelectedValue(e.value)}
            placeholder={placeholder}
            className={className}
            style={style}
        />
    )
}