import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

import { environment } from "../../../environment";
import { ADD_ITEM_TO_CART, GET_CART_COUNT, GET_CART_ITEMS, REMOVE_CART_ITEM, SET_CART_COUNT, SET_CART_ITEMS, UPDATE_CART_ITEM_QUANTITY } from "../../actionTypes/cartConstants/cartConstants";
import { showToast } from "../../../../shared/utils/toastService";
import { COMMON_ERROR_MESSAGE, TOAST_SUMMARY_ERROR } from "../../../../shared/constant/constants";
import { SET_LOADER } from "../../../../shared/store/actionTypes/commonActionType";

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

function* addItemToCart(action) {
    try {
        yield put({ type: SET_LOADER, data: true })
        yield call(axios.post, environment.cart.addItemToCart, action.payload)
        yield put({ type: GET_CART_COUNT, payload: action.payload.user_id })
        yield put({ type: SET_LOADER, data: false })
        showToast("success", "", "Item Added To Cart")
    } catch (error) {
        yield put({ type: SET_LOADER, data: false })
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error("Error Adding Cart Item:", error);
    }
}

function* removeCartItem(action) {
    try {
        yield put({ type: SET_LOADER, data: true })
        yield call(axios.delete, environment.cart.removeCartItem, { data: action.payload })
        yield put({ type: GET_CART_ITEMS, payload: action.payload.user_id })
        yield put({ type: GET_CART_COUNT, payload: action.payload.user_id })
        yield put({ type: SET_LOADER, data: false })
        showToast("success", "", "Item Removed From Cart")
    } catch (error) {
        yield put({ type: SET_LOADER, data: false })
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error("Error Removing Cart Item:", error);
    }
}

function* updateCartItemQuantity(action) {
    try {
        const response = yield call(axios.put, environment.cart.updateCartItemQuantity, action.payload)
        if (response.data.success) {
            yield put({ type: GET_CART_ITEMS, payload: action.payload.user_id })
        }
        else {
            showToast("", "", response.data.message || COMMON_ERROR_MESSAGE);
        }
    } catch (error) {
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error("Error Updating Cart Item Quantity:", error);
    }
}


export default function* watchCartSaga() {
    yield takeLatest(GET_CART_COUNT, getCartCountSaga);
    yield takeLatest(GET_CART_ITEMS, getCartItemsSaga);
    yield takeLatest(ADD_ITEM_TO_CART, addItemToCart);
    yield takeLatest(REMOVE_CART_ITEM, removeCartItem);
    yield takeLatest(UPDATE_CART_ITEM_QUANTITY, updateCartItemQuantity);
}