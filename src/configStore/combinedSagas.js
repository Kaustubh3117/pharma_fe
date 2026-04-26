// sagas/index.js
import { all } from 'redux-saga/effects';
import watchCombinedProductDetails from '../user/store/sagas/productSaga/productSaga';
import watchCartSaga from '../user/store/sagas/cartSaga/cartSaga';
import { watchCatalog } from '../user/store/sagas/catalogSaga/catalogSaga';

export default function* combinedSagas() {
    yield all([
        watchCombinedProductDetails(),
        watchCartSaga(),
        watchCatalog(),
    ]);
}