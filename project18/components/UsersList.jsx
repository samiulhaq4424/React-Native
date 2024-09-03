/* eslint-disable */

import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { useSelector } from 'react-redux'; // allows us to extract any data from the Redux store, depending on what our component needs to 

const UsersList = () => {
  
  return (
    <View>
      
      <Text style={styles.headerText}>User List Screen</Text>

    </View>
  );
}


const styles = StyleSheet.create({
  headerText: {
    fontSize: 30, 
    textAlign: 'center',
  },











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

export default UsersList;

