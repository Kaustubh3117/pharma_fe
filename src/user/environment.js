import { env } from "../shared/utils/config";

const apiURL = env === 'PROD' ? process.env.REACT_APP_PROD_BACKEND_URL : process.env.REACT_APP_LOCAL_BACKEND_URL;

export const environment = {
    products: {
        getAllProducts: `${apiURL}/products/`,
        combinedProductDetails: `${apiURL}/catalogs/combined_catalog/`,
        getProductById: `${apiURL}/products/get_product_by_id?product_id=:product_id`,
    },
    cart: {
        getCartCount: `${apiURL}/carts/get_cart_count?user_id=:user_id`,
        getCartItems: `${apiURL}/carts/get_cart_items?user_id=:user_id`,
        addItemToCart: `${apiURL}/carts/add_to_cart`,
        removeCartItem: `${apiURL}/carts/remove_cart_item`
    },
    catalog: {
        getCatalog: `${apiURL}/catalogs/catolog_view?catalog_type=:catalog_type`,
        getProductsByCatalogId: `${apiURL}/catalogs/productsByCatalogId`
    }
}