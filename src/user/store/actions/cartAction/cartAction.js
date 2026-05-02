import { GET_CART_COUNT, GET_CART_ITEMS } from "../../actionTypes/cartConstants/cartConstants";

export const getCartCount = (user_id) => {
    return {
        type: GET_CART_COUNT,
        payload: user_id,
    };
};

export const getCartItems = (user_id) => {
    return {
        type: GET_CART_ITEMS,
        payload: user_id
    }
}