import { env } from "../shared/utils/config";

const apiURL = env === 'PROD' ? process.env.REACT_APP_PROD_BACKEND_URL : process.env.REACT_APP_LOCAL_BACKEND_URL;

export const environment = {
    products: {
        getAllProducts: `${apiURL}/products/`,
        combinedProductDetails: `${apiURL}/products/combined_data/`,
        getProductById: `${apiURL}/products/get_product_by_id?product_id=:product_id`,
    },
    cart: {
        getCartCount: `${apiURL}/carts/get_cart_count?user_id=:user_id`,
    },
}