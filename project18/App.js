/* eslint-disable */

import React from 'react';


import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ProductWrapper from './components/ProductWrapper';
import UsersList from './components/UsersList';


/**
 * 1) UI for add to cart with Redux (component: AddToCart)
  NOTE:
 * a) Chnages are made in index.js file (check it)
 * b) Redux Saga: Works with Redux and is not used standalone in React Native.
*/


function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ProductWrapper} />
        <Stack.Screen name='Users' component={UsersList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({










  container: {
    flex:1,
  },
  wrapper: {
    flex:1,
  },
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 10,
    marginBottom: 5,
    height: 40,
    width: 350,
  },
  text: {
    fontSize: 22,  
    fontWeight: '600',
  },
  errorText: {
    fontSize: 15, 
    color: 'red', 
    marginLeft: 10,
  },
})

export default App;

