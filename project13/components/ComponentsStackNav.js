/* eslint-disable */

import {
  Text,
  View, 
  Button,
  TextInput,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // Create a stack navigator


function ComponentsStackNav() {

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
            headerTitle: () => <Button title='Left' onPress={LeftBtnAction} />, //can be Button, Text, TextInput, etc; for Left Button
            headerRight: () => <SearchInput/>, //for Right Button
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

const SearchInput = () =>{ //Search component for Stack Navigation
  return (
    <View style={{borderWidth: 2, height: 40, width: 120}} >
      <TextInput placeholder='Search'/>
    </View>
  );
}


// here props is passed to Home component by Stack.Screen
const Login = (props)=> { //LogIn component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue'}}>
      <Text style={{fontSize: 30}}>Log In Screen</Text>
      <Button title='Go To Home' onPress={()=> props.navigation.navigate('Home')}/>
    </View>
  );
}

const Home = (props)=> { //Home Component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Button title='Go To Details' onPress={()=> props.navigation.navigate('Details')}/>
    </View>
  );
}

const Details = (props)=> { //Details component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'coral'}}>
      <Text style={{fontSize: 30}}>Details Screen</Text>
      <Button title='Go To Log In' onPress={()=> props.navigation.navigate('Log In')}/>
    </View>
  );
}

export default ComponentsStackNav;

