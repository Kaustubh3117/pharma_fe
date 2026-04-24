import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";
import { setToast } from "../../utils/toastService";

export const PrimeToast = () => {
    const toastRef = useRef(null);

    useEffect(() => {
        setToast(toastRef.current);
    }, []);

    return (
        <div>
            <Toast ref={toastRef} />
        </div>
    );
};