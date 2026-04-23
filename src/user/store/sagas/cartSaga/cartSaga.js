import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { GET_CART_COUNT, SET_CART_COUNT } from "../../constants/cartConstants/cartConstants";
import { environment } from "../../../environment";

function* getCartCountSaga(action) {
    try {
        const response = yield call(axios.get, `${environment.cart.getCartCount.replace(':user_id', action.payload)}`);
        yield put({ type: SET_CART_COUNT, payload: response.data.data.cart_count });
    } catch (error) {
        console.error("Error fetching cart count:", error);
    }
}

export default function* watchCartSaga() {
    yield takeLatest(GET_CART_COUNT, getCartCountSaga);
}