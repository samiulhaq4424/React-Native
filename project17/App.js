/* eslint-disable */

import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';
import Ref from './components/Ref';


/**
 * 1) Using Ref using useRef() (component: Ref)
*/


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
});

export default App;
