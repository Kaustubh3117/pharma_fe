import React from "react";
import { Controller } from "react-hook-form";

export const FormController = ({
    name,
    control,
    rules,
    render,
    defaultValue = ""
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={render}
        />
    );
};