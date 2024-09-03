/* eslint-disable */

import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';


/**
 * 1) Using Ref using useRef() (component: Ref)
 * 2) Change Android App Icon [android->app->src->main->res->replace the folder with files]
      Link: https://easyappicon.com/
      Link: https://www.youtube.com/watch?v=mUFnr9uIlHs&list=PL8p2I9GklV468O2wk-n8Q1KmtMhnHHj4C&index=62

 * 3) async-storage in React-Native (component: Async_Storage)
*/
import Ref from './components/Ref';
import Async_Storage from './components/Async_Storage';


const App = () => {
  
  return (
      
    // <Ref/> 
    
    <Async_Storage/>

  );
};

export default App;
