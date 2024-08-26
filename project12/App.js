/* eslint-disable */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform
} from 'react-native';

/**
 *  1) To check Platform(android/ios) and react-native version
*/

import PlatformCheck from './components/PlatformCheck'

const App = () => {
  
  return (
    <View>
      
      <PlatformCheck/>

    </View>
  );
};

const styles = StyleSheet.create({

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
