/* eslint-disable */

import { useRef } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';


const Ref = () => {

  const input = useRef();

  const updateInput = () => {
    /**
     * 'input.current' now points to the TextInput component. The focus() method is a built-in method for input elements that sets the focus to the TextInput, making it active and ready for user input.
     * Focuses the TextInput when the button is pressed
     */
    input.current.focus(); // Focuses the TextInput

    //'input.current.setNativeProps' method allows to directly modify native properties directly by passing an object with the properties we want to update of a component without going through the React rendering cycle.
    input.current.setNativeProps({
      fontSize: 30,
      color: 'orange',
      borderWidth: 2,
      borderColor: 'red',
    })
  }
  
  return (
    <View style={styles.conatainer}>
      <Text style={styles.text}>Ref in React Native</Text>

      <TextInput
        style={styles.input}
        ref = {input} // Assigns the ref
        placeholder='Enter Your name'
      />

      <TextInput
        style={styles.input}
        placeholder='Enter Your Password'
      />
      
      <View style={{flex:1, alignItems: 'center'}}>
        <Button title='Update Input' onPress={updateInput} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    margin: 10,
  },
});

export default Ref;
