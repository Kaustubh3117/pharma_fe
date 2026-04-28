import { Avatar } from 'primereact/avatar';

export const PrimeAvatar = ({ label, size, shape, style, onClick, className }) => {
    return (
        <Avatar
            label={label}
            size={size}
            style={style}
            shape={shape}
            onClick={onClick}
            className={className}
        />
    );
}