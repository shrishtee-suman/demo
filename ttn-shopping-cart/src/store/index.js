import userReducer from '../reducer/userReducer';
import { combineReducers } from 'redux';
import { createStore } from "redux";
import cartReducer from "../reducer/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    userReducer,
    cartReducer,
});

export const store = createStore(reducer,composeWithDevTools());

