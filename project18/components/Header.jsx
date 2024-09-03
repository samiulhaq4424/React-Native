/* eslint-disable */

import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { useSelector } from 'react-redux'; // allows us to extract any data from the Redux store, depending on what our component needs to render or calculate.

/*
   We have a root reducer that combines multiple reducers, and we want to access data from a specific reducer, we would use useSelector.

   If we want to access data from cartReducer, we would use:
      const cartData = useSelector((state) => state.cart);
*/

const Header = () => {
  const cartData = useSelector((state)=>state.cart);//state is a redux state; Accessing the cart state
  // console.warn(cartData); // Debugging

  const [noOfItems, setNoOfItems] = useState(0);
  useEffect(()=>{
    setNoOfItems(cartData.length);
  },[cartData]);

  return (
    <View>
      
      <Text style={styles.headerText}>
        <View style={{backgroundColor: 'yellow', height: 40, width: 40}}><Text style={{fontSize: 15, textAlign: 'center', padding: 10}}>{noOfItems}</Text></View>
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({
  headerText: {
    fontSize: 30, 
    textAlign: 'right', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    backgroundColor: 'skyblue',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
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

export default Header;

