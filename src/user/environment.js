import { environment } from "../config";

const apiURL = environment === 'PROD' ? process.env.REACT_APP_PROD_BACKEND_URL : process.env.REACT_APP_BACKEND_URL;

export const env = {
    products: {
        get_all_products: `${apiURL}/products/`,
    }
}