import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { environment } from "../../../environment";
import { GET_PRODUCT_BY_ID, SET_PRODUCT_BY_ID } from "../../actionTypes/productConstants/productConstants";
import { showToast } from "../../../../shared/utils/toastService";
import { COMMON_ERROR_MESSAGE, TOAST_SUMMARY_ERROR } from "../../../../shared/constant/constants";

function* getProductByIdSaga(action) {
    try {
        const env_url = environment.products.getProductById.replace(':product_id', action.payload);
        const response = yield call(axios.get, env_url);
        yield put({ type: SET_PRODUCT_BY_ID, payload: response.data.data });
    } catch (error) {
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error('Error fetching product details by ID:', error);
    }
}

export default function* watchCombinedProductDetails() {
    yield takeLatest(GET_PRODUCT_BY_ID, getProductByIdSaga);
}