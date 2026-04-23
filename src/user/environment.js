import { environment } from "../config";

const apiURL = environment === 'PROD' ? process.env.REACT_APP_PROD_BACKEND_URL : process.env.REACT_APP_LOCAL_BACKEND_URL;

export const env = {
    products: {
        getAllProducts: `${apiURL}/products/`,
        combinedProductDetails: `${apiURL}/products/combined_data/`,
        getProductById: `${apiURL}/products/:product_id`,
    }
}