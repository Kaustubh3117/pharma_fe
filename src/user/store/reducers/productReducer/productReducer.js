import { SET_COMBINED_PRODUCT_DETAILS } from "../../constants/productConstants/productConstants";

const initialStore = {
    combinedProductDetails: null,
}

const productReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_COMBINED_PRODUCT_DETAILS:
            return {
                ...state,
                combinedProductDetails: action.payload,
            };
        default:
            return state;
    }
}

export default productReducer;