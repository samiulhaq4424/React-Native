/* eslint-disable */

import { put, takeEvery } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from "./constants";

//Configure Saga Middleware in the Store: Integrate Redux Saga with your Redux store (see: store.js)

function* userList(){
  const url = 'https://dummyjson.com/users';
  let data = yield fetch(url); // Fetching data from the API
  data = yield data.json(); // Converting the response to JSON

  // console.warn('Fetched data in saga', data);

  // Dispatching an action to store the fetched data
  yield put({type: SET_USER_DATA, data});
}


function* SagaData(){
  //takeEvery effect is used to listen for the USER_LIST action type. Whenever an action of this type is dispatched, the userList generator function will be triggered.
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;