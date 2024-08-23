/* eslint-disable */


import React from 'react';
import { Component } from 'react';

import {Text, View, Button,TextInput,StyleSheet,} from 'react-native';

import Student from './components/Student';
import PassingProp from './components/PassingProp';

/**
 * 1) Class Component
 * 2) State & Props in class component
*/
//Note: "class" ke andar const use nai kar sakte

class App extends Component{

  fruit = () =>{
    console.warn('Apple');
  }

  constructor(){
    super(); // Call the parent class's constructor
    this.state={ // Initialize state
      name: 'Samiul',
      age: 26,
    }
  }

  updateName(val){
    this.setState({name: val, age: 18}); //setSate by default function hota h
  }

  render(){ //class ke andar kch return nai karsakte; render ke andar return karnge agr kch return karna hua
    return (
      <View>
        <Text style={{fontSize: 25, color: 'purple'}}>Class Component</Text>
        <TextInput placeholder='Enter your name' />
        {/* to pass the method reference, we are using this.fruit ; 
            use onPress={() => this.fruit()} if you need to perform additional logic or pass arguments. */}
        <Button title='Press Me' onPress={this.fruit}/> 
        <Student/>
        


        <Text style={{fontSize: 25, color: 'purple',  borderTopWidth: 5}}>State & Props in Class Component</Text>
        <Text style={{fontSize: 25}}>Name: {this.state.name}</Text>
        <Text style={{fontSize: 25}}>Age: {this.state.age}</Text>
        <TextInput style={styles.textInput} placeholder='Enter your name' onChangeText={(text) => this.updateName(text)}/>

        <PassingProp name={this.state.name} age={this.state.age}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput:{
    fontSize: 25, 
    borderWidth: 2, 
    borderColor: 'blue',
    margin: 5,
  },
});

export default App;
