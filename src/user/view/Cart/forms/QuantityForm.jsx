import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputNumber } from "primereact/inputnumber";
import { quantityValidationSchema } from "./quantityValidationSchema/quantityValidationSchema";
import { FormController } from "../../../../shared/common/FormController/FormController";

export default function QuantityForm({ quantity }) {
    const {
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(quantityValidationSchema),
        defaultValues: {
            quantity: ""
        }
    });

    // const onSubmit = (data) => {
    //     console.log("Form submitted:", data);
    // };

    return (
        <>
            <FormController
                name="quantity"
                control={control}
                render={({ field }) => (
                    <InputNumber
                        {...field}
                        value={field.value ? field.value : quantity}
                        onValueChange={(e) => field.onChange(e.value)}
                        showButtons
                        buttonLayout="horizontal"
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        min={0}
                        className="custom-inputnumber mt-2"
                    />
                )}
            />
            {errors.quantity && (
                <p style={{ color: "red" }}>{errors.quantity.message}</p>
            )}
        </>
    );
}
