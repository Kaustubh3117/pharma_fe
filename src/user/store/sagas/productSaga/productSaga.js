import axios from "axios";
import { GET_COMBINED_PRODUCT_DETAILS, GET_PRODUCT_BY_ID, SET_COMBINED_PRODUCT_DETAILS, SET_PRODUCT_BY_ID } from "../../constants/productConstants/productConstants";
import { call, put, takeLatest } from "redux-saga/effects";
import { environment } from "../../../environment";

function* combinedProductDetailsSaga() {
    try {
        // Simulate API call to fetch combined product details
        const env_url = environment.products.combinedProductDetails;
        const response = yield call(axios.get, env_url);
        // Dispatch action to set combined product details in the store
        yield put({ type: SET_COMBINED_PRODUCT_DETAILS, payload: response.data.data });
    } catch (error) {
        console.error('Error fetching combined product details:', error);
    }
}

function* getProductByIdSaga(action) {
    try {
        const env_url = environment.products.getProductById.replace(':product_id', action.payload);
        const response = yield call(axios.get, env_url);
        yield put({ type: SET_PRODUCT_BY_ID, payload: response.data.data });
    } catch (error) {
        console.error('Error fetching product details by ID:', error);
    }
}

export default function* watchCombinedProductDetails() {
    yield takeLatest(GET_COMBINED_PRODUCT_DETAILS, combinedProductDetailsSaga);
    yield takeLatest(GET_PRODUCT_BY_ID, getProductByIdSaga);
}