import {useState} from 'react';

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';


const InputText = ()=>{
  
  const [name, setName]=useState('');
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red', marginBottom: 10}}>Handle Text Input</Text>

      <Text style={{fontSize: 20, color: 'blue'}}>Your name entered is: {name}</Text>
      <TextInput
        style ={styles.textInput}
        placeholder = 'Enter your name'
        onChangeText = {(text)=>setName(text)} //onChangeText is same as onChange in react
        value = {name} //to make input field empty after pressing the button
      ></TextInput>
      <Button title='Clear Input value' onPress={()=>setName('')}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  textInput:{
    fontSize: 18, 
    color: 'black', 
    borderWidth: 2, 
    borderColor: 'blue', 
    margin: 10,
  },
});

export default InputText;