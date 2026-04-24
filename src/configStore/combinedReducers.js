// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from '../user/store/reducers/combinedUserReducer';

const combinedReducers = combineReducers({
    user: userReducer,
});

export default combinedReducers;