import { GET_CART_COUNT } from "../../constants/cartConstants/cartConstants";

export const getCartCount = (user_id) => {
    return {
        type: GET_CART_COUNT,
        payload: user_id,
    };
};