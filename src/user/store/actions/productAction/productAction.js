import { GET_COMBINED_PRODUCT_DETAILS, GET_PRODUCT_BY_ID } from "../../actionTypes/productConstants/productConstants";

export const getCombinedProductDetails = () => {
    return {
        type: GET_COMBINED_PRODUCT_DETAILS,
    };
};

export const getProductById = (id) => {
    return {
        type: GET_PRODUCT_BY_ID,
        payload: id
    };
};