import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_CATALOG, GET_COMBINED_CATALOG, GET_PRODUCTS_BY_CATALOG_ID, SET_CATALOG, SET_COMBINED_CATALOG } from "../../actionTypes/catalogConstants/catalogConstants";
import { COMMON_ERROR_MESSAGE, TOAST_SUMMARY_ERROR } from "../../../../shared/constant/constants";
import { showToast } from "../../../../shared/utils/toastService";
import { environment } from "../../../environment";
import { SET_LOADER } from "../../../../shared/store/actionTypes/commonActionType";

function* getCombinedCatalogSaga() {
    try {
        yield put({ type: SET_LOADER, data: true })
        const env_url = environment.products.combinedProductDetails;
        const response = yield call(axios.get, env_url);
        yield put({ type: SET_COMBINED_CATALOG, payload: response.data.data });
    } catch (error) {
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error('Error fetching combined product details:', error);
    } finally {
        yield put({ type: SET_LOADER, data: false })
    }
}

function* getCatalogSaga(action) {
    try {
        yield put({ type: SET_LOADER, data: true })
        const env = environment.catalog.getCatalog.replace(":catalog_type", action.payload)
        const response = yield call(axios.get, env)
        yield put({ type: SET_CATALOG, payload: response.data.data })
    } catch (error) {
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error('Error fetching catalog:', error);
    } finally {
        yield put({ type: SET_LOADER, data: false })
    }
}

function* getProductByCatalogIdSaga(action) {
    try {
        yield put({ type: SET_LOADER, data: true })
        const env = environment.catalog.getProductsByCatalogId
        const response = yield call(axios.post, env, action.payload)
        yield put({ type: SET_CATALOG, payload: response.data.data })
    } catch (error) {
        showToast("error", TOAST_SUMMARY_ERROR, COMMON_ERROR_MESSAGE);
        console.error('Error fetching catalog:', error);
    } finally {
        yield put({ type: SET_LOADER, data: false })
    }
}


export function* watchCatalog() {
    yield takeEvery(GET_COMBINED_CATALOG, getCombinedCatalogSaga);
    yield takeLatest(GET_CATALOG, getCatalogSaga);
    yield takeEvery(GET_PRODUCTS_BY_CATALOG_ID, getProductByCatalogIdSaga)
}