import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

import { environment } from "../../../environment";
import { GET_CART_COUNT, GET_CART_ITEMS, SET_CART_COUNT, SET_CART_ITEMS } from "../../actionTypes/cartConstants/cartConstants";
import { showToast } from "../../../../shared/utils/toastService";
import { COMMON_ERROR_MESSAGE, TOAST_SUMMARY_ERROR } from "../../../../shared/constant/constants";

function* getCartCountSaga(action) {
    try {
        const response = yield call(axios.get, `${environment.cart.getCartCount.replace(':user_id', action.payload)}`);
        yield put({ type: SET_CART_COUNT, payload: response.data.data.cart_count });
    } catch (error) {
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error("Error fetching cart count:", error);
    }
}

function* getCartItemsSaga(action) {
    try {
        const response = yield call(axios.get, `${environment.cart.getCartItems.replace(':user_id', action.payload)}`);
        yield put({ type: SET_CART_ITEMS, payload: response.data.data });
    } catch (error) {
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error("Error fetching cart count:", error);
    }
}


export default function* watchCartSaga() {
    yield takeLatest(GET_CART_COUNT, getCartCountSaga);
    yield takeLatest(GET_CART_ITEMS, getCartItemsSaga)
}