/* eslint-disable */


// https://jsonplaceholder.typicode.com/

import React from 'react';

import {
  View,
} from 'react-native';

/**
 * 1) Simple API Call (component: ApiCall)
 * 2) List with API (component: ListApi)
*/

import ApiCall from './Components/ApiCall';
import ListApi from './Components/ListApi';


const App = () => {
  
  return (
    
    <View>

     {/* <ApiCall/> */}
     
     <ListApi/>
      
    </View>
  );
};


export default App;
