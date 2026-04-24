import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import combinedSagas from './combinedSagas';
import combinedReducers from './combinedReducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(combinedSagas);

export const configStore = store;
