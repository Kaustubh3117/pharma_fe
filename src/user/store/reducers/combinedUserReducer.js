import { combineReducers } from 'redux';

import productReducer from './productReducer/productReducer';
import cartReducer from './cartReducer/cartReducer';
import { catalogReducer } from './catalogReducer/catalogReducer';


const userReducer = combineReducers({
    productData: productReducer,
    cart: cartReducer,
    catalog: catalogReducer
});

export default userReducer;
