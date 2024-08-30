/* eslint-disable */

import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function PostApiInputField() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const saveData = async () =>{
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type' : 'Application/json'
      },
      body: JSON.stringify({name,age,email})
    })

    /* just to see what is stored in result */
    const dataObjFetched = await result.json();
    if(dataObjFetched){
      console.warn(dataObjFetched);
    }
    setName('');
    setAge('');
    setEmail('');
  }

  return (
    <View>
      
      <Text style={{fontSize: 25, color: 'green', marginBottom: 30, textAlign: 'center'}}>Post API with Input Field (Dynamic Data)</Text>
      <View>
        <Text style={styles.text}>Name: </Text>
        <TextInput
          style= {styles.input}
          placeholder='Enter Your Name'
          value= {name}
          onChangeText={(text)=>setName(text)}
        />
      </View>

      <View>
        <Text style={styles.text}>Age: </Text>
        <TextInput
          style= {styles.input}
          placeholder='Enter Your Age'
          value= {age}
          onChangeText={(text)=>setAge(text)}
        />
      </View>

      <View>
        <Text style={styles.text}>Email: </Text>
        <TextInput
          style= {styles.input}
          placeholder='Enter Your Email'
          value= {email}
          onChangeText={(text)=>setEmail(text)}
        />
      </View>
      
      <Button title='Save Data' onPress={saveData} />
    </View>
  );
}

const styles = StyleSheet.create({
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
})

export default PostApiInputField;

