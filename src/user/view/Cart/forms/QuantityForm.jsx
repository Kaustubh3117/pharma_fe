import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputNumber } from "primereact/inputnumber";
import { quantityValidationSchema } from "./quantityValidationSchema/quantityValidationSchema";
import { FormController } from "../../../../shared/common/FormController/FormController";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity } from "../../../store/actions/cartAction/cartAction";
import { showToast } from "../../../../shared/utils/toastService";

export default function QuantityForm({ quantity, productId, userId, quantityPerUser }) {
    const {
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(quantityValidationSchema),
        defaultValues: {
            quantity: quantity ?? ""
        }
    });
    const dispatch = useDispatch();

    const updateQuantity = (quantity) => {
        dispatch(updateCartItemQuantity({ user_id: userId, product_id: productId, quantity: quantity }))
    };

    const handleQuantityChange = (value) => {
        if (value && value <= quantityPerUser) {
            updateQuantity(value);
            if (value === quantityPerUser) {
                showToast("", "", `You can only add up to ${quantityPerUser} items for this product.`);
            }
        }
    };

    return (
        <>
            <FormController
                name="quantity"
                control={control}
                render={({ field }) => (
                    <InputNumber
                        value={field.value}
                        onValueChange={(e) => {
                            const val = e.value;
                            field.onChange(val);
                            handleQuantityChange(val);
                        }}
                        showButtons
                        buttonLayout="horizontal"
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        min={0}
                        max={quantityPerUser}
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
