// sagas/index.js
import { all } from 'redux-saga/effects';
import watchCombinedProductDetails from '../user/store/sagas/productSaga/productSaga';

export default function* combinedSagas() {
    yield all([
        watchCombinedProductDetails(),
    ]);
}