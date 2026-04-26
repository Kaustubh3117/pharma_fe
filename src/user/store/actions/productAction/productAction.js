import { GET_PRODUCT_BY_ID } from "../../actionTypes/productConstants/productConstants";

export const getProductById = (id) => {
    return {
        type: GET_PRODUCT_BY_ID,
        payload: id
    };
};