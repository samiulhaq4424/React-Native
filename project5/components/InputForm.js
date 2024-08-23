import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useState } from 'react';


const InputForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayDetails, setDisplay] = useState(false);

  const resetDetails = ()=>{
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  }

  return(
    <View>

      <Text style={{fontSize: 30, color: 'red', borderTopWidth: 4, marginTop: 10}}>Simple Form in react-native</Text>

      <TextInput 
        style = {styles.textInput}
        placeholder = 'Enter User name'
        onChangeText = {(text)=>setName(text)}
        value = {name}
      />
      
      <TextInput 
        style = {styles.textInput}
        placeholder = 'Enter User email'
        onChangeText = {(text)=>setEmail(text)}
        value = {email}
      />

      <TextInput 
        style = {styles.textInput}
        placeholder = 'Enter User password'
        secureTextEntry = {true} //it will hide what ever is written in password input
        onChangeText = {(text)=>setPassword(text)}
        value = {password}
      />

      {/* using <View> to set styles to <Button>, as Button ke sath styles nai likh sakte */}
      <View style={{marginBottom: 10}}>  
      <Button title='Print Details' color='green' onPress={()=>setDisplay(true)}/>
      </View>
      <Button title='Clear Details' onPress={resetDetails}/>
      
      {/* to display details */}
      <View> 
        {
          displayDetails ?
            <View>
                <Text style={{fontSize: 30}}>Below are the details:</Text>
                <Text style={{fontSize: 20}}>User name is: {name}</Text>
                <Text style={{fontSize: 20}}>Email Id is: {email}</Text>
                <Text style={{fontSize: 20}}>Password is: {password}</Text>
            </View> : ''
        }
      </View>

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

export default InputForm;