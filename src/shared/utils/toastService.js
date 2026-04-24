let toast;

export const setToast = (toastRef) => {
    toast = toastRef;
};

export const showToast = (severity, summary, detail) => {
    if (toast) {
        toast.show({ severity: severity, summary: summary, detail: detail });
    }
};
