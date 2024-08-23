/* eslint-disable */


import React from 'react';
import { Component } from 'react';

import {Text, View, Button,TextInput,StyleSheet,} from 'react-native';

import Student from './components/Student';


//Note: "class" ke andar const use nai kar sakte

class App extends Component{

  fruit = () =>{
    console.warn('Apple');
  }

  render(){ //class ke andar kch return nai karsakte; render ke andar return karnge agr kch return karna hua
    return (
      <View>
        <Text style={{fontSize: 25}}>Class Component</Text>
        <TextInput placeholder='Enter your name' />
        {/* to pass the method reference, we are using this.fruit ; 
            use onPress={() => this.fruit()} if you need to perform additional logic or pass arguments. */}
        <Button title='Press Me' onPress={this.fruit}/> 

        <Student/>
      </View>
    );
  }
}

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

export default App;
