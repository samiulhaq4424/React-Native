/* eslint-disable */

import { useState } from 'react';

import {
  Text,
  View, 
  Button,
  TextInput,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // Create a stack navigator


function PassDataStackNav() {

  const LeftBtnAction = () =>{
    console.warn('Left Button Pressed !!!!!');
  }

  return (
  
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{ 
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
                fontSize: 25,
            },
          }} >
        <Stack.Screen name='Log In' component={Login} 
          options={{
            headerTitle: () => <Button title='Left' onPress={LeftBtnAction} />,
            headerRight: () => <SearchInput/>, 
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontSize: 40,
            },
        }}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


const SearchInput = () =>{
  return (
      <TextInput placeholder='Search' style={{borderWidth: 2, height: 40, width: 120}}/>
  );
}


// here props is passed to Home component by Stack.Screen
const Login = (props)=> { 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNavigate = (props) => {
    // Navigate to the Home screen and pass the data
    props.navigation.navigate('Home', { name, email });

    // Clear the name and email state
    setName('');
    setEmail('');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue'}}>
      <Text style={{fontSize: 30}}>Log In Screen</Text>

      <TextInput 
        placeholder='Enter your Name' 
        onChangeText={(text) => setName(text)} // Handle text changes
        value={name} // Bind value to 'state' i.e. name so we can clear it
        style={{borderWidth: 2, height: 40, width: 200, marginBottom: 10, marginTop: 40}}
      />

      <TextInput 
        placeholder='Enter your Email' 
        onChangeText={(text) => setEmail(text)} // Handle text changes
        value={email} // Bind value to 'state' i.e. email so we can clear it
        style={{borderWidth: 2, height: 40, width: 200, marginBottom: 40}}
      />

      <Button 
          title='Go To Home' 
          onPress={()=> handleNavigate(props)} //passing dynamic data to 'Home'
      />
    </View>
  );
}


const Home = (props)=> { 
  
  console.warn(props.route.params); // 'props.route.params' will give the entire info which is passed to it from 'Log In' page

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Text style={{fontSize: 22}}>Name: {props.route.params.name}</Text>
      <Text style={{fontSize: 22, marginBottom: 50}}>Email: {props.route.params.email}</Text>
      <Button 
          title='Go To Details' 
          onPress={()=> props.navigation.navigate('Details', {name: 'sam', email: 'abc@hello.com'})} //passing static data to 'Details'
      /> 
    </View>
  );
}


const Details = (props)=> { 

  //short way using destructing to pass data
  const {name, email} = props.route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'coral'}}>
      <Text style={{fontSize: 30}}>Details Screen</Text>
      <Text style={{fontSize: 22}}>Name: {name}</Text>
      <Text style={{fontSize: 22, marginBottom: 50}}>Email: {email}</Text>
      <Button title='Go To Log In' onPress={()=> props.navigation.navigate('Log In')}/>
    </View>
  );
}

export default PassDataStackNav;

