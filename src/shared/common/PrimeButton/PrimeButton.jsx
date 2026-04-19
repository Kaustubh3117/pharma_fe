import { Button } from "primereact/button";

export const PrimeButton = ({ label, icon, severity, onClick, style, iconPos }) => {
    return (
        <Button
            key={label}
            label={label}
            icon={icon}
            severity={severity || "primary"}
            iconPos={iconPos}
            style={style}
            onClick={onClick || (() => { })}
        />
    );
};