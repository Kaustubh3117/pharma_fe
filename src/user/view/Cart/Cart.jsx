import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';

export const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            {/* Quantity Selector */}
            <div className="flex-auto">
                <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Quantity:</label>
                <InputNumber
                    inputId="horizontal-buttons"
                    value={quantity}
                    onValueChange={(e) => setQuantity(e.value)}
                    showButtons
                    min={0}
                    buttonLayout="horizontal"
                    decrementButtonClassName="p-button-primary"
                    incrementButtonClassName="p-button-primary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    inputClassName="w-3rem"
                />
            </div>
        </>
    )
}