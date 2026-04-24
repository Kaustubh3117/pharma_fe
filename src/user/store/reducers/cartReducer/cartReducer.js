import { SET_CART_COUNT } from "../../actionTypes/cartConstants/cartConstants";

const initialState = {
    cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_COUNT:
            return {
                ...state,
                cartCount: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;