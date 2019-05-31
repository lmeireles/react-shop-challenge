import { combineReducers } from "redux";
import products from "./products/reducers";

const appReducer = combineReducers({
  products
});

export default (state, action) => appReducer(state, action);
