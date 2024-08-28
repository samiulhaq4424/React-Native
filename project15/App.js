/* eslint-disable */


// https://jsonplaceholder.typicode.com/

import React from 'react';

import { useEffect, useState } from 'react';

import {
  View,
} from 'react-native';

/**
 * 1) Simple API Call (component: ApiCall)
 * 2) List with API Data (component: ListApi)
 * 3) FlatList with API data (component: FlatListApi)
*/

import ApiCall from './Components/ApiCall';
import ListApi from './Components/ListApi';
import FlatListApi from './Components/FlatListApi';


const App = () => {

  return (
    
    <View>

     {/* <ApiCall/> */}

     {/* <ListApi/> */}

     <FlatListApi/>
      
    </View>
  );
};


export default App;

