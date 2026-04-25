import { Button } from "primereact/button";

export const PrimeButton = ({ label, icon, severity, onClick, style, iconPos, outlined, tooltip, tooltipOptions }) => {
    return (
        <Button
            key={label}
            label={label}
            icon={icon}
            severity={severity || "primary"}
            iconPos={iconPos}
            style={style}
            onClick={onClick || (() => { })}
            outlined={outlined}
            tooltip={tooltip}
            tooltipOptions={tooltipOptions}
        />
    );
};