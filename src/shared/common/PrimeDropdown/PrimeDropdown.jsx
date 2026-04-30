import { Dropdown } from "primereact/dropdown";

export const PrimeDropdown = ({
    value,
    onChange,
    options,
    optionLabel = "name",
    placeholder = "Select an option",
    editable = false,
    className = "w-full md:w-14rem",
}) => {
    return (
        <Dropdown
            value={value}
            onChange={(e) => onChange(e.value)}
            options={options}
            optionLabel={optionLabel}
            editable={editable}
            placeholder={placeholder}
            className={className}
        />
    )
}