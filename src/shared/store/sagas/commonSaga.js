import { put, takeLatest } from "redux-saga/effects";
import { GET_LOADER, SET_LOADER } from "../actionTypes/commonActionType";

function* setLoader(action) {
    yield put({ type: SET_LOADER, data: action.showLoader })
}

export function* watchCommonSaga() {
    yield takeLatest(GET_LOADER, setLoader)
}