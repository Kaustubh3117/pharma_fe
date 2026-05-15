import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

export const formFields = (formField, field) => {
    switch (formField.type) {
        case "text":
            return (
                <InputText
                    {...field}
                    placeholder={formField.label}
                />
            );
        case "dropdown":
            return (
                <Dropdown
                    {...field}
                    options={formField.options}
                    placeholder={formField.label}
                />
            );
        case "calendar":
            return (
                <Calendar
                    {...field}
                    placeholder={formField.label}
                />
            );
        case "textarea":
            return (
                <InputText
                    {...field}
                    placeholder={formField.label}
                    multiline
                    rows={formField.rows || 3}
                />
            );
        default:
            return null;
    }
}
