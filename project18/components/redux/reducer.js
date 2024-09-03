/* eslint-disable */

import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialState = [];

export const cartReducer = (state=initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      let newState = state.filter((item)=> item.id !==action.payload); // as from Product.js we are sending item.id i.e. removeFromCart(item.id) which is in action, therefore action.payload is compared with item.id
      return newState; 

    default:
      return state; //by default jo state ha wahi return kar do
  }
}