import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import products from './products';

const rootReducer = combineReducers({
    products,
    routing
});

export default rootReducer;
