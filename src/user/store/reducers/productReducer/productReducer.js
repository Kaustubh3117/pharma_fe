import { SET_COMBINED_PRODUCT_DETAILS, SET_PRODUCT_BY_ID } from "../../constants/productConstants/productConstants";

const initialStore = {
    combinedProductDetails: null,
    productDetailsById: null,
}

const productReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_COMBINED_PRODUCT_DETAILS:
            return {
                ...state,
                combinedProductDetails: action.payload,
            };
        case SET_PRODUCT_BY_ID:
            return {
                ...state,
                productDetailsById: action.payload,
            }
        default:
            return state;
    }
}

export default productReducer;