import { combineReducers } from 'redux';
import productReducer from './productReducer/productReducer';
import cartReducer from './cartReducer/cartReducer';


const userReducer = combineReducers({
    productData: productReducer,
    cart: cartReducer
});

export default userReducer;
