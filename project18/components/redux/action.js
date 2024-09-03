/* eslint-disable */


import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";


export function addToCart(item){
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

export function removeFromCart(itemID){
  return {
    type: REMOVE_FROM_CART,
    payload: itemID
  };
}
