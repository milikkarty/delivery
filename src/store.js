import { legacy_createStore as createStore, combineReducers } from "redux";
import { menuReducer } from "./features/menu/menuSlice";
import { searchReducer } from "./features/search/searchSlice";
import { cartReducer } from "./features/cart/cartSlice";
import { currencyFilterReducer } from './features/currencyFilter/currencyFilterSlice';

export const store = createStore(combineReducers({
    menu: menuReducer,
    search: searchReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer
}));