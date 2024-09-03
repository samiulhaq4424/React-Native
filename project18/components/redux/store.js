/* eslint-disable */

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";//our root reducer

const store = configureStore({ //way to write store
  reducer: rootReducer, // Use the `reducer` key here
});

export default store;
