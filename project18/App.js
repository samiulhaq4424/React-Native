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


/**
 * 1) UI for Add to Cart with Redux (component: )
*/

import Header from './components/Header';
import Product from './components/Product';

const App = () => {
  const mobUrl = 'https://media.istockphoto.com/id/1161116588/photo/mobile-phone-top-view-with-white-screen.jpg?s=612x612&w=0&k=20&c=6nGTbnTvQUiq2XXSYuT411pC-5B1SUjhpLhE3eGrNIw='; //taken from google

  const products = [ //static data
    { id: 1, name: 'Samsung Mobile', color: 'White', price: '40000', image: mobUrl },
    { id: 2, name: 'Iphone Mobile', color: 'Black', price: '120000', image: mobUrl },
    { id: 3, name: 'Motorola Mobile', color: 'Gray', price: '35000', image: mobUrl },
    { id: 4, name: 'OnePlus Mobile', color: 'Dark Gray', price: '28000', image: mobUrl },
    { id: 5, name: 'Xiaomi Mobile', color: 'Silver', price: '20000', image: mobUrl },
    { id: 6, name: 'Pixel Mobile', color: 'Blue', price: '55000', image: mobUrl },
  ];

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        {
          products.map((item)=>( <Product key={item.id} name={item.name} color={item.color} price={item.price} image={item.image}/> ))
        }
      </ScrollView>
      
      <Text style={{fontSize: 25}}>UI for Add to Cart with Redux</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },






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

export default App;
