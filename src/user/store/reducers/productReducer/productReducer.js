import { SET_PRODUCT_BY_ID } from "../../actionTypes/productConstants/productConstants";

const initialStore = {
    productDetailsById: null,
}

const productReducer = (state = initialStore, action) => {
    switch (action.type) {
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