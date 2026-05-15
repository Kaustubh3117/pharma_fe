import { shippingFields } from "../addressHelper";
import { useForm } from "react-hook-form";
import { FormController } from "../../../../shared/common/FormController/FormController";
import { Button } from "primereact/button";
import { formFields } from "../../../../shared/common/FormFields/formFields";

export const AddAddress = () => {
    const defaultValues = shippingFields.reduce((values, field) => {
        values[field.name] = "";
        return values;
    }, { setAsDefault: false });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };
    return (
        <>
            <div className="shadow-2 surface-card border-round p-3">
                <div className="grid">
                    {shippingFields?.map((formField) => (
                        <div key={formField.name} className="flex flex-column col-12 md:col-6">
                            <label htmlFor={formField.name} className="font-bold">
                                {formField.label}
                            </label>
                            <FormController
                                name={formField.name}
                                control={control}
                                rules={formField.rules}
                                render={({ field }) => (
                                    formFields(formField, field)
                                )}
                            />
                            {errors[formField.name] && <small className="p-error">{errors[formField.name].message}</small>}
                        </div>
                    ))}

                    <div className="col-12 flex justify-content-end gap-2">
                        <Button label="Save Address" severity="success" onClick={handleSubmit(onSubmit)} />
                    </div>
                </div>
            </div>

        </>
    )
}