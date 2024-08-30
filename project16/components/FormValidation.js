/* eslint-disable */

import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const FormValidation = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);


  const saveData = async () =>{
    // if(!name){
    //   setNameError(true);
    // } else{
    //   setNameError(false);
    // }

    // if(!age){
    //   setAgeError(true);
    // } else{
    //   setAgeError(false);
    // }

    // if(!email){
    //   setEmailError(true);
    // } else{
    //   setEmailError(false);
    // }

    //shorter tha if-else
    setNameError(!name ? true : false);
    setAgeError(!age ? true : false);
    setEmailError(!email ? true : false);

    if(!name || !age || !email){
      return false;
    }

    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type' : 'Application/json'
      },
      body: JSON.stringify({name,age,email})
    })

    //just to check
    if(result){
      console.warn('Data added');
    }
    setName('');
    setAge('');
    setEmail('');
  }


  return (
    <View>
      
      <Text style={{fontSize: 25, color: 'green', marginBottom: 30, textAlign: 'center'}}>Simple Form Validation</Text>
      <View>
        <Text style={styles.text}>Name: </Text>
        <TextInput
          style= {styles.input}
          placeholder='Enter Your Name'
          value= {name}
          onChangeText={(text)=>setName(text)}
        />
        {
          nameError ? <Text style={styles.errorText}>Please Enter Valid Name !!!!</Text> : ''
        }
      </View>

      <View>
        <Text style={styles.text}>Age: </Text>
        <TextInput
          style= {styles.input}
          placeholder='Enter Your Age'
          value= {age}
          onChangeText={(text)=>setAge(text)}
        />
          {
          ageError ? <Text style={styles.errorText}>Please Enter Valid Age !!!!</Text> : ''
        }
      </View>

      <View>
        <Text style={styles.text}>Email: </Text>
        <TextInput
          style= {styles.input}
          placeholder='Enter Your Email'
          value= {email}
          onChangeText={(text)=>setEmail(text)}
        />
        {
          emailError ? <Text style={styles.errorText}>Please Enter Valid Email !!!!</Text> : ''
        }
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
  errorText: {
    fontSize: 15, 
    color: 'red', 
    marginLeft: 10,
  },
})

export default FormValidation;

