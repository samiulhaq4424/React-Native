/* eslint-disable */

import React from 'react';

import {StyleSheet, View} from 'react-native';


/**
 *  1) To check Platform(android/ios) and react-native version (component: PlatformCheck)
 *  2) Install NPM package for Web View in React-Native (component: InstallPackage)
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
});

export default App;
