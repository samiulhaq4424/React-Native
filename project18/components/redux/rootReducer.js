/* eslint-disable */

import { combineReducers } from "redux"; //will have all the reducers combined

import { cartReducer } from "./reducer"; // our file

export default combineReducers({
  cart: cartReducer
});