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


*/
import Ref from './components/Ref';


const App = () => {

  
  
  return (
    <View style={styles.conatainer}>
      
      <Ref/>



    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    margin: 10,
  },
});

export default App;
