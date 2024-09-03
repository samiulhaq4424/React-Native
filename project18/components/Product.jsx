/* eslint-disable */


import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView } from 'react-native';


import { useDispatch, useSelector } from 'react-redux'; //using react-redux
import { useEffect, useState } from 'react';

import { addToCart, removeFromCart } from './redux/action';


const Product = ({item}) => {

  const dispatch = useDispatch();

  const noOfCartItems = useSelector((state)=>state.cart); //to remove cart item
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    // console.warn(item);
    dispatch(addToCart(item));
  }

  const handleRemovefromCart = (item) => {
    // console.warn(item);
    dispatch(removeFromCart(item.id));
  }

  useEffect(()=>{ //helps in removing from cart
    let result = noOfCartItems.filter((element)=> element.id === item.id); //jo jo elements cart me ha
    // console.log('Filtered Result:', result); // Logs the result array

    if(result.length){
      setIsAdded(true);
    } else{
      setIsAdded(false);
    }
  },[noOfCartItems]);

  return (
    <View style={{ flex: 1, alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 1, padding: 10 }}>
      <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }} />
      <Text style={{ fontSize: 22 }}>Model: {item.name}</Text>
      <Text style={{ fontSize: 22 }}>Color: {item.color}</Text>
      <Text style={{ fontSize: 22 }}>Price: {item.price}</Text>
        {
           isAdded ?
            <Button title='Remove From cart' onPress={()=>handleRemovefromCart(item)} />
          : 
            <Button title='Add to cart' onPress={()=>handleAddToCart(item)} />
        }
    </View>
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

export default Product;

