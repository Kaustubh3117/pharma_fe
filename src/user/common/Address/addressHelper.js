export const shippingFields = [
    {
        name: "fullName",
        label: "Full Name",
        type: "text",
        rules: { required: "Full name is required" }
    },
    {
        name: "email",
        label: "Email",
        type: "text",
        rules: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email"
            }
        }
    },
    {
        name: "phone",
        label: "Phone",
        type: "text",
        rules: {
            required: "Phone number is required",
            pattern: {
                value: /^[0-9]{10,13}$/,
                message: "Enter a valid phone number"
            }
        }
    },
    {
        name: "address1",
        label: "Address Line 1",
        type: "textarea",
        rows: 2,
        rules: { required: "Address is required" }
    },
    {
        name: "address2",
        label: "Address Line 2",
        type: "textarea",
        rows: 3
    },
    {
        name: "city",
        label: "City",
        type: "text",
        rules: { required: "City is required" }
    },
    {
        name: "zip",
        label: "ZIP / Postal Code",
        type: "text",
        rules: {
            required: "ZIP code is required",
            pattern: {
                value: /^[0-9]{4,10}$/,
                message: "Enter a valid ZIP code"
            }
        }
    },
    {
        name: "state",
        label: "State",
        type: "text",
        rules: { required: "State is required" }
    },
    {
        name: "country",
        label: "Country",
        type: "text",
        rules: { required: "Country is required" }
    },
];