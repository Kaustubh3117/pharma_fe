import axios from "axios";
import { GET_COMBINED_PRODUCT_DETAILS, SET_COMBINED_PRODUCT_DETAILS } from "../../constants/productConstants/productConstants";
import { call, put, takeLatest } from "redux-saga/effects";
import { env } from "../../../environment";

function* combinedProductDetailsSaga() {
    try {
        // Simulate API call to fetch combined product details
        const env_url = env.products.get_all_products;
        const response = yield call(axios.get, env_url);
        // Dispatch action to set combined product details in the store
        yield put({ type: SET_COMBINED_PRODUCT_DETAILS, payload: response.data.data });
    } catch (error) {
        console.error('Error fetching combined product details:', error);
    }
}

export default function* watchCombinedProductDetails() {
    yield takeLatest(GET_COMBINED_PRODUCT_DETAILS, combinedProductDetailsSaga);
}