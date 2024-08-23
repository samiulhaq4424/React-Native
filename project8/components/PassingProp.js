/* eslint-disable */

import { Component } from 'react';
import {Text, View, Button,TextInput,StyleSheet,} from 'react-native';



class PassingProp extends Component{
  render(){
    //props is a special keyword and is used by convention to pass data from one component to another. You cannot change the name props because it is a reserved property used by React to pass down data. 
    console.warn(this.props); // Accessing prop from the 'props' object
    return (
      <View>
        <Text style={{fontSize: 25, color: 'green'}}>PassingProp Component</Text>
        <Text style={{fontSize: 20}}>Passed Name: {this.props.name}</Text>
        <Text style={{fontSize: 20}}>Passed Age: {this.props.age}</Text>
      </View>
    );
  }
}

export default PassingProp;
