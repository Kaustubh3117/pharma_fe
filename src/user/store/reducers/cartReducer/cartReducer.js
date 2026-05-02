import { SET_CART_COUNT, SET_CART_ITEMS } from "../../actionTypes/cartConstants/cartConstants";

const initialState = {
    cartCount: 0,
    cartItems: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_COUNT:
            return {
                ...state,
                cartCount: action.payload,
            }
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state;
    }
};

export default cartReducer;