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
  Image,
  Button
} from 'react-native';


const Product = ({name, color, price, image}) => {
  
  return (
    <View style={{alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'orange', padding: 10}}>
      <Text style={{fontSize: 24}}>{name}</Text>
      <Text style={{fontSize: 24}}>{color}</Text>
      <Text style={{fontSize: 24}}>{price}</Text>
      <Image style={{height: 200, width: 200, marginBottom: 10}} source={{uri: image}} />
      <Button title='Add to Cart' />
    </View>
  );
};

const styles = StyleSheet.create({











  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Product;
