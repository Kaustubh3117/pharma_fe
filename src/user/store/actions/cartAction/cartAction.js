import { ADD_ITEM_TO_CART, GET_CART_COUNT, GET_CART_ITEMS, REMOVE_CART_ITEM } from "../../actionTypes/cartConstants/cartConstants";

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

export const addItemToCart = (payload) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: payload
    }
}

export const removeCartItem = (payload) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: payload
    }
}