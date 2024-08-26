/* eslint-disable */

import React from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';


/**
 *  1) To check Platform(android/ios) and react-native version
 *  2) Install NPM package for Web View in React-Native
*/

import PlatformCheck from './components/PlatformCheck';
import InstallPackage from './components/InstallPackage';

const App = () => {
  

  return (
    <View style={styles.main}>
      
      {/* <PlatformCheck/> */}

      <InstallPackage/>

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1, // Makes the container fill the screen
  },
  
  text: {
    fontSize:22, 
    color: 'green', 
    marginBottom: 40,
  },

  check1: {
    color: Platform.OS === 'android' ? 'orange' : 'blue',
    fontSize: 30,
    marginBottom: 50,
    marginTop: 50,
  },

  check2: {
    fontSize: 18, 
    borderTopWidth: 2, 
    marginBottom: 8,
  },
});

export default App;
