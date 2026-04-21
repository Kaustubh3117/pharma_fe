import { combineReducers } from 'redux';
import productReducer from './productReducer/productReducer';


const userReducer = combineReducers({
    productData: productReducer,
});

export default userReducer;
