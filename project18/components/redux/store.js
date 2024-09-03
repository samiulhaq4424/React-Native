/* eslint-disable */

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";//our root reducer

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();// Creating the saga middleware

import SagaData from "./SagaData";//saga

const store = configureStore({ //way to write store
  reducer: rootReducer, // Use the `reducer` key here
  middleware: ()=>[sagaMiddleware], // Mount saga on the store and use the 'middleware' key
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(SagaData);// Then run the saga

export default store;
