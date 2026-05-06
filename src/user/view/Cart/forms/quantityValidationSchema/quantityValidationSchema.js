import * as yup from "yup";

export const quantityValidationSchema = yup.object().shape({
    quantity: yup
        .number()
        .typeError("Quantity must be a number")
        .positive("Quantity must be greater than 0")
        .integer("Quantity must be an integer")
        .required("Quantity is required")
});