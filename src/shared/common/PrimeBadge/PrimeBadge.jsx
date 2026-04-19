import { Badge } from "primereact/badge";

export const PrimeBadge = ({ value, size, severity, className }) => {
    return (
        <Badge value={value} size={size} severity={severity} className={className || ""} />
    );
};