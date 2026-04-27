// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from '../user/store/reducers/combinedUserReducer';
import { commonReducer } from '../shared/store/reducers/commonReducer';

const combinedReducers = combineReducers({
    user: userReducer,
    common: commonReducer
});

export default combinedReducers;